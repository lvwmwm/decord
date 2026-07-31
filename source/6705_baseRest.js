// Module ID: 6705
// Function ID: 6706
// Name: baseRest
// Dependencies: [4337, 4341, 634]

// Module 6705 (baseRest)

export default function baseRest(arg0, arg1) {
  const tmp = require(4337) /* shortOut */;
  return tmp(require(4341) /* overRest */(arg0, arg1, require(634) /* identity */), "" + arg0);
};
