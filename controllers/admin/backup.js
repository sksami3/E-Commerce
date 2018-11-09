var express=require('express');
var router=express.Router();
var adminModel=require.main.require('./models/admin/admin-model');



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

	//res.send("<script>alert('hello')</script>");
	res.render('admin/index');

});

router.get('/addCatagory',function(req,res){

	//res.send("<script>alert('hello')</script>");
	res.render('admin/ac');

});

//
router.post('/addCatagory',function(req,res){

	//var sql="SELECT * from user WHERE username='"+req.body.username+"' and password='"+req.body.password+"'";
	var user={
		cat_name: req.body.CName,
		createData: Date.today(),
		updateDate: Date.today(),
		isDelete: "false"
	};
	adminModel.insert(user,function(result){

		if(result)
		{
			res.redirect("/");			
		}
		else
		{
			res.sent("can't insert");
		}

	});
});

router.get('/addSubCatagory',function(req,res){

	adminModel.getAll(function(result){

		if(result.length>0){
			res.render('admin/asc',{list: result});
			//console.log(result[0]);
		}
		else
		{
			res.sent('You do not have any catagory yet ');
		}

	});
	
	
});

router.post('/addSubCatagory',function(req,res){

	var object={
		sub_cat_name: req.body.scn,
		cat_id: req.body.catagory_name,
		createdBy: "vacant",
		createData: Date.today(),
		updateDate: Date.today(),
		isDelete: "false"
	};
	adminModel.insertSubCat(object,function(result){

		if(result)
		{
			res.redirect("/");			
		}
		else
		{
			res.sent("can't insert");
		}

	});
	
	
});


router.get('/addManufacturer',function(req,res){

	adminModel.getAllSub(function(result){

		if(result.length>0){
			res.render('admin/addManu',{list: result});
			//console.log(result[0]);
		}
		else
		{
			res.sent('You do not have any catagory yet ');
		}

	});
	
	
});


router.post('/addManufacturer',function(req,res){

	var object={
		sub_cat_id: req.body.scl,
		manu_name: req.body.mn,
		made_in: req.body.madeIn,
		createData: Date.today(),
		updateDate: Date.today(),
		isDelete: "false"
	};
	adminModel.insertManufac(object,function(result){

		if(result)
		{
			res.redirect("/");			
		}
		else
		{
			res.sent("can't insert");
		}

	});
	
	
	
});


router.get('/addSupplier',function(req,res){

			res.render('admin/addSupp');
			//console.log(result[0]);
	
	
});


router.post('/addSupplier',function(req,res){

	//var sql="SELECT * from user WHERE username='"+req.body.username+"' and password='"+req.body.password+"'";
	var user={
		supp_name: req.body.sn,
		createData: Date.today(),
		updateDate: Date.today(),
		isDelete: "false"
	};
	adminModel.insertSupp(user,function(result){

		if(result)
		{
			res.redirect("/");			
		}
		else
		{
			res.sent("can't insert");
		}

	});
});


router.get('/addProduct',function(req,res){

		adminModel.getAllManDet(function(result){

		if(result.length>0){
			res.render('admin/addProduct',{list: result});
			//console.log(result[0]);
		}
		else
		{
			res.sent('You do not have any catagory yet ');
		}

	});
	
	
});


router.post('/addProduct',function(req,res){

		var user1={

		man_id: req.body.man_id

		};

		adminModel.searchSubCatIdFromManu(user1.man_id,function(result1){

			if(result1)
			{
				adminModel.searchCatIdFromSub(result1[0].sub_cat_id,function(result2){

					if(result2)
					{
							var user={
							pro_name: req.body.pn,
							man_id: req.body.man_id,
							cat_id: result2[0].cat_id,
							sub_cat_id: result1[0].sub_cat_id,
							createData: Date.today(),
							updateDate: Date.today(),
							isDelete: "false"
							};

							adminModel.insertProduct(user,function(result){

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
					else
					{
						res.sent("can't insert");
					}

				});			
			}
			else
			{
				res.sent("can't insert");
			}

		});


	
	
	
});




router.get('/addProductDet',function(req,res){

	adminModel.getAllPro(function(result1){

		if(result1.length>0){
			
			// res.render('admin/addProductDetails',{list: result});
			console.log(result1);
			for(var i=0;i<result1.length;i++){
			adminModel.getAllSubbyId(result1[i].sub_cat_id,function(result2){

				if(result2.length>0){
					// res.render('admin/addProductDetails',{list: result});
					console.log(result2);
					for(var k=0;k<result2.length;k++){
					adminModel.getAllbyId(result2[k].cat_id,function(result3){

						if(result3.length>0){
							// res.render('admin/addProductDetails',{list: result});
							console.log(result3);
							for(var l=0;l<result1.length;l++){

							adminModel.searchSubCatIdFromManu(result1[l].man_id,function(result4){

								if(result4.length>0){
									// res.render('admin/addProductDetails',{list: result});
									console.log(result4);

									// var productDet={
									// p_id: result1.pro_id,
									// product_name: result1[i].pro_name,
									// c_id: result2.id,
									// catagory_name: result2[i].cat_name,
									// sc_id: result3.id,
									// scatagory_name: result3[i].sub_cat_name,
									// man_id: result3.man_id,
									// man_name: result3.man_name
									// };

									// res.render('admin/addProductDetails',{list: productDet});
									
								}
								else
								{
									res.sent('You do not have any catagory yet ');
								}

							});
						}
							
						}
						else
						{
							res.sent('You do not have any catagory yet ');
						}

					});
					}	
					
				}
				else
				{
					res.sent('You do not have any catagory yet ');
				}

			});
		}
		
		}
		else
		{
			res.sent('You do not have any catagory yet ');
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
