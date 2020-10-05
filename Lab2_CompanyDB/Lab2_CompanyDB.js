show dbs
use Company
db;

db.createCollection("Employee");
db.createCollection("Department");

db.Employee.insertOne({_id:1, Name:"Aditi", DeptNo:1001, age:21, Gender:"Female", Contact:9876543210});
db.Employee.insertMany([{_id:2, Name:"Binod", DeptNo:1002, age:35, Gender:"Male", Contact:9876543211},
                       {_id:3, Name:"Chirag", DeptNo:1006, age:27, Gender:"Male", Contact:9876543212}]);
db.Employee.insert({_id:4, Name:"Diya", DeptNo:1003, age:29, Gender:"Female", Contact:9876543213});
db.Employee.save({_id:5, Name:"Eva", DeptNo:1004, age:20, Gender:"Female", Contact:9876543214});
db.Employee.find().pretty();

db.Department.insertOne({_id:"D1", Name:"SDE", DeptCount: 100, mail:"sdesupport@gmail.com"});
db.Department.insertMany([{_id:"D2", Name:"SDET", DeptCount: 200, mail:"sdetsupport@gmail.com"},
                          {_id:"D3", Name:"Audit", DeptCount: 250, mail:"auditsupport@gmail.com"}]);
db.Department.save({_id:"D4", Name:"DE", DeptCount: 180, mail:"desupport@gmail.com"});
db.Department.update({_id:"D5", Name:"Analyst", DeptCount: 180, mail:"analystsupport@gmail.com"}, {$set: {Head:"ABC"}}, {upsert:true});
db.Department.update({_id:"D6", Name:"Finance", DeptCount: 10, mail:"financesupport@gmail.com"}, {$set: {Head:"ABC"}}, {upsert:false});
db.Department.find().pretty();

db.Employee.update({Gender:"Female"}, {$set: {Bonus:"Rs.25000"}}, {multi:true});
db.Employee.update({_id:5},{$unset:{Contact:"9876543214"}},{upsert:true});
db.Employee.find().pretty();
db.Department.find().pretty();
db.Employee.find({DeptNo:{$gte:1001, $lte:1005}},{Name:true,DeptNo:true});
db.Employee.find({Name:/^A/}).pretty();
db.Employee.find({age:{$gt:30}}).pretty();