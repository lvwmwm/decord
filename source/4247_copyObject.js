// Module ID: 4247
// Function ID: 37340
// Name: copyObject
// Dependencies: [781, 4248]

// Module 4247 (copyObject)

export default function copyObject(arg0, arg1, arg2, arg3) {
  let obj = arg2;
  if (!arg2) {
    obj = {};
  }
  for (let num = 0; num < length; num = num + 1) {
    let tmp2 = arg1[num];
    let tmp3;
    if (arg3) {
      let tmp4 = tmp2;
      let tmp5 = obj;
      let tmp6 = arg0;
      tmp3 = arg3(obj[tmp2], arg0[tmp2], tmp2, obj, arg0);
    }
    if (undefined === tmp3) {
      tmp3 = arg0[tmp2];
    }
    let tmp7 = require;
    let tmp8 = dependencyMap;
    if (tmp) {
      let tmp10 = tmp7(781)(obj, tmp2, tmp3);
    } else {
      let tmp9 = tmp7(4248)(obj, tmp2, tmp3);
    }
  }
  return obj;
};
