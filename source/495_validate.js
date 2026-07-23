// Module ID: 495
// Function ID: 6427
// Name: validate
// Dependencies: [496]

// Module 495 (validate)
const module = arg2;
const dependencyMap = arg6;
arg5.default = function validate(arg0) {
  let isMatch = "string" === typeof arg0;
  if (isMatch) {
    isMatch = module(496).test(arg0);
    const obj = module(496);
  }
  return isMatch;
};
