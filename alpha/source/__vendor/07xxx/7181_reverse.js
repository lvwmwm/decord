// Module ID: 7181
// Function ID: 7182
// Name: reverse
// Dependencies: []

// Module 7181 (reverse)

export default function reverse(arg0) {
  let callResult = arg0;
  if (null != arg0) {
    callResult = reverse.call(arg0);
  }
  return callResult;
};
