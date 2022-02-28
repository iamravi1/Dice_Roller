var rn1=Math.floor(Math.random()*6)+1;

var rdi1="images/" + "dice" + rn1 + ".png";

var img1=document.querySelectorAll("img")[0];

img1.setAttribute("src",rdi1);

var rn2=Math.floor(Math.random()*6)+1;

var rdi2="images/" + "dice" + rn2 + ".png";

var img2=document.querySelectorAll("img")[1];

img2.setAttribute("src",rdi2);

if(rn1 > rn2){
    document.querySelector("h1").innerHTML="🚩Player1 Wins!";
}
else if( rn1 < rn2 ){
    document.querySelector("h1").innerHTML="Player2 Wins🚩";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}