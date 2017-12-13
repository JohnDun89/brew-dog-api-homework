const app = function () {
  var url = 'https://api.punkapi.com/v2/beers'

  const beer = JSON.parse(localStorage.getItem('beer'));

  makeRequest(url, beer);

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
    var image = beer.image_url;
   var imageItem = createImageListItem(image);
    li.innerText = beer.name;
    ul.appendChild(li);
    ul.appendChild(imageItem)

  });
}

var createImageListItem = function (imageLink) {
  const imageItem = document.createElement('li');
  const image = document.createElement('img');
  image.src = imageLink;
  image.style.maxWidth = "250px";
  imageItem.appendChild(image);
  return imageItem;
}

document.addEventListener('DOMContentLoaded', app);
