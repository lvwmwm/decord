// Module ID: 5072
// Function ID: 5073
// Dependencies: [1311]

// Module 5072
import _mod1311 from "module_1311" /* 1311 */;


export default function mod(arg0, arg1) {
  const result = arg0 % arg1;
  let sum = result;
  if (result < 0) {
    sum = result + arg1;
  }
  return _mod1311(sum);
};
