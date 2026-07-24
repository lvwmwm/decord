// Module ID: 12037
// Function ID: 93034
// Dependencies: [5, 12036, 12038, 12039]

// Module 12037
import asyncGeneratorStep from "asyncGeneratorStep";

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
    exports._parse = undefined;
    exports.parse = undefined;
    exports._parseAsync = undefined;
    exports.parseAsync = undefined;
    exports._safeParse = undefined;
    exports.safeParse = undefined;
    exports._safeParseAsync = undefined;
    exports.safeParseAsync = undefined;
    exports._encode = undefined;
    exports.encode = undefined;
    exports._decode = undefined;
    exports.decode = undefined;
    exports._encodeAsync = undefined;
    exports.encodeAsync = undefined;
    exports._decodeAsync = undefined;
    exports.decodeAsync = undefined;
    exports._safeEncode = undefined;
    exports.safeEncode = undefined;
    exports._safeDecode = undefined;
    exports.safeDecode = undefined;
    exports._safeEncodeAsync = undefined;
    exports.safeEncodeAsync = undefined;
    exports._safeDecodeAsync = undefined;
    exports.safeDecodeAsync = undefined;
    let closure_4 = fn(require("_callSuper"));
    const fnResult = fn(require("toDotPath"));
    let closure_6 = fn(require("cached"));
    exports._parse = function _parse(arg0) {
      let closure_0 = arg0;
      return (_zod, value, arg2, Err) => {
        let obj = {};
        if (arg2) {
          const _Object = Object;
          obj.async = false;
          let merged = Object.assign(arg2, obj);
        } else {
          obj.async = false;
          merged = obj;
        }
        _zod = _zod._zod;
        obj = { value, issues: [] };
        const iter = _zod.run(obj, merged);
        if (iter instanceof Promise) {
          const $ZodAsyncError = outer1_4.$ZodAsyncError;
          const prototype2 = $ZodAsyncError.prototype;
          const ZodAsyncError = new $ZodAsyncError();
          throw ZodAsyncError;
        } else if (iter.issues.length) {
          Err = undefined;
          if (null != Err) {
            Err = Err.Err;
          }
          if (null == Err) {
            Err = merged;
          }
          const issues = iter.issues;
          const prototype = Err.prototype;
          const err = new Err(issues.map((path) => outer2_6.finalizeIssue(path, merged, outer2_4.config())));
          let callee;
          if (null != Err) {
            callee = Err.callee;
          }
          outer1_6.captureStackTrace(err, callee);
          throw err;
        } else {
          return iter.value;
        }
      };
    };
    exports.parse = exports._parse(fnResult.$ZodRealError);
    exports._parseAsync = function _parseAsync($ZodRealError) {
      let closure_0 = $ZodRealError;
      return (() => {
        // CreateGeneratorClosureLongIndex (0x67)
        let closure_0 = outer1_1(tmp);
        return function(arg0, arg1, arg2, arg3) {
          return callback(...arguments);
        };
      })();
    };
    exports.parseAsync = exports._parseAsync(fnResult.$ZodRealError);
    exports._safeParse = function _safeParse(closure_0) {
      return (_zod, value) => {
        let obj = {};
        if (arg2) {
          const _Object = Object;
          obj.async = false;
          let merged = Object.assign({}, arg2, obj);
        } else {
          obj.async = false;
          merged = obj;
        }
        _zod = _zod._zod;
        obj = { value, issues: [] };
        let iter = _zod.run(obj, merged);
        if (iter instanceof Promise) {
          const $ZodAsyncError = outer1_4.$ZodAsyncError;
          const prototype2 = $ZodAsyncError.prototype;
          const ZodAsyncError = new $ZodAsyncError();
          throw ZodAsyncError;
        } else {
          obj = {};
          if (iter.issues.length) {
            obj.success = false;
            if (null != merged) {
              let $ZodError = merged;
            } else {
              $ZodError = outer1_5.$ZodError;
            }
            const issues = iter.issues;
            const prototype = $ZodError.prototype;
            iter = new.target;
            const ZodError = new $ZodError(issues.map((path) => outer2_6.finalizeIssue(path, merged, outer2_4.config())));
            obj.error = ZodError;
          } else {
            obj.success = true;
            obj.data = iter.value;
            return obj;
          }
        }
      };
    };
    exports.safeParse = exports._safeParse(fnResult.$ZodRealError);
    exports._safeParseAsync = function _safeParseAsync($ZodRealError) {
      let closure_0 = $ZodRealError;
      return (() => {
        // CreateGeneratorClosureLongIndex (0x67)
        let closure_0 = outer1_1(tmp);
        return function(arg0, arg1, arg2) {
          return callback(...arguments);
        };
      })();
    };
    exports.safeParseAsync = exports._safeParseAsync(fnResult.$ZodRealError);
    exports._encode = function _encode($ZodRealError) {
      let closure_0 = $ZodRealError;
      return (arg0, arg1, arg2) => {
        const obj = {};
        if (arg2) {
          const _Object = Object;
          obj.direction = "backward";
          let merged = Object.assign(arg2, obj);
        } else {
          obj.direction = "backward";
          merged = obj;
        }
        return ZodRealError._parse(ZodRealError)(arg0, arg1, merged);
      };
    };
    exports.encode = exports._encode(fnResult.$ZodRealError);
    exports._decode = function _decode($ZodRealError) {
      let closure_0 = $ZodRealError;
      return (arg0, arg1, arg2) => ZodRealError._parse(ZodRealError)(arg0, arg1, arg2);
    };
    exports.decode = exports._decode(fnResult.$ZodRealError);
    exports._encodeAsync = function _encodeAsync($ZodRealError) {
      let closure_0 = $ZodRealError;
      return (() => {
        // CreateGeneratorClosureLongIndex (0x67)
        let closure_0 = outer1_1(tmp);
        return function(arg0, arg1, arg2) {
          return callback(...arguments);
        };
      })();
    };
    exports.encodeAsync = exports._encodeAsync(fnResult.$ZodRealError);
    exports._decodeAsync = function _decodeAsync($ZodRealError) {
      let closure_0 = $ZodRealError;
      return (() => {
        // CreateGeneratorClosureLongIndex (0x67)
        let closure_0 = outer1_1(tmp);
        return function(arg0, arg1, arg2) {
          return callback(...arguments);
        };
      })();
    };
    exports.decodeAsync = exports._decodeAsync(fnResult.$ZodRealError);
    exports._safeEncode = function _safeEncode($ZodRealError) {
      let closure_0 = $ZodRealError;
      return (arg0, arg1, arg2) => {
        const obj = {};
        if (arg2) {
          const _Object = Object;
          obj.direction = "backward";
          let merged = Object.assign(arg2, obj);
        } else {
          obj.direction = "backward";
          merged = obj;
        }
        return ZodRealError._safeParse(ZodRealError)(arg0, arg1, merged);
      };
    };
    exports.safeEncode = exports._safeEncode(fnResult.$ZodRealError);
    exports._safeDecode = function _safeDecode($ZodRealError) {
      let closure_0 = $ZodRealError;
      return (arg0, arg1, arg2) => ZodRealError._safeParse(ZodRealError)(arg0, arg1, arg2);
    };
    exports.safeDecode = exports._safeDecode(fnResult.$ZodRealError);
    exports._safeEncodeAsync = function _safeEncodeAsync($ZodRealError) {
      let closure_0 = $ZodRealError;
      return (() => {
        // CreateGeneratorClosureLongIndex (0x67)
        let closure_0 = outer1_1(tmp);
        return function(arg0, arg1, arg2) {
          return callback(...arguments);
        };
      })();
    };
    exports.safeEncodeAsync = exports._safeEncodeAsync(fnResult.$ZodRealError);
    exports._safeDecodeAsync = function _safeDecodeAsync($ZodRealError) {
      let closure_0 = $ZodRealError;
      return (() => {
        // CreateGeneratorClosureLongIndex (0x67)
        let closure_0 = outer1_1(tmp);
        return function(arg0, arg1, arg2) {
          return callback(...arguments);
        };
      })();
    };
    exports.safeDecodeAsync = exports._safeDecodeAsync(fnResult.$ZodRealError);
  } else {
    const _Object2 = Object;
  }
} else {
  let _Object = Object;
}
