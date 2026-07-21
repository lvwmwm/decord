// Module ID: 1382
// Function ID: 16533
// Name: defineDataProperty
// Dependencies: []

// Module 1382 (defineDataProperty)

export default function defineDataProperty(arg0, arg1, value) {
  if (arg0) {
    if ("string" !== typeof arg1) {
      if ("symbol" !== tmp2) {
        let tmp59 = require(dependencyMap[0]);
        const prototype6 = tmp59.prototype;
        tmp59 = new tmp59("`property` must be a string or a symbol`");
        throw tmp59;
      }
    }
    if (arguments.length > 3) {
      if ("boolean" !== typeof arguments[3]) {
        if (null !== arguments[3]) {
          let tmp52 = require(dependencyMap[0]);
          const prototype5 = tmp52.prototype;
          tmp52 = new tmp52("`nonEnumerable`, if provided, must be a boolean or null");
          throw tmp52;
        }
      }
    }
    if (arguments.length > 4) {
      if ("boolean" !== typeof arguments[4]) {
        if (null !== arguments[4]) {
          let tmp45 = require(dependencyMap[0]);
          const prototype4 = tmp45.prototype;
          tmp45 = new tmp45("`nonWritable`, if provided, must be a boolean or null");
          throw tmp45;
        }
      }
    }
    if (arguments.length > 5) {
      if ("boolean" !== typeof arguments[5]) {
        if (null !== arguments[5]) {
          let tmp38 = require(dependencyMap[0]);
          const prototype3 = tmp38.prototype;
          tmp38 = new tmp38("`nonConfigurable`, if provided, must be a boolean or null");
          throw tmp38;
        }
      }
    }
    if (arguments.length > 6) {
      if ("boolean" !== typeof arguments[6]) {
        let tmp31 = require(dependencyMap[0]);
        const prototype2 = tmp31.prototype;
        tmp31 = new tmp31("`loose`, if provided, must be a boolean");
        throw tmp31;
      }
    }
    let tmp7 = null;
    if (arguments.length > 3) {
      tmp7 = arguments[3];
    }
    let tmp8 = null;
    if (arguments.length > 4) {
      tmp8 = arguments[4];
    }
    let tmp9 = null;
    if (arguments.length > 5) {
      tmp9 = arguments[5];
    }
    const tmp13 = !require(dependencyMap[1]);
    let tmp14 = !tmp13;
    if (!tmp13) {
      tmp14 = require(dependencyMap[1])(arg0, arg1);
    }
    if (require(dependencyMap[2])) {
      let obj = {};
      if (null === tmp9) {
        if (tmp14) {
          let configurable = tmp14.configurable;
        }
        obj.configurable = configurable;
        if (null === tmp7) {
          if (tmp14) {
            let enumerable = tmp14.enumerable;
          }
          obj.enumerable = enumerable;
          obj.value = value;
          if (null !== tmp8) {
            obj.writable = !tmp8;
            obj = tmp28(arg0, arg1, obj);
          }
          const writable = tmp14.writable;
        }
        enumerable = !tmp7;
      }
      configurable = !tmp9;
    } else {
      if (!tmp10) {
        let tmp21 = require(dependencyMap[3]);
        const prototype = tmp21.prototype;
        tmp21 = new tmp21("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
        throw tmp21;
      }
      arg0[arg1] = value;
    }
    const tmp10 = arguments.length > 6 && arguments[6];
  }
  let tmp64 = require(dependencyMap[0]);
  tmp64 = new tmp64("`obj` must be an object or a function`");
  throw tmp64;
};
