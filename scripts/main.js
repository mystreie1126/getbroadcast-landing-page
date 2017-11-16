$(".showreel-video").hover(function(){
	$(".banner").css({
		"transform":"translateX(20%)",
		"transition-duration": "1s"
	});
},function(){
	$(".banner").css({
		"transform":"translateX(-1.5%)",
		"transition-duration": "1s"
	});
});