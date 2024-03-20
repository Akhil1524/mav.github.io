var shown = false;
function showhideEmail(){
	if (shown){
		document.getElementById('email').innerHTMl = "Show my email";
	shown=false;
	}else{
	var myemail = "<a href = 'mailto:mav"+"@"+"mail.uc.edu'>mav"+"@"+"mail.uc.edu</a>";
	document.getElementById('email').innerHTML=myemail;
	shown = true;
}
}
