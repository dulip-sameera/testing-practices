export default function reverseString(string) {
  let wordArray = [...string];
  let reverseWordArray = [];
  for (let i = wordArray.length - 1; i >= 0; i--) {
    reverseWordArray.push(wordArray[i]);
  }

  let result = reverseWordArray.join("");
  return result;
}
