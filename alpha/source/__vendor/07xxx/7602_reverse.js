// Module ID: 7602
// Function ID: 7603
// Name: reverse
// Dependencies: []

// Module 7602 (reverse)

export default function reverse(arg0) {
  let callResult = arg0;
  if (null != arg0) {
    callResult = reverse.call(arg0);
  }
  return callResult;
};
