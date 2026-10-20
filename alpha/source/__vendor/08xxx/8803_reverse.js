// Module ID: 8803
// Function ID: 8804
// Name: reverse
// Dependencies: []

// Module 8803 (reverse)

export default function reverse(arg0) {
  let callResult = arg0;
  if (null != arg0) {
    callResult = reverse.call(arg0);
  }
  return callResult;
};
