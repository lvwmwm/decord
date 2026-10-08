// Module ID: 5703
// Function ID: 5704
// Name: SameValue
// Dependencies: [1336]

// Module 5703 (SameValue)
import _mod1336 from "module_1336" /* 1336 */;


export default function SameValue(arg0, arg1) {
  let tmp3;
  if (arg0 === arg1) {
    tmp3 = 0 !== arg0 || 1 / arg0 === 1 / arg1;
    const tmp4 = 0 !== arg0 || 1 / arg0 === 1 / arg1;
  } else {
    tmp3 = _mod1336(arg0) && _mod1336(arg1);
  }
  return tmp3;
};
