// Module ID: 8908
// Function ID: 8909
// Name: reverse
// Dependencies: []

// Module 8908 (reverse)

export default function reverse(arg0) {
  let callResult = arg0;
  if (null != arg0) {
    callResult = reverse.call(arg0);
  }
  return callResult;
};
