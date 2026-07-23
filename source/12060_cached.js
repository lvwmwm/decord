// Module ID: 12060
// Function ID: 93847
// Name: cached
// Dependencies: [12013]

// Module 12060 (cached)
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
      let closure_0 = { string: { unit: "karakter", verb: "olmal\u0131" }, file: { unit: "bayt", verb: "olmal\u0131" }, array: { unit: "\u00F6\u011Fe", verb: "olmal\u0131" }, set: { unit: "\u00F6\u011Fe", verb: "olmal\u0131" } };
      let closure_1 = { regex: "girdi", email: "e-posta adresi", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO tarih ve saat", date: "ISO tarih", time: "ISO saat", duration: "ISO s\u00FCre", ipv4: "IPv4 adresi", ipv6: "IPv6 adresi", cidrv4: "IPv4 aral\u0131\u011F\u0131", cidrv6: "IPv6 aral\u0131\u011F\u0131", base64: "base64 ile \u015Fifrelenmi\u015F metin", base64url: "base64url ile \u015Fifrelenmi\u015F metin", json_string: "JSON dizesi", e164: "E.164 say\u0131s\u0131", jwt: "JWT", template_literal: "\u015Eablon dizesi" };
      let closure_2 = { nan: "NaN" };
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
            let combined = "Ge\u00E7ersiz de\u011Fer: beklenen instanceof " + code.expected + ", al\u0131nan " + tmp51;
          } else {
            const _HermesInternal16 = HermesInternal;
            combined = "Ge\u00E7ersiz de\u011Fer: beklenen " + expected + ", al\u0131nan " + tmp51;
          }
          return combined;
        } else if ("invalid_value" === code) {
          if (1 === code.values.length) {
            const _HermesInternal15 = HermesInternal;
            let combined1 = "Ge\u00E7ersiz de\u011Fer: beklenen " + closure_2.stringifyPrimitive(code.values[0]);
          } else {
            const _HermesInternal14 = HermesInternal;
            combined1 = "Ge\u00E7ersiz se\u00E7enek: a\u015Fa\u011F\u0131dakilerden biri olmal\u0131: " + closure_2.joinValues(code.values, "|");
          }
          return combined1;
        } else if ("too_big" === code) {
          let str33 = "<";
          if (code.inclusive) {
            str33 = "<=";
          }
          const tmp26 = getSizing(code.origin);
          const origin2 = code.origin;
          let str34 = "de\u011Fer";
          if (tmp26) {
            if (tmp28) {
              str34 = origin2;
            }
            let str = code.maximum.toString();
            const unit = tmp26.unit;
            let str39 = "\u00F6\u011Fe";
            if (null != unit) {
              str39 = unit;
            }
            const _HermesInternal13 = HermesInternal;
            let combined2 = "\u00C7ok b\u00FCy\u00FCk: beklenen " + str34 + " " + str33 + str + " " + str39;
            const str38 = code.maximum;
          } else {
            let tmp29 = str34;
            if (tmp28) {
              tmp29 = origin2;
            }
            const _HermesInternal12 = HermesInternal;
            combined2 = "\u00C7ok b\u00FCy\u00FCk: beklenen " + tmp29 + " " + str33 + code.maximum.toString();
            const str35 = code.maximum;
          }
          return combined2;
        } else if ("too_small" === code) {
          let str26 = ">";
          if (code.inclusive) {
            str26 = ">=";
          }
          const tmp15 = getSizing(code.origin);
          ({ origin, minimum } = code);
          const str1 = minimum.toString();
          if (tmp15) {
            const _HermesInternal11 = HermesInternal;
            let combined3 = "\u00C7ok k\u00FC\u00E7\u00FCk: beklenen " + origin + " " + str26 + str1 + " " + tmp15.unit;
          } else {
            const _HermesInternal10 = HermesInternal;
            combined3 = "\u00C7ok k\u00FC\u00E7\u00FCk: beklenen " + origin + " " + str26 + str1;
          }
          return combined3;
        } else if ("invalid_format" === code) {
          if ("starts_with" === code.format) {
            const _HermesInternal9 = HermesInternal;
            let combined4 = "Ge\u00E7ersiz metin: \"" + code.prefix + "\" ile ba\u015Flamal\u0131";
          } else if ("ends_with" === code.format) {
            const _HermesInternal8 = HermesInternal;
            combined4 = "Ge\u00E7ersiz metin: \"" + code.suffix + "\" ile bitmeli";
          } else if ("includes" === code.format) {
            const _HermesInternal7 = HermesInternal;
            combined4 = "Ge\u00E7ersiz metin: \"" + code.includes + "\" i\u00E7ermeli";
          } else if ("regex" === code.format) {
            const _HermesInternal6 = HermesInternal;
            combined4 = "Ge\u00E7ersiz metin: " + code.pattern + " desenine uymal\u0131";
          } else {
            let format = table2[code.format];
            if (null == format) {
              format = code.format;
            }
            const _HermesInternal5 = HermesInternal;
            combined4 = "Ge\u00E7ersiz " + format;
          }
          return combined4;
        } else if ("not_multiple_of" === code) {
          const _HermesInternal4 = HermesInternal;
          return "Ge\u00E7ersiz say\u0131: " + code.divisor + " ile tam b\u00F6l\u00FCnebilmeli";
        } else if ("unrecognized_keys" === code) {
          let str9 = "";
          if (code.keys.length > 1) {
            str9 = "lar";
          }
          const _HermesInternal3 = HermesInternal;
          return "Tan\u0131nmayan anahtar" + str9 + ": " + closure_2.joinValues(code.keys, ", ");
        } else {
          str = "invalid_key";
          if ("invalid_key" === code) {
            const _HermesInternal2 = HermesInternal;
            return "" + code.origin + " i\u00E7inde ge\u00E7ersiz anahtar";
          } else {
            if ("invalid_union" !== code) {
              if ("invalid_element" === code) {
                const _HermesInternal = HermesInternal;
                return "" + code.origin + " i\u00E7inde ge\u00E7ersiz de\u011Fer";
              }
            }
            return "Ge\u00E7ersiz de\u011Fer";
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
