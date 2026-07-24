// Module ID: 12065
// Function ID: 93857
// Name: cached
// Dependencies: [12039]

// Module 12065 (cached)
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
      let closure_0 = { string: { unit: "stafi", verb: "a\u00F0 hafa" }, file: { unit: "b\u00E6ti", verb: "a\u00F0 hafa" }, array: { unit: "hluti", verb: "a\u00F0 hafa" }, set: { unit: "hluti", verb: "a\u00F0 hafa" } };
      let closure_1 = { regex: "gildi", email: "netfang", url: "vefsl\u00F3\u00F0", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO dagsetning og t\u00EDmi", date: "ISO dagsetning", time: "ISO t\u00EDmi", duration: "ISO t\u00EDmalengd", ipv4: "IPv4 address", ipv6: "IPv6 address", cidrv4: "IPv4 range", cidrv6: "IPv6 range", base64: "base64-encoded strengur", base64url: "base64url-encoded strengur", json_string: "JSON strengur", e164: "E.164 t\u00F6lugildi", jwt: "JWT", template_literal: "gildi" };
      let closure_2 = { nan: "NaN", number: "n\u00FAmer", array: "fylki" };
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
            let combined = "Rangt gildi: \u00DE\u00FA sl\u00F3st inn " + tmp51 + " \u00FEar sem \u00E1 a\u00F0 vera instanceof " + code.expected;
          } else {
            const _HermesInternal16 = HermesInternal;
            combined = "Rangt gildi: \u00DE\u00FA sl\u00F3st inn " + tmp51 + " \u00FEar sem \u00E1 a\u00F0 vera " + expected;
          }
          return combined;
        } else if ("invalid_value" === code) {
          if (1 === code.values.length) {
            const _HermesInternal15 = HermesInternal;
            let combined1 = "Rangt gildi: gert r\u00E1\u00F0 fyrir " + closure_2.stringifyPrimitive(code.values[0]);
          } else {
            const _HermesInternal14 = HermesInternal;
            combined1 = "\u00D3gilt val: m\u00E1 vera eitt af eftirfarandi " + closure_2.joinValues(code.values, "|");
          }
          return combined1;
        } else if ("too_big" === code) {
          let str28 = "<";
          if (code.inclusive) {
            str28 = "<=";
          }
          const tmp26 = getSizing(code.origin);
          const origin2 = code.origin;
          let str29 = "gildi";
          if (tmp26) {
            if (tmp28) {
              str29 = origin2;
            }
            let str = code.maximum.toString();
            const unit = tmp26.unit;
            let str34 = "hluti";
            if (null != unit) {
              str34 = unit;
            }
            const _HermesInternal13 = HermesInternal;
            let combined2 = "Of st\u00F3rt: gert er r\u00E1\u00F0 fyrir a\u00F0 " + str29 + " hafi " + str28 + str + " " + str34;
            const str33 = code.maximum;
          } else {
            let tmp29 = str29;
            if (tmp28) {
              tmp29 = origin2;
            }
            const _HermesInternal12 = HermesInternal;
            combined2 = "Of st\u00F3rt: gert er r\u00E1\u00F0 fyrir a\u00F0 " + tmp29 + " s\u00E9 " + str28 + code.maximum.toString();
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
            let combined3 = "Of l\u00EDti\u00F0: gert er r\u00E1\u00F0 fyrir a\u00F0 " + origin + " hafi " + str22 + str1 + " " + tmp15.unit;
          } else {
            const _HermesInternal10 = HermesInternal;
            combined3 = "Of l\u00EDti\u00F0: gert er r\u00E1\u00F0 fyrir a\u00F0 " + origin + " s\u00E9 " + str22 + str1;
          }
          return combined3;
        } else if ("invalid_format" === code) {
          if ("starts_with" === code.format) {
            const _HermesInternal9 = HermesInternal;
            let combined4 = "\u00D3gildur strengur: ver\u00F0ur a\u00F0 byrja \u00E1 \"" + code.prefix + "\"";
          } else if ("ends_with" === code.format) {
            const _HermesInternal8 = HermesInternal;
            combined4 = "\u00D3gildur strengur: ver\u00F0ur a\u00F0 enda \u00E1 \"" + code.suffix + "\"";
          } else if ("includes" === code.format) {
            const _HermesInternal7 = HermesInternal;
            combined4 = "\u00D3gildur strengur: ver\u00F0ur a\u00F0 innihalda \"" + code.includes + "\"";
          } else if ("regex" === code.format) {
            const _HermesInternal6 = HermesInternal;
            combined4 = "\u00D3gildur strengur: ver\u00F0ur a\u00F0 fylgja mynstri " + code.pattern;
          } else {
            let format = table2[code.format];
            if (null == format) {
              format = code.format;
            }
            const _HermesInternal5 = HermesInternal;
            combined4 = "Rangt " + format;
          }
          return combined4;
        } else if ("not_multiple_of" === code) {
          const _HermesInternal4 = HermesInternal;
          return "R\u00F6ng tala: ver\u00F0ur a\u00F0 vera margfeldi af " + code.divisor;
        } else if ("unrecognized_keys" === code) {
          let str7 = "ur lykill";
          if (code.keys.length > 1) {
            str7 = "ir lyklar";
          }
          const _HermesInternal3 = HermesInternal;
          return "\u00D3\u00FEekkt " + str7 + ": " + closure_2.joinValues(code.keys, ", ");
        } else {
          str = "invalid_key";
          if ("invalid_key" === code) {
            const _HermesInternal2 = HermesInternal;
            return "Rangur lykill \u00ED " + code.origin;
          } else {
            if ("invalid_union" !== code) {
              if ("invalid_element" === code) {
                const _HermesInternal = HermesInternal;
                return "Rangt gildi \u00ED " + code.origin;
              }
            }
            return "Rangt gildi";
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
