var diceno1 = Math.floor(Math.random() * 6) + 1;

var img = "dice" + diceno1 + ".png";

var imgsrc = "images/" + img;

document.querySelectorAll("img")[0].setAttribute("src", imgsrc);


var diceno2 = Math.floor(Math.random() * 6) + 1;

var img = "dice" + diceno2 + ".png";

var imgsrc = "images/" + img;

document.querySelectorAll("img")[1].setAttribute("src", imgsrc);

if (diceno1 > diceno2)
{
    document.querySelector("h1").innerHTML = "player1 wins";
}
else if (diceno1 < diceno2)
{
    document.querySelector("h1").innerHTML = "player2 wins";
}
else
{
    document.querySelector("h1").innerHTML = "Draw";
}