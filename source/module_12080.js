// Module ID: 12080
// Function ID: 94630
// Dependencies: [12009]

// Module 12080
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
    const _Object3 = Object;
    let obj = { value: true };
    exports.ZodIssueCode = undefined;
    exports.$brand = undefined;
    exports.config = undefined;
    exports.ZodFirstPartyTypeKind = undefined;
    exports.setErrorMap = function setErrorMap(customError) {
      closure_4.config({ customError });
    };
    exports.getErrorMap = function getErrorMap() {
      return closure_4.config().customError;
    };
    let closure_4 = fn(require("module_12009"));
    exports.ZodIssueCode = { invalid_type: "invalid_type", too_big: "too_big", too_small: "too_small", invalid_format: "invalid_format", not_multiple_of: "not_multiple_of", unrecognized_keys: "unrecognized_keys", invalid_union: "invalid_union", invalid_key: "invalid_key", invalid_element: "invalid_element", invalid_value: "invalid_value", custom: "custom" };
    const _Object4 = Object;
    obj = {
      enumerable: true,
      get() {
            return require(12009).$brand;
          }
    };
    Object.defineProperty(exports, "$brand", obj);
    const _Object5 = Object;
    obj = {
      enumerable: true,
      get() {
            return require(12009).config;
          }
    };
    Object.defineProperty(exports, "config", obj);
    exports.ZodFirstPartyTypeKind = {};
  } else {
    const _Object2 = Object;
  }
} else {
  let _Object = Object;
}
