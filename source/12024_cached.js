// Module ID: 12024
// Function ID: 93449
// Name: cached
// Dependencies: [12013]

// Module 12024 (cached)
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
      let closure_0 = { string: { unit: "car\u00E0cters", verb: "contenir" }, file: { unit: "bytes", verb: "contenir" }, array: { unit: "elements", verb: "contenir" }, set: { unit: "elements", verb: "contenir" } };
      let closure_1 = { regex: "entrada", email: "adre\u00E7a electr\u00F2nica", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "data i hora ISO", date: "data ISO", time: "hora ISO", duration: "durada ISO", ipv4: "adre\u00E7a IPv4", ipv6: "adre\u00E7a IPv6", cidrv4: "rang IPv4", cidrv6: "rang IPv6", base64: "cadena codificada en base64", base64url: "cadena codificada en base64url", json_string: "cadena JSON", e164: "n\u00FAmero E.164", jwt: "JWT", template_literal: "entrada" };
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
          let tmp53 = parsedTypeResult;
          if (null != closure_2[parsedTypeResult]) {
            tmp53 = tmp52;
          }
          if (obj.test(code.expected)) {
            const _HermesInternal17 = HermesInternal;
            let combined = "Tipus inv\u00E0lid: s'esperava instanceof " + code.expected + ", s'ha rebut " + tmp53;
          } else {
            const _HermesInternal16 = HermesInternal;
            combined = "Tipus inv\u00E0lid: s'esperava " + expected + ", s'ha rebut " + tmp53;
          }
          return combined;
        } else if ("invalid_value" === code) {
          if (1 === code.values.length) {
            const _HermesInternal15 = HermesInternal;
            let combined1 = "Valor inv\u00E0lid: s'esperava " + closure_2.stringifyPrimitive(code.values[0]);
          } else {
            const _HermesInternal14 = HermesInternal;
            combined1 = "Opci\u00F3 inv\u00E0lida: s'esperava una de " + closure_2.joinValues(code.values, " o ");
          }
          return combined1;
        } else if ("too_big" === code) {
          let str33 = "menys de";
          if (code.inclusive) {
            str33 = "com a m\u00E0xim";
          }
          const tmp28 = getSizing(code.origin);
          const origin2 = code.origin;
          let str34 = "el valor";
          if (tmp28) {
            if (tmp30) {
              str34 = origin2;
            }
            let str = code.maximum.toString();
            const unit = tmp28.unit;
            let str40 = "elements";
            if (null != unit) {
              str40 = unit;
            }
            const _HermesInternal13 = HermesInternal;
            let combined2 = "Massa gran: s'esperava que " + str34 + " contingu\u00E9s " + str33 + " " + str + " " + str40;
            const str39 = code.maximum;
          } else {
            let tmp31 = str34;
            if (tmp30) {
              tmp31 = origin2;
            }
            const _HermesInternal12 = HermesInternal;
            combined2 = "Massa gran: s'esperava que " + tmp31 + " fos " + str33 + " " + code.maximum.toString();
            const str35 = code.maximum;
          }
          return combined2;
        } else if ("too_small" === code) {
          let str24 = "m\u00E9s de";
          if (code.inclusive) {
            str24 = "com a m\u00EDnim";
          }
          const tmp17 = getSizing(code.origin);
          ({ origin, minimum } = code);
          const str1 = minimum.toString();
          if (tmp17) {
            const _HermesInternal11 = HermesInternal;
            let combined3 = "Massa petit: s'esperava que " + origin + " contingu\u00E9s " + str24 + " " + str1 + " " + tmp17.unit;
          } else {
            const _HermesInternal10 = HermesInternal;
            combined3 = "Massa petit: s'esperava que " + origin + " fos " + str24 + " " + str1;
          }
          return combined3;
        } else if ("invalid_format" === code) {
          if ("starts_with" === code.format) {
            const _HermesInternal9 = HermesInternal;
            let combined4 = "Format inv\u00E0lid: ha de comen\u00E7ar amb \"" + code.prefix + "\"";
          } else if ("ends_with" === code.format) {
            const _HermesInternal8 = HermesInternal;
            combined4 = "Format inv\u00E0lid: ha d'acabar amb \"" + code.suffix + "\"";
          } else if ("includes" === code.format) {
            const _HermesInternal7 = HermesInternal;
            combined4 = "Format inv\u00E0lid: ha d'incloure \"" + code.includes + "\"";
          } else if ("regex" === code.format) {
            const _HermesInternal6 = HermesInternal;
            combined4 = "Format inv\u00E0lid: ha de coincidir amb el patr\u00F3 " + code.pattern;
          } else {
            let format = table2[code.format];
            if (null == format) {
              format = code.format;
            }
            const _HermesInternal5 = HermesInternal;
            combined4 = "Format inv\u00E0lid per a " + format;
          }
          return combined4;
        } else if ("not_multiple_of" === code) {
          const _HermesInternal4 = HermesInternal;
          return "N\u00FAmero inv\u00E0lid: ha de ser m\u00FAltiple de " + code.divisor;
        } else if ("unrecognized_keys" === code) {
          let str7 = "";
          let str8 = "";
          if (code.keys.length > 1) {
            str8 = "s";
          }
          if (code.keys.length > 1) {
            str7 = "s";
          }
          const _HermesInternal3 = HermesInternal;
          return "Clau" + str8 + " no reconeguda" + str7 + ": " + closure_2.joinValues(code.keys, ", ");
        } else {
          str = "invalid_key";
          if ("invalid_key" === code) {
            const _HermesInternal2 = HermesInternal;
            return "Clau inv\u00E0lida a " + code.origin;
          } else {
            if ("invalid_union" !== code) {
              if ("invalid_element" === code) {
                const _HermesInternal = HermesInternal;
                return "Element inv\u00E0lid a " + code.origin;
              }
            }
            return "Entrada inv\u00E0lida";
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
