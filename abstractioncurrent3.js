var EPDCL= function(serviceNo,uidNo,units){
  this.serviceNo=serviceNo;
  this.uidNo=uidNo;
  this.units=units;
  var calbill=function(){
    var sergeprice = 50;
    var totalbill= (units * 2.50)+sergeprice;
    console.log("serviceNo : " + serviceNo + " " + " uidNo : " + uidNo + " " + "units : " + units + " " + "Power Bill is : " + totalbill);
  }
  var calcabill=function(){
    var sergeprice = 50;
    var totalbill= (units * 3.50)+sergeprice;
    console.log("serviceNo : " + serviceNo + " " + " uidNo : " + uidNo + " " + "units : " + units + " " + "Power Bill is : " + totalbill);
  }
  var calcalbill=function(){
    var sergeprice = 50;
    var totalbill= (units * 4)+sergeprice;
    console.log("serviceNo : " + serviceNo + " " + " uidNo : " + uidNo + " " + "units : " + units + " " + "Power Bill is : " + totalbill);
  }
  this.bill=function(){
    if(units<250)
    {
     calbill();
    }
    if(units>=250 && units<=400)
    {
      calcabill();
    }
    if(units>=400 && units<=500)
    {
      calcalbill();
    }
  }
}
var vamsi = new EPDCL(101,1,250);
var sanju = new EPDCL(102,2,300);
var sai =new EPDCL(103,3,400);
var ganesh = new EPDCL(104,4,450);
var kiran =new EPDCL(105,5,500);
 vamsi.bill();
 sanju.bill();
 sai.bill();
 ganesh.bill();
 kiran.bill();
