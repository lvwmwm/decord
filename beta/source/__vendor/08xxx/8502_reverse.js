// Module ID: 8502
// Function ID: 8503
// Name: reverse
// Dependencies: []

// Module 8502 (reverse)

export default function reverse(arg0) {
  let callResult = arg0;
  if (null != arg0) {
    callResult = reverse.call(arg0);
  }
  return callResult;
};
