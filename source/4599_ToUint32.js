// Module ID: 4599
// Function ID: 4600
// Name: ToUint32
// Dependencies: [4600, 4617, 4618, 4620]

// Module 4599 (ToUint32)

export default function ToUint32(arg0) {
  const tmp3 = require(4600) /* ToNumber */(arg0);
  if (require(4617) /* isFinite */(tmp3)) {
    if (0 !== tmp3) {
      const tmp5 = tmp(4620)(tmp(4618)(tmp3), 4294967296);
      let num3 = 0;
      if (0 !== tmp5) {
        num3 = tmp5;
      }
      return num3;
    }
  }
  return 0;
};
