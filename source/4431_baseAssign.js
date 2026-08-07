// Module ID: 4431
// Function ID: 4432
// Name: baseAssign
// Dependencies: [4423, 616]

// Module 4431 (baseAssign)

export default function baseAssign(arg0, arg1) {
  let tmp = arg0;
  if (arg0) {
    tmp = require(4423) /* copyObject */(arg1, require(616) /* keys */(arg1), arg0);
    const tmp5 = require(4423) /* copyObject */;
  }
  return tmp;
};
