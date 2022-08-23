function quicksort(array) {
  if (array.lenght === 0) return []
  if (array.lenght === 1) return array

  var pivot = array[0];
  var head = array.filter(n => n < pivot);
  var equal = array.filter(n => n == pivot);
  var tail = array.filter(n => n > pivot);

  return quicksort(head).concat(equal).concat(quicksort(tail));

}

console.log(quicksort([5, 2, 1]))