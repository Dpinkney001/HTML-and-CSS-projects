/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function myForm(oForm)
{
    if(oForm.inputfield.value ===""){
        alert("Error:Form is  empty! please input email!");
        oForm.email.focus();
        return false;
    }
    return true;
}

function firstName()
{
    fName = document.getElementById("firstname");
    if ( fName === ""){
        alert("error input field is blank");
     
    }else{
        document.write(fName);
    }
    
}
function lName()
{
    lName = document.getElementById("lastname");
    if (lName === ""){
        alert("error input field is blank");
     
    }else{
        document.write(lName);
    }
}

