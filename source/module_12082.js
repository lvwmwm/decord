// Module ID: 12082
// Function ID: 94659
// Dependencies: [12009, 12075]

// Module 12082
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
    exports.string = function string(message) {
      return closure_2._coercedString(closure_3.ZodString, message);
    };
    exports.number = function number(message) {
      return closure_2._coercedNumber(closure_3.ZodNumber, message);
    };
    exports.boolean = function boolean(message) {
      return closure_2._coercedBoolean(closure_3.ZodBoolean, message);
    };
    exports.bigint = function bigint(message) {
      return closure_2._coercedBigint(closure_3.ZodBigInt, message);
    };
    exports.date = function date(message) {
      return closure_2._coercedDate(closure_3.ZodDate, message);
    };
    let closure_2 = fn(require("module_12009"));
    let closure_3 = fn(require("string"));
  } else {
    const _Object2 = Object;
  }
} else {
  let _Object = Object;
}
