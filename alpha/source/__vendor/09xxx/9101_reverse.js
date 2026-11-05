// Module ID: 9101
// Function ID: 9102
// Name: reverse
// Dependencies: []

// Module 9101 (reverse)

export default function reverse(arg0) {
  let callResult = arg0;
  if (null != arg0) {
    callResult = reverse.call(arg0);
  }
  return callResult;
};
