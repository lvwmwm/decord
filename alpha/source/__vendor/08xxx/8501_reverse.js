// Module ID: 8501
// Function ID: 8502
// Name: reverse
// Dependencies: []

// Module 8501 (reverse)

export default function reverse(arg0) {
  let callResult = arg0;
  if (null != arg0) {
    callResult = reverse.call(arg0);
  }
  return callResult;
};
