/*
Challenge:
Given an array of numbers and a target integer, return how many contiguous
subarrays add up to that target.

Example with the current input:
- nums = [1, 1, 1]
- target = 2
- Valid subarrays are [1, 1] at indexes 0-1 and [1, 1] at indexes 1-2
- Result = 2

Key idea:
This solution uses prefix sums plus a Map of previously seen prefix sums.

A prefix sum is the running total from the start of the array up to the current
position. If:
- currentSum = sum from index 0 to i
- earlierSum = sum from index 0 to j

Then the sum of the subarray between j + 1 and i is:
currentSum - earlierSum

So if we want a subarray sum to equal targetSum, we need:
currentSum - earlierSum = targetSum

Rearranging gives:
earlierSum = currentSum - targetSum

That means on each loop iteration, we only need to ask:
"How many times have we already seen a prefix sum equal to
currentSum - targetSum?"

Each time that value exists, it represents a valid starting point for a
subarray ending at the current index.
*/

nums = [1,1,1];

const findSubs = (arr, targetSum) => {
    // This Map stores prefix sums we have seen so far.
    // key   -> a prefix sum value
    // value -> how many times that prefix sum has occurred
    const prefixCount = new Map();

    // Seed the Map with prefix sum 0 occurring once.
    // This handles cases where a valid subarray starts at index 0.
    // Example: if currentSum becomes exactly equal to targetSum,
    // then currentSum - targetSum = 0, and this entry lets us count it.
    prefixCount.set(0,1);

    // currentSum tracks the running prefix sum as we move through the array.
    let currentSum = 0;

    // count stores the total number of matching subarrays found.
    let count = 0;

    for (const num of arr){
        // Add the current number into the running prefix sum.
        currentSum += num;

        // If we have seen the prefix sum (currentSum - targetSum) before,
        // then every occurrence of that earlier prefix sum creates a valid
        // subarray ending at the current position.
        //
        // Why this works:
        // currentSum - earlierPrefixSum = targetSum
        // therefore:
        // earlierPrefixSum = currentSum - targetSum
        if (prefixCount.has(currentSum - targetSum)){
            // Add however many times that needed prefix sum has appeared.
            // We add the frequency, not just 1, because the same prefix sum
            // may have occurred multiple times, creating multiple valid
            // subarrays that end here.
            count += prefixCount.get(currentSum - targetSum);
        }

        // Record the current prefix sum in the Map.
        // If this prefix sum has been seen before, increment its frequency.
        // If not, start its count at 1.
        prefixCount.set(currentSum, (prefixCount.get(currentSum) || 0) +1);
    }

    // After scanning the full array, return the total number of matching
    // contiguous subarrays.
    
    return count;
}

console.log(findSubs(nums, 2));