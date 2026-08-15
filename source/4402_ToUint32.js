// Module ID: 4402
// Function ID: 4403
// Name: ToUint32
// Dependencies: [4403, 4420, 4421, 4423]

// Module 4402 (ToUint32)

export default function ToUint32(arg0) {
  const tmp3 = require(4403) /* ToNumber */(arg0);
  if (require(4420) /* isFinite */(tmp3)) {
    if (0 !== tmp3) {
      const tmp5 = tmp(4423)(tmp(4421)(tmp3), 4294967296);
      let num3 = 0;
      if (0 !== tmp5) {
        num3 = tmp5;
      }
      return num3;
    }
  }
  return 0;
};
