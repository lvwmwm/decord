// Module ID: 7676
// Function ID: 7677
// Name: baseRest
// Dependencies: [4399, 4403, 634]

// Module 7676 (baseRest)

export default function baseRest(arg0, arg1) {
  const tmp = require(4399) /* shortOut */;
  return tmp(require(4403) /* overRest */(arg0, arg1, require(634) /* identity */), "" + arg0);
};
