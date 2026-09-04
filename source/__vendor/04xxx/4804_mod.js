// Module ID: 4804
// Function ID: 4805
// Name: mod
// Dependencies: [563]

// Module 4804 (mod)
import _mod563 from "module_563" /* 563 */;


export default function mod(arg0, arg1) {
  const result = arg0 % arg1;
  let sum = result;
  if (result < 0) {
    sum = result + arg1;
  }
  return _mod563(sum);
};
