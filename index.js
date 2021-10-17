 function fun() {
	var name = document.forms["contact"]["nm"];
	var email = document.forms["contact"]["mail"];
	var phone = document.forms["contact"]["mob"];
	var reason = document.forms["contact"]["purpose"];

	if (name.value == "") {
		alert("Please enter your name.");
		name.focus();
		return false;
	}

	if (email.value == "") {
		alert("Please enter a valid e-mail address.");
		email.focus();
		return false;
	}

	if (phone.value == "") {
		alert("Please enter your mobile number.");
		phone.focus();
		return false;
	}

	if (reason.value == "") {
		alert("Please enter your purpose to contact.");
		reason.focus();
		return false;
	}
	alert("Form submmitted successfully!!");
	return true;
}


