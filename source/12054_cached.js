// Module ID: 12054
// Function ID: 93729
// Name: cached
// Dependencies: [12039]

// Module 12054 (cached)
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
      let closure_0 = { string: { unit: "characters", verb: "to have" }, file: { unit: "bytes", verb: "to have" }, array: { unit: "items", verb: "to have" }, set: { unit: "items", verb: "to have" }, map: { unit: "entries", verb: "to have" } };
      let closure_1 = { regex: "input", email: "email address", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO datetime", date: "ISO date", time: "ISO time", duration: "ISO duration", ipv4: "IPv4 address", ipv6: "IPv6 address", mac: "MAC address", cidrv4: "IPv4 range", cidrv6: "IPv6 range", base64: "base64-encoded string", base64url: "base64url-encoded string", json_string: "JSON string", e164: "E.164 number", jwt: "JWT", template_literal: "input" };
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
          const _HermesInternal16 = HermesInternal;
          return "Invalid input: expected " + expected + ", received " + tmp51;
        } else if ("invalid_value" === code) {
          if (1 === code.values.length) {
            const _HermesInternal15 = HermesInternal;
            let combined = "Invalid input: expected " + closure_2.stringifyPrimitive(code.values[0]);
          } else {
            const _HermesInternal14 = HermesInternal;
            combined = "Invalid option: expected one of " + closure_2.joinValues(code.values, "|");
          }
          return combined;
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
            let str34 = "elements";
            if (null != unit) {
              str34 = unit;
            }
            const _HermesInternal13 = HermesInternal;
            let combined1 = "Too big: expected " + str29 + " to have " + str28 + str + " " + str34;
            const str33 = code.maximum;
          } else {
            let tmp29 = str29;
            if (tmp28) {
              tmp29 = origin2;
            }
            const _HermesInternal12 = HermesInternal;
            combined1 = "Too big: expected " + tmp29 + " to be " + str28 + code.maximum.toString();
            const str30 = code.maximum;
          }
          return combined1;
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
            let combined2 = "Too small: expected " + origin + " to have " + str22 + str1 + " " + tmp15.unit;
          } else {
            const _HermesInternal10 = HermesInternal;
            combined2 = "Too small: expected " + origin + " to be " + str22 + str1;
          }
          return combined2;
        } else if ("invalid_format" === code) {
          if ("starts_with" === code.format) {
            const _HermesInternal9 = HermesInternal;
            let combined3 = "Invalid string: must start with \"" + code.prefix + "\"";
          } else if ("ends_with" === code.format) {
            const _HermesInternal8 = HermesInternal;
            combined3 = "Invalid string: must end with \"" + code.suffix + "\"";
          } else if ("includes" === code.format) {
            const _HermesInternal7 = HermesInternal;
            combined3 = "Invalid string: must include \"" + code.includes + "\"";
          } else if ("regex" === code.format) {
            const _HermesInternal6 = HermesInternal;
            combined3 = "Invalid string: must match pattern " + code.pattern;
          } else {
            let format = table2[code.format];
            if (null == format) {
              format = code.format;
            }
            const _HermesInternal5 = HermesInternal;
            combined3 = "Invalid " + format;
          }
          return combined3;
        } else if ("not_multiple_of" === code) {
          const _HermesInternal4 = HermesInternal;
          return "Invalid number: must be a multiple of " + code.divisor;
        } else if ("unrecognized_keys" === code) {
          let str7 = "";
          if (code.keys.length > 1) {
            str7 = "s";
          }
          const _HermesInternal3 = HermesInternal;
          return "Unrecognized key" + str7 + ": " + closure_2.joinValues(code.keys, ", ");
        } else {
          str = "invalid_key";
          if ("invalid_key" === code) {
            const _HermesInternal2 = HermesInternal;
            return "Invalid key in " + code.origin;
          } else {
            if ("invalid_union" !== code) {
              if ("invalid_element" === code) {
                const _HermesInternal = HermesInternal;
                return "Invalid value in " + code.origin;
              }
            }
            return "Invalid input";
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
