// Module ID: 5103
// Function ID: 5104
// Name: ToUint32
// Dependencies: [5104, 5121, 5122, 5124]

// Module 5103 (ToUint32)
import ToNumber from "ToNumber" /* 5104 */;
import _mod5121 from "module_5121" /* 5121 */;


export default function ToUint32(arg0) {
  const tmp3 = ToNumber(arg0);
  if (_mod5121(tmp3)) {
    if (0 !== tmp3) {
      const tmp5 = tmp(5124)(tmp(5122)(tmp3), 4294967296);
      let num3 = 0;
      if (0 !== tmp5) {
        num3 = tmp5;
      }
      return num3;
    }
  }
  return 0;
};
