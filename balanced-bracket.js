function isBalanced(s) {
  // set default result variable
  let result = "YES";
  // declare empty array to push/pop characters for checks
  let brackets = [];

  // split at every character and put into new array
  let arr = s.split(""); // arr = [ '{', '[', '(', ')', ']', '}' ]

  // loop through new array and check characters
  arr.forEach((char) => {
    if (char === "{") {
      // push matching closing onto brackets array
      brackets.push("}");
    } else if (char === "[") {
      // push matching closing onto brackets array
      brackets.push("]");
    } else if (char === "(") {
      // push matching closing onto brackets array
      brackets.push(")");
      // if char is closing, check if it matches first element in brackets array
    } else if (char !== brackets.pop()) {
      result = "NO";
    }
  });

  // if any values left in the stack array, result is NO
  if (brackets.length) {
    result = "NO";
  }

  return result;
}

console.log(isBalanced("{[()]}"));
console.log(isBalanced("{[(])}"));
