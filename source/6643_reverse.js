// Module ID: 6643
// Function ID: 58824
// Name: reverse
// Dependencies: []

// Module 6643 (reverse)

export default function reverse(arg0) {
  let callResult = arg0;
  if (null != arg0) {
    callResult = reverse.call(arg0);
  }
  return callResult;
};
