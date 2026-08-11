// Module ID: 7767
// Function ID: 7768
// Name: baseRest
// Dependencies: [4447, 4451, 634]

// Module 7767 (baseRest)

export default function baseRest(arg0, arg1) {
  const tmp = require(4447) /* shortOut */;
  return tmp(require(4451) /* overRest */(arg0, arg1, require(634) /* identity */), "" + arg0);
};
