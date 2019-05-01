
//arrays
 var product = [];
 var comment = [];
    var loadedP = [];
    var loadedC = [];
     var loadedCC = [];
   var choosenP=[];
//vars
var curr;
var name = 'country';
var j,indexC;
var selectedII;

product = JSON.parse(window.sessionStorage.getItem("productarr"));
comment = JSON.parse(window.sessionStorage.getItem("commentarr"));
choosenP = JSON.parse(window.sessionStorage.getItem("cartCP"));


//Dialog elements
var contAll = document.getElementById("contAll"); 
var productC = document.getElementById("productC"); 
var closeI = document.getElementById("closebtn"); 

// products elements
//product body

var bodyP1 = document.getElementById("theProduct1"); 
var bodyP2 = document.getElementById("theProduct2"); 
var bodyP3 = document.getElementById("theProduct3"); 
var bodyP4 = document.getElementById("theProduct4"); 
var bodyP5 = document.getElementById("theProduct5"); 
var bodyP6 = document.getElementById("theProduct6"); 
var bodyP7 = document.getElementById("theProduct7"); 
var bodyP8 = document.getElementById("theProduct8"); 
var bodyP9 = document.getElementById("theProduct9"); 
var bodyP10 = document.getElementById("theProduct10"); 
var bodyP11 = document.getElementById("theProduct11"); 
var bodyP12 = document.getElementById("theProduct12"); 

//name
var nameP1 = document.getElementById("nameP1"); 
var nameP2 = document.getElementById("nameP2"); 
var nameP3 = document.getElementById("nameP3"); 
var nameP4 = document.getElementById("nameP4"); 
var nameP5 = document.getElementById("nameP5"); 
var nameP6 = document.getElementById("nameP6"); 
var nameP7 = document.getElementById("nameP7"); 
var nameP8 = document.getElementById("nameP8"); 
var nameP9 = document.getElementById("nameP9"); 
var nameP10 = document.getElementById("nameP10"); 
var nameP11 = document.getElementById("nameP11"); 
var nameP12 = document.getElementById("nameP12"); 
//rate
var rateP1 = document.getElementById("rateP1"); 
var rateP2 = document.getElementById("rateP2"); 
var rateP3 = document.getElementById("rateP3"); 
var rateP4 = document.getElementById("rateP4"); 
var rateP5 = document.getElementById("rateP5"); 
var rateP6 = document.getElementById("rateP6"); 
var rateP7 = document.getElementById("rateP7"); 
var rateP8 = document.getElementById("rateP8"); 
var rateP9 = document.getElementById("rateP9"); 
var rateP10 = document.getElementById("rateP10"); 
var rateP11 = document.getElementById("rateP11"); 
var rateP12 = document.getElementById("rateP12"); 
//price
var priceP1 = document.getElementById("priceP1");
var priceP2 = document.getElementById("priceP2");
var priceP3 = document.getElementById("priceP3");
var priceP4 = document.getElementById("priceP4");
var priceP5 = document.getElementById("priceP5");
var priceP6 = document.getElementById("priceP6");
var priceP7 = document.getElementById("priceP7");
var priceP8 = document.getElementById("priceP8");
var priceP9 = document.getElementById("priceP9");
var priceP10 = document.getElementById("priceP10");
var priceP11 = document.getElementById("priceP11");
var priceP12 = document.getElementById("priceP12");
//img
var imgP1 = document.getElementById("imgP1");
var imgP2 = document.getElementById("imgP2");
var imgP3 = document.getElementById("imgP3");
var imgP4 = document.getElementById("imgP4");
var imgP5 = document.getElementById("imgP5");
var imgP6= document.getElementById("imgP6");
var imgP7 = document.getElementById("imgP7");
var imgP8 = document.getElementById("imgP8");
var imgP9 = document.getElementById("imgP9");
var imgP10 = document.getElementById("imgP10");
var imgP11 = document.getElementById("imgP11");
var imgP12 = document.getElementById("imgP12");
//cart button
var cart1 = document.getElementById("cart1");
var cart2 = document.getElementById("cart2");
var cart3 = document.getElementById("cart3");
var cart4 = document.getElementById("cart4");
var cart5 = document.getElementById("cart5");
var cart6 = document.getElementById("cart6");
var cart7 = document.getElementById("cart7");
var cart8 = document.getElementById("cart8");
var cart9 = document.getElementById("cart9");
var cart10 = document.getElementById("cart10");
var cart11 = document.getElementById("cart11");
var cart12 = document.getElementById("cart12");



