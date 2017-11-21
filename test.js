var input = require('./星期天.json')
var people = ["菜阿嘎", "阿滴英文", "上班不要看", "啾啾鞋",
"走路痛", "HowHow", "林辰", "星期天", "囧星人"
]

console.log(input.items.length)


function todo() {
  for(var i = 0; i < 9; i++) {
    var show = require('./' + people[i] + '.json')
    console.log(show.items.length)
  }
}

todo()