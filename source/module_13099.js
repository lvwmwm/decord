// Module ID: 13099
// Function ID: 99417
// Dependencies: []

// Module 13099

export default (dontCallGetSet, obj) => {
  let _global;
  let stat;
  let target;
  ({ target, global: _global, stat } = dontCallGetSet);
  const tmp = require(dependencyMap[0]);
  if (_global) {
    let prototype = tmp;
  } else {
    let tmp2 = tmp[target];
    if (stat) {
      if (!tmp2) {
        tmp2 = require(dependencyMap[1])(target, {});
      }
      prototype = tmp2;
    } else {
      prototype = tmp2;
      if (tmp2) {
        prototype = require(dependencyMap[0])[target].prototype;
      }
    }
  }
  if (prototype) {
    for (const key10036 in arg1) {
      let tmp28 = arg1[key10036];
      let tmp27 = key10036;
      if (arg0.dontCallGetSet) {
        let tmp10 = closure_0;
        let tmp11 = closure_1;
        obj = closure_0(closure_1[2]);
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
      let tmp12 = closure_0;
      let tmp13 = closure_1;
      let tmp15 = tmp8;
      let sum = key10036;
      let tmp14 = closure_0(closure_1[3]);
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
            let tmp29 = closure_0;
            let tmp30 = closure_1;
            let tmp31 = closure_0(closure_1[4])(tmp28, tmp9);
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
        let tmp17 = closure_0;
        let tmp18 = closure_1;
        let tmp19 = closure_0(closure_1[5])(tmp28, "sham", true);
      }
      let tmp20 = closure_0;
      let tmp21 = closure_1;
      let tmp22 = prototype;
      let tmp23 = key10036;
      let tmp24 = tmp28;
      let tmp25 = arg0;
      let tmp26 = closure_0(closure_1[6])(prototype, tmp27, tmp28, arg0);
    }
  }
};
