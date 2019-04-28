//vars
var i = 0;
var txt = "Welcome to ZAM Market !!"; 
var speed = 150; 
var curr;

if(curr === undefined || curr === null)
curr =1;

//Elements define
var welcomeSentence = document.getElementById("mainTxt"); 
var SelectedCountry = document.getElementById("selectO");
var Button = document.getElementById("button");

//welcome text functions
welcomeSentence.onmouseover = function()
{
    welcomeSentence.style.color = "#1da1f2";
}
welcomeSentence.onmouseout = function()
{
    welcomeSentence.style.color = "#fff";
}

function welcomewrite() {

  if (i < txt.length) 
  {
welcomeSentence.innerHTML += txt.charAt(i);
  }
i++;
    setTimeout(welcomewrite, speed);

};

//go to page on buttom click
function goPageHome()
{
	//store coockies 
window.sessionStorage.country = curr;
 //go to home page
 window.location.href = "home.html";
}
Button.onmouseover = function()
{
    Button.style.backgroundColor = "#1da1f2";
}
Button.onmouseout = function()
{
    Button.style.backgroundColor = "transparent";
}

function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}