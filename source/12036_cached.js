// Module ID: 12036
// Function ID: 93586
// Name: cached
// Dependencies: [12013]

// Module 12036 (cached)
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
      let closure_0 = { string: { unit: "karakter", verb: "legyen" }, file: { unit: "byte", verb: "legyen" }, array: { unit: "elem", verb: "legyen" }, set: { unit: "elem", verb: "legyen" } };
      let closure_1 = { regex: "bemenet", email: "email c\u00EDm", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO id\u0151b\u00E9lyeg", date: "ISO d\u00E1tum", time: "ISO id\u0151", duration: "ISO id\u0151intervallum", ipv4: "IPv4 c\u00EDm", ipv6: "IPv6 c\u00EDm", cidrv4: "IPv4 tartom\u00E1ny", cidrv6: "IPv6 tartom\u00E1ny", base64: "base64-k\u00F3dolt string", base64url: "base64url-k\u00F3dolt string", json_string: "JSON string", e164: "E.164 sz\u00E1m", jwt: "JWT", template_literal: "bemenet" };
      let closure_2 = { nan: "NaN", number: "sz\u00E1m", array: "t\u00F6mb" };
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
            let combined = "\u00C9rv\u00E9nytelen bemenet: a v\u00E1rt \u00E9rt\u00E9k instanceof " + code.expected + ", a kapott \u00E9rt\u00E9k " + tmp51;
          } else {
            const _HermesInternal16 = HermesInternal;
            combined = "\u00C9rv\u00E9nytelen bemenet: a v\u00E1rt \u00E9rt\u00E9k " + expected + ", a kapott \u00E9rt\u00E9k " + tmp51;
          }
          return combined;
        } else if ("invalid_value" === code) {
          if (1 === code.values.length) {
            const _HermesInternal15 = HermesInternal;
            let combined1 = "\u00C9rv\u00E9nytelen bemenet: a v\u00E1rt \u00E9rt\u00E9k " + closure_2.stringifyPrimitive(code.values[0]);
          } else {
            const _HermesInternal14 = HermesInternal;
            combined1 = "\u00C9rv\u00E9nytelen opci\u00F3: valamelyik \u00E9rt\u00E9k v\u00E1rt " + closure_2.joinValues(code.values, "|");
          }
          return combined1;
        } else if ("too_big" === code) {
          let str30 = "<";
          if (code.inclusive) {
            str30 = "<=";
          }
          const tmp26 = getSizing(code.origin);
          const origin2 = code.origin;
          let str31 = "\u00E9rt\u00E9k";
          if (tmp26) {
            if (tmp28) {
              str31 = origin2;
            }
            let str = code.maximum.toString();
            const unit = tmp26.unit;
            let str36 = "elem";
            if (null != unit) {
              str36 = unit;
            }
            const _HermesInternal13 = HermesInternal;
            let combined2 = "T\u00FAl nagy: " + str31 + " m\u00E9rete t\u00FAl nagy " + str30 + str + " " + str36;
            const str35 = code.maximum;
          } else {
            let tmp29 = str31;
            if (tmp28) {
              tmp29 = origin2;
            }
            const _HermesInternal12 = HermesInternal;
            combined2 = "T\u00FAl nagy: a bemeneti \u00E9rt\u00E9k " + tmp29 + " t\u00FAl nagy: " + str30 + code.maximum.toString();
            const str32 = code.maximum;
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
            let combined3 = "T\u00FAl kicsi: a bemeneti \u00E9rt\u00E9k " + origin + " m\u00E9rete t\u00FAl kicsi " + str24 + str1 + " " + tmp15.unit;
          } else {
            const _HermesInternal10 = HermesInternal;
            combined3 = "T\u00FAl kicsi: a bemeneti \u00E9rt\u00E9k " + origin + " t\u00FAl kicsi " + str24 + str1;
          }
          return combined3;
        } else if ("invalid_format" === code) {
          if ("starts_with" === code.format) {
            const _HermesInternal9 = HermesInternal;
            let combined4 = "\u00C9rv\u00E9nytelen string: \"" + code.prefix + "\" \u00E9rt\u00E9kkel kell kezd\u0151dnie";
          } else if ("ends_with" === code.format) {
            const _HermesInternal8 = HermesInternal;
            combined4 = "\u00C9rv\u00E9nytelen string: \"" + code.suffix + "\" \u00E9rt\u00E9kkel kell v\u00E9gz\u0151dnie";
          } else if ("includes" === code.format) {
            const _HermesInternal7 = HermesInternal;
            combined4 = "\u00C9rv\u00E9nytelen string: \"" + code.includes + "\" \u00E9rt\u00E9ket kell tartalmaznia";
          } else if ("regex" === code.format) {
            const _HermesInternal6 = HermesInternal;
            combined4 = "\u00C9rv\u00E9nytelen string: " + code.pattern + " mint\u00E1nak kell megfelelnie";
          } else {
            let format = table2[code.format];
            if (null == format) {
              format = code.format;
            }
            const _HermesInternal5 = HermesInternal;
            combined4 = "\u00C9rv\u00E9nytelen " + format;
          }
          return combined4;
        } else if ("not_multiple_of" === code) {
          const _HermesInternal4 = HermesInternal;
          return "\u00C9rv\u00E9nytelen sz\u00E1m: " + code.divisor + " t\u00F6bbsz\u00F6r\u00F6s\u00E9nek kell lennie";
        } else if ("unrecognized_keys" === code) {
          let str7 = "";
          if (code.keys.length > 1) {
            str7 = "s";
          }
          const _HermesInternal3 = HermesInternal;
          return "Ismeretlen kulcs" + str7 + ": " + closure_2.joinValues(code.keys, ", ");
        } else {
          str = "invalid_key";
          if ("invalid_key" === code) {
            const _HermesInternal2 = HermesInternal;
            return "\u00C9rv\u00E9nytelen kulcs " + code.origin;
          } else {
            if ("invalid_union" !== code) {
              if ("invalid_element" === code) {
                const _HermesInternal = HermesInternal;
                return "\u00C9rv\u00E9nytelen \u00E9rt\u00E9k: " + code.origin;
              }
            }
            return "\u00C9rv\u00E9nytelen bemenet";
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
