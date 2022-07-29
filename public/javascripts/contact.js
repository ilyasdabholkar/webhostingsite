let fname,lname,title,email,msg;
let firstNameError,lastNameError,titleError,emailError,msgError;
$(function(){
    fname = $("#fname");
    lname = $("#lname");
    title = $("#title-input");
    email = $("#email-input");
    msg = $("#msg");
    firstNameError = $("#ferror");
    lastNameError = $("#lerror");
    titleError = $("#titleerror");
    emailError = $('#emailError');
    msgError = $('#msgError');

    submitBtn = $('#submit');

    fname.blur(()=>validateFname());
    lname.blur(()=>validateLname());
    title.blur(()=>validateTitle());
    email.blur(()=>validateEmail());
    msg.blur(()=>validateMsg());
    submitBtn.click(()=>validateForm());
});


const validateFname = () => {
    let regex = new RegExp('^[A-Za-z]+$')
    if(fname.val()==""){
        firstNameError.text('First Name is required')
        return false;
    }else if(!regex.test(fname.val())){
        firstNameError.text('First Name should not have numbers')
        return false;
    }else{
        firstNameError.text('')
        return true;
    }
}

const validateLname = () => {
    let regex = new RegExp('^[A-Za-z]+$')
    if(lname.val()==""){
        lastNameError.text('Last Name is required')
        return false;
    }else if(!regex.test(lname.val())){
        lastNameError.text('Last Name should not have numbers')
        return false;
    }else{
        lastNameError.text('')
        return true;
    }
}

const validateTitle = () => {
    if(title.val()==""){
        titleError.text('Title is required')
        return false;
    }else if(title.val().length > 25){
        titleError.text('Title is too long')
        return false;
    }else{
        titleError.text('')
        return true;
    }
}

const validateEmail = () => {
    if(email.val()==""){
        emailError.text('Email is required')
        return false;
    }else if(!(email.val().includes('@') && email.val().includes('.'))){
        emailError.text('Please enter a valid email')
        return false;
    }else{
        emailError.text('')
        return true;
    }
}

const validateMsg = () => {
    if(msg.val()==""){
        msgError.text('Message cannot be blank')
        return false;
    }else{
        msgError.text('')
        return true;
    }
}

const clearForm = () => {
    fname.val('')
    lname.val('');
    title.val('');
    email.val('');
    msg.val('');
}

function validateForm(){
    let v1=validateFname();
    let v2=validateLname();
    let v3=validateTitle();
    let v4=validateEmail();
    let v5=validateMsg();
    if(v1 && v2 && v3 && v4 && v5){
        alert("Message Sent Successfully");
        clearForm();
    }; 
}