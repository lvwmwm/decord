// Module ID: 4910
// Function ID: 4911
// Name: copyObject
// Dependencies: [668, 4911]

// Module 4910 (copyObject)

export default function copyObject(arg0, arg1, arg2, fn) {
  let obj = arg2;
  if (!arg2) {
    obj = {};
  }
  for (let num = 0; num < length; num = num + 1) {
    let tmp = arg1[num];
    let tmp3;
    if (fn) {
      tmp3 = fn(obj[tmp], arg0[tmp], tmp, obj, arg0);
    }
    if (undefined === tmp3) {
      tmp3 = arg0[tmp];
    }
    let tmp7 = require;
    if (arg2) {
      let tmp10 = tmp7(4911)(obj, tmp, tmp3);
    } else {
      let tmp9 = tmp7(668)(obj, tmp, tmp3);
    }
  }
  return obj;
};
