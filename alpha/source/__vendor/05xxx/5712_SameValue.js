// Module ID: 5712
// Function ID: 5713
// Name: SameValue
// Dependencies: [1337]

// Module 5712 (SameValue)
import _mod1337 from "module_1337" /* 1337 */;


export default function SameValue(arg0, arg1) {
  let tmp3;
  if (arg0 === arg1) {
    tmp3 = 0 !== arg0 || 1 / arg0 === 1 / arg1;
    const tmp4 = 0 !== arg0 || 1 / arg0 === 1 / arg1;
  } else {
    tmp3 = _mod1337(arg0) && _mod1337(arg1);
  }
  return tmp3;
};
