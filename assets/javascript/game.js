   
  
    var arrayUser = ["b", "a", "w", "e", "m", "j" , "x", "y"];
    document.onkeyup = function (event){

        var computerGuess = arrayUser[Math.floor(Math.random()*arrayUser.length)];
        var temp = document.getElementById("randNumber");
        temp.textContent = computerGuess;

        var temp = document.getElementById("userGuess");
            temp.textContent = event.key;
        var userGuess = event.key;


    var wins = 0;
    var losses = 0;
    var results = 0;

      if (userGuess === computerGuess) {
        wins++;
        var temp = document.getElementById("win");
        temp.textContent = wins;
      }
        else if(userGuess !== computerGuess) {
        losses++;
        var temp = document.getElementById("loose");
        temp.textContent = losses;
      }else{
        alert("game over");
      }

    }
   