var hdr;
var menuicon;
var dim;
$(document).ready(function() { 
    hdr=document.getElementById("myNav");
	menuicon=document.getElementById("icon");
	dim=document.getElementById("dim");
 });
function openMenu(){
	hdr.classList.toggle('responsive');
    menuicon.classList.toggle("change");
	dim.classList.toggle("dim");
}
function closeNav(){
	hdr.classList.remove('responsive');
    menuicon.classList.remove("change");
	dim.classList.remove("dim");
}
!function(d,s,id){
	var js,fjs=d.getElementsByTagName(s)[0];
    if(!d.getElementById(id)){js=d.createElement(s);
	js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';
	fjs.parentNode.insertBefore(js,fjs);}
	}(document,'script','weatherwidget-io-js');
function increaseValue() {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value>4?value=4:'';
  value++;
  document.getElementById('number').value = value;
}

function decreaseValue() {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 2 ? value = 2 : '';
  value--;
  document.getElementById('number').value = value;
}
function register(){
	var name=document.getElementById("name").value;
	var email=document.getElementById("email").value;
	
	var invalid=document.getElementById("invalid");
	var non=document.getElementById("noname");
	
	invalid.style.visibility="hidden";
	non.style.visibility="hidden";
	
	if(name==""){
		
	non.style.visibility="visible";
	document.getElementById("name").focus();
		return;
	}
	if(email==""){
		invalid.style.visibility="visible";
		invalid.innerHTML="*This field is required";
		
	document.getElementById("email").focus();
		return;
	}
	if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))){
		
		invalid.style.visibility="visible";
		invalid.innerHTML="*Entered email is invalid";
	document.getElementById("email").focus();
		return;
	}
	alert("You have successfully registered for the Naverra International Festival");
	window.location.replace("index.html");
	
}
		