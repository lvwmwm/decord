// Module ID: 7549
// Function ID: 60237
// Name: baseRest
// Dependencies: [4285, 4289, 618]

// Module 7549 (baseRest)

export default function baseRest(arg0, arg1) {
  const tmp = require(4285) /* shortOut */;
  return tmp(require(4289) /* overRest */(arg0, arg1, require(618) /* identity */), "" + arg0);
};
