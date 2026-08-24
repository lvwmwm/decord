// Module ID: 4406
// Function ID: 4407
// Name: ToUint32
// Dependencies: [4407, 4424, 4425, 4427]

// Module 4406 (ToUint32)
import ToNumber from "ToNumber" /* 4407 */;
import isFinite from "isFinite" /* 4424 */;


export default function ToUint32(arg0) {
  const tmp3 = ToNumber(arg0);
  if (isFinite(tmp3)) {
    if (0 !== tmp3) {
      const tmp5 = tmp(4427)(tmp(4425)(tmp3), 4294967296);
      let num3 = 0;
      if (0 !== tmp5) {
        num3 = tmp5;
      }
      return num3;
    }
  }
  return 0;
};
