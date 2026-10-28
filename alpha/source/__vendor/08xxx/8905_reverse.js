// Module ID: 8905
// Function ID: 8906
// Name: reverse
// Dependencies: []

// Module 8905 (reverse)

export default function reverse(arg0) {
  let callResult = arg0;
  if (null != arg0) {
    callResult = reverse.call(arg0);
  }
  return callResult;
};
