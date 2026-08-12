// Module ID: 4473
// Function ID: 4474
// Name: baseAssign
// Dependencies: [4465, 616]

// Module 4473 (baseAssign)

export default function baseAssign(arg0, arg1) {
  let tmp = arg0;
  if (arg0) {
    tmp = require(4465) /* copyObject */(arg1, require(616) /* keys */(arg1), arg0);
    const tmp5 = require(4465) /* copyObject */;
  }
  return tmp;
};
