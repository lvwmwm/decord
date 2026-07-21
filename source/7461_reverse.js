// Module ID: 7461
// Function ID: 59930
// Name: reverse
// Dependencies: []

// Module 7461 (reverse)

export default function reverse(arg0) {
  let callResult = arg0;
  if (null != arg0) {
    callResult = reverse.call(arg0);
  }
  return callResult;
};
