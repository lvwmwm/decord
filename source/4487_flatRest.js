// Module ID: 4487
// Function ID: 4488
// Name: flatRest
// Dependencies: [4488, 4492, 4494]

// Module 4487 (flatRest)

export default function flatRest(arg0) {
  const tmp = require(4488) /* shortOut */;
  return tmp(require(4492) /* overRest */(arg0, undefined, require(4494) /* flatten */), "" + arg0);
};
