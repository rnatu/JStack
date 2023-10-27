//Modules
const { printName, lastName } = require("./printName");

printName(`Renato ${lastName}`);

//Modules Nativos
const os = require('os');

console.log(os.type())