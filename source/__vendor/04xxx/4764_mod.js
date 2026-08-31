// Module ID: 4764
// Function ID: 4765
// Name: mod
// Dependencies: [566]

// Module 4764 (mod)
import _mod566 from "module_566" /* 566 */;


export default function mod(arg0, arg1) {
  const result = arg0 % arg1;
  let sum = result;
  if (result < 0) {
    sum = result + arg1;
  }
  return _mod566(sum);
};
