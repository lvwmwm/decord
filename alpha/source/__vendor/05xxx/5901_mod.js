// Module ID: 5901
// Function ID: 5902
// Name: mod
// Dependencies: [1331]

// Module 5901 (mod)
import _mod1331 from "module_1331" /* 1331 */;


export default function mod(arg0, arg1) {
  const result = arg0 % arg1;
  let sum = result;
  const tmp2 = _mod1331;
  if (result < 0) {
    sum = result + arg1;
  }
  return tmp2(sum);
};
