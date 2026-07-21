// Module ID: 5140
// Function ID: 43609
// Name: _arrayLikeToArray
// Dependencies: []

// Module 5140 (_arrayLikeToArray)

export default function _arrayLikeToArray(arg0, arg1) {
  let length = arg1;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
};
