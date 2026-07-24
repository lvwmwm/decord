// Module ID: 12075
// Function ID: 93961
// Name: cached
// Dependencies: [12039]

// Module 12075 (cached)
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
      let closure_0 = { string: { unit: "tekens", verb: "heeft" }, file: { unit: "bytes", verb: "heeft" }, array: { unit: "elementen", verb: "heeft" }, set: { unit: "elementen", verb: "heeft" } };
      let closure_1 = { regex: "invoer", email: "emailadres", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO datum en tijd", date: "ISO datum", time: "ISO tijd", duration: "ISO duur", ipv4: "IPv4-adres", ipv6: "IPv6-adres", cidrv4: "IPv4-bereik", cidrv6: "IPv6-bereik", base64: "base64-gecodeerde tekst", base64url: "base64 URL-gecodeerde tekst", json_string: "JSON string", e164: "E.164-nummer", jwt: "JWT", template_literal: "invoer" };
      let closure_2 = { nan: "NaN", number: "getal" };
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
          let tmp55 = parsedTypeResult;
          if (null != closure_2[parsedTypeResult]) {
            tmp55 = tmp54;
          }
          if (obj.test(code.expected)) {
            const _HermesInternal17 = HermesInternal;
            let combined = "Ongeldige invoer: verwacht instanceof " + code.expected + ", ontving " + tmp55;
          } else {
            const _HermesInternal16 = HermesInternal;
            combined = "Ongeldige invoer: verwacht " + expected + ", ontving " + tmp55;
          }
          return combined;
        } else if ("invalid_value" === code) {
          if (1 === code.values.length) {
            const _HermesInternal15 = HermesInternal;
            let combined1 = "Ongeldige invoer: verwacht " + closure_2.stringifyPrimitive(code.values[0]);
          } else {
            const _HermesInternal14 = HermesInternal;
            combined1 = "Ongeldige optie: verwacht \u00E9\u00E9n van " + closure_2.joinValues(code.values, "|");
          }
          return combined1;
        } else if ("too_big" === code) {
          let str38 = "<";
          if (code.inclusive) {
            str38 = "<=";
          }
          const tmp28 = getSizing(code.origin);
          let str39 = "laat";
          if ("date" !== code.origin) {
            let str41 = "groot";
            if ("string" === code.origin) {
              str41 = "lang";
            }
            str39 = str41;
          }
          const origin2 = code.origin;
          let str43 = "waarde";
          if (tmp28) {
            if (tmp30) {
              str43 = origin2;
            }
            let str = code.maximum.toString();
            const unit = tmp28.unit;
            let str50 = "elementen";
            if (null != unit) {
              str50 = unit;
            }
            const _HermesInternal13 = HermesInternal;
            let combined2 = "Te " + str39 + ": verwacht dat " + str43 + " " + str38 + str + " " + str50 + " " + tmp28.verb;
            const str49 = code.maximum;
          } else {
            let tmp31 = str43;
            if (tmp30) {
              tmp31 = origin2;
            }
            const _HermesInternal12 = HermesInternal;
            combined2 = "Te " + str39 + ": verwacht dat " + tmp31 + " " + str38 + code.maximum.toString() + " is";
            const str44 = code.maximum;
          }
          return combined2;
        } else if ("too_small" === code) {
          let str23 = ">";
          if (code.inclusive) {
            str23 = ">=";
          }
          const tmp15 = getSizing(code.origin);
          let str24 = "vroeg";
          if ("date" !== code.origin) {
            let str26 = "klein";
            if ("string" === code.origin) {
              str26 = "kort";
            }
            str24 = str26;
          }
          ({ origin, minimum } = code);
          const str1 = minimum.toString();
          if (tmp15) {
            const _HermesInternal11 = HermesInternal;
            let combined3 = "Te " + str24 + ": verwacht dat " + origin + " " + str23 + str1 + " " + tmp15.unit + " " + tmp15.verb;
          } else {
            const _HermesInternal10 = HermesInternal;
            combined3 = "Te " + str24 + ": verwacht dat " + origin + " " + str23 + str1 + " is";
          }
          return combined3;
        } else if ("invalid_format" === code) {
          if ("starts_with" === code.format) {
            const _HermesInternal9 = HermesInternal;
            let combined4 = "Ongeldige tekst: moet met \"" + code.prefix + "\" beginnen";
          } else if ("ends_with" === code.format) {
            const _HermesInternal8 = HermesInternal;
            combined4 = "Ongeldige tekst: moet op \"" + code.suffix + "\" eindigen";
          } else if ("includes" === code.format) {
            const _HermesInternal7 = HermesInternal;
            combined4 = "Ongeldige tekst: moet \"" + code.includes + "\" bevatten";
          } else if ("regex" === code.format) {
            const _HermesInternal6 = HermesInternal;
            combined4 = "Ongeldige tekst: moet overeenkomen met patroon " + code.pattern;
          } else {
            let format = table2[code.format];
            if (null == format) {
              format = code.format;
            }
            const _HermesInternal5 = HermesInternal;
            combined4 = "Ongeldig: " + format;
          }
          return combined4;
        } else if ("not_multiple_of" === code) {
          const _HermesInternal4 = HermesInternal;
          return "Ongeldig getal: moet een veelvoud van " + code.divisor + " zijn";
        } else if ("unrecognized_keys" === code) {
          let str7 = "";
          if (code.keys.length > 1) {
            str7 = "s";
          }
          const _HermesInternal3 = HermesInternal;
          return "Onbekende key" + str7 + ": " + closure_2.joinValues(code.keys, ", ");
        } else {
          str = "invalid_key";
          if ("invalid_key" === code) {
            const _HermesInternal2 = HermesInternal;
            return "Ongeldige key in " + code.origin;
          } else {
            if ("invalid_union" !== code) {
              if ("invalid_element" === code) {
                const _HermesInternal = HermesInternal;
                return "Ongeldige waarde in " + code.origin;
              }
            }
            return "Ongeldige invoer";
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
