var currentbill= function(serviceno,uidno,noofunits,priceperunit){
  this.serviceno=serviceno;
  this.uidno=uidno;
  this.noofunits=noofunits;
  this.priceperunit=priceperunit;
  this.getfinalbill=function(){
     var sergeprice=50;
    var bill=sergeprice + this.priceperunit*this.noofunits;
    console.log(bill);
  }
}
var cb=new currentbill(143,69,250,4);
document.getElementById("demo").innerHTML=cb.getfinalbill();
