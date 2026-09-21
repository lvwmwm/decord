// Module ID: 14576
// Function ID: 14577
// Dependencies: [14577, 14578, 14579, 14616, 14617, 14633, 14634]

// Module 14576
import _mod14577 from "module_14577" /* 14577 */;
import _mod14579 from "module_14579" /* 14579 */;
import _mod14616 from "module_14616" /* 14616 */;


export default (dontCallGetSet, obj) => {
  ({ target, global: _global, stat } = dontCallGetSet);
  const tmp3 = _mod14577;
  if (_global) {
    let prototype = tmp3;
  } else {
    let tmp4 = tmp3[target];
    if (stat) {
      if (!tmp4) {
        tmp4 = tmp(14578)(target, {});
      }
      prototype = tmp4;
    } else {
      prototype = tmp4;
      if (tmp4) {
        prototype = tmp(14577)[target].prototype;
      }
    }
  }
  if (prototype) {
    for (const key10024 in arg1) {
      let tmp21 = arg1[key10024];
      let tmp20 = key10024;
      if (arg0.dontCallGetSet) {
        obj = _mod14579;
        let iter = obj.f(prototype, key10024);
        value = iter;
        if (iter) {
          value = iter.value;
        }
        let tmp7 = value;
      } else {
        tmp7 = prototype[key10024];
      }
      let tmp10 = require;
      let sum = key10024;
      let tmp12 = _mod14616;
      if (!_global) {
        let str4 = "#";
        if (stat) {
          str4 = ".";
        }
        sum = target + str4 + key10024;
      }
      if (!tmp12(sum, arg0.forced)) {
        if (undefined !== tmp7) {
          if (typeof tmp21 === typeof tmp7) {
            continue;
          } else {
            let tmp22 = tmp10(14617)(tmp21, tmp7);
          }
        }
        continue;
      }
      let sham = arg0.sham;
      if (!sham) {
        let sham2 = tmp7;
        if (tmp7) {
          sham2 = tmp7.sham;
        }
        sham = sham2;
      }
      if (sham) {
        let tmp14 = tmp10(14633)(tmp21, "sham", true);
      }
      let tmp19 = tmp10(14634)(prototype, tmp20, tmp21, arg0);
      continue;
    }
  }
};
