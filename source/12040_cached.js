// Module ID: 12040
// Function ID: 93632
// Name: cached
// Dependencies: [12013]

// Module 12040 (cached)
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
      let closure_0 = { string: { unit: "caratteri", verb: "avere" }, file: { unit: "byte", verb: "avere" }, array: { unit: "elementi", verb: "avere" }, set: { unit: "elementi", verb: "avere" } };
      let closure_1 = { regex: "input", email: "indirizzo email", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "data e ora ISO", date: "data ISO", time: "ora ISO", duration: "durata ISO", ipv4: "indirizzo IPv4", ipv6: "indirizzo IPv6", cidrv4: "intervallo IPv4", cidrv6: "intervallo IPv6", base64: "stringa codificata in base64", base64url: "URL codificata in base64", json_string: "stringa JSON", e164: "numero E.164", jwt: "JWT", template_literal: "input" };
      let closure_2 = { nan: "NaN", number: "numero", array: "vettore" };
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
            let combined = "Input non valido: atteso instanceof " + code.expected + ", ricevuto " + tmp53;
          } else {
            const _HermesInternal16 = HermesInternal;
            combined = "Input non valido: atteso " + expected + ", ricevuto " + tmp53;
          }
          return combined;
        } else if ("invalid_value" === code) {
          if (1 === code.values.length) {
            const _HermesInternal15 = HermesInternal;
            let combined1 = "Input non valido: atteso " + closure_2.stringifyPrimitive(code.values[0]);
          } else {
            const _HermesInternal14 = HermesInternal;
            combined1 = "Opzione non valida: atteso uno tra " + closure_2.joinValues(code.values, "|");
          }
          return combined1;
        } else if ("too_big" === code) {
          let str31 = "<";
          if (code.inclusive) {
            str31 = "<=";
          }
          const tmp28 = getSizing(code.origin);
          const origin2 = code.origin;
          let str32 = "valore";
          if (tmp28) {
            if (tmp30) {
              str32 = origin2;
            }
            let str = code.maximum.toString();
            const unit = tmp28.unit;
            let str37 = "elementi";
            if (null != unit) {
              str37 = unit;
            }
            const _HermesInternal13 = HermesInternal;
            let combined2 = "Troppo grande: " + str32 + " deve avere " + str31 + str + " " + str37;
            const str36 = code.maximum;
          } else {
            let tmp31 = str32;
            if (tmp30) {
              tmp31 = origin2;
            }
            const _HermesInternal12 = HermesInternal;
            combined2 = "Troppo grande: " + tmp31 + " deve essere " + str31 + code.maximum.toString();
            const str33 = code.maximum;
          }
          return combined2;
        } else if ("too_small" === code) {
          let str25 = ">";
          if (code.inclusive) {
            str25 = ">=";
          }
          const tmp17 = getSizing(code.origin);
          ({ origin, minimum } = code);
          const str1 = minimum.toString();
          if (tmp17) {
            const _HermesInternal11 = HermesInternal;
            let combined3 = "Troppo piccolo: " + origin + " deve avere " + str25 + str1 + " " + tmp17.unit;
          } else {
            const _HermesInternal10 = HermesInternal;
            combined3 = "Troppo piccolo: " + origin + " deve essere " + str25 + str1;
          }
          return combined3;
        } else if ("invalid_format" === code) {
          if ("starts_with" === code.format) {
            const _HermesInternal9 = HermesInternal;
            let combined4 = "Stringa non valida: deve iniziare con \"" + code.prefix + "\"";
          } else if ("ends_with" === code.format) {
            const _HermesInternal8 = HermesInternal;
            combined4 = "Stringa non valida: deve terminare con \"" + code.suffix + "\"";
          } else if ("includes" === code.format) {
            const _HermesInternal7 = HermesInternal;
            combined4 = "Stringa non valida: deve includere \"" + code.includes + "\"";
          } else if ("regex" === code.format) {
            const _HermesInternal6 = HermesInternal;
            combined4 = "Stringa non valida: deve corrispondere al pattern " + code.pattern;
          } else {
            let format = table2[code.format];
            if (null == format) {
              format = code.format;
            }
            const _HermesInternal5 = HermesInternal;
            combined4 = "Invalid " + format;
          }
          return combined4;
        } else if ("not_multiple_of" === code) {
          const _HermesInternal4 = HermesInternal;
          return "Numero non valido: deve essere un multiplo di " + code.divisor;
        } else if ("unrecognized_keys" === code) {
          let str8 = "e";
          if (code.keys.length > 1) {
            str8 = "i";
          }
          let str9 = "a";
          if (code.keys.length > 1) {
            str9 = "e";
          }
          const _HermesInternal3 = HermesInternal;
          return "Chiav" + str8 + " non riconosciut" + str9 + ": " + closure_2.joinValues(code.keys, ", ");
        } else {
          str = "invalid_key";
          if ("invalid_key" === code) {
            const _HermesInternal2 = HermesInternal;
            return "Chiave non valida in " + code.origin;
          } else {
            if ("invalid_union" !== code) {
              if ("invalid_element" === code) {
                const _HermesInternal = HermesInternal;
                return "Valore non valido in " + code.origin;
              }
            }
            return "Input non valido";
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
