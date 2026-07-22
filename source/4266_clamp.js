// Module ID: 4266
// Function ID: 37352
// Name: clamp
// Dependencies: [704, 4292]

// Module 4266 (clamp)

export default function clamp(arg0, arg1, arg2) {
  let tmp = arg2;
  if (undefined === arg2) {
    tmp = arg1;
  }
  let tmp3 = tmp;
  if (undefined !== tmp) {
    let num = 0;
    const tmp6 = require(dependencyMap[0])(tmp);
    if (tmp6 == tmp6) {
      num = tmp6;
    }
    tmp3 = num;
  }
  let tmp7 = tmp2;
  if (undefined !== arg1) {
    let num2 = 0;
    const tmp10 = require(dependencyMap[0])(tmp2);
    if (tmp10 == tmp10) {
      num2 = tmp10;
    }
    tmp7 = num2;
  }
  return require(dependencyMap[1])(require(dependencyMap[0])(arg0), tmp7, tmp3);
};
