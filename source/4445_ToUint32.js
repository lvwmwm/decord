// Module ID: 4445
// Function ID: 4446
// Name: ToUint32
// Dependencies: [4446, 4463, 4464, 4466]

// Module 4445 (ToUint32)

export default function ToUint32(arg0) {
  const tmp3 = require(4446) /* ToNumber */(arg0);
  if (require(4463) /* isFinite */(tmp3)) {
    if (0 !== tmp3) {
      const tmp5 = tmp(4466)(tmp(4464)(tmp3), 4294967296);
      let num3 = 0;
      if (0 !== tmp5) {
        num3 = tmp5;
      }
      return num3;
    }
  }
  return 0;
};
