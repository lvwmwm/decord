// Module ID: 4300
// Function ID: 37498
// Name: baseIsMap
// Dependencies: [577, 747]

// Module 4300 (baseIsMap)

export default function baseIsMap(arg0) {
  let tmp = require(577) /* isObjectLike */(arg0);
  if (tmp) {
    tmp = "[object Map]" == require(747) /* getTag */(arg0);
  }
  return tmp;
};
