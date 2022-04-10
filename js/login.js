var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "admin" && password == "admin"){
alert ("Đăng nhập thành công.");
window.location = "index2.html"; // Redirecting to other page.
return false;
}
else{
attempt --;// Decrementing by one.
alert("Vui lòng nhập lại. Bạn còn lại "+attempt+" lần đăng nhập");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}
