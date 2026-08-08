// Module ID: 4559
// Function ID: 4560
// Name: ToUint32
// Dependencies: [4560, 4577, 4578, 4580]

// Module 4559 (ToUint32)

export default function ToUint32(arg0) {
  const tmp3 = require(4560) /* ToNumber */(arg0);
  if (require(4577) /* isFinite */(tmp3)) {
    if (0 !== tmp3) {
      const tmp5 = tmp(4580)(tmp(4578)(tmp3), 4294967296);
      let num3 = 0;
      if (0 !== tmp5) {
        num3 = tmp5;
      }
      return num3;
    }
  }
  return 0;
};
