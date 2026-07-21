// Module ID: 4406
// Function ID: 38829
// Name: mod
// Dependencies: []

// Module 4406 (mod)

export default function mod(arg0, arg1) {
  const result = arg0 % arg1;
  let sum = result;
  if (result < 0) {
    sum = result + arg1;
  }
  return require(dependencyMap[0])(sum);
};
