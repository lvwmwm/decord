// Module ID: 5047
// Function ID: 5048
// Name: ToUint32
// Dependencies: [5048, 5065, 5066, 5068]

// Module 5047 (ToUint32)
import ToNumber from "ToNumber" /* 5048 */;
import _mod5065 from "module_5065" /* 5065 */;


export default function ToUint32(arg0) {
  const tmp3 = ToNumber(arg0);
  if (_mod5065(tmp3)) {
    if (0 !== tmp3) {
      const tmp5 = tmp(5068)(tmp(5066)(tmp3), 4294967296);
      let num3 = 0;
      if (0 !== tmp5) {
        num3 = tmp5;
      }
      return num3;
    }
  }
  return 0;
};
