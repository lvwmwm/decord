// Module ID: 12078
// Function ID: 94610
// Dependencies: [12009, 12079]

// Module 12078
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
    const fnResult = fn(require("module_12009"));
    exports.parse = fnResult._parse(require("module_12079").ZodRealError);
    exports.parseAsync = fnResult._parseAsync(require("module_12079").ZodRealError);
    exports.safeParse = fnResult._safeParse(require("module_12079").ZodRealError);
    exports.safeParseAsync = fnResult._safeParseAsync(require("module_12079").ZodRealError);
    exports.encode = fnResult._encode(require("module_12079").ZodRealError);
    exports.decode = fnResult._decode(require("module_12079").ZodRealError);
    exports.encodeAsync = fnResult._encodeAsync(require("module_12079").ZodRealError);
    exports.decodeAsync = fnResult._decodeAsync(require("module_12079").ZodRealError);
    exports.safeEncode = fnResult._safeEncode(require("module_12079").ZodRealError);
    exports.safeDecode = fnResult._safeDecode(require("module_12079").ZodRealError);
    exports.safeEncodeAsync = fnResult._safeEncodeAsync(require("module_12079").ZodRealError);
    exports.safeDecodeAsync = fnResult._safeDecodeAsync(require("module_12079").ZodRealError);
  } else {
    const _Object2 = Object;
  }
} else {
  let _Object = Object;
}
