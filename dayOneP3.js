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