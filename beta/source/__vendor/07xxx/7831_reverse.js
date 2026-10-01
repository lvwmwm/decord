// Module ID: 7831
// Function ID: 7832
// Name: reverse
// Dependencies: []

// Module 7831 (reverse)

export default function reverse(arg0) {
  let callResult = arg0;
  if (null != arg0) {
    callResult = reverse.call(arg0);
  }
  return callResult;
};
