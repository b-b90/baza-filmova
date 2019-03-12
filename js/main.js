fetch('https://baza-filmova.herokuapp.com/filmovi/ ')
  .then(res => res.json())
  .then(data => {
    console.log(data)
  })