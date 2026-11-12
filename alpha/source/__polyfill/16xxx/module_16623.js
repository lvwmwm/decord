// Module ID: 16623
// Function ID: 16624
// Dependencies: [16624, 16625, 16626, 16663, 16664, 16680, 16681]

// Module 16623
import _mod16624 from "module_16624" /* 16624 */;
import _mod16626 from "module_16626" /* 16626 */;
import isForced from "isForced" /* 16663 */;


export default (dontCallGetSet, obj) => {
  let _global;
  let stat;
  let target;
  let tmp5;
  ({ target, global: _global, stat } = dontCallGetSet);
  const tmp3 = _mod16624;
  if (_global) {
    tmp5 = tmp3;
  } else {
    let tmp4 = tmp3[target];
    if (stat) {
      if (!tmp4) {
        tmp4 = tmp(16625)(target, {});
      }
      tmp5 = tmp4;
    } else {
      tmp5 = tmp4 && tmp(16624)[target].prototype;
    }
  }
  if (tmp5) {
    for (const key10024 in obj) {
      let tmp8;
      let tmp22 = obj[key10024];
      let tmp21 = key10024;
      if (dontCallGetSet.dontCallGetSet) {
        obj = _mod16626;
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
            let tmp23 = tmp11(16664)(tmp22, tmp8);
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
        let tmp15 = tmp11(16680)(tmp22, "sham", true);
      }
      let tmp20 = tmp11(16681)(tmp5, tmp21, tmp22, dontCallGetSet);
      continue;
    }
  }
};
