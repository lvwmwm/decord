// Module ID: 5681
// Function ID: 5682
// Name: mod
// Dependencies: [1330]

// Module 5681 (mod)
import _mod1330 from "module_1330" /* 1330 */;


export default function mod(arg0, arg1) {
  const result = arg0 % arg1;
  let sum = result;
  const tmp2 = _mod1330;
  if (result < 0) {
    sum = result + arg1;
  }
  return tmp2(sum);
};
