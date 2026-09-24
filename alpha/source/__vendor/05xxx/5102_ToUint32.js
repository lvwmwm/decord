// Module ID: 5102
// Function ID: 5103
// Name: ToUint32
// Dependencies: [5103, 5120, 5121, 5123]

// Module 5102 (ToUint32)
import ToNumber from "ToNumber" /* 5103 */;
import _mod5120 from "module_5120" /* 5120 */;


export default function ToUint32(arg0) {
  const tmp3 = ToNumber(arg0);
  if (_mod5120(tmp3)) {
    if (0 !== tmp3) {
      const tmp5 = tmp(5123)(tmp(5121)(tmp3), 4294967296);
      let num3 = 0;
      if (0 !== tmp5) {
        num3 = tmp5;
      }
      return num3;
    }
  }
  return 0;
};
