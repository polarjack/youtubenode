const https = require("https");

var base = "https://www.googleapis.com/youtube/v3/commentThreads?videoId=";
var key = "&key=AIzaSyClG1COBS6izq7X-_rTqMjp-N01GGNaMSA";
var backpart = "&part=snippet,replies";
var videoarray = ["xuCQFhPanr4", "JHDF-SFvLFQ", "b7cMcbDgxnc", "N88K0MCL9Vc",
                  "GiILtNnnU7M", "UX4Cp5NuKX4", "PCzssr56nkU", "9BMxY2GW5hU", "Nwi-YqrEhtg"];
var people = ["菜阿嘎", "阿滴英文","上班不要看", "啾啾鞋", 
              "走路痛", "HowHow", "林辰" , "星期天", "囧星人"]

console.log(base + videoarray[1] + key + backpart)
//https://stackoverflow.com/questions/4976466/difference-between-process-stdout-write-and-console-log-in-node-js
//info link
console.log(base + videoarray[1] + key + backpart)
https
  .get(base + videoarray[1] + key + backpart, res => {
    // console.log('statusCode:', res.statusCode);
    // console.log('headers:', res.headers);
    var dataQueue = "";
    res.on("data", d => {
      dataQueue += d;
      // output = JSON.parse(output)
      // console.log(output)
      // process.stdout.write(dataQueue);
      // console.log(d)
    });
    // process.stdout.write(dataQueue);
          
    // res.on("end", forend("testing"));
    res.on('end', () => {
      var output = JSON.parse(dataQueue)
      
      var basic = output.items[0]
      console.log(output)
      // console.log("Uploader Name : "+ basic.channelTitle);
      // console.log("Uploadtime    : "+ basic.publishedAt)
      // console.log("Channel Title : "+ basic.localized.title);
      // console.log("Description   : "+ basic.localized.description);
    })
  })
  .on("error", e => {
    console.error(e);
  });

