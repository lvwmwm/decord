// Module ID: 4428
// Function ID: 4429
// Name: baseAssignIn
// Dependencies: [4425, 4429]

// Module 4428 (baseAssignIn)

export default function baseAssignIn(arg0, arg1) {
  let tmp = arg0;
  if (arg0) {
    tmp = require(4425) /* copyObject */(arg1, require(4429) /* keysIn */(arg1), arg0);
    const tmp5 = require(4425) /* copyObject */;
  }
  return tmp;
};
