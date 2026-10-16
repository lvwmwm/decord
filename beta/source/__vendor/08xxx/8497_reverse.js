// Module ID: 8497
// Function ID: 8498
// Name: reverse
// Dependencies: []

// Module 8497 (reverse)

export default function reverse(arg0) {
  let callResult = arg0;
  if (null != arg0) {
    callResult = reverse.call(arg0);
  }
  return callResult;
};
