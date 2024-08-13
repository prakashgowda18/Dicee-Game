var random1=Math.floor(Math.random()*6)+1;
var randomDiceImage="dice"+random1+".png";
var imageRandomSource="images/"+randomDiceImage;
document.querySelectorAll("img")[0].setAttribute("src",imageRandomSource);

var random2=Math.floor(Math.random()*6)+1;
var randomDiceImage2="dice"+random2+".png";
var imageRandomSource2="images/"+randomDiceImage2;
document.querySelectorAll("img")[1].setAttribute("src",imageRandomSource2);

if(random1>random2){
    document.querySelector("h1").innerHTML="Congratulations! Player1 wins.";
}else if(random2>random1){
    document.querySelector("h1").innerHTML="Congratulations! Player2 wins.";
}else{
    document.querySelector("h1").innerHTML="That's a tie!";
}