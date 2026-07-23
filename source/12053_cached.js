// Module ID: 12053
// Function ID: 93769
// Name: cached
// Dependencies: [12013]

// Module 12053 (cached)
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
      let closure_0 = { string: { unit: "znak\u00F3w", verb: "mie\u0107" }, file: { unit: "bajt\u00F3w", verb: "mie\u0107" }, array: { unit: "element\u00F3w", verb: "mie\u0107" }, set: { unit: "element\u00F3w", verb: "mie\u0107" } };
      let closure_1 = { regex: "wyra\u017Cenie", email: "adres email", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "data i godzina w formacie ISO", date: "data w formacie ISO", time: "godzina w formacie ISO", duration: "czas trwania ISO", ipv4: "adres IPv4", ipv6: "adres IPv6", cidrv4: "zakres IPv4", cidrv6: "zakres IPv6", base64: "ci\u0105g znak\u00F3w zakodowany w formacie base64", base64url: "ci\u0105g znak\u00F3w zakodowany w formacie base64url", json_string: "ci\u0105g znak\u00F3w w formacie JSON", e164: "liczba E.164", jwt: "JWT", template_literal: "wej\u015Bcie" };
      let closure_2 = { nan: "NaN", number: "liczba", array: "tablica" };
      return (code) => {
        code = code.code;
        if ("invalid_type" === code) {
          let expected = closure_2[code.expected];
          if (null == expected) {
            expected = code.expected;
          }
          const parsedTypeResult = closure_2.parsedType(code.input);
          let tmp55 = parsedTypeResult;
          if (null != closure_2[parsedTypeResult]) {
            tmp55 = tmp54;
          }
          if (obj.test(code.expected)) {
            const _HermesInternal17 = HermesInternal;
            let combined = "Nieprawid\u0142owe dane wej\u015Bciowe: oczekiwano instanceof " + code.expected + ", otrzymano " + tmp55;
          } else {
            const _HermesInternal16 = HermesInternal;
            combined = "Nieprawid\u0142owe dane wej\u015Bciowe: oczekiwano " + expected + ", otrzymano " + tmp55;
          }
          return combined;
        } else if ("invalid_value" === code) {
          if (1 === code.values.length) {
            const _HermesInternal15 = HermesInternal;
            let combined1 = "Nieprawid\u0142owe dane wej\u015Bciowe: oczekiwano " + closure_2.stringifyPrimitive(code.values[0]);
          } else {
            const _HermesInternal14 = HermesInternal;
            combined1 = "Nieprawid\u0142owa opcja: oczekiwano jednej z warto\u015Bci " + closure_2.joinValues(code.values, "|");
          }
          return combined1;
        } else if ("too_big" === code) {
          let str32 = "<";
          if (code.inclusive) {
            str32 = "<=";
          }
          const tmp30 = getSizing(code.origin);
          const origin2 = code.origin;
          let str33 = "warto\u015B\u0107";
          if (tmp30) {
            if (tmp32) {
              str33 = origin2;
            }
            let str = code.maximum.toString();
            const unit2 = tmp30.unit;
            let str38 = "element\u00F3w";
            if (null != unit2) {
              str38 = unit2;
            }
            const _HermesInternal13 = HermesInternal;
            let combined2 = "Za du\u017Ca warto\u015B\u0107: oczekiwano, \u017Ce " + str33 + " b\u0119dzie mie\u0107 " + str32 + str + " " + str38;
            const str37 = code.maximum;
          } else {
            let tmp33 = str33;
            if (tmp32) {
              tmp33 = origin2;
            }
            const _HermesInternal12 = HermesInternal;
            combined2 = "Zbyt du\u017C(y/a/e): oczekiwano, \u017Ce " + tmp33 + " b\u0119dzie wynosi\u0107 " + str32 + code.maximum.toString();
            const str34 = code.maximum;
          }
          return combined2;
        } else if ("too_small" === code) {
          let str22 = ">";
          if (code.inclusive) {
            str22 = ">=";
          }
          const tmp15 = getSizing(code.origin);
          const origin = code.origin;
          let str23 = "warto\u015B\u0107";
          if (tmp15) {
            if (tmp17) {
              str23 = origin;
            }
            const str1 = code.minimum.toString();
            const unit = tmp15.unit;
            let str28 = "element\u00F3w";
            if (null != unit) {
              str28 = unit;
            }
            const _HermesInternal11 = HermesInternal;
            let combined3 = "Za ma\u0142a warto\u015B\u0107: oczekiwano, \u017Ce " + str23 + " b\u0119dzie mie\u0107 " + str22 + str1 + " " + str28;
            const str27 = code.minimum;
          } else {
            let tmp18 = str23;
            if (tmp17) {
              tmp18 = origin;
            }
            const _HermesInternal10 = HermesInternal;
            combined3 = "Zbyt ma\u0142(y/a/e): oczekiwano, \u017Ce " + tmp18 + " b\u0119dzie wynosi\u0107 " + str22 + code.minimum.toString();
            const str24 = code.minimum;
          }
          return combined3;
        } else if ("invalid_format" === code) {
          if ("starts_with" === code.format) {
            const _HermesInternal9 = HermesInternal;
            let combined4 = "Nieprawid\u0142owy ci\u0105g znak\u00F3w: musi zaczyna\u0107 si\u0119 od \"" + code.prefix + "\"";
          } else if ("ends_with" === code.format) {
            const _HermesInternal8 = HermesInternal;
            combined4 = "Nieprawid\u0142owy ci\u0105g znak\u00F3w: musi ko\u0144czy\u0107 si\u0119 na \"" + code.suffix + "\"";
          } else if ("includes" === code.format) {
            const _HermesInternal7 = HermesInternal;
            combined4 = "Nieprawid\u0142owy ci\u0105g znak\u00F3w: musi zawiera\u0107 \"" + code.includes + "\"";
          } else if ("regex" === code.format) {
            const _HermesInternal6 = HermesInternal;
            combined4 = "Nieprawid\u0142owy ci\u0105g znak\u00F3w: musi odpowiada\u0107 wzorcowi " + code.pattern;
          } else {
            let format = table2[code.format];
            if (null == format) {
              format = code.format;
            }
            const _HermesInternal5 = HermesInternal;
            combined4 = "Nieprawid\u0142ow(y/a/e) " + format;
          }
          return combined4;
        } else if ("not_multiple_of" === code) {
          const _HermesInternal4 = HermesInternal;
          return "Nieprawid\u0142owa liczba: musi by\u0107 wielokrotno\u015Bci\u0105 " + code.divisor;
        } else if ("unrecognized_keys" === code) {
          let str7 = "";
          if (code.keys.length > 1) {
            str7 = "s";
          }
          const _HermesInternal3 = HermesInternal;
          return "Nierozpoznane klucze" + str7 + ": " + closure_2.joinValues(code.keys, ", ");
        } else {
          str = "invalid_key";
          if ("invalid_key" === code) {
            const _HermesInternal2 = HermesInternal;
            return "Nieprawid\u0142owy klucz w " + code.origin;
          } else {
            if ("invalid_union" !== code) {
              if ("invalid_element" === code) {
                const _HermesInternal = HermesInternal;
                return "Nieprawid\u0142owa warto\u015B\u0107 w " + code.origin;
              }
            }
            return "Nieprawid\u0142owe dane wej\u015Bciowe";
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
