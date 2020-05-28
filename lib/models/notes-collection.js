const schema=require('../models/notes-schema.js');
let mongoose=require('mongoose');
mongoose.set('useFindAndModify', false);

class Collection
{
  constructor()
  {
        
  }
  get(_id) {
    // if you pass an id for me i will get you the record by id
    if (_id) {
      return  schema.findOne({_id: _id});
    }
  
  }
  create(note)
  {
    let NewNote=new schema(note);
    return  NewNote.save();
  }



  update(_id, record) {
    return  schema.findByIdAndUpdate(_id, record);
    
  }
  delete(_id) {
    return schema.findByIdAndDelete(_id);
  }
  list(record)
  {
    console.log(record.list ===record.list?true:false);
    if(record.catagory)
    {
      return schema.find({catagory:record.catagory});  
    }
    else
    {
      return schema.find({});  
    }
  }
}
module.exports=Collection;