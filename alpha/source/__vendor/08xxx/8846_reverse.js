// Module ID: 8846
// Function ID: 8847
// Name: reverse
// Dependencies: []

// Module 8846 (reverse)

export default function reverse(arg0) {
  let callResult = arg0;
  if (null != arg0) {
    callResult = reverse.call(arg0);
  }
  return callResult;
};
