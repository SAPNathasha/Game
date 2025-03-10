var btns = ["green","red","yellow","blue"];
var newBtn = [];
var userSelection;
var count = 0;
var randomBtnValue;
var randomBtn;


    $("#level-title").text("Press any key to start");

    $("document").on("keypress", function(){
        randomBtnValue = Math.floor(Math.random()*4);
        randomBtn = btns[randomBtnValue];
        randomBtn.hide(100).show(100);
        var audio = new Audio("randomBtn".mp3);
        audio.play();
        newBtn.push(randomBtn);
        });

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

