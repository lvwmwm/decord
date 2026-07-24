// Module ID: 12071
// Function ID: 93915
// Name: cached
// Dependencies: [12039]

// Module 12071 (cached)
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
      let closure_0 = { string: { unit: "\uBB38\uC790", verb: "to have" }, file: { unit: "\uBC14\uC774\uD2B8", verb: "to have" }, array: { unit: "\uAC1C", verb: "to have" }, set: { unit: "\uAC1C", verb: "to have" } };
      let closure_1 = { regex: "\uC785\uB825", email: "\uC774\uBA54\uC77C \uC8FC\uC18C", url: "URL", emoji: "\uC774\uBAA8\uC9C0", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO \uB0A0\uC9DC\uC2DC\uAC04", date: "ISO \uB0A0\uC9DC", time: "ISO \uC2DC\uAC04", duration: "ISO \uAE30\uAC04", ipv4: "IPv4 \uC8FC\uC18C", ipv6: "IPv6 \uC8FC\uC18C", cidrv4: "IPv4 \uBC94\uC704", cidrv6: "IPv6 \uBC94\uC704", base64: "base64 \uC778\uCF54\uB529 \uBB38\uC790\uC5F4", base64url: "base64url \uC778\uCF54\uB529 \uBB38\uC790\uC5F4", json_string: "JSON \uBB38\uC790\uC5F4", e164: "E.164 \uBC88\uD638", jwt: "JWT", template_literal: "\uC785\uB825" };
      let closure_2 = { nan: "NaN" };
      return (code) => {
        code = code.code;
        if ("invalid_type" === code) {
          let expected = closure_2[code.expected];
          if (null == expected) {
            expected = code.expected;
          }
          const parsedTypeResult = closure_2.parsedType(code.input);
          let tmp57 = parsedTypeResult;
          if (null != closure_2[parsedTypeResult]) {
            tmp57 = tmp56;
          }
          if (obj.test(code.expected)) {
            const _HermesInternal17 = HermesInternal;
            let combined = "\uC798\uBABB\uB41C \uC785\uB825: \uC608\uC0C1 \uD0C0\uC785\uC740 instanceof " + code.expected + ", \uBC1B\uC740 \uD0C0\uC785\uC740 " + tmp57 + "\uC785\uB2C8\uB2E4";
          } else {
            const _HermesInternal16 = HermesInternal;
            combined = "\uC798\uBABB\uB41C \uC785\uB825: \uC608\uC0C1 \uD0C0\uC785\uC740 " + expected + ", \uBC1B\uC740 \uD0C0\uC785\uC740 " + tmp57 + "\uC785\uB2C8\uB2E4";
          }
          return combined;
        } else if ("invalid_value" === code) {
          if (1 === code.values.length) {
            const _HermesInternal15 = HermesInternal;
            let combined1 = "\uC798\uBABB\uB41C \uC785\uB825: \uAC12\uC740 " + closure_2.stringifyPrimitive(code.values[0]) + " \uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4";
          } else {
            const _HermesInternal14 = HermesInternal;
            combined1 = "\uC798\uBABB\uB41C \uC635\uC158: " + closure_2.joinValues(code.values, "\uB610\uB294 ") + " \uC911 \uD558\uB098\uC5EC\uC57C \uD569\uB2C8\uB2E4";
          }
          return combined1;
        } else if ("too_big" === code) {
          let str36 = "\uBBF8\uB9CC";
          if (code.inclusive) {
            str36 = "\uC774\uD558";
          }
          let str37 = "\uC5EC\uC57C \uD569\uB2C8\uB2E4";
          if ("\uBBF8\uB9CC" === str36) {
            str37 = "\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4";
          }
          let unit;
          const tmp32 = getSizing(code.origin);
          if (null != tmp32) {
            unit = tmp32.unit;
          }
          let str38 = "\uC694\uC18C";
          if (null != unit) {
            str38 = unit;
          }
          const origin2 = code.origin;
          let str39 = "\uAC12";
          if (tmp32) {
            if (tmp34) {
              str39 = origin2;
            }
            const _HermesInternal13 = HermesInternal;
            let combined2 = "" + str39 + "\uC774 \uB108\uBB34 \uD07D\uB2C8\uB2E4: " + code.maximum.toString() + str38 + " " + str36 + str37;
            const str44 = code.maximum;
          } else {
            let tmp35 = str39;
            if (tmp34) {
              tmp35 = origin2;
            }
            const _HermesInternal12 = HermesInternal;
            combined2 = "" + tmp35 + "\uC774 \uB108\uBB34 \uD07D\uB2C8\uB2E4: " + code.maximum.toString() + " " + str36 + str37;
            const str40 = code.maximum;
          }
          return combined2;
        } else if ("too_small" === code) {
          let str22 = "\uCD08\uACFC";
          if (code.inclusive) {
            str22 = "\uC774\uC0C1";
          }
          let str23 = "\uC5EC\uC57C \uD569\uB2C8\uB2E4";
          if ("\uC774\uC0C1" === str22) {
            str23 = "\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4";
          }
          let unit1;
          const tmp16 = getSizing(code.origin);
          if (null != tmp16) {
            unit1 = tmp16.unit;
          }
          let str25 = "\uC694\uC18C";
          if (null != unit1) {
            str25 = unit1;
          }
          const origin = code.origin;
          let str26 = "\uAC12";
          if (tmp16) {
            if (tmp18) {
              str26 = origin;
            }
            const _HermesInternal11 = HermesInternal;
            let combined3 = "" + str26 + "\uC774 \uB108\uBB34 \uC791\uC2B5\uB2C8\uB2E4: " + code.minimum.toString() + str25 + " " + str22 + str23;
            const str31 = code.minimum;
          } else {
            let tmp19 = str26;
            if (tmp18) {
              tmp19 = origin;
            }
            const _HermesInternal10 = HermesInternal;
            combined3 = "" + tmp19 + "\uC774 \uB108\uBB34 \uC791\uC2B5\uB2C8\uB2E4: " + code.minimum.toString() + " " + str22 + str23;
            const str27 = code.minimum;
          }
          return combined3;
        } else if ("invalid_format" === code) {
          if ("starts_with" === code.format) {
            const _HermesInternal9 = HermesInternal;
            let combined4 = "\uC798\uBABB\uB41C \uBB38\uC790\uC5F4: \"" + code.prefix + "\"(\uC73C)\uB85C \uC2DC\uC791\uD574\uC57C \uD569\uB2C8\uB2E4";
          } else if ("ends_with" === code.format) {
            const _HermesInternal8 = HermesInternal;
            combined4 = "\uC798\uBABB\uB41C \uBB38\uC790\uC5F4: \"" + code.suffix + "\"(\uC73C)\uB85C \uB05D\uB098\uC57C \uD569\uB2C8\uB2E4";
          } else if ("includes" === code.format) {
            const _HermesInternal7 = HermesInternal;
            combined4 = "\uC798\uBABB\uB41C \uBB38\uC790\uC5F4: \"" + code.includes + "\"\uC744(\uB97C) \uD3EC\uD568\uD574\uC57C \uD569\uB2C8\uB2E4";
          } else if ("regex" === code.format) {
            const _HermesInternal6 = HermesInternal;
            combined4 = "\uC798\uBABB\uB41C \uBB38\uC790\uC5F4: \uC815\uADDC\uC2DD " + code.pattern + " \uD328\uD134\uACFC \uC77C\uCE58\uD574\uC57C \uD569\uB2C8\uB2E4";
          } else {
            let format = table2[code.format];
            if (null == format) {
              format = code.format;
            }
            const _HermesInternal5 = HermesInternal;
            combined4 = "\uC798\uBABB\uB41C " + format;
          }
          return combined4;
        } else if ("not_multiple_of" === code) {
          const _HermesInternal4 = HermesInternal;
          return "\uC798\uBABB\uB41C \uC22B\uC790: " + code.divisor + "\uC758 \uBC30\uC218\uC5EC\uC57C \uD569\uB2C8\uB2E4";
        } else if ("unrecognized_keys" === code) {
          const _HermesInternal3 = HermesInternal;
          return "\uC778\uC2DD\uD560 \uC218 \uC5C6\uB294 \uD0A4: " + closure_2.joinValues(code.keys, ", ");
        } else if ("invalid_key" === code) {
          const _HermesInternal2 = HermesInternal;
          return "\uC798\uBABB\uB41C \uD0A4: " + code.origin;
        } else {
          if ("invalid_union" !== code) {
            if ("invalid_element" === code) {
              const _HermesInternal = HermesInternal;
              return "\uC798\uBABB\uB41C \uAC12: " + code.origin;
            }
          }
          return "\uC798\uBABB\uB41C \uC785\uB825";
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
