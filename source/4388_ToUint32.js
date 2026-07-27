// Module ID: 4388
// Function ID: 38838
// Name: ToUint32
// Dependencies: [4389, 4406, 4407, 4409]

// Module 4388 (ToUint32)

export default function ToUint32(arg0) {
  const tmp = require(4389) /* ToNumber */(arg0);
  if (require(4406) /* isFinite */(tmp)) {
    if (0 !== tmp) {
      const tmp5 = require(4409) /* modulo */(require(4407) /* truncate */(tmp), 4294967296);
      let num4 = 0;
      if (0 !== tmp5) {
        num4 = tmp5;
      }
      return num4;
    }
  }
  return 0;
};
