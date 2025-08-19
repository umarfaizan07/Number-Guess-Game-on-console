let secretnum1=4;
let attempt1=3;
while (attempt>0) {
    let guess=prompt(`Guess the number 1-10 you have ${attempt1} attempts left`);
    if (guess==secretnum) {
        alert("Congragulations you guess the correct number");
        break;
    }
    else if (guess<secretnum){
        alert("to low try higher number"); 
    }
    else if (guess>secretnum){
        alert("to high try lowest number"); 
    }
    attempt1--;
    if (attempt1===0){
        alert(`You are out of attempt the number was ${secretnum1};`);
    }

}