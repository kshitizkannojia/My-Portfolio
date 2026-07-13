const fs = require('fs');
const path = require('path');

const pdfPath = path.join(__dirname, '..', 'public', 'Kshitiz_Kannojia_Resume.pdf');
const data = fs.readFileSync(pdfPath);

// Extract plain text ASCII strings (longer than 4 characters)
const strings = [];
let currentStr = '';
for (let i = 0; i < data.length; i++) {
  const byte = data[i];
  if (byte >= 32 && byte <= 126) {
    currentStr += String.fromCharCode(byte);
  } else {
    if (currentStr.length >= 4) {
      strings.push(currentStr);
    }
    currentStr = '';
  }
}

console.log("=== PDF Metadata / Text Strings ===");
// Filter strings that look like names or emails or URLs
const filtered = strings.filter(s => 
  s.includes('Kshitiz') || 
  s.includes('Kannojia') || 
  s.includes('gmail') ||
  s.includes('Resume') ||
  s.includes('Justin') || // check standard name templates
  s.includes('developer') ||
  s.includes('Portfolio') ||
  s.includes('github')
);

console.log(JSON.stringify(filtered.slice(0, 100), null, 2));
