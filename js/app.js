$(document).foundation();

$(document).ready(function(){
    $(".fadeIn").hide(0).delay(500).fadeIn(800);
});

function randomise(){
	$('#randomBackground').css({'background-image': 'url(./img/'+ images[Math.floor(Math.random() * images.length)] + ') '});
	$('#randomFact').text(facts[Math.floor(Math.random() * facts.length)]);
};

randomise();

function refresh(){
	randomise();
}

$('#circle').circleType()