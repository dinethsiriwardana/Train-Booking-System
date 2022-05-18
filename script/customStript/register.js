function validate_form()
	{
	var validatePwd;
	if(document.myform.pass.value!=document.myform.confirm_pass.value){
	alert("Two passwords are not matching");
	document.myform.pass.focus();
	document.myform.pass.select();
	return validatePwd=false;
	}
	else{
	return validatePwd=true;
	}
	
	}
	
function allLetter()  
	{   
		var letters = /^[A-Za-z]+$/; 
		var name=document.getElementById("username").value;
		if(name.match(letters))  
		{  
		return true;  
		}  
		else  
		{  
		alert("Enter Characters Only for User Name");
		return false;  
		}  
	}
 
		
	