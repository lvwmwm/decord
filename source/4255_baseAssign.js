// Module ID: 4255
// Function ID: 37355
// Name: baseAssign
// Dependencies: [4247, 601]

// Module 4255 (baseAssign)

export default function baseAssign(arg0, arg1) {
  let tmp = arg0;
  if (arg0) {
    tmp = require(4247) /* copyObject */(arg1, require(601) /* keys */(arg1), arg0);
    const tmp4 = require(4247) /* copyObject */;
  }
  return tmp;
};
