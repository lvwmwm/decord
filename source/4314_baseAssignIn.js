// Module ID: 4314
// Function ID: 4315
// Name: baseAssignIn
// Dependencies: [4311, 4315]

// Module 4314 (baseAssignIn)

export default function baseAssignIn(arg0, arg1) {
  let tmp = arg0;
  if (arg0) {
    tmp = require(4311) /* copyObject */(arg1, require(4315) /* keysIn */(arg1), arg0);
    const tmp5 = require(4311) /* copyObject */;
  }
  return tmp;
};
