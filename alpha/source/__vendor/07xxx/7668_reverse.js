// Module ID: 7668
// Function ID: 7669
// Name: reverse
// Dependencies: []

// Module 7668 (reverse)

export default function reverse(arg0) {
  let callResult = arg0;
  if (null != arg0) {
    callResult = reverse.call(arg0);
  }
  return callResult;
};
