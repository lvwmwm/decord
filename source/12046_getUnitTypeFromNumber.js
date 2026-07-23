// Module ID: 12046
// Function ID: 93690
// Name: getUnitTypeFromNumber
// Dependencies: [12013]

// Module 12046 (getUnitTypeFromNumber)
const self = this;
function getUnitTypeFromNumber(arg0) {
  const absolute = Math.abs(arg0);
  const result = absolute % 10;
  const result1 = absolute % 100;
  if (result1 < 11) {
    let str = "many";
    if (0 !== result) {
      let str2 = "few";
      if (1 === result) {
        str2 = "one";
      }
      str = str2;
    }
  } else {
    str = "many";
  }
  return str;
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
    function capitalizeFirstCharacter(str) {
      const formatted = str.charAt(0).toUpperCase();
      return formatted + str.slice(1);
    }
    function error() {
      function getSizing(arg0, arg1, arg2, arg3) {
        let tmp2 = null;
        if (null != table[arg0]) {
          tmp2 = tmp;
        }
        let tmp3 = tmp2;
        if (null !== tmp2) {
          const obj = { unit: tmp2.unit[arg1] };
          let str = "notInclusive";
          if (arg2) {
            str = "inclusive";
          }
          obj.verb = tmp2.verb[arg3][str];
          tmp3 = obj;
        }
        return tmp3;
      }
      let closure_0 = { string: { unit: { one: "simbolis", few: "simboliai", many: "simboli\u0173" }, verb: { smaller: { inclusive: "turi b\u016Bti ne ilgesn\u0117 kaip", notInclusive: "turi b\u016Bti trumpesn\u0117 kaip" }, bigger: { inclusive: "turi b\u016Bti ne trumpesn\u0117 kaip", notInclusive: "turi b\u016Bti ilgesn\u0117 kaip" } } }, file: { unit: { one: "baitas", few: "baitai", many: "bait\u0173" }, verb: { smaller: { inclusive: "turi b\u016Bti ne didesnis kaip", notInclusive: "turi b\u016Bti ma\u017Eesnis kaip" }, bigger: { inclusive: "turi b\u016Bti ne ma\u017Eesnis kaip", notInclusive: "turi b\u016Bti didesnis kaip" } } }, array: { unit: { one: "element\u0105", few: "elementus", many: "element\u0173" }, verb: { smaller: { inclusive: "turi tur\u0117ti ne daugiau kaip", notInclusive: "turi tur\u0117ti ma\u017Eiau kaip" }, bigger: { inclusive: "turi tur\u0117ti ne ma\u017Eiau kaip", notInclusive: "turi tur\u0117ti daugiau kaip" } } }, set: { unit: { one: "element\u0105", few: "elementus", many: "element\u0173" }, verb: { smaller: { inclusive: "turi tur\u0117ti ne daugiau kaip", notInclusive: "turi tur\u0117ti ma\u017Eiau kaip" }, bigger: { inclusive: "turi tur\u0117ti ne ma\u017Eiau kaip", notInclusive: "turi tur\u0117ti daugiau kaip" } } } };
      let closure_1 = { regex: "\u012Fvestis", email: "el. pa\u0161to adresas", url: "URL", emoji: "jaustukas", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO data ir laikas", date: "ISO data", time: "ISO laikas", duration: "ISO trukm\u0117", ipv4: "IPv4 adresas", ipv6: "IPv6 adresas", cidrv4: "IPv4 tinklo prefiksas (CIDR)", cidrv6: "IPv6 tinklo prefiksas (CIDR)", base64: "base64 u\u017Ekoduota eilut\u0117", base64url: "base64url u\u017Ekoduota eilut\u0117", json_string: "JSON eilut\u0117", e164: "E.164 numeris", jwt: "JWT", template_literal: "\u012Fvestis" };
      let closure_2 = { nan: "NaN", number: "skai\u010Dius", bigint: "sveikasis skai\u010Dius", string: "eilut\u0117", boolean: "login\u0117 reik\u0161m\u0117", undefined: "neapibr\u0117\u017Eta reik\u0161m\u0117", function: "funkcija", symbol: "simbolis", array: "masyvas", object: "objektas", null: "nulin\u0117 reik\u0161m\u0117" };
      return (code) => {
        code = code.code;
        if ("invalid_type" === code) {
          let expected = closure_2[code.expected];
          if (null == expected) {
            expected = code.expected;
          }
          const parsedTypeResult = closure_2.parsedType(code.input);
          let tmp81 = parsedTypeResult;
          if (null != closure_2[parsedTypeResult]) {
            tmp81 = tmp80;
          }
          if (obj.test(code.expected)) {
            const _HermesInternal16 = HermesInternal;
            let combined = "Gautas tipas " + tmp81 + ", o tik\u0117tasi - instanceof " + code.expected;
          } else {
            const _HermesInternal15 = HermesInternal;
            combined = "Gautas tipas " + tmp81 + ", o tik\u0117tasi - " + expected;
          }
          return combined;
        } else if ("invalid_value" === code) {
          if (1 === code.values.length) {
            const _HermesInternal14 = HermesInternal;
            let combined1 = "Privalo b\u016Bti " + closure_2.stringifyPrimitive(code.values[0]);
          } else {
            const _HermesInternal13 = HermesInternal;
            combined1 = "Privalo b\u016Bti vienas i\u0161 " + closure_2.joinValues(code.values, "|") + " pasirinkim\u0173";
          }
          return combined1;
        } else if ("too_big" === code) {
          let origin5 = closure_2[code.origin];
          if (null == origin5) {
            origin5 = code.origin;
          }
          const origin6 = code.origin;
          const _Number2 = Number;
          const tmp49 = outer1_5(Number(code.maximum));
          const inclusive2 = code.inclusive;
          const tmp46Result = getSizing(origin6, tmp49, null != inclusive2 && inclusive2, "smaller");
          if (null != tmp46Result) {
            if (tmp46Result.verb) {
              if (null == origin5) {
                origin5 = code.origin;
              }
              let str51 = "reik\u0161m\u0117";
              if (null != origin5) {
                str51 = origin5;
              }
              const tmp63Result = getSizing(str51);
              const verb2 = tmp46Result.verb;
              let str = code.maximum.toString();
              const unit2 = tmp46Result.unit;
              let str53 = "element\u0173";
              if (null != unit2) {
                str53 = unit2;
              }
              const _HermesInternal12 = HermesInternal;
              return "" + tmp63Result + " " + verb2 + " " + str + " " + str53;
            }
          }
          let str43 = "ma\u017Eesnis kaip";
          if (code.inclusive) {
            str43 = "ne didesnis kaip";
          }
          let origin7 = origin5;
          if (null == origin5) {
            origin7 = code.origin;
          }
          let str44 = "reik\u0161m\u0117";
          if (null != origin7) {
            str44 = origin7;
          }
          const tmp55Result = getSizing(str44);
          const str1 = code.maximum.toString();
          let unit;
          if (null != tmp46Result) {
            unit = tmp46Result.unit;
          }
          const _HermesInternal11 = HermesInternal;
          return "" + tmp55Result + " turi b\u016Bti " + str43 + " " + str1 + " " + unit;
        } else if ("too_small" === code) {
          let origin2 = closure_2[code.origin];
          if (null == origin2) {
            origin2 = code.origin;
          }
          const origin3 = code.origin;
          const _Number = Number;
          const tmp23 = outer1_5(Number(code.minimum));
          const inclusive = code.inclusive;
          const tmp20Result = getSizing(origin3, tmp23, null != inclusive && inclusive, "bigger");
          if (null != tmp20Result) {
            if (tmp20Result.verb) {
              if (null == origin2) {
                origin2 = code.origin;
              }
              let str34 = "reik\u0161m\u0117";
              if (null != origin2) {
                str34 = origin2;
              }
              const tmp37Result = getSizing(str34);
              const verb = tmp20Result.verb;
              let str2 = code.minimum.toString();
              unit = tmp20Result.unit;
              let str36 = "element\u0173";
              if (null != unit) {
                str36 = unit;
              }
              const _HermesInternal10 = HermesInternal;
              return "" + tmp37Result + " " + verb + " " + str2 + " " + str36;
            }
          }
          let str26 = "didesnis kaip";
          if (code.inclusive) {
            str26 = "ne ma\u017Eesnis kaip";
          }
          let origin4 = origin2;
          if (null == origin2) {
            origin4 = code.origin;
          }
          let str27 = "reik\u0161m\u0117";
          if (null != origin4) {
            str27 = origin4;
          }
          const tmp29Result = getSizing(str27);
          let str3 = code.minimum.toString();
          let unit1;
          if (null != tmp20Result) {
            unit1 = tmp20Result.unit;
          }
          const _HermesInternal9 = HermesInternal;
          return "" + tmp29Result + " turi b\u016Bti " + str26 + " " + str3 + " " + unit1;
        } else if ("invalid_format" === code) {
          if ("starts_with" === code.format) {
            const _HermesInternal8 = HermesInternal;
            let combined2 = "Eilut\u0117 privalo prasid\u0117ti \"" + code.prefix + "\"";
          } else if ("ends_with" === code.format) {
            const _HermesInternal7 = HermesInternal;
            combined2 = "Eilut\u0117 privalo pasibaigti \"" + code.suffix + "\"";
          } else if ("includes" === code.format) {
            const _HermesInternal6 = HermesInternal;
            combined2 = "Eilut\u0117 privalo \u012Ftraukti \"" + code.includes + "\"";
          } else if ("regex" === code.format) {
            const _HermesInternal5 = HermesInternal;
            combined2 = "Eilut\u0117 privalo atitikti " + code.pattern;
          } else {
            let format = table2[code.format];
            if (null == format) {
              format = code.format;
            }
            const _HermesInternal4 = HermesInternal;
            combined2 = "Neteisingas " + format;
          }
          return combined2;
        } else if ("not_multiple_of" === code) {
          const _HermesInternal3 = HermesInternal;
          return "Skai\u010Dius privalo b\u016Bti " + code.divisor + " kartotinis.";
        } else if ("unrecognized_keys" === code) {
          let str7 = "as";
          let str8 = "as";
          if (code.keys.length > 1) {
            str8 = "i";
          }
          if (code.keys.length > 1) {
            str7 = "ai";
          }
          const _HermesInternal2 = HermesInternal;
          return "Neatpa\u017Eint" + str8 + " rakt" + str7 + ": " + closure_2.joinValues(code.keys, ", ");
        } else if ("invalid_key" === code) {
          return "Rastas klaidingas raktas";
        } else {
          if ("invalid_union" !== code) {
            str = "invalid_element";
            if ("invalid_element" === code) {
              let origin = closure_2[code.origin];
              if (null == origin) {
                origin = code.origin;
              }
              if (null == origin) {
                origin = code.origin;
              }
              str2 = "reik\u0161m\u0117";
              if (null != origin) {
                str2 = origin;
              }
              const _HermesInternal = HermesInternal;
              str3 = "";
              return "" + getSizing(str2) + " turi klaiding\u0105 \u012Fvest\u012F";
            }
          }
          return "Klaidinga \u012Fvestis";
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
