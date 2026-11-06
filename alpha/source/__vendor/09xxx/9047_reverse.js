// Module ID: 9047
// Function ID: 9048
// Name: reverse
// Dependencies: []

// Module 9047 (reverse)

export default function reverse(arg0) {
  let callResult = arg0;
  if (null != arg0) {
    callResult = reverse.call(arg0);
  }
  return callResult;
};
