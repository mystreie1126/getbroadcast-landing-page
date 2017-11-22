$(document).ready(function(){
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

	$(".showreel-icon").hover(function(){
		$(".slogan").css({
			"transform":"translateY(-50%)",
			"transition-duration": ".5s"
		});
	},function(){
		$(".slogan").css({
			"transform":"translateY(50%)",
			"transition-duration": "1s"
		});
	});

	$('.menu').click(function(){
		$('#main-nav').toggleClass('active');
	});

	$(window).scroll(function() {
     if($(window).scrollTop() >= 100) {
       $('#main-nav').css({
       		"background":"#fff",
       		"width":"100%",
       		"justify-content":"space-around",
       		"transition": "0.5s all ease"
       });

       $('.top-container').css({
       		"left":"-2%",
       		"transition": "0.5s all ease"
       });
       
       $('#main-nav a').css({
       		"color":"#000"
       });
     }
    else {
       $('#main-nav').css({
       		"background":"inherit",
       		"width":"70%",
       		"justify-content":"space-between",
       		"transition": "0.5s all ease"

       });

        $('.top-container').css({
       		"left":"8%",
       		"transition": "0.5s all ease"
       });

        $('#main-nav a').css({
       		"color":"#fff"
       });
    }
  });

});



$(document).ready(function(){
	$('.to-each-section').click(function(e){
		var linkhref = $(this).attr('href');

		$('html,body').animate({
			scrollTop: $(linkhref).offset().top
		});
		e.preventDefault();
	});
});

console.log($('.img-overlay'));


// var images = document.querySelectorAll(".slide-img");
// var index = 0;
// var time = 1000;

// function reset(){
// 	index = 0;
// 	images[0].style.display = 'block';
// 	for(var i = 1; i < images.length; i++){
// 		images[i].style.display = 'none';
// 	}
// }


// reset();


// setInterval(function(){
// 	index++;
// 	if(index >= images.length){
// 		reset();
// 	}else{
// 		images[index].style.display = 'block';
// 	}



// },1500);

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












