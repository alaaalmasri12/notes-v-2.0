const schema=require('../models/notes-schema.js');

class Collection
{
  constructor()
  {
        
  }
  get(catagory)
  {
    if(catagory)
    {
      return  schema.find({catagory: catagory});
    }
    else
    {
      return  schema.find({});
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
    schema.findByIdAndDelete(_id);
  }
  list(record)
  {
    return schema.find({catagory:record.catagory});  
  }
}
module.exports=Collection;