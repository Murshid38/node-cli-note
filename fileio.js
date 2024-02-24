// async doesn't mean doing multiple things at the same time. it means scheduling things to run later
// what makes a code statement synchronous? - subsequent statements doesn't have to wait until a background task is done and thread of execution is up and running. in other words thread of execution is not blocked
// there are some function that will make the code asynchronous. for example
// networking related functions
// timing related functions
// file system or database related functions

// not everthing with a callback function is asynchronous code
// refer: callback hell, that's why javascript introduced promise objects, they are only one level deep always
// async await is for readability and understandability purposes.

import fs from "node:fs/promises";
// to use async await we have to put /promises above

// const readPjson = async () => {
//     const pjsonPath = new URL("./package.json", import.meta.url).pathname;
//     console.log(JSON.parse(await fs.readFile(pjsonPath, "utf-8")));
// };

const writeJS = async () => {
    const newFilePath = new URL('./demo.js', import.meta.url).pathname;
    await fs.writeFile(newFilePath, `console.log('Heyyyyy i'm hereeee')`);
};

// readPjson();
writeJS();
