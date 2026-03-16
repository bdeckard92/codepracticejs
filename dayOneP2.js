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