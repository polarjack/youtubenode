const https = require("https");
const fs = require("fs");
const sleep = require("sleep");
const Promise = require("promise");

var base = "https://www.googleapis.com/youtube/v3/commentThreads?videoId=";
var key = "&key=AIzaSyClG1COBS6izq7X-_rTqMjp-N01GGNaMSA";
var backpart = "&part=snippet,replies&maxResults=100";
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

//https://stackoverflow.com/questions/4976466/difference-between-process-stdout-write-and-console-log-in-node-js
//info link

function todo(url, name) {
  console.log(url);
  return;
  https
    .get(url, res => {
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
      res.on("end", () => {
        console.log(name);
        var output = JSON.parse(dataQueue);

        var basic = output.items[0];

        const tojson = JSON.stringify(output);
        fs.writeFile("./" + name + ".json", tojson, "utf8", function (err) {
          if (err) {
            console.log(err);
          }
          console.log("file save");
        });
        // console.log(output)
        // console.log("Uploader Name : "+ basic.channelTitle);
        // console.log("Uploadtime    : "+ basic.publishedAt)
        // console.log("Channel Title : "+ basic.localized.title);
        // console.log("Description   : "+ basic.localized.description);
      });
    })
    .on("error", e => {
      console.error(e);
    });
}

function getnextpage(url, token, counting) {
  //url => url + &pageToken=token
  // output.nexPageToken
}
var counting = -1;
var i = 0;
var inputtoken = "";

function recursivetest(url, token, name) {
  counting++;
  var output = httpwithtoken(url, token, name);
  if (typeof output == null || output == "") {
    return;
  } else {
    output.then(input => {
      console.log(input.nextPageToken)
      return recursivetest(url, input.nextPageToken, name)
    })
  }
}
i = 8
var dir = "./" + videoarray[i] + "_" + people[i]
if (!fs.existsSync(dir)){
  fs.mkdirSync(dir);
}
recursivetest(base + videoarray[i] + key + backpart, inputtoken, people[i])
  


function httpnew(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, res => {
        var dataQueue = "";
        res.on("data", d => {
          dataQueue += d;
        });
        res.on("end", () => {
          var output = JSON.parse(dataQueue);
          return resolve(output);
        });
      })
      .on("error", e => {
        //console.error(e);
        return reject(e);
      });
  });
}

async function towait(url, token, name) {
  let back = await httpwithtoken(url, token, name);
  return back;
}

async function httpwithtoken(url, token, name) {
  if (token == undefined) {
    return undefined
  };
  sleep.sleep(1)
  var todo = token == "" ? url : url + "&pageToken=" + token;

  // console.log(todo)
  // console.log(todo);
  return new Promise((resolve, reject) => {
    https
      .get(todo, res => {
        var dataQueue = "";
        res.on("data", d => {
          dataQueue += d;
        });
        res.on("end", () => {
          var output = JSON.parse(dataQueue);

          const tojson = JSON.stringify(output);
          fs.writeFile("./"+ videoarray[i] + "_" + people[i] +"/" + name + "_" + counting +".json", tojson, "utf8", function (err) {
            if (err) {
              console.log(err);
            }
            console.log("file save");
          });
          return resolve(output);
        });
      })
      .on("error", e => {
        //console.error(e);
        return reject("error");
      });
  });
  // var testing = await https
  //   .get(todo, res => {
  //     var dataQueue = "";
  //     res.on("data", d => {
  //       dataQueue += d;
  //     });
  //     res.on("end", () => {
  //       var output = JSON.parse(dataQueue);
  //       console.log(output)
  //       return output;
  //     });
  //   })
  //   .on("error", e => {
  //     //console.error(e);
  //     return "error";
  //   });

  // return testing
}
