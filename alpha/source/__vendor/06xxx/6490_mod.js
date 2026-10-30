// Module ID: 6490
// Function ID: 6491
// Name: mod
// Dependencies: [1319]

// Module 6490 (mod)
import _mod1319 from "module_1319" /* 1319 */;


export default function mod(arg0, arg1) {
  const result = arg0 % arg1;
  let sum = result;
  const tmp2 = _mod1319;
  if (result < 0) {
    sum = result + arg1;
  }
  return tmp2(sum);
};
