// Module ID: 9245
// Function ID: 9246
// Dependencies: [9246, 9247, 9248, 9250, 9251, 9253, 9249, 9252, 9255, 9305, 9254, 9306, 9307, 9308, 9309, 9310]

// Module 9245
import _mod9246 from "module_9246" /* 9246 */;
import _mod9247 from "module_9247" /* 9247 */;
import _mod9248 from "module_9248" /* 9248 */;
import _mod9249 from "module_9249" /* 9249 */;
import _mod9250 from "module_9250" /* 9250 */;
import _mod9251 from "module_9251" /* 9251 */;
import _mod9252 from "module_9252" /* 9252 */;
import _mod9253 from "module_9253" /* 9253 */;
import Doc from "Doc" /* 9254 */;
import ar from "ar" /* 9255 */;
import $output from "$output" /* 9305 */;
import _mod9306 from "module_9306" /* 9306 */;
import initializeContext from "initializeContext" /* 9307 */;
import _mod9310 from "module_9310" /* 9310 */;

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
    fn(_mod9246, exports);
    fn(_mod9247, exports);
    fn(_mod9248, exports);
    fn(_mod9250, exports);
    fn(_mod9251, exports);
    fn(_mod9253, exports);
    exports.util = fn2(_mod9249);
    exports.regexes = fn2(_mod9252);
    exports.locales = fn2(ar);
    fn($output, exports);
    fn(Doc, exports);
    fn(_mod9306, exports);
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
    exports.JSONSchema = fn2(_mod9310);
  } else {
    const _Object2 = Object;
  }
} else {
  let _Object = Object;
}
