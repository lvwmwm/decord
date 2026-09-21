// Module ID: 5017
// Function ID: 5018
// Name: ToUint32
// Dependencies: [5018, 5035, 5036, 5038]

// Module 5017 (ToUint32)
import ToNumber from "ToNumber" /* 5018 */;
import _mod5035 from "module_5035" /* 5035 */;


export default function ToUint32(arg0) {
  const tmp3 = ToNumber(arg0);
  if (_mod5035(tmp3)) {
    if (0 !== tmp3) {
      const tmp5 = tmp(5038)(tmp(5036)(tmp3), 4294967296);
      let num3 = 0;
      if (0 !== tmp5) {
        num3 = tmp5;
      }
      return num3;
    }
  }
  return 0;
};
