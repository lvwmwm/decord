// Module ID: 7835
// Function ID: 7836
// Name: reverse
// Dependencies: []

// Module 7835 (reverse)

export default function reverse(arg0) {
  let callResult = arg0;
  if (null != arg0) {
    callResult = reverse.call(arg0);
  }
  return callResult;
};
