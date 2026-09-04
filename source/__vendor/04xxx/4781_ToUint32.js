// Module ID: 4781
// Function ID: 4782
// Name: ToUint32
// Dependencies: [4782, 4799, 4800, 4802]

// Module 4781 (ToUint32)
import ToNumber from "ToNumber" /* 4782 */;
import isFinite from "isFinite" /* 4799 */;


export default function ToUint32(arg0) {
  const tmp3 = ToNumber(arg0);
  if (isFinite(tmp3)) {
    if (0 !== tmp3) {
      const tmp5 = tmp(4802)(tmp(4800)(tmp3), 4294967296);
      let num3 = 0;
      if (0 !== tmp5) {
        num3 = tmp5;
      }
      return num3;
    }
  }
  return 0;
};
