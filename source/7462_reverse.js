// Module ID: 7462
// Function ID: 59942
// Name: reverse
// Dependencies: []

// Module 7462 (reverse)

export default function reverse(arg0) {
  let callResult = arg0;
  if (null != arg0) {
    callResult = reverse.call(arg0);
  }
  return callResult;
};
