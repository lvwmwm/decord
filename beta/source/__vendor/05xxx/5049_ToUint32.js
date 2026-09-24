// Module ID: 5049
// Function ID: 5050
// Name: ToUint32
// Dependencies: [5050, 5067, 5068, 5070]

// Module 5049 (ToUint32)
import ToNumber from "ToNumber" /* 5050 */;
import _mod5067 from "module_5067" /* 5067 */;


export default function ToUint32(arg0) {
  const tmp3 = ToNumber(arg0);
  if (_mod5067(tmp3)) {
    if (0 !== tmp3) {
      const tmp5 = tmp(5070)(tmp(5068)(tmp3), 4294967296);
      let num3 = 0;
      if (0 !== tmp5) {
        num3 = tmp5;
      }
      return num3;
    }
  }
  return 0;
};
