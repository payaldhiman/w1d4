var countdownGenerator = function (x) {
  /* your code here */

  return function(){
   // var tempVar = x;

    if(x > 0){
      console.log("T-minus" + x + "...");
    }
    if(x === 0){
      console.log("Blast Off!");
    }
    if(x < 0){
      console.log("Rockets already gone, bub!");
    }
    x--;


  }
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!