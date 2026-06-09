const fs = require('fs');

// Remove eye counts from blog.html
let html = fs.readFileSync('blog.html', 'utf8');
html = html.replace(/<span><i class="far fa-eye"><\/i>.*?Views<\/span>/g, '');
// Also fix any empty spaces left
html = html.replace(/[ \t]*\n[ \t]*\n/g, '\n');
fs.writeFileSync('blog.html', html);

// Remove eye counts from interactives.js
let js = fs.readFileSync('js/interactives.js', 'utf8');
js = js.replace(/<span><i class="far fa-eye"><\/i> \$\{post\.views\} Views<\/span>/g, '');
fs.writeFileSync('js/interactives.js', js);

console.log("Removed views counts.");
