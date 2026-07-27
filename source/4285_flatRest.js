// Module ID: 4285
// Function ID: 37527
// Name: flatRest
// Dependencies: [4286, 4290, 4292]

// Module 4285 (flatRest)

export default function flatRest(arg0) {
  const tmp = require(4286) /* shortOut */;
  return tmp(require(4290) /* overRest */(arg0, undefined, require(4292) /* flatten */), "" + arg0);
};
