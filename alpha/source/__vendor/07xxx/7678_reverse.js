// Module ID: 7678
// Function ID: 7679
// Name: reverse
// Dependencies: []

// Module 7678 (reverse)

export default function reverse(arg0) {
  let callResult = arg0;
  if (null != arg0) {
    callResult = reverse.call(arg0);
  }
  return callResult;
};
