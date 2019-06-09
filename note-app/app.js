// ** How we can import core modules for example FileSystem ** 
// const fs = require('fs');

// fs.writeFileSync('notes.txt','merhba')
// fs.appendFileSync('notes.txt','\n Bu yazı append ile oluşturulmustur')
 
// ** How We Can Import ownn modules **

//const name = require('./utils');

//const name = 'fatih';

//console.log(name);

// add Function

// const add = require('./utils.js');

// const sum = add(5,-1);

// console.log(sum);

// get notes from notes.txt with own modules

//const getNotes = require('./utils.js');

//console.log(getNotes());

// const getNotes = require('./notes.js')

// console.log(getNotes())


// ** how we can import to project npm modules for example validator **

const validator = require('validator');

console.log(validator.isEmail('fatihyilmaz@gmail.com'));

