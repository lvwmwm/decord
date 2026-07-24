// Module ID: 12047
// Function ID: 93651
// Name: cached
// Dependencies: [12039]

// Module 12047 (cached)
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
      let closure_0 = { string: { unit: "simvol", verb: "olmal\u0131d\u0131r" }, file: { unit: "bayt", verb: "olmal\u0131d\u0131r" }, array: { unit: "element", verb: "olmal\u0131d\u0131r" }, set: { unit: "element", verb: "olmal\u0131d\u0131r" } };
      let closure_1 = { regex: "input", email: "email address", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO datetime", date: "ISO date", time: "ISO time", duration: "ISO duration", ipv4: "IPv4 address", ipv6: "IPv6 address", cidrv4: "IPv4 range", cidrv6: "IPv6 range", base64: "base64-encoded string", base64url: "base64url-encoded string", json_string: "JSON string", e164: "E.164 number", jwt: "JWT", template_literal: "input" };
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
            let combined = "Yanl\u0131\u015F d\u0259y\u0259r: g\u00F6zl\u0259nil\u0259n instanceof " + code.expected + ", daxil olan " + tmp51;
          } else {
            const _HermesInternal16 = HermesInternal;
            combined = "Yanl\u0131\u015F d\u0259y\u0259r: g\u00F6zl\u0259nil\u0259n " + expected + ", daxil olan " + tmp51;
          }
          return combined;
        } else if ("invalid_value" === code) {
          if (1 === code.values.length) {
            const _HermesInternal15 = HermesInternal;
            let combined1 = "Yanl\u0131\u015F d\u0259y\u0259r: g\u00F6zl\u0259nil\u0259n " + closure_2.stringifyPrimitive(code.values[0]);
          } else {
            const _HermesInternal14 = HermesInternal;
            combined1 = "Yanl\u0131\u015F se\u00E7im: a\u015Fa\u011F\u0131dak\u0131lardan biri olmal\u0131d\u0131r: " + closure_2.joinValues(code.values, "|");
          }
          return combined1;
        } else if ("too_big" === code) {
          let str33 = "<";
          if (code.inclusive) {
            str33 = "<=";
          }
          const tmp26 = getSizing(code.origin);
          const origin2 = code.origin;
          let str34 = "d\u0259y\u0259r";
          if (tmp26) {
            if (tmp28) {
              str34 = origin2;
            }
            let str = code.maximum.toString();
            const unit = tmp26.unit;
            let str39 = "element";
            if (null != unit) {
              str39 = unit;
            }
            const _HermesInternal13 = HermesInternal;
            let combined2 = "\u00C7ox b\u00F6y\u00FCk: g\u00F6zl\u0259nil\u0259n " + str34 + " " + str33 + str + " " + str39;
            const str38 = code.maximum;
          } else {
            let tmp29 = str34;
            if (tmp28) {
              tmp29 = origin2;
            }
            const _HermesInternal12 = HermesInternal;
            combined2 = "\u00C7ox b\u00F6y\u00FCk: g\u00F6zl\u0259nil\u0259n " + tmp29 + " " + str33 + code.maximum.toString();
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
            let combined3 = "\u00C7ox ki\u00E7ik: g\u00F6zl\u0259nil\u0259n " + origin + " " + str26 + str1 + " " + tmp15.unit;
          } else {
            const _HermesInternal10 = HermesInternal;
            combined3 = "\u00C7ox ki\u00E7ik: g\u00F6zl\u0259nil\u0259n " + origin + " " + str26 + str1;
          }
          return combined3;
        } else if ("invalid_format" === code) {
          if ("starts_with" === code.format) {
            const _HermesInternal9 = HermesInternal;
            let combined4 = "Yanl\u0131\u015F m\u0259tn: \"" + code.prefix + "\" il\u0259 ba\u015Flamal\u0131d\u0131r";
          } else if ("ends_with" === code.format) {
            const _HermesInternal8 = HermesInternal;
            combined4 = "Yanl\u0131\u015F m\u0259tn: \"" + code.suffix + "\" il\u0259 bitm\u0259lidir";
          } else if ("includes" === code.format) {
            const _HermesInternal7 = HermesInternal;
            combined4 = "Yanl\u0131\u015F m\u0259tn: \"" + code.includes + "\" daxil olmal\u0131d\u0131r";
          } else if ("regex" === code.format) {
            const _HermesInternal6 = HermesInternal;
            combined4 = "Yanl\u0131\u015F m\u0259tn: " + code.pattern + " \u015Fablonuna uy\u011Fun olmal\u0131d\u0131r";
          } else {
            let format = table2[code.format];
            if (null == format) {
              format = code.format;
            }
            const _HermesInternal5 = HermesInternal;
            combined4 = "Yanl\u0131\u015F " + format;
          }
          return combined4;
        } else if ("not_multiple_of" === code) {
          const _HermesInternal4 = HermesInternal;
          return "Yanl\u0131\u015F \u0259d\u0259d: " + code.divisor + " il\u0259 b\u00F6l\u00FCn\u0259 bil\u0259n olmal\u0131d\u0131r";
        } else if ("unrecognized_keys" === code) {
          let str9 = "";
          if (code.keys.length > 1) {
            str9 = "lar";
          }
          const _HermesInternal3 = HermesInternal;
          return "Tan\u0131nmayan a\u00E7ar" + str9 + ": " + closure_2.joinValues(code.keys, ", ");
        } else {
          str = "invalid_key";
          if ("invalid_key" === code) {
            const _HermesInternal2 = HermesInternal;
            return "" + code.origin + " daxilind\u0259 yanl\u0131\u015F a\u00E7ar";
          } else {
            if ("invalid_union" !== code) {
              if ("invalid_element" === code) {
                const _HermesInternal = HermesInternal;
                return "" + code.origin + " daxilind\u0259 yanl\u0131\u015F d\u0259y\u0259r";
              }
            }
            return "Yanl\u0131\u015F d\u0259y\u0259r";
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
