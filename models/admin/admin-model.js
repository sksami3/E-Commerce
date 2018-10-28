var db=require('./db');


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
	insert:function(user,callback)
	{
		var res = 0;
		var check = "SELECT * from catagory where cat_name = ?";	
		db.getResult(check,[user.cat_name],function(result1){
				if(result1.length>0)
				{
					console.log("Already exists");
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
					console.log("Already exists");
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

