// Module ID: 6054
// Function ID: 6055
// Name: copyArray
// Dependencies: []

// Module 6054 (copyArray)

export default function copyArray(arg0, arg1) {
  let num;
  let ArrayResult = arg1;
  if (!ArrayResult) {
    const _Array = Array;
    ArrayResult = Array(length);
  }
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
};
