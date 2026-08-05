// Module ID: 4533
// Function ID: 4534
// Name: mod
// Dependencies: [566]

// Module 4533 (mod)

export default function mod(arg0, arg1) {
  const result = arg0 % arg1;
  let sum = result;
  if (result < 0) {
    sum = result + arg1;
  }
  return require(566)(sum);
};
