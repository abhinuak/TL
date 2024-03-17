const mongoose = require('mongoose')

const connectionString = process.env.DATABASE
mongoose.connect(connectionString).then(()=>{
    console.log("mongo connected successfull");
}).catch((err)=>{
    console.log(`mongodb connection failed ${err}`);
})

