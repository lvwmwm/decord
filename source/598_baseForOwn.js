// Module ID: 598
// Function ID: 7025
// Name: baseForOwn
// Dependencies: [599, 601]

// Module 598 (baseForOwn)

export default function baseForOwn(arg0, arg1) {
  let tmp = arg0;
  if (arg0) {
    tmp = require(599) /* createBaseFor */(arg0, arg1, require(601) /* keys */);
    const tmp4 = require(599) /* createBaseFor */;
  }
  return tmp;
};
