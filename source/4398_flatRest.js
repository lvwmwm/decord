// Module ID: 4398
// Function ID: 4399
// Name: flatRest
// Dependencies: [4399, 4403, 4405]

// Module 4398 (flatRest)

export default function flatRest(arg0) {
  const tmp = require(4399) /* shortOut */;
  return tmp(require(4403) /* overRest */(arg0, undefined, require(4405) /* flatten */), "" + arg0);
};
