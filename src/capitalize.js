export default function capitalize(string) {
  let wordList = string.split(" ");
  let resultArray = [];
  for (let i = 0; i < wordList.length; i++) {
    let word = [...wordList[i]];
    for (let j = 0; j < word.length; j++) {
      if (j === 0) {
        word[0] = word[0].toUpperCase();
        continue;
      }
      word[j] = word[j].toLowerCase();
    }
    resultArray[i] = word.join("");
  }
  return resultArray.join(" ");
}
