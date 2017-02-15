$(document).foundation();

$(document).ready(function(){
    $(".fadeIn").hide(0).delay(500).fadeIn(800);
});

function randomise(){
	$('#randomBackground').css({'background-image': 'url(./img/'+ images[Math.floor(Math.random() * images.length)] + '.gif) '});
	fact()
};


randomise();

$('.overlay').hide();
$('.play').hide();

$('.info').click(function(){
	$('.overlay').toggle();
	$('.play').hide();
});

$('.video').click(function(){
	$('.play').toggle();
	$('.overlay').hide();
});


function fact(){
	$('#randomFact').fadeOut(function(){
		$('#randomFact').text(facts[Math.floor(Math.random() * facts.length)]).fadeIn();
	});	
}

function background(){
	$('#randomFact').fadeOut(function(){
		$('#randomFact').text(facts[Math.floor(Math.random() * facts.length)]).fadeIn();
	});	
}