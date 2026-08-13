// Module ID: 7810
// Function ID: 7811
// Name: baseRest
// Dependencies: [4488, 4492, 634]

// Module 7810 (baseRest)

export default function baseRest(arg0, arg1) {
  const tmp = require(4488) /* shortOut */;
  return tmp(require(4492) /* overRest */(arg0, arg1, require(634) /* identity */), "" + arg0);
};
