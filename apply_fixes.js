const fs = require('fs');

// 1. Update dates in interactives.js for the 6 recent blogs and remove 2025 blogs
let js = fs.readFileSync('js/interactives.js', 'utf8');

const blogsToUpdateDates = ['project-vikas', 'mission-life', 'save-water', 'healthy-lifestyle', 'project-udaan', 'project-jeev'];
blogsToUpdateDates.forEach(key => {
  js = js.replace(new RegExp("('" + key + "'|\\b" + key + "\\b)\\s*:\\s*\\{\\s*(title:\\s*'.*?',\\s*)date:\\s*'30 Jan 2025'|'01 Mar 2025'"), "$1: {\\n    $2date: '09 Jun 2026'");
});

// Remove remaining 2025 blogs (embracing-life, transforming-lives, bachpanshala)
const blogsToDelete = ['embracing-life', 'transforming-lives', 'bachpanshala'];
blogsToDelete.forEach(key => {
  // Regex to remove the whole object definition for these keys
  js = js.replace(new RegExp("('" + key + "'|\\b" + key + "\\b)\\s*:\\s*\\{[\\s\\S]*?\\}\\s*,?", 'g'), '');
});

// Update initContactForm in js
js = js.replace(
  /const name = document\.getElementById\('contactName'\)\.value\.trim\(\);([\s\S]*?)showToast/g,
  `const name = document.getElementById('contactName').value.trim();
    const email = document.getElementById('contactEmail').value.trim();
    const message = document.getElementById('contactMessage').value.trim();
    const subject = encodeURIComponent('New Contact Form Submission from ' + name);
    const body = encodeURIComponent('Name: ' + name + '\\nEmail: ' + email + '\\n\\nMessage:\\n' + message);
    window.location.href = 'mailto:sangeetadhami359@gmail.com?subject=' + subject + '&body=' + body;
    showToast`
);

// Update initVolunteerForm to handle both volunteerForm and volunteerPageForm
const newVolunteerFormJS = `
function initVolunteerForm() {
  const volunteerBtn = document.getElementById('btnVolunteerJoin');
  const volunteerOverlay = document.getElementById('volunteerOverlay');
  
  if (volunteerBtn && volunteerOverlay) {
    const closeBtn = volunteerOverlay.querySelector('.modal-close');
    volunteerBtn.addEventListener('click', (e) => {
      e.preventDefault();
      volunteerOverlay.classList.add('active');
    });
    closeBtn.addEventListener('click', () => volunteerOverlay.classList.remove('active'));
    volunteerOverlay.addEventListener('click', (e) => {
      if (e.target === volunteerOverlay) volunteerOverlay.classList.remove('active');
    });
  }

  const handleVolunteerSubmit = (formId, nameId, emailId, phoneId) => {
    const form = document.getElementById(formId);
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById(nameId).value.trim();
        const email = document.getElementById(emailId).value.trim();
        const phone = document.getElementById(phoneId).value.trim();
        const subject = encodeURIComponent('New Volunteer Application from ' + name);
        const body = encodeURIComponent('Name: ' + name + '\\nEmail: ' + email + '\\nPhone: ' + phone);
        window.location.href = 'mailto:sangeetadhami359@gmail.com?subject=' + subject + '&body=' + body;

        showToast('Thank you! Your volunteer application has been submitted.', 'success');
        form.reset();
        if (volunteerOverlay) volunteerOverlay.classList.remove('active');
      });
    }
  };

  handleVolunteerSubmit('volunteerForm', 'vName', 'vEmail', 'vPhone');
  handleVolunteerSubmit('volunteerPageForm', 'vpName', 'vpEmail', 'vpPhone');
}
`;

js = js.replace(/function initVolunteerForm\(\) \{[\s\S]*?\n\}/, newVolunteerFormJS);
fs.writeFileSync('js/interactives.js', js);

// 2. Update blog.html to remove 2025 cards and update dates for the 6 new ones
let html = fs.readFileSync('blog.html', 'utf8');
blogsToUpdateDates.forEach(key => {
  html = html.replace(new RegExp('(<a href="#" class="blog-read-more" data-id="' + key + '">[\\s\\S]*?</div>\\s*</div>)', 'g'), (match) => {
    return match; // We don't have to change dates here if we just do it via regex on the meta
  });
});

// Since the cards in blog.html have exact formats, let's just replace all "2025" with "2026" for the 6 blogs,
// and delete the remaining 3 cards.
html = html.replace(/<span><i class="far fa-calendar"><\/i> .*? 2025<\/span>/g, '<span><i class="far fa-calendar"></i> 09 Jun 2026</span>');

// Delete the 3 unused 2025 blogs from blog.html
blogsToDelete.forEach(key => {
  const regex = new RegExp('\\s*<!-- Blog \\d+ -->\\s*<div class="card-blog">[\\s\\S]*?<a href="#" class="blog-read-more" data-id="' + key + '">.*?</a>\\s*</div>\\s*</div>', 'g');
  html = html.replace(regex, '');
});

fs.writeFileSync('blog.html', html);

// 3. Add IDs to volunteerPageForm in volunteers.html
let volHtml = fs.readFileSync('volunteers.html', 'utf8');
volHtml = volHtml.replace(
  '<input type="text" class="form-control" placeholder="Enter your name" required>',
  '<input type="text" class="form-control" id="vpName" placeholder="Enter your name" required>'
);
volHtml = volHtml.replace(
  '<input type="email" class="form-control" placeholder="Enter your email" required>',
  '<input type="email" class="form-control" id="vpEmail" placeholder="Enter your email" required>'
);
volHtml = volHtml.replace(
  '<input type="tel" class="form-control" placeholder="e.g. +91 98765 43210" required>',
  '<input type="tel" class="form-control" id="vpPhone" placeholder="e.g. +91 98765 43210" required>'
);
fs.writeFileSync('volunteers.html', volHtml);

console.log('Update script executed successfully');
