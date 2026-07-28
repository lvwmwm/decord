// Module ID: 13338
// Function ID: 102283
// Dependencies: [13339, 13340, 13341, 13378, 13379, 13395, 13396]

// Module 13338

export default (dontCallGetSet, obj) => {
  let _global;
  let stat;
  let target;
  ({ target, global: _global, stat } = dontCallGetSet);
  const tmp = require(13339) /* check */;
  if (_global) {
    let prototype = tmp;
  } else {
    let tmp2 = tmp[target];
    if (stat) {
      if (!tmp2) {
        tmp2 = require(13340) /* check */(target, {});
      }
      prototype = tmp2;
    } else {
      prototype = tmp2;
      if (tmp2) {
        prototype = require(13339) /* check */[target].prototype;
      }
    }
  }
  if (prototype) {
    for (const key10036 in arg1) {
      let tmp28 = arg1[key10036];
      let tmp27 = key10036;
      if (arg0.dontCallGetSet) {
        let tmp10 = require;
        let tmp11 = dependencyMap;
        obj = require(13341) /* getOwnPropertyDescriptor */;
        let iter = obj.f(prototype, key10036);
        let value = iter;
        if (iter) {
          value = iter.value;
        }
        let tmp9 = value;
        let tmp8 = iter;
      } else {
        tmp9 = prototype[key10036];
      }
      let tmp12 = require;
      let tmp13 = dependencyMap;
      let tmp15 = tmp8;
      let sum = key10036;
      let tmp14 = require(13378) /* isForced */;
      if (!_global) {
        let str4 = "#";
        if (stat) {
          str4 = ".";
        }
        sum = target + str4 + key10036;
      }
      if (!tmp14(sum, arg0.forced)) {
        if (undefined !== tmp9) {
          if (typeof tmp28 === typeof tmp9) {
            continue;
          } else {
            let tmp29 = require;
            let tmp30 = dependencyMap;
            let tmp31 = require(13379)(tmp28, tmp9);
          }
        }
        continue;
      }
      let sham = arg0.sham;
      if (!sham) {
        let sham2 = tmp9;
        if (tmp9) {
          sham2 = tmp9.sham;
        }
        sham = sham2;
      }
      if (sham) {
        let tmp17 = require;
        let tmp18 = dependencyMap;
        let tmp19 = require(13395)(tmp28, "sham", true);
      }
      let tmp20 = require;
      let tmp21 = dependencyMap;
      let tmp22 = prototype;
      let tmp23 = key10036;
      let tmp24 = tmp28;
      let tmp25 = arg0;
      let tmp26 = require(13396)(prototype, tmp27, tmp28, arg0);
      continue;
    }
  }
};
