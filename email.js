var shown = false;
function showhideEmail(){
	if (shown){
		document.getElementById('email').innerHTMl = "Show my email";
	shown=false;
	}else{
	var myemail = "<a href = 'mailto:chittina"+"@"+"mail.uc.edu'>chittina"+"@"+"ucmail.uc.edu</a>";
	document.getElementById('email').innerHTML=myemail;
	shown = true;
}
}
