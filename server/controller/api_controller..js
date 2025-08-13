const Admin_model = require('../models/admin_login');
const Volunteer_model = require('../models/volunteer');
const Newsletter_model = require('../models/newsletter_model');
const number_model = require('../models/numbers');
const jwt = require('jsonwebtoken');
const { get } = require('mongoose');
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

exports.volunteer = async(req,res)=>{
    const {available,first_name,last_name,address,city,country,phone_number,email_address}=req.body;
    try{
         const save_volunteer = await Volunteer_model.create({
        available:available,
        first_name:first_name,
        last_name:last_name,
        address:address,
        city:city,
        country:country,
        phone_number:phone_number,
        email_address:email_address
    });
    if(save_volunteer){
       return res.json({message:"Volunteer Saved",status:200})
    }else{
        return res.json({error:"failed to save volunteer"})
    }
    }catch(err){
        return res.json({error:err.message});
    }
  
}
exports.newsletter = async(req,res)=>{
    const getemail = req.body.getemail;
    try{
          const check_email = await Newsletter_model.find({email:getemail},{email:1});
          if(check_email.email==getemail){
             return res.json({data:"Thanks, you are already subscribed"},status=201);
          }else{
                const save_email = await Newsletter_model.create({email:getemail});
      
               if(save_email){
                  return res.json({data:"Thank you for Subscribing to Our Newsletter",status:200});

               }else{
                 return res.json({data:"Subscription Failed"});
               }
          }
    }catch(err){

        res.status(400).json({error:err.message});
    }
   
}
exports.post_numbers = async(req,res)=>{
      const {volunteer,treatment,donations} = req.body;
       try{  
                const check_data = await number_model.find();
                 if(check_data){
                     res.json({data:"data exists please click  the <a href='/update_number'>edit</a> button to update data",status:201});
                 }else{
                        const save_data = await number_model.create({volunteers:volunteer,treated:treatment,donations:donations})
                        if(save_data){
                        console.log(save_data)
                        res.json({data:"records saved",status:200})
                        }else{
                            return  res.json({data:"database error, please contact developer"});
                        }
                 }

       }catch(err){
          console.log(err.message)
       }
      
    
}
exports.eventUplaod = async(req,res)=>{
    
    console.log(req.body);


}


