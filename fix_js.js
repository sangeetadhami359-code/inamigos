const fs = require('fs');
let js = fs.readFileSync('js/interactives.js', 'utf8');

// Fix 'date: : {\n    date:' pattern
js = js.replace(/date: : \{\\n    date: '09 Jun 2026',/g, "date: '09 Jun 2026',");

// Fix literal '\n' in '{\n    title:'
js = js.replace(/\{\\n    title:/g, "{\n    title:");

fs.writeFileSync('js/interactives.js', js);
console.log("Fixed!");
