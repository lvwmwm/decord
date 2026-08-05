// Module ID: 4384
// Function ID: 4385
// Name: baseAssign
// Dependencies: [4376, 616]

// Module 4384 (baseAssign)

export default function baseAssign(arg0, arg1) {
  let tmp = arg0;
  if (arg0) {
    tmp = require(4376) /* copyObject */(arg1, require(616) /* keys */(arg1), arg0);
    const tmp5 = require(4376) /* copyObject */;
  }
  return tmp;
};
