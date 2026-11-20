// Module ID: 7150
// Function ID: 7151
// Name: reverse
// Dependencies: []

// Module 7150 (reverse)

export default function reverse(arg0) {
  let callResult = arg0;
  if (null != arg0) {
    callResult = reverse.call(arg0);
  }
  return callResult;
};
