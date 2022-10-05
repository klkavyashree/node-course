
const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

const fs = require("fs");

fs.writeFileSync("notes.txt", "Hey i am kavya");

fs.appendFileSync("notes.txt", " hello")


console.log(notes.getNotes());

console.log(chalk.red.bgGreen.inverse.bold("Error"));
console.log(chalk.green.inverse("Hello!!!"));


// arguments passing-> node app.js Add
const a = process.argv[2];
console.log(a);



// Customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler() {
        notes.listNotes()
    }
})

yargs.command({
    command: "read",
    describe: "read note",
    builder:{
        title: {
            describe: 'read title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title);
    }
})

yargs.parse()
