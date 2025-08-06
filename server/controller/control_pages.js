exports.home= async(req,res)=>{
    const locals={
        title:"Home"
    }
    res.render('pages/index',{locals});
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



//Admin End //

exports.Admin_home = async(req,res)=>{
     const locals={
        title:"Admin"
    }
    res.render('admin/index',{locals});
}
exports.Admin_login = async(req,res)=>{
     const locals={
        title:"Admin-Login"
    }
    res.render('admin/sign-in',{locals});
}