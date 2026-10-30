// Module ID: 8941
// Function ID: 8942
// Name: reverse
// Dependencies: []

// Module 8941 (reverse)

export default function reverse(arg0) {
  let callResult = arg0;
  if (null != arg0) {
    callResult = reverse.call(arg0);
  }
  return callResult;
};
