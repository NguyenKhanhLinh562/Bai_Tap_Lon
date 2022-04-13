var x = document.getElementById("form_sample");
var createform = document.createElement('form'); 
createform.setAttribute("action", ""); 
createform.setAttribute("method", "post"); 
x.appendChild(createform);


var linebreak = document.createElement('br');
createform.appendChild(linebreak);

var namelabel = document.createElement('label'); 
namelabel.innerHTML = "Họ và Tên: "; 
createform.appendChild(namelabel);

var inputelement = document.createElement('input'); 
inputelement.setAttribute("type", "text");
inputelement.setAttribute("name", "dname");
inputelement.setAttribute('required', 'required');
createform.appendChild(inputelement);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);

var emaillabel = document.createElement('label'); 
emaillabel.innerHTML = "Email: ";
createform.appendChild(emaillabel);

var emailelement = document.createElement('input'); 
emailelement.setAttribute("type", "email");
emailelement.setAttribute('required', 'required');
emailelement.setAttribute("name", "demail");
createform.appendChild(emailelement);

var emailbreak = document.createElement('br');
createform.appendChild(emailbreak);

var messagelabel = document.createElement('label'); 
messagelabel.innerHTML = "Nội dung: ";
createform.appendChild(messagelabel);

var texareaelement = document.createElement('textarea');
texareaelement.setAttribute("name", "dmessage");
texareaelement.setAttribute('required', 'required');
createform.appendChild(texareaelement);

var messagebreak = document.createElement('br');
createform.appendChild(messagebreak);

var submitelement = document.createElement('input'); 
submitelement.setAttribute("type", "submit");
submitelement.setAttribute("name", "dsubmit");
submitelement.setAttribute("value", "Gửi");
createform.appendChild(submitelement);
