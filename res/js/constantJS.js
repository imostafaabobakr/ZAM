var Loader = document.getElementById("loader");
var Main = document.getElementById("mainDiv");
var dark = 0,color;

function darkApply()
{
  try
  {
dark = window.sessionStorage.getItem("dark");
if(dark == null)
  dark = 0;
  }catch(err)
  {
dark = 0;
  }
dark = Number(dark);

switch(dark)
{
case 0:
document.body.style.background = "#fff";
for(var i=0;i<12;i++)
{
  document.getElementsByClassName("theProduct")[i].style.background = "#fff";
  document.getElementsByClassName("nameP")[i].style.color = "#000";

if(i < 7 && i != 5)
{
  try{
      document.getElementsByClassName("inputt")[i].style.background = "#fff";
   document.getElementsByClassName("inputt")[i].style.color = "#000";
  }
  catch(err)
  {

  }
  
}

}
document.getElementById("header").style.background = "#fff";
document.getElementById("darkD").innerHTML = "<i id=\"dark\" class=\"far fa-moon\" onclick=\"darkMoon()\"></i>";
document.getElementById("loader").style.background = "#fff";
// Dialog
document.getElementById("productC").style.background = "#fff";

document.getElementById("closebtn").style.color = "#000";
document.getElementById("namePF").style.color = "#000";
document.getElementById("descF").style.color = "#000";
document.getElementById("descFP").style.color = "#000";
document.getElementById("comments").style.color = "#000";
document.getElementById("leftA").style.color = "#000";
document.getElementById("nameC").style.color = "#000";
document.getElementById("rightA").style.color = "#000";
color = "#000";
break;

case 1 :
document.body.style.background = "#10171e";
for(var i=0;i<12;i++)
{
  document.getElementsByClassName("theProduct")[i].style.background = "#10171e";
  document.getElementsByClassName("nameP")[i].style.color = "#fff";

if(i < 7 && i != 5)
{
  try{
    document.getElementsByClassName("inputt")[i].style.background = "#10171e";
        document.getElementsByClassName("inputt")[i].style.color = "#fff";
  }
  catch(err)
  {

  }

}
}
document.getElementById("header").style.background = "#10171e";
document.getElementById("darkD").innerHTML = "<i id=\"dark\" class=\"fas fa-moon\" onclick=\"darkMoon()\"></i>";
document.getElementById("loader").style.background = "#10171e";

// Dialog
document.getElementById("productC").style.background = "#10171e";

document.getElementById("closebtn").style.color = "#fff";
document.getElementById("namePF").style.color = "#fff";
document.getElementById("descF").style.color = "#fff";
document.getElementById("descFP").style.color = "#fff";
document.getElementById("comments").style.color = "#fff";
document.getElementById("leftA").style.color = "#fff";
document.getElementById("nameC").style.color = "#fff";
document.getElementById("rightA").style.color = "#fff";



color = "#fff";
break;

}
}


//moon onclick
function darkMoon()
{
   try
  {
dark = window.sessionStorage.getItem("dark");
if(dark == null)
  dark = 0;
  }catch(err)
  {
dark = 0;
  }
dark = Number(dark);
switch(dark)
{
case 0:
window.sessionStorage.setItem("dark",1);
break;
case 1:
window.sessionStorage.setItem("dark",0);
break;
}
  darkApply();
}







//on mouse over
function offMouseProduct (obj)
{
      obj.style.color = color;
}
function hideMain() {
	Main.style.visibility = "hidden";
}
hideMain();
window.onload = function ()
{
   setTimeout(function(){
  Loader.style.visibility = "hidden";
    Main.style.visibility = "visible";
    welcomewrite();
}, 500);
}

function openNav() {
  document.getElementById("sidenavId").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("sidenavId").style.width = "0";
}

//top button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

//country select menu functions
function selectCountry()
{
  var SelectedCountry = document.getElementById("selectO");
  //get choosen value
curr = SelectedCountry.options[SelectedCountry.selectedIndex].value;
window.sessionStorage.country = curr;
location.reload();
}
//get cookies
(function getcookies()
  {
    curr = window.sessionStorage.country;
if(curr === undefined || curr === null)
curr =1;
  })();
//get country
document.getElementById('selectO').value=curr;

