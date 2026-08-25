// Module ID: 4684
// Function ID: 4685
// Name: mod
// Dependencies: [566]

// Module 4684 (mod)
import _mod566 from "module_566" /* 566 */;


export default function mod(arg0, arg1) {
  const result = arg0 % arg1;
  let sum = result;
  if (result < 0) {
    sum = result + arg1;
  }
  return _mod566(sum);
};
