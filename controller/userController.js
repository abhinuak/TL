const users=require('../model/userSchema')
const jwt = require('jsonwebtoken')
// register


exports.register =async (req,res)=>{
    console.log("inside register controller function");
    const {username,email,password}=req.body
    // console.log(`${username},${email},${password}`);
 try{
    const ExistUser = await users.findOne({email})
    if(ExistUser){
       
        res.status(406).json("already exist , please login")
    }
    else{
        const newUser = new users({
            username,email,password
        })
        await newUser.save()
        res.status(200).json(newUser)
    }    
 }catch(err){
    res.status(401).json(`register api failed error : ${err}`)
 }

}


exports.login = async (req,res)=>{
    console.log("inside login function");
    const {email,password}=req.body
    try{
        const ExistUser = await users.findOne({email,password})
        if(ExistUser){
            const token = jwt.sign({userId:ExistUser._id},"secretkey123")
            res.status(200).json({
                ExistUser,token
            })
        }else{
            res.status(404).json("incorrect password or email")
        }
    }catch(err){
        res.status(401).json('login API Failed, error:',err)
    }
}
