function countingValleys(n, s) {
  let counter = 0;
  let result = 0;
  // split starting string
  const letters = s.split("");

  for (let i = 0; i < letters.length; i++) {
    if (letters[i] == "U") {
      counter++;
      // if step out of valley, add 1 to the result
      if (counter == 0) {
        result++;
      }
    } else if (letters[i] == "D") {
      counter--;
    }
  }
  return result;
}

console.log(countingValleys(8, "UDDDUDUU"));
