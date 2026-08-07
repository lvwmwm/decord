// Module ID: 4557
// Function ID: 4558
// Name: ToUint32
// Dependencies: [4558, 4575, 4576, 4578]

// Module 4557 (ToUint32)

export default function ToUint32(arg0) {
  const tmp3 = require(4558) /* ToNumber */(arg0);
  if (require(4575) /* isFinite */(tmp3)) {
    if (0 !== tmp3) {
      const tmp5 = tmp(4578)(tmp(4576)(tmp3), 4294967296);
      let num3 = 0;
      if (0 !== tmp5) {
        num3 = tmp5;
      }
      return num3;
    }
  }
  return 0;
};
