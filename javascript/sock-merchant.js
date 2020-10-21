function sockMerchant(n, ar) {
  // declare result variable
  let counter = 0;

  // sort the array
  ar.sort();

  for (let i = 0; i < n; i++) {
    // check for matching sock colors
    if (ar[i] === ar[i + 1]) {
      // increment pair counter
      counter++;
      // increment i to skip to the next index
      i++;
    }
  }
  return counter;
}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));
