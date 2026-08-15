// Module ID: 8049
// Function ID: 8050
// Name: baseRest
// Dependencies: [4616, 4620, 634]

// Module 8049 (baseRest)

export default function baseRest(arg0, arg1) {
  const tmp = require(4616) /* shortOut */;
  return tmp(require(4620) /* overRest */(arg0, arg1, require(634) /* identity */), "" + arg0);
};
