var db=require('./db');
var alert = require('alert-node');

module.exports={

	// validate:function(user,callback)
	// {
	// 	var sql="SELECT * from user WHERE username=? and password=?";	
	// 	db.getResult(sql,[user.username,user.password],function(result){
	// 			if(result.length>0)
	// 			{
	// 				callback(true);
	// 			}
	// 			else
	// 			{
	// 				callback(false);
	// 			}

	// 	});
	// },

	getAll:function(callback)
	{
		var sql="SELECT * from catagory";	
		db.getResult(sql,[],function(result){
				callback(result);

		});
	},


	getAllSupp:function(callback)
	{
		var sql="SELECT * from supplier";	
		db.getResult(sql,[],function(result){
				callback(result);

		});
	},

	getAllbyId:function(cat_id,callback)
	{
		var sql="SELECT * from catagory where id=?";	
		db.getResult(sql,[cat_id],function(result){
				callback(result);

		});
	},

	getAllSub:function(callback)
	{
		var sql="SELECT * from sub_catagory";	
		db.getResult(sql,[],function(result){
				callback(result);

		});
	},

	insert:function(user,callback)
	{
		var res = 0;
		var check = "SELECT * from catagory where cat_name = ?";	
		db.getResult(check,[user.cat_name],function(result1){
				if(result1.length>0)
				{
					alert("Already exists");
				}
				else
				{
					var sql="INSERT INTO catagory VALUES(null,?,?,?,?)";	
					db.execute(sql,[user.cat_name,user.createData,user.updateDate,user.isDelete],function(result){
					if(result)
					{
						callback(true);
					}
					else
					{
						callback(false);
					}
				});
				}

		});
		
		
	},



	insertSubCat:function(object,callback)
	{
		var check = "SELECT * from sub_catagory where sub_cat_name = ?";	
		db.getResult(check,[object.sub_cat_name],function(result1){
				if(result1.length>0)
				{
					alert("Already exists");
				}
				else
				{
					var sql="INSERT INTO sub_catagory VALUES(null,?,?,?,?,?,?)";	
					db.execute(sql,[object.sub_cat_name,object.cat_id,object.createdBy,object.createData,object.updateDate,object.isDelete],function(result){
					if(result)
					{
						callback(true);
					}
					else
					{
						callback(false);
					}
				});
				}

		});
		
		
	},


	insertManufac:function(object,callback)
	{
		var check = "SELECT * from manufacturer where man_name = ?";	
		db.getResult(check,[object.manu_name],function(result1){
				if(result1.length>0)
				{
					alert("Already exists");
				}
				else
				{
					var sql="INSERT INTO manufacturer VALUES(null,?,?,?,?,?,?)";	
					db.execute(sql,[object.manu_name,object.createData,object.updateDate,object.isDelete,object.sub_cat_id,object.made_in],function(result){
					if(result)
					{
						callback(true);
					}
					else
					{
						callback(false);
					}
				});
				}

		});
		
		
	},

	getById:function(id,callback)
	{
		var sql="SELECT * from employer WHERE id=?";	
		db.getResult(sql,[id],function(result){
				if(result.length>0)
				{
					callback(result[0]);
				}
				else
				{
					callback([]);
				}

		});
	},

	update:function(user,callback)
	{
		var sql="UPDATE employer SET emp_name=?,comp_name=?,contact_no=?,user_name=?,password=? where id=?";	
		db.execute(sql,[user.name,user.cn,user.con,user.un,user.password,user.id],function(result){
				if(result)
				{
					callback(true);
				}
				else
				{
					callback(false);
				}

		});
	},


	delete:function(id,callback)
	{
		var sql="DELETE from employer where id=?";	
		db.execute(sql,[id],function(result){
				if(result)
				{
					callback(true);
				}
				else
				{
					callback(false);
				}

		});
	},

	insertSupp:function(user,callback)
	{
		var res = 0;
		var check = "SELECT * from supplier where supp_name = ?";	
		db.getResult(check,[user.supp_name],function(result1){
				if(result1.length>0)
				{
					alert("Already exists");
				}
				else
				{
					var sql="INSERT INTO supplier VALUES(null,?,?,?,?)";	
					db.execute(sql,[user.supp_name,user.createData,user.updateDate,user.isDelete],function(result){
					if(result)
					{
						callback(true);
					}
					else
					{
						callback(false);
					}
				});
				}

		});
		
		
	},


	getAllManDet:function(callback)
	{
		var sql="SELECT * from manufacturer";	
		db.getResult(sql,[],function(result){
				callback(result);

		});
	},


	searchSubCatIdFromManu:function(manId,callback)
	{
		var sql="SELECT * from manufacturer where man_id=?";	
		db.getResult(sql,[manId],function(result){
				callback(result);

		});
	},

	searchCatIdFromSub:function(subID,callback)
	{
		var sql="SELECT * from sub_catagory where id=?";	
		db.getResult(sql,[subID],function(result){
				callback(result);

		});
	},

	getAllSubbyId:function(catID,callback)
	{
		var sql="SELECT * from sub_catagory where id=?";	
		db.getResult(sql,[catID],function(result){
				callback(result);

		});
	},

	pro_det_ser:function(pdID,callback)
	{
		var sql="SELECT * from product_details where product_name=?";	
		db.getResult(sql,[pdID],function(result){
				callback(result);

		});
	},



	insertProduct:function(user,callback)
	{
		var check = "SELECT * from product where pro_name = ?";	
		db.getResult(check,[user.pro_name],function(result1){
				if(result1.length>0)
				{
					alert("Already exists");
				}
				else
				{
					var sql="INSERT INTO product VALUES(null,?,?,?,?,?,?,?)";	
					db.execute(sql,[user.pro_name,user.cat_id,user.sub_cat_id,user.man_id,user.createData,user.updateDate,user.isDelete],function(result){
					if(result)
					{
						callback(true);
					}
					else
					{
						callback(false);
					}
				});
				}

		});
		
		
	},

	insertProductDetails:function(user,callback)
	{
		
					var sql="INSERT INTO product_details VALUES(null,?,?,?,?,?,?,?)";	
					db.execute(sql,[user.pi,user.pn,user.si,user.p,user.filePath,user.dc,user.wt],function(result){
					if(result)
					{
						callback(true);
					}
					else
					{
						callback(false);
					}
		});
		
		
	},

	getAllPro:function(callback)
	{
		var sql="SELECT * FROM product JOIN sub_catagory ON product.sub_cat_id=sub_catagory.id JOIN catagory ON product.cat_id=catagory.id JOIN manufacturer ON product.man_id=manufacturer.man_id";	
		db.getResult(sql,[],function(result){
				callback(result);

		});
	},

	getAllProByID:function(id1,callback)
	{
		var sql="SELECT * FROM product JOIN sub_catagory ON product.sub_cat_id=sub_catagory.id JOIN catagory ON product.cat_id=catagory.id JOIN manufacturer ON product.man_id=manufacturer.man_id where pro_id=?";	
		db.getResult(sql,[id1],function(result){
				callback(result);

		});
	}
	
	




	// searchByName:function(name,callback)
	// {
	// 	var sql="SELECT * from user WHERE username=?";	
	// 	db.getResult(sql,[name],function(result){

	// 			if(result.length>0)
	// 			{
					
	// 				callback(result);
	// 			}
	// 			else
	// 			{
					
	// 				callback([]);
	// 			}

	// 	});
	// }
};

