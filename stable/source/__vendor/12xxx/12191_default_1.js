// Module ID: 12191
// Function ID: 12192
// Name: default_1
// Dependencies: [12160]
// Exports: default

// Module 12191 (default_1)
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
                combined = "Neispravan unos: o\u010Dekuje se instanceof " + code.expected + ", a primljeno je " + tmp54;
              } else {
                const _HermesInternal16 = HermesInternal;
                combined = "Neispravan unos: o\u010Dekuje se " + expected + ", a primljeno je " + tmp54;
              }
              return combined;
            }
            case "invalid_value":
            {
              let combined1;
              if (1 === code.values.length) {
                const _HermesInternal15 = HermesInternal;
                combined1 = "Neispravna vrijednost: o\u010Dekivano " + captureStackTrace.stringifyPrimitive(code.values[0]);
              } else {
                const _HermesInternal14 = HermesInternal;
                combined1 = "Neispravna opcija: o\u010Dekivano jedno od " + captureStackTrace.joinValues(code.values, "|");
              }
              return combined1;
            }
            case "too_big":
            {
              let combined2;
              let str25 = "<";
              if (code.inclusive) {
                str25 = "<=";
              }
              let str26 = closure_2[code.origin] ?? code.origin;
              if (obj2[code.origin] ?? null) {
                if (str26 == null) {
                  str26 = "vrijednost";
                }
                const str31 = code.maximum;
                const _HermesInternal13 = HermesInternal;
                const str1 = str31.toString();
                const str32 = (obj2[code.origin] ?? null).unit ?? "elemenata";
                combined2 = "Preveliko: o\u010Dekivano da " + str26 + " ima " + str25 + str1 + " " + str32;
              } else {
                let str27 = str26;
                if (str26 == null) {
                  str27 = "vrijednost";
                }
                const _HermesInternal12 = HermesInternal;
                const str28 = code.maximum;
                combined2 = "Preveliko: o\u010Dekivano da " + str27 + " bude " + str25 + str28.toString();
              }
              return combined2;
            }
            case "too_small":
            {
              let combined3;
              let str18 = ">";
              if (code.inclusive) {
                str18 = ">=";
              }
              const origin3 = closure_2[code.origin] ?? code.origin;
              const str19 = code.minimum;
              const str46 = str19.toString();
              if (obj2[code.origin] ?? null) {
                const _HermesInternal11 = HermesInternal;
                combined3 = "Premalo: o\u010Dekivano da " + origin3 + " ima " + str18 + str46 + " " + tmp19.unit;
              } else {
                const _HermesInternal10 = HermesInternal;
                combined3 = "Premalo: o\u010Dekivano da " + origin3 + " bude " + str18 + str46;
              }
              return combined3;
            }
            case "invalid_format":
            {
              let combined4;
              if ("starts_with" === code.format) {
                const _HermesInternal9 = HermesInternal;
                combined4 = "Neispravan tekst: mora zapo\u010Dinjati s \"" + code.prefix + "\"";
              } else if ("ends_with" === code.format) {
                const _HermesInternal8 = HermesInternal;
                combined4 = "Neispravan tekst: mora zavr\u0161avati s \"" + code.suffix + "\"";
              } else if ("includes" === code.format) {
                const _HermesInternal7 = HermesInternal;
                combined4 = "Neispravan tekst: mora sadr\u017Eavati \"" + code.includes + "\"";
              } else if ("regex" === code.format) {
                const _HermesInternal6 = HermesInternal;
                combined4 = "Neispravan tekst: mora odgovarati uzorku " + code.pattern;
              } else {
                const format = closure_1[code.format] ?? code.format;
                const _HermesInternal5 = HermesInternal;
                combined4 = "Neispravna " + format;
              }
              return combined4;
            }
            case "not_multiple_of":
            {
              const _HermesInternal4 = HermesInternal;
              return "Neispravan broj: mora biti vi\u0161ekratnik od " + code.divisor;
            }
            case "unrecognized_keys":
            {
              let str3 = " klju\u010D";
              if (code.keys.length > 1) {
                str3 = "i klju\u010Devi";
              }
              const _HermesInternal3 = HermesInternal;
              return "Neprepoznat" + str3 + ": " + captureStackTrace.joinValues(code.keys, ", ");
            }
            case "invalid_key":
            {
              const origin2 = closure_2[code.origin] ?? code.origin;
              const _HermesInternal2 = HermesInternal;
              return "Neispravan klju\u010D u " + origin2;
            }
            case "invalid_union":
            {
              return "Neispravan unos";
            }
            case "invalid_element":
            {
              const origin = closure_2[code.origin] ?? code.origin;
              const _HermesInternal = HermesInternal;
              return "Neispravna vrijednost u " + origin;
            }
            default:
            {
              return "Neispravan unos";
            }
          }
        }
    };
    const obj2 = { string: { unit: "znakova", verb: "imati" }, file: { unit: "bajtova", verb: "imati" }, array: { unit: "stavki", verb: "imati" }, set: { unit: "stavki", verb: "imati" } };
    closure_1 = { regex: "unos", email: "email adresa", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO datum i vrijeme", date: "ISO datum", time: "ISO vrijeme", duration: "ISO trajanje", ipv4: "IPv4 adresa", ipv6: "IPv6 adresa", mac: "MAC adresa", cidrv4: "IPv4 raspon", cidrv6: "IPv6 raspon", base64: "base64 kodirani tekst", base64url: "base64url kodirani tekst", json_string: "JSON tekst", e164: "E.164 broj", credit_card: "broj kreditne kartice", currency_code: "kod valute", iban: "IBAN", jwt: "JWT", template_literal: "unos" };
    let closure_2 = { nan: "NaN", string: "tekst", number: "broj", boolean: "boolean", array: "niz", object: "objekt", set: "skup", file: "datoteka", date: "datum", bigint: "bigint", symbol: "simbol", undefined: "undefined", null: "null", function: "funkcija", map: "mapa" };
    return obj;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
