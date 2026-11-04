// Module ID: 9095
// Function ID: 9096
// Name: reverse
// Dependencies: []

// Module 9095 (reverse)

export default function reverse(arg0) {
  let callResult = arg0;
  if (null != arg0) {
    callResult = reverse.call(arg0);
  }
  return callResult;
};
