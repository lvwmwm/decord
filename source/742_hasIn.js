// Module ID: 742
// Function ID: 8789
// Name: hasIn
// Dependencies: [743, 744]

// Module 742 (hasIn)

export default function hasIn(arg0, arg1) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = require(743) /* hasPath */(arg0, arg1, require(744) /* baseHasIn */);
    const tmp4 = require(743) /* hasPath */;
  }
  return tmp;
};
