var fs = require('fs');

var videoarray = [
  "xuCQFhPanr4",
  "JHDF-SFvLFQ",
  "b7cMcbDgxnc",
  "N88K0MCL9Vc",
  "GiILtNnnU7M",
  "UX4Cp5NuKX4",
  "PCzssr56nkU",
  "9BMxY2GW5hU",
  "Nwi-YqrEhtg"
];
var people = [
  "菜阿嘎",
  "阿滴英文",
  "上班不要看",
  "啾啾鞋",
  "走路痛",
  "HowHow",
  "林辰",
  "星期天",
  "囧星人"
];



var eachcount = [
  19,
  14,
  6,
  6,
  18,
  15,
  5,
  6,
  8
]

function jobs(witch) {
  var i = 0;
  var howmany = 0;
  var dir = videoarray[witch]+ '_' + people[witch];
  
  for(i; i < eachcount[witch]; i++) {
    var filename = people[witch] + "_" + i + ".json";
    var input = require("./" +dir + "/" +filename);
    var output = 
    input.items.map(i => {
      return i.snippet.topLevelComment.snippet.textDisplay.replace(/[!@#$%^&~;=！*().,:]+/g, "").replace(/\d/g, "").replace(/[a-zA-Z]+/g, "").replace(/\/<>/g, "");
    })
    console.log(output)
  }
}

jobs(6);

