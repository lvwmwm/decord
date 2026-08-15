// Module ID: 4612
// Function ID: 4613
// Name: baseIsMap
// Dependencies: [620, 770]

// Module 4612 (baseIsMap)

export default function baseIsMap(arg0) {
  let tmp3 = require(620) /* isObjectLike */(arg0);
  if (tmp3) {
    tmp3 = "[object Map]" == require(770)(arg0);
  }
  return tmp3;
};
