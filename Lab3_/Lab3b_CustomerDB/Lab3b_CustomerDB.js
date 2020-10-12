show dbs
use CustomerDB
db

db.createCollection("Customer")
  
//db.Customer.insertMany([
//                        {CustID:1,AccBal:2000,AccType:"Z"},
//                        {CustID:1,AccBal:5000,AccType:"A"},
//                        {CustID:2,AccBal:1100,AccType:"Z"},
//                        {CustID:2,AccBal:5000,AccType:"A"},
//                        {CustID:3,AccBal:45000,AccType:"Z"}])
                        
   
db.Customer.find().pretty();                       
db.Customer.find({AccBal:{$gt:1200},AccType:"Z"});

db.Customer.aggregate([
                    {$group:{
                        _id:"$CustID",
                        min_bal:{$min:"$AccBal"},
                        max_bal:{$max:"$AccBal"}
                    
                        }
                    }
                   ]);
                    
mongoexport -db CustomerDB -c

                    
                       
                            
                       