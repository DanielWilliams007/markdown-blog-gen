const fs = require('fs');
const path = require('path');

function parseMarkdown(content) {
  const lines = content.split('\n');
  let html = '';
  let inCodeBlock = false;
  
  for (let line of lines) {
    if (line.startsWith('```')) {
      inCodeBlock = !inCodeBlock;
      html += inCodeBlock ? '<pre><code>' : '</code></pre>';
      continue;
    }
    
    if (inCodeBlock) {
      html += line + '\n';
      continue;
    }
    
    if (line.startsWith('# ')) {
      html += `<h1>${line.substring(2)}</h1>\n`;
    } else if (line.startsWith('## ')) {
      html += `<h2>${line.substring(3)}</h2>\n`;
    } else if (line.startsWith('### ')) {
      html += `<h3>${line.substring(4)}</h3>\n`;
    } else if (line.trim() === '') {
      html += '<br>\n';
    } else {
      html += `<p>${line}</p>\n`;
    }
  }
  
  return html;
}

module.exports = { parseMarkdown };