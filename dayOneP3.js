/*
Assumed challenge criteria:
- Given an array of numbers and an integer k.
- Return the k most frequent values in the array.
- Frequency means how many times each value appears.
- Result should contain only the values, not their counts.
- If multiple values have the same frequency, the prompt may allow any valid order.
*/

nums = [1, 1, 1, 2, 2, 3]
k = 2

function topFreqs(arr, topNum) {
    const freqs = new Map();
    
    for (const num of arr){
        freqs.set(num, (freqs.get(num) || 0) + 1);
    }
    return [...freqs.entries()].sort((a,b) => b[1] - a[1]).slice(0,topNum).map(([num])=> num);
}

console.log(topFreqs(nums, k))