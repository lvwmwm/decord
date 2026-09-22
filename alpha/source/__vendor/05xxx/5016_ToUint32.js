// Module ID: 5016
// Function ID: 5017
// Name: ToUint32
// Dependencies: [5017, 5034, 5035, 5037]

// Module 5016 (ToUint32)
import ToNumber from "ToNumber" /* 5017 */;
import _mod5034 from "module_5034" /* 5034 */;


export default function ToUint32(arg0) {
  const tmp3 = ToNumber(arg0);
  if (_mod5034(tmp3)) {
    if (0 !== tmp3) {
      const tmp5 = tmp(5037)(tmp(5035)(tmp3), 4294967296);
      let num3 = 0;
      if (0 !== tmp5) {
        num3 = tmp5;
      }
      return num3;
    }
  }
  return 0;
};
