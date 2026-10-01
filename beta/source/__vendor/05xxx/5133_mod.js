// Module ID: 5133
// Function ID: 5134
// Name: mod
// Dependencies: [1307]

// Module 5133 (mod)
import _mod1307 from "module_1307" /* 1307 */;


export default function mod(arg0, arg1) {
  const result = arg0 % arg1;
  let sum = result;
  const tmp2 = _mod1307;
  if (result < 0) {
    sum = result + arg1;
  }
  return tmp2(sum);
};
