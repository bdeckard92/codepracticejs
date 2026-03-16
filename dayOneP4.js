const nums = [100, 4, 200, 1, 3, 2];

const getSequence = (arr) => {
  const numSet = new Set(arr);
  let longestConsecutive = 0;
  for (const num of arr) {
    if (!numSet.has(num - 1)) {
      let current = num;
      let length = 1;
      while (numSet.has(current + 1)) {
        current++;
        length++;
      }
      longestConsecutive = Math.max(longestConsecutive, length);
    }
  }
  console.log(numSet);
  return longestConsecutive;
};

console.log(getSequence(nums));