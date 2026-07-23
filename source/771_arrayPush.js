// Module ID: 771
// Function ID: 8844
// Name: arrayPush
// Dependencies: []

// Module 771 (arrayPush)

export default function arrayPush(arg0, arg1) {
  for (let num = 0; num < length; num = num + 1) {
    arg0[arg0.length + num] = arg1[num];
  }
  return arg0;
};
