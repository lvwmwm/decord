// Module ID: 6702
// Function ID: 6703
// Name: baseRest
// Dependencies: [4333, 4337, 634]

// Module 6702 (baseRest)

export default function baseRest(arg0, arg1) {
  const tmp = require(4333) /* shortOut */;
  return tmp(require(4337) /* overRest */(arg0, arg1, require(634) /* identity */), "" + arg0);
};
