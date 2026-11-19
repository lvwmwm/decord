// Module ID: 7151
// Function ID: 7152
// Name: reverse
// Dependencies: []

// Module 7151 (reverse)

export default function reverse(arg0) {
  let callResult = arg0;
  if (null != arg0) {
    callResult = reverse.call(arg0);
  }
  return callResult;
};
