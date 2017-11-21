$(".showreel-icon").hover(function(){
	$(".team-img").css({
		"transform":"translateX(15%)",
		"transition-duration": "1s"
	});
},function(){
	$(".team-img").css({
		"transform":"translateX(-1.5%)",
		"transition-duration": "1s"
	});
});


$(document).ready(function(){
	$('.menu').click(function(){
		$('#main-nav').toggleClass('active');
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

//adding google map 
function initMap() {
  var myLatLng = {lat: 53.341750, lng: -6.262993};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: myLatLng
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'We are here!'
  });
}












