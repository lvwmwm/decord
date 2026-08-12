// Module ID: 7806
// Function ID: 7807
// Name: baseRest
// Dependencies: [4487, 4491, 634]

// Module 7806 (baseRest)

export default function baseRest(arg0, arg1) {
  const tmp = require(4487) /* shortOut */;
  return tmp(require(4491) /* overRest */(arg0, arg1, require(634) /* identity */), "" + arg0);
};
