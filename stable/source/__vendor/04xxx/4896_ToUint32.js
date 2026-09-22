// Module ID: 4896
// Function ID: 4897
// Name: ToUint32
// Dependencies: [4897, 4914, 4915, 4917]

// Module 4896 (ToUint32)
import ToNumber from "ToNumber" /* 4897 */;
import _mod4914 from "module_4914" /* 4914 */;


export default function ToUint32(arg0) {
  const tmp3 = ToNumber(arg0);
  if (_mod4914(tmp3)) {
    if (0 !== tmp3) {
      const tmp5 = tmp(4917)(tmp(4915)(tmp3), 4294967296);
      let num3 = 0;
      if (0 !== tmp5) {
        num3 = tmp5;
      }
      return num3;
    }
  }
  return 0;
};
