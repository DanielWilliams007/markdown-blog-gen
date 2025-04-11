const fs = require('fs');
const path = require('path');

class MarkdownParser {
  constructor() {
    this.frontMatterRegex = /^---\n([\s\S]*?)\n---/;
  }

  parseFrontMatter(content) {
    const match = content.match(this.frontMatterRegex);
    if (!match) return { metadata: {}, content };
    
    const metadata = {};
    const metaLines = match[1].split('\n');
    
    metaLines.forEach(line => {
      const [key, ...valueParts] = line.split(':');
      if (key && valueParts.length) {
        metadata[key.trim()] = valueParts.join(':').trim();
      }
    });
    
    return {
      metadata,
      content: content.replace(this.frontMatterRegex, '').trim()
    };
  }

  parseFile(filepath) {
    const raw = fs.readFileSync(filepath, 'utf-8');
    return this.parseFrontMatter(raw);
  }
}

module.exports = MarkdownParser;