// Module ID: 12089
// Function ID: 94108
// Name: cached
// Dependencies: [12039]

// Module 12089 (cached)
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
      let closure_0 = { string: { unit: "\u062D\u0631\u0648\u0641", verb: "\u06C1\u0648\u0646\u0627" }, file: { unit: "\u0628\u0627\u0626\u0679\u0633", verb: "\u06C1\u0648\u0646\u0627" }, array: { unit: "\u0622\u0626\u0679\u0645\u0632", verb: "\u06C1\u0648\u0646\u0627" }, set: { unit: "\u0622\u0626\u0679\u0645\u0632", verb: "\u06C1\u0648\u0646\u0627" } };
      let closure_1 = { regex: "\u0627\u0646 \u067E\u0679", email: "\u0627\u06CC \u0645\u06CC\u0644 \u0627\u06CC\u0688\u0631\u06CC\u0633", url: "\u06CC\u0648 \u0622\u0631 \u0627\u06CC\u0644", emoji: "\u0627\u06CC\u0645\u0648\u062C\u06CC", uuid: "\u06CC\u0648 \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC", uuidv4: "\u06CC\u0648 \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC \u0648\u06CC 4", uuidv6: "\u06CC\u0648 \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC \u0648\u06CC 6", nanoid: "\u0646\u06CC\u0646\u0648 \u0622\u0626\u06CC \u0688\u06CC", guid: "\u062C\u06CC \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC", cuid: "\u0633\u06CC \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC", cuid2: "\u0633\u06CC \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC 2", ulid: "\u06CC\u0648 \u0627\u06CC\u0644 \u0622\u0626\u06CC \u0688\u06CC", xid: "\u0627\u06CC\u06A9\u0633 \u0622\u0626\u06CC \u0688\u06CC", ksuid: "\u06A9\u06D2 \u0627\u06CC\u0633 \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC", datetime: "\u0622\u0626\u06CC \u0627\u06CC\u0633 \u0627\u0648 \u0688\u06CC\u0679 \u0679\u0627\u0626\u0645", date: "\u0622\u0626\u06CC \u0627\u06CC\u0633 \u0627\u0648 \u062A\u0627\u0631\u06CC\u062E", time: "\u0622\u0626\u06CC \u0627\u06CC\u0633 \u0627\u0648 \u0648\u0642\u062A", duration: "\u0622\u0626\u06CC \u0627\u06CC\u0633 \u0627\u0648 \u0645\u062F\u062A", ipv4: "\u0622\u0626\u06CC \u067E\u06CC \u0648\u06CC 4 \u0627\u06CC\u0688\u0631\u06CC\u0633", ipv6: "\u0622\u0626\u06CC \u067E\u06CC \u0648\u06CC 6 \u0627\u06CC\u0688\u0631\u06CC\u0633", cidrv4: "\u0622\u0626\u06CC \u067E\u06CC \u0648\u06CC 4 \u0631\u06CC\u0646\u062C", cidrv6: "\u0622\u0626\u06CC \u067E\u06CC \u0648\u06CC 6 \u0631\u06CC\u0646\u062C", base64: "\u0628\u06CC\u0633 64 \u0627\u0646 \u06A9\u0648\u0688\u0688 \u0633\u0679\u0631\u0646\u06AF", base64url: "\u0628\u06CC\u0633 64 \u06CC\u0648 \u0622\u0631 \u0627\u06CC\u0644 \u0627\u0646 \u06A9\u0648\u0688\u0688 \u0633\u0679\u0631\u0646\u06AF", json_string: "\u062C\u06D2 \u0627\u06CC\u0633 \u0627\u0648 \u0627\u06CC\u0646 \u0633\u0679\u0631\u0646\u06AF", e164: "\u0627\u06CC 164 \u0646\u0645\u0628\u0631", jwt: "\u062C\u06D2 \u0688\u0628\u0644\u06CC\u0648 \u0679\u06CC", template_literal: "\u0627\u0646 \u067E\u0679" };
      let closure_2 = { nan: "NaN", number: "\u0646\u0645\u0628\u0631", array: "\u0622\u0631\u06D2", null: "\u0646\u0644" };
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
            let combined = "\u063A\u0644\u0637 \u0627\u0646 \u067E\u0679: instanceof " + code.expected + " \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627\u060C " + tmp51 + " \u0645\u0648\u0635\u0648\u0644 \u06C1\u0648\u0627";
          } else {
            const _HermesInternal16 = HermesInternal;
            combined = "\u063A\u0644\u0637 \u0627\u0646 \u067E\u0679: " + expected + " \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627\u060C " + tmp51 + " \u0645\u0648\u0635\u0648\u0644 \u06C1\u0648\u0627";
          }
          return combined;
        } else if ("invalid_value" === code) {
          if (1 === code.values.length) {
            const _HermesInternal15 = HermesInternal;
            let combined1 = "\u063A\u0644\u0637 \u0627\u0646 \u067E\u0679: " + closure_2.stringifyPrimitive(code.values[0]) + " \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627";
          } else {
            const _HermesInternal14 = HermesInternal;
            combined1 = "\u063A\u0644\u0637 \u0622\u067E\u0634\u0646: " + closure_2.joinValues(code.values, "|") + " \u0645\u06CC\u06BA \u0633\u06D2 \u0627\u06CC\u06A9 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627";
          }
          return combined1;
        } else if ("too_big" === code) {
          let str34 = "<";
          if (code.inclusive) {
            str34 = "<=";
          }
          const tmp26 = getSizing(code.origin);
          const origin2 = code.origin;
          let str35 = "\u0648\u06CC\u0644\u06CC\u0648";
          if (tmp26) {
            if (tmp28) {
              str35 = origin2;
            }
            let str = code.maximum.toString();
            const unit = tmp26.unit;
            let str41 = "\u0639\u0646\u0627\u0635\u0631";
            if (null != unit) {
              str41 = unit;
            }
            const _HermesInternal13 = HermesInternal;
            let combined2 = "\u0628\u06C1\u062A \u0628\u0691\u0627: " + str35 + " \u06A9\u06D2 " + str34 + str + " " + str41 + " \u06C1\u0648\u0646\u06D2 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u06D2";
            const str40 = code.maximum;
          } else {
            let tmp29 = str35;
            if (tmp28) {
              tmp29 = origin2;
            }
            const _HermesInternal12 = HermesInternal;
            combined2 = "\u0628\u06C1\u062A \u0628\u0691\u0627: " + tmp29 + " \u06A9\u0627 " + str34 + code.maximum.toString() + " \u06C1\u0648\u0646\u0627 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627";
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
          const str1 = minimum.toString();
          if (tmp15) {
            const _HermesInternal11 = HermesInternal;
            let combined3 = "\u0628\u06C1\u062A \u0686\u06BE\u0648\u0679\u0627: " + origin + " \u06A9\u06D2 " + str26 + str1 + " " + tmp15.unit + " \u06C1\u0648\u0646\u06D2 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u06D2";
          } else {
            const _HermesInternal10 = HermesInternal;
            combined3 = "\u0628\u06C1\u062A \u0686\u06BE\u0648\u0679\u0627: " + origin + " \u06A9\u0627 " + str26 + str1 + " \u06C1\u0648\u0646\u0627 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627";
          }
          return combined3;
        } else if ("invalid_format" === code) {
          if ("starts_with" === code.format) {
            const _HermesInternal9 = HermesInternal;
            let combined4 = "\u063A\u0644\u0637 \u0633\u0679\u0631\u0646\u06AF: \"" + code.prefix + "\" \u0633\u06D2 \u0634\u0631\u0648\u0639 \u06C1\u0648\u0646\u0627 \u0686\u0627\u06C1\u06CC\u06D2";
          } else if ("ends_with" === code.format) {
            const _HermesInternal8 = HermesInternal;
            combined4 = "\u063A\u0644\u0637 \u0633\u0679\u0631\u0646\u06AF: \"" + code.suffix + "\" \u067E\u0631 \u062E\u062A\u0645 \u06C1\u0648\u0646\u0627 \u0686\u0627\u06C1\u06CC\u06D2";
          } else if ("includes" === code.format) {
            const _HermesInternal7 = HermesInternal;
            combined4 = "\u063A\u0644\u0637 \u0633\u0679\u0631\u0646\u06AF: \"" + code.includes + "\" \u0634\u0627\u0645\u0644 \u06C1\u0648\u0646\u0627 \u0686\u0627\u06C1\u06CC\u06D2";
          } else if ("regex" === code.format) {
            const _HermesInternal6 = HermesInternal;
            combined4 = "\u063A\u0644\u0637 \u0633\u0679\u0631\u0646\u06AF: \u067E\u06CC\u0679\u0631\u0646 " + code.pattern + " \u0633\u06D2 \u0645\u06CC\u0686 \u06C1\u0648\u0646\u0627 \u0686\u0627\u06C1\u06CC\u06D2";
          } else {
            let format = table2[code.format];
            if (null == format) {
              format = code.format;
            }
            const _HermesInternal5 = HermesInternal;
            combined4 = "\u063A\u0644\u0637 " + format;
          }
          return combined4;
        } else if ("not_multiple_of" === code) {
          const _HermesInternal4 = HermesInternal;
          return "\u063A\u0644\u0637 \u0646\u0645\u0628\u0631: " + code.divisor + " \u06A9\u0627 \u0645\u0636\u0627\u0639\u0641 \u06C1\u0648\u0646\u0627 \u0686\u0627\u06C1\u06CC\u06D2";
        } else if ("unrecognized_keys" === code) {
          let str9 = "";
          if (code.keys.length > 1) {
            str9 = "\u0632";
          }
          const _HermesInternal3 = HermesInternal;
          return "\u063A\u06CC\u0631 \u062A\u0633\u0644\u06CC\u0645 \u0634\u062F\u06C1 \u06A9\u06CC" + str9 + ": " + closure_2.joinValues(code.keys, "\u060C ");
        } else {
          str = "invalid_key";
          if ("invalid_key" === code) {
            const _HermesInternal2 = HermesInternal;
            return "" + code.origin + " \u0645\u06CC\u06BA \u063A\u0644\u0637 \u06A9\u06CC";
          } else {
            if ("invalid_union" !== code) {
              if ("invalid_element" === code) {
                const _HermesInternal = HermesInternal;
                return "" + code.origin + " \u0645\u06CC\u06BA \u063A\u0644\u0637 \u0648\u06CC\u0644\u06CC\u0648";
              }
            }
            return "\u063A\u0644\u0637 \u0627\u0646 \u067E\u0679";
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
