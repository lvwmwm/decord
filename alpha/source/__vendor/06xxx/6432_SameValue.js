// Module ID: 6432
// Function ID: 6433
// Name: SameValue
// Dependencies: [1339]

// Module 6432 (SameValue)
import _mod1339 from "module_1339" /* 1339 */;


export default function SameValue(arg0, arg1) {
  let tmp3;
  if (arg0 === arg1) {
    tmp3 = 0 !== arg0 || 1 / arg0 === 1 / arg1;
    const tmp4 = 0 !== arg0 || 1 / arg0 === 1 / arg1;
  } else {
    tmp3 = _mod1339(arg0) && _mod1339(arg1);
  }
  return tmp3;
};
