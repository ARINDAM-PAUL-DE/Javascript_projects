let y = Math.floor(Math.random() * 10 + 1);

let guess = 1;
document.getElementById("submitGuess").onclick=function() {

    let x = document.getElementById("guessField").value;
    if (x == y) {
        alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN "
            + guess + " GUESS ");
    }
        
        else if (x > y) {
            guess++;
            alert("OOPS SORRY!! TRY A SMALLER NUMBER");
        }
        else {
            guess++;
            alert("OOPS SORRY!! TRY A GREATER NUMBER")
        }

}