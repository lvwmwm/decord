// Module ID: 4422
// Function ID: 38952
// Name: ToUint32
// Dependencies: [4423, 4440, 4441, 4443]

// Module 4422 (ToUint32)

export default function ToUint32(arg0) {
  const tmp = require(4423) /* ToNumber */(arg0);
  if (require(4440) /* isFinite */(tmp)) {
    if (0 !== tmp) {
      const tmp5 = require(4443) /* modulo */(require(4441) /* truncate */(tmp), 4294967296);
      let num4 = 0;
      if (0 !== tmp5) {
        num4 = tmp5;
      }
      return num4;
    }
  }
  return 0;
};
