// Module ID: 4645
// Function ID: 4646
// Name: mod
// Dependencies: [566]

// Module 4645 (mod)

export default function mod(arg0, arg1) {
  const result = arg0 % arg1;
  let sum = result;
  if (result < 0) {
    sum = result + arg1;
  }
  return require(566)(sum);
};
