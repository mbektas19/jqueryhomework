console.log("here")
var imgs = $("img");
var msg = "Hover over an image below"
	imgs.each(function(){
		$(this).on("mousemove",function() {
		 	$('#image').css("backgroundImage", "url('"+$(this).attr('src')+"')");
		 	$('#image').html($(this).attr('alt'));
	 	})

	 	$(this).focus(function() {
			$('#image').css("backgroundImage", "url('"+$(this).attr('src')+"')");
		 	$('#image').html($(this).attr('alt'));
	 	})

	 $(this).mouseleave(function() {
		 	$('#image').css("backgroundImage", "url('')");
		 	$('#image').html(msg);
	 })
	
	 $(this).blur(function() {
		 $('#image').css("backgroundImage", "url('')");
		 $('#image').html(msg);
	})
})
