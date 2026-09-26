// Module ID: 5070
// Function ID: 5071
// Dependencies: [1307]

// Module 5070
import _mod1307 from "module_1307" /* 1307 */;


export default function mod(arg0, arg1) {
  const result = arg0 % arg1;
  let sum = result;
  if (result < 0) {
    sum = result + arg1;
  }
  return _mod1307(sum);
};
