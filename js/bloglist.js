// Getting the modals
var sign_in_modal = document.getElementById('modal_sign_in');
var sign_up_modal = document.getElementById('modal_sign_up');


// Getting the buttons to open the modals 
var button_sign_in = document.getElementById("button_sign_in");
var button_sign_up = document.getElementById("button_sign_up");


// Getting the buttons to close the modals
var sign_in_span = document.getElementsByClassName("close")[0];
var sign_up_span = document.getElementsByClassName("close")[1];


// Opening the modals on button click 
button_sign_in.onclick = function()
{ sign_in_modal.style.display = "block"; }

button_sign_up.onclick = function()
{ sign_up_modal.style.display = "block"; }


// Closing the modals on X button click 
sign_in_span.onclick = function()
{ sign_in_modal.style.display = "none"; }

sign_up_span.onclick = function()
{ sign_up_modal.style.display = "none"; }


// Closing the modals on button click outside the modals 
window.addEventListener('click' , function(event) {
  if(event.target == sign_in_modal)
    {
      sign_in_modal.style.display = "none";
    }
});

window.addEventListener('click' , function(event) {
  if(event.target == sign_up_modal)
    {
      sign_up_modal.style.display = "none";
    }
});


// Sign Up hyperlink in Sign In Modal
sign_up.onclick = function()
{
  sign_up_modal.style.display = "block";
  sign_in_modal.style.display = "none";
}
