const yargs = require('yargs')
const pkg = require('./package.json')
const {addNote, printNotes, removeNote} = require('./nodes.controller')

yargs.command({
    command: 'add',
    describe: 'Add new note to list',
    builder: {
        title: {
            type: 'string',
            describe: 'Note title',
            demandOption: true
        }
    },
    handler({ title }) {
        addNote(title);
    }
})

yargs.command({
    command: 'list',
    describe: 'Print all notes',
    async handler() {
        printNotes()
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove note by id',
  builder: {
    id: {
      type: 'string',
      describe: 'Here is id',
      demandOption: true
    }
  },
  async handler({ id }) {
    removeNote(id)
  }
})
yargs.parse()