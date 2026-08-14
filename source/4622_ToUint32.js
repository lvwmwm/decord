// Module ID: 4622
// Function ID: 4623
// Name: ToUint32
// Dependencies: [4623, 4640, 4641, 4643]

// Module 4622 (ToUint32)

export default function ToUint32(arg0) {
  const tmp3 = require(4623) /* ToNumber */(arg0);
  if (require(4640) /* isFinite */(tmp3)) {
    if (0 !== tmp3) {
      const tmp5 = tmp(4643)(tmp(4641)(tmp3), 4294967296);
      let num3 = 0;
      if (0 !== tmp5) {
        num3 = tmp5;
      }
      return num3;
    }
  }
  return 0;
};
