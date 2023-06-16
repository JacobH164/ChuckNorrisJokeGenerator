var jokeTag = document.querySelector("#joke")

var chuckNorrisJoke = function(){
    var chuckNorrisObj = "https://api.chucknorris.io/jokes/random";
    fetch(chuckNorrisObj)
        .then(chuckNorrisObj=>chuckNorrisObj.json()
            .then(chuckNorrisObj=>console.log(chuckNorrisObj.value))) 
}

var chuckNorrisPng = function(){
    var chuckNorrisObj = "https://api.chucknorris.io/jokes/random";
    fetch(chuckNorrisObj)
        .then(chuckNorrisObj=>chuckNorrisObj.json()
            .then(chuckNorrisObj=>console.log(chuckNorrisObj.icon_url))) 
}

chuckNorrisJoke();
chuckNorrisPng();