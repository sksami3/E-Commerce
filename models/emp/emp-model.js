var db=require('./db');


module.exports={


	getByUn:function(un,callback)
	{
		var sql="SELECT * from employer WHERE user_name=?";	
		db.getResult(sql,[un],function(result){
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

	getAll:function(callback)
	{
		var sql="SELECT * from job";	
		db.getResult(sql,[],function(result){
				callback(result);

		});
	},
	insert:function(user,value,callback)
	{
		var sql="INSERT INTO job VALUES(null,?,?,?,?,?)";	
		db.execute(sql,[value,user.cn,user.jt,user.jl,user.sl],function(result){
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

	// getById:function(id,callback)
	// {
	// 	var sql="SELECT * from employer WHERE id=?";	
	// 	db.getResult(sql,[id],function(result){
	// 			if(result.length>0)
	// 			{
	// 				callback(result[0]);
	// 			}
	// 			else
	// 			{
	// 				callback([]);
	// 			}

	// 	});
	// },


	// update:function(user,callback)
	// {
	// 	var sql="UPDATE employer SET emp_name=?,comp_name=?,contact_no=?,user_name=?,password=? where id=?";	
	// 	db.execute(sql,[user.name,user.cn,user.con,user.un,user.password,user.id],function(result){
	// 			if(result)
	// 			{
	// 				callback(true);
	// 			}
	// 			else
	// 			{
	// 				callback(false);
	// 			}

	// 	});
	// },


	// delete:function(id,callback)
	// {
	// 	var sql="DELETE from employer where id=?";	
	// 	db.execute(sql,[id],function(result){
	// 			if(result)
	// 			{
	// 				callback(true);
	// 			}
	// 			else
	// 			{
	// 				callback(false);
	// 			}

	// 	});
	// }


	
};

