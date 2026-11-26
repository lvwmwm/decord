// Module ID: 12190
// Function ID: 12191
// Name: default_1
// Dependencies: [12160]
// Exports: default

// Module 12190 (default_1)
import captureStackTrace2 from "captureStackTrace" /* 12160 */;

let hasOwnProperty;

const self = this;
let tmp = this && self.__createBinding;
if (!tmp) {
  let _Object = Object;
  tmp = Object.create ? ((arg0, __esModule, arg2, arg3) => {
    function get() {
      return __esModule[closure_1];
    }
    closure_0 = __esModule;
    closure_1 = arg2;
    let tmp = arg3;
    if (undefined === arg3) {
      tmp = arg2;
    }
    let ownPropertyDescriptor = Object.getOwnPropertyDescriptor(__esModule, arg2);
    let tmp3 = ownPropertyDescriptor;
    if (tmp3) {
      let tmp4;
      if ("get" in ownPropertyDescriptor) {
        tmp4 = !__esModule.__esModule;
      } else {
        tmp4 = ownPropertyDescriptor.writable || ownPropertyDescriptor.configurable;
      }
      tmp3 = !tmp4;
    }
    if (!tmp3) {
      ownPropertyDescriptor = { enumerable: true, get };
      const obj = { enumerable: true, get };
    }
    Object.defineProperty(arg0, tmp, ownPropertyDescriptor);
  }) : ((arg0, arg1, arg2, arg3) => {
    let tmp = arg3;
    if (undefined === arg3) {
      tmp = arg2;
    }
    arg0[tmp] = arg1[arg2];
  });
}
let closure_0 = tmp;
let tmp3 = self && self.__setModuleDefault;
if (!tmp3) {
  let tmp4 = globalThis;
  const _Object2 = Object;
  tmp3 = Object.create ? ((arg0, value) => {
    const obj = { enumerable: true, value };
    Object.defineProperty(arg0, "default", obj);
  }) : ((arg0, arg1) => {
    arg0.default = arg1;
  });
}
let closure_1 = tmp3;
let tmp5 = self && self.__importStar || ((__esModule) => {
  const tmp = __esModule;
  if (tmp) {
    if (__esModule.__esModule) {
      return __esModule;
    }
  }
  const obj = {};
  if (null != __esModule) {
    for (const key10009 in __esModule) {
      let callResult = "default" !== key10009;
      if (callResult) {
        let _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        callResult = hasOwnProperty.call(__esModule, key10009);
      }
      if (!callResult) {
        continue;
      } else {
        let tmp6 = closure_0(obj, __esModule, key10009);
        continue;
      }
      continue;
    }
  }
  closure_1(obj, __esModule);
  return obj;
});
const captureStackTrace = tmp5(captureStackTrace2);
function error() {

}

