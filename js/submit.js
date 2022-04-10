function submit() {
    if (textNumeric() == true && emailValidation() == true && trueSelection() == true && lengthDefine() == true && textAlphanumeric() == true && inputAlphabet() == true) {
        location.replace("./login.html");
    }
}
