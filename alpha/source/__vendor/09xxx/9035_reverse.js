// Module ID: 9035
// Function ID: 9036
// Name: reverse
// Dependencies: []

// Module 9035 (reverse)

export default function reverse(arg0) {
  let callResult = arg0;
  if (null != arg0) {
    callResult = reverse.call(arg0);
  }
  return callResult;
};
