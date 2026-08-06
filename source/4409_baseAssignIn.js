// Module ID: 4409
// Function ID: 4410
// Name: baseAssignIn
// Dependencies: [4406, 4410]

// Module 4409 (baseAssignIn)

export default function baseAssignIn(arg0, arg1) {
  let tmp = arg0;
  if (arg0) {
    tmp = require(4406) /* copyObject */(arg1, require(4410) /* keysIn */(arg1), arg0);
    const tmp5 = require(4406) /* copyObject */;
  }
  return tmp;
};
