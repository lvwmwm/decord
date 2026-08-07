// Module ID: 7705
// Function ID: 7706
// Name: baseRest
// Dependencies: [4445, 4449, 634]

// Module 7705 (baseRest)

export default function baseRest(arg0, arg1) {
  const tmp = require(4445) /* shortOut */;
  return tmp(require(4449) /* overRest */(arg0, arg1, require(634) /* identity */), "" + arg0);
};
