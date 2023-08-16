$('#slider-one').click(function(){
    $('#text1').slideToggle(1000)
    $('#text2').slideUp(1000)
    $('#text3').slideUp(1000)
    $('#text4').slideUp(1000)


})

$('#slider_two').click(function(){
    $('#text2').slideToggle(1000)
    $('#text1').slideUp(1000)
    $('#text3').slideUp(1000)
    $('#text4').slideUp(1000)


})

$('#slider-three').click(function(){
    $('#text3').slideToggle(1000)
    $('#text1').slideUp(1000)
    $('#text2').slideUp(1000)
    $('#text4').slideUp(1000)


})
$('#slider-four').click(function(){
    $('#text4').slideToggle(1000)
    $('#text1').slideUp(1000)
    $('#text2').slideUp(1000)
    $('#text3').slideUp(1000)
})

//count 

var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

var x = setInterval(function() {
var now = new Date().getTime();
var distance = countDownDate - now;

var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

document.getElementById("day").innerHTML = days + "d " ;
document.getElementById("hour").innerHTML = hours + "h "
document.getElementById("min").innerHTML = minutes + "m " ;
document.getElementById("sec").innerHTML = seconds + "s ";
})

//slide el f elganb

$('#open').click(function(){
    $('#list').animate({width:'15%',opacity:'1'},1000)
    $('#open').animate({left:'270px'},1000)
})

$('#close').click(function(){
    $('#list').animate({width:'0',opacity:'0'},1000)
    $('#open').animate({left:'1%'},1000)
})
