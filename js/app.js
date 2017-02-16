$(document).foundation();

function randomise(){
	$('#randomBackground').css({'background-image': 'url(./img/'+ images[Math.floor(Math.random() * images.length)] + '.gif) '});
	fact();
};

function fact(){
	$('#randomFact').fadeOut(function(){
		$('#randomFact').text(facts[Math.floor(Math.random() * facts.length)]).fadeIn();
	});	
}

var timer = setInterval(function(){ randomise() }, 6000);

function reset(){
	clearInterval(timer);
	randomise();
	setTimeout(timer,6000)
};

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

$('#nomore').click(reset)

randomise();
timer;
