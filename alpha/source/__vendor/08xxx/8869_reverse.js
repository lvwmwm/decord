// Module ID: 8869
// Function ID: 8870
// Name: reverse
// Dependencies: []

// Module 8869 (reverse)

export default function reverse(arg0) {
  let callResult = arg0;
  if (null != arg0) {
    callResult = reverse.call(arg0);
  }
  return callResult;
};
