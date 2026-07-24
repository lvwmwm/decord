// Module ID: 12064
// Function ID: 93846
// Name: cached
// Dependencies: [12039]

// Module 12064 (cached)
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
      let closure_0 = { string: { unit: "karakter", verb: "memiliki" }, file: { unit: "byte", verb: "memiliki" }, array: { unit: "item", verb: "memiliki" }, set: { unit: "item", verb: "memiliki" } };
      let closure_1 = { regex: "input", email: "alamat email", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "tanggal dan waktu format ISO", date: "tanggal format ISO", time: "jam format ISO", duration: "durasi format ISO", ipv4: "alamat IPv4", ipv6: "alamat IPv6", cidrv4: "rentang alamat IPv4", cidrv6: "rentang alamat IPv6", base64: "string dengan enkode base64", base64url: "string dengan enkode base64url", json_string: "string JSON", e164: "angka E.164", jwt: "JWT", template_literal: "input" };
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
            let combined = "Input tidak valid: diharapkan instanceof " + code.expected + ", diterima " + tmp51;
          } else {
            const _HermesInternal16 = HermesInternal;
            combined = "Input tidak valid: diharapkan " + expected + ", diterima " + tmp51;
          }
          return combined;
        } else if ("invalid_value" === code) {
          if (1 === code.values.length) {
            const _HermesInternal15 = HermesInternal;
            let combined1 = "Input tidak valid: diharapkan " + closure_2.stringifyPrimitive(code.values[0]);
          } else {
            const _HermesInternal14 = HermesInternal;
            combined1 = "Pilihan tidak valid: diharapkan salah satu dari " + closure_2.joinValues(code.values, "|");
          }
          return combined1;
        } else if ("too_big" === code) {
          let str29 = "<";
          if (code.inclusive) {
            str29 = "<=";
          }
          const tmp26 = getSizing(code.origin);
          const origin2 = code.origin;
          let str30 = "value";
          if (tmp26) {
            if (tmp28) {
              str30 = origin2;
            }
            let str = code.maximum.toString();
            const unit = tmp26.unit;
            let str35 = "elemen";
            if (null != unit) {
              str35 = unit;
            }
            const _HermesInternal13 = HermesInternal;
            let combined2 = "Terlalu besar: diharapkan " + str30 + " memiliki " + str29 + str + " " + str35;
            const str34 = code.maximum;
          } else {
            let tmp29 = str30;
            if (tmp28) {
              tmp29 = origin2;
            }
            const _HermesInternal12 = HermesInternal;
            combined2 = "Terlalu besar: diharapkan " + tmp29 + " menjadi " + str29 + code.maximum.toString();
            const str31 = code.maximum;
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
            let combined3 = "Terlalu kecil: diharapkan " + origin + " memiliki " + str23 + str1 + " " + tmp15.unit;
          } else {
            const _HermesInternal10 = HermesInternal;
            combined3 = "Terlalu kecil: diharapkan " + origin + " menjadi " + str23 + str1;
          }
          return combined3;
        } else if ("invalid_format" === code) {
          if ("starts_with" === code.format) {
            const _HermesInternal9 = HermesInternal;
            let combined4 = "String tidak valid: harus dimulai dengan \"" + code.prefix + "\"";
          } else if ("ends_with" === code.format) {
            const _HermesInternal8 = HermesInternal;
            combined4 = "String tidak valid: harus berakhir dengan \"" + code.suffix + "\"";
          } else if ("includes" === code.format) {
            const _HermesInternal7 = HermesInternal;
            combined4 = "String tidak valid: harus menyertakan \"" + code.includes + "\"";
          } else if ("regex" === code.format) {
            const _HermesInternal6 = HermesInternal;
            combined4 = "String tidak valid: harus sesuai pola " + code.pattern;
          } else {
            let format = table2[code.format];
            if (null == format) {
              format = code.format;
            }
            const _HermesInternal5 = HermesInternal;
            combined4 = "" + format + " tidak valid";
          }
          return combined4;
        } else if ("not_multiple_of" === code) {
          const _HermesInternal4 = HermesInternal;
          return "Angka tidak valid: harus kelipatan dari " + code.divisor;
        } else if ("unrecognized_keys" === code) {
          let str7 = "";
          if (code.keys.length > 1) {
            str7 = "s";
          }
          const _HermesInternal3 = HermesInternal;
          return "Kunci tidak dikenali " + str7 + ": " + closure_2.joinValues(code.keys, ", ");
        } else {
          str = "invalid_key";
          if ("invalid_key" === code) {
            const _HermesInternal2 = HermesInternal;
            return "Kunci tidak valid di " + code.origin;
          } else {
            if ("invalid_union" !== code) {
              if ("invalid_element" === code) {
                const _HermesInternal = HermesInternal;
                return "Nilai tidak valid di " + code.origin;
              }
            }
            return "Input tidak valid";
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