//arrays
var cartP = [cart1,cart2,cart3,cart4,cart5,cart6,cart7,cart8,cart9,cart10,cart11,cart12];
var bodyP = [bodyP1,bodyP2,bodyP3,bodyP4,bodyP5,bodyP6,bodyP7,bodyP8,bodyP9,bodyP10,bodyP11,bodyP12];
var nameP = [nameP1,nameP2,nameP3,nameP4,nameP5,nameP6,nameP7,nameP8,nameP9,nameP10,nameP11,nameP12];
var rateP = [rateP1,rateP2,rateP3,rateP4,rateP5,rateP6,rateP7,rateP8,rateP9,rateP10,rateP11,rateP12];
var priceP = [priceP1,priceP2,priceP3,priceP4,priceP5,priceP6,priceP7,priceP8,priceP9,priceP10,priceP11,priceP12];
var imgP = [imgP1,imgP2,imgP3,imgP4,imgP5,imgP6,imgP7,imgP8,imgP9,imgP10,imgP11,imgP12];
var imgPS = ["imgP1","imgP2","imgP3","imgP4","imgP5","imgP6","imgP7","imgP8","imgP9","imgP10","imgP11","imgP12"];
var namePSA = ["nameP1","nameP2","nameP3","nameP4","nameP5","nameP6","nameP7","nameP8","nameP9","nameP10","nameP11","nameP12"];
var cartA=["cart1","cart2","cart3","cart4","cart5","cart6","cart7","cart8","cart9","cart10","cart11","cart12"];
var added=["added1","added2","added3","added4","added5","added6","added7","added8","added9","added10","added11","added12"];
    




function changeAddonLoad()
{

try {
  choosenP.length;
}
catch(err) {
 choosenP = [];
}



  for(var jk =0;jk < choosenP.length;jk++)
  {
    console.log(choosenP[jk].name);

  }


    for(var l = 0;l<choosenP.length;l++)
{
for(var op = 0;op<product.length;op++)
{
  if(choosenP[l].name.includes(product[op].name))
  {
product[op].carts = 1;
break;
  }else
  product[op].carts = 0;
}
}  
}
function welcomewrite() {
}
(function getProducts()
  {
    changeAddonLoad();
for(var i=0;i < 12;i++)
{

  var currL = ' $';
  var value = 1;

checkProductLoaded();
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
    nameP[i].innerHTML = product[j].name;
    priceP[i].innerHTML = (Number(product[j].price)*value) + currL;
    rateP[i].innerHTML = product[j].rating +" <i id=\"starI\" class=\"fas fa-star\">";
    imgP[i].src = product[j].path;
    if(product[j].carts === 1)
    {
  //    console.log(product[j].name);
var addedText;

        cartP[i].style.backgroundColor = "#2ecc71";
addedText = document.getElementById(added[i]); 
addedText.innerHTML= "Added to cart" + "  <span><i class=\"fas fa-check\"></i></span>";
}
}
searchP();


  })();
//products

  function checkProductLoaded()
  {
     j = Math.floor(Math.random() * (83 - 72 + 1) ) + 72; 

  if(loadedP.includes(j))
checkProductLoaded();
    else
loadedP.push(j);
  }

  function checkCommentLoaded()
  {
    indexC = Math.floor(Math.random() * (29 - 0 + 1) ) + 0; 

  if(loadedC.includes(indexC))
checkCommentLoaded();
    else
      loadedC.push(indexC);
    
  }

//on mouse over
function onMouseProduct (obj)
{
      obj.style.color = "#1da1f2";

}

