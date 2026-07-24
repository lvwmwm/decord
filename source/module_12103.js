// Module ID: 12103
// Function ID: 94831
// Dependencies: [12035, 12101]

// Module 12103
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
    exports.ZodISODateTime = undefined;
    exports.ZodISODate = undefined;
    exports.ZodISOTime = undefined;
    exports.ZodISODuration = undefined;
    exports.datetime = function datetime(message) {
      return closure_3._isoDateTime(exports.ZodISODateTime, message);
    };
    exports.date = function date(message) {
      return closure_3._isoDate(exports.ZodISODate, message);
    };
    exports.time = function time(message) {
      return closure_3._isoTime(exports.ZodISOTime, message);
    };
    exports.duration = function duration(message) {
      return closure_3._isoDuration(exports.ZodISODuration, message);
    };
    const fnResult = fn(require("module_12035"));
    let closure_4 = fn(require("string"));
    exports.ZodISODateTime = fnResult.$constructor("ZodISODateTime", (arg0, arg1) => {
      const $ZodISODateTime = closure_3.$ZodISODateTime;
      $ZodISODateTime.init(arg0, arg1);
      const ZodStringFormat = closure_4.ZodStringFormat;
      ZodStringFormat.init(arg0, arg1);
    });
    exports.ZodISODate = fnResult.$constructor("ZodISODate", (arg0, arg1) => {
      const $ZodISODate = closure_3.$ZodISODate;
      $ZodISODate.init(arg0, arg1);
      const ZodStringFormat = closure_4.ZodStringFormat;
      ZodStringFormat.init(arg0, arg1);
    });
    exports.ZodISOTime = fnResult.$constructor("ZodISOTime", (arg0, arg1) => {
      const $ZodISOTime = closure_3.$ZodISOTime;
      $ZodISOTime.init(arg0, arg1);
      const ZodStringFormat = closure_4.ZodStringFormat;
      ZodStringFormat.init(arg0, arg1);
    });
    exports.ZodISODuration = fnResult.$constructor("ZodISODuration", (arg0, arg1) => {
      const $ZodISODuration = closure_3.$ZodISODuration;
      $ZodISODuration.init(arg0, arg1);
      const ZodStringFormat = closure_4.ZodStringFormat;
      ZodStringFormat.init(arg0, arg1);
    });
  } else {
    const _Object2 = Object;
  }
} else {
  let _Object = Object;
}
