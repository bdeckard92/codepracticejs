/*
Assumed challenge criteria:
- Given an unsorted array of integers.
- Find the length of the longest consecutive sequence.
- Consecutive means values that follow each other numerically, like 1, 2, 3, 4.
- The numbers do not need to appear next to each other in the original array.
- Expected output is a single number representing the longest streak length.
*/

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