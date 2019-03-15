
var naslov = localStorage.getItem('naslov');
var godina = localStorage.getItem('godina');
var slika = localStorage.getItem('slika');

document.querySelector(".ovde h4").innerHTML = naslov;
document.querySelector(".ovde h5").innerHTML = godina;
document.querySelector(".ovde img").src = slika;