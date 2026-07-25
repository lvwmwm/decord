// Module ID: 4266
// Function ID: 37385
// Name: baseIsMap
// Dependencies: [577, 747]

// Module 4266 (baseIsMap)

export default function baseIsMap(arg0) {
  let tmp = require(577) /* isObjectLike */(arg0);
  if (tmp) {
    tmp = "[object Map]" == require(747) /* getTag */(arg0);
  }
  return tmp;
};
