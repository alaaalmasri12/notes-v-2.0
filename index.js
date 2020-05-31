#!/usr/bin/env node
'use strict';
const mongoose=require('mongoose');
const Input = require('./lib/input.js');
const notes =  require('./lib/notes.js');
const options = new Input();
let Notes=new notes();

Notes.execute(options)
  .then(mongoose.disconnect);



