// Module ID: 4597
// Function ID: 4598
// Name: baseAssignIn
// Dependencies: [4594, 4598]

// Module 4597 (baseAssignIn)

export default function baseAssignIn(arg0, arg1) {
  let tmp = arg0;
  if (arg0) {
    tmp = require(4594) /* copyObject */(arg1, require(4598) /* keysIn */(arg1), arg0);
    const tmp5 = require(4594) /* copyObject */;
  }
  return tmp;
};
