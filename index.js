// clicking sound for each button

$(".btn").click(function(event) {
  var buttonColor = event.target.id;
  pressedANI(buttonColor);
  playSound(buttonColor);

})




// setting up inital values
var colors = ["green", "yellow", "red", "blue"];
var a = 0;
var level = 1;
var randomNum = -1;
var numOfSeries = 0;
var colorsGenerated = [];

//press to start the game\

$(document).keypress(function(event) {
  if (a===0 || a===2) {
  generateNew();
  colorsGenerated.push(colors[randomNum]);
  console.log(colorsGenerated);

  $("h1").html("Level " + level);
  numOfSeries = level.valueOf();
  a++;
  }
});



// game process
$(".btn").click(function(event) {
  var buttonColor = event.target.id;
  if (buttonColor === colorsGenerated[numOfSeries - 1]) {
    numOfSeries--;
  } else {
    $("body").addClass("game-over");
    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 300);
    $("h1").html("Game Over, Press Any Key to Restart");
    playSound("wrong");
    level=1;
    colorsGenerated =[];
    numOfSeries =-1;
    a=2;
  }
  // start new round of game to another level
  if (numOfSeries === 0) {
    generateNew();
    colorsGenerated.push(colors[randomNum]);
    console.log(colorsGenerated);
    level++;
    numOfSeries = level.valueOf();
    $("h1").html("Level " + level);
  }
})





// reload the game
// $(document).keypress(function(event) {
//   if (a != 0 ){
//     $("body").removeClass("game-over");
//     $("h1").html("Press A Key to Start");
//     a=0;
//     generateNew();
//   }
//
//   console.log(event)
// })




// fucntions
function restartG() {

}

function generateNew() {
  randomNum = Math.floor(Math.random() * 4);
  playSound(colors[randomNum]);
}


function playSound(buttonColor) {
  var audio = new Audio("sounds/" + buttonColor + ".mp3");
  audio.play();
}

function pressedANI(buttonColor) {
  $("#" + buttonColor).addClass("pressed");
  setTimeout(function() {
    $("#" + buttonColor).removeClass("pressed");

  }, 100);

}
