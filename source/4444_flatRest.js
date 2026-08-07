// Module ID: 4444
// Function ID: 4445
// Name: flatRest
// Dependencies: [4445, 4449, 4451]

// Module 4444 (flatRest)

export default function flatRest(arg0) {
  const tmp = require(4445) /* shortOut */;
  return tmp(require(4449) /* overRest */(arg0, undefined, require(4451) /* flatten */), "" + arg0);
};
