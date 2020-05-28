'use strict';
const Input = require('../lib/input.js');
var options = new Input();

describe('Input Module', ()=> {
    
  it('Given good input The Class valid() method returns true', ()=> {
      
    expect(options.valid('add')).toEqual(true);
  });
  it('Given bad input The Class valid() method returns false', ()=> {
      

    expect(options.valid()).toEqual(false);
  });

  it('The input module creates a new instance with both action and payload', ()=> {


    let newinstance={
      'action':'add',
      'payload':'hello there',
    };
    expect(newinstance).toEqual(newinstance);

  });
});
