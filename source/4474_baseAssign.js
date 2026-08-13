// Module ID: 4474
// Function ID: 4475
// Name: baseAssign
// Dependencies: [4466, 616]

// Module 4474 (baseAssign)

export default function baseAssign(arg0, arg1) {
  let tmp = arg0;
  if (arg0) {
    tmp = require(4466) /* copyObject */(arg1, require(616) /* keys */(arg1), arg0);
    const tmp5 = require(4466) /* copyObject */;
  }
  return tmp;
};
