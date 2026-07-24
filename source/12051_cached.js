// Module ID: 12051
// Function ID: 93696
// Name: cached
// Dependencies: [12039]

// Module 12051 (cached)
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
      let closure_0 = { string: { unit: "znak\u016F", verb: "m\u00EDt" }, file: { unit: "bajt\u016F", verb: "m\u00EDt" }, array: { unit: "prvk\u016F", verb: "m\u00EDt" }, set: { unit: "prvk\u016F", verb: "m\u00EDt" } };
      let closure_1 = { regex: "regul\u00E1rn\u00ED v\u00FDraz", email: "e-mailov\u00E1 adresa", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "datum a \u010Das ve form\u00E1tu ISO", date: "datum ve form\u00E1tu ISO", time: "\u010Das ve form\u00E1tu ISO", duration: "doba trv\u00E1n\u00ED ISO", ipv4: "IPv4 adresa", ipv6: "IPv6 adresa", cidrv4: "rozsah IPv4", cidrv6: "rozsah IPv6", base64: "\u0159et\u011Bzec zak\u00F3dovan\u00FD ve form\u00E1tu base64", base64url: "\u0159et\u011Bzec zak\u00F3dovan\u00FD ve form\u00E1tu base64url", json_string: "\u0159et\u011Bzec ve form\u00E1tu JSON", e164: "\u010D\u00EDslo E.164", jwt: "JWT", template_literal: "vstup" };
      let closure_2 = { nan: "NaN", number: "\u010D\u00EDslo", string: "\u0159et\u011Bzec", function: "funkce", array: "pole" };
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
            let combined = "Neplatn\u00FD vstup: o\u010Dek\u00E1v\u00E1no instanceof " + code.expected + ", obdr\u017Eeno " + tmp55;
          } else {
            const _HermesInternal16 = HermesInternal;
            combined = "Neplatn\u00FD vstup: o\u010Dek\u00E1v\u00E1no " + expected + ", obdr\u017Eeno " + tmp55;
          }
          return combined;
        } else if ("invalid_value" === code) {
          if (1 === code.values.length) {
            const _HermesInternal15 = HermesInternal;
            let combined1 = "Neplatn\u00FD vstup: o\u010Dek\u00E1v\u00E1no " + closure_2.stringifyPrimitive(code.values[0]);
          } else {
            const _HermesInternal14 = HermesInternal;
            combined1 = "Neplatn\u00E1 mo\u017Enost: o\u010Dek\u00E1v\u00E1na jedna z hodnot " + closure_2.joinValues(code.values, "|");
          }
          return combined1;
        } else if ("too_big" === code) {
          let str30 = "<";
          if (code.inclusive) {
            str30 = "<=";
          }
          const tmp30 = getSizing(code.origin);
          const origin2 = code.origin;
          let str31 = "hodnota";
          if (tmp30) {
            if (tmp32) {
              str31 = origin2;
            }
            let str = code.maximum.toString();
            const unit2 = tmp30.unit;
            let str36 = "prvk\u016F";
            if (null != unit2) {
              str36 = unit2;
            }
            const _HermesInternal13 = HermesInternal;
            let combined2 = "Hodnota je p\u0159\u00EDli\u0161 velk\u00E1: " + str31 + " mus\u00ED m\u00EDt " + str30 + str + " " + str36;
            const str35 = code.maximum;
          } else {
            let tmp33 = str31;
            if (tmp32) {
              tmp33 = origin2;
            }
            const _HermesInternal12 = HermesInternal;
            combined2 = "Hodnota je p\u0159\u00EDli\u0161 velk\u00E1: " + tmp33 + " mus\u00ED b\u00FDt " + str30 + code.maximum.toString();
            const str32 = code.maximum;
          }
          return combined2;
        } else if ("too_small" === code) {
          let str20 = ">";
          if (code.inclusive) {
            str20 = ">=";
          }
          const tmp15 = getSizing(code.origin);
          const origin = code.origin;
          let str21 = "hodnota";
          if (tmp15) {
            if (tmp17) {
              str21 = origin;
            }
            const str1 = code.minimum.toString();
            const unit = tmp15.unit;
            let str26 = "prvk\u016F";
            if (null != unit) {
              str26 = unit;
            }
            const _HermesInternal11 = HermesInternal;
            let combined3 = "Hodnota je p\u0159\u00EDli\u0161 mal\u00E1: " + str21 + " mus\u00ED m\u00EDt " + str20 + str1 + " " + str26;
            const str25 = code.minimum;
          } else {
            let tmp18 = str21;
            if (tmp17) {
              tmp18 = origin;
            }
            const _HermesInternal10 = HermesInternal;
            combined3 = "Hodnota je p\u0159\u00EDli\u0161 mal\u00E1: " + tmp18 + " mus\u00ED b\u00FDt " + str20 + code.minimum.toString();
            const str22 = code.minimum;
          }
          return combined3;
        } else if ("invalid_format" === code) {
          if ("starts_with" === code.format) {
            const _HermesInternal9 = HermesInternal;
            let combined4 = "Neplatn\u00FD \u0159et\u011Bzec: mus\u00ED za\u010D\u00EDnat na \"" + code.prefix + "\"";
          } else if ("ends_with" === code.format) {
            const _HermesInternal8 = HermesInternal;
            combined4 = "Neplatn\u00FD \u0159et\u011Bzec: mus\u00ED kon\u010Dit na \"" + code.suffix + "\"";
          } else if ("includes" === code.format) {
            const _HermesInternal7 = HermesInternal;
            combined4 = "Neplatn\u00FD \u0159et\u011Bzec: mus\u00ED obsahovat \"" + code.includes + "\"";
          } else if ("regex" === code.format) {
            const _HermesInternal6 = HermesInternal;
            combined4 = "Neplatn\u00FD \u0159et\u011Bzec: mus\u00ED odpov\u00EDdat vzoru " + code.pattern;
          } else {
            let format = table2[code.format];
            if (null == format) {
              format = code.format;
            }
            const _HermesInternal5 = HermesInternal;
            combined4 = "Neplatn\u00FD form\u00E1t " + format;
          }
          return combined4;
        } else if ("not_multiple_of" === code) {
          const _HermesInternal4 = HermesInternal;
          return "Neplatn\u00E9 \u010D\u00EDslo: mus\u00ED b\u00FDt n\u00E1sobkem " + code.divisor;
        } else if ("unrecognized_keys" === code) {
          const _HermesInternal3 = HermesInternal;
          return "Nezn\u00E1m\u00E9 kl\u00ED\u010De: " + closure_2.joinValues(code.keys, ", ");
        } else {
          str = "invalid_key";
          if ("invalid_key" === code) {
            const _HermesInternal2 = HermesInternal;
            return "Neplatn\u00FD kl\u00ED\u010D v " + code.origin;
          } else {
            if ("invalid_union" !== code) {
              if ("invalid_element" === code) {
                const _HermesInternal = HermesInternal;
                return "Neplatn\u00E1 hodnota v " + code.origin;
              }
            }
            return "Neplatn\u00FD vstup";
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
