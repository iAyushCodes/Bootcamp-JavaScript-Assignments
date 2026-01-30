/*
  Write a function `reve` which takes a string as input and returns the reversed version of the string.

  What is reversing a string?
  - Reversing a string means rearranging its characters in the opposite order.

  Example:
  - Input: "Sumana"
  - Output: "anamuS"

  - Input: "hello"
  - Output: "olleh"

  - Input: ""
  - Output: ""

  Once you've implemented the logic, test your code by running
  - `npm run test-reverseString`
*/

function reverseString(str) {
  // Your code here
  let reversedArr = str.split("")
  let i = 0, j = str.length - 1;
  while (i < j) {
    let temp = reversedArr[i]
    reversedArr[i] = reversedArr[j]
    reversedArr[j] = temp
    i++
    j--
  }
  return reversedArr.join("")
}

module.exports = reverseString;
