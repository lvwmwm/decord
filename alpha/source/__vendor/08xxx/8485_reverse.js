// Module ID: 8485
// Function ID: 8486
// Name: reverse
// Dependencies: []

// Module 8485 (reverse)

export default function reverse(arg0) {
  let callResult = arg0;
  if (null != arg0) {
    callResult = reverse.call(arg0);
  }
  return callResult;
};
