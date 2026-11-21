// Module ID: 7270
// Function ID: 7271
// Name: reverse
// Dependencies: []

// Module 7270 (reverse)

export default function reverse(arg0) {
  let callResult = arg0;
  if (null != arg0) {
    callResult = reverse.call(arg0);
  }
  return callResult;
};
