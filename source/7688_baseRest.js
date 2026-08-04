// Module ID: 7688
// Function ID: 7689
// Name: baseRest
// Dependencies: [4428, 4432, 634]

// Module 7688 (baseRest)

export default function baseRest(arg0, arg1) {
  const tmp = require(4428) /* shortOut */;
  return tmp(require(4432) /* overRest */(arg0, arg1, require(634) /* identity */), "" + arg0);
};
