var express=require('express');
var router=express.Router();



router.get('/',function(req,res){

	req.session.une=null;
	req.session.una=null;
	res.redirect('/register');

});


module.exports=router;