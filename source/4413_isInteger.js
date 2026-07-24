// Module ID: 4413
// Function ID: 38883
// Name: isInteger
// Dependencies: [549, 4405, 542, 543]

// Module 4413 (isInteger)

export default function isInteger(arg0) {
  if ("number" === typeof arg0) {
    if (!require(549)(arg0)) {
      if (require(4405) /* isFinite */(arg0)) {
        const tmp7 = require(542)(arg0);
        return require(543)(tmp7) === tmp7;
      }
    }
  }
  return false;
};
