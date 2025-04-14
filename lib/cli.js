const fs = require('fs');
const path = require('path');

class CLI {
  constructor() {
    this.commands = {};
  }

  register(name, handler) {
    this.commands[name] = handler;
  }

  run(args) {
    const command = args[0] || 'help';
    const handler = this.commands[command];
    
    if (!handler) {
      console.error(`Unknown command: ${command}`);
      this.commands.help();
      return;
    }
    
    handler(args.slice(1));
  }

  showHelp() {
    console.log('\nAvailable commands:');
    Object.keys(this.commands).forEach(cmd => {
      console.log(`  ${cmd}`);
    });
  }
}

module.exports = CLI;