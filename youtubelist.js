const https = require("https");
const fs = require("fs")

var base = "https://www.googleapis.com/youtube/v3/playlistItems?playlistId=";
var key = "&key=AIzaSyClG1COBS6izq7X-_rTqMjp-N01GGNaMSA";
var backpart = "&part=snippet,contentDetails";
// var videoarray = ["7BbonQ0OIQ4", "LPoZm0R2tog"];

var videoarray = ["PLy6R6OEHvNFwry-xTKLcisJkAwmgZvQZt"]

//https://stackoverflow.com/questions/4976466/difference-between-process-stdout-write-and-console-log-in-node-js
//info link
console.log(base + videoarray[0] + key + backpart)
https
  .get(base + videoarray[0] + key + backpart, res => {
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
    //   var basic = output.items[0].snippet
      
      console.log(output)
      fs.writeFile('myjsonfile.json', output, 'utf8', function(err) {
          console.log("done")
      });
    //   console.log(output)
    //   console.log("Uploader Name : "+ basic.channelTitle);
    //   console.log("Uploadtime    : "+ basic.publishedAt)
    //   console.log("Channel Title : "+ basic.localized.title);
    //   console.log("Description   : "+ basic.localized.description);
    })
  })
  .on("error", e => {
    console.error(e);
  });

