$(document).foundation()

$('#randomBackground').css({'background': 'url('+ images[Math.floor(Math.random() * images.length)] + ')' + 'no-repeat center center fixed'});
$('#randomFact').text(facts[Math.floor(Math.random() * facts.length)])


//$('#randomBackground').css({'background-image: url('+ (images[Math.floor(Math.random() * images.length)] + ')'})