// Module ID: 4486
// Function ID: 4487
// Name: flatRest
// Dependencies: [4487, 4491, 4493]

// Module 4486 (flatRest)

export default function flatRest(arg0) {
  const tmp = require(4487) /* shortOut */;
  return tmp(require(4491) /* overRest */(arg0, undefined, require(4493) /* flatten */), "" + arg0);
};
