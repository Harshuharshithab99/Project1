let fullnameNode=document.getElementById("fullname");
let spanNode1=document.getElementById('errorfname');
function validatefullname(){
    spanNode1.innerHTML="";
    let fullname=fullnameNode.value;
    if(fullname=="")
    {
        spanNode1.innerHTML="This field Required";
        fullnameNode.style.border="2px solid red";
        spanNode1.style.color="red";
        spanNode1.style.fontSize="15px";
        return false;
    }
    else{
        fullnameNode.style.border="2px solid green";
        return true;
    }
}

let remailNode=document.getElementById("registeremail");
let  spanNode2=document.getElementById("erroremail");
function validateemail(){
    spanNode2.innerHTML='';
    let emailId=remailNode.value;
    let substr=emailId.substring(emailId.indexOf('@')+1);
    if(emailId=='')
    {
        spanNode2.innerHTML="This field Required";
        remailNode.style.border="3px solid red";
        spanNode2.style.color="red";
        spanNode2.style.fontSize="15px";
        return false;
    }
    else if(!emailId.includes('@')||substr=='')
    {
        spanNode2.innerHTML="Invalid EmailId";
        remailNode.style.border="2px solid red";
        spanNode2.style.color="red";
        spanNode2.style.fontSize="15px";
        return false;
    }
    else{
        remailNode.style.border="2px solid green";
        return true;
    }

}

let mobileNode=document.getElementById("mobileno");
let spanNode3=document.getElementById("errorno");
function validatemobno(){
    spanNode3.innerHTML="";
    let mobId=mobileNode.value;
    var regExp1=new RegExp("^(?=.*[0-9])");
   let var1=parseInt(mobId);
    
    if(mobId==''){
        spanNode3.innerHTML="This field is required";
        mobileNode.style.border="3px solid red";
        return false;
    }
    else if(isNaN(var1)){
        spanNode3.innerHTML="Mobile Number should be Numeric";
        mobileNode.style.border="3px solid red";
        return false;
    } 
    else if(mobId.length<10 || mobId.length>14){
        spanNode3.innerHTML="Invalid Mobile Number";
        mobileNode.style.border="3px solid red";
        return false;
    }
    else{
        mobileNode.style.border="3px solid green";
        return true;
    }
}

function validateRForm(){
    let v1=validatefullname();
    let v2=validateemail();
    let v3= validatemobno()

    return(v1&&v2&&v3);
    
}