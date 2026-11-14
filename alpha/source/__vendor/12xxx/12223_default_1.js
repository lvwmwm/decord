// Module ID: 12223
// Function ID: 12224
// Name: default_1
// Dependencies: [12160]
// Exports: default

// Module 12223 (default_1)
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
    const obj2 = { string: { unit: "simwol", verb: "bolmaly" }, file: { unit: "ba\u00FDt", verb: "bolmaly" }, array: { unit: "elementler", verb: "bolmaly" }, set: { unit: "elementler", verb: "bolmaly" }, map: { unit: "elementler", verb: "bolmaly" } };
    closure_1 = { regex: "giri\u015F", email: "e-po\u00E7ta salgysy", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO sene we wagt", date: "ISO sene", time: "ISO wagt", duration: "ISO wagt aralygy", ipv4: "IPv4 salgysy", ipv6: "IPv6 salgysy", mac: "MAC salgysy", cidrv4: "IPv4 aralygy", cidrv6: "IPv6 aralygy", base64: "base64 bilen \u015Fifrlenen setir", base64url: "base64url bilen \u015Fifrlenen setir", json_string: "JSON setiri", e164: "E.164 nomeri", credit_card: "kredit kartyny\u0148 nomeri", currency_code: "wal\u00FDuta kody", iban: "IBAN", jwt: "JWT", template_literal: "\u015Fablon" };
    let closure_2 = { nan: "NaN" };
    return {
      localeError: (code) => {
          switch (code.code) {
            case "invalid_type":
            {
              let expected = closure_2[code.expected];
              const tmp44 = closure_2;
              if (expected == null) {
                expected = code.expected;
              }
              const parsedTypeResult = captureStackTrace.parsedType(code.input);
              const _HermesInternal16 = HermesInternal;
              const tmp48 = tmp44[parsedTypeResult] ?? parsedTypeResult;
              return "N\u00E4dogry baha: gara\u015Fylan " + expected + " \u00FDerine " + tmp48 + " alyndy";
            }
            case "invalid_value":
            {
              let combined;
              if (1 === code.values.length) {
                const _HermesInternal15 = HermesInternal;
                combined = "N\u00E4dogry baha: " + captureStackTrace.stringifyPrimitive(code.values[0]) + " bolmaly";
              } else {
                const _HermesInternal14 = HermesInternal;
                combined = "N\u00E4dogry sa\u00FDlaw: a\u015Fakdakylardan biri bolmaly: " + captureStackTrace.joinValues(code.values, "|");
              }
              return combined;
            }
            case "too_big":
            {
              let combined1;
              let str32 = "<";
              if (code.inclusive) {
                str32 = "<=";
              }
              let str33 = code.origin;
              if (obj2[code.origin] ?? null) {
                if (str33 == null) {
                  str33 = "baha";
                }
                const str40 = code.maximum;
                const _HermesInternal13 = HermesInternal;
                const str1 = str40.toString();
                const str41 = (obj2[code.origin] ?? null).unit ?? "element";
                combined1 = "Has uly: gara\u015Fyl\u00FDan " + str33 + " " + str32 + " " + str1 + " " + str41;
              } else {
                let str34 = str33;
                if (str33 == null) {
                  str34 = "baha";
                }
                const _HermesInternal12 = HermesInternal;
                const str35 = code.maximum;
                combined1 = "Has uly: gara\u015Fyl\u00FDan " + str34 + " " + str32 + " " + str35.toString();
              }
              return combined1;
            }
            case "too_small":
            {
              let combined2;
              let minimum;
              let origin;
              let str22 = ">";
              if (code.inclusive) {
                str22 = ">=";
              }
              ({ origin, minimum } = code);
              const str57 = minimum.toString();
              if (obj2[code.origin] ?? null) {
                const _HermesInternal11 = HermesInternal;
                combined2 = "Has ki\u00E7i: gara\u015Fyl\u00FDan " + origin + " " + str22 + " " + str57 + " " + tmp15.unit;
              } else {
                const _HermesInternal10 = HermesInternal;
                combined2 = "Has ki\u00E7i: gara\u015Fyl\u00FDan " + origin + " " + str22 + " " + str57;
              }
              return combined2;
            }
            case "invalid_format":
            {
              let combined3;
              if ("starts_with" === code.format) {
                const _HermesInternal9 = HermesInternal;
                combined3 = "N\u00E4dogry setir: \"" + code.prefix + "\" bilen ba\u015Flamaly";
              } else if ("ends_with" === code.format) {
                const _HermesInternal8 = HermesInternal;
                combined3 = "N\u00E4dogry setir: \"" + code.suffix + "\" bilen gutarmaly";
              } else if ("includes" === code.format) {
                const _HermesInternal7 = HermesInternal;
                combined3 = "N\u00E4dogry setir: \"" + code.includes + "\" saklamaly";
              } else if ("regex" === code.format) {
                const _HermesInternal6 = HermesInternal;
                combined3 = "N\u00E4dogry setir: " + code.pattern + " nusga la\u00FDyk bolmaly";
              } else {
                const format = closure_1[code.format] ?? code.format;
                const _HermesInternal5 = HermesInternal;
                combined3 = "N\u00E4dogry " + format;
              }
              return combined3;
            }
            case "not_multiple_of":
            {
              const _HermesInternal4 = HermesInternal;
              return "N\u00E4dogry san: " + code.divisor + " bilen galyndysyz b\u00F6l\u00FCnmeli";
            }
            case "unrecognized_keys":
            {
              let str5 = "";
              if (code.keys.length > 1) {
                str5 = "lar";
              }
              const _HermesInternal3 = HermesInternal;
              return "Tanalma\u00FDan a\u00E7ar" + str5 + ": " + captureStackTrace.joinValues(code.keys, ", ");
            }
            case "invalid_key":
            {
              const _HermesInternal2 = HermesInternal;
              return "" + code.origin + " i\u00E7inde n\u00E4dogry a\u00E7ar";
            }
            case "invalid_union":
            {
              return "N\u00E4dogry baha";
            }
            case "invalid_element":
            {
              const _HermesInternal = HermesInternal;
              return "" + code.origin + " i\u00E7inde n\u00E4dogry baha";
            }
            default:
            {
              return "N\u00E4dogry baha";
            }
          }
        }
    };
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
