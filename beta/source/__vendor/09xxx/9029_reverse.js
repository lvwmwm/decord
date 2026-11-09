// Module ID: 9029
// Function ID: 9030
// Name: reverse
// Dependencies: []

// Module 9029 (reverse)

export default function reverse(arg0) {
  let callResult = arg0;
  if (null != arg0) {
    callResult = reverse.call(arg0);
  }
  return callResult;
};
