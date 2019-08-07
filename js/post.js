
/* -------------------- MODALS JAVASCRIPT STARTS HERE -------------------- */

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

/* -------------------- MODALS JAVASCRIPT ENDS HERE -------------------- */


/* -------------------- LIKE / EDIT / COMMENTS JAVASCRIPT STARTS HERE -------------------- */

// Getting the title and comments of blogs
var title = document.getElementById('blogTitleNew');
var content = document.getElementById('blogBody');

// Getting the edit and save buttons
var button_edit = document.getElementById('button_edit');
var button_save = document.getElementById('button_save');

// Setting a count variable for number of time the Like button is clicked
var count = 0;

// Function on click of edit button
function edit()
{
  content.contentEditable = "true";
  title.contentEditable = "true";
  content.style.border = "2px solid purple";
  title.style.border = "2px solid purple";
  button_edit.style.display = "none";
  button_save.style.display = "block";
  content.focus();
}

// Function on click of save button
function save()
{
  content.contentEditable = "false";
  title.contentEditable = "false";
  content.style.border = "none";
  title.style.border = "none";
  button_save.style.display = "none";
  button_edit.style.display = "block"; 
}

// Function on click of like button
function like_post()
{
  var likes_button = document.getElementById("likes_button")
  likes_button.innerHTML = '<i class="fa fa-thumbs-up ">'+'</i>'+'&nbsp;'+"Liked!";
  likes_button.style.border="none";
  count += 1;
  
  if(count!=0)
  {
    if (count==1)
      { document.getElementById('label_like_count').innerHTML = count + " person likes this!"; }
    else 
      { document.getElementById('label_like_count').innerHTML = count + " people have liked this!"; }
  }
}

// Function on click of comments button
function comment_add(id)
{
  if (id.value.length>0)
  {
    var name = id.value ;
    document.getElementById('all_comments').innerHTML += '<p id="comment">' + name + '</p>' ; 
    var all_comments = document.getElementById('comments_textarea');         
    all_comments.value=all_comments.defaultValue;
  }
}

/* -------------------- LIKE / EDIT / COMMENTS JAVASCRIPT ENDS HERE -------------------- */
