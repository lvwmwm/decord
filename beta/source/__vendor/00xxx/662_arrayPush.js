// Module ID: 662
// Function ID: 663
// Name: arrayPush
// Dependencies: []

// Module 662 (arrayPush)

export default function arrayPush(arg0, arg1) {
  for (let num = 0; num < length; num = num + 1) {
    arg0[arg0.length + num] = arg1[num];
  }
  return arg0;
};
