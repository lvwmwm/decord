// Module ID: 611
// Function ID: 7050
// Name: baseTimes
// Dependencies: []

// Module 611 (baseTimes)

export default function baseTimes(arg0, arg1) {
  const ArrayResult = Array(arg0);
  for (let num = 0; num < arg0; num = num + 1) {
    ArrayResult[num] = arg1(num);
  }
  return ArrayResult;
};
