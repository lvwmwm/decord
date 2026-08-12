// Module ID: 4468
// Function ID: 4469
// Name: baseAssignIn
// Dependencies: [4465, 4469]

// Module 4468 (baseAssignIn)

export default function baseAssignIn(arg0, arg1) {
  let tmp = arg0;
  if (arg0) {
    tmp = require(4465) /* copyObject */(arg1, require(4469) /* keysIn */(arg1), arg0);
    const tmp5 = require(4465) /* copyObject */;
  }
  return tmp;
};
