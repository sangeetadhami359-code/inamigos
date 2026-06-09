const fs = require('fs');
let html = fs.readFileSync('volunteers.html', 'utf8');

// The regex will match <div class="volunteer-socials">...</div> and any nested elements within it
// until the first closing </div> (assuming no nested divs inside volunteer-socials)
html = html.replace(/<div class="volunteer-socials">[\s\S]*?<\/div>/g, '');

fs.writeFileSync('volunteers.html', html);
console.log('Removed socials.');
