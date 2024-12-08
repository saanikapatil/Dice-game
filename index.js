var randomno = Math.floor(Math.random() * 6) + 1;
var randomsrc = "images/img" + randomno + ".png"; // Correct path for Player 1's image

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomsrc);

var randno2 = Math.floor(Math.random() * 6) + 1;
var randomsrc2 = "images/img" + randno2 + ".png"; // Correct path for Player 2's image

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomsrc2);

if (randomno > randno2) {
    document.querySelector("h1").innerHTML = " Player 1 Wins!!";
} else if (randomno < randno2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!! ";
} else {
    document.querySelector("h1").innerHTML = "It's a Draw!";
}
