// Module ID: 4380
// Function ID: 4381
// Name: baseAssignIn
// Dependencies: [4377, 4381]

// Module 4380 (baseAssignIn)

export default function baseAssignIn(arg0, arg1) {
  let tmp = arg0;
  if (arg0) {
    tmp = require(4377) /* copyObject */(arg1, require(4381) /* keysIn */(arg1), arg0);
    const tmp5 = require(4377) /* copyObject */;
  }
  return tmp;
};
