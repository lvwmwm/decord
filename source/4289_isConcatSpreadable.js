// Module ID: 4289
// Function ID: 37486
// Name: isConcatSpreadable
// Dependencies: []

// Module 4289 (isConcatSpreadable)
let isConcatSpreadable;
if (require(dependencyMap[0])) {
  isConcatSpreadable = require(dependencyMap[0]).isConcatSpreadable;
}

export default function isFlattenable(arg0) {
  let tmp = require(dependencyMap[1])(arg0);
  if (!tmp) {
    tmp = require(dependencyMap[2])(arg0);
  }
  if (!tmp) {
    let tmp4 = isConcatSpreadable;
    if (isConcatSpreadable) {
      tmp4 = arg0;
    }
    if (tmp4) {
      tmp4 = arg0[closure_2];
    }
    tmp = tmp4;
  }
  return tmp;
};
