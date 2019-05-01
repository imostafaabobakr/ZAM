
//vars
var choosenP=[];
var currL,value;
var curr;
var priceAllV = 0;

(function getCurr()
{
	   currL = ' $';
   value = 1;
	switch(curr)
{
  case "1":
  currL = ' $';
value = 1;
  break;
  case "18":
  currL = ' EGP';
  value = 18;
  break;
  case "3.75":
  currL = ' SAR';
  value = 3.75;
  break;
}
})();

function changeAddonLoad()
{ 
}
function welcomewrite() {
}
//on mouse over
function onMouseProduct (obj)
{
      obj.style.color = "#1da1f2";
}

// Cart page
var photo,nameP,mainT,price,items,priceAll,billBtn;
// Divs
var productCart , empty;
photo = document.getElementById("photoP"); 
nameP = document.getElementById("nameP"); 
price = document.getElementById("priceP"); 
mainT = document.getElementById("mainT"); 
priceAll = document.getElementById("priceAll"); 
items = document.getElementById("itemsN"); 
billBtn = document.getElementById("button"); 

productCart = document.getElementById("productCart"); 
empty = document.getElementById("empty"); 

(function getCart()
{
	try
	{	
	try
	{
choosenP = JSON.parse(window.sessionStorage.getItem("cartCP"));
if(choosenP.length == undefined)
	choosenP=[];

	}catch(err)
	{
		choosenP=[];
	}

	if(choosenP.length > 0)
	{
nameP.innerHTML= choosenP[0].name;
price.innerHTML =  (Number(choosenP[0].price)*value) + currL;
photo.src = choosenP[0].path;
	}
	else
	{

	}
 getItemsN();

}
catch(err)
{

}
})();

var iC = 0;
function PPrev()
{
  if(iC > 0)
  {
      iC--;
nameP.innerHTML= choosenP[iC].name;
price.innerHTML =  (Number(choosenP[iC].price)*value) + currL;
photo.src = choosenP[iC].path;
  }

}
function PNext()
{
if(iC < choosenP.length-1)
{
   iC++;
nameP.innerHTML= choosenP[iC].name;
price.innerHTML =  (Number(choosenP[iC].price)*value) + currL;
photo.src = choosenP[iC].path;
}

}

function deleteAct()
{
	  choosenP.splice(iC, 1);
   window.sessionStorage.setItem('cartCP',JSON.stringify(choosenP));
   if(choosenP.length > 0)
   {
   	 if(iC != 0)
 {
nameP.innerHTML= choosenP[iC-1].name;
price.innerHTML =  (Number(choosenP[iC-1].price)*value) + currL;
photo.src = choosenP[iC-1].path;
 }
 else
 {
 	 	nameP.innerHTML= choosenP[iC+1].name;
price.innerHTML = (Number(choosenP[iC+1].price)*value) + currL;
photo.src = choosenP[iC+1].path;
 }
   }
    getItemsN();

}
function getItemsN()
{

for(var i=0;i<choosenP.length;i++)
	{
	if(i===0)
	{
		items.innerHTML= (i+1)+" item";
	}
	else
	{
		items.innerHTML= (i+1)+" items";
	}

priceAllV = (choosenP[i].price * value) + priceAllV;
	}

	if(choosenP.length == 0)
	{
		productCart.remove();
		document.getElementById("sorryS").innerHTML = "No thing in your cart !! , Hurry up  <i class=\"fas fa-grin-beam-sweat\"></i>";
	}
	else
		priceAll.innerHTML = priceAllV  + currL;
}
function goPay()
{
	   window.location.href = "pay.html";

}