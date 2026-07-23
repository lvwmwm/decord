// Module ID: 7469
// Function ID: 59991
// Name: baseRest
// Dependencies: [4285, 4289, 618]

// Module 7469 (baseRest)

export default function baseRest(arg0, arg1) {
  const tmp = require(4285) /* shortOut */;
  return tmp(require(4289) /* overRest */(arg0, arg1, require(618) /* identity */), "" + arg0);
};
