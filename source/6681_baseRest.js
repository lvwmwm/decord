// Module ID: 6681
// Function ID: 58917
// Name: baseRest
// Dependencies: [4320, 4324, 618]

// Module 6681 (baseRest)

export default function baseRest(arg0, arg1) {
  const tmp = require(4320) /* shortOut */;
  return tmp(require(4324) /* overRest */(arg0, arg1, require(618) /* identity */), "" + arg0);
};