function onClickProduct (obj)
{
    var productChoo = document.getElementById(String(obj)); 

if(String(obj).includes("img"))
{
   var indexL = imgPS.indexOf(String(obj));
  selectedII = indexL;
   var nameL = nameP[indexL].innerHTML;
   var index = product.findIndex(x => x.name === nameL);
}
  else
  {
      var indexL = namePSA.indexOf(String(obj));
  selectedII = indexL;
   var nameL = productChoo.innerHTML;
   var index = product.findIndex(x => x.name === nameL);
  }
      openD(index);
}
function onclickCard(obj)
{
var btnC = document.getElementById(String(obj)); 
var addedText;
   var indexL = cartA.indexOf(String(obj));
   var nameL = nameP[indexL].innerHTML;
   var index = product.findIndex(x => x.name === nameL);
   var indexDelete;
switch(product[index].carts)
{
    case 0 :
        btnC.style.backgroundColor = "#2ecc71";
addedText = document.getElementById(added[indexL]); 
addedText.innerHTML= "Added to cart" + "  <span><i class=\"fas fa-check\"></i></span>";
product[index].carts = 1;
choosenP.push(product[index]);
 window.sessionStorage.setItem('cartCP',JSON.stringify(choosenP));
  break;
  case 1:
   btnC.style.backgroundColor = "#1da1f2";
addedText = document.getElementById(added[indexL]); 
addedText.innerHTML= "Add to cart" + " <span><i class=\"fas fa-shopping-cart\"></i></span>";
product[index].carts = 1;
//remove from cart
l = 0;
op = 0;
   for(var l = 0;l<choosenP.length;l++)
{
  if(choosenP[l].name.includes(nameL))
  {
    indexDelete = l;
break;
  }
}  
  product[index].carts = 0;
  choosenP.splice(indexDelete, 1);
   window.sessionStorage.setItem('cartCP',JSON.stringify(choosenP));

  break;


}

}
function onclickCardC(selectedII)
{
  var btnC = document.getElementById("cart"+(selectedII+1)); 
var addedText;
   var indexL = selectedII;
   var nameL = nameP[indexL].innerHTML;
   var index = product.findIndex(x => x.name === nameL);
switch(product[index].carts)
{
    case 1 :
        btnC.style.backgroundColor = "#2ecc71";
addedText = document.getElementById(added[selectedII]); 
addedText.innerHTML= "Added to cart" + "  <span><i class=\"fas fa-check\"></i></span>";
product[index].carts = 1;
  break;
  case 0:
   btnC.style.backgroundColor = "#1da1f2";
addedText = document.getElementById(added[selectedII]); 
addedText.innerHTML= "Add to cart" + " <span><i class=\"fas fa-shopping-cart\"></i></span>";
product[index].carts = 0;

}
}
//products full dialog
var picPF,namePF,ratePF,pricePF,descFP,cartPF,CommentN;
picPF = document.getElementById("picPF");
namePF = document.getElementById("namePF");
ratePF = document.getElementById("ratePF");
pricePF = document.getElementById("pricePF");
descFP = document.getElementById("descFP");
cartPF = document.getElementById("cartPF");
function closeD()
{
contAll.style.display  = "none";
productC.style.display  = "none";

}
function openD(indexP)
{
  getPFdata(indexP);
contAll.style.display  = "block";
productC.style.display  = "block";

}
function getPFdata(indexPF)
{
 var currL = ' $';
  var value = 1;

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
  picPF.src = product[indexPF].path;
namePF.innerHTML = product[indexPF].name;
ratePF.innerHTML = product[indexPF].rating  +" <i id=\"starI\" class=\"fas fa-star\">";
pricePF.innerHTML =(Number(product[indexPF].price)*value) + currL;
descFP.innerHTML = product[indexPF].desc;
initCardF();

//comments in Full dialog
CommentN =  Number(product[indexPF].comments);
var photoC,nameC,rateC,commentC,leftA,rightA;

photoC = document.getElementById("photoC");
nameC = document.getElementById("nameC");
rateC = document.getElementById("rateC");
commentC = document.getElementById("commentC");
leftA = document.getElementById("leftA");
rightA = document.getElementById("rightA");
//clear the list befor use it again
loadedCC= [];

for(var k = 0 ;k<CommentN;k++)
{
checkCommentLoaded();
loadedCC.push(comment[indexC]);
}
photoC.src = loadedCC[0].ava;
nameC.innerHTML = loadedCC[0].name;
rateC.innerHTML = loadedCC[0].rate +" <i id=\"starI\" class=\"fas fa-star\">";
commentC.innerHTML = loadedCC[0].comment;

}
var iC = 0;
function commentPrev()
{

  if(iC > 0)
  {
      iC--;
photoC.src = loadedCC[iC].ava;
nameC.innerHTML = loadedCC[iC].name;
rateC.innerHTML = loadedCC[iC].rate +" <i id=\"starI\" class=\"fas fa-star\">";
commentC.innerHTML = loadedCC[iC].comment;
  }

}
function commentNext()
{
if(iC < loadedCC.length-1)
{
   iC++;
photoC.src = loadedCC[iC].ava;
nameC.innerHTML = loadedCC[iC].name;
rateC.innerHTML = loadedCC[iC].rate +" <i id=\"starI\" class=\"fas fa-star\">";
commentC.innerHTML = loadedCC[iC].comment;
}
}



function onclickCardF()
{
   var nameL = namePF.innerHTML
   var index = product.findIndex(x => x.name === nameL);
switch(product[index].carts)
{
    case 0 :
        cartPF.style.backgroundColor = "#2ecc71";
cartPF.innerHTML= "Added to cart " + "  <span><i class=\"fas fa-check\"></i></span>";
product[index].carts = 1;
choosenP.push(product[index]);
 window.sessionStorage.setItem('cartCP',JSON.stringify(choosenP));
 onclickCardC(selectedII);
  break;
  case 1:
   cartPF.style.backgroundColor = "#1da1f2";
cartPF.innerHTML= "Add to cart " + " <span><i class=\"fas fa-shopping-cart\"></i></span>";
product[index].carts = 0;
onclickCardC(selectedII);
//remove from cart
l = 0;
op = 0;
   for(var l = 0;l<choosenP.length;l++)
{
  if(choosenP[l].name.includes(nameL))
  {
    indexDelete = l;
break;
  }
}  
  product[index].carts = 0;
  choosenP.splice(indexDelete, 1);
   window.sessionStorage.setItem('cartCP',JSON.stringify(choosenP));

  break;

}
}
function initCardF()
{
   var nameL = namePF.innerHTML
   var index = product.findIndex(x => x.name === nameL);
switch(product[index].carts)
{
    case 1 :
        cartPF.style.backgroundColor = "#2ecc71";
cartPF.innerHTML= "Added to cart " + "  <span><i class=\"fas fa-check\"></i></span>";
  break;
  case 0:
   cartPF.style.backgroundColor = "#1da1f2";
cartPF.innerHTML= "Add to cart " + " <span><i class=\"fas fa-shopping-cart\"></i></span>";
  break;


}
}


