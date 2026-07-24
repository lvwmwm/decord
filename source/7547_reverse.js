// Module ID: 7547
// Function ID: 60233
// Name: reverse
// Dependencies: []

// Module 7547 (reverse)

export default function reverse(arg0) {
  let callResult = arg0;
  if (null != arg0) {
    callResult = reverse.call(arg0);
  }
  return callResult;
};
