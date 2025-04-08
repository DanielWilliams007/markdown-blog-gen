class BlogGenerator {
  constructor() {
    this.posts = [];
    this.outputDir = 'dist';
  }

  generate() {
    console.log('Generating blog...');
  }
}

module.exports = BlogGenerator;