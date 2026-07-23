// Module ID: 4410
// Function ID: 38877
// Name: mod
// Dependencies: [543]

// Module 4410 (mod)

export default function mod(arg0, arg1) {
  const result = arg0 % arg1;
  let sum = result;
  if (result < 0) {
    sum = result + arg1;
  }
  return require(543)(sum);
};
