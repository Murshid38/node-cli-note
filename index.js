#!/usr/bin/env node
// above line is added because if we are not running this file with 'node' command in CLI the OS will know this file should be ran with node command(or in node environment)
// the above line will be ignored by the node interpreter but will be usefull for OS
// put that line in the entry file, so we don't have to put that in every file
// console.log("Hello, Node");
// Browser runtime vs node runtime
// there are differences in global variables. in browsers there's this Window object. everything attached to that object. for example alert function simply means window.alert
// but in node there are no Window object. because node js don't need window object
// but there is equivalent object which is 'global'

// console.log(process.argv);
// this process.argv outputs bin location of node and path of the file we are executing and command line arguments

// console.log(process.env);
// environment means set of variables available to the program in runtime. we can access those using process.env
// environment variables may contain API keys, secrets... which can be used by hosting platforms
// we don't hard code those values inside code because code can be read sometimes
// also we can use this environment variables to change the modes(testing, developing, production..) so the code can behave accordingly. e.g. in development turning off tracking or authentication 
// also production environment might be optmized for faster performance and development environment might be optmized for faster hot reload

// console.log(process.env.NODE_ENV);
// if we run NODE_ENV=production node index.js then we will get 'production' as output

// making a node.js project
// npm comes with Node.js 
// to make node project in command prompt execute -> npm init (can be used with --yes)
// this will create a configuration file for the project called project.json. which we can use to manage include dependencies, scripts, modules...
    
//{
//  "name": "intro-node",
//  "version": "1.0.0",
//  "description": "",
//  "main": "index.js",
//  "bin": {
//        "note" : "./index.js"
//  },
// above property can be added to name the CLI and add the path to it relative to current directory
// in "bin" directory of node path (home/murshid/.nvm/versions/node/v20.11.1/bin/node) is where node CLIs live
//  "scripts": {
//    "test": "echo \"Error: no test specified\" && exit 1"
//  },
//  "author": "",
//  "license": "ISC"
//}

// and we can run 'npm link' to add a symlink operating systems file system to point to this directory

//import {count} from './utils.js';
// common js equivalent const {const} = require('./utils.js');
// import data from './utils.js';
// import fs from 'fs'

// typically we don't need the '.js' part in 'require' and React. but newer versions of node and type:'module' in package.json make it necessary
// type:"module" makes .js file imported to be considered as ES6 modules, type:"commonjs" will make .js file imported to be considered as common js module
// extension make sense because we are importing many type of modules now not just JS code
// data module is the default export from utils.js file. we can even add that in same line as previous import. e.g. data, {count}
// when we import 'fs' module we don't need a path. because fs module comes with node and it knows where it is
// import fs from 'node:fs' also does the same job. no difference except we are being explicit here
// 3rd party modules also imported same way after we install it

// import * as utils from './utils/index.js';
// now the count, other, somethingElse  all will be available in utils object

// console.log(utils.count(2));

// const note = process.argv[2];

//const newNote = {
//    content: note,
//    id: Date.now()
//}

//console.log(newNote);

import './src/command.js'
// when we are just importing a file that is not going to export, we can simply provide the path. we don't need 'from'. above line will just execute the file in the path
