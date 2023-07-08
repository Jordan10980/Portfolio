/* Déclaration de variable */

var lien1 = document.getElementById('lien1');
var lien2 = document.getElementById('lien2');
var lien3 = document.getElementById('lien3');

var overlay1 = document.getElementById('overlay1');
var overlay2 = document.getElementById('overlay2');
var overlay3 = document.getElementById('overlay3');

var btnClose1 = document.getElementById('btnClose1');
var btnClose2 = document.getElementById('btnClose2');
var btnClose3 = document.getElementById('btnClose3');



/* Appel de fonction quand on click sur un lien ou une croix */

lien1.addEventListener('click',openModal1);
lien2.addEventListener('click', openModal2);
lien3.addEventListener('click', openModal3);

btnClose1.addEventListener('click', closePopup1);
btnClose2.addEventListener('click', closePopup2);
btnClose3.addEventListener('click', closePopup3);



/* Lorsqu'on click sur le lien1, on affiche le block de la pop up */

function openModal1(){
    overlay1.style.display = 'block';
}

/* Lorsqu'on click sur la croix du lien1, on cache le block de la pop up */

function closePopup1(){
    overlay1.style.display = 'none';
}


function openModal2(){
    overlay2.style.display = 'block';
}
function closePopup2(){
    overlay2.style.display = 'none';
}


function openModal3(){
    overlay3.style.display = 'block';
}
function closePopup3(){
    overlay3.style.display = 'none';
}


