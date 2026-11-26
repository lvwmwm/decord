// Module ID: 7824
// Function ID: 7825
// Name: reverse
// Dependencies: []

// Module 7824 (reverse)

export default function reverse(arg0) {
  let callResult = arg0;
  if (null != arg0) {
    callResult = reverse.call(arg0);
  }
  return callResult;
};
