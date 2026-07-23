// Module ID: 12027
// Function ID: 93482
// Name: cached
// Dependencies: [12013]

// Module 12027 (cached)
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
    exports.default = function default_1() {
      return { localeError: error() };
    };
    let closure_2 = fn(require("cached"));
    function error() {
      function getSizing(arg0) {
        let tmp2 = null;
        if (null != table[arg0]) {
          tmp2 = tmp;
        }
        return tmp2;
      }
      let closure_0 = { string: { unit: "Zeichen", verb: "zu haben" }, file: { unit: "Bytes", verb: "zu haben" }, array: { unit: "Elemente", verb: "zu haben" }, set: { unit: "Elemente", verb: "zu haben" } };
      let closure_1 = { regex: "Eingabe", email: "E-Mail-Adresse", url: "URL", emoji: "Emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO-Datum und -Uhrzeit", date: "ISO-Datum", time: "ISO-Uhrzeit", duration: "ISO-Dauer", ipv4: "IPv4-Adresse", ipv6: "IPv6-Adresse", cidrv4: "IPv4-Bereich", cidrv6: "IPv6-Bereich", base64: "Base64-codierter String", base64url: "Base64-URL-codierter String", json_string: "JSON-String", e164: "E.164-Nummer", jwt: "JWT", template_literal: "Eingabe" };
      let closure_2 = { nan: "NaN", number: "Zahl", array: "Array" };
      return (code) => {
        let minimum;
        let origin;
        code = code.code;
        if ("invalid_type" === code) {
          let expected = closure_2[code.expected];
          if (null == expected) {
            expected = code.expected;
          }
          const parsedTypeResult = closure_2.parsedType(code.input);
          let tmp51 = parsedTypeResult;
          if (null != closure_2[parsedTypeResult]) {
            tmp51 = tmp50;
          }
          if (obj.test(code.expected)) {
            const _HermesInternal17 = HermesInternal;
            let combined = "Ung\u00FCltige Eingabe: erwartet instanceof " + code.expected + ", erhalten " + tmp51;
          } else {
            const _HermesInternal16 = HermesInternal;
            combined = "Ung\u00FCltige Eingabe: erwartet " + expected + ", erhalten " + tmp51;
          }
          return combined;
        } else if ("invalid_value" === code) {
          if (1 === code.values.length) {
            const _HermesInternal15 = HermesInternal;
            let combined1 = "Ung\u00FCltige Eingabe: erwartet " + closure_2.stringifyPrimitive(code.values[0]);
          } else {
            const _HermesInternal14 = HermesInternal;
            combined1 = "Ung\u00FCltige Option: erwartet eine von " + closure_2.joinValues(code.values, "|");
          }
          return combined1;
        } else if ("too_big" === code) {
          let str33 = "<";
          if (code.inclusive) {
            str33 = "<=";
          }
          const tmp26 = getSizing(code.origin);
          const origin2 = code.origin;
          let str34 = "Wert";
          if (tmp26) {
            if (tmp28) {
              str34 = origin2;
            }
            let str = code.maximum.toString();
            const unit = tmp26.unit;
            let str40 = "Elemente";
            if (null != unit) {
              str40 = unit;
            }
            const _HermesInternal13 = HermesInternal;
            let combined2 = "Zu gro\u00DF: erwartet, dass " + str34 + " " + str33 + str + " " + str40 + " hat";
            const str39 = code.maximum;
          } else {
            let tmp29 = str34;
            if (tmp28) {
              tmp29 = origin2;
            }
            const _HermesInternal12 = HermesInternal;
            combined2 = "Zu gro\u00DF: erwartet, dass " + tmp29 + " " + str33 + code.maximum.toString() + " ist";
            const str35 = code.maximum;
          }
          return combined2;
        } else if ("too_small" === code) {
          let str24 = ">";
          if (code.inclusive) {
            str24 = ">=";
          }
          const tmp15 = getSizing(code.origin);
          ({ origin, minimum } = code);
          const str1 = minimum.toString();
          if (tmp15) {
            const _HermesInternal11 = HermesInternal;
            let combined3 = "Zu klein: erwartet, dass " + origin + " " + str24 + str1 + " " + tmp15.unit + " hat";
          } else {
            const _HermesInternal10 = HermesInternal;
            combined3 = "Zu klein: erwartet, dass " + origin + " " + str24 + str1 + " ist";
          }
          return combined3;
        } else if ("invalid_format" === code) {
          if ("starts_with" === code.format) {
            const _HermesInternal9 = HermesInternal;
            let combined4 = "Ung\u00FCltiger String: muss mit \"" + code.prefix + "\" beginnen";
          } else if ("ends_with" === code.format) {
            const _HermesInternal8 = HermesInternal;
            combined4 = "Ung\u00FCltiger String: muss mit \"" + code.suffix + "\" enden";
          } else if ("includes" === code.format) {
            const _HermesInternal7 = HermesInternal;
            combined4 = "Ung\u00FCltiger String: muss \"" + code.includes + "\" enthalten";
          } else if ("regex" === code.format) {
            const _HermesInternal6 = HermesInternal;
            combined4 = "Ung\u00FCltiger String: muss dem Muster " + code.pattern + " entsprechen";
          } else {
            let format = table2[code.format];
            if (null == format) {
              format = code.format;
            }
            const _HermesInternal5 = HermesInternal;
            combined4 = "Ung\u00FCltig: " + format;
          }
          return combined4;
        } else if ("not_multiple_of" === code) {
          const _HermesInternal4 = HermesInternal;
          return "Ung\u00FCltige Zahl: muss ein Vielfaches von " + code.divisor + " sein";
        } else if ("unrecognized_keys" === code) {
          let str7 = "Unbekannter Schl\u00FCssel";
          if (code.keys.length > 1) {
            str7 = "Unbekannte Schl\u00FCssel";
          }
          const _HermesInternal3 = HermesInternal;
          return "" + str7 + ": " + closure_2.joinValues(code.keys, ", ");
        } else {
          str = "invalid_key";
          if ("invalid_key" === code) {
            const _HermesInternal2 = HermesInternal;
            return "Ung\u00FCltiger Schl\u00FCssel in " + code.origin;
          } else {
            if ("invalid_union" !== code) {
              if ("invalid_element" === code) {
                const _HermesInternal = HermesInternal;
                return "Ung\u00FCltiger Wert in " + code.origin;
              }
            }
            return "Ung\u00FCltige Eingabe";
          }
        }
      };
    }
    module.exports = exports.default;
  } else {
    const _Object2 = Object;
  }
} else {
  let _Object = Object;
}
