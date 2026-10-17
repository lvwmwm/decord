// Module ID: 8775
// Function ID: 8776
// Name: reverse
// Dependencies: []

// Module 8775 (reverse)

export default function reverse(arg0) {
  let callResult = arg0;
  if (null != arg0) {
    callResult = reverse.call(arg0);
  }
  return callResult;
};
