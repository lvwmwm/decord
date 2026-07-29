// Module ID: 794
// Function ID: 795
// Name: arrayPush
// Dependencies: []

// Module 794 (arrayPush)

export default function arrayPush(arg0, arg1) {
  for (let num = 0; num < length; num = num + 1) {
    arg0[arg0.length + num] = arg1[num];
  }
  return arg0;
};
