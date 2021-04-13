var bv = 0;
var dict = {
    "tea":25,
    "crumpet":50,
    "majesty":50,
    "queen elizabeth":25,
    "hm queen elizabeth":100,
    "her majesty queen elizabeth":150,
    "colonise":50,
    "britain":10,
    "northern ireland":20,
    "shank":50,
    "knife":10
};
var names = [
  "james",
  "john",
  "robert",
  "michael",
  "william",
  "will",
  "david",
  "richard",
  "joseph",
  "thomas",
  "charles",
  "charlie",
  "christopher",
  "daniel",
  "matthew",
  "matt",
  "anthony",
  "donald",
  "mark",
  "paul",
  "steven",
  "steve",
  "andrew",

  "smith",
  "brown",
  "wilson",
  "thomson",
  "robertson",
  "campbell"
];
var email;

chrome.history.search({text: '', maxResults: 1000}, function(data) {
    data.forEach(function(page) {
        console.log(page.title);
        for(var key in dict) {
          if(page.title.includes(key)) {
              bv += dict[key];
              document.getElementById("amount").innerHTML = "Your British Value is:" + bv;
          }
        }
    });
    chrome.identity.getProfileUserInfo(function(info) {
      email = info.email;
      names.forEach(function(name) {
          if(email.includes(name)) {
              bv += 25;
          }
      });
    });
});
