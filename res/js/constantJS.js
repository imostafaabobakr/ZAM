var Loader = document.getElementById("loader");
var Main = document.getElementById("mainDiv");

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

