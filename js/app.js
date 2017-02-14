$(document).foundation()

$(document).ready(function(){
    $("#randomFact").hide(0).delay(500).fadeIn(800)
});

$('#randomBackground').css({'background-image': 'url(./img/'+ images[Math.floor(Math.random() * images.length)] + ') '});
$('#randomFact').text(facts[Math.floor(Math.random() * facts.length)]);