// Module ID: 4402
// Function ID: 38781
// Name: mod
// Dependencies: []

// Module 4402 (mod)

export default function mod(arg0, arg1) {
  const result = arg0 % arg1;
  let sum = result;
  if (result < 0) {
    sum = result + arg1;
  }
  return require(dependencyMap[0])(sum);
};
