// Module ID: 4237
// Function ID: 37278
// Name: copyArray
// Dependencies: []

// Module 4237 (copyArray)

export default function copyArray(arg0, arg1) {
  let ArrayResult = arg1;
  if (!arg1) {
    const _Array = Array;
    ArrayResult = Array(length);
  }
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
};
