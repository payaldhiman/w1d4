var words = ["ground", "control", "to", "major", "tom"];


function map(arr, callback){
  var out = [];
  arr.forEach(function(item){
    out.push(callback(item));

  });
  return out;
}

// function map(arr, callback){
//   return arr.map(callback);
// }



console.log(map(words, function(word) {
  return word.length;
}));

console.log(map(words, function(word) {
  return word.toUpperCase();
}));

console.log(map(words, function(word) {
  return word.split('').reverse().join('');
}));