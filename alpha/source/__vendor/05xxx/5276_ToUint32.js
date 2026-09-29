// Module ID: 5276
// Function ID: 5277
// Name: ToUint32
// Dependencies: [5277, 5294, 5295, 5297]

// Module 5276 (ToUint32)
import ToNumber from "ToNumber" /* 5277 */;
import _mod5294 from "module_5294" /* 5294 */;


export default function ToUint32(arg0) {
  const tmp3 = ToNumber(arg0);
  if (_mod5294(tmp3)) {
    if (0 !== tmp3) {
      const tmp5 = tmp(5297)(tmp(5295)(tmp3), 4294967296);
      let num3 = 0;
      if (0 !== tmp5) {
        num3 = tmp5;
      }
      return num3;
    }
  }
  return 0;
};
