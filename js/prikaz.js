
var naslov = localStorage.getItem('naslov');
var godina = localStorage.getItem('godina');
var slika = localStorage.getItem('slika');

fetch('https://baza-filmova.herokuapp.com/filmovi/ ')
  .then(res => res.json())
  .then(data => {

    for (let i = 0; i < data.length; i++) {

        // console.log(data[i].komentari);

        if(naslov === data[i].naziv) {
            document.querySelector(".ovde h4").innerHTML = naslov;
            document.querySelector(".ovde h5").innerHTML = godina;
            document.querySelector(".ovde img").src = slika;

            if(data[i].komentari != undefined || data[i].komentari != null) {

                for (let j = 0; j < data[i].komentari.length; j++) {

                    $('.ovde').append(`
                                        <h3>${data[i].komentari[j].user}</h3>
                                        <p>${data[i].komentari[j].comment}</p>
                    `)

                    console.log(data[i].komentari[j].user);
                    console.log(data[i].komentari[j].comment);
                }
            }
        }
    }
  })