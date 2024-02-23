export const count = num => num;
export const somethingElse = () => {};
// to be able to use this funtion in a different file we have to export it using 'export' keyword
// we are using a named export here
// common js equivalent of export -> exports.count = num => num;
// but no one uses above line. they just export things as a modules
// e.g.
// module.exports = {
//     count: num => num
// }

// export default {name:'cookies;'}
// if we use 'default' keyword then it's a default export. we don't have to mention a strict name where we are importing. we can use whatever the name we like
