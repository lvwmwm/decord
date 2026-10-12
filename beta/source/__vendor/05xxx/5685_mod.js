// Module ID: 5685
// Function ID: 5686
// Name: mod
// Dependencies: [1331]

// Module 5685 (mod)
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
