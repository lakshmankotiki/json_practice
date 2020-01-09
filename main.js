/**
 * Example to work with json data
 */
const header = document.querySelector('header');
const section = document.querySelector('section');

//getting the json data from the endpoint
let requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';

var request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();

request.onload = function() {
    const superHeros = request.response;
    populateHeader(superHeros);
    showHeros(superHeros);
};


