// Module ID: 12074
// Function ID: 93950
// Name: cached
// Dependencies: [12039]

// Module 12074 (cached)
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
      let closure_0 = { string: { unit: "aksara", verb: "mempunyai" }, file: { unit: "bait", verb: "mempunyai" }, array: { unit: "elemen", verb: "mempunyai" }, set: { unit: "elemen", verb: "mempunyai" } };
      let closure_1 = { regex: "input", email: "alamat e-mel", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "tarikh masa ISO", date: "tarikh ISO", time: "masa ISO", duration: "tempoh ISO", ipv4: "alamat IPv4", ipv6: "alamat IPv6", cidrv4: "julat IPv4", cidrv6: "julat IPv6", base64: "string dikodkan base64", base64url: "string dikodkan base64url", json_string: "string JSON", e164: "nombor E.164", jwt: "JWT", template_literal: "input" };
      let closure_2 = { nan: "NaN", number: "nombor" };
      return (code) => {
        code = code.code;
        if ("invalid_type" === code) {
          let expected = closure_2[code.expected];
          if (null == expected) {
            expected = code.expected;
          }
          const parsedTypeResult = closure_2.parsedType(code.input);
          let tmp50 = parsedTypeResult;
          if (null != closure_2[parsedTypeResult]) {
            tmp50 = tmp49;
          }
          if (obj.test(code.expected)) {
            const _HermesInternal17 = HermesInternal;
            let combined = "Input tidak sah: dijangka instanceof " + code.expected + ", diterima " + tmp50;
          } else {
            const _HermesInternal16 = HermesInternal;
            combined = "Input tidak sah: dijangka " + expected + ", diterima " + tmp50;
          }
          return combined;
        } else if ("invalid_value" === code) {
          if (1 === code.values.length) {
            const _HermesInternal15 = HermesInternal;
            let combined1 = "Input tidak sah: dijangka " + closure_2.stringifyPrimitive(code.values[0]);
          } else {
            const _HermesInternal14 = HermesInternal;
            combined1 = "Pilihan tidak sah: dijangka salah satu daripada " + closure_2.joinValues(code.values, "|");
          }
          return combined1;
        } else if ("too_big" === code) {
          let str31 = "<";
          if (code.inclusive) {
            str31 = "<=";
          }
          const tmp24 = getSizing(code.origin);
          const origin2 = code.origin;
          let str32 = "nilai";
          if (tmp24) {
            if (tmp26) {
              str32 = origin2;
            }
            const verb = tmp24.verb;
            let str = code.maximum.toString();
            const unit = tmp24.unit;
            let str37 = "elemen";
            if (null != unit) {
              str37 = unit;
            }
            const _HermesInternal13 = HermesInternal;
            let combined2 = "Terlalu besar: dijangka " + str32 + " " + verb + " " + str31 + str + " " + str37;
            const str36 = code.maximum;
          } else {
            let tmp27 = str32;
            if (tmp26) {
              tmp27 = origin2;
            }
            const _HermesInternal12 = HermesInternal;
            combined2 = "Terlalu besar: dijangka " + tmp27 + " adalah " + str31 + code.maximum.toString();
            const str33 = code.maximum;
          }
          return combined2;
        } else if ("too_small" === code) {
          let str21 = ">";
          if (code.inclusive) {
            str21 = ">=";
          }
          const tmp15 = getSizing(code.origin);
          const origin = code.origin;
          if (tmp15) {
            const _HermesInternal11 = HermesInternal;
            let combined3 = "Terlalu kecil: dijangka " + origin + " " + tmp15.verb + " " + str21 + code.minimum.toString() + " " + tmp15.unit;
            const str25 = code.minimum;
          } else {
            const _HermesInternal10 = HermesInternal;
            combined3 = "Terlalu kecil: dijangka " + origin + " adalah " + str21 + code.minimum.toString();
            const str22 = code.minimum;
          }
          return combined3;
        } else if ("invalid_format" === code) {
          if ("starts_with" === code.format) {
            const _HermesInternal9 = HermesInternal;
            let combined4 = "String tidak sah: mesti bermula dengan \"" + code.prefix + "\"";
          } else if ("ends_with" === code.format) {
            const _HermesInternal8 = HermesInternal;
            combined4 = "String tidak sah: mesti berakhir dengan \"" + code.suffix + "\"";
          } else if ("includes" === code.format) {
            const _HermesInternal7 = HermesInternal;
            combined4 = "String tidak sah: mesti mengandungi \"" + code.includes + "\"";
          } else if ("regex" === code.format) {
            const _HermesInternal6 = HermesInternal;
            combined4 = "String tidak sah: mesti sepadan dengan corak " + code.pattern;
          } else {
            let format = table2[code.format];
            if (null == format) {
              format = code.format;
            }
            const _HermesInternal5 = HermesInternal;
            combined4 = "" + format + " tidak sah";
          }
          return combined4;
        } else if ("not_multiple_of" === code) {
          const _HermesInternal4 = HermesInternal;
          return "Nombor tidak sah: perlu gandaan " + code.divisor;
        } else if ("unrecognized_keys" === code) {
          const _HermesInternal3 = HermesInternal;
          return "Kunci tidak dikenali: " + closure_2.joinValues(code.keys, ", ");
        } else {
          str = "invalid_key";
          if ("invalid_key" === code) {
            const _HermesInternal2 = HermesInternal;
            return "Kunci tidak sah dalam " + code.origin;
          } else {
            if ("invalid_union" !== code) {
              if ("invalid_element" === code) {
                const _HermesInternal = HermesInternal;
                return "Nilai tidak sah dalam " + code.origin;
              }
            }
            return "Input tidak sah";
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
