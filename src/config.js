const fs = require('fs');
const path = require('path');

class Config {
  constructor(configPath = 'config.json') {
    this.configPath = configPath;
    this.data = this.load();
  }

  load() {
    try {
      const content = fs.readFileSync(this.configPath, 'utf-8');
      return JSON.parse(content);
    } catch (error) {
      console.log('Using default config');
      return {
        title: 'My Blog',
        author: 'Author',
        inputDir: 'posts',
        outputDir: 'dist'
      };
    }
  }

  get(key) {
    return this.data[key];
  }

  set(key, value) {
    this.data[key] = value;
  }

  save() {
    fs.writeFileSync(this.configPath, JSON.stringify(this.data, null, 2));
  }
}

module.exports = Config;