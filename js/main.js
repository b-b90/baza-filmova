fetch("https://github.com/skolakoda/baza-filmova-api")
    .then(function(response) {
        response.json();
    })
    .then(function(response) {
        console.log(response)
    })