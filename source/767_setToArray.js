// Module ID: 767
// Function ID: 8834
// Name: setToArray
// Dependencies: []

// Module 767 (setToArray)

export default function setToArray(size) {
  let closure_0 = -1;
  const ArrayResult = Array(size.size);
  const item = size.forEach((arg0) => {
    const sum = closure_0 + 1;
    closure_0 = sum;
    ArrayResult[sum] = arg0;
  });
  return ArrayResult;
};
