// Module ID: 12217
// Function ID: 12218
// Name: default_1
// Dependencies: [12160]
// Exports: default

// Module 12217 (default_1)
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
    let obj = {
      localeError: (code) => {
          switch (code.code) {
            case "invalid_type":
            {
              let combined;
              let expected = closure_2[code.expected];
              if (expected == null) {
                expected = code.expected;
              }
              const parsedTypeResult = captureStackTrace.parsedType(code.input);
              const obj = /^[A-Z]/;
              if (obj.test(code.expected)) {
                const _HermesInternal17 = HermesInternal;
                combined = "Neplatn\u00FD vstup: o\u010Dak\u00E1van\u00E9 instanceof " + code.expected + ", obdr\u017Ean\u00E9 " + tmp49;
              } else {
                const _HermesInternal16 = HermesInternal;
                combined = "Neplatn\u00FD vstup: o\u010Dak\u00E1van\u00E9 " + expected + ", obdr\u017Ean\u00E9 " + tmp49;
              }
              return combined;
            }
            case "invalid_value":
            {
              let combined1;
              if (1 === code.values.length) {
                const _HermesInternal15 = HermesInternal;
                combined1 = "Neplatn\u00FD vstup: o\u010Dak\u00E1van\u00E9 " + captureStackTrace.stringifyPrimitive(code.values[0]);
              } else {
                const _HermesInternal14 = HermesInternal;
                combined1 = "Neplatn\u00FD vstup: o\u010Dak\u00E1van\u00E1 jedna z hodn\u00F4t " + captureStackTrace.joinValues(code.values, "|");
              }
              return combined1;
            }
            case "too_big":
            {
              let combined2;
              let str27 = "<";
              if (code.inclusive) {
                str27 = "<=";
              }
              let str28 = code.origin;
              if (obj2[code.origin] ?? null) {
                if (str28 == null) {
                  str28 = "hodnota";
                }
                const str33 = code.maximum;
                const _HermesInternal13 = HermesInternal;
                const str1 = str33.toString();
                const str34 = (obj2[code.origin] ?? null).unit ?? "prvkov";
                combined2 = "Hodnota je pr\u00EDli\u0161 ve\u013Ek\u00E1: " + str28 + " mus\u00ED ma\u0165 " + str27 + str1 + " " + str34;
              } else {
                let str29 = str28;
                if (str28 == null) {
                  str29 = "hodnota";
                }
                const _HermesInternal12 = HermesInternal;
                const str30 = code.maximum;
                combined2 = "Hodnota je pr\u00EDli\u0161 ve\u013Ek\u00E1: " + str29 + " mus\u00ED by\u0165 " + str27 + str30.toString();
              }
              return combined2;
            }
            case "too_small":
            {
              let combined3;
              let str16 = ">";
              if (code.inclusive) {
                str16 = ">=";
              }
              let str17 = code.origin;
              if (obj2[code.origin] ?? null) {
                if (str17 == null) {
                  str17 = "hodnota";
                }
                const str22 = code.minimum;
                const _HermesInternal11 = HermesInternal;
                const str23 = (obj2[code.origin] ?? null).unit ?? "prvkov";
                const str48 = str22.toString();
                combined3 = "Hodnota je pr\u00EDli\u0161 mal\u00E1: " + str17 + " mus\u00ED ma\u0165 " + str16 + str48 + " " + str23;
              } else {
                let str18 = str17;
                if (str17 == null) {
                  str18 = "hodnota";
                }
                const _HermesInternal10 = HermesInternal;
                const str19 = code.minimum;
                combined3 = "Hodnota je pr\u00EDli\u0161 mal\u00E1: " + str18 + " mus\u00ED by\u0165 " + str16 + str19.toString();
              }
              return combined3;
            }
            case "invalid_format":
            {
              let combined4;
              if ("starts_with" === code.format) {
                const _HermesInternal9 = HermesInternal;
                combined4 = "Neplatn\u00FD re\u0165azec: mus\u00ED za\u010D\u00EDna\u0165 na \"" + code.prefix + "\"";
              } else if ("ends_with" === code.format) {
                const _HermesInternal8 = HermesInternal;
                combined4 = "Neplatn\u00FD re\u0165azec: mus\u00ED kon\u010Di\u0165 na \"" + code.suffix + "\"";
              } else if ("includes" === code.format) {
                const _HermesInternal7 = HermesInternal;
                combined4 = "Neplatn\u00FD re\u0165azec: mus\u00ED obsahova\u0165 \"" + code.includes + "\"";
              } else if ("regex" === code.format) {
                const _HermesInternal6 = HermesInternal;
                combined4 = "Neplatn\u00FD re\u0165azec: mus\u00ED zodpoveda\u0165 vzoru " + code.pattern;
              } else {
                const format = closure_1[code.format] ?? code.format;
                const _HermesInternal5 = HermesInternal;
                combined4 = "Neplatn\u00FD form\u00E1t " + format;
              }
              return combined4;
            }
            case "not_multiple_of":
            {
              const _HermesInternal4 = HermesInternal;
              return "Neplatn\u00E9 \u010D\u00EDslo: mus\u00ED by\u0165 n\u00E1sobkom " + code.divisor;
            }
            case "unrecognized_keys":
            {
              const _HermesInternal3 = HermesInternal;
              return "Nezn\u00E1me kl\u00FA\u010De: " + captureStackTrace.joinValues(code.keys, ", ");
            }
            case "invalid_key":
            {
              const _HermesInternal2 = HermesInternal;
              return "Neplatn\u00FD kl\u00FA\u010D v " + code.origin;
            }
            case "invalid_union":
            {
              return "Neplatn\u00FD vstup";
            }
            case "invalid_element":
            {
              const _HermesInternal = HermesInternal;
              return "Neplatn\u00E1 hodnota v " + code.origin;
            }
            default:
            {
              return "Neplatn\u00FD vstup";
            }
          }
        }
    };
    const obj2 = { string: { unit: "znakov", verb: "ma\u0165" }, file: { unit: "bajtov", verb: "ma\u0165" }, array: { unit: "prvkov", verb: "ma\u0165" }, set: { unit: "prvkov", verb: "ma\u0165" }, map: { unit: "polo\u017Eiek", verb: "ma\u0165" } };
    closure_1 = { regex: "regul\u00E1rny v\u00FDraz", email: "e-mailov\u00E1 adresa", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "d\u00E1tum a \u010Das vo form\u00E1te ISO", date: "d\u00E1tum vo form\u00E1te ISO", time: "\u010Das vo form\u00E1te ISO", duration: "doba trvania ISO", ipv4: "IPv4 adresa", ipv6: "IPv6 adresa", mac: "MAC adresa", cidrv4: "rozsah IPv4", cidrv6: "rozsah IPv6", base64: "re\u0165azec zak\u00F3dovan\u00FD vo form\u00E1te base64", base64url: "re\u0165azec zak\u00F3dovan\u00FD vo form\u00E1te base64url", json_string: "re\u0165azec vo form\u00E1te JSON", e164: "\u010D\u00EDslo E.164", credit_card: "\u010D\u00EDslo kreditnej karty", currency_code: "k\u00F3d meny", iban: "IBAN", jwt: "JWT", template_literal: "vstup" };
    let closure_2 = { nan: "NaN", number: "\u010D\u00EDslo", string: "re\u0165azec", function: "funkcia", array: "pole" };
    return obj;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
