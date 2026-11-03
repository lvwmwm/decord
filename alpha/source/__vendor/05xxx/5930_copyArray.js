// Module ID: 5930
// Function ID: 5931
// Name: copyArray
// Dependencies: []

// Module 5930 (copyArray)

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
