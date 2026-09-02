// Module ID: 515
// Function ID: 516
// Name: validate
// Dependencies: [516]

// Module 515 (validate)
const module = arg2;
const dependencyMap = arg6;
arg5.default = function validate(str) {
  let isMatch = typeof str === "string";
  if (typeof str === "string") {
    isMatch = module(516).test(str);
    const obj = module(516);
  }
  return isMatch;
};
