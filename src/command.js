import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

//yargs(hideBin(process.argv))
//    .command('curl <url>', 'fetch the contents of the URL', () => {}, (argv) => {
//        console.info(argv)
//    })
//    .demandCommand(1)
//    .parse()

yargs(hideBin(process.argv))
    .command('new <note>', 'create a new note', yargs => {
        return yargs.positional(
            'note',
            {
                type: 'string',
                description: 'the content of the note to create'
            }
        )
    }, (argv) => {
        console.log(argv.note);
        console.log(argv.tags);
    })
    .option('tags',{
        alias: 't',
        type: 'string',
        description: 'tags to add to the note'
    })
    .command('all', 'get all notes', () => {}, async (argv) => {

    })
    .command('find <filter>', 'get matching notes', yargs => {
        return yargs.positional('filter', {
            describe: 'The search term to filter notes by, will be applied to note.content',
            type: 'string'
        })
    }, async (argv) => {

    })
    .command('remove <id>', 'remove a note by id', yargs => {
        return yargs.positional('id', {
            type: 'number',
            description: 'The id of the note you want to remove'
        })
    }, async (argv) => {

    })
    .command('web [port]', 'launch website to see notes', yargs => {
        return yargs
            .positional('port', {
                describe: 'port to bind on',
                default: 5000,
                type: 'number'
            })
    }, async (argv) => {

    })
    .command('clean', 'remove all notes', () => {}, async (argv) => {

    })
    .demandCommand(1)
    .parse()

// above is the code we copied from npm yargs webpage
// in above code command means the options or commands we are including in our app. for example in npm install, npm is an app, install is a command
// hidebin function removes first two array elements in process.argv
    
