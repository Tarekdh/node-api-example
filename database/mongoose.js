const mongoose = require('mongoose');


const main = () => {
   return mongoose.connect('mongodb://root:example@localhost:27017/')
}

main().then((res)=>{
    console.log("connected to the database with success");
}).catch(err => console.log("----error",err));
