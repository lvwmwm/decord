// Module ID: 12176
// Function ID: 12177
// Name: default_1
// Dependencies: [12160]
// Exports: default

// Module 12176 (default_1)
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
    const obj2 = { string: { unit: "\u067E\u06CC\u062A", verb: "\u0628\u06CE\u062A" }, file: { unit: "\u0628\u0627\u06CC\u062A", verb: "\u0628\u06CE\u062A" }, array: { unit: "\u062F\u0627\u0646\u06D5", verb: "\u0628\u06CE\u062A" }, set: { unit: "\u062F\u0627\u0646\u06D5", verb: "\u0628\u06CE\u062A" }, map: { unit: "\u062F\u0627\u0646\u06D5", verb: "\u0628\u06CE\u062A" } };
    closure_1 = { regex: "regex", email: "\u0626\u06CC\u0645\u06D5\u06CC\u06B5", url: "\u0628\u06D5\u0633\u062A\u06D5\u0631 (URL)", emoji: "\u0626\u06CC\u0645\u06C6\u062C\u06CC", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "\u0695\u06CE\u06A9\u06D5\u0648\u062A \u0648 \u06A9\u0627\u062A", date: "\u0695\u06CE\u06A9\u06D5\u0648\u062A", time: "\u06A9\u0627\u062A", duration: "\u0645\u0627\u0648\u06D5", ipv4: "\u0646\u0627\u0648\u0646\u06CC\u0634\u0627\u0646\u06CC IPv4", ipv6: "\u0646\u0627\u0648\u0646\u06CC\u0634\u0627\u0646\u06CC IPv6", mac: "\u0646\u0627\u0648\u0646\u06CC\u0634\u0627\u0646\u06CC MAC", cidrv4: "\u0645\u06D5\u0648\u062F\u0627\u06CC IPv4", cidrv6: "\u0645\u06D5\u0648\u062F\u0627\u06CC IPv6", base64: "\u062F\u06D5\u0642\u06CC base64", base64url: "\u062F\u06D5\u0642\u06CC base64url", json_string: "\u062F\u06D5\u0642\u06CC JSON", e164: "\u0698\u0645\u0627\u0631\u06D5\u06CC E.164", credit_card: "\u0698\u0645\u0627\u0631\u06D5\u06CC \u06A9\u0627\u0631\u062A\u06CC \u06A9\u0631\u06CE\u062F\u06CC\u062A", currency_code: "\u06A9\u06C6\u062F\u06CC \u062F\u0631\u0627\u0648", iban: "IBAN", jwt: "JWT", template_literal: "\u062A\u06CE\u06A9\u0631\u062F\u06D5" };
    let closure_2 = { nan: "NaN", string: "\u0646\u0648\u0648\u0633\u06CC\u0646", number: "\u0698\u0645\u0627\u0631\u06D5", boolean: "boolean", array: "array", object: "object", date: "\u0695\u06CE\u06A9\u06D5\u0648\u062A", integer: "\u0698\u0645\u0627\u0631\u06D5", float: "\u0698\u0645\u0627\u0631\u06D5", null: "null", undefined: "undefined", function: "function", symbol: "symbol", unknown: "unknown", promise: "promise", void: "void", never: "never", map: "map", set: "set" };
    return {
      localeError: (code) => {
          switch (code.code) {
            case "invalid_type":
            {
              let expected = closure_2[code.expected];
              if (expected == null) {
                expected = code.expected;
              }
              captureStackTrace.parsedType(code.input);
              const parsedTypeResult = tmp38;
              const items = ["\u0627", "\u0648", "\u06C6", "\u0648\u0648", "\u06D5", "\u06CC", "\u06CE"];
              let str41 = "\u06D5";
              if (items.some((item) => parsedTypeResult.endsWith(item))) {
                str41 = "\u06CC\u06D5";
              }
              let str44 = "\u062F\u0627\u0648\u0627\u06A9\u0631\u0627\u0648\u06D5";
              if ("null" !== parsedTypeResult) {
                str44 = "\u062F\u0627\u0648\u0627\u06A9\u0631\u0627\u0648\u06D5";
                if ("undefined" !== parsedTypeResult) {
                  let str46 = "";
                  if (!tmp40) {
                    str46 = str41;
                  }
                  const _HermesInternal17 = HermesInternal;
                  str44 = "\u0686\u0627\u0648\u06D5\u0695\u0648\u0627\u0646\u06A9\u0631\u0627\u0648\u06D5 " + expected + " \u0628\u06CE\u062A\u060C \u0628\u06D5\u06B5\u0627\u0645 " + tmp38 + str46;
                }
              }
              return str44;
            }
            case "invalid_value":
            {
              let combined;
              if (1 === code.values.length) {
                const _HermesInternal16 = HermesInternal;
                combined = "\u0628\u06D5\u0647\u0627\u06A9\u06D5 \u0646\u0627\u062F\u0631\u0648\u0648\u0633\u062A\u06D5: \u0686\u0627\u0648\u06D5\u0695\u0648\u0627\u0646\u06A9\u0631\u0627\u0648\u06D5 " + captureStackTrace.stringifyPrimitive(code.values[0]) + " \u0628\u06CE\u062A";
              } else {
                const _HermesInternal15 = HermesInternal;
                combined = "\u0647\u06D5\u06B5\u0628\u0698\u0627\u0631\u062F\u06D5\u06CC \u0646\u0627\u062F\u0631\u0648\u0633\u062A: \u0686\u0627\u0648\u06D5\u0695\u0648\u0627\u0646\u06A9\u0631\u0627\u0648\u06D5 \u06CC\u06D5\u06A9\u06CE\u06A9 \u0628\u06CE\u062A \u0644\u06D5 " + captureStackTrace.joinValues(code.values, "|");
              }
              return combined;
            }
            case "too_big":
            {
              let combined1;
              const str30 = code.maximum;
              const str1 = str30.toString();
              if (obj2[code.origin] ?? null) {
                const _HermesInternal14 = HermesInternal;
                combined1 = "\u067E\u06CE\u0648\u06CC\u0633\u062A\u06D5 \u0628\u06D5 \u0644\u0627\u06CC\u06D5\u0646\u06CC \u0632\u06C6\u0631\u06D5\u0648\u06D5 " + str1 + " " + tmp23.unit + " " + tmp23.verb;
              } else {
                const _HermesInternal13 = HermesInternal;
                combined1 = "\u067E\u06CE\u0648\u06CC\u0633\u062A\u06D5 \u0628\u06D5 \u0644\u0627\u06CC\u06D5\u0646\u06CC \u0632\u06C6\u0631\u06D5\u0648\u06D5 " + str1 + " \u0628\u06CE\u062A";
              }
              return combined1;
            }
            case "too_small":
            {
              let combined2;
              const str23 = code.minimum;
              const str52 = str23.toString();
              if (obj2[code.origin] ?? null) {
                const _HermesInternal12 = HermesInternal;
                combined2 = "\u067E\u06CE\u0648\u06CC\u0633\u062A\u06D5 \u0628\u06D5 \u0644\u0627\u06CC\u06D5\u0646\u06CC \u06A9\u06D5\u0645\u06D5\u0648\u06D5 " + str52 + " " + tmp16.unit + " " + tmp16.verb;
              } else {
                const _HermesInternal11 = HermesInternal;
                combined2 = "\u067E\u06CE\u0648\u06CC\u0633\u062A\u06D5 \u0628\u06D5 \u0644\u0627\u06CC\u06D5\u0646\u06CC \u06A9\u06D5\u0645\u06D5\u0648\u06D5 " + str52 + " \u0628\u06CE\u062A";
              }
              return combined2;
            }
            case "invalid_format":
            {
              let combined3;
              if ("starts_with" === code.format) {
                const _HermesInternal10 = HermesInternal;
                combined3 = "\u062F\u06D5\u0642\u06CC \u0646\u0627\u062F\u0631\u0648\u0633\u062A: \u067E\u06CE\u0648\u06CC\u0633\u062A\u06D5 \u062F\u06D5\u0633\u062A\u067E\u06CE\u0628\u06A9\u0627\u062A \u0628\u06D5 \"" + code.prefix + "\"";
              } else if ("ends_with" === code.format) {
                const _HermesInternal9 = HermesInternal;
                combined3 = "\u062F\u06D5\u0642\u06CC \u0646\u0627\u062F\u0631\u0648\u0633\u062A: \u067E\u06CE\u0648\u06CC\u0633\u062A\u06D5 \u06A9\u06C6\u062A\u0627\u06CC\u06CC\u0628\u06CE\u062A \u0628\u06D5 \"" + code.suffix + "\"";
              } else if ("includes" === code.format) {
                const _HermesInternal8 = HermesInternal;
                combined3 = "\u062F\u06D5\u0642\u06CC \u0646\u0627\u062F\u0631\u0648\u0633\u062A: \u067E\u06CE\u0648\u06CC\u0633\u062A\u06D5 \"" + code.includes + "\" \u0644\u06D5\u062E\u06C6\u0628\u06AF\u0631\u06CE\u062A";
              } else if ("regex" === code.format) {
                const _HermesInternal7 = HermesInternal;
                combined3 = "\u062F\u06D5\u0642\u06CC \u0646\u0627\u062F\u0631\u0648\u0633\u062A: \u067E\u06CE\u0648\u06CC\u0633\u062A\u06D5 \u0644\u06D5\u06AF\u06D5\u06B5 \u067E\u0627\u062A\u06CE\u0631\u0646\u06CC " + code.pattern + " \u0628\u06AF\u0648\u0646\u062C\u06CE\u062A";
              } else {
                const format = closure_1[code.format] ?? code.format;
                const _HermesInternal6 = HermesInternal;
                combined3 = "\u0628\u06D5\u0647\u0627\u06CC " + format + " \u0646\u0627\u062F\u0631\u0648\u0633\u062A\u06D5";
              }
              return combined3;
            }
            case "not_multiple_of":
            {
              const _HermesInternal5 = HermesInternal;
              return "\u0698\u0645\u0627\u0631\u06D5\u06CC \u0646\u0627\u062F\u0631\u0648\u0633\u062A: \u062F\u06D5\u0628\u06CE\u062A \u0686\u06D5\u0646\u062F \u0647\u06CE\u0646\u062F\u06D5 \u0628\u06CE\u062A \u0628\u06C6 " + code.divisor;
            }
            case "unrecognized_keys":
            {
              const _HermesInternal4 = HermesInternal;
              return "\u06A9\u0644\u06CC\u0644\u06CC \u0646\u06D5\u0646\u0627\u0633\u0631\u0627\u0648: " + captureStackTrace.joinValues(code.keys, ", ");
            }
            case "invalid_key":
            {
              const _HermesInternal3 = HermesInternal;
              return "\u06A9\u0644\u06CC\u0644\u06CC \u0646\u0627\u062F\u0631\u0648\u0633\u062A \u0644\u06D5 " + code.origin;
            }
            case "invalid_union":
            {
              let str4 = "\u06CC\u06D5\u06A9\u06AF\u0631\u062A\u0646\u06CC \u0646\u0627\u062F\u0631\u0648\u0633\u062A";
              if (code.options) {
                const _Array = Array;
                str4 = "\u06CC\u06D5\u06A9\u06AF\u0631\u062A\u0646\u06CC \u0646\u0627\u062F\u0631\u0648\u0633\u062A";
                if (Array.isArray(code.options)) {
                  str4 = "\u06CC\u06D5\u06A9\u06AF\u0631\u062A\u0646\u06CC \u0646\u0627\u062F\u0631\u0648\u0633\u062A";
                  if (code.options.length > 0) {
                    const options = code.options;
                    const mapped = options.map((item) => "'" + item + "'");
                    const _HermesInternal2 = HermesInternal;
                    str4 = "\u0628\u06D5\u0647\u0627\u06CC \u0646\u06D5\u0646\u0627\u0633\u0631\u0627\u0648 \u0647\u06D5\u06CC\u06D5. \u0628\u06D5\u0647\u0627\u06CC \u0686\u0627\u0648\u06D5\u0695\u0648\u0627\u0646\u06A9\u0631\u0627\u0648: " + mapped.join(" | ");
                  }
                }
              }
              return str4;
            }
            case "invalid_element":
            {
              const _HermesInternal = HermesInternal;
              return "" + code.origin + " \u0628\u06D5\u0647\u0627\u06A9\u06D5 \u0646\u0627\u062F\u0631\u0648\u0633\u062A\u06D5";
            }
            default:
            {
              return "\u062A\u06CE\u06A9\u0631\u062F\u06D5\u06CC \u0646\u0627\u062F\u0631\u0648\u0633\u062A";
            }
          }
        }
    };
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
