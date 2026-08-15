// Module ID: 4602
// Function ID: 4603
// Name: baseAssign
// Dependencies: [4594, 616]

// Module 4602 (baseAssign)

export default function baseAssign(arg0, arg1) {
  let tmp = arg0;
  if (arg0) {
    tmp = require(4594) /* copyObject */(arg1, require(616) /* keys */(arg1), arg0);
    const tmp5 = require(4594) /* copyObject */;
  }
  return tmp;
};
