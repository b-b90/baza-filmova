fetch('https://baza-filmova.herokuapp.com/filmovi/ ')
  .then(res => res.json())
  .then(data => {
    document.querySelector("#prvi h3").innerHTML = data[3].naziv;
    document.querySelector("#prvi img").src = data[3].slika;
    document.querySelector("#drugi h3").innerHTML = data[31].naziv;
    document.querySelector("#drugi img").src = data[31].slika;
    document.querySelector("#treci h3").innerHTML = data[28].naziv;
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
    document.querySelector("#uno img").src = godine[0].slika;
    document.querySelector("#due h3").innerHTML = godine[1].naziv;
    document.querySelector("#due img").src = godine[1].slika;
    document.querySelector("#tre h3").innerHTML = godine[2].naziv;
    document.querySelector("#tre img").src = godine[2].slika;
   
   
    

  })
