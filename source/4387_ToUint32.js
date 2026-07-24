// Module ID: 4387
// Function ID: 38826
// Name: ToUint32
// Dependencies: [4388, 4405, 4406, 4408]

// Module 4387 (ToUint32)

export default function ToUint32(arg0) {
  const tmp = require(4388) /* ToNumber */(arg0);
  if (require(4405) /* isFinite */(tmp)) {
    if (0 !== tmp) {
      const tmp5 = require(4408) /* modulo */(require(4406) /* truncate */(tmp), 4294967296);
      let num4 = 0;
      if (0 !== tmp5) {
        num4 = tmp5;
      }
      return num4;
    }
  }
  return 0;
};
