// Module ID: 4427
// Function ID: 4428
// Name: flatRest
// Dependencies: [4428, 4432, 4434]

// Module 4427 (flatRest)

export default function flatRest(arg0) {
  const tmp = require(4428) /* shortOut */;
  return tmp(require(4432) /* overRest */(arg0, undefined, require(4434) /* flatten */), "" + arg0);
};
