// modules are self contained unit of code that can be reusable. they have thier own scope and can not be accessed by other code by default
// for example in Node.js there are built-in modules like http, fs...
// we can create user-defined modules as well to be used in the project, share with the community as packages...
// there are also third-party modules which are user-defined modules but created by other developers. we can download these from npm
// export keyword is used to make a variable, function or object to imported and used in other modules
// try to make everything a module, even if you think you are not going to reuse it. the amount of modules won't affect the performance
// this way it's easier to test(can test the modules individually), maintain and merge conflicts are lesser
// we can have a index.js file in a folder(for example utils) and export from other files in the same folder. in this way when we import this folder from any other module we can just simply mention the path of index.js and all the exports listed in index.js will be imported
// this is called index.js pattern

// 3rd party packages we install using npm will live in node_modules folder. when we install packages from npm to our project it will also create package-lock.json file - this locks the versions of the packages we installed because if we are working in a team we have to ensure we all using the same version of same modules
// and package.json also will be updated with a dependencies section with the packages we installed
// we don't include node_modules in the github repo because it can be downloaded and it's not our code to track changes and checked with code reviews
// we can replicate the node_modules with same versions mentioned we installed with package-lock.json file in any machine
// we have to run the command 'npm install' without any arguments and npm will check the package.json and package-lock.json files and install missing dependencies
// and we have to careful about packages we install because of security issues
// we can uninstall packages using 'npm uninstall <package-name>'
