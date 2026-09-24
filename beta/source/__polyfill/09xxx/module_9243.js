// Module ID: 9243
// Function ID: 9244
// Dependencies: [9244, 9245, 9246, 9248, 9249, 9251, 9247, 9250, 9253, 9303, 9252, 9304, 9305, 9306, 9307, 9308]

// Module 9243
import _mod9244 from "module_9244" /* 9244 */;
import _mod9245 from "module_9245" /* 9245 */;
import _mod9246 from "module_9246" /* 9246 */;
import _mod9247 from "module_9247" /* 9247 */;
import _mod9248 from "module_9248" /* 9248 */;
import _mod9249 from "module_9249" /* 9249 */;
import _mod9250 from "module_9250" /* 9250 */;
import _mod9251 from "module_9251" /* 9251 */;
import Doc from "Doc" /* 9252 */;
import ar from "ar" /* 9253 */;
import $output from "$output" /* 9303 */;
import _mod9304 from "module_9304" /* 9304 */;
import initializeContext from "initializeContext" /* 9305 */;
import _mod9308 from "module_9308" /* 9308 */;

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
    fn(_mod9244, exports);
    fn(_mod9245, exports);
    fn(_mod9246, exports);
    fn(_mod9248, exports);
    fn(_mod9249, exports);
    fn(_mod9251, exports);
    exports.util = fn2(_mod9247);
    exports.regexes = fn2(_mod9250);
    exports.locales = fn2(ar);
    fn($output, exports);
    fn(Doc, exports);
    fn(_mod9304, exports);
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
    exports.JSONSchema = fn2(_mod9308);
  } else {
    const _Object2 = Object;
  }
} else {
  let _Object = Object;
}
