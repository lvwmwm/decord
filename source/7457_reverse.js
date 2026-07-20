// Module ID: 7457
// Function ID: 59919
// Name: reverse
// Dependencies: []

// Module 7457 (reverse)

export default function reverse(arg0) {
  let callResult = arg0;
  if (null != arg0) {
    callResult = reverse.call(arg0);
  }
  return callResult;
};
