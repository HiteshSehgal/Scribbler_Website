
/* -------------------- MODALS JAVASCRIPT STARTS HERE -------------------- */

// Getting the modals
var sign_in_modal = document.getElementById('modal_sign_in');
var sign_up_modal = document.getElementById('modal_sign_up');
var pop_up_modal = document.getElementById('pop_up_modal');


// Getting the buttons to open the modals 
var button_sign_in = document.getElementById("button_sign_in");
var button_sign_up = document.getElementById("button_sign_up");
var trash = document.getElementsByClassName('trash');


// Getting the buttons to close the modals
var sign_in_span = document.getElementsByClassName("close")[0];
var sign_up_span = document.getElementsByClassName("close")[1];
var button_no = document.getElementById('button_no');


// Opening the modals on button click 
button_sign_in.onclick = function()
{ sign_in_modal.style.display = "block"; }

button_sign_up.onclick = function()
{ sign_up_modal.style.display = "block"; }

for ( var a=0 ; a<=4 ; a++)
{
  trash[a].onclick = function()
    {
      pop_up_modal.style.display="block";
    }
}


// Closing the modals on X button click 
sign_in_span.onclick = function()
{ 
  sign_in_modal.style.display = "none";
  document.getElementById("sign_in_username").value = "";
  document.getElementById("sign_in_password").value = ""; 
}

sign_up_span.onclick = function()
{ 
  sign_up_modal.style.display = "none";
  document.getElementById("sign_up_full_name").value = "";
  document.getElementById("sign_up_username").value = "";
  document.getElementById("sign_up_password").value = "";
  document.getElementById("sign_up_confirm_password").value = "";
}


// Closing the modals on button click outside the modals 
window.addEventListener('click' , function(event) {
  if(event.target == sign_in_modal)
    {
      sign_in_modal.style.display = "none";
      document.getElementById("sign_in_username").value = "";
      document.getElementById("sign_in_password").value = ""; 
    }
});

window.addEventListener('click' , function(event) {
  if(event.target == sign_up_modal)
    {
      sign_up_modal.style.display = "none";
      document.getElementById("sign_up_full_name").value = "";
      document.getElementById("sign_up_username").value = "";
      document.getElementById("sign_up_password").value = "";
      document.getElementById("sign_up_confirm_password").value = "";
    }
});


// Closing the pop up modal on button no click
button_no.onclick= function()
{
  pop_up_modal.style.display="none";
}


// Sign Up hyperlink in Sign In Modal
sign_up.onclick = function()
{
  sign_up_modal.style.display = "block";
  sign_in_modal.style.display = "none";
}


// Closing the modals / Resetting the values on button click
function buttonSignIn(username , password)
{ 
  if(!document.getElementById('sign_in_username').validity.valueMissing &&
     !document.getElementById('sign_in_password').validity.valueMissing)
  {
    sign_in_modal.style.display = "none";
    document.getElementById("sign_in_username").value = "";
    document.getElementById("sign_in_password").value = ""; 
  }
}

function buttonSignUp(full_name , username , password , confirm_password)
{ 
  if(!document.getElementById('sign_up_full_name').validity.valueMissing && 
     !document.getElementById('sign_up_username').validity.valueMissing &&
     !document.getElementById('sign_up_password').validity.valueMissing &&
     !document.getElementById('sign_up_confirm_password').validity.valueMissing)
  {
    sign_up_modal.style.display = "none";
    document.getElementById("sign_up_full_name").value = "";
    document.getElementById("sign_up_username").value = "";
    document.getElementById("sign_up_password").value = "";
    document.getElementById("sign_up_confirm_password").value = "";
  }    
}

/* -------------------- MODALS JAVASCRIPT STARTS HERE -------------------- */
