// Module ID: 12057
// Function ID: 93814
// Name: cached
// Dependencies: [12013]

// Module 12057 (cached)
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
      let closure_0 = { string: { unit: "tecken", verb: "att ha" }, file: { unit: "bytes", verb: "att ha" }, array: { unit: "objekt", verb: "att inneh\u00E5lla" }, set: { unit: "objekt", verb: "att inneh\u00E5lla" } };
      let closure_1 = { regex: "regulj\u00E4rt uttryck", email: "e-postadress", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO-datum och tid", date: "ISO-datum", time: "ISO-tid", duration: "ISO-varaktighet", ipv4: "IPv4-intervall", ipv6: "IPv6-intervall", cidrv4: "IPv4-spektrum", cidrv6: "IPv6-spektrum", base64: "base64-kodad str\u00E4ng", base64url: "base64url-kodad str\u00E4ng", json_string: "JSON-str\u00E4ng", e164: "E.164-nummer", jwt: "JWT", template_literal: "mall-literal" };
      let closure_2 = { nan: "NaN", number: "antal", array: "lista" };
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
            let combined = "Ogiltig inmatning: f\u00F6rv\u00E4ntat instanceof " + code.expected + ", fick " + tmp54;
          } else {
            const _HermesInternal16 = HermesInternal;
            combined = "Ogiltig inmatning: f\u00F6rv\u00E4ntat " + expected + ", fick " + tmp54;
          }
          return combined;
        } else if ("invalid_value" === code) {
          if (1 === code.values.length) {
            const _HermesInternal15 = HermesInternal;
            let combined1 = "Ogiltig inmatning: f\u00F6rv\u00E4ntat " + closure_2.stringifyPrimitive(code.values[0]);
          } else {
            const _HermesInternal14 = HermesInternal;
            combined1 = "Ogiltigt val: f\u00F6rv\u00E4ntade en av " + closure_2.joinValues(code.values, "|");
          }
          return combined1;
        } else if ("too_big" === code) {
          let str33 = "<";
          if (code.inclusive) {
            str33 = "<=";
          }
          const tmp29 = getSizing(code.origin);
          const origin4 = code.origin;
          let str34 = "v\u00E4rdet";
          if (tmp29) {
            if (tmp31) {
              str34 = origin4;
            }
            let str = code.maximum.toString();
            const unit = tmp29.unit;
            let str39 = "element";
            if (null != unit) {
              str39 = unit;
            }
            const _HermesInternal13 = HermesInternal;
            let combined2 = "F\u00F6r stor(t): f\u00F6rv\u00E4ntade " + str34 + " att ha " + str33 + str + " " + str39;
            const str38 = code.maximum;
          } else {
            let tmp32 = str34;
            if (tmp31) {
              tmp32 = origin4;
            }
            const _HermesInternal12 = HermesInternal;
            combined2 = "F\u00F6r stor(t): f\u00F6rv\u00E4ntat " + tmp32 + " att ha " + str33 + code.maximum.toString();
            const str35 = code.maximum;
          }
          return combined2;
        } else if ("too_small" === code) {
          let str24 = ">";
          if (code.inclusive) {
            str24 = ">=";
          }
          const tmp17 = getSizing(code.origin);
          const origin3 = code.origin;
          let str25 = "v\u00E4rdet";
          if (tmp17) {
            if (tmp19) {
              str25 = origin3;
            }
            const _HermesInternal11 = HermesInternal;
            let combined3 = "F\u00F6r lite(t): f\u00F6rv\u00E4ntade " + str25 + " att ha " + str24 + code.minimum.toString() + " " + tmp17.unit;
            const str29 = code.minimum;
          } else {
            let tmp20 = str25;
            if (tmp19) {
              tmp20 = origin3;
            }
            const _HermesInternal10 = HermesInternal;
            combined3 = "F\u00F6r lite(t): f\u00F6rv\u00E4ntade " + tmp20 + " att ha " + str24 + code.minimum.toString();
            const str26 = code.minimum;
          }
          return combined3;
        } else if ("invalid_format" === code) {
          if ("starts_with" === code.format) {
            const _HermesInternal9 = HermesInternal;
            let combined4 = "Ogiltig str\u00E4ng: m\u00E5ste b\u00F6rja med \"" + code.prefix + "\"";
          } else if ("ends_with" === code.format) {
            const _HermesInternal8 = HermesInternal;
            combined4 = "Ogiltig str\u00E4ng: m\u00E5ste sluta med \"" + code.suffix + "\"";
          } else if ("includes" === code.format) {
            const _HermesInternal7 = HermesInternal;
            combined4 = "Ogiltig str\u00E4ng: m\u00E5ste inneh\u00E5lla \"" + code.includes + "\"";
          } else if ("regex" === code.format) {
            const _HermesInternal6 = HermesInternal;
            combined4 = "Ogiltig str\u00E4ng: m\u00E5ste matcha m\u00F6nstret \"" + code.pattern + "\"";
          } else {
            let format = table2[code.format];
            if (null == format) {
              format = code.format;
            }
            const _HermesInternal5 = HermesInternal;
            combined4 = "Ogiltig(t) " + format;
          }
          return combined4;
        } else if ("not_multiple_of" === code) {
          const _HermesInternal4 = HermesInternal;
          return "Ogiltigt tal: m\u00E5ste vara en multipel av " + code.divisor;
        } else if ("unrecognized_keys" === code) {
          let str8 = "Ok\u00E4nd nyckel";
          if (code.keys.length > 1) {
            str8 = "Ok\u00E4nda nycklar";
          }
          const _HermesInternal3 = HermesInternal;
          return "" + str8 + ": " + closure_2.joinValues(code.keys, ", ");
        } else if ("invalid_key" === code) {
          const origin2 = code.origin;
          let str6 = "v\u00E4rdet";
          if (null != origin2) {
            str6 = origin2;
          }
          const _HermesInternal2 = HermesInternal;
          return "Ogiltig nyckel i " + str6;
        } else {
          str = "invalid_union";
          if ("invalid_union" !== code) {
            if ("invalid_element" === code) {
              const origin = code.origin;
              let str3 = "v\u00E4rdet";
              if (null != origin) {
                str3 = origin;
              }
              const _HermesInternal = HermesInternal;
              return "Ogiltigt v\u00E4rde i " + str3;
            }
          }
          return "Ogiltig input";
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
