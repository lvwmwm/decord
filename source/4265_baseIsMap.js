// Module ID: 4265
// Function ID: 37374
// Name: baseIsMap
// Dependencies: [577, 747]

// Module 4265 (baseIsMap)

export default function baseIsMap(arg0) {
  let tmp = require(577) /* isObjectLike */(arg0);
  if (tmp) {
    tmp = "[object Map]" == require(747) /* getTag */(arg0);
  }
  return tmp;
};
