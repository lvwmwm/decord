// Module ID: 12082
// Function ID: 94039
// Name: cached
// Dependencies: [12039]

// Module 12082 (cached)
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
      let closure_0 = { string: { unit: "znakov", verb: "imeti" }, file: { unit: "bajtov", verb: "imeti" }, array: { unit: "elementov", verb: "imeti" }, set: { unit: "elementov", verb: "imeti" } };
      let closure_1 = { regex: "vnos", email: "e-po\u0161tni naslov", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO datum in \u010Das", date: "ISO datum", time: "ISO \u010Das", duration: "ISO trajanje", ipv4: "IPv4 naslov", ipv6: "IPv6 naslov", cidrv4: "obseg IPv4", cidrv6: "obseg IPv6", base64: "base64 kodiran niz", base64url: "base64url kodiran niz", json_string: "JSON niz", e164: "E.164 \u0161tevilka", jwt: "JWT", template_literal: "vnos" };
      let closure_2 = { nan: "NaN", number: "\u0161tevilo", array: "tabela" };
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
            let combined = "Neveljaven vnos: pri\u010Dakovano instanceof " + code.expected + ", prejeto " + tmp51;
          } else {
            const _HermesInternal16 = HermesInternal;
            combined = "Neveljaven vnos: pri\u010Dakovano " + expected + ", prejeto " + tmp51;
          }
          return combined;
        } else if ("invalid_value" === code) {
          if (1 === code.values.length) {
            const _HermesInternal15 = HermesInternal;
            let combined1 = "Neveljaven vnos: pri\u010Dakovano " + closure_2.stringifyPrimitive(code.values[0]);
          } else {
            const _HermesInternal14 = HermesInternal;
            combined1 = "Neveljavna mo\u017Enost: pri\u010Dakovano eno izmed " + closure_2.joinValues(code.values, "|");
          }
          return combined1;
        } else if ("too_big" === code) {
          let str28 = "<";
          if (code.inclusive) {
            str28 = "<=";
          }
          const tmp26 = getSizing(code.origin);
          const origin2 = code.origin;
          let str29 = "vrednost";
          if (tmp26) {
            if (tmp28) {
              str29 = origin2;
            }
            let str = code.maximum.toString();
            const unit = tmp26.unit;
            let str34 = "elementov";
            if (null != unit) {
              str34 = unit;
            }
            const _HermesInternal13 = HermesInternal;
            let combined2 = "Preveliko: pri\u010Dakovano, da bo " + str29 + " imelo " + str28 + str + " " + str34;
            const str33 = code.maximum;
          } else {
            let tmp29 = str29;
            if (tmp28) {
              tmp29 = origin2;
            }
            const _HermesInternal12 = HermesInternal;
            combined2 = "Preveliko: pri\u010Dakovano, da bo " + tmp29 + " " + str28 + code.maximum.toString();
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
            let combined3 = "Premajhno: pri\u010Dakovano, da bo " + origin + " imelo " + str22 + str1 + " " + tmp15.unit;
          } else {
            const _HermesInternal10 = HermesInternal;
            combined3 = "Premajhno: pri\u010Dakovano, da bo " + origin + " " + str22 + str1;
          }
          return combined3;
        } else if ("invalid_format" === code) {
          if ("starts_with" === code.format) {
            const _HermesInternal9 = HermesInternal;
            let combined4 = "Neveljaven niz: mora se za\u010Deti z \"" + code.prefix + "\"";
          } else if ("ends_with" === code.format) {
            const _HermesInternal8 = HermesInternal;
            combined4 = "Neveljaven niz: mora se kon\u010Dati z \"" + code.suffix + "\"";
          } else if ("includes" === code.format) {
            const _HermesInternal7 = HermesInternal;
            combined4 = "Neveljaven niz: mora vsebovati \"" + code.includes + "\"";
          } else if ("regex" === code.format) {
            const _HermesInternal6 = HermesInternal;
            combined4 = "Neveljaven niz: mora ustrezati vzorcu " + code.pattern;
          } else {
            let format = table2[code.format];
            if (null == format) {
              format = code.format;
            }
            const _HermesInternal5 = HermesInternal;
            combined4 = "Neveljaven " + format;
          }
          return combined4;
        } else if ("not_multiple_of" === code) {
          const _HermesInternal4 = HermesInternal;
          return "Neveljavno \u0161tevilo: mora biti ve\u010Dkratnik " + code.divisor;
        } else if ("unrecognized_keys" === code) {
          let str7 = " klju\u010D";
          if (code.keys.length > 1) {
            str7 = "i klju\u010Di";
          }
          const _HermesInternal3 = HermesInternal;
          return "Neprepoznan" + str7 + ": " + closure_2.joinValues(code.keys, ", ");
        } else {
          str = "invalid_key";
          if ("invalid_key" === code) {
            const _HermesInternal2 = HermesInternal;
            return "Neveljaven klju\u010D v " + code.origin;
          } else {
            if ("invalid_union" !== code) {
              if ("invalid_element" === code) {
                const _HermesInternal = HermesInternal;
                return "Neveljavna vrednost v " + code.origin;
              }
            }
            return "Neveljaven vnos";
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
