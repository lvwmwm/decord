// Module ID: 12181
// Function ID: 12182
// Name: default_1
// Dependencies: [12160]
// Exports: default

// Module 12181 (default_1)
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
    const obj2 = { string: { unit: "characters", verb: "to have" }, file: { unit: "bytes", verb: "to have" }, array: { unit: "items", verb: "to have" }, set: { unit: "items", verb: "to have" }, map: { unit: "entries", verb: "to have" } };
    closure_1 = { regex: "input", email: "email address", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO datetime", date: "ISO date", time: "ISO time", duration: "ISO duration", ipv4: "IPv4 address", ipv6: "IPv6 address", mac: "MAC address", cidrv4: "IPv4 range", cidrv6: "IPv6 range", base64: "base64-encoded string", base64url: "base64url-encoded string", json_string: "JSON string", e164: "E.164 number", currency_code: "currency code", credit_card: "credit card number", iban: "IBAN", jwt: "JWT", template_literal: "input" };
    let closure_2 = { nan: "NaN" };
    return {
      localeError: (code) => {
          switch (code.code) {
            case "invalid_type":
            {
              const expected = code.expected;
              if ("number" === expected) {
                if (typeof undefined === "number") {
                  let StringResult;
                  const _Number = Number;
                  if (!Number.isFinite(undefined)) {
                    const _String = String;
                    StringResult = String(undefined);
                  }
                  const parsedTypeResult = captureStackTrace.parsedType(code.input);
                  const input = code.input;
                  if ("number" === parsedTypeResult) {
                    if (typeof input === "number") {
                      let StringResult1;
                      const _Number2 = Number;
                      if (!Number.isFinite(input)) {
                        const _String2 = String;
                        StringResult1 = String(input);
                      }
                      const _HermesInternal17 = HermesInternal;
                      return "Invalid input: expected " + StringResult + ", received " + StringResult1;
                    }
                  }
                  StringResult1 = closure_2[parsedTypeResult] ?? parsedTypeResult;
                  const tmp53 = closure_2[parsedTypeResult] ?? parsedTypeResult;
                }
              }
              StringResult = closure_2[expected] ?? expected;
              const tmp47 = closure_2[expected] ?? expected;
              break;
            }
            case "invalid_value":
            {
              let combined;
              if (1 === code.values.length) {
                const _HermesInternal16 = HermesInternal;
                combined = "Invalid input: expected " + captureStackTrace.stringifyPrimitive(code.values[0]);
              } else {
                const _HermesInternal15 = HermesInternal;
                combined = "Invalid option: expected one of " + captureStackTrace.joinValues(code.values, "|");
              }
              return combined;
            }
            case "too_big":
            {
              let combined1;
              let str28 = "exactly ";
              if (!code.exact) {
                let str29 = "<";
                if (code.inclusive) {
                  str29 = "<=";
                }
                str28 = str29;
              }
              let str30 = code.origin;
              if (obj2[code.origin] ?? null) {
                if (str30 == null) {
                  str30 = "value";
                }
                const str35 = code.maximum;
                const _HermesInternal14 = HermesInternal;
                const str1 = str35.toString();
                const str36 = (obj2[code.origin] ?? null).unit ?? "elements";
                combined1 = "Too big: expected " + str30 + " to have " + str28 + str1 + " " + str36;
              } else {
                let str31 = str30;
                if (str30 == null) {
                  str31 = "value";
                }
                const _HermesInternal13 = HermesInternal;
                const str32 = code.maximum;
                combined1 = "Too big: expected " + str31 + " to be " + str28 + str32.toString();
              }
              return combined1;
            }
            case "too_small":
            {
              let combined2;
              let minimum;
              let origin;
              let str21 = "exactly ";
              if (!code.exact) {
                let str22 = ">";
                if (code.inclusive) {
                  str22 = ">=";
                }
                str21 = str22;
              }
              ({ origin, minimum } = code);
              const str49 = minimum.toString();
              if (obj2[code.origin] ?? null) {
                const _HermesInternal12 = HermesInternal;
                combined2 = "Too small: expected " + origin + " to have " + str21 + str49 + " " + tmp16.unit;
              } else {
                const _HermesInternal11 = HermesInternal;
                combined2 = "Too small: expected " + origin + " to be " + str21 + str49;
              }
              return combined2;
            }
            case "invalid_format":
            {
              let combined3;
              if ("starts_with" === code.format) {
                const _HermesInternal10 = HermesInternal;
                combined3 = "Invalid string: must start with \"" + code.prefix + "\"";
              } else if ("ends_with" === code.format) {
                const _HermesInternal9 = HermesInternal;
                combined3 = "Invalid string: must end with \"" + code.suffix + "\"";
              } else if ("includes" === code.format) {
                const _HermesInternal8 = HermesInternal;
                combined3 = "Invalid string: must include \"" + code.includes + "\"";
              } else if ("regex" === code.format) {
                const _HermesInternal7 = HermesInternal;
                combined3 = "Invalid string: must match pattern " + code.pattern;
              } else {
                const format = closure_1[code.format] ?? code.format;
                const _HermesInternal6 = HermesInternal;
                combined3 = "Invalid " + format;
              }
              return combined3;
            }
            case "not_multiple_of":
            {
              const _HermesInternal5 = HermesInternal;
              return "Invalid number: must be a multiple of " + code.divisor;
            }
            case "unrecognized_keys":
            {
              let str6 = "";
              if (code.keys.length > 1) {
                str6 = "s";
              }
              const _HermesInternal4 = HermesInternal;
              return "Unrecognized key" + str6 + ": " + captureStackTrace.joinValues(code.keys, ", ");
            }
            case "invalid_key":
            {
              const _HermesInternal3 = HermesInternal;
              return "Invalid key in " + code.origin;
            }
            case "invalid_union":
            {
              let str2;
              if (code.options) {
                const _Array = Array;
                if (Array.isArray(code.options)) {
                  if (code.options.length > 0) {
                    const options = code.options;
                    const mapped = options.map((item) => "'" + item + "'");
                    const _HermesInternal2 = HermesInternal;
                    str2 = "Invalid discriminator value. Expected " + mapped.join(" | ");
                  }
                  return str2;
                }
              }
              str2 = "Invalid input";
              if (false === code.inclusive) {
                str2 = "Invalid input: more than one option matched";
              }
              break;
            }
            case "invalid_element":
            {
              const _HermesInternal = HermesInternal;
              return "Invalid value in " + code.origin;
            }
            default:
            {
              return "Invalid input";
            }
          }
        }
    };
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
