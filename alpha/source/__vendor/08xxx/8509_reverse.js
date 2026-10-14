// Module ID: 8509
// Function ID: 8510
// Name: reverse
// Dependencies: []

// Module 8509 (reverse)

export default function reverse(arg0) {
  let callResult = arg0;
  if (null != arg0) {
    callResult = reverse.call(arg0);
  }
  return callResult;
};
