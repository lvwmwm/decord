// Module ID: 12215
// Function ID: 12216
// Name: default_1
// Dependencies: [12160]
// Exports: default

// Module 12215 (default_1)
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
    const obj2 = { string: { unit: "caractere", verb: "s\u0103 aib\u0103" }, file: { unit: "octe\u021Bi", verb: "s\u0103 aib\u0103" }, array: { unit: "elemente", verb: "s\u0103 aib\u0103" }, set: { unit: "elemente", verb: "s\u0103 aib\u0103" }, map: { unit: "intr\u0103ri", verb: "s\u0103 aib\u0103" } };
    closure_1 = { regex: "intrare", email: "adres\u0103 de email", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "dat\u0103 \u0219i or\u0103 ISO", date: "dat\u0103 ISO", time: "or\u0103 ISO", duration: "durat\u0103 ISO", ipv4: "adres\u0103 IPv4", ipv6: "adres\u0103 IPv6", mac: "adres\u0103 MAC", cidrv4: "interval IPv4", cidrv6: "interval IPv6", base64: "\u0219ir codat base64", base64url: "\u0219ir codat base64url", json_string: "\u0219ir JSON", e164: "num\u0103r E.164", credit_card: "num\u0103r de card de credit", currency_code: "cod valutar", iban: "IBAN", jwt: "JWT", template_literal: "intrare" };
    let closure_2 = { nan: "NaN", string: "\u0219ir", number: "num\u0103r", boolean: "boolean", function: "func\u021Bie", array: "matrice", object: "obiect", undefined: "nedefinit", symbol: "simbol", bigint: "num\u0103r mare", void: "void", never: "never", map: "hart\u0103", set: "set" };
    return {
      localeError: (code) => {
          switch (code.code) {
            case "invalid_type":
            {
              let expected = closure_2[code.expected];
              const tmp43 = closure_2;
              if (expected == null) {
                expected = code.expected;
              }
              const parsedTypeResult = captureStackTrace.parsedType(code.input);
              const _HermesInternal16 = HermesInternal;
              const tmp47 = tmp43[parsedTypeResult] ?? parsedTypeResult;
              return "Intrare invalid\u0103: a\u0219teptat " + expected + ", primit " + tmp47;
            }
            case "invalid_value":
            {
              let combined;
              if (1 === code.values.length) {
                const _HermesInternal15 = HermesInternal;
                combined = "Intrare invalid\u0103: a\u0219teptat " + captureStackTrace.stringifyPrimitive(code.values[0]);
              } else {
                const _HermesInternal14 = HermesInternal;
                combined = "Op\u021Biune invalid\u0103: a\u0219teptat una dintre " + captureStackTrace.joinValues(code.values, "|");
              }
              return combined;
            }
            case "too_big":
            {
              let combined1;
              let str26 = "<";
              if (code.inclusive) {
                str26 = "<=";
              }
              let str27 = code.origin;
              if (obj2[code.origin] ?? null) {
                if (str27 == null) {
                  str27 = "valoarea";
                }
                const verb = tmp25.verb;
                const str32 = code.maximum;
                const _HermesInternal13 = HermesInternal;
                const str1 = str32.toString();
                const str33 = (obj2[code.origin] ?? null).unit ?? "elemente";
                combined1 = "Prea mare: a\u0219teptat ca " + str27 + " " + verb + " " + str26 + str1 + " " + str33;
              } else {
                let str28 = str27;
                if (str27 == null) {
                  str28 = "valoarea";
                }
                const _HermesInternal12 = HermesInternal;
                const str29 = code.maximum;
                combined1 = "Prea mare: a\u0219teptat ca " + str28 + " s\u0103 fie " + str26 + str29.toString();
              }
              return combined1;
            }
            case "too_small":
            {
              let combined2;
              let str16 = ">";
              if (code.inclusive) {
                str16 = ">=";
              }
              const origin = code.origin;
              if (obj2[code.origin] ?? null) {
                const _HermesInternal11 = HermesInternal;
                const str20 = code.minimum;
                combined2 = "Prea mic: a\u0219teptat ca " + origin + " " + tmp15.verb + " " + str16 + str20.toString() + " " + tmp15.unit;
              } else {
                const _HermesInternal10 = HermesInternal;
                const str17 = code.minimum;
                combined2 = "Prea mic: a\u0219teptat ca " + origin + " s\u0103 fie " + str16 + str17.toString();
              }
              return combined2;
            }
            case "invalid_format":
            {
              let combined3;
              if ("starts_with" === code.format) {
                const _HermesInternal9 = HermesInternal;
                combined3 = "\u0218ir invalid: trebuie s\u0103 \u00EEnceap\u0103 cu \"" + code.prefix + "\"";
              } else if ("ends_with" === code.format) {
                const _HermesInternal8 = HermesInternal;
                combined3 = "\u0218ir invalid: trebuie s\u0103 se termine cu \"" + code.suffix + "\"";
              } else if ("includes" === code.format) {
                const _HermesInternal7 = HermesInternal;
                combined3 = "\u0218ir invalid: trebuie s\u0103 includ\u0103 \"" + code.includes + "\"";
              } else if ("regex" === code.format) {
                const _HermesInternal6 = HermesInternal;
                combined3 = "\u0218ir invalid: trebuie s\u0103 se potriveasc\u0103 cu modelul " + code.pattern;
              } else {
                const format = closure_1[code.format] ?? code.format;
                const _HermesInternal5 = HermesInternal;
                combined3 = "Format invalid: " + format;
              }
              return combined3;
            }
            case "not_multiple_of":
            {
              const _HermesInternal4 = HermesInternal;
              return "Num\u0103r invalid: trebuie s\u0103 fie multiplu de " + code.divisor;
            }
            case "unrecognized_keys":
            {
              const _HermesInternal3 = HermesInternal;
              return "Chei nerecunoscute: " + captureStackTrace.joinValues(code.keys, ", ");
            }
            case "invalid_key":
            {
              const _HermesInternal2 = HermesInternal;
              return "Cheie invalid\u0103 \u00EEn " + code.origin;
            }
            case "invalid_union":
            {
              return "Intrare invalid\u0103";
            }
            case "invalid_element":
            {
              const _HermesInternal = HermesInternal;
              return "Valoare invalid\u0103 \u00EEn " + code.origin;
            }
            default:
            {
              return "Intrare invalid\u0103";
            }
          }
        }
    };
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
