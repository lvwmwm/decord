// Module ID: 12011
// Function ID: 92788
// Dependencies: [12012, 12078, 12079, 12082, 12081, 12083, 12031, 12075, 12084, 12022, 12080, 12085]

// Module 12011
const self = this;
let self2 = this;
if (this) {
  self2 = self.__createBinding;
}
if (self2) {
  let __setModuleDefault = self;
  if (self) {
    __setModuleDefault = self.__setModuleDefault;
  }
  if (__setModuleDefault) {
    let fn = self;
    if (self) {
      fn = self.__importStar;
    }
    if (!fn) {
      fn = (__esModule) => {
        if (__esModule) {
          if (__esModule.__esModule) {
            return __esModule;
          }
        }
        const obj = {};
        if (null != __esModule) {
          for (const key10009 in arg0) {
            let tmp7 = key10009;
            let callResult = "default" !== key10009;
            if (callResult) {
              let _Object = Object;
              callResult = hasOwnProperty.call(arg0, key10009);
            }
            if (!callResult) {
              continue;
            } else {
              let tmp4 = self2;
              let tmp5 = self2(obj, arg0, key10009);
              continue;
            }
            continue;
          }
        }
        __setModuleDefault(obj, __esModule);
        return obj;
      };
    }
    let fn2 = self;
    if (self) {
      fn2 = self.__exportStar;
    }
    if (!fn2) {
      fn2 = (obj, exports) => {
        for (const key10007 in arg0) {
          let tmp4 = key10007;
          let callResult = "default" === key10007;
          if (!callResult) {
            let _Object = Object;
            callResult = hasOwnProperty.call(arg1, key10007);
          }
          if (callResult) {
            continue;
          } else {
            let tmp2 = self2;
            let tmp3 = self2(arg1, arg0, key10007);
            continue;
          }
          continue;
        }
      };
    }
    let fn3 = self;
    if (self) {
      fn3 = self.__importDefault;
    }
    if (!fn3) {
      fn3 = (__esModule) => {
        if (!__esModule) {
          const obj = { default: __esModule };
          let tmp = obj;
        } else {
          tmp = __esModule;
        }
        return tmp;
      };
    }
    const _Object3 = Object;
    let obj = { value: true };
    exports.core = undefined;
    exports.globalRegistry = undefined;
    exports.registry = undefined;
    exports.config = undefined;
    exports.$output = undefined;
    exports.$input = undefined;
    exports.$brand = undefined;
    exports.clone = undefined;
    exports.regexes = undefined;
    exports.treeifyError = undefined;
    exports.prettifyError = undefined;
    exports.formatError = undefined;
    exports.flattenError = undefined;
    exports.TimePrecision = undefined;
    exports.util = undefined;
    exports.NEVER = undefined;
    exports.toJSONSchema = undefined;
    exports.fromJSONSchema = undefined;
    exports.locales = undefined;
    exports.ZodISODateTime = undefined;
    exports.ZodISODate = undefined;
    exports.ZodISOTime = undefined;
    exports.ZodISODuration = undefined;
    exports.iso = undefined;
    exports.coerce = undefined;
    exports.core = fn(require("module_12012"));
    fn2(require("string"), exports);
    fn2(require("module_12079"), exports);
    fn2(require("module_12082"), exports);
    fn2(require("module_12081"), exports);
    fn2(require("module_12083"), exports);
    require("module_12012").config(fn3(require("cached")).default());
    const _Object4 = Object;
    obj = {
      enumerable: true,
      get() {
            return require(12012).globalRegistry;
          }
    };
    Object.defineProperty(exports, "globalRegistry", obj);
    const _Object5 = Object;
    obj = {
      enumerable: true,
      get() {
            return require(12012).registry;
          }
    };
    Object.defineProperty(exports, "registry", obj);
    const _Object6 = Object;
    const obj1 = {
      enumerable: true,
      get() {
            return require(12012).config;
          }
    };
    Object.defineProperty(exports, "config", obj1);
    const _Object7 = Object;
    const obj2 = {
      enumerable: true,
      get() {
            return require(12012).$output;
          }
    };
    Object.defineProperty(exports, "$output", obj2);
    const _Object8 = Object;
    const obj3 = {
      enumerable: true,
      get() {
            return require(12012).$input;
          }
    };
    Object.defineProperty(exports, "$input", obj3);
    const _Object9 = Object;
    const obj4 = {
      enumerable: true,
      get() {
            return require(12012).$brand;
          }
    };
    Object.defineProperty(exports, "$brand", obj4);
    const _Object10 = Object;
    const obj5 = {
      enumerable: true,
      get() {
            return require(12012).clone;
          }
    };
    Object.defineProperty(exports, "clone", obj5);
    const _Object11 = Object;
    const obj6 = {
      enumerable: true,
      get() {
            return require(12012).regexes;
          }
    };
    Object.defineProperty(exports, "regexes", obj6);
    const _Object12 = Object;
    const obj7 = {
      enumerable: true,
      get() {
            return require(12012).treeifyError;
          }
    };
    Object.defineProperty(exports, "treeifyError", obj7);
    const _Object13 = Object;
    const obj8 = {
      enumerable: true,
      get() {
            return require(12012).prettifyError;
          }
    };
    Object.defineProperty(exports, "prettifyError", obj8);
    const _Object14 = Object;
    const obj9 = {
      enumerable: true,
      get() {
            return require(12012).formatError;
          }
    };
    Object.defineProperty(exports, "formatError", obj9);
    const _Object15 = Object;
    const obj10 = {
      enumerable: true,
      get() {
            return require(12012).flattenError;
          }
    };
    Object.defineProperty(exports, "flattenError", obj10);
    const _Object16 = Object;
    const obj11 = {
      enumerable: true,
      get() {
            return require(12012).TimePrecision;
          }
    };
    Object.defineProperty(exports, "TimePrecision", obj11);
    const _Object17 = Object;
    const obj12 = {
      enumerable: true,
      get() {
            return require(12012).util;
          }
    };
    Object.defineProperty(exports, "util", obj12);
    const _Object18 = Object;
    const obj13 = {
      enumerable: true,
      get() {
            return require(12012).NEVER;
          }
    };
    Object.defineProperty(exports, "NEVER", obj13);
    const _Object19 = Object;
    const obj14 = {
      enumerable: true,
      get() {
            return require(12075) /* stringProcessor */.toJSONSchema;
          }
    };
    Object.defineProperty(exports, "toJSONSchema", obj14);
    const _Object20 = Object;
    const obj15 = {
      enumerable: true,
      get() {
            return require(12084) /* convertBaseSchema */.fromJSONSchema;
          }
    };
    Object.defineProperty(exports, "fromJSONSchema", obj15);
    exports.locales = fn(require("module_12022"));
    const _Object21 = Object;
    const obj16 = {
      enumerable: true,
      get() {
            return require(12080).ZodISODateTime;
          }
    };
    Object.defineProperty(exports, "ZodISODateTime", obj16);
    const _Object22 = Object;
    const obj17 = {
      enumerable: true,
      get() {
            return require(12080).ZodISODate;
          }
    };
    Object.defineProperty(exports, "ZodISODate", obj17);
    const _Object23 = Object;
    const obj18 = {
      enumerable: true,
      get() {
            return require(12080).ZodISOTime;
          }
    };
    Object.defineProperty(exports, "ZodISOTime", obj18);
    const _Object24 = Object;
    const obj19 = {
      enumerable: true,
      get() {
            return require(12080).ZodISODuration;
          }
    };
    Object.defineProperty(exports, "ZodISODuration", obj19);
    exports.iso = fn(require("module_12080"));
    exports.coerce = fn(require("module_12085"));
  } else {
    const _Object2 = Object;
  }
} else {
  let _Object = Object;
}
