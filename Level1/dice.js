var rand1 = Math.floor(Math.random() * 6)+1;
var rand2 = Math.floor(Math.random() * 6)+1;
var randImg1 = "images/dice"+rand1+'.png';
var randImg2 = "images/dice"+rand2+'.png';

img1 = document.querySelector('.img1');
img1.setAttribute("src",randImg1);

img2 = document.querySelector('.img2');
img2.setAttribute("src",randImg2);

if(rand1>rand2){
    winner = document.querySelector('h1');
    winner.innerHTML = "Player <b>1</b> Wins"
}

else if(rand2>rand1){
    winner = document.querySelector('h1');
    winner.innerHTML = "Player <b>2</b> Wins "
}

else{
    winner = document.querySelector('h1');
    winner.innerHTML = "Tie "

}

//console.log(rand1)
//console.log(rand2)

