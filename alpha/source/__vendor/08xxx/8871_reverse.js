// Module ID: 8871
// Function ID: 8872
// Name: reverse
// Dependencies: []

// Module 8871 (reverse)

export default function reverse(arg0) {
  let callResult = arg0;
  if (null != arg0) {
    callResult = reverse.call(arg0);
  }
  return callResult;
};
