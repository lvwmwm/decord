// Module ID: 4293
// Function ID: 37535
// Name: isConcatSpreadable
// Dependencies: [579, 591, 603]

// Module 4293 (isConcatSpreadable)
let isConcatSpreadable;
if (require("module_579")) {
  isConcatSpreadable = require("module_579").isConcatSpreadable;
}

export default function isFlattenable(arg0) {
  let tmp = require(591)(arg0);
  if (!tmp) {
    tmp = require(603) /* baseIsArguments */(arg0);
  }
  if (!tmp) {
    let tmp4 = isConcatSpreadable;
    if (isConcatSpreadable) {
      tmp4 = arg0;
    }
    if (tmp4) {
      tmp4 = arg0[isConcatSpreadable];
    }
    tmp = tmp4;
  }
  return tmp;
};
