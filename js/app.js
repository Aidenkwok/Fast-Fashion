$(document).foundation()

$('#randomBackground').css({'background-image': 'url('+ images[Math.floor(Math.random() * images.length)] + ') '});
$('#randomFact').text(facts[Math.floor(Math.random() * facts.length)])