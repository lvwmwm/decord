// Module ID: 8728
// Function ID: 8729
// Name: reverse
// Dependencies: []

// Module 8728 (reverse)

export default function reverse(arg0) {
  let callResult = arg0;
  if (null != arg0) {
    callResult = reverse.call(arg0);
  }
  return callResult;
};
