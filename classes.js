// classes are two types : 1. class keyword 2.classes by using function().
var std =new student();
class student{    //class is a keyword .The keyword does not support in ES5;
  id =100;         //class student should be first;
  name="sai";      // then instance is followed by it.
}


var std= new student();  //when you trying to create a classes by using function it supports the hoisting concept.
var student= function(){
  this.id=1001;             //where variable and function declaration are moved to top of their scope before code execution.
  this.name="sai";
}

//var objectname= new classname();

var student = function(id,name){    // it is called constructor.
  this.id=id;
  this.name=name;                   // where our function name is same as class name is called constructor overloaded.
}
var std1=new student(101,"sanju");
var std2=new student(102,"ganesh");
