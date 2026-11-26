// Module ID: 15731
// Function ID: 15732
// Dependencies: [15732, 15733, 15734, 15771, 15772, 15788, 15789]

// Module 15731
import _mod15732 from "module_15732" /* 15732 */;
import _mod15734 from "module_15734" /* 15734 */;
import isForced from "isForced" /* 15771 */;


export default (dontCallGetSet, obj) => {
  let _global;
  let stat;
  let target;
  let tmp5;
  ({ target, global: _global, stat } = dontCallGetSet);
  const tmp3 = _mod15732;
  if (_global) {
    tmp5 = tmp3;
  } else {
    let tmp4 = tmp3[target];
    if (stat) {
      if (!tmp4) {
        tmp4 = tmp(15733)(target, {});
      }
      tmp5 = tmp4;
    } else {
      tmp5 = tmp4 && tmp(15732)[target].prototype;
    }
  }
  if (tmp5) {
    for (const key10024 in obj) {
      let tmp8;
      let tmp22 = obj[key10024];
      let tmp21 = key10024;
      if (dontCallGetSet.dontCallGetSet) {
        obj = _mod15734;
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
            let tmp23 = tmp11(15772)(tmp22, tmp8);
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
        let tmp15 = tmp11(15788)(tmp22, "sham", true);
      }
      let tmp20 = tmp11(15789)(tmp5, tmp21, tmp22, dontCallGetSet);
      continue;
    }
  }
};
