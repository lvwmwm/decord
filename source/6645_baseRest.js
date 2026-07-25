// Module ID: 6645
// Function ID: 58827
// Name: baseRest
// Dependencies: [4286, 4290, 618]

// Module 6645 (baseRest)

export default function baseRest(arg0, arg1) {
  const tmp = require(4286) /* shortOut */;
  return tmp(require(4290) /* overRest */(arg0, arg1, require(618) /* identity */), "" + arg0);
};
