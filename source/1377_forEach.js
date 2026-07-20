// Module ID: 1377
// Function ID: 16510
// Name: forEach
// Dependencies: []

// Module 1377 (forEach)

export default function forEach(str, call) {
  if (require(dependencyMap[0])(call)) {
    if ("[object Array]" === toString.call(str)) {
      for (let num3 = 0; num3 < length2; num3 = num3 + 1) {
        let tmp24 = hasOwnProperty;
        if (hasOwnProperty.call(str, num3)) {
          if (null == tmp6) {
            let tmp31 = call(str[num3], num3, str);
          } else {
            let tmp26 = call;
            let tmp27 = tmp6;
            let tmp28 = num3;
            let tmp29 = str;
            let callResult = call.call(tmp6, str[num3], tmp25, str);
          }
        }
      }
      const length2 = str.length;
    } else if ("string" === typeof str) {
      for (let num2 = 0; num2 < length; num2 = num2 + 1) {
        if (null == tmp6) {
          let tmp22 = call(str.charAt(num2), num2, str);
        } else {
          let tmp17 = call;
          let tmp18 = tmp6;
          let tmp19 = num2;
          let tmp20 = str;
          let callResult1 = call.call(tmp6, str.charAt(num2), num2, str);
        }
      }
      const length = str.length;
    } else {
      for (const key10030 in arg0) {
        let tmp33 = closure_3;
        let tmp32 = key10030;
        if (!closure_3.call(arg0, key10030)) {
          continue;
        } else {
          if (null == tmp6) {
            let tmp15 = arg1(arg0[key10030], key10030, arg0);
            // continue
          } else {
            let tmp10 = arg1;
            let tmp11 = tmp6;
            let tmp12 = key10030;
            let tmp13 = arg0;
            let callResult2 = arg1.call(tmp6, arg0[key10030], tmp32, arg0);
            // continue
          }
          continue;
        }
        continue;
      }
    }
  } else {
    const _TypeError = TypeError;
    const typeError = new TypeError("iterator must be a function");
    throw typeError;
  }
};
