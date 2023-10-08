function facebook(){
var email=document.getElementById("email").value ;
var password=document.getElementById("password").value ;
var error=document.getElementById("error");
var text="";
if((email==="number" || email.length != 11 ) &&  (email==="srting" || email.indexOf("@") == -1)){
    text="Please Enter a Valid Email";
    error.innerHTML=text;
    return false;
}
else if (password.length < 8){
    text="Please Enter a Valid Password";
    error.innerHTML=text;
    return false;
}
else{
    alert("Done");
    return true;
}
}

