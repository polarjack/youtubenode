var Promise = require('promise');

var sleep = async function(para) {
  return new Promise(function(resolve, reject) {
      setTimeout(function() {
          resolve(para * para)
      }, 1000)
  })
}


// for(var i =0 ; i<3; i++){
//   var result = await sleep(i);
//   for(var j =0 ; j<result; j++){
//     console.log('   i:'+i+', j:'+j+': ', await sleep(j));
//   }
// }
