// Module ID: 9280
// Function ID: 9281
// Dependencies: [9211, 9281]

// Module 9280
import _mod9211 from "module_9211" /* 9211 */;
import _mod9281 from "module_9281" /* 9281 */;

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
    exports.parse = undefined;
    exports.parseAsync = undefined;
    exports.safeParse = undefined;
    exports.safeParseAsync = undefined;
    exports.encode = undefined;
    exports.decode = undefined;
    exports.encodeAsync = undefined;
    exports.decodeAsync = undefined;
    exports.safeEncode = undefined;
    exports.safeDecode = undefined;
    exports.safeEncodeAsync = undefined;
    exports.safeDecodeAsync = undefined;
    const fnResult = fn(_mod9211);
    exports.parse = fnResult._parse(_mod9281.ZodRealError);
    exports.parseAsync = fnResult._parseAsync(_mod9281.ZodRealError);
    exports.safeParse = fnResult._safeParse(_mod9281.ZodRealError);
    exports.safeParseAsync = fnResult._safeParseAsync(_mod9281.ZodRealError);
    exports.encode = fnResult._encode(_mod9281.ZodRealError);
    exports.decode = fnResult._decode(_mod9281.ZodRealError);
    exports.encodeAsync = fnResult._encodeAsync(_mod9281.ZodRealError);
    exports.decodeAsync = fnResult._decodeAsync(_mod9281.ZodRealError);
    exports.safeEncode = fnResult._safeEncode(_mod9281.ZodRealError);
    exports.safeDecode = fnResult._safeDecode(_mod9281.ZodRealError);
    exports.safeEncodeAsync = fnResult._safeEncodeAsync(_mod9281.ZodRealError);
    exports.safeDecodeAsync = fnResult._safeDecodeAsync(_mod9281.ZodRealError);
  } else {
    const _Object2 = Object;
  }
} else {
  let _Object = Object;
}
