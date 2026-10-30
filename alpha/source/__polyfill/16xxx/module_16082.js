// Module ID: 16082
// Function ID: 16083
// Dependencies: [16083, 16084, 16085, 16122, 16123, 16139, 16140]

// Module 16082
import _mod16083 from "module_16083" /* 16083 */;
import _mod16085 from "module_16085" /* 16085 */;
import isForced from "isForced" /* 16122 */;


export default (dontCallGetSet, obj) => {
  let _global;
  let stat;
  let target;
  let tmp5;
  ({ target, global: _global, stat } = dontCallGetSet);
  const tmp3 = _mod16083;
  if (_global) {
    tmp5 = tmp3;
  } else {
    let tmp4 = tmp3[target];
    if (stat) {
      if (!tmp4) {
        tmp4 = tmp(16084)(target, {});
      }
      tmp5 = tmp4;
    } else {
      tmp5 = tmp4 && tmp(16083)[target].prototype;
    }
  }
  if (tmp5) {
    for (const key10024 in obj) {
      let tmp8;
      let tmp22 = obj[key10024];
      let tmp21 = key10024;
      if (dontCallGetSet.dontCallGetSet) {
        obj = _mod16085;
        let iter = obj.f(tmp5, key10024);
        let value = iter && iter.value;
        tmp8 = value;
      } else {
        tmp8 = tmp5[key10024];
      }
      let tmp11 = require;
      let sum = key10024;
      let tmp13 = isForced;
      if (!_global) {
        let str4 = "#";
        if (stat) {
          str4 = ".";
        }
        sum = target + str4 + key10024;
      }
      if (!tmp13(sum, dontCallGetSet.forced)) {
        if (undefined !== tmp8) {
          if (typeof tmp22 === typeof tmp8) {
            continue;
          } else {
            let tmp23 = tmp11(16123)(tmp22, tmp8);
          }
        }
        continue;
      }
      let sham = dontCallGetSet.sham;
      if (!sham) {
        let sham2 = tmp8 && tmp8.sham;
        sham = sham2;
      }
      if (sham) {
        let tmp15 = tmp11(16139)(tmp22, "sham", true);
      }
      let tmp20 = tmp11(16140)(tmp5, tmp21, tmp22, dontCallGetSet);
      continue;
    }
  }
};
