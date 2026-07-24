// Module ID: 12091
// Function ID: 94130
// Name: cached
// Dependencies: [12039]

// Module 12091 (cached)
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
      let closure_0 = { string: { unit: "k\u00FD t\u1EF1", verb: "c\u00F3" }, file: { unit: "byte", verb: "c\u00F3" }, array: { unit: "ph\u1EA7n t\u1EED", verb: "c\u00F3" }, set: { unit: "ph\u1EA7n t\u1EED", verb: "c\u00F3" } };
      let closure_1 = { regex: "\u0111\u1EA7u v\u00E0o", email: "\u0111\u1ECBa ch\u1EC9 email", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ng\u00E0y gi\u1EDD ISO", date: "ng\u00E0y ISO", time: "gi\u1EDD ISO", duration: "kho\u1EA3ng th\u1EDDi gian ISO", ipv4: "\u0111\u1ECBa ch\u1EC9 IPv4", ipv6: "\u0111\u1ECBa ch\u1EC9 IPv6", cidrv4: "d\u1EA3i IPv4", cidrv6: "d\u1EA3i IPv6", base64: "chu\u1ED7i m\u00E3 h\u00F3a base64", base64url: "chu\u1ED7i m\u00E3 h\u00F3a base64url", json_string: "chu\u1ED7i JSON", e164: "s\u1ED1 E.164", jwt: "JWT", template_literal: "\u0111\u1EA7u v\u00E0o" };
      let closure_2 = { nan: "NaN", number: "s\u1ED1", array: "m\u1EA3ng" };
      return (code) => {
        code = code.code;
        if ("invalid_type" === code) {
          let expected = closure_2[code.expected];
          if (null == expected) {
            expected = code.expected;
          }
          const parsedTypeResult = closure_2.parsedType(code.input);
          let tmp50 = parsedTypeResult;
          if (null != closure_2[parsedTypeResult]) {
            tmp50 = tmp49;
          }
          if (obj.test(code.expected)) {
            const _HermesInternal17 = HermesInternal;
            let combined = "\u0110\u1EA7u v\u00E0o kh\u00F4ng h\u1EE3p l\u1EC7: mong \u0111\u1EE3i instanceof " + code.expected + ", nh\u1EADn \u0111\u01B0\u1EE3c " + tmp50;
          } else {
            const _HermesInternal16 = HermesInternal;
            combined = "\u0110\u1EA7u v\u00E0o kh\u00F4ng h\u1EE3p l\u1EC7: mong \u0111\u1EE3i " + expected + ", nh\u1EADn \u0111\u01B0\u1EE3c " + tmp50;
          }
          return combined;
        } else if ("invalid_value" === code) {
          if (1 === code.values.length) {
            const _HermesInternal15 = HermesInternal;
            let combined1 = "\u0110\u1EA7u v\u00E0o kh\u00F4ng h\u1EE3p l\u1EC7: mong \u0111\u1EE3i " + closure_2.stringifyPrimitive(code.values[0]);
          } else {
            const _HermesInternal14 = HermesInternal;
            combined1 = "T\u00F9y ch\u1ECDn kh\u00F4ng h\u1EE3p l\u1EC7: mong \u0111\u1EE3i m\u1ED9t trong c\u00E1c gi\u00E1 tr\u1ECB " + closure_2.joinValues(code.values, "|");
          }
          return combined1;
        } else if ("too_big" === code) {
          let str31 = "<";
          if (code.inclusive) {
            str31 = "<=";
          }
          const tmp24 = getSizing(code.origin);
          const origin2 = code.origin;
          let str32 = "gi\u00E1 tr\u1ECB";
          if (tmp24) {
            if (tmp26) {
              str32 = origin2;
            }
            const verb = tmp24.verb;
            let str = code.maximum.toString();
            const unit = tmp24.unit;
            let str37 = "ph\u1EA7n t\u1EED";
            if (null != unit) {
              str37 = unit;
            }
            const _HermesInternal13 = HermesInternal;
            let combined2 = "Qu\u00E1 l\u1EDBn: mong \u0111\u1EE3i " + str32 + " " + verb + " " + str31 + str + " " + str37;
            const str36 = code.maximum;
          } else {
            let tmp27 = str32;
            if (tmp26) {
              tmp27 = origin2;
            }
            const _HermesInternal12 = HermesInternal;
            combined2 = "Qu\u00E1 l\u1EDBn: mong \u0111\u1EE3i " + tmp27 + " " + str31 + code.maximum.toString();
            const str33 = code.maximum;
          }
          return combined2;
        } else if ("too_small" === code) {
          let str21 = ">";
          if (code.inclusive) {
            str21 = ">=";
          }
          const tmp15 = getSizing(code.origin);
          const origin = code.origin;
          if (tmp15) {
            const _HermesInternal11 = HermesInternal;
            let combined3 = "Qu\u00E1 nh\u1ECF: mong \u0111\u1EE3i " + origin + " " + tmp15.verb + " " + str21 + code.minimum.toString() + " " + tmp15.unit;
            const str25 = code.minimum;
          } else {
            const _HermesInternal10 = HermesInternal;
            combined3 = "Qu\u00E1 nh\u1ECF: mong \u0111\u1EE3i " + origin + " " + str21 + code.minimum.toString();
            const str22 = code.minimum;
          }
          return combined3;
        } else if ("invalid_format" === code) {
          if ("starts_with" === code.format) {
            const _HermesInternal9 = HermesInternal;
            let combined4 = "Chu\u1ED7i kh\u00F4ng h\u1EE3p l\u1EC7: ph\u1EA3i b\u1EAFt \u0111\u1EA7u b\u1EB1ng \"" + code.prefix + "\"";
          } else if ("ends_with" === code.format) {
            const _HermesInternal8 = HermesInternal;
            combined4 = "Chu\u1ED7i kh\u00F4ng h\u1EE3p l\u1EC7: ph\u1EA3i k\u1EBFt th\u00FAc b\u1EB1ng \"" + code.suffix + "\"";
          } else if ("includes" === code.format) {
            const _HermesInternal7 = HermesInternal;
            combined4 = "Chu\u1ED7i kh\u00F4ng h\u1EE3p l\u1EC7: ph\u1EA3i bao g\u1ED3m \"" + code.includes + "\"";
          } else if ("regex" === code.format) {
            const _HermesInternal6 = HermesInternal;
            combined4 = "Chu\u1ED7i kh\u00F4ng h\u1EE3p l\u1EC7: ph\u1EA3i kh\u1EDBp v\u1EDBi m\u1EABu " + code.pattern;
          } else {
            let format = table2[code.format];
            if (null == format) {
              format = code.format;
            }
            const _HermesInternal5 = HermesInternal;
            combined4 = "" + format + " kh\u00F4ng h\u1EE3p l\u1EC7";
          }
          return combined4;
        } else if ("not_multiple_of" === code) {
          const _HermesInternal4 = HermesInternal;
          return "S\u1ED1 kh\u00F4ng h\u1EE3p l\u1EC7: ph\u1EA3i l\u00E0 b\u1ED9i s\u1ED1 c\u1EE7a " + code.divisor;
        } else if ("unrecognized_keys" === code) {
          const _HermesInternal3 = HermesInternal;
          return "Kh\u00F3a kh\u00F4ng \u0111\u01B0\u1EE3c nh\u1EADn d\u1EA1ng: " + closure_2.joinValues(code.keys, ", ");
        } else {
          str = "invalid_key";
          if ("invalid_key" === code) {
            const _HermesInternal2 = HermesInternal;
            return "Kh\u00F3a kh\u00F4ng h\u1EE3p l\u1EC7 trong " + code.origin;
          } else {
            if ("invalid_union" !== code) {
              if ("invalid_element" === code) {
                const _HermesInternal = HermesInternal;
                return "Gi\u00E1 tr\u1ECB kh\u00F4ng h\u1EE3p l\u1EC7 trong " + code.origin;
              }
            }
            return "\u0110\u1EA7u v\u00E0o kh\u00F4ng h\u1EE3p l\u1EC7";
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
