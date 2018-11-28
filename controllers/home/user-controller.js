var express=require('express');
var router=express.Router();
var userModel=require.main.require('./models/user/user-model');
var asyncValidator=require('async-validator');
regValidation=require.main.require('./Validation_rule/registration_validation');


// router.get('*',function(req,res,next){
// 	if(req.session.una==null)
// 	{
// 		res.redirect('/login');
// 	}
// 	else
// 	{
// 		next();
// 	}
// });

router.get('/',function(req,res){

	userModel.getAllPD(function(result){

		if(result.length>0){
			userModel.getAllCat(function(result1){

					if(result1.length>0){
						if(result.length>0){
							userModel.getAllSCat(function(result2){

									if(result2.length>0){

										console.log(result2);
										res.render('user/index',{list: result,list1: result1, list2: result2});
										//console.log(result[0]);
									}
									else
									{
										res.sent('You do not have any catagory yet ');
									}

								});

								
							//console.log(result[0]);
						}
						
						//console.log(result[0]);
					}
					else
					{
						res.sent('You do not have any catagory yet ');
					}

				});

				
			//console.log(result[0]);
		}
		else
		{
			res.sent('You do not have any catagory yet ');
		}

	});
	

});
router.get('/register',function(req,res){

	//res.send("<script>alert('hello')</script>");
	res.render('user/register');

});
//
router.post('/registerForm',function(req,res){

	//var sql="SELECT * from user WHERE username='"+req.body.username+"' and password='"+req.body.password+"'";
	var user={
		username: req.body.uname,
		email: req.body.email,
		password: req.body.pass,
		type: "user"
	};


	var validator = new asyncValidator(regValidation.registration);
	validator.validate(user,function(errors,fields){
		if(errors)
			{
				res.render('user/register',{errors: errors});
			}

		else
		{
			userModel.insert(user,function(result){

			if(result)
			{
				res.redirect("/");			
			}
			else
			{
				res.sent("can't insert");
			}

		});	
		}

	});
});


router.post('/loginForm',function(req,res){

	var user={
		username:req.body.username,
		password:req.body.password
	};

	userModel.validate2(user,function(result){

		if(result)
		{
			req.session.una=req.body.username;
			res.redirect('/admin');			
		}
		else
		{

			userModel.validate1(user,function(result){

			if(result)
			{
				req.session.une=req.body.username;
				res.redirect('/home');			
			}
			else
			{
				console.log('somossa');
			}

			});
		}

	});
	
});




// router.get('/show',function(req,res){

// 	//res.send("<script>alert('hello')</script>");
// 	//res.render('admin/show');
// 	adminModel.getAll(function(result){

// 		if(result.length>0){
// 			res.render('admin/show',{list: result});
// 			//console.log(result[0]);
// 		}
// 		else
// 		{
// 			res.redirect('/admin');
// 		}

// 	});

// });




// router.get('/edit/:id', function(req, res){
	
// 		var userId = req.params.id;

// 		adminModel.getById(userId, function(result){
// 			res.render('admin/edit', {user: result});
// 		});

// });
// router.post('/edit/:id', function(req, res){
	
// 	var user={
// 		id:req.body.id,
// 		name:req.body.en,
// 		cn:req.body.cn,
// 		con:req.body.con,
// 		un:req.body.un,
// 		password:req.body.password
// 	};

// 	adminModel.update(user,function(status){
// 		if(status)
// 		{
// 			res.redirect('/admin/show');

// 		}
// 		else
// 		{
// 			res.send('Error in updating...');
// 		}
// 	});

// });
	/*if(req.body.username==req.body.password)
	{
		req.session.un=req.body.username;
		res.redirect('/home');
	}
	else
	{
		res.redirect('/login');
	}*/


// });

// router.get('/delete/:id',function(req,res){
	
// 	res.render('admin/delete');
	
// });


// router.post('/delete/:id',function(req,res){
// 	var id=req.params.id;
// 	if(req.body.yes)
// 	{
// 		adminModel.delete(id,function(status){
// 			if(status)
// 			{
// 				res.redirect('/admin/show');
// 			}
// 			else
// 			{
// 				res.send('Error in deleting...');
// 			}

// 		})
// 	}
// 	else
// 	{
// 		res.redirect('/admin/show');
// 	}
	
// });




module.exports=router;
