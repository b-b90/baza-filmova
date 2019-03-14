fetch('https://baza-filmova.herokuapp.com/filmovi/ ')
  .then(res => res.json())
  .then(data => {

    let sablon = '';

    // ispisivanje svih objekata
    for(let i = 0; i < data.length; i++) {
      sablon += `<div class='col-md-3'>
                    <h4>${data[i].naziv}</h4>
                    <img src='${data[i].slika}'>
                  </div>`;
    }

    $('#filmovi').html(sablon);

    // pretraga po nazivu
    $('#pretraga').on('keyup', function() {
        
    let pretraga = '';
    let provera = document.getElementById('pretraga').value;

        for(let i = 0; i < data.length; i++) {
            if(data[i].naziv.includes(provera)) {
                pretraga +=  `<div class='col-md-3'>
                                 <h4>${data[i].naziv}</h4>
                                 <img src='${data[i].slika}'>
                              </div>`;
            }
        }
        $('#filmovi').html(pretraga);
    })

    // sortiranje od najstarijeg
    $('#odNajstarijeg').on('click', function() {

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

      let sablon = '';

      for(let i = 0; i < godine.length; i++) {
        sablon += `<div class='col-md-3'>
                      <h4>${godine[i].naziv}</h4>
                      <h4>${godine[i].godina}</h4>
                      <img src='${godine[i].slika}'>
                    </div>`;
      }

      $('#filmovi').html(sablon);
    })

    // sortiranje od najnovijeg
    $('#odNajnovijeg').on('click', function() {

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

      let sablon = '';

      for(let i = godine.length - 1; i >= 0; i--) {
        sablon += `<div class='col-md-3'>
                      <h4>${godine[i].naziv}</h4>
                      <h4>${godine[i].godina}</h4>
                      <img src='${godine[i].slika}'>
                    </div>`;
      }

      $('#filmovi').html(sablon);
    })

    // sortiranje od a
    $('#odA').on('click', function() {

      const godine = [];

      for(i = 0; i < data.length; i++) {
        godine.push(data[i]);
      }

      function compare(a,b) {
        if (a.naziv < b.naziv)
          return -1;
        if (a.naziv > b.naziv)
          return 1;
        return 0;
      }
      
      godine.sort(compare);

      let sablon = '';

      for(let i = 0; i <godine.length; i++) {
        sablon += `<div class='col-md-3'>
                      <h4>${godine[i].naziv}</h4>
                      <h4>${godine[i].godina}</h4>
                      <img src='${godine[i].slika}'>
                    </div>`;
      }

      $('#filmovi').html(sablon);
    })

    // sortiranje od z
    $('#odZ').on('click', function() {

      const godine = [];

      for(i = 0; i < data.length; i++) {
        godine.push(data[i]);
      }

      function compare(a,b) {
        if (a.naziv < b.naziv)
          return -1;
        if (a.naziv > b.naziv)
          return 1;
        return 0;
      }
      
      godine.sort(compare);

      let sablon = '';

      for(let i = godine.length - 1; i >= 0; i--) {
        sablon += `<div class='col-md-3'>
                      <h4>${godine[i].naziv}</h4>
                      <h4>${godine[i].godina}</h4>
                      <img src='${godine[i].slika}'>
                    </div>`;
      }

      $('#filmovi').html(sablon);
    })
})