// Set the date we're counting down to
var countDownDate = new Date("oct 4, 2024 00:00:00").getTime();

//counter
var counter = document.getElementById("countdown")

// Update the count down every 1 second
var x = setInterval(function() {

// Get today's date and time
var now = new Date().getTime();

// Find the distance between now and the count down date
var distance = countDownDate - now;

// Time calculations for days, hours, minutes and seconds
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

// Display the result in the element with id="demo"
counter.innerHTML = days + " يوم " + hours + " ساعه "
+ minutes + " دقيقه " + seconds + " ثانيه ";
// if(days > 0){
//     counter.innerHTML = days + " يوم " + hours + " ساعه "
//     + minutes + " دقيقه " + seconds + " ثانيه ";
// }else{
//     counter.innerHTML = hours + " ساعه "
//     + minutes + " دقيقه " + seconds + " ثانيه ";
// }if(hours > 0){
//     counter.innerHTML = hours + " ساعه "
//     + minutes + " دقيقه " + seconds + " ثانيه ";
// }else{
//     counter.innerHTML = minutes + " دقيقه " + seconds + " ثانيه ";
// }if(minutes > 0 ){
//     counter.innerHTML = minutes + " دقيقه " + seconds + " ثانيه ";
// }else{
//     counter.innerHTML = seconds + " ثانيه ";
// }
// If the count down is finished, write some text
if (distance < 0) {
clearInterval(x);
counter.innerHTML = "تم فتح التسجيل";
}
}, 1000);



// code for choose winer
const winner = document.getElementById("winner");

winner.addEventListener('click' , function(){
    alert("test");
}
);