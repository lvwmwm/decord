// Module ID: 4251
// Function ID: 37357
// Name: baseAssignIn
// Dependencies: [4248, 4252]

// Module 4251 (baseAssignIn)

export default function baseAssignIn(arg0, arg1) {
  let tmp = arg0;
  if (arg0) {
    tmp = require(4248) /* copyObject */(arg1, require(4252) /* keysIn */(arg1), arg0);
    const tmp4 = require(4248) /* copyObject */;
  }
  return tmp;
};
