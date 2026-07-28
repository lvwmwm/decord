// Module ID: 6679
// Function ID: 58913
// Name: reverse
// Dependencies: []

// Module 6679 (reverse)

export default function reverse(arg0) {
  let callResult = arg0;
  if (null != arg0) {
    callResult = reverse.call(arg0);
  }
  return callResult;
};
