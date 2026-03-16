/*
Assumed challenge criteria:
- Given an array of numbers and a target sum.
- Return the indexes of the two values that add up to the target.
- Assume exactly one valid pair exists.
- Do not use the same element twice.
- Expected output shape: [index1, index2].
*/

nums = [2, 7, 11, 15]
target = 9

const twoSum = (arr, targetSum) => {
    const sumsMap = new Map();

    for (let i = 0; i < arr.length; i ++){
        const   currentNum  = arr[i];
        const diff = targetSum - currentNum;
        if (sumsMap.has(diff)){
            return [sumsMap.get(diff), i];
        }
        sumsMap.set(currentNum, i)
    }
    return 'Sum not found in additors of array'
    
    
}

console.log(twoSum(nums, target))