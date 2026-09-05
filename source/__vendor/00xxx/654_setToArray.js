// Module ID: 654
// Function ID: 655
// Name: setToArray
// Dependencies: []

// Module 654 (setToArray)

export default function setToArray(size) {
  c0 = -1;
  const ArrayResult = Array(size.size);
  const item = size.forEach((arg0) => {
    const sum = c0 + 1;
    c0 = sum;
    closure_1[sum] = arg0;
  });
  return ArrayResult;
};
