var randomNumber1;
randomNumber1 = Math.floor(6*Math.random() +1);
var dicee = "images/dice" + randomNumber1+".png";
document.querySelector(".img1").setAttribute("src", dicee);
var randomNumber2 = Math.floor(6*Math.random() +1);
var dicee2 = "images/dice" + randomNumber2+".png";
document.querySelector(".img2").setAttribute("src", dicee2);

if(randomNumber1>randomNumber2){

	document.querySelector("h1").textContent = "Player 1 Wins";
}

else if(randomNumber1<randomNumber2){

	document.querySelector("h1").textContent = "Player 2 Wins";
}

else{

	document.querySelector("h1").textContent = "Draw";
}