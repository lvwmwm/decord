// Module ID: 5015
// Function ID: 5016
// Name: ToUint32
// Dependencies: [5016, 5033, 5034, 5036]

// Module 5015 (ToUint32)
import ToNumber from "ToNumber" /* 5016 */;
import _mod5033 from "module_5033" /* 5033 */;


export default function ToUint32(arg0) {
  const tmp3 = ToNumber(arg0);
  if (_mod5033(tmp3)) {
    if (0 !== tmp3) {
      const tmp5 = tmp(5036)(tmp(5034)(tmp3), 4294967296);
      let num3 = 0;
      if (0 !== tmp5) {
        num3 = tmp5;
      }
      return num3;
    }
  }
  return 0;
};
