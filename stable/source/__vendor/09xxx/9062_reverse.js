// Module ID: 9062
// Function ID: 9063
// Name: reverse
// Dependencies: []

// Module 9062 (reverse)

export default function reverse(arg0) {
  let callResult = arg0;
  if (null != arg0) {
    callResult = reverse.call(arg0);
  }
  return callResult;
};
