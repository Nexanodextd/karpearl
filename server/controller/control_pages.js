 const Admin_model = require('../models/admin_login');
 const Events_model =require('../models/events');

exports.home= async(req,res)=>{
    const locals={
        title:"Home"
    }
    try{
           const getPrograms = await Events_model.find();
          res.render('pages/index',{locals,getPrograms});
    }catch(err){
         console.error(err.messsage)
    }
  
}

exports.about = async(req,res)=>{
     const locals={
        title:"About-Us"
    }
    res.render('pages/about',{locals});
}
exports.contact = async(req,res)=>{
    const locals={
        title:"Contact-Us"
    }
    res.render('pages/contact',{locals});
}
exports.volunteer = async(req,res)=>{
    const locals={
        title:"Volunteer"
    }
    res.render('pages/volunteer',{locals});
}
exports.donation = async(req,res)=>{

     const locals={
        title:"Donation"
    }
    res.render('pages/donation',{locals});

}

//Admin End //

exports.Admin_home = async(req,res)=>{
     const locals={
        title:"Admin"
    }
     const getID = req.admin.id;
     const getAdmin = await Admin_model.findOne({_id:getID},{username:1})
    res.render('admin/index',{locals,getAdmin});
}
exports.Admin_login = async(req,res)=>{
     const locals={
        title:"Admin-Login"
    }
    res.render('admin/sign-in',{locals});
}
exports.Admin_logout = async(req,res)=>{
     res.clearCookie("jwt");
    res.redirect('/login');
}