// Module ID: 14582
// Function ID: 14583
// Dependencies: [14583, 14584, 14585, 14622, 14623, 14639, 14640]

// Module 14582
import _mod14583 from "module_14583" /* 14583 */;
import _mod14585 from "module_14585" /* 14585 */;
import _mod14622 from "module_14622" /* 14622 */;


export default (dontCallGetSet, obj) => {
  ({ target, global: _global, stat } = dontCallGetSet);
  const tmp3 = _mod14583;
  if (_global) {
    let prototype = tmp3;
  } else {
    let tmp4 = tmp3[target];
    if (stat) {
      if (!tmp4) {
        tmp4 = tmp(14584)(target, {});
      }
      prototype = tmp4;
    } else {
      prototype = tmp4;
      if (tmp4) {
        prototype = tmp(14583)[target].prototype;
      }
    }
  }
  if (prototype) {
    for (const key10024 in arg1) {
      let tmp21 = arg1[key10024];
      let tmp20 = key10024;
      if (arg0.dontCallGetSet) {
        obj = _mod14585;
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
      let tmp12 = _mod14622;
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
            let tmp22 = tmp10(14623)(tmp21, tmp7);
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
        let tmp14 = tmp10(14639)(tmp21, "sham", true);
      }
      let tmp19 = tmp10(14640)(prototype, tmp20, tmp21, arg0);
      continue;
    }
  }
};
