// Module ID: 5094
// Function ID: 5095
// Name: SameValue
// Dependencies: [1317]

// Module 5094 (SameValue)
import _mod1317 from "module_1317" /* 1317 */;


export default function SameValue(arg0, arg1) {
  if (arg0 === arg1) {
    let tmp4 = 0 !== arg0;
    if (!tmp4) {
      tmp4 = 1 / arg0 === 1 / arg1;
    }
    let tmp3 = tmp4;
  } else {
    tmp3 = _mod1317(arg0) && _mod1317(arg1);
  }
  return tmp3;
};
