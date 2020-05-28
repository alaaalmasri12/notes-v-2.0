#!/usr/bin/env node
'use strict';
const mongoose=require('mongoose');
const Input = require('./lib/input.js');
const notes =  require('./lib/notes.js');
const options = new Input();
// console.log(options);
let Notes=new notes();
// console.log('options data',options);
// console.log('obj arg',options.note);
options.valid(options);
// console.log('asdsadaj',options.delete);
Notes.execute(options)
  .then(mongoose.disconnect);



