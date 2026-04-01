
document.getElementById("confirmpassword").addEventListener("input",confirm);
function confirm(){
    var password=document.getElementById("password").value;
    var confirmpassword=document.getElementById("confirmpassword").value;
    if(password !== ""){
        if(password !== confirmpassword ){
            document.getElementById("passtxt").innerText="Password does not match.Please re-enter";
        }
        else{
            document.getElementById("passtxt").innerText=" ";
        }
    }
   
}


