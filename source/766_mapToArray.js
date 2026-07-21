// Module ID: 766
// Function ID: 8831
// Name: mapToArray
// Dependencies: []

// Module 766 (mapToArray)

export default function mapToArray(size) {
  let closure_0 = -1;
  const ArrayResult = Array(size.size);
  const item = size.forEach((arg0, arg1) => {
    const sum = closure_0 + 1;
    closure_0 = sum;
    const items = [arg1, arg0];
    ArrayResult[sum] = items;
  });
  return ArrayResult;
};
