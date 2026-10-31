// Module ID: 8950
// Function ID: 8951
// Name: reverse
// Dependencies: []

// Module 8950 (reverse)

export default function reverse(arg0) {
  let callResult = arg0;
  if (null != arg0) {
    callResult = reverse.call(arg0);
  }
  return callResult;
};
