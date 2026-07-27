// Module ID: 12012
// Function ID: 92818
// Dependencies: [12013, 12014, 12015, 12017, 12018, 12020, 12016, 12019, 12022, 12072, 12021, 12073, 12074, 12075, 12076, 12077]

// Module 12012
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
      fn = self.__exportStar;
    }
    if (!fn) {
      fn = (obj, exports) => {
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
    let fn2 = self;
    if (self) {
      fn2 = self.__importStar;
    }
    if (!fn2) {
      fn2 = (__esModule) => {
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
    const _Object3 = Object;
    let obj = { value: true };
    exports.util = undefined;
    exports.regexes = undefined;
    exports.locales = undefined;
    exports.toJSONSchema = undefined;
    exports.JSONSchemaGenerator = undefined;
    exports.JSONSchema = undefined;
    fn(require("_callSuper"), exports);
    fn(require("module_12014"), exports);
    fn(require("toDotPath"), exports);
    fn(require("isValidBase64"), exports);
    fn(require("module_12018"), exports);
    fn(require("module_12020"), exports);
    exports.util = fn2(require("cached"));
    exports.regexes = fn2(require("timeSource"));
    exports.locales = fn2(require("module_12022"));
    fn(require("registry"), exports);
    fn(require("Doc"), exports);
    fn(require("_lt"), exports);
    fn(require("initializeContext"), exports);
    const _Object4 = Object;
    obj = {
      enumerable: true,
      get() {
            return require(12075) /* stringProcessor */.toJSONSchema;
          }
    };
    Object.defineProperty(exports, "toJSONSchema", obj);
    const _Object5 = Object;
    obj = {
      enumerable: true,
      get() {
            return require(12076) /* JSONSchemaGenerator */.JSONSchemaGenerator;
          }
    };
    Object.defineProperty(exports, "JSONSchemaGenerator", obj);
    exports.JSONSchema = fn2(require("module_12077"));
  } else {
    const _Object2 = Object;
  }
} else {
  let _Object = Object;
}
