// Module ID: 670
// Function ID: 671
// Name: arrayPush
// Dependencies: []

// Module 670 (arrayPush)

export default function arrayPush(arg0, arg1) {
  let num;
  const length = arg1.length;
  for (let num = 0; num < length; num = num + 1) {
    arg0[arg0.length + num] = arg1[num];
  }
  return arg0;
};
