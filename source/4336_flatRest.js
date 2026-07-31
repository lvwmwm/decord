// Module ID: 4336
// Function ID: 4337
// Name: flatRest
// Dependencies: [4337, 4341, 4343]

// Module 4336 (flatRest)

export default function flatRest(arg0) {
  const tmp = require(4337) /* shortOut */;
  return tmp(require(4341) /* overRest */(arg0, undefined, require(4343) /* flatten */), "" + arg0);
};
