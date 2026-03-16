/*
Assumed challenge criteria:
- Given an array of strings.
- Group words that are anagrams of each other.
- Words in the same group must contain the same letters in a different order.
- Return an array of grouped arrays.
- Order of groups is usually not important unless the prompt says otherwise.
*/

const anagramArr = ["eat", "tea", "tan", "ate", "nat", "bat"];

const findAnaG = (arr) => {
  const charList = new Map();

  for (const word of arr) {
    const key = word.split("").sort().join("");
    if (!charList.has(key)) {
      charList.set(key, []);
    }

    charList.get(key).push(word);
  }
  return Array.from(charList.values());
};


console.log(findAnaG(anagramArr))