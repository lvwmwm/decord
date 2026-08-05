// Module ID: 4510
// Function ID: 4511
// Name: ToUint32
// Dependencies: [4511, 4528, 4529, 4531]

// Module 4510 (ToUint32)

export default function ToUint32(arg0) {
  const tmp3 = require(4511) /* ToNumber */(arg0);
  if (require(4528) /* isFinite */(tmp3)) {
    if (0 !== tmp3) {
      const tmp5 = tmp(4531)(tmp(4529)(tmp3), 4294967296);
      let num3 = 0;
      if (0 !== tmp5) {
        num3 = tmp5;
      }
      return num3;
    }
  }
  return 0;
};
