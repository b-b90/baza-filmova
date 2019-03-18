fetch('https://baza-filmova.herokuapp.com/filmovi/ ')
  .then(res => res.json())
  .then(data => {
    document.querySelector("#prvi h3").innerHTML = data[3].naziv;
    document.querySelector("#prvi h5").innerHTML = data[3].godina;
    document.querySelector("#prvi img").src = data[3].slika;
    document.querySelector("#drugi h3").innerHTML = data[31].naziv;
    document.querySelector("#drugi h5").innerHTML = data[31].godina;
    document.querySelector("#drugi img").src = data[31].slika;
    document.querySelector("#treci h3").innerHTML = data[28].naziv;
    document.querySelector("#treci h5").innerHTML = data[28].godina;
    document.querySelector("#treci img").src = data[28].slika;

   
    const godine = [];

    for(i = 0; i < data.length; i++) {
      godine.push(data[i]);
    }

    function compare(a,b) {
      if (a.godina < b.godina)
        return -1;
      if (a.godina > b.godina)
        return 1;
      return 0;
    }
    
    godine.sort(compare);
    godine.reverse();

    document.querySelector("#uno h3").innerHTML = godine[0].naziv;
    document.querySelector("#uno h5").innerHTML = godine[0].godina;
    document.querySelector("#uno img").src = godine[0].slika;
    document.querySelector("#due h3").innerHTML = godine[1].naziv;
    document.querySelector("#due h5").innerHTML = godine[1].godina;
    document.querySelector("#due img").src = godine[1].slika;
    document.querySelector("#tre h3").innerHTML = godine[2].naziv;
    document.querySelector("#tre h5").innerHTML = godine[2].godina;
    document.querySelector("#tre img").src = godine[2].slika;

   
   // prikaz u drugom prozoru
   $('.col-md-4').on('click', function() {
    let h3 = $(this).find('h3');
    let naslov = h3[0].innerText;
    let h5 = $(this).find('h5');
    let godina = h5[0].innerText;
    let img = $(this).find('img');
    let slika = img[0].src;

    localStorage.setItem('naslov', naslov);
    localStorage.setItem('godina', godina);
    localStorage.setItem('slika', slika);
    
    window.location.href = "prikaz.html";
  })

  })
