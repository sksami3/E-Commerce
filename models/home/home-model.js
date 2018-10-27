var db=require('./db');


module.exports={

	validate1:function(user,callback)
	{
		var sql="SELECT * from employer WHERE user_name=? and password=?";	
		db.getResult(sql,[user.username,user.password],function(result){
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
		var sql="SELECT * from user WHERE user_name=? and password=?";	
		db.getResult(sql,[user.username,user.password],function(result){
				if(result.length>0)
				{
					callback(true);
				}
				else
				{
					callback(false);
				}

		});
	}

	
};

