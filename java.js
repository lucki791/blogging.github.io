function changeBackground() {
	
	var input = document.getElementById("input").value;
	var body = document.getElementById("body").style.backgroundColor = input;
	
	if (input === "#000000") {
		
		document.getElementById("body").style.color = "red";
	
	}  else {
		
		document.getElementById("body").style.color = "black";
	}
}