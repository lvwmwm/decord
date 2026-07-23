// Module ID: 12032
// Function ID: 93537
// Name: cached
// Dependencies: [12013]

// Module 12032 (cached)
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
      let closure_0 = { string: { unit: "merkki\u00E4", subject: "merkkijonon" }, file: { unit: "tavua", subject: "tiedoston" }, array: { unit: "alkiota", subject: "listan" }, set: { unit: "alkiota", subject: "joukon" }, number: { unit: "", subject: "luvun" }, bigint: { unit: "", subject: "suuren kokonaisluvun" }, int: { unit: "", subject: "kokonaisluvun" }, date: { unit: "", subject: "p\u00E4iv\u00E4m\u00E4\u00E4r\u00E4n" } };
      let closure_1 = { regex: "s\u00E4\u00E4nn\u00F6llinen lauseke", email: "s\u00E4hk\u00F6postiosoite", url: "URL-osoite", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO-aikaleima", date: "ISO-p\u00E4iv\u00E4m\u00E4\u00E4r\u00E4", time: "ISO-aika", duration: "ISO-kesto", ipv4: "IPv4-osoite", ipv6: "IPv6-osoite", cidrv4: "IPv4-alue", cidrv6: "IPv6-alue", base64: "base64-koodattu merkkijono", base64url: "base64url-koodattu merkkijono", json_string: "JSON-merkkijono", e164: "E.164-luku", jwt: "JWT", template_literal: "templaattimerkkijono" };
      let closure_2 = { nan: "NaN" };
      return (code) => {
        code = code.code;
        if ("invalid_type" === code) {
          let expected = closure_2[code.expected];
          if (null == expected) {
            expected = code.expected;
          }
          const parsedTypeResult = closure_2.parsedType(code.input);
          let tmp35 = parsedTypeResult;
          if (null != closure_2[parsedTypeResult]) {
            tmp35 = tmp34;
          }
          if (obj.test(code.expected)) {
            const _HermesInternal15 = HermesInternal;
            let combined = "Virheellinen tyyppi: odotettiin instanceof " + code.expected + ", oli " + tmp35;
          } else {
            const _HermesInternal14 = HermesInternal;
            combined = "Virheellinen tyyppi: odotettiin " + expected + ", oli " + tmp35;
          }
          return combined;
        } else if ("invalid_value" === code) {
          if (1 === code.values.length) {
            const _HermesInternal13 = HermesInternal;
            let combined1 = "Virheellinen sy\u00F6te: t\u00E4ytyy olla " + closure_2.stringifyPrimitive(code.values[0]);
          } else {
            const _HermesInternal12 = HermesInternal;
            combined1 = "Virheellinen valinta: t\u00E4ytyy olla yksi seuraavista: " + closure_2.joinValues(code.values, "|");
          }
          return combined1;
        } else if ("too_big" === code) {
          let str32 = "<";
          if (code.inclusive) {
            str32 = "<=";
          }
          const tmp19 = getSizing(code.origin);
          if (tmp19) {
            const _HermesInternal11 = HermesInternal;
            let trimmed = "Liian suuri: " + tmp19.subject + " t\u00E4ytyy olla " + str32 + code.maximum.toString() + " " + tmp19.unit.trim();
            const str35 = code.maximum;
            const str39 = "Liian suuri: " + tmp19.subject + " t\u00E4ytyy olla " + str32 + code.maximum.toString() + " " + tmp19.unit;
          } else {
            const _HermesInternal10 = HermesInternal;
            trimmed = "Liian suuri: arvon t\u00E4ytyy olla " + str32 + code.maximum.toString();
            const str33 = code.maximum;
          }
          return trimmed;
        } else if ("too_small" === code) {
          let str24 = ">";
          if (code.inclusive) {
            str24 = ">=";
          }
          const tmp13 = getSizing(code.origin);
          if (tmp13) {
            const _HermesInternal9 = HermesInternal;
            let trimmed1 = "Liian pieni: " + tmp13.subject + " t\u00E4ytyy olla " + str24 + code.minimum.toString() + " " + tmp13.unit.trim();
            const str27 = code.minimum;
            const str31 = "Liian pieni: " + tmp13.subject + " t\u00E4ytyy olla " + str24 + code.minimum.toString() + " " + tmp13.unit;
          } else {
            const _HermesInternal8 = HermesInternal;
            trimmed1 = "Liian pieni: arvon t\u00E4ytyy olla " + str24 + code.minimum.toString();
            const str25 = code.minimum;
          }
          return trimmed1;
        } else if ("invalid_format" === code) {
          if ("starts_with" === code.format) {
            const _HermesInternal7 = HermesInternal;
            let combined2 = "Virheellinen sy\u00F6te: t\u00E4ytyy alkaa \"" + code.prefix + "\"";
          } else if ("ends_with" === code.format) {
            const _HermesInternal6 = HermesInternal;
            combined2 = "Virheellinen sy\u00F6te: t\u00E4ytyy loppua \"" + code.suffix + "\"";
          } else if ("includes" === code.format) {
            const _HermesInternal5 = HermesInternal;
            combined2 = "Virheellinen sy\u00F6te: t\u00E4ytyy sis\u00E4lt\u00E4\u00E4 \"" + code.includes + "\"";
          } else if ("regex" === code.format) {
            const _HermesInternal4 = HermesInternal;
            combined2 = "Virheellinen sy\u00F6te: t\u00E4ytyy vastata s\u00E4\u00E4nn\u00F6llist\u00E4 lauseketta " + code.pattern;
          } else {
            let format = table2[code.format];
            if (null == format) {
              format = code.format;
            }
            const _HermesInternal3 = HermesInternal;
            combined2 = "Virheellinen " + format;
          }
          return combined2;
        } else if ("not_multiple_of" === code) {
          const _HermesInternal2 = HermesInternal;
          return "Virheellinen luku: t\u00E4ytyy olla luvun " + code.divisor + " monikerta";
        } else if ("unrecognized_keys" === code) {
          let str8 = "Tuntematon avain";
          if (code.keys.length > 1) {
            str8 = "Tuntemattomat avaimet";
          }
          const _HermesInternal = HermesInternal;
          return "" + str8 + ": " + closure_2.joinValues(code.keys, ", ");
        } else if ("invalid_key" === code) {
          return "Virheellinen avain tietueessa";
        } else if ("invalid_union" === code) {
          return "Virheellinen unioni";
        } else if ("invalid_element" === code) {
          return "Virheellinen arvo joukossa";
        } else {
          return "Virheellinen sy\u00F6te";
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
