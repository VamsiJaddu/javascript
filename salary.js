var employee = function(name,id,bgroup){
  this.name=name;
  this.id=id;
  this.bgroup=bgroup;
  this.getsalary=function(){
    var incentives=10000;
    var salary=20000;
    var finalsalary=incentives + salary;
    console.log(finalsalary);
  }
}
var empsalary= new employee("vamsi",143,"b+ve");
document.getElementById("demo").innerHTML=empsalary.getsalary();
