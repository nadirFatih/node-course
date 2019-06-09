console.log('How We Can Import Own Modules??');

//const name = 'yilmaz';

//module.exports = name;

//add function

//function add(x,y){

  //  return x + y;

//}

//module.exports = add ;

// getNotes function fonk. for note-app

const fs = require('fs');

var notes = ''

function getNotes(){

    notes = fs.readFileSync('notes.txt','utf8');
    return notes;
}

module.exports  = getNotes;