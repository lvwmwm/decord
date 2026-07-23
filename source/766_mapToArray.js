// Module ID: 766
// Function ID: 8832
// Name: mapToArray
// Dependencies: []

// Module 766 (mapToArray)

export default function mapToArray(size) {
  let c0 = -1;
  const ArrayResult = Array(size.size);
  const item = size.forEach((arg0, arg1) => {
    const sum = c0 + 1;
    c0 = sum;
    const items = [arg1, arg0];
    closure_1[sum] = items;
  });
  return ArrayResult;
};
