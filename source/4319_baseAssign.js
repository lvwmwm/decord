// Module ID: 4319
// Function ID: 4320
// Name: baseAssign
// Dependencies: [4311, 616]

// Module 4319 (baseAssign)

export default function baseAssign(arg0, arg1) {
  let tmp = arg0;
  if (arg0) {
    tmp = require(4311) /* copyObject */(arg1, require(616) /* keys */(arg1), arg0);
    const tmp5 = require(4311) /* copyObject */;
  }
  return tmp;
};
