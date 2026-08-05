// Module ID: 7660
// Function ID: 7661
// Name: baseRest
// Dependencies: [4398, 4402, 634]

// Module 7660 (baseRest)

export default function baseRest(arg0, arg1) {
  const tmp = require(4398) /* shortOut */;
  return tmp(require(4402) /* overRest */(arg0, arg1, require(634) /* identity */), "" + arg0);
};