export default function default_1() {
  if (typeof error === "function") {
    const obj2 = { string: { unit: "\u0905\u0915\u094D\u0937\u0930", verb: "\u0930\u0916\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F" }, file: { unit: "\u092C\u093E\u0907\u091F\u094D\u0938", verb: "\u0930\u0916\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F" }, array: { unit: "\u0924\u0924\u094D\u0935", verb: "\u0930\u0916\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F" }, set: { unit: "\u0924\u0924\u094D\u0935", verb: "\u0930\u0916\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F" }, map: { unit: "\u092A\u094D\u0930\u0935\u093F\u0937\u094D\u091F\u093F\u092F\u093E\u0901", verb: "\u0930\u0916\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F" } };
    closure_1 = { regex: "\u0907\u0928\u092A\u0941\u091F", email: "\u0908\u092E\u0947\u0932 \u092A\u0924\u093E", url: "URL", emoji: "\u0907\u092E\u094B\u091C\u0940", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO \u0924\u093F\u0925\u093F \u0914\u0930 \u0938\u092E\u092F", date: "ISO \u0924\u093F\u0925\u093F", time: "ISO \u0938\u092E\u092F", duration: "ISO \u0905\u0935\u0927\u093F", ipv4: "IPv4 \u092A\u0924\u093E", ipv6: "IPv6 \u092A\u0924\u093E", mac: "MAC \u092A\u0924\u093E", cidrv4: "IPv4 \u0936\u094D\u0930\u0947\u0923\u0940", cidrv6: "IPv6 \u0936\u094D\u0930\u0947\u0923\u0940", base64: "Base64-\u090F\u0928\u094D\u0915\u094B\u0921\u0947\u0921 \u0938\u094D\u091F\u094D\u0930\u093F\u0902\u0917", base64url: "Base64URL-\u090F\u0928\u094D\u0915\u094B\u0921\u0947\u0921 \u0938\u094D\u091F\u094D\u0930\u093F\u0902\u0917", json_string: "JSON \u0938\u094D\u091F\u094D\u0930\u093F\u0902\u0917", e164: "E.164 \u0938\u0902\u0916\u094D\u092F\u093E", credit_card: "\u0915\u094D\u0930\u0947\u0921\u093F\u091F \u0915\u093E\u0930\u094D\u0921 \u0938\u0902\u0916\u094D\u092F\u093E", currency_code: "\u092E\u0941\u0926\u094D\u0930\u093E \u0915\u094B\u0921", iban: "IBAN", jwt: "JWT", template_literal: "\u0907\u0928\u092A\u0941\u091F" };
    let closure_2 = { nan: "NaN" };
    return {
      localeError: (code) => {
          switch (code.code) {
            case "invalid_type":
            {
              let expected = closure_2[code.expected];
              const tmp41 = closure_2;
              if (expected == null) {
                expected = code.expected;
              }
              const parsedTypeResult = captureStackTrace.parsedType(code.input);
              const _HermesInternal17 = HermesInternal;
              const tmp45 = tmp41[parsedTypeResult] ?? parsedTypeResult;
              return "\u0905\u092E\u093E\u0928\u094D\u092F \u0907\u0928\u092A\u0941\u091F: \u0905\u092A\u0947\u0915\u094D\u0937\u093F\u0924 " + expected + ", \u092A\u094D\u0930\u093E\u092A\u094D\u0924 " + tmp45;
            }
            case "invalid_value":
            {
              let combined;
              if (1 === code.values.length) {
                const _HermesInternal16 = HermesInternal;
                combined = "\u0905\u092E\u093E\u0928\u094D\u092F \u0907\u0928\u092A\u0941\u091F: \u0905\u092A\u0947\u0915\u094D\u0937\u093F\u0924 " + captureStackTrace.stringifyPrimitive(code.values[0]);
              } else {
                const _HermesInternal15 = HermesInternal;
                combined = "\u0905\u092E\u093E\u0928\u094D\u092F \u0935\u093F\u0915\u0932\u094D\u092A: \u0905\u092A\u0947\u0915\u094D\u0937\u093F\u0924 \u092E\u093E\u0928\u094B\u0902 \u092E\u0947\u0902 \u0938\u0947 \u090F\u0915 " + captureStackTrace.joinValues(code.values, "|");
              }
              return combined;
            }
            case "too_big":
            {
              let combined1;
              let str34 = "<";
              if (code.inclusive) {
                str34 = "<=";
              }
              let str35 = code.origin;
              if (obj2[code.origin] ?? null) {
                if (str35 == null) {
                  str35 = "\u092E\u093E\u0928";
                }
                const _HermesInternal14 = HermesInternal;
                combined1 = "\u092C\u0939\u0941\u0924 \u092C\u0921\u093C\u093E: \u0905\u092A\u0947\u0915\u094D\u0937\u093F\u0924 \u0925\u093E \u0915\u093F " + str35 + " \u092E\u0947\u0902 " + str34 + code.maximum + " " + tmp27.unit + " \u0939\u094B\u0902";
              } else {
                let str36 = str35;
                if (str35 == null) {
                  str36 = "\u092E\u093E\u0928";
                }
                const _HermesInternal13 = HermesInternal;
                combined1 = "\u092C\u0939\u0941\u0924 \u092C\u0921\u093C\u093E: \u0905\u092A\u0947\u0915\u094D\u0937\u093F\u0924 \u0925\u093E \u0915\u093F " + str36 + " " + str34 + code.maximum + " \u0939\u094B";
              }
              return combined1;
            }
            case "too_small":
            {
              let combined2;
              let minimum;
              let origin;
              let str26 = ">";
              if (code.inclusive) {
                str26 = ">=";
              }
              ({ origin, minimum } = code);
              if (obj2[code.origin] ?? null) {
                const _HermesInternal12 = HermesInternal;
                combined2 = "\u092C\u0939\u0941\u0924 \u091B\u094B\u091F\u093E: \u0905\u092A\u0947\u0915\u094D\u0937\u093F\u0924 \u0925\u093E \u0915\u093F " + origin + " \u092E\u0947\u0902 " + str26 + minimum + " " + tmp16.unit + " \u0939\u094B\u0902";
              } else {
                const _HermesInternal11 = HermesInternal;
                combined2 = "\u092C\u0939\u0941\u0924 \u091B\u094B\u091F\u093E: \u0905\u092A\u0947\u0915\u094D\u0937\u093F\u0924 \u0925\u093E \u0915\u093F " + origin + " " + str26 + minimum + " \u0939\u094B";
              }
              return combined2;
            }
            case "invalid_format":
            {
              let combined3;
              if ("starts_with" === code.format) {
                const _HermesInternal10 = HermesInternal;
                combined3 = "\u0905\u092E\u093E\u0928\u094D\u092F \u0938\u094D\u091F\u094D\u0930\u093F\u0902\u0917: \"" + code.prefix + "\" \u0938\u0947 \u0936\u0941\u0930\u0942 \u0939\u094B\u0928\u093E \u091A\u093E\u0939\u093F\u090F";
              } else if ("ends_with" === code.format) {
                const _HermesInternal9 = HermesInternal;
                combined3 = "\u0905\u092E\u093E\u0928\u094D\u092F \u0938\u094D\u091F\u094D\u0930\u093F\u0902\u0917: \"" + code.suffix + "\" \u092A\u0930 \u0938\u092E\u093E\u092A\u094D\u0924 \u0939\u094B\u0928\u093E \u091A\u093E\u0939\u093F\u090F";
              } else if ("includes" === code.format) {
                const _HermesInternal8 = HermesInternal;
                combined3 = "\u0905\u092E\u093E\u0928\u094D\u092F \u0938\u094D\u091F\u094D\u0930\u093F\u0902\u0917: \u0907\u0938\u092E\u0947\u0902 \"" + code.includes + "\" \u0936\u093E\u092E\u093F\u0932 \u0939\u094B\u0928\u093E \u091A\u093E\u0939\u093F\u090F";
              } else if ("regex" === code.format) {
                const _HermesInternal7 = HermesInternal;
                combined3 = "\u0905\u092E\u093E\u0928\u094D\u092F \u0938\u094D\u091F\u094D\u0930\u093F\u0902\u0917: \u092A\u0948\u091F\u0930\u094D\u0928 " + code.pattern + " \u0938\u0947 \u092E\u0947\u0932 \u0916\u093E\u0928\u093E \u091A\u093E\u0939\u093F\u090F";
              } else {
                const format = closure_1[code.format] ?? code.format;
                const _HermesInternal6 = HermesInternal;
                combined3 = "\u0905\u092E\u093E\u0928\u094D\u092F " + format;
              }
              return combined3;
            }
            case "not_multiple_of":
            {
              const _HermesInternal5 = HermesInternal;
              return "\u0905\u092E\u093E\u0928\u094D\u092F \u0938\u0902\u0916\u094D\u092F\u093E: \u092F\u0939 " + code.divisor + " \u0915\u093E \u0917\u0941\u0923\u091C \u0939\u094B\u0928\u093E \u091A\u093E\u0939\u093F\u090F";
            }
            case "unrecognized_keys":
            {
              let str9 = "";
              if (code.keys.length > 1) {
                str9 = "\u092F\u093E\u0901";
              }
              const _HermesInternal4 = HermesInternal;
              return "\u0905\u092A\u0930\u093F\u091A\u093F\u0924 \u0915\u0941\u0902\u091C\u0940" + str9 + ": " + captureStackTrace.joinValues(code.keys, ", ");
            }
            case "invalid_key":
            {
              const _HermesInternal3 = HermesInternal;
              return "\u0905\u092E\u093E\u0928\u094D\u092F \u0915\u0941\u0902\u091C\u0940: " + code.origin + " \u092E\u0947\u0902";
            }
            case "invalid_union":
            {
              let str4 = "\u0905\u092E\u093E\u0928\u094D\u092F \u0907\u0928\u092A\u0941\u091F";
              if (code.options) {
                const _Array = Array;
                str4 = "\u0905\u092E\u093E\u0928\u094D\u092F \u0907\u0928\u092A\u0941\u091F";
                if (Array.isArray(code.options)) {
                  str4 = "\u0905\u092E\u093E\u0928\u094D\u092F \u0907\u0928\u092A\u0941\u091F";
                  if (code.options.length > 0) {
                    const options = code.options;
                    const mapped = options.map((item) => "'" + item + "'");
                    const _HermesInternal2 = HermesInternal;
                    str4 = "\u0905\u092E\u093E\u0928\u094D\u092F \u0921\u093F\u0938\u094D\u0915\u094D\u0930\u093F\u092E\u093F\u0928\u0947\u091F\u0930 \u092E\u093E\u0928: \u0905\u092A\u0947\u0915\u094D\u0937\u093F\u0924 " + mapped.join(" | ");
                  }
                }
              }
              return str4;
            }
            case "invalid_element":
            {
              const _HermesInternal = HermesInternal;
              return "\u0905\u092E\u093E\u0928\u094D\u092F \u092E\u093E\u0928: " + code.origin + " \u092E\u0947\u0902";
            }
            default:
            {
              return "\u0905\u092E\u093E\u0928\u094D\u092F \u0907\u0928\u092A\u0941\u091F";
            }
          }
        }
    };
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
