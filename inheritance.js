var person = function (name,age,dob,mobile){
  this.name=name;
  this.age=age;
  this.dob=dob;
  this.mobile=mobile;
  this.getdetails= function(){
    var details= " Name : " + this.name + "  Date of Birth : " + this.dob + "  Age : " + this.age + " Mobile : " + this.mobile ;
       console.log(details);
  }
}
var employee =function(id,dept,email,salary){
  this.id= id;
  this.dept=dept;
  this.email=email;
  this.salary=salary;
  this.empdetails= function(){
    var edetails = " Id : " +this.id +"  Dept : " + this.dept + "  Email : " + this.email +  "  Salary :" +this.salary;
    console.log(edetails);
    }
}
var emp =new employee (235,"IT","it@gmail.com",30000);
emp__proto__= new person("sai", 24 ,"13/10/1995",986543217);
emp.empdetails();
emp__proto__.getdetails();
