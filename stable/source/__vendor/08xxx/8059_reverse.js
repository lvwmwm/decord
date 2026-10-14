// Module ID: 8059
// Function ID: 8060
// Name: reverse
// Dependencies: []

// Module 8059 (reverse)

export default function reverse(arg0) {
  let callResult = arg0;
  if (null != arg0) {
    callResult = reverse.call(arg0);
  }
  return callResult;
};
