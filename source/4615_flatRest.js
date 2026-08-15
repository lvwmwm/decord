// Module ID: 4615
// Function ID: 4616
// Name: flatRest
// Dependencies: [4616, 4620, 4622]

// Module 4615 (flatRest)

export default function flatRest(arg0) {
  const tmp = require(4616) /* shortOut */;
  return tmp(require(4620) /* overRest */(arg0, undefined, require(4622) /* flatten */), "" + arg0);
};