//filter
// var namePSV,catPSV,minpriceV,maxpriceV;
var namePS,catPS,minprice=0,maxprice;

function searchP()
{
    var sti,endi,ite,sorryS;

    sorryS = document.getElementById("sorryS");

  //get Search Data
namePS = document.getElementById("namePS").value;
if(document.getElementById("priceL").value != 0)
minprice = document.getElementById("priceL").value;
else
minprice=0;


if(document.getElementById("priceH").value != 0)
maxprice = document.getElementById("priceH").value;
else
maxprice=99999999;

sti = 72;
endi = 83;

ite = 0;
var i=0;
for( i=sti;i <= endi;i++)
{
  var currL = ' $';
  var value = 1;

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
//the more conditions
if(product[i].name.toLowerCase().includes(namePS.trim().toLowerCase())&&(Number(product[i].price)*value) >=Number(minprice)&&(Number(product[i].price)*value) <= Number(maxprice))
{
  //add item
  document.getElementById("productstable").appendChild(bodyP[ite]);  
      nameP[ite].innerHTML = product[i].name;
    priceP[ite].innerHTML =   (Number(product[i].price)*value) + currL;
    rateP[ite].innerHTML = product[i].rating +" <i id=\"starI\" class=\"fas fa-star\">";
    imgP[ite].src = product[i].path;

 for(var l = 0;l<choosenP.length;l++)
{
  if(choosenP[l].name.includes(product[i].name))
  { 
     var addedText;

        cartP[ite].style.backgroundColor = "#2ecc71";
addedText = document.getElementById(added[ite]); 
addedText.innerHTML= "Added to cart" + "  <span><i class=\"fas fa-check\"></i></span>";
break;
  }
  else
  {
     cartP[ite].style.backgroundColor = "#1da1f2";
addedText = document.getElementById(added[ite]);
addedText.innerHTML= "Add to cart" + " <span><i class=\"fas fa-shopping-cart\"></i></span>";
  }

}  
        ite++;

}
}

if(ite === 0)
            sorryS.innerHTML = "No products found :(";
else
    sorryS.innerHTML = "";

for(var j = ite;j<12;j++)
{
  //remove items
  bodyP[j].remove();
}
}


function searchMain()
{
    var sti,endi,ite,sorryS;
    sti = 72;
endi = 83;
    sorryS = document.getElementById("sorryS");
  //get Search Data
var namePS = document.getElementById("search").value;
document.getElementById("namePS").value = namePS;
ite = 0;
var i=0;
for( i=sti;i <= endi;i++)
{
  var currL = ' $';
  var value = 1;

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
//the more conditions
if(product[i].name.toLowerCase().includes(namePS.trim().toLowerCase()))
{
  //add item
  document.getElementById("productstable").appendChild(bodyP[ite]);  
      nameP[ite].innerHTML = product[i].name;
    priceP[ite].innerHTML =   (Number(product[i].price)*value) + currL;
    rateP[ite].innerHTML = product[i].rating +" <i id=\"starI\" class=\"fas fa-star\">";
    imgP[ite].src = product[i].path;

 for(var l = 0;l<choosenP.length;l++)
{
  if(choosenP[l].name.includes(product[i].name))
  { 
     var addedText;

        cartP[ite].style.backgroundColor = "#2ecc71";
addedText = document.getElementById(added[ite]); 
addedText.innerHTML= "Added to cart" + "  <span><i class=\"fas fa-check\"></i></span>";
break;
  }
  else
  {
     cartP[ite].style.backgroundColor = "#1da1f2";
addedText = document.getElementById(added[ite]);
addedText.innerHTML= "Add to cart" + " <span><i class=\"fas fa-shopping-cart\"></i></span>";
  }

}  
        ite++;

}
}

if(ite === 0)
            sorryS.innerHTML = "No products found :(";
else
    sorryS.innerHTML = "";

for(var j = ite;j<12;j++)
{
  //remove items
  bodyP[j].remove();
}
}
