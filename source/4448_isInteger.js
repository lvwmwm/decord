// Module ID: 4448
// Function ID: 39009
// Name: isInteger
// Dependencies: [549, 4440, 542, 543]

// Module 4448 (isInteger)

export default function isInteger(arg0) {
  if ("number" === typeof arg0) {
    if (!require(549)(arg0)) {
      if (require(4440) /* isFinite */(arg0)) {
        const tmp7 = require(542)(arg0);
        return require(543)(tmp7) === tmp7;
      }
    }
  }
  return false;
};
