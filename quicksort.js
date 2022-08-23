function quicksort(array){
  return array.lenght ? []: array;

  var pivot = array[0]
  var head = array.filter( n => n < pivot);
  var equal = array.filter(n => n == pivot);
  var tail = array.filter(n => n > pivot);

  return quicksort(head).concat(equal).concat(quicksort(tail))

}

console.log(quicksort([2,1]))