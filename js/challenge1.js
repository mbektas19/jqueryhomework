$("#subscribe").click(function(){
	var x = $("#emailField");
	if (this.checked){
		console.log("selected");
		x.css("display", "block");
	} else {
		console.log("Not selected");
		x.css("display", "none");
	}
});
