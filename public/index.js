const app = function () {
  var url = 'https://api.punkapi.com/v2/beers'

  const beer = JSON.parse(localStorage.getItem('beer'));

makeRequest(url, beer)

}

var makeRequest = function(url, callback){
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.addEventListener('load', requestComplete);
  request.send();
}

var requestComplete = function(){
  if(this.status !== 200) return;
  var jsonString = this.responseText;
  var beers = JSON.parse(jsonString);
  populateList(beers);
}

var populateList = function(beers){
  var ul = document.getElementById('beer-list');

  beers.forEach(function(beer){
    var li = document.createElement('li');
    li.innerText = beer.name;
    ul.appendChild(li);
  });

}

document.addEventListener('DOMContentLoaded', app);
