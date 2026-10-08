// Module ID: 8477
// Function ID: 8478
// Name: reverse
// Dependencies: []

// Module 8477 (reverse)

export default function reverse(arg0) {
  let callResult = arg0;
  if (null != arg0) {
    callResult = reverse.call(arg0);
  }
  return callResult;
};
