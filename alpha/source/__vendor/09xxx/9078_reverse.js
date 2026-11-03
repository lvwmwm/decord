// Module ID: 9078
// Function ID: 9079
// Name: reverse
// Dependencies: []

// Module 9078 (reverse)

export default function reverse(arg0) {
  let callResult = arg0;
  if (null != arg0) {
    callResult = reverse.call(arg0);
  }
  return callResult;
};
