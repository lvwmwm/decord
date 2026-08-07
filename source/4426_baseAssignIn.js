// Module ID: 4426
// Function ID: 4427
// Name: baseAssignIn
// Dependencies: [4423, 4427]

// Module 4426 (baseAssignIn)

export default function baseAssignIn(arg0, arg1) {
  let tmp = arg0;
  if (arg0) {
    tmp = require(4423) /* copyObject */(arg1, require(4427) /* keysIn */(arg1), arg0);
    const tmp5 = require(4423) /* copyObject */;
  }
  return tmp;
};
