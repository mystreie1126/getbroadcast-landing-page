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


var images = document.querySelectorAll(".slide-img");
var index = 0;
var time = 1000;

function reset(){
	index = 0;
	images[0].style.display = 'block';
	for(var i = 1; i < images.length; i++){
		images[i].style.display = 'none';
	}
}


reset();


setInterval(function(){
	index++;
	if(index >= images.length){
		reset();
	}else{
		images[index].style.display = 'block';
	}



},1500);


