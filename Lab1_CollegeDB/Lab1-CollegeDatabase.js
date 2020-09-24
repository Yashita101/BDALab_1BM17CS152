show dbs

use College 
db

db.createCollection("Student");
db.createCollection("Faculty");
db.createCollection("COE");
db.createCollection("Library");
db.createCollection("Admission");
db.createCollection("CollegeFest");
show collections

db.Student.insertMany([{_id:1, Name: "Aditi", USN: "1BM17CS210", Sem: 7, Dept: "CSE", CGPA: 9.0},
                       {_id:2, Name: "Bharat", USN: "1BM17IS211", Sem: 7, Dept: "ISE", CGPA: 9.34},
                       {_id:3, Name: "Chandana", USN: "1BM17EC212", Sem: 5, Dept: "ECE", CGPA: 8.02},
                       {_id:4, Name: "Diti", USN: "1BM17CS213", Sem: 3, Dept: "CSE", CGPA: 8.05}]);
                       
db.Student.find();
db.Student.update({_id:2}, {$set: {Dept: "ETE", USN:"1BM17ET211"}});
db.Student.remove({_id:3},true);
db.Student.find();


db.Faculty.insertMany([{_id:1,Name:"Anjali",Department:"CSE",Designation:"Professor",email:"an@gmail.com",Contact:9876543210},
                   {_id:2,Name:"Binal",Department:"ISE",Designation:"Assistant Professor",email:"bi@gmail.com",Contact:9876543211},
                   {_id:3,Name:"Chirag",Department:"ETE",Designation:"HOD",email:"cg@gmail.com",Contact:9876543212},
                   {_id:4,Name:"Dinesh",Department:"ECE",Designation:"Professor",email:"di@gmail.com",Contact:9876543213}]);
                   
db.Faculty.find();
db.Faculty.update({Name: "Binal"}, {$set: {Department: "EEE", email: "binal@gmail.com"}});
db.Faculty.deleteOne({_id:1}, true);
db.Faculty.find();

db.COE.insertMany([{_id:1,Name:"Eli",Dept_handling:"CIE",email:"eli@gmail.com",PhNo:9844012121,Address:"Jayanagar"},
                   {_id:2,Name:"Francisca",Dept_handling:"SEE",email:"fa@gmail.com",PhNo:9844012122,Address:"KR Road"},
                   {_id:3,Name:"Gim",Dept_handling:"Fasttrack",email:"gim@gmail.com",PhNo:9844012123,Address:"BTM Layout"},
                   {_id:4,Name:"Hita",Dept_handling:"Re-registration",email:"hita@gmail.com",PhNo:9844012124,Address:"VV Puram"}]);
db.COE.find()
db.COE.update({Dept_handling:"Fasttrack"}, {$set:{Dept_handling:"FT"}});
db.COE.deleteOne({Name:"Hita"}, true);
db.COE.find();


db.Library.insertMany([{_id:1,BookName:"Basic Electrical Engg",BookNum:1100,Author:"XYZ",Department:"Electronics",Copies:150},
                   {_id:2,BookName:"Computer Networks",BookNum:1020,Author:"FGH",Department:"Computer Science",Copies:10},
                   {_id:3,BookName:"Number Theory",BookNum:1120,Author:"IJK",Department:"Mathematics",Copies:15},
                   {_id:4,BookName:"Digital Communication",BookNum:2106,Author:"ABC",Department:"Telecommunication",Copies:5}]);
                   
db.Library.find();
db.Library.update({_id:1}, {$set: {Copies:135, Author:"LMN"}});
db.Library.remove({BookNum:1120}, true);
db.Library.find();
db.Library.find({Author:"ABC"});



db.Admission.insertMany([{_id:1,Name:"Indra",Department:"CSE",Type:"CET",Matriculation:95.34,PU:92},
                   {_id:2,Name:"Jayshree",Department:"EIE",Type:"COMEDK",Matriculation:93.11,PU:95},
                   {_id:3,Name:"Kaamini",Department:"ECE",Type:"Management",Matriculation:80.7,PU:77},
                   {_id:4,Name:"Leela",Department:"CSE",Type:"CET",Matriculation:95.3,PU:96.8}]);
                   
db.Admission.find();
db.Admission.updateMany({Department:"CSE"}, {$set:{Department:"ISE"}});
db.Admission.deleteOne({PU: {$lt:80}}, true);
db.Admission.findOne({_id:2});
db.Admission.find();



db.CollegeFestival.insertMany([{_id:1,Event:"Dance",Type1:"Western",Type2:"Cultutal",Coordinator:"Mahima",Department:"BT",Date:11/03/2020},
                   {_id:2,Event:"Quiz",Type:"Technical",Coordinator:"Nia",Department:"ISE",Date:11/03/2020},
                   {_id:3,Event:"Online Treasure Hunt",Type:"Non-Technical",Coordinator:"Om",Department:"CSE",Date:12/03/2020},
                   {_id:4,Event:"Music",Type:"Cultural",Coordinator:"Pai",Department:"CHE",Date:12/03/2020}]);
                   
db.CollegeFestival.find();
db.CollegeFestival.update({_id:1}, {$set:{Coordinator: "Mitchell", Department:"CHE"}});
db.CollegeFestival.deleteMany({Date:12/03/2020}, true);
db.CollegeFestival.find();
db.CollegeFestival.find({Department:"CHE"});