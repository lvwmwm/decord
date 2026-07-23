// Module ID: 12064
// Function ID: 93883
// Name: cached
// Dependencies: [12013]

// Module 12064 (cached)
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
      let closure_0 = { string: { unit: "belgi", verb: "bo\u2018lishi kerak" }, file: { unit: "bayt", verb: "bo\u2018lishi kerak" }, array: { unit: "element", verb: "bo\u2018lishi kerak" }, set: { unit: "element", verb: "bo\u2018lishi kerak" } };
      let closure_1 = { regex: "kirish", email: "elektron pochta manzili", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO sana va vaqti", date: "ISO sana", time: "ISO vaqt", duration: "ISO davomiylik", ipv4: "IPv4 manzil", ipv6: "IPv6 manzil", mac: "MAC manzil", cidrv4: "IPv4 diapazon", cidrv6: "IPv6 diapazon", base64: "base64 kodlangan satr", base64url: "base64url kodlangan satr", json_string: "JSON satr", e164: "E.164 raqam", jwt: "JWT", template_literal: "kirish" };
      let closure_2 = { nan: "NaN", number: "raqam", array: "massiv" };
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
          let tmp48 = parsedTypeResult;
          if (null != closure_2[parsedTypeResult]) {
            tmp48 = tmp47;
          }
          if (obj.test(code.expected)) {
            const _HermesInternal17 = HermesInternal;
            let combined = "Noto\u2018g\u2018ri kirish: kutilgan instanceof " + code.expected + ", qabul qilingan " + tmp48;
          } else {
            const _HermesInternal16 = HermesInternal;
            combined = "Noto\u2018g\u2018ri kirish: kutilgan " + expected + ", qabul qilingan " + tmp48;
          }
          return combined;
        } else if ("invalid_value" === code) {
          if (1 === code.values.length) {
            const _HermesInternal15 = HermesInternal;
            let combined1 = "Noto\u2018g\u2018ri kirish: kutilgan " + closure_2.stringifyPrimitive(code.values[0]);
          } else {
            const _HermesInternal14 = HermesInternal;
            combined1 = "Noto\u2018g\u2018ri variant: quyidagilardan biri kutilgan " + closure_2.joinValues(code.values, "|");
          }
          return combined1;
        } else if ("too_big" === code) {
          let str34 = "<";
          if (code.inclusive) {
            str34 = "<=";
          }
          const tmp26 = getSizing(code.origin);
          const origin2 = code.origin;
          let str35 = "qiymat";
          if (tmp26) {
            if (tmp28) {
              str35 = origin2;
            }
            const _HermesInternal13 = HermesInternal;
            let combined2 = "Juda katta: kutilgan " + str35 + " " + str34 + code.maximum.toString() + " " + tmp26.unit + " " + tmp26.verb;
            const str39 = code.maximum;
          } else {
            let tmp29 = str35;
            if (tmp28) {
              tmp29 = origin2;
            }
            const _HermesInternal12 = HermesInternal;
            combined2 = "Juda katta: kutilgan " + tmp29 + " " + str34 + code.maximum.toString();
            const str36 = code.maximum;
          }
          return combined2;
        } else if ("too_small" === code) {
          let str26 = ">";
          if (code.inclusive) {
            str26 = ">=";
          }
          const tmp15 = getSizing(code.origin);
          ({ origin, minimum } = code);
          let str = minimum.toString();
          if (tmp15) {
            const _HermesInternal11 = HermesInternal;
            let combined3 = "Juda kichik: kutilgan " + origin + " " + str26 + str + " " + tmp15.unit + " " + tmp15.verb;
          } else {
            const _HermesInternal10 = HermesInternal;
            combined3 = "Juda kichik: kutilgan " + origin + " " + str26 + str;
          }
          return combined3;
        } else if ("invalid_format" === code) {
          if ("starts_with" === code.format) {
            const _HermesInternal9 = HermesInternal;
            let combined4 = "Noto\u2018g\u2018ri satr: \"" + code.prefix + "\" bilan boshlanishi kerak";
          } else if ("ends_with" === code.format) {
            const _HermesInternal8 = HermesInternal;
            combined4 = "Noto\u2018g\u2018ri satr: \"" + code.suffix + "\" bilan tugashi kerak";
          } else if ("includes" === code.format) {
            const _HermesInternal7 = HermesInternal;
            combined4 = "Noto\u2018g\u2018ri satr: \"" + code.includes + "\" ni o\u2018z ichiga olishi kerak";
          } else if ("regex" === code.format) {
            const _HermesInternal6 = HermesInternal;
            combined4 = "Noto\u2018g\u2018ri satr: " + code.pattern + " shabloniga mos kelishi kerak";
          } else {
            let format = table2[code.format];
            if (null == format) {
              format = code.format;
            }
            const _HermesInternal5 = HermesInternal;
            combined4 = "Noto\u2018g\u2018ri " + format;
          }
          return combined4;
        } else if ("not_multiple_of" === code) {
          const _HermesInternal4 = HermesInternal;
          return "Noto\u2018g\u2018ri raqam: " + code.divisor + " ning karralisi bo\u2018lishi kerak";
        } else if ("unrecognized_keys" === code) {
          let str9 = "";
          if (code.keys.length > 1) {
            str9 = "lar";
          }
          const _HermesInternal3 = HermesInternal;
          return "Noma\u2019lum kalit" + str9 + ": " + closure_2.joinValues(code.keys, ", ");
        } else {
          str = "invalid_key";
          if ("invalid_key" === code) {
            const _HermesInternal2 = HermesInternal;
            return "" + code.origin + " dagi kalit noto\u2018g\u2018ri";
          } else {
            if ("invalid_union" !== code) {
              if ("invalid_element" === code) {
                const _HermesInternal = HermesInternal;
                return "" + code.origin + " da noto\u2018g\u2018ri qiymat";
              }
            }
            return "Noto\u2018g\u2018ri kirish";
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
