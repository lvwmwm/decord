// Module ID: 12092
// Function ID: 94141
// Name: cached
// Dependencies: [12039]

// Module 12092 (cached)
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
      let closure_0 = { string: { unit: "\u5B57\u7B26", verb: "\u5305\u542B" }, file: { unit: "\u5B57\u8282", verb: "\u5305\u542B" }, array: { unit: "\u9879", verb: "\u5305\u542B" }, set: { unit: "\u9879", verb: "\u5305\u542B" } };
      let closure_1 = { regex: "\u8F93\u5165", email: "\u7535\u5B50\u90AE\u4EF6", url: "URL", emoji: "\u8868\u60C5\u7B26\u53F7", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO\u65E5\u671F\u65F6\u95F4", date: "ISO\u65E5\u671F", time: "ISO\u65F6\u95F4", duration: "ISO\u65F6\u957F", ipv4: "IPv4\u5730\u5740", ipv6: "IPv6\u5730\u5740", cidrv4: "IPv4\u7F51\u6BB5", cidrv6: "IPv6\u7F51\u6BB5", base64: "base64\u7F16\u7801\u5B57\u7B26\u4E32", base64url: "base64url\u7F16\u7801\u5B57\u7B26\u4E32", json_string: "JSON\u5B57\u7B26\u4E32", e164: "E.164\u53F7\u7801", jwt: "JWT", template_literal: "\u8F93\u5165" };
      let closure_2 = { nan: "NaN", number: "\u6570\u5B57", array: "\u6570\u7EC4", null: "\u7A7A\u503C(null)" };
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
            let combined = "\u65E0\u6548\u8F93\u5165\uFF1A\u671F\u671B instanceof " + code.expected + "\uFF0C\u5B9E\u9645\u63A5\u6536 " + tmp51;
          } else {
            const _HermesInternal16 = HermesInternal;
            combined = "\u65E0\u6548\u8F93\u5165\uFF1A\u671F\u671B " + expected + "\uFF0C\u5B9E\u9645\u63A5\u6536 " + tmp51;
          }
          return combined;
        } else if ("invalid_value" === code) {
          if (1 === code.values.length) {
            const _HermesInternal15 = HermesInternal;
            let combined1 = "\u65E0\u6548\u8F93\u5165\uFF1A\u671F\u671B " + closure_2.stringifyPrimitive(code.values[0]);
          } else {
            const _HermesInternal14 = HermesInternal;
            combined1 = "\u65E0\u6548\u9009\u9879\uFF1A\u671F\u671B\u4EE5\u4E0B\u4E4B\u4E00 " + closure_2.joinValues(code.values, "|");
          }
          return combined1;
        } else if ("too_big" === code) {
          let str30 = "<";
          if (code.inclusive) {
            str30 = "<=";
          }
          const tmp26 = getSizing(code.origin);
          const origin2 = code.origin;
          let str31 = "\u503C";
          if (tmp26) {
            if (tmp28) {
              str31 = origin2;
            }
            let str = code.maximum.toString();
            const unit = tmp26.unit;
            let str36 = "\u4E2A\u5143\u7D20";
            if (null != unit) {
              str36 = unit;
            }
            const _HermesInternal13 = HermesInternal;
            let combined2 = "\u6570\u503C\u8FC7\u5927\uFF1A\u671F\u671B " + str31 + " " + str30 + str + " " + str36;
            const str35 = code.maximum;
          } else {
            let tmp29 = str31;
            if (tmp28) {
              tmp29 = origin2;
            }
            const _HermesInternal12 = HermesInternal;
            combined2 = "\u6570\u503C\u8FC7\u5927\uFF1A\u671F\u671B " + tmp29 + " " + str30 + code.maximum.toString();
            const str32 = code.maximum;
          }
          return combined2;
        } else if ("too_small" === code) {
          let str23 = ">";
          if (code.inclusive) {
            str23 = ">=";
          }
          const tmp15 = getSizing(code.origin);
          ({ origin, minimum } = code);
          const str1 = minimum.toString();
          if (tmp15) {
            const _HermesInternal11 = HermesInternal;
            let combined3 = "\u6570\u503C\u8FC7\u5C0F\uFF1A\u671F\u671B " + origin + " " + str23 + str1 + " " + tmp15.unit;
          } else {
            const _HermesInternal10 = HermesInternal;
            combined3 = "\u6570\u503C\u8FC7\u5C0F\uFF1A\u671F\u671B " + origin + " " + str23 + str1;
          }
          return combined3;
        } else if ("invalid_format" === code) {
          if ("starts_with" === code.format) {
            const _HermesInternal9 = HermesInternal;
            let combined4 = "\u65E0\u6548\u5B57\u7B26\u4E32\uFF1A\u5FC5\u987B\u4EE5 \"" + code.prefix + "\" \u5F00\u5934";
          } else if ("ends_with" === code.format) {
            const _HermesInternal8 = HermesInternal;
            combined4 = "\u65E0\u6548\u5B57\u7B26\u4E32\uFF1A\u5FC5\u987B\u4EE5 \"" + code.suffix + "\" \u7ED3\u5C3E";
          } else if ("includes" === code.format) {
            const _HermesInternal7 = HermesInternal;
            combined4 = "\u65E0\u6548\u5B57\u7B26\u4E32\uFF1A\u5FC5\u987B\u5305\u542B \"" + code.includes + "\"";
          } else if ("regex" === code.format) {
            const _HermesInternal6 = HermesInternal;
            combined4 = "\u65E0\u6548\u5B57\u7B26\u4E32\uFF1A\u5FC5\u987B\u6EE1\u8DB3\u6B63\u5219\u8868\u8FBE\u5F0F " + code.pattern;
          } else {
            let format = table2[code.format];
            if (null == format) {
              format = code.format;
            }
            const _HermesInternal5 = HermesInternal;
            combined4 = "\u65E0\u6548" + format;
          }
          return combined4;
        } else if ("not_multiple_of" === code) {
          const _HermesInternal4 = HermesInternal;
          return "\u65E0\u6548\u6570\u5B57\uFF1A\u5FC5\u987B\u662F " + code.divisor + " \u7684\u500D\u6570";
        } else if ("unrecognized_keys" === code) {
          const _HermesInternal3 = HermesInternal;
          return "\u51FA\u73B0\u672A\u77E5\u7684\u952E(key): " + closure_2.joinValues(code.keys, ", ");
        } else {
          str = "invalid_key";
          if ("invalid_key" === code) {
            const _HermesInternal2 = HermesInternal;
            return "" + code.origin + " \u4E2D\u7684\u952E(key)\u65E0\u6548";
          } else {
            if ("invalid_union" !== code) {
              if ("invalid_element" === code) {
                const _HermesInternal = HermesInternal;
                return "" + code.origin + " \u4E2D\u5305\u542B\u65E0\u6548\u503C(value)";
              }
            }
            return "\u65E0\u6548\u8F93\u5165";
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
