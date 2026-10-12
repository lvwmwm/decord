// Module ID: 14550
// Function ID: 14551
// Dependencies: [14551, 14552, 14553, 14590, 14591, 14607, 14608]

// Module 14550
import _mod14551 from "module_14551" /* 14551 */;
import _mod14553 from "module_14553" /* 14553 */;
import isForced from "isForced" /* 14590 */;


export default (dontCallGetSet, obj) => {
  let _global;
  let stat;
  let target;
  let tmp5;
  ({ target, global: _global, stat } = dontCallGetSet);
  const tmp3 = _mod14551;
  if (_global) {
    tmp5 = tmp3;
  } else {
    let tmp4 = tmp3[target];
    if (stat) {
      if (!tmp4) {
        tmp4 = tmp(14552)(target, {});
      }
      tmp5 = tmp4;
    } else {
      tmp5 = tmp4 && tmp(14551)[target].prototype;
    }
  }
  if (tmp5) {
    for (const key10024 in obj) {
      let tmp8;
      let tmp22 = obj[key10024];
      let tmp21 = key10024;
      if (dontCallGetSet.dontCallGetSet) {
        obj = _mod14553;
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
            let tmp23 = tmp11(14591)(tmp22, tmp8);
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
        let tmp15 = tmp11(14607)(tmp22, "sham", true);
      }
      let tmp20 = tmp11(14608)(tmp5, tmp21, tmp22, dontCallGetSet);
      continue;
    }
  }
};
