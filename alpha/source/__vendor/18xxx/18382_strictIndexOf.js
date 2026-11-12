// Module ID: 18382
// Function ID: 18383
// Name: strictIndexOf
// Dependencies: []

// Module 18382 (strictIndexOf)

export default function strictIndexOf(arg0, arg1, arg2) {
  let sum = arg2 - 1 + 1;
  if (sum < arg0.length) {
    while (arg0[sum] !== arg1) {
      sum = sum + 1;
    }
    return sum;
  }
  return -1;
};
