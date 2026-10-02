// Module ID: 1465
// Function ID: 1466
// Name: defineDataProperty
// Dependencies: [1294, 1295, 1317, 1315]

// Module 1465 (defineDataProperty)
import _mod1294 from "module_1294" /* 1294 */;
import _mod1295 from "module_1295" /* 1295 */;
import _mod1315 from "module_1315" /* 1315 */;
import flag from "flag" /* 1317 */;


export default function defineDataProperty(obj, str, value) {
  const tmp = obj;
  if (tmp) {
    if (typeof str !== "string") {
      if (typeof str !== "symbol") {
        const self11 = this;
        const self12 = this;
        const tmp34 = new _mod1294("`property` must be a string or a symbol`");
        throw tmp34;
      }
    }
    if (arguments.length > 3) {
      if (typeof arguments[3] !== "boolean") {
        if (null !== arguments[3]) {
          const self9 = this;
          const self10 = this;
          const tmp30 = new _mod1294("`nonEnumerable`, if provided, must be a boolean or null");
          throw tmp30;
        }
      }
    }
    if (arguments.length > 4) {
      if (typeof arguments[4] !== "boolean") {
        if (null !== arguments[4]) {
          const self7 = this;
          const self8 = this;
          const tmp26 = new _mod1294("`nonWritable`, if provided, must be a boolean or null");
          throw tmp26;
        }
      }
    }
    if (arguments.length > 5) {
      if (typeof arguments[5] !== "boolean") {
        if (null !== arguments[5]) {
          const self5 = this;
          const self6 = this;
          const tmp22 = new _mod1294("`nonConfigurable`, if provided, must be a boolean or null");
          throw tmp22;
        }
      }
    }
    if (arguments.length > 6) {
      if (typeof arguments[6] !== "boolean") {
        const self3 = this;
        const self4 = this;
        const tmp18 = new _mod1294("`loose`, if provided, must be a boolean");
        throw tmp18;
      }
    }
    let tmp4 = null;
    if (arguments.length > 3) {
      tmp4 = arguments[3];
    }
    let tmp5 = null;
    if (arguments.length > 4) {
      tmp5 = arguments[4];
    }
    let tmp6 = null;
    if (arguments.length > 5) {
      tmp6 = arguments[5];
    }
    const tmp7 = arguments.length > 6 && arguments[6];
    const tmp10 = _mod1295 && _mod1295(obj, str);
    if (flag) {
      if (null === tmp6) {
        let configurable;
        if (tmp10) {
          configurable = tmp10.configurable;
        }
        obj = { configurable, enumerable: null, value: null, writable: null };
        if (null === tmp4) {
          let enumerable;
          if (tmp10) {
            enumerable = tmp10.enumerable;
          }
          obj.enumerable = enumerable;
          obj.value = value;
          if (null === tmp5) {
            let writable;
            if (tmp10) {
              writable = tmp10.writable;
            }
            obj.writable = writable;
            tmp14(obj, str, obj);
          }
          writable = !tmp5;
        }
        enumerable = !tmp4;
      }
      configurable = !tmp6;
    } else {
      if (!tmp7) {
        const self = this;
        const self2 = this;
        const tmp12 = new _mod1315("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
        throw tmp12;
      }
      obj[str] = value;
    }
  }
  const tmp36 = new _mod1294("`obj` must be an object or a function`");
  throw tmp36;
};
