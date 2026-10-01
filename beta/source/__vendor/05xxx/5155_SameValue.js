// Module ID: 5155
// Function ID: 5156
// Name: SameValue
// Dependencies: [1313]

// Module 5155 (SameValue)
import _mod1313 from "module_1313" /* 1313 */;


export default function SameValue(arg0, arg1) {
  let tmp3;
  if (arg0 === arg1) {
    tmp3 = 0 !== arg0 || 1 / arg0 === 1 / arg1;
    const tmp4 = 0 !== arg0 || 1 / arg0 === 1 / arg1;
  } else {
    tmp3 = _mod1313(arg0) && _mod1313(arg1);
  }
  return tmp3;
};
