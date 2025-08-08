const Admin_model = require('../models/admin_login');
const jwt = require('jsonwebtoken');
require('dotenv');

exports.register_admin = async(req,res)=>{
      const  username = req.body.username;
    const password = req.body.password;
    if(username=="" && password == ""){
           res.status(400).json({error:"Username and password must filled"})
    }else{
         try{
               const reg = await Admin_model.create({username:username,password:password});
               if(reg){
                   res.status(200).json({message:"admin has been uploaded successfully"});
               }else{
                    res.status(400).json({error:"unable to register admin"})
               }


         }catch(err){
            res.status(400).json({error:err.message})
         }
    }
}
exports.login = async(req,res)=>{

    const  username = req.body.username;
    const password = req.body.password;
    if(username=="" && password == ""){
           res.status(400).json({error:"Username and password must filled"})
    }else{
         try{
              const get_admin = await Admin_model.findOne({username:username,password:password});
              if(!get_admin){
                 return res.status(403).json({error:"user not found" });
              }else{
                 const token = jwt.sign({id:get_admin._id},process.env.ACCESS_TOKEN_SECRET,{expiresIn:"1h"});
                 res.cookie("jwt",token,{httpOnly:true,maxAge:36000000});
                 return res.json({token:token,status:200})

              }

         }catch(err){
            res.status(400).json({error:err.message})
         }
    }
   
    
}

exports.eventUplaod = async(req,res)=>{
    
    console.log(req.body);


}


