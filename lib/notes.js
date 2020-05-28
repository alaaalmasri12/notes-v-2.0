const mongoose=require('mongoose');
const Collection=require('./models/notes-collection');
const MONGOSE_URI='mongodb://localhost:27017/notes';
mongoose.connect(MONGOSE_URI,{useNewUrlParser:true,useUnifiedTopology:true});
  
const collection=new Collection();
class Notes 
{
  constructor()
  {
    this.id=Math.ceil(Math.random()*10);
  }

  execute(obj)
  {
    if(obj.get)
    {
      return this.get(obj);

    }
    else if(obj.create)
    {
      return this.create(obj);
    }
    else if(obj.delete)
    {
      return this.delete(obj);
    }
    
    else if(obj.update)
    {
      return this.update(obj);
    }
    else if(obj.list)
    {
      return this.list(obj);
    }
  }
  async update(note)
  {
  
    let newnote={
      text:`${note.newtext}`,
      catagory:`${note.newcatagory}`,
    };
    let id=note.update;
    let updateNode = await collection.update(id,newnote);
    console.log('update noded is',updateNode);
    mongoose.disconnect();

  }
  async get(note)
  {
    let id=note.get;
    let oneNode = await collection.get(id);
    console.log(`get Note`);
    console.log(oneNode);
    mongoose.disconnect();
  }
  async create(note)
  {
    let notedetail={
      text:`${note.create}`,
      catagory:`${note.catagory}`,
    };
    let newNode = await collection.create(notedetail);
  
    console.log('added',newNode);
    mongoose.disconnect();

  }
  async delete(note)
  {
    let id=note.delete;
    let DeleteNode = await collection.delete(id);
    console.log('deleted noded is',DeleteNode);
    mongoose.disconnect();

  }
  async list(note)
  {
    let list = await collection.list(note);
    console.log('all list',list);
    mongoose.disconnect();
  }
}
module.exports = Notes;
