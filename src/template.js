const fs = require('fs');
const path = require('path');

class TemplateEngine {
  constructor(templateDir = 'templates') {
    this.templateDir = templateDir;
    this.cache = {};
  }

  loadTemplate(name) {
    if (this.cache[name]) {
      return this.cache[name];
    }
    
    const filepath = path.join(this.templateDir, `${name}.html`);
    const template = fs.readFileSync(filepath, 'utf-8');
    this.cache[name] = template;
    return template;
  }

  render(templateName, data) {
    let template = this.loadTemplate(templateName);
    
    Object.keys(data).forEach(key => {
      const regex = new RegExp(`{{${key}}}`, 'g');
      template = template.replace(regex, data[key]);
    });
    
    return template;
  }
}

module.exports = TemplateEngine;