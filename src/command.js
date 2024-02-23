import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

yargs(hideBin(process.argv))
    .command('curl <url>', 'fetch the contents of the URL', () => {}, (argv) => {
        console.info(argv)
    })
    .demandCommand(1)
    .parse()

// above is the code we copied from npm yargs webpage
// in above code command means the options or commands we are including in our app. for example in npm install, npm is an app, install is a command
// hidebin function removes first two array elements in process.argv
    
