// Module ID: 12063
// Function ID: 93833
// Name: getArmenianPlural
// Dependencies: [12039]

// Module 12063 (getArmenianPlural)
const self = this;
function getArmenianPlural(arg0, arg1, arg2) {
  let tmp = arg2;
  if (1 === Math.abs(arg0)) {
    tmp = arg1;
  }
  return tmp;
}
function withDefiniteArticle(arg0) {
  if (arg0) {
    const items = ["\u0561", "\u0565", "\u0568", "\u056B", "\u0578", "\u0578\u0582", "\u0585"];
    let str2 = "\u0568";
    if (items.includes(arg0[arg0.length - 1])) {
      str2 = "\u0576";
    }
    return arg0 + str2;
  } else {
    return "";
  }
}
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
      let closure_0 = { string: { unit: { one: "\u0576\u0577\u0561\u0576", many: "\u0576\u0577\u0561\u0576\u0576\u0565\u0580" }, verb: "\u0578\u0582\u0576\u0565\u0576\u0561\u056C" }, file: { unit: { one: "\u0562\u0561\u0575\u0569", many: "\u0562\u0561\u0575\u0569\u0565\u0580" }, verb: "\u0578\u0582\u0576\u0565\u0576\u0561\u056C" }, array: { unit: { one: "\u057F\u0561\u0580\u0580", many: "\u057F\u0561\u0580\u0580\u0565\u0580" }, verb: "\u0578\u0582\u0576\u0565\u0576\u0561\u056C" }, set: { unit: { one: "\u057F\u0561\u0580\u0580", many: "\u057F\u0561\u0580\u0580\u0565\u0580" }, verb: "\u0578\u0582\u0576\u0565\u0576\u0561\u056C" } };
      let closure_1 = { regex: "\u0574\u0578\u0582\u057F\u0584", email: "\u0567\u056C. \u0570\u0561\u057D\u0581\u0565", url: "URL", emoji: "\u0567\u0574\u0578\u057B\u056B", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO \u0561\u0574\u057D\u0561\u0569\u056B\u057E \u0587 \u056A\u0561\u0574", date: "ISO \u0561\u0574\u057D\u0561\u0569\u056B\u057E", time: "ISO \u056A\u0561\u0574", duration: "ISO \u057F\u0587\u0578\u0572\u0578\u0582\u0569\u0575\u0578\u0582\u0576", ipv4: "IPv4 \u0570\u0561\u057D\u0581\u0565", ipv6: "IPv6 \u0570\u0561\u057D\u0581\u0565", cidrv4: "IPv4 \u0574\u056B\u057B\u0561\u056F\u0561\u0575\u0584", cidrv6: "IPv6 \u0574\u056B\u057B\u0561\u056F\u0561\u0575\u0584", base64: "base64 \u0571\u0587\u0561\u0579\u0561\u0583\u0578\u057E \u057F\u0578\u0572", base64url: "base64url \u0571\u0587\u0561\u0579\u0561\u0583\u0578\u057E \u057F\u0578\u0572", json_string: "JSON \u057F\u0578\u0572", e164: "E.164 \u0570\u0561\u0574\u0561\u0580", jwt: "JWT", template_literal: "\u0574\u0578\u0582\u057F\u0584" };
      let closure_2 = { nan: "NaN", number: "\u0569\u056B\u057E", array: "\u0566\u0561\u0576\u0563\u057E\u0561\u056E" };
      return (code) => {
        code = code.code;
        if ("invalid_type" === code) {
          let expected = closure_2[code.expected];
          if (null == expected) {
            expected = code.expected;
          }
          const parsedTypeResult = closure_2.parsedType(code.input);
          let tmp54 = parsedTypeResult;
          if (null != closure_2[parsedTypeResult]) {
            tmp54 = tmp53;
          }
          if (obj.test(code.expected)) {
            const _HermesInternal17 = HermesInternal;
            let combined = "\u054D\u056D\u0561\u056C \u0574\u0578\u0582\u057F\u0584\u0561\u0563\u0580\u0578\u0582\u0574\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567\u0580 instanceof " + code.expected + ", \u057D\u057F\u0561\u0581\u057E\u0565\u056C \u0567 " + tmp54;
          } else {
            const _HermesInternal16 = HermesInternal;
            combined = "\u054D\u056D\u0561\u056C \u0574\u0578\u0582\u057F\u0584\u0561\u0563\u0580\u0578\u0582\u0574\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567\u0580 " + expected + ", \u057D\u057F\u0561\u0581\u057E\u0565\u056C \u0567 " + tmp54;
          }
          return combined;
        } else if ("invalid_value" === code) {
          if (1 === code.values.length) {
            const _HermesInternal15 = HermesInternal;
            let combined1 = "\u054D\u056D\u0561\u056C \u0574\u0578\u0582\u057F\u0584\u0561\u0563\u0580\u0578\u0582\u0574\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567\u0580 " + closure_2.stringifyPrimitive(code.values[1]);
          } else {
            const _HermesInternal14 = HermesInternal;
            combined1 = "\u054D\u056D\u0561\u056C \u057F\u0561\u0580\u0562\u0565\u0580\u0561\u056F\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567\u0580 \u0570\u0565\u057F\u0587\u0575\u0561\u056C\u0576\u0565\u0580\u056B\u0581 \u0574\u0565\u056F\u0568\u055D " + closure_2.joinValues(code.values, "|");
          }
          return combined1;
        } else if ("too_big" === code) {
          let str33 = "<";
          if (code.inclusive) {
            str33 = "<=";
          }
          const tmp29 = getSizing(code.origin);
          if (tmp29) {
            const _Number2 = Number;
            const tmp37 = outer1_4(Number(code.maximum), tmp29.unit.one, tmp29.unit.many);
            const origin2 = code.origin;
            let str38 = "\u0561\u0580\u056A\u0565\u0584";
            if (null != origin2) {
              str38 = origin2;
            }
            const _HermesInternal13 = HermesInternal;
            return "\u0549\u0561\u0583\u0561\u0566\u0561\u0576\u0581 \u0574\u0565\u056E \u0561\u0580\u056A\u0565\u0584\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567, \u0578\u0580 " + outer1_5(str38) + " \u056F\u0578\u0582\u0576\u0565\u0576\u0561 " + str33 + code.maximum.toString() + " " + tmp37;
          } else {
            const origin = code.origin;
            let str34 = "\u0561\u0580\u056A\u0565\u0584";
            if (null != origin) {
              str34 = origin;
            }
            const _HermesInternal12 = HermesInternal;
            return "\u0549\u0561\u0583\u0561\u0566\u0561\u0576\u0581 \u0574\u0565\u056E \u0561\u0580\u056A\u0565\u0584\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567, \u0578\u0580 " + outer1_5(str34) + " \u056C\u056B\u0576\u056B " + str33 + code.maximum.toString();
          }
        } else if ("too_small" === code) {
          let str25 = ">";
          if (code.inclusive) {
            str25 = ">=";
          }
          const tmp17 = getSizing(code.origin);
          if (tmp17) {
            const _Number = Number;
            const str29 = code.minimum;
            const tmp24 = outer1_4(Number(code.minimum), tmp17.unit.one, tmp17.unit.many);
            const _HermesInternal11 = HermesInternal;
            return "\u0549\u0561\u0583\u0561\u0566\u0561\u0576\u0581 \u0583\u0578\u0584\u0580 \u0561\u0580\u056A\u0565\u0584\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567, \u0578\u0580 " + outer1_5(code.origin) + " \u056F\u0578\u0582\u0576\u0565\u0576\u0561 " + str25 + str29.toString() + " " + tmp24;
          } else {
            const _HermesInternal10 = HermesInternal;
            return "\u0549\u0561\u0583\u0561\u0566\u0561\u0576\u0581 \u0583\u0578\u0584\u0580 \u0561\u0580\u056A\u0565\u0584\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567, \u0578\u0580 " + outer1_5(code.origin) + " \u056C\u056B\u0576\u056B " + str25 + code.minimum.toString();
          }
        } else if ("invalid_format" === code) {
          if ("starts_with" === code.format) {
            const _HermesInternal9 = HermesInternal;
            let combined2 = "\u054D\u056D\u0561\u056C \u057F\u0578\u0572\u2024 \u057A\u0565\u057F\u0584 \u0567 \u057D\u056F\u057D\u057E\u056B \"" + code.prefix + "\"-\u0578\u057E";
          } else if ("ends_with" === code.format) {
            const _HermesInternal8 = HermesInternal;
            combined2 = "\u054D\u056D\u0561\u056C \u057F\u0578\u0572\u2024 \u057A\u0565\u057F\u0584 \u0567 \u0561\u057E\u0561\u0580\u057F\u057E\u056B \"" + code.suffix + "\"-\u0578\u057E";
          } else if ("includes" === code.format) {
            const _HermesInternal7 = HermesInternal;
            combined2 = "\u054D\u056D\u0561\u056C \u057F\u0578\u0572\u2024 \u057A\u0565\u057F\u0584 \u0567 \u057A\u0561\u0580\u0578\u0582\u0576\u0561\u056F\u056B \"" + code.includes + "\"";
          } else if ("regex" === code.format) {
            const _HermesInternal6 = HermesInternal;
            combined2 = "\u054D\u056D\u0561\u056C \u057F\u0578\u0572\u2024 \u057A\u0565\u057F\u0584 \u0567 \u0570\u0561\u0574\u0561\u057A\u0561\u057F\u0561\u057D\u056D\u0561\u0576\u056B " + code.pattern + " \u0571\u0587\u0561\u0579\u0561\u0583\u056B\u0576";
          } else {
            let format = table2[code.format];
            if (null == format) {
              format = code.format;
            }
            const _HermesInternal5 = HermesInternal;
            combined2 = "\u054D\u056D\u0561\u056C " + format;
          }
          return combined2;
        } else if ("not_multiple_of" === code) {
          const _HermesInternal4 = HermesInternal;
          return "\u054D\u056D\u0561\u056C \u0569\u056B\u057E\u2024 \u057A\u0565\u057F\u0584 \u0567 \u0562\u0561\u0566\u0574\u0561\u057A\u0561\u057F\u056B\u056F \u056C\u056B\u0576\u056B " + code.divisor + "-\u056B";
        } else if ("unrecognized_keys" === code) {
          let str8 = "";
          if (code.keys.length > 1) {
            str8 = "\u0576\u0565\u0580";
          }
          const _HermesInternal3 = HermesInternal;
          return "\u0549\u0573\u0561\u0576\u0561\u0579\u057E\u0561\u056E \u0562\u0561\u0576\u0561\u056C\u056B" + str8 + ". " + closure_2.joinValues(code.keys, ", ");
        } else if ("invalid_key" === code) {
          const _HermesInternal2 = HermesInternal;
          return "\u054D\u056D\u0561\u056C \u0562\u0561\u0576\u0561\u056C\u056B " + outer1_5(code.origin) + "-\u0578\u0582\u0574";
        } else {
          if ("invalid_union" !== code) {
            if ("invalid_element" === code) {
              const _HermesInternal = HermesInternal;
              return "\u054D\u056D\u0561\u056C \u0561\u0580\u056A\u0565\u0584 " + outer1_5(code.origin) + "-\u0578\u0582\u0574";
            }
          }
          return "\u054D\u056D\u0561\u056C \u0574\u0578\u0582\u057F\u0584\u0561\u0563\u0580\u0578\u0582\u0574";
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
