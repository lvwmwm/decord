// Module ID: 4319
// Function ID: 37639
// Name: flatRest
// Dependencies: [4320, 4324, 4326]

// Module 4319 (flatRest)

export default function flatRest(arg0) {
  const tmp = require(4320) /* shortOut */;
  return tmp(require(4324) /* overRest */(arg0, undefined, require(4326) /* flatten */), "" + arg0);
};
