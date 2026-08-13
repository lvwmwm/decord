// Module ID: 4469
// Function ID: 4470
// Name: baseAssignIn
// Dependencies: [4466, 4470]

// Module 4469 (baseAssignIn)

export default function baseAssignIn(arg0, arg1) {
  let tmp = arg0;
  if (arg0) {
    tmp = require(4466) /* copyObject */(arg1, require(4470) /* keysIn */(arg1), arg0);
    const tmp5 = require(4466) /* copyObject */;
  }
  return tmp;
};
