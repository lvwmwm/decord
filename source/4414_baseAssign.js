// Module ID: 4414
// Function ID: 4415
// Name: baseAssign
// Dependencies: [4406, 616]

// Module 4414 (baseAssign)

export default function baseAssign(arg0, arg1) {
  let tmp = arg0;
  if (arg0) {
    tmp = require(4406) /* copyObject */(arg1, require(616) /* keys */(arg1), arg0);
    const tmp5 = require(4406) /* copyObject */;
  }
  return tmp;
};
