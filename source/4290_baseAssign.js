// Module ID: 4290
// Function ID: 37480
// Name: baseAssign
// Dependencies: [4282, 601]

// Module 4290 (baseAssign)

export default function baseAssign(arg0, arg1) {
  let tmp = arg0;
  if (arg0) {
    tmp = require(4282) /* copyObject */(arg1, require(601) /* keys */(arg1), arg0);
    const tmp4 = require(4282) /* copyObject */;
  }
  return tmp;
};
