var gamePattern = [];
var buttonColours = ['red','blue','green','yellow'];
var randomChosenColour;
var userClickedPattern = [];
var level = 0;
var current = 0;
$(document).keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        nextSequence();  
        $("h1").html("level "+ level);  
    }
    
})

$(".btn").click(function(){
    var userChosenColor = $(this).attr("id"); // truy cap den id cua class .btn
    userClickedPattern.push(userChosenColor);
    $("#" + userChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playsound(userChosenColor);
    
})



function nextSequence(){
   var randomNumber = Math.floor(Math.random() * 4) ;
   randomChosenColour = buttonColours[randomNumber];
   gamePattern.push(randomChosenColour);
   $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playsound(randomChosenColour);
} 

function playsound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}
   