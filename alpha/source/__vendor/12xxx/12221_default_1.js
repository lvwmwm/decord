// Module ID: 12221
// Function ID: 12222
// Name: default_1
// Dependencies: [12160]
// Exports: default

// Module 12221 (default_1)
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
    const obj2 = { string: { unit: "\u0430\u043B\u043E\u043C\u0430\u0442", verb: "\u0434\u043E\u0448\u0442\u0430 \u0431\u043E\u0448\u0430\u0434" }, file: { unit: "\u0431\u0430\u0439\u0442", verb: "\u0434\u043E\u0448\u0442\u0430 \u0431\u043E\u0448\u0430\u0434" }, array: { unit: "\u0443\u043D\u0441\u0443\u0440", verb: "\u0434\u043E\u0448\u0442\u0430 \u0431\u043E\u0448\u0430\u0434" }, set: { unit: "\u0443\u043D\u0441\u0443\u0440", verb: "\u0434\u043E\u0448\u0442\u0430 \u0431\u043E\u0448\u0430\u0434" }, map: { unit: "\u0441\u0430\u0431\u0442", verb: "\u0434\u043E\u0448\u0442\u0430 \u0431\u043E\u0448\u0430\u0434" } };
    closure_1 = { regex: "\u0432\u0443\u0440\u0443\u0434", email: "\u0441\u0443\u0440\u043E\u0493\u0430\u0438 email", url: "URL", emoji: "\u044D\u043C\u043E\u04B7\u0438", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "\u0441\u0430\u043D\u0430\u0432\u0443 \u0432\u0430\u049B\u0442\u0438 ISO", date: "\u0441\u0430\u043D\u0430\u0438 ISO", time: "\u0432\u0430\u049B\u0442\u0438 ISO", duration: "\u0434\u0430\u0432\u043E\u043C\u043D\u043E\u043A\u0438\u0438 ISO", ipv4: "\u0441\u0443\u0440\u043E\u0493\u0430\u0438 IPv4", ipv6: "\u0441\u0443\u0440\u043E\u0493\u0430\u0438 IPv6", mac: "\u0441\u0443\u0440\u043E\u0493\u0430\u0438 MAC", cidrv4: "\u043C\u0430\u04B3\u0434\u0443\u0434\u0430\u0438 IPv4", cidrv6: "\u043C\u0430\u04B3\u0434\u0443\u0434\u0430\u0438 IPv6", base64: "\u0441\u0430\u0442\u0440\u0438 \u0434\u0430\u0440 \u0444\u043E\u0440\u043C\u0430\u0442\u0438 base64", base64url: "\u0441\u0430\u0442\u0440\u0438 \u0434\u0430\u0440 \u0444\u043E\u0440\u043C\u0430\u0442\u0438 base64url", json_string: "\u0441\u0430\u0442\u0440\u0438 JSON", e164: "\u0440\u0430\u049B\u0430\u043C\u0438 E.164", credit_card: "\u0440\u0430\u049B\u0430\u043C\u0438 \u043A\u043E\u0440\u0442\u0438 \u043A\u0440\u0435\u0434\u0438\u0442\u04E3", currency_code: "\u0440\u0430\u043C\u0437\u0438 \u0430\u0441\u044A\u043E\u0440", iban: "IBAN", jwt: "JWT", template_literal: "\u0432\u0443\u0440\u0443\u0434" };
    let closure_2 = { nan: "NaN", number: "\u0440\u0430\u049B\u0430\u043C", string: "\u0441\u0430\u0442\u0440", array: "\u043C\u0430\u0441\u0441\u0438\u0432", object: "\u043E\u0431\u044A\u0435\u043A\u0442", date: "\u0441\u0430\u043D\u0430" };
    return {
      localeError: (code) => {
          switch (code.code) {
            case "invalid_type":
            {
              let expected = closure_2[code.expected];
              const tmp42 = closure_2;
              if (expected == null) {
                expected = code.expected;
              }
              const parsedTypeResult = captureStackTrace.parsedType(code.input);
              const _HermesInternal17 = HermesInternal;
              const tmp46 = tmp42[parsedTypeResult] ?? parsedTypeResult;
              return "\u0412\u0443\u0440\u0443\u0434\u0438 \u043D\u043E\u0434\u0443\u0440\u0443\u0441\u0442: " + expected + " \u0438\u043D\u0442\u0438\u0437\u043E\u0440 \u043C\u0435\u0440\u0430\u0444\u0442, " + tmp46 + " \u0433\u0438\u0440\u0438\u0444\u0442\u0430 \u0448\u0443\u0434";
            }
            case "invalid_value":
            {
              let combined;
              if (1 === code.values.length) {
                const _HermesInternal16 = HermesInternal;
                combined = "\u0412\u0443\u0440\u0443\u0434\u0438 \u043D\u043E\u0434\u0443\u0440\u0443\u0441\u0442: " + captureStackTrace.stringifyPrimitive(code.values[0]) + " \u0438\u043D\u0442\u0438\u0437\u043E\u0440 \u043C\u0435\u0440\u0430\u0444\u0442";
              } else {
                const _HermesInternal15 = HermesInternal;
                combined = "\u0418\u043D\u0442\u0438\u0445\u043E\u0431\u0438 \u043D\u043E\u0434\u0443\u0440\u0443\u0441\u0442: \u044F\u043A\u0435 \u0430\u0437 " + captureStackTrace.joinValues(code.values, "|") + " \u0438\u043D\u0442\u0438\u0437\u043E\u0440 \u043C\u0435\u0440\u0430\u0444\u0442";
              }
              return combined;
            }
            case "too_big":
            {
              let combined1;
              let str35 = "<";
              if (code.inclusive) {
                str35 = "<=";
              }
              let str36 = code.origin;
              if (obj2[code.origin] ?? null) {
                if (str36 == null) {
                  str36 = "\u049B\u0438\u043C\u0430\u0442";
                }
                const _HermesInternal14 = HermesInternal;
                const str42 = code.maximum;
                combined1 = "\u0425\u0435\u043B\u0435 \u043A\u0430\u043B\u043E\u043D: " + str36 + " \u0431\u043E\u044F\u0434 " + str35 + str42.toString() + " " + tmp28.unit + " " + tmp28.verb;
              } else {
                let str37 = str36;
                if (str36 == null) {
                  str37 = "\u049B\u0438\u043C\u0430\u0442";
                }
                const _HermesInternal13 = HermesInternal;
                const str38 = code.maximum;
                combined1 = "\u0425\u0435\u043B\u0435 \u043A\u0430\u043B\u043E\u043D: " + str37 + " \u0431\u043E\u044F\u0434 " + str35 + str38.toString() + " \u0431\u043E\u0448\u0430\u0434";
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
              const str1 = minimum.toString();
              if (obj2[code.origin] ?? null) {
                const _HermesInternal12 = HermesInternal;
                combined2 = "\u0425\u0435\u043B\u0435 \u0445\u0443\u0440\u0434: " + origin + " \u0431\u043E\u044F\u0434 " + str26 + str1 + " " + tmp16.unit + " " + tmp16.verb;
              } else {
                const _HermesInternal11 = HermesInternal;
                combined2 = "\u0425\u0435\u043B\u0435 \u0445\u0443\u0440\u0434: " + origin + " \u0431\u043E\u044F\u0434 " + str26 + str1 + " \u0431\u043E\u0448\u0430\u0434";
              }
              return combined2;
            }
            case "invalid_format":
            {
              let combined3;
              if ("starts_with" === code.format) {
                const _HermesInternal10 = HermesInternal;
                combined3 = "\u0421\u0430\u0442\u0440\u0438 \u043D\u043E\u0434\u0443\u0440\u0443\u0441\u0442: \u0431\u043E\u044F\u0434 \u0431\u043E \"" + code.prefix + "\" \u043E\u0493\u043E\u0437 \u0448\u0430\u0432\u0430\u0434";
              } else if ("ends_with" === code.format) {
                const _HermesInternal9 = HermesInternal;
                combined3 = "\u0421\u0430\u0442\u0440\u0438 \u043D\u043E\u0434\u0443\u0440\u0443\u0441\u0442: \u0431\u043E\u044F\u0434 \u0431\u043E \"" + code.suffix + "\" \u0430\u043D\u04B7\u043E\u043C \u0451\u0431\u0430\u0434";
              } else if ("includes" === code.format) {
                const _HermesInternal8 = HermesInternal;
                combined3 = "\u0421\u0430\u0442\u0440\u0438 \u043D\u043E\u0434\u0443\u0440\u0443\u0441\u0442: \u0431\u043E\u044F\u0434 \"" + code.includes + "\"-\u0440\u043E \u0434\u0430\u0440 \u0431\u0430\u0440 \u0433\u0438\u0440\u0430\u0434";
              } else if ("regex" === code.format) {
                const _HermesInternal7 = HermesInternal;
                combined3 = "\u0421\u0430\u0442\u0440\u0438 \u043D\u043E\u0434\u0443\u0440\u0443\u0441\u0442: \u0431\u043E\u044F\u0434 \u0431\u0430 \u043D\u0430\u043C\u0443\u043D\u0430\u0438 " + code.pattern + " \u043C\u0443\u0432\u043E\u0444\u0438\u049B\u0430\u0442 \u043A\u0443\u043D\u0430\u0434";
              } else {
                const format = closure_1[code.format] ?? code.format;
                const _HermesInternal6 = HermesInternal;
                combined3 = "" + format + "-\u0438 \u043D\u043E\u0434\u0443\u0440\u0443\u0441\u0442";
              }
              return combined3;
            }
            case "not_multiple_of":
            {
              const _HermesInternal5 = HermesInternal;
              return "\u0420\u0430\u049B\u0430\u043C\u0438 \u043D\u043E\u0434\u0443\u0440\u0443\u0441\u0442: \u0431\u043E\u044F\u0434 \u0431\u0430 " + code.divisor + " \u0431\u0435 \u0431\u0430\u049B\u0438\u044F \u0442\u0430\u049B\u0441\u0438\u043C \u0448\u0430\u0432\u0430\u0434";
            }
            case "unrecognized_keys":
            {
              let str8 = "\u0438";
              if (code.keys.length > 1) {
                str8 = "\u04B3\u043E\u0438";
              }
              const _HermesInternal4 = HermesInternal;
              return "\u041A\u0430\u043B\u0438\u0434" + str8 + " \u043D\u043E\u043C\u0430\u044A\u043B\u0443\u043C: " + captureStackTrace.joinValues(code.keys, ", ");
            }
            case "invalid_key":
            {
              const _HermesInternal3 = HermesInternal;
              return "\u041A\u0430\u043B\u0438\u0434\u0438 \u043D\u043E\u0434\u0443\u0440\u0443\u0441\u0442 \u0434\u0430\u0440 " + code.origin;
            }
            case "invalid_union":
            {
              let str3 = "\u0412\u0443\u0440\u0443\u0434\u0438 \u043D\u043E\u0434\u0443\u0440\u0443\u0441\u0442";
              if (code.options) {
                const _Array = Array;
                str3 = "\u0412\u0443\u0440\u0443\u0434\u0438 \u043D\u043E\u0434\u0443\u0440\u0443\u0441\u0442";
                if (Array.isArray(code.options)) {
                  str3 = "\u0412\u0443\u0440\u0443\u0434\u0438 \u043D\u043E\u0434\u0443\u0440\u0443\u0441\u0442";
                  if (code.options.length > 0) {
                    const options = code.options;
                    const mapped = options.map((item) => "'" + item + "'");
                    const _HermesInternal2 = HermesInternal;
                    str3 = "\u049A\u0438\u043C\u0430\u0442\u0438 \u043D\u043E\u0434\u0443\u0440\u0443\u0441\u0442\u0438 \u0434\u0438\u0441\u043A\u0440\u0438\u043C\u0438\u043D\u0430\u0442\u043E\u0440: " + mapped.join(" | ") + " \u0438\u043D\u0442\u0438\u0437\u043E\u0440 \u043C\u0435\u0440\u0430\u0444\u0442";
                  }
                }
              }
              return str3;
            }
            case "invalid_element":
            {
              const _HermesInternal = HermesInternal;
              return "\u049A\u0438\u043C\u0430\u0442\u0438 \u043D\u043E\u0434\u0443\u0440\u0443\u0441\u0442 \u0434\u0430\u0440 " + code.origin;
            }
            default:
            {
              return "\u0412\u0443\u0440\u0443\u0434\u0438 \u043D\u043E\u0434\u0443\u0440\u0443\u0441\u0442";
            }
          }
        }
    };
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
