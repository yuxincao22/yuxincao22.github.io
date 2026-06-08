var scripts = document.getElementsByTagName('script');
var myScript = scripts[scripts.length - 1];

var queryString = myScript.src.replace(/^[^\?]+\??/, '');

var params = parseQuery(queryString);

var recruit = 0;

function parseQuery(query) {
    var Params = {};
    if (!query) return Params; // return empty object
    var Pairs = query.split(/[;&]/);
    for (var i = 0; i < Pairs.length; i++) {
        var KeyVal = Pairs[i].split('=');
        if (!KeyVal || KeyVal.length != 2) continue;
        var key = unescape(KeyVal[0]);
        var val = unescape(KeyVal[1]);
        val = val.replace(/\+/g, ' ');
        Params[key] = val;
    }
    return Params;
}

function showPubs(id) {
  if (id == 0) {
    document.getElementById('pubs').innerHTML = document.getElementById('pubs_by_date').innerHTML;
    document.getElementById('select0').style = 'text-decoration:underline;color:#000000';
    document.getElementById('select1').style = '';
  } else {
    document.getElementById('pubs').innerHTML = document.getElementById('pubs_by_topic').innerHTML;
    document.getElementById('select1').style = 'text-decoration:underline;color:#000000';
    document.getElementById('select0').style = '';
  } 
}

function showRecruit() {
  if (recruit == 0) {
    document.getElementById('recruit').style='display:inline-block';
  } else {
    document.getElementById('recruit').style='display:none';
  }
  recruit = 1 - recruit;
}

function toggleTextNews(){
  let showMoreNews = document.getElementById("moreNews");
  let showMoreNewsButton = document.getElementById("moreNewsButton");

  if (moreNews.style.display === "inline") {
    showMoreNews.style.display = "none";
    // showCurrentNews.style.display = "inline";
    showMoreNewsButton.innerHTML = "Show More";
               
  }
  else {
    // Hide the text between the span
    // elements
    showMoreNews.style.display = "inline";
 
    // Show the dots after the text
    // showCurrentNews.style.display = "inline";
 
    // Change the text on button to
    // 'Show More'
    showMoreNewsButton.innerHTML = "Show Less";
  }
}

function toggleTextPubs(){
  let showMorePubs = document.getElementById("morePubs");
  let showMorePubsButton = document.getElementById("morePubsButton");
            
  if (morePubs.style.display === "inline") {
    showMorePubs.style.display = "none";
    // showCurrentNews.style.display = "inline";
    showMorePubsButton.innerHTML = "Show More";
                
  }
  else {
    // Hide the text between the span
    // elements
    showMorePubs.style.display = "inline";
 
    // Show the dots after the text
    // showCurrentNews.style.display = "inline";
 
    // Change the text on button to
    // 'Show More'
    showMorePubsButton.innerHTML = "Show Less";
  }
}

// function toggleTest{
//   let showMorePubs = document.getElementById("morePubs");
//   showMorePubs.style.display = "inline";
// }

