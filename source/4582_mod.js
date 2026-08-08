// Module ID: 4582
// Function ID: 4583
// Name: mod
// Dependencies: [566]

// Module 4582 (mod)

export default function mod(arg0, arg1) {
  const result = arg0 % arg1;
  let sum = result;
  if (result < 0) {
    sum = result + arg1;
  }
  return require(566)(sum);
};
