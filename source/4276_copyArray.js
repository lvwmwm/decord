// Module ID: 4276
// Function ID: 37451
// Name: copyArray
// Dependencies: []

// Module 4276 (copyArray)

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
