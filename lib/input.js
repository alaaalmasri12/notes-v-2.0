#!/usr/bin/env node
const minimist = require('minimist');
class Input {
  constructor()
  {
    const args = minimist(process.argv.slice(2)); // command line args
    this.create=args.create;
    this.delete=args.delete;
    this.text=args.text;
    this.update=args.update;
    this.catagory=args.catagory;
    this.get=args.get;
    this.list=args.list;
  }
  valid(action)
  {
    if(action === undefined ||action === null)
    {
      return false;
    }
    else if(action ==='')
    {
      return false;
    }
    else
    {
      return true;
    }
  }
 
  getkeys()
  { 
    // if(this.note ==undefined)
    // {
    //   throw 'Error:you should use -a or -add';
    // }
    // else if(this.note ===true)
    // {
    //   throw 'Add a message here';
    // }
    var obj = {  
      action:`add`,
      payload:`ADDING notes${this.note}`,
    };
    return obj;
  }
}
module.exports = Input;