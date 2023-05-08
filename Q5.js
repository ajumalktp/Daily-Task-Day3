let array = [1, 2, 3, 4, 5, 6];

function sumArray(array) {
  if (array.length === 0) {
    return 0;
  }

  return array[0] + sumArray(array.slice(1));
}

let sum = sumArray(array);
console.log(sum);
