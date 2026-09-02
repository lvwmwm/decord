// Module ID: 624
// Function ID: 625
// Name: baseTimes
// Dependencies: []

// Module 624 (baseTimes)

export default function baseTimes(arg0, arg1) {
  const ArrayResult = Array(arg0);
  for (let num = 0; num < arg0; num = num + 1) {
    ArrayResult[num] = arg1(num);
  }
  return ArrayResult;
};
