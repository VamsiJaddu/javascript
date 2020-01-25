var currentbill= function(serviceno,uidno,noofunits,priceperunit,sergecharge){
  this.serviceno=serviceno;
  this.uidno=uidno;
  this.noofunits=noofunits;
  this.priceperunit=priceperunit;
   this.sergeprice=sergecharge;
  this.getfinalbill=function(){
    var bill=this.sergeprice + this.priceperunit*this.noofunits;
    console.log(bill);
  }
}
var cb=new currentbill(143,69,250,4,10);
document.getElementById("demo").innerHTML=cb.getfinalbill();
