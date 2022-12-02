document.getElementById('submit').addEventListener('click', function(){
    const emailField= document.getElementById('email-field');
    const email = emailField.value;
    
    const passField= document.getElementById('pass-field');
    const pass = passField.value;
    if(email=== 'khalidmimm@gmail.com' && pass === '1234567890'){
        window.location.href = "insidebaperbank.html";
    }
    else{
        alert('invalid password')
    }
})