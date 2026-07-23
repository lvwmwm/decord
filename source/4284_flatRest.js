// Module ID: 4284
// Function ID: 37514
// Name: flatRest
// Dependencies: [4285, 4289, 4291]

// Module 4284 (flatRest)

export default function flatRest(arg0) {
  const tmp = require(4285) /* shortOut */;
  return tmp(require(4289) /* overRest */(arg0, undefined, require(4291) /* flatten */), "" + arg0);
};
