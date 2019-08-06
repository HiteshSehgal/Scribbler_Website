// Getting the modals
var sign_in_modal = document.getElementById('modal_sign_in');
var sign_up_modal = document.getElementById('modal_sign_up');
var create_post_modal = document.getElementById('modal_create_post');


// Getting the buttons to open the modals 
var button_sign_in = document.getElementById("button_sign_in");
var button_sign_up = document.getElementById("button_sign_up");
var button_create_post = document.getElementById("button_create_post");


// Getting the buttons to close the modals
var sign_in_span = document.getElementsByClassName("close")[0];
var sign_up_span = document.getElementsByClassName("close")[1];
var create_post_span = document.getElementsByClassName("close")[2];


// Opening the modals on button click 
button_sign_in.onclick = function()
{ sign_in_modal.style.display = "block"; }

button_sign_up.onclick = function()
{ sign_up_modal.style.display = "block"; }

button_create_post.onclick = function()
{ create_post_modal.style.display = "block"; }


// Closing the modals on X button click 
sign_in_span.onclick = function()
{ sign_in_modal.style.display = "none"; }

sign_up_span.onclick = function()
{ sign_up_modal.style.display = "none"; }

create_post_span.onclick = function()
{ create_post_modal.style.display = "none"; }


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

window.addEventListener('click' , function(event)
{
  if(event.target == create_post_modal)
  {
    create_post_modal.style.display = "none";
  }
});

// All Posts Button Click
var button_all_posts = document.getElementById("button_all_posts");
button_all_posts.onclick = function()
{
  window.location.href = "html/bloglist.html";
}

// Sign Up hyperlink in Sign In Modal
sign_up.onclick = function()
{
  sign_up_modal.style.display = "block";
  sign_in_modal.style.display = "none";
}
