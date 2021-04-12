var bv = 0;
var dict = {
    "tea":10,
    "crumpet":50,
    "majesty":50,
    "queen elizabeth":25,
    "HM queen elizabeth":100,
    "colonise":50
};

chrome.history.search({text: '', maxResults: 1000}, function(data) {
    data.forEach(function(page) {
        for(var key in dict) {
          if(page.title.includes(key)) {
              bv += dict[key];
              document.getElementById("amount").innerHTML = "Your British Value is:" + bv;
          }
        }
    });
});
