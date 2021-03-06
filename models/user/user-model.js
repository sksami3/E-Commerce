var db=require('./db');


module.exports={

	validate1:function(user,callback)
	{
		var sql="SELECT * from register WHERE username=? and password=? and type=?";	
		db.getResult(sql,[user.username,user.password,'user'],function(result){
				if(result.length>0)
				{
					callback(true);
				}
				else
				{
					callback(false);
				}

		});
	},
	validate2:function(user,callback)
	{
		var sql="SELECT * from register WHERE username=? and password=? and type=?";	
		db.getResult(sql,[user.username,user.password,'admin'],function(result){
				if(result.length>0)
				{
					callback(true);
				}
				else
				{
					callback(false);
				}

		});
	},

	getAllPD:function(callback)
	{
		var sql="SELECT * from product_details";	
		db.getResult(sql,[],function(result){
				callback(result);

		});
	},

	getAllCat:function(callback)
	{
		var sql="SELECT * from catagory";	
		db.getResult(sql,[],function(result){
				callback(result);

		});
	},

	getAllSCat:function(callback)
	{
		var sql="SELECT * from sub_catagory";	
		db.getResult(sql,[],function(result){
				callback(result);

		});
	},


	getAll:function(callback)
	{
		var sql="SELECT * from employer";	
		db.getResult(sql,[],function(result){
				callback(result);

		});
	},
	insert:function(user,callback)
	{
		var res = 0;
		var check = "SELECT * from register where email = ?";
		//var sql="SELECT * from employer WHERE email=?";	
		db.getResult(check,[user.email],function(result1){
				if(result1.length>0)
				{
					console.log("can't");
				}
				else
				{
					var sql="INSERT INTO register VALUES(null,?,?,?,?)";	
					db.execute(sql,[user.username,user.email,user.password,user.type],function(result){
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

