// Module ID: 5100
// Function ID: 5101
// Name: ToUint32
// Dependencies: [5101, 5118, 5119, 5121]

// Module 5100 (ToUint32)
import ToNumber from "ToNumber" /* 5101 */;
import _mod5118 from "module_5118" /* 5118 */;


export default function ToUint32(arg0) {
  const tmp3 = ToNumber(arg0);
  if (_mod5118(tmp3)) {
    if (0 !== tmp3) {
      const tmp5 = tmp(5121)(tmp(5119)(tmp3), 4294967296);
      let num3 = 0;
      if (0 !== tmp5) {
        num3 = tmp5;
      }
      return num3;
    }
  }
  return 0;
};
