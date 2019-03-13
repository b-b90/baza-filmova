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
    let ngodine = [];
    let nngodine =[];

    for(i = 0; i < data.length; i++) {
      godine.push(data[i]);
    }
    ngodine = godine.sort();
    nngodine = ngodine.reverse();
    console.log(nngodine)

    document.querySelector("#uno h3").innerHTML = nngodine[0].naziv;
    document.querySelector("#uno img").src = nngodine[0].slika;
    document.querySelector("#due h3").innerHTML = nngodine[1].naziv;
    document.querySelector("#due img").src = nngodine[1].slika;
    document.querySelector("#tre h3").innerHTML = nngodine[2].naziv;
    document.querySelector("#tre img").src = nngodine[2].slika;
   
   
    

  })
