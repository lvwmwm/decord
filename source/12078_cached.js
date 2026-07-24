// Module ID: 12078
// Function ID: 93994
// Name: cached
// Dependencies: [12039]

// Module 12078 (cached)
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
      let closure_0 = { string: { unit: "\u062A\u0648\u06A9\u064A", verb: "\u0648\u0644\u0631\u064A" }, file: { unit: "\u0628\u0627\u06CC\u067C\u0633", verb: "\u0648\u0644\u0631\u064A" }, array: { unit: "\u062A\u0648\u06A9\u064A", verb: "\u0648\u0644\u0631\u064A" }, set: { unit: "\u062A\u0648\u06A9\u064A", verb: "\u0648\u0644\u0631\u064A" } };
      let closure_1 = { regex: "\u0648\u0631\u0648\u062F\u064A", email: "\u0628\u0631\u06CC\u069A\u0646\u0627\u0644\u06CC\u06A9", url: "\u06CC\u0648 \u0622\u0631 \u0627\u0644", emoji: "\u0627\u06CC\u0645\u0648\u062C\u064A", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "\u0646\u06CC\u067C\u0647 \u0627\u0648 \u0648\u062E\u062A", date: "\u0646\u06D0\u067C\u0647", time: "\u0648\u062E\u062A", duration: "\u0645\u0648\u062F\u0647", ipv4: "\u062F IPv4 \u067E\u062A\u0647", ipv6: "\u062F IPv6 \u067E\u062A\u0647", cidrv4: "\u062F IPv4 \u0633\u0627\u062D\u0647", cidrv6: "\u062F IPv6 \u0633\u0627\u062D\u0647", base64: "base64-encoded \u0645\u062A\u0646", base64url: "base64url-encoded \u0645\u062A\u0646", json_string: "JSON \u0645\u062A\u0646", e164: "\u062F E.164 \u0634\u0645\u06D0\u0631\u0647", jwt: "JWT", template_literal: "\u0648\u0631\u0648\u062F\u064A" };
      let closure_2 = { nan: "NaN", number: "\u0639\u062F\u062F", array: "\u0627\u0631\u06D0" };
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
            let combined = "\u0646\u0627\u0633\u0645 \u0648\u0631\u0648\u062F\u064A: \u0628\u0627\u06CC\u062F instanceof " + code.expected + " \u0648\u0627\u06CC, \u0645\u06AB\u0631 " + tmp51 + " \u062A\u0631\u0644\u0627\u0633\u0647 \u0634\u0648";
          } else {
            const _HermesInternal16 = HermesInternal;
            combined = "\u0646\u0627\u0633\u0645 \u0648\u0631\u0648\u062F\u064A: \u0628\u0627\u06CC\u062F " + expected + " \u0648\u0627\u06CC, \u0645\u06AB\u0631 " + tmp51 + " \u062A\u0631\u0644\u0627\u0633\u0647 \u0634\u0648";
          }
          return combined;
        } else if ("invalid_value" === code) {
          if (1 === code.values.length) {
            const _HermesInternal15 = HermesInternal;
            let combined1 = "\u0646\u0627\u0633\u0645 \u0648\u0631\u0648\u062F\u064A: \u0628\u0627\u06CC\u062F " + closure_2.stringifyPrimitive(code.values[0]) + " \u0648\u0627\u06CC";
          } else {
            const _HermesInternal14 = HermesInternal;
            combined1 = "\u0646\u0627\u0633\u0645 \u0627\u0646\u062A\u062E\u0627\u0628: \u0628\u0627\u06CC\u062F \u06CC\u0648 \u0644\u0647 " + closure_2.joinValues(code.values, "|") + " \u0685\u062E\u0647 \u0648\u0627\u06CC";
          }
          return combined1;
        } else if ("too_big" === code) {
          let str35 = "<";
          if (code.inclusive) {
            str35 = "<=";
          }
          const tmp26 = getSizing(code.origin);
          const origin2 = code.origin;
          let str36 = "\u0627\u0631\u0632\u069A\u062A";
          if (tmp26) {
            if (tmp28) {
              str36 = origin2;
            }
            let str = code.maximum.toString();
            const unit = tmp26.unit;
            let str42 = "\u0639\u0646\u0635\u0631\u0648\u0646\u0647";
            if (null != unit) {
              str42 = unit;
            }
            const _HermesInternal13 = HermesInternal;
            let combined2 = "\u0689\u06CC\u0631 \u0644\u0648\u06CC: " + str36 + " \u0628\u0627\u06CC\u062F " + str35 + str + " " + str42 + " \u0648\u0644\u0631\u064A";
            const str41 = code.maximum;
          } else {
            let tmp29 = str36;
            if (tmp28) {
              tmp29 = origin2;
            }
            const _HermesInternal12 = HermesInternal;
            combined2 = "\u0689\u06CC\u0631 \u0644\u0648\u06CC: " + tmp29 + " \u0628\u0627\u06CC\u062F " + str35 + code.maximum.toString() + " \u0648\u064A";
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
            let combined3 = "\u0689\u06CC\u0631 \u06A9\u0648\u0686\u0646\u06CC: " + origin + " \u0628\u0627\u06CC\u062F " + str27 + str1 + " " + tmp15.unit + " \u0648\u0644\u0631\u064A";
          } else {
            const _HermesInternal10 = HermesInternal;
            combined3 = "\u0689\u06CC\u0631 \u06A9\u0648\u0686\u0646\u06CC: " + origin + " \u0628\u0627\u06CC\u062F " + str27 + str1 + " \u0648\u064A";
          }
          return combined3;
        } else if ("invalid_format" === code) {
          if ("starts_with" === code.format) {
            const _HermesInternal9 = HermesInternal;
            let combined4 = "\u0646\u0627\u0633\u0645 \u0645\u062A\u0646: \u0628\u0627\u06CC\u062F \u062F \"" + code.prefix + "\" \u0633\u0631\u0647 \u067E\u06CC\u0644 \u0634\u064A";
          } else if ("ends_with" === code.format) {
            const _HermesInternal8 = HermesInternal;
            combined4 = "\u0646\u0627\u0633\u0645 \u0645\u062A\u0646: \u0628\u0627\u06CC\u062F \u062F \"" + code.suffix + "\" \u0633\u0631\u0647 \u067E\u0627\u06CC \u062A\u0647 \u0648\u0631\u0633\u064A\u0696\u064A";
          } else if ("includes" === code.format) {
            const _HermesInternal7 = HermesInternal;
            combined4 = "\u0646\u0627\u0633\u0645 \u0645\u062A\u0646: \u0628\u0627\u06CC\u062F \"" + code.includes + "\" \u0648\u0644\u0631\u064A";
          } else if ("regex" === code.format) {
            const _HermesInternal6 = HermesInternal;
            combined4 = "\u0646\u0627\u0633\u0645 \u0645\u062A\u0646: \u0628\u0627\u06CC\u062F \u062F " + code.pattern + " \u0633\u0631\u0647 \u0645\u0637\u0627\u0628\u0642\u062A \u0648\u0644\u0631\u064A";
          } else {
            let format = table2[code.format];
            if (null == format) {
              format = code.format;
            }
            const _HermesInternal5 = HermesInternal;
            combined4 = "" + format + " \u0646\u0627\u0633\u0645 \u062F\u06CC";
          }
          return combined4;
        } else if ("not_multiple_of" === code) {
          const _HermesInternal4 = HermesInternal;
          return "\u0646\u0627\u0633\u0645 \u0639\u062F\u062F: \u0628\u0627\u06CC\u062F \u062F " + code.divisor + " \u0645\u0636\u0631\u0628 \u0648\u064A";
        } else if ("unrecognized_keys" === code) {
          let str9 = "\u06A9\u0644\u06CC\u0689";
          if (code.keys.length > 1) {
            str9 = "\u06A9\u0644\u06CC\u0689\u0648\u0646\u0647";
          }
          const _HermesInternal3 = HermesInternal;
          return "\u0646\u0627\u0633\u0645 " + str9 + ": " + closure_2.joinValues(code.keys, ", ");
        } else {
          str = "invalid_key";
          if ("invalid_key" === code) {
            const _HermesInternal2 = HermesInternal;
            return "\u0646\u0627\u0633\u0645 \u06A9\u0644\u06CC\u0689 \u067E\u0647 " + code.origin + " \u06A9\u06D0";
          } else {
            if ("invalid_union" !== code) {
              if ("invalid_element" === code) {
                const _HermesInternal = HermesInternal;
                return "\u0646\u0627\u0633\u0645 \u0639\u0646\u0635\u0631 \u067E\u0647 " + code.origin + " \u06A9\u06D0";
              }
            }
            return "\u0646\u0627\u0633\u0645\u0647 \u0648\u0631\u0648\u062F\u064A";
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
