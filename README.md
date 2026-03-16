# JavaScript Practice

This repository is for practicing common JavaScript coding challenges and problem-solving patterns.

## Purpose

The current exercises focus on array processing, hash-based lookups, grouping logic, and sequence detection.

## Current Challenges By Category

### Hash Map Lookup

#### Two Sum
File: `dayoneP1.js`

Tests:
- using a `Map` for constant-time lookups
- scanning an array once
- finding two values that add up to a target
- returning the indexes of the matching pair

Assumed criteria:
- input is an array of numbers and a target sum
- exactly one valid pair is expected
- the same element cannot be used twice
- output should be an array of two indexes

### String Grouping

#### Group Anagrams
File: `dayOneP2.js`

Tests:
- transforming strings into a normalized key
- grouping related values with a `Map`
- working with arrays of strings
- returning grouped results

Assumed criteria:
- input is an array of words
- words that contain the same letters belong in the same group
- output should be an array of grouped word arrays
- group order is usually not important unless specified

### Frequency Counting

#### Top K Frequent Elements
File: `dayOneP3.js`

Tests:
- counting occurrences of values
- storing frequencies with a `Map`
- sorting by count
- selecting the top `k` results

Assumed criteria:
- input is an array of numbers and an integer `k`
- output should contain the `k` most frequent values
- the result includes values only, not their counts
- equal-frequency ordering may vary unless specified

### Sequence Detection

#### Longest Consecutive Sequence
File: `dayOneP4.js`

Tests:
- using a `Set` for fast membership checks
- identifying the start of a sequence
- counting consecutive runs efficiently
- tracking the longest streak

Assumed criteria:
- input is an unsorted array of integers
- consecutive means numerically adjacent values
- numbers do not need to be adjacent in the original array
- output should be the length of the longest consecutive sequence

## Current File List

- `dayoneP1.js`
- `dayOneP2.js`
- `dayOneP3.js`
- `dayOneP4.js`
