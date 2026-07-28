// Module ID: 4285
// Function ID: 37470
// Name: baseAssignIn
// Dependencies: [4282, 4286]

// Module 4285 (baseAssignIn)

export default function baseAssignIn(arg0, arg1) {
  let tmp = arg0;
  if (arg0) {
    tmp = require(4282) /* copyObject */(arg1, require(4286) /* keysIn */(arg1), arg0);
    const tmp4 = require(4282) /* copyObject */;
  }
  return tmp;
};
