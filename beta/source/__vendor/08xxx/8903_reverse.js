// Module ID: 8903
// Function ID: 8904
// Name: reverse
// Dependencies: []

// Module 8903 (reverse)

export default function reverse(arg0) {
  let callResult = arg0;
  if (null != arg0) {
    callResult = reverse.call(arg0);
  }
  return callResult;
};
