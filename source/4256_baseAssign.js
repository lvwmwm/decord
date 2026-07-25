// Module ID: 4256
// Function ID: 37367
// Name: baseAssign
// Dependencies: [4248, 601]

// Module 4256 (baseAssign)

export default function baseAssign(arg0, arg1) {
  let tmp = arg0;
  if (arg0) {
    tmp = require(4248) /* copyObject */(arg1, require(601) /* keys */(arg1), arg0);
    const tmp4 = require(4248) /* copyObject */;
  }
  return tmp;
};
