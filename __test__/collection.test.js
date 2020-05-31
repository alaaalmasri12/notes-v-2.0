'use strict';
require('@code-fellows/supergoose');

const Note = require('../lib/models/notes-collection.js');
const note = new Note();
describe('note Model', ()=> {
  it('can create() a new note item ', ()=> {
    let obj = {text: 'i am number one', catagory: 'motvaational'};
    return note.create(obj)
      .then(record => {
        Object.keys(obj).forEach(key => {
          expect(record[key]).toEqual(obj[key]);
        });
      });
  }) ;


  
  it('can get() a node item()', ()=> {
    let obj = {text: 'i am number one', catagory: 'motvaational'};
    return note.create(obj)
      .then(record => {
        return note.get(record._id)
          .then(NodeItem => {
            Object.keys(obj).forEach(key=> {
              expect(NodeItem[key]).toEqual(obj[key]);
            });
          });
      });
  });
  it('can delete() a node item()', ()=> {
    let obj = {text: 'i am number tow', catagory: 'motvaational speeach'};
    return note.create(obj)
      .then(record => {
        return note.delete(record._id)
          .then(NodeItem => {
            Object.keys(obj).forEach(key=> {
              expect(NodeItem[key]).toEqual(NodeItem[key]);
            });          });
      });
  });  
  it('can update() a node item()', ()=> {
    let obj = {text: 'i am number tow', catagory: 'motvaational speeach'};
    let obj2={text: 'i am number there', catagory: 'motvaational speeach 2'};
    return note.create(obj)
      .then(record => {
        return note.update(record._id,obj2)
          .then(NodeItem => {
            Object.keys(obj).forEach(key=> {
              expect(NodeItem[key]).toEqual(NodeItem[key]);
            });          });
      });
  });      
});
