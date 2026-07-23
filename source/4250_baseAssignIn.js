// Module ID: 4250
// Function ID: 37345
// Name: baseAssignIn
// Dependencies: [4247, 4251]

// Module 4250 (baseAssignIn)

export default function baseAssignIn(arg0, arg1) {
  let tmp = arg0;
  if (arg0) {
    tmp = require(4247) /* copyObject */(arg1, require(4251) /* keysIn */(arg1), arg0);
    const tmp4 = require(4247) /* copyObject */;
  }
  return tmp;
};
