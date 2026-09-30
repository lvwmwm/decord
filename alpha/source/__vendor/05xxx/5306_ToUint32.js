// Module ID: 5306
// Function ID: 5307
// Name: ToUint32
// Dependencies: [5307, 5324, 5325, 5327]

// Module 5306 (ToUint32)
import ToNumber from "ToNumber" /* 5307 */;
import _mod5324 from "module_5324" /* 5324 */;


export default function ToUint32(arg0) {
  const tmp3 = ToNumber(arg0);
  if (_mod5324(tmp3)) {
    if (0 !== tmp3) {
      const tmp5 = tmp(5327)(tmp(5325)(tmp3), 4294967296);
      let num3 = 0;
      if (0 !== tmp5) {
        num3 = tmp5;
      }
      return num3;
    }
  }
  return 0;
};
