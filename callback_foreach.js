function findWaldo(arr, found) {
  arr.forEach(function(value,i){
    if (value === "Waldo") {
      found(i);
      //return arr[i];
    }

  });



}

function actionWhenFound(index) {

  console.log("Found Waldo at index " + index + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);