// Module ID: 12050
// Function ID: 93736
// Name: cached
// Dependencies: [12013]

// Module 12050 (cached)
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
      let closure_0 = { string: { unit: "tegn", verb: "\u00E5 ha" }, file: { unit: "bytes", verb: "\u00E5 ha" }, array: { unit: "elementer", verb: "\u00E5 inneholde" }, set: { unit: "elementer", verb: "\u00E5 inneholde" } };
      let closure_1 = { regex: "input", email: "e-postadresse", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO dato- og klokkeslett", date: "ISO-dato", time: "ISO-klokkeslett", duration: "ISO-varighet", ipv4: "IPv4-omr\u00E5de", ipv6: "IPv6-omr\u00E5de", cidrv4: "IPv4-spekter", cidrv6: "IPv6-spekter", base64: "base64-enkodet streng", base64url: "base64url-enkodet streng", json_string: "JSON-streng", e164: "E.164-nummer", jwt: "JWT", template_literal: "input" };
      let closure_2 = { nan: "NaN", number: "tall", array: "liste" };
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
            let combined = "Ugyldig input: forventet instanceof " + code.expected + ", fikk " + tmp51;
          } else {
            const _HermesInternal16 = HermesInternal;
            combined = "Ugyldig input: forventet " + expected + ", fikk " + tmp51;
          }
          return combined;
        } else if ("invalid_value" === code) {
          if (1 === code.values.length) {
            const _HermesInternal15 = HermesInternal;
            let combined1 = "Ugyldig verdi: forventet " + closure_2.stringifyPrimitive(code.values[0]);
          } else {
            const _HermesInternal14 = HermesInternal;
            combined1 = "Ugyldig valg: forventet en av " + closure_2.joinValues(code.values, "|");
          }
          return combined1;
        } else if ("too_big" === code) {
          let str28 = "<";
          if (code.inclusive) {
            str28 = "<=";
          }
          const tmp26 = getSizing(code.origin);
          const origin2 = code.origin;
          let str29 = "value";
          if (tmp26) {
            if (tmp28) {
              str29 = origin2;
            }
            let str = code.maximum.toString();
            const unit = tmp26.unit;
            let str34 = "elementer";
            if (null != unit) {
              str34 = unit;
            }
            const _HermesInternal13 = HermesInternal;
            let combined2 = "For stor(t): forventet " + str29 + " til \u00E5 ha " + str28 + str + " " + str34;
            const str33 = code.maximum;
          } else {
            let tmp29 = str29;
            if (tmp28) {
              tmp29 = origin2;
            }
            const _HermesInternal12 = HermesInternal;
            combined2 = "For stor(t): forventet " + tmp29 + " til \u00E5 ha " + str28 + code.maximum.toString();
            const str30 = code.maximum;
          }
          return combined2;
        } else if ("too_small" === code) {
          let str22 = ">";
          if (code.inclusive) {
            str22 = ">=";
          }
          const tmp15 = getSizing(code.origin);
          ({ origin, minimum } = code);
          const str1 = minimum.toString();
          if (tmp15) {
            const _HermesInternal11 = HermesInternal;
            let combined3 = "For lite(n): forventet " + origin + " til \u00E5 ha " + str22 + str1 + " " + tmp15.unit;
          } else {
            const _HermesInternal10 = HermesInternal;
            combined3 = "For lite(n): forventet " + origin + " til \u00E5 ha " + str22 + str1;
          }
          return combined3;
        } else if ("invalid_format" === code) {
          if ("starts_with" === code.format) {
            const _HermesInternal9 = HermesInternal;
            let combined4 = "Ugyldig streng: m\u00E5 starte med \"" + code.prefix + "\"";
          } else if ("ends_with" === code.format) {
            const _HermesInternal8 = HermesInternal;
            combined4 = "Ugyldig streng: m\u00E5 ende med \"" + code.suffix + "\"";
          } else if ("includes" === code.format) {
            const _HermesInternal7 = HermesInternal;
            combined4 = "Ugyldig streng: m\u00E5 inneholde \"" + code.includes + "\"";
          } else if ("regex" === code.format) {
            const _HermesInternal6 = HermesInternal;
            combined4 = "Ugyldig streng: m\u00E5 matche m\u00F8nsteret " + code.pattern;
          } else {
            let format = table2[code.format];
            if (null == format) {
              format = code.format;
            }
            const _HermesInternal5 = HermesInternal;
            combined4 = "Ugyldig " + format;
          }
          return combined4;
        } else if ("not_multiple_of" === code) {
          const _HermesInternal4 = HermesInternal;
          return "Ugyldig tall: m\u00E5 v\u00E6re et multiplum av " + code.divisor;
        } else if ("unrecognized_keys" === code) {
          let str7 = "Ukjent n\u00F8kkel";
          if (code.keys.length > 1) {
            str7 = "Ukjente n\u00F8kler";
          }
          const _HermesInternal3 = HermesInternal;
          return "" + str7 + ": " + closure_2.joinValues(code.keys, ", ");
        } else {
          str = "invalid_key";
          if ("invalid_key" === code) {
            const _HermesInternal2 = HermesInternal;
            return "Ugyldig n\u00F8kkel i " + code.origin;
          } else {
            if ("invalid_union" !== code) {
              if ("invalid_element" === code) {
                const _HermesInternal = HermesInternal;
                return "Ugyldig verdi i " + code.origin;
              }
            }
            return "Ugyldig input";
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
