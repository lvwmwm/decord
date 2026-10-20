// Module ID: 8791
// Function ID: 8792
// Name: reverse
// Dependencies: []

// Module 8791 (reverse)

export default function reverse(arg0) {
  let callResult = arg0;
  if (null != arg0) {
    callResult = reverse.call(arg0);
  }
  return callResult;
};
