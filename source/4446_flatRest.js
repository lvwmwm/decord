// Module ID: 4446
// Function ID: 4447
// Name: flatRest
// Dependencies: [4447, 4451, 4453]

// Module 4446 (flatRest)

export default function flatRest(arg0) {
  const tmp = require(4447) /* shortOut */;
  return tmp(require(4451) /* overRest */(arg0, undefined, require(4453) /* flatten */), "" + arg0);
};
