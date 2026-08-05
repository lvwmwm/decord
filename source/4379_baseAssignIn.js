// Module ID: 4379
// Function ID: 4380
// Name: baseAssignIn
// Dependencies: [4376, 4380]

// Module 4379 (baseAssignIn)

export default function baseAssignIn(arg0, arg1) {
  let tmp = arg0;
  if (arg0) {
    tmp = require(4376) /* copyObject */(arg1, require(4380) /* keysIn */(arg1), arg0);
    const tmp5 = require(4376) /* copyObject */;
  }
  return tmp;
};
