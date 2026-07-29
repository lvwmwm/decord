// Module ID: 4341
// Function ID: 4342
// Name: isConcatSpreadable
// Dependencies: [608, 599, 618]

// Module 4341 (isConcatSpreadable)
let isConcatSpreadable;
if (require("module_608")) {
  isConcatSpreadable = require("module_608").isConcatSpreadable;
}

export default function isFlattenable(arg0) {
  let tmp3 = require(599)(arg0) || require(618) /* baseIsArguments */(arg0);
  if (!tmp3) {
    let tmp5 = isConcatSpreadable;
    if (isConcatSpreadable) {
      tmp5 = arg0;
    }
    if (tmp5) {
      tmp5 = arg0[tmp4];
    }
    tmp3 = tmp5;
    tmp4 = isConcatSpreadable;
  }
  return tmp3;
};
