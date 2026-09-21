// Module ID: 9211
// Function ID: 9212
// Dependencies: [9212, 9213, 9214, 9216, 9217, 9219, 9215, 9218, 9221, 9271, 9220, 9272, 9273, 9274, 9275, 9276]

// Module 9211
import _mod9212 from "module_9212" /* 9212 */;
import _mod9213 from "module_9213" /* 9213 */;
import _mod9214 from "module_9214" /* 9214 */;
import _mod9215 from "module_9215" /* 9215 */;
import _mod9216 from "module_9216" /* 9216 */;
import _mod9217 from "module_9217" /* 9217 */;
import _mod9218 from "module_9218" /* 9218 */;
import _mod9219 from "module_9219" /* 9219 */;
import Doc from "Doc" /* 9220 */;
import ar from "ar" /* 9221 */;
import $output from "$output" /* 9271 */;
import _mod9272 from "module_9272" /* 9272 */;
import initializeContext from "initializeContext" /* 9273 */;
import _mod9276 from "module_9276" /* 9276 */;

const require = globalThis.__r;

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
          let tmp6 = "default" === key10007;
          if (tmp6) {
            if (tmp6) {
              continue;
            } else {
              let tmp4 = self2(arg1, arg0, key10007);
              continue;
            }
            continue;
          } else {
            let _Object = Object;
            hasOwnProperty = Object.prototype.hasOwnProperty;
            let call = hasOwnProperty.call;
            if (typeof call === "unknown") {
              let hasOwnPropertyResult = hasOwnProperty(key10007);
            } else {
              hasOwnPropertyResult = call(arg1, key10007);
            }
          }
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
            let tmp9 = "default" !== key10009;
            if (!tmp9) {
              if (!tmp9) {
                continue;
              } else {
                let tmp6 = self2(obj, arg0, key10009);
                continue;
              }
              continue;
            } else {
              let _Object = Object;
              hasOwnProperty = Object.prototype.hasOwnProperty;
              let call = hasOwnProperty.call;
              if (typeof call === "unknown") {
                let hasOwnPropertyResult = hasOwnProperty(key10009);
              } else {
                hasOwnPropertyResult = call(arg0, key10009);
              }
            }
          }
        }
        __setModuleDefault(obj, __esModule);
        return obj;
      };
    }
    const _Object3 = Object;
    exports.util = undefined;
    exports.regexes = undefined;
    exports.locales = undefined;
    exports.toJSONSchema = undefined;
    exports.JSONSchemaGenerator = undefined;
    exports.JSONSchema = undefined;
    fn(_mod9212, exports);
    fn(_mod9213, exports);
    fn(_mod9214, exports);
    fn(_mod9216, exports);
    fn(_mod9217, exports);
    fn(_mod9219, exports);
    exports.util = fn2(_mod9215);
    exports.regexes = fn2(_mod9218);
    exports.locales = fn2(ar);
    fn($output, exports);
    fn(Doc, exports);
    fn(_mod9272, exports);
    fn(initializeContext, exports);
    const _Object4 = Object;
    let obj = {
      enumerable: true,
      get() {
            return require("stringProcessor").toJSONSchema;
          }
    };
    Object.defineProperty(exports, "toJSONSchema", obj);
    const _Object5 = Object;
    const obj2 = {
      enumerable: true,
      get() {
            return require("JSONSchemaGenerator").JSONSchemaGenerator;
          }
    };
    Object.defineProperty(exports, "JSONSchemaGenerator", obj2);
    exports.JSONSchema = fn2(_mod9276);
  } else {
    const _Object2 = Object;
  }
} else {
  let _Object = Object;
}
