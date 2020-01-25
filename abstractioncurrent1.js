var EPDCL= function(serviceNo,uidNo,units,priceperunit){
  this.serviceNo=serviceNo;
  this.uidNo=uidNo;
  this.units=units;
  this.priceperunit=priceperunit;
  var calbill=function(){
    var sergeprice= 50;
    var totalbill= (units * priceperunit)+sergeprice;
    console.log("serviceNo : " + serviceNo + " " + " uidNo : " + uidNo + " " + "units : " + units + " " + "Power Bill is : " + totalbill);
  }
  this.bill=function(){
    calbill();
  }
}
var vamsi = new EPDCL(101,1,250,2.50);
var sanju = new EPDCL(102,2,300,2.50);
var sai =new EPDCL(103,3,400,4);
var ganesh = new EPDCL(104,4,450,4);
var kiran =new EPDCL(105,5,500,4);
 vamsi.bill();
 sanju.bill();
 sai.bill();
 ganesh.bill();
 kiran.bill();
