
/* -------------------- MODALS JAVASCRIPT STARTS HERE -------------------- */

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

create_post_span.onclick = function()
{ 
  create_post_modal.style.display = "none";
  document.getElementById("create_post_title").value = "";
  document.getElementById("create_post_content").value = "";
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

window.addEventListener('click' , function(event)
{
  if(event.target == create_post_modal)
  { 
    create_post_modal.style.display = "none";
    document.getElementById("create_post_title").value = "";
    document.getElementById("create_post_content").value = "";
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

function buttonCreatePost(title , content)
{ 
  if(!document.getElementById('create_post_title').validity.valueMissing &&
     !document.getElementById('create_post_content').validity.valueMissing)
  {  
    create_post_modal.style.display = "none";
    document.getElementById("create_post_title").value = "";
    document.getElementById("create_post_content").value = ""; 
  }
}

/* -------------------- MODALS JAVASCRIPT ENDS HERE -------------------- */
