// Module ID: 12051
// Function ID: 93747
// Name: cached
// Dependencies: [12013]

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
      let closure_0 = { string: { unit: "harf", verb: "olmal\u0131d\u0131r" }, file: { unit: "bayt", verb: "olmal\u0131d\u0131r" }, array: { unit: "unsur", verb: "olmal\u0131d\u0131r" }, set: { unit: "unsur", verb: "olmal\u0131d\u0131r" } };
      let closure_1 = { regex: "giren", email: "epostag\u00E2h", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO heng\u00E2m\u0131", date: "ISO tarihi", time: "ISO zaman\u0131", duration: "ISO m\u00FCddeti", ipv4: "IPv4 ni\u015F\u00E2n\u0131", ipv6: "IPv6 ni\u015F\u00E2n\u0131", cidrv4: "IPv4 menzili", cidrv6: "IPv6 menzili", base64: "base64-\u015Fifreli metin", base64url: "base64url-\u015Fifreli metin", json_string: "JSON metin", e164: "E.164 say\u0131s\u0131", jwt: "JWT", template_literal: "giren" };
      let closure_2 = { nan: "NaN", number: "numara", array: "saf", null: "gayb" };
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
            let combined = "F\u00E2sit giren: umulan instanceof " + code.expected + ", al\u0131nan " + tmp51;
          } else {
            const _HermesInternal16 = HermesInternal;
            combined = "F\u00E2sit giren: umulan " + expected + ", al\u0131nan " + tmp51;
          }
          return combined;
        } else if ("invalid_value" === code) {
          if (1 === code.values.length) {
            const _HermesInternal15 = HermesInternal;
            let combined1 = "F\u00E2sit giren: umulan " + closure_2.stringifyPrimitive(code.values[0]);
          } else {
            const _HermesInternal14 = HermesInternal;
            combined1 = "F\u00E2sit tercih: m\u00FBteberler " + closure_2.joinValues(code.values, "|");
          }
          return combined1;
        } else if ("too_big" === code) {
          let str35 = "<";
          if (code.inclusive) {
            str35 = "<=";
          }
          const tmp26 = getSizing(code.origin);
          const origin2 = code.origin;
          let str36 = "value";
          if (tmp26) {
            if (tmp28) {
              str36 = origin2;
            }
            let str = code.maximum.toString();
            const unit = tmp26.unit;
            let str42 = "elements";
            if (null != unit) {
              str42 = unit;
            }
            const _HermesInternal13 = HermesInternal;
            let combined2 = "Fazla b\u00FCy\u00FCk: " + str36 + ", " + str35 + str + " " + str42 + " sahip olmal\u0131yd\u0131.";
            const str41 = code.maximum;
          } else {
            let tmp29 = str36;
            if (tmp28) {
              tmp29 = origin2;
            }
            const _HermesInternal12 = HermesInternal;
            combined2 = "Fazla b\u00FCy\u00FCk: " + tmp29 + ", " + str35 + code.maximum.toString() + " olmal\u0131yd\u0131.";
            const str37 = code.maximum;
          }
          return combined2;
        } else if ("too_small" === code) {
          let str27 = ">";
          if (code.inclusive) {
            str27 = ">=";
          }
          const tmp15 = getSizing(code.origin);
          ({ origin, minimum } = code);
          const str1 = minimum.toString();
          if (tmp15) {
            const _HermesInternal11 = HermesInternal;
            let combined3 = "Fazla k\u00FC\u00E7\u00FCk: " + origin + ", " + str27 + str1 + " " + tmp15.unit + " sahip olmal\u0131yd\u0131.";
          } else {
            const _HermesInternal10 = HermesInternal;
            combined3 = "Fazla k\u00FC\u00E7\u00FCk: " + origin + ", " + str27 + str1 + " olmal\u0131yd\u0131.";
          }
          return combined3;
        } else if ("invalid_format" === code) {
          if ("starts_with" === code.format) {
            const _HermesInternal9 = HermesInternal;
            let combined4 = "F\u00E2sit metin: \"" + code.prefix + "\" ile ba\u015Flamal\u0131.";
          } else if ("ends_with" === code.format) {
            const _HermesInternal8 = HermesInternal;
            combined4 = "F\u00E2sit metin: \"" + code.suffix + "\" ile bitmeli.";
          } else if ("includes" === code.format) {
            const _HermesInternal7 = HermesInternal;
            combined4 = "F\u00E2sit metin: \"" + code.includes + "\" ihtiv\u00E2 etmeli.";
          } else if ("regex" === code.format) {
            const _HermesInternal6 = HermesInternal;
            combined4 = "F\u00E2sit metin: " + code.pattern + " nak\u015F\u0131na uymal\u0131.";
          } else {
            let format = table2[code.format];
            if (null == format) {
              format = code.format;
            }
            const _HermesInternal5 = HermesInternal;
            combined4 = "F\u00E2sit " + format;
          }
          return combined4;
        } else if ("not_multiple_of" === code) {
          const _HermesInternal4 = HermesInternal;
          return "F\u00E2sit say\u0131: " + code.divisor + " kat\u0131 olmal\u0131yd\u0131.";
        } else if ("unrecognized_keys" === code) {
          let str10 = "";
          if (code.keys.length > 1) {
            str10 = "s";
          }
          const _HermesInternal3 = HermesInternal;
          return "Tan\u0131nmayan anahtar " + str10 + ": " + closure_2.joinValues(code.keys, ", ");
        } else {
          str = "invalid_key";
          if ("invalid_key" === code) {
            const _HermesInternal2 = HermesInternal;
            return "" + code.origin + " i\u00E7in tan\u0131nmayan anahtar var.";
          } else if ("invalid_union" === code) {
            return "Giren tan\u0131namad\u0131.";
          } else if ("invalid_element" === code) {
            const _HermesInternal = HermesInternal;
            return "" + code.origin + " i\u00E7in tan\u0131nmayan k\u0131ymet var.";
          } else {
            return "K\u0131ymet tan\u0131namad\u0131.";
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
