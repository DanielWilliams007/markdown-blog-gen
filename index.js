#!/usr/bin/env node

const BlogGenerator = require('./src/generator');

const args = process.argv.slice(2);
const command = args[0] || 'build';

console.log('Markdown Blog Generator v0.1.0');

const generator = new BlogGenerator();

switch(command) {
  case 'build':
    generator.generate();
    break;
  case 'init':
    console.log('Initializing new blog...');
    break;
  case 'serve':
    console.log('Starting dev server...');
    break;
  default:
    console.log(`Unknown command: ${command}`);
    process.exit(1);
}