// Module ID: 4332
// Function ID: 4333
// Name: flatRest
// Dependencies: [4333, 4337, 4339]

// Module 4332 (flatRest)

export default function flatRest(arg0) {
  const tmp = require(4333) /* shortOut */;
  return tmp(require(4337) /* overRest */(arg0, undefined, require(4339) /* flatten */), "" + arg0);
};
