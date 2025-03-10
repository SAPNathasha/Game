
var btns = ["green","red","yellow","blue"];

var randomBtnValue = Math.floor(Math.random()*4);
var randomBtn = btns[randomBtnValue];

var userSelection;
var count = 0;

$("#level-title").text("Press any key to start");
$("document").on("keypress", function(){
    $("button").on("click", function(){
        userSelection = $(this).attr("id");
    });
    
    
    if (userSelection === randomBtn){
        count++;
        $("#level-title").text("Level "+count);
    }else{
        $("#level-title").text("Game over. Press any key to start.");
        $("button").addClass("game-over");
    }
})
