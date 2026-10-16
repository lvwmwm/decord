// Module ID: 8729
// Function ID: 8730
// Name: reverse
// Dependencies: []

// Module 8729 (reverse)

export default function reverse(arg0) {
  let callResult = arg0;
  if (null != arg0) {
    callResult = reverse.call(arg0);
  }
  return callResult;
};
