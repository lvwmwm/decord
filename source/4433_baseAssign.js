// Module ID: 4433
// Function ID: 4434
// Name: baseAssign
// Dependencies: [4425, 616]

// Module 4433 (baseAssign)

export default function baseAssign(arg0, arg1) {
  let tmp = arg0;
  if (arg0) {
    tmp = require(4425) /* copyObject */(arg1, require(616) /* keys */(arg1), arg0);
    const tmp5 = require(4425) /* copyObject */;
  }
  return tmp;
};
