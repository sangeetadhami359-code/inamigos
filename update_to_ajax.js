const fs = require('fs');

let js = fs.readFileSync('js/interactives.js', 'utf8');

// Replace contact form mailto with formsubmit ajax
const oldContactMailto = `const subject = encodeURIComponent('New Contact Form Submission from ' + name);
    const body = encodeURIComponent('Name: ' + name + '\\nEmail: ' + email + '\\n\\nMessage:\\n' + message);
    window.location.href = 'mailto:sangeetadhami359@gmail.com?subject=' + subject + '&body=' + body;`;

const newContactAjax = `const payload = {
      _subject: 'New Contact Form Submission from ' + name,
      Name: name,
      Email: email,
      Message: message
    };
    
    // Show loading state
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerText;
    submitBtn.innerText = 'Sending...';
    submitBtn.disabled = true;

    fetch("https://formsubmit.co/ajax/sangeetadhami359@gmail.com", {
      method: "POST",
      headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      },
      body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(data => {
      submitBtn.innerText = originalText;
      submitBtn.disabled = false;
      showToast('Thank you, ' + name + '! Your message has been sent successfully.', 'success');
      contactForm.reset();
    })
    .catch(error => {
      submitBtn.innerText = originalText;
      submitBtn.disabled = false;
      showToast('There was an error sending your message. Please try again later.', 'error');
    });
    
    return; // prevent the old showToast from running immediately`;

js = js.replace(oldContactMailto, newContactAjax);

// Replace volunteer form mailto with formsubmit ajax
const oldVolunteerMailto = `const subject = encodeURIComponent('New Volunteer Application from ' + name);
        const body = encodeURIComponent('Name: ' + name + '\\nEmail: ' + email + '\\nPhone: ' + phone);
        window.location.href = 'mailto:sangeetadhami359@gmail.com?subject=' + subject + '&body=' + body;`;

const newVolunteerAjax = `const selectEl = form.querySelector('select');
        const area = selectEl ? selectEl.options[selectEl.selectedIndex].text : 'General';
        
        const payload = {
          _subject: 'New Volunteer Application from ' + name,
          Name: name,
          Email: email,
          Phone: phone,
          'Area of Interest': area
        };

        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerText;
        submitBtn.innerText = 'Sending...';
        submitBtn.disabled = true;

        fetch("https://formsubmit.co/ajax/sangeetadhami359@gmail.com", {
          method: "POST",
          headers: { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
          },
          body: JSON.stringify(payload)
        })
        .then(response => response.json())
        .then(data => {
          submitBtn.innerText = originalText;
          submitBtn.disabled = false;
          showToast('Thank you! Your volunteer application has been submitted.', 'success');
          form.reset();
          if (volunteerOverlay) volunteerOverlay.classList.remove('active');
        })
        .catch(error => {
          submitBtn.innerText = originalText;
          submitBtn.disabled = false;
          showToast('There was an error submitting your application. Please try again.', 'error');
        });
        
        return; // prevent the old showToast from running immediately`;

js = js.replace(oldVolunteerMailto, newVolunteerAjax);

fs.writeFileSync('js/interactives.js', js);
console.log('Update successful');
