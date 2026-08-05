// Module ID: 4397
// Function ID: 4398
// Name: flatRest
// Dependencies: [4398, 4402, 4404]

// Module 4397 (flatRest)

export default function flatRest(arg0) {
  const tmp = require(4398) /* shortOut */;
  return tmp(require(4402) /* overRest */(arg0, undefined, require(4404) /* flatten */), "" + arg0);
};
