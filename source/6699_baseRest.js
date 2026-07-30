// Module ID: 6699
// Function ID: 6700
// Name: baseRest
// Dependencies: [4333, 4337, 634]

// Module 6699 (baseRest)

export default function baseRest(arg0, arg1) {
  const tmp = require(4333) /* shortOut */;
  return tmp(require(4337) /* overRest */(arg0, arg1, require(634) /* identity */), "" + arg0);
};
