'use strict';
const mongoose=require('mongoose');
const notes= mongoose.Schema({
  text:{type:'string',required:true},
  catagory:{type:'string',required:true},
});
module.exports = mongoose.model('notes',notes);
