// Module ID: 6378
// Function ID: 6379
// Name: mod
// Dependencies: [1333]

// Module 6378 (mod)
import _mod1333 from "module_1333" /* 1333 */;


export default function mod(arg0, arg1) {
  const result = arg0 % arg1;
  let sum = result;
  const tmp2 = _mod1333;
  if (result < 0) {
    sum = result + arg1;
  }
  return tmp2(sum);
};
