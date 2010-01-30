// * chat.js
// *
// * @version 1.0
// * @version 1.2 by Ihor
// * @copyright 2008 by e-Zobar for XNova

// Définition du pseudo
var nick="<?php print $nick; ?>";
var nick=nick.replace(/\+/,"plus");

// Scrolling automatique
function descendreTchat(){
 	var elDiv =document.getElementById('shoutbox');
 	elDiv.scrollTop = elDiv.scrollHeight-elDiv.offsetHeight;
}

// Ajout de message
function addMessage(){
	//if(msg.value>""){
		var x_object = null;
		if(window.XMLHttpRequest){
			x_object = new XMLHttpRequest();
		}else if(window.ActiveXObject){
			x_object = new ActiveXObject("Microsoft.XMLHTTP");
		}else{
			alert('AJAX Error');
			return;
		}
		x_object.open("POST","chat_add.php",true); 
		x_object.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		msg.value=msg.value.replace(/\+/g,"plus");
		if(color.value>""){
			msg.value = "[c="+color.value+"]"+msg.value+"[/c]";
		}
		x_object.send("chat_type="+chat_type+"&ally_id="+ally_id+"&nick="+nick+"&msg="+msg.value);
		msg.value = "";
		showMessage();
	//}
}
function MessageHistory(){
	var WinH = window.open("chat_msg.php?chat_type="+chat_type+"&ally_id="+ally_id+"&show=history","ChatHistory","");
}

// Affichage des messages
function showMessage(){
var x_object2 = null;
	if(window.XMLHttpRequest){
		x_object2 = new XMLHttpRequest();
	}else if(window.ActiveXObject){
		x_object2 = new ActiveXObject("Microsoft.XMLHTTP");
	}else{
		alert('AJAX Error');
	return;
	}
	x_object2.open("POST","chat_msg.php",true);
	x_object2.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	x_object2.send("chat_type="+chat_type+"&ally_id="+ally_id+"");
	
	x_object2.onreadystatechange = function(){
		if(x_object2.readyState==4){
			if(x_object2.status==200){
			document.getElementById('shoutbox').innerHTML = x_object2.responseText;
			descendreTchat();
			}
		}
	}
	
}

// Raccourcis des smileys
function addSmiley(smiley){
	msg.value=msg.value+smiley;
	msg.focus();
}

// Intervalle entre les messages
setInterval(showMessage,3000);
