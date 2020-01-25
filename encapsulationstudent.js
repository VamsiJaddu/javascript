var student = function(fname,lname,id,m1,m2,m3,m4,m5,m6){
  this.fname=fname;
  this.lname=lname;
  this.id=id;
  this.m1=m1;
  this.m2=m2;
  this.m3=m3;
  this.m4=m4;
  this.m5=m5;
  this.m6=m6;
  this.gettotal = function(){
    var total= this.m1+this.m2+this.m3+this.m4+this.m5+this.m6;
     return total;
  }
  this.getgrade = function(){
    var T=this.gettotal();
    if(T >550)
    {
      console.log("A");
    }
    if(T<550 && T>400)
    {
      console.log("B");
    }
    if(T<400 && T>300)
    {
      console.log("c");
    }
    if(T<300 && T>250)
    {
      console.log("D");
    }
    if(T<250)
    {
      console.log("Fail");
    }
  }
  this.getfullname = function(){
    var fullname=this.fname +this.lname;
    console.log(fullname);
  }
}
var std1 = new student("vamsi","jaddu",1,75,65,86,98,67,90);
console.log(std1.gettotal());
std1.getgrade();
std1.getfullname();
