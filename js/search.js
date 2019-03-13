fetch('https://baza-filmova.herokuapp.com/filmovi/ ')
  .then(res => res.json())
  .then(data => {

    let sablon = '';

    for(let i = 0; i < data.length; i++) {
      sablon += `<div class='col-md-3'>
                    <h4>${data[i].naziv}</h4>
                    <img src='${data[i].slika}'>
                  </div>`;
    }

    $('#filmovi').html(sablon);


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
})