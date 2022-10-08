var num1=Math.floor(Math.random()*6)+1;

var img1="images/dice"+num1+".png";

document.querySelector(".img1").setAttribute("src",img1);
var num2=Math.floor(Math.random()*6)+1;
var img2="images/dice"+num2+".png";
document.querySelector(".img2").setAttribute("src",img2);

if(num1>num2){
    document.querySelector("h1").innerHTML="Player 1 is the Winner.";
}
else if(num1<num2){
    document.querySelector("h1").innerHTML="Player 2 is the Winner.";
}
else{
    document.querySelector("h1").innerHTML="Damn it...Its a tie.";
}