// Module ID: 5156
// Function ID: 5157
// Name: SameValue
// Dependencies: [1325]

// Module 5156 (SameValue)
import _mod1325 from "module_1325" /* 1325 */;


export default function SameValue(arg0, arg1) {
  let tmp3;
  if (arg0 === arg1) {
    tmp3 = 0 !== arg0 || 1 / arg0 === 1 / arg1;
    const tmp4 = 0 !== arg0 || 1 / arg0 === 1 / arg1;
  } else {
    tmp3 = _mod1325(arg0) && _mod1325(arg1);
  }
  return tmp3;
};
