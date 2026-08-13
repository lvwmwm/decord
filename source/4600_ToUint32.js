// Module ID: 4600
// Function ID: 4601
// Name: ToUint32
// Dependencies: [4601, 4618, 4619, 4621]

// Module 4600 (ToUint32)

export default function ToUint32(arg0) {
  const tmp3 = require(4601) /* ToNumber */(arg0);
  if (require(4618) /* isFinite */(tmp3)) {
    if (0 !== tmp3) {
      const tmp5 = tmp(4621)(tmp(4619)(tmp3), 4294967296);
      let num3 = 0;
      if (0 !== tmp5) {
        num3 = tmp5;
      }
      return num3;
    }
  }
  return 0;
};
