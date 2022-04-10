
function formValidation() {
    var firstname = document.getElementById('firstname');
    var password = document.getElementById('password');
    var sdt = document.getElementById('sdt');
    var state = document.getElementById('state');
    var username = document.getElementById('username');
    var email = document.getElementById('email');
    // To check empty form fields.
    if (firstname.value.length == 0) {
        document.getElementById('head').innerText = "*Vui lòng điền đầy đủ thông tin *"; 
        firstname.focus();
        return false;
    }

    if (inputAlphabet(firstname, "*Vui lòng nhập tên đăng nhập *")) {
        if (lengthDefine(username, 1, 8)) {
            if (emailValidation(email, "*Vui lòng nhập địa chỉ email *")) {
                if (trueSelection(state, "*Vui lòng lựa chọn")) {
                    if (textAlphanumeric(password, "*Vui lòng nhập mật khẩu*")) {
                        if (textNumeric(sdt, "*Vui lòng nhập số điện thoại *")) {
                            return true;
                        }
                    }
                }
            }
        }
    }
    return false;
}
function textNumeric(inputtext, alertMsg) {
    var numericExpression = /^[0-9]+$/;
    if (inputtext.value.match(numericExpression)) {
        return true;
    } else {
        document.getElementById('p6').innerText = alertMsg; 
        inputtext.focus();
        return false;
    }
}

function inputAlphabet(inputtext, alertMsg) {
    var alphaExp = /^[a-zA-Z]+$/;
    if (inputtext.value.match(alphaExp)) {
        return true;
    } else {
        document.getElementById('p1').innerText = alertMsg; 
    
        inputtext.focus();
        return false;
    }
}

function textAlphanumeric(inputtext, alertMsg) {
    var alphaExp = /^[0-9a-zA-Z]+$/;
    if (inputtext.value.match(alphaExp)) {
        return true;
    } else {
        document.getElementById('p5').innerText = alertMsg; 
        inputtext.focus();
        return false;
    }
}

function lengthDefine(inputtext, min, max) {
    var uInput = inputtext.value;
    if (uInput.length >= min && uInput.length <= max) {
        return true;
    } else {
        document.getElementById('p2').innerText = "*Độ dài từ " + min + " đến " + max + " ký tự"; 
        inputtext.focus();
        return false;
    }
}

function trueSelection(inputtext, alertMsg) {
    if (inputtext.value == "Vui lòng lựa chọn") {
        document.getElementById('p4').innerText = alertMsg;
        inputtext.focus();
        return false;
    } else {
        return true;
    }
}

function emailValidation(inputtext, alertMsg) {
    var emailExp = /^[a-zA-Z0-9.-]+@$/;
    if (inputtext.value.match(emailExp)) {
        return true;
    } else {
        document.getElementById('p3').innerText = alertMsg; 
        inputtext.focus();
        return false;
    }
}

