// Module ID: 4270
// Function ID: 37385
// Name: clamp
// Dependencies: [575, 4271]

// Module 4270 (clamp)

export default function clamp(arg0, arg1, arg2) {
  let tmp = arg2;
  if (undefined === arg2) {
    tmp = arg1;
  }
  let tmp3 = tmp;
  if (undefined !== tmp) {
    let num = 0;
    const tmp6 = require(575) /* toNumber */(tmp);
    if (tmp6 == tmp6) {
      num = tmp6;
    }
    tmp3 = num;
  }
  let tmp7 = tmp2;
  if (undefined !== arg1) {
    let num2 = 0;
    const tmp10 = require(575) /* toNumber */(tmp2);
    if (tmp10 == tmp10) {
      num2 = tmp10;
    }
    tmp7 = num2;
  }
  return require(4271) /* baseClamp */(require(575) /* toNumber */(arg0), tmp7, tmp3);
};
