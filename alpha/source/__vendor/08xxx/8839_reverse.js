// Module ID: 8839
// Function ID: 8840
// Name: reverse
// Dependencies: []

// Module 8839 (reverse)

export default function reverse(arg0) {
  let callResult = arg0;
  if (null != arg0) {
    callResult = reverse.call(arg0);
  }
  return callResult;
};
