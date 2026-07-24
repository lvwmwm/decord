// Module ID: 12052
// Function ID: 93707
// Name: cached
// Dependencies: [12039]

// Module 12052 (cached)
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
      let closure_0 = { string: { unit: "tegn", verb: "havde" }, file: { unit: "bytes", verb: "havde" }, array: { unit: "elementer", verb: "indeholdt" }, set: { unit: "elementer", verb: "indeholdt" } };
      let closure_1 = { regex: "input", email: "e-mailadresse", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO dato- og klokkesl\u00E6t", date: "ISO-dato", time: "ISO-klokkesl\u00E6t", duration: "ISO-varighed", ipv4: "IPv4-omr\u00E5de", ipv6: "IPv6-omr\u00E5de", cidrv4: "IPv4-spektrum", cidrv6: "IPv6-spektrum", base64: "base64-kodet streng", base64url: "base64url-kodet streng", json_string: "JSON-streng", e164: "E.164-nummer", jwt: "JWT", template_literal: "input" };
      let closure_2 = { nan: "NaN", string: "streng", number: "tal", boolean: "boolean", array: "liste", object: "objekt", set: "s\u00E6t", file: "fil" };
      return (code) => {
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
            let combined = "Ugyldigt input: forventede instanceof " + code.expected + ", fik " + tmp53;
          } else {
            const _HermesInternal16 = HermesInternal;
            combined = "Ugyldigt input: forventede " + expected + ", fik " + tmp53;
          }
          return combined;
        } else if ("invalid_value" === code) {
          if (1 === code.values.length) {
            const _HermesInternal15 = HermesInternal;
            let combined1 = "Ugyldig v\u00E6rdi: forventede " + closure_2.stringifyPrimitive(code.values[0]);
          } else {
            const _HermesInternal14 = HermesInternal;
            combined1 = "Ugyldigt valg: forventede en af f\u00F8lgende " + closure_2.joinValues(code.values, "|");
          }
          return combined1;
        } else if ("too_big" === code) {
          let str35 = "<";
          if (code.inclusive) {
            str35 = "<=";
          }
          const tmp26 = getSizing(code.origin);
          let origin2 = closure_2[code.origin];
          if (null == origin2) {
            origin2 = code.origin;
          }
          let str36 = "value";
          if (tmp26) {
            if (tmp29) {
              str36 = origin2;
            }
            const verb = tmp26.verb;
            let str = code.maximum.toString();
            const unit = tmp26.unit;
            let str42 = "elementer";
            if (null != unit) {
              str42 = unit;
            }
            const _HermesInternal13 = HermesInternal;
            let combined2 = "For stor: forventede " + str36 + " " + verb + " " + str35 + " " + str + " " + str42;
            const str41 = code.maximum;
          } else {
            let tmp30 = str36;
            if (tmp29) {
              tmp30 = origin2;
            }
            const _HermesInternal12 = HermesInternal;
            combined2 = "For stor: forventede " + tmp30 + " havde " + str35 + " " + code.maximum.toString();
            const str37 = code.maximum;
          }
          return combined2;
        } else if ("too_small" === code) {
          let str23 = ">";
          if (code.inclusive) {
            str23 = ">=";
          }
          const tmp15 = getSizing(code.origin);
          let origin = closure_2[code.origin];
          if (null == origin) {
            origin = code.origin;
          }
          if (tmp15) {
            const _HermesInternal11 = HermesInternal;
            let combined3 = "For lille: forventede " + origin + " " + tmp15.verb + " " + str23 + " " + code.minimum.toString() + " " + tmp15.unit;
            const str28 = code.minimum;
          } else {
            const _HermesInternal10 = HermesInternal;
            combined3 = "For lille: forventede " + origin + " havde " + str23 + " " + code.minimum.toString();
            const str24 = code.minimum;
          }
          return combined3;
        } else if ("invalid_format" === code) {
          if ("starts_with" === code.format) {
            const _HermesInternal9 = HermesInternal;
            let combined4 = "Ugyldig streng: skal starte med \"" + code.prefix + "\"";
          } else if ("ends_with" === code.format) {
            const _HermesInternal8 = HermesInternal;
            combined4 = "Ugyldig streng: skal ende med \"" + code.suffix + "\"";
          } else if ("includes" === code.format) {
            const _HermesInternal7 = HermesInternal;
            combined4 = "Ugyldig streng: skal indeholde \"" + code.includes + "\"";
          } else if ("regex" === code.format) {
            const _HermesInternal6 = HermesInternal;
            combined4 = "Ugyldig streng: skal matche m\u00F8nsteret " + code.pattern;
          } else {
            let format = table2[code.format];
            if (null == format) {
              format = code.format;
            }
            const _HermesInternal5 = HermesInternal;
            combined4 = "Ugyldig " + format;
          }
          return combined4;
        } else if ("not_multiple_of" === code) {
          const _HermesInternal4 = HermesInternal;
          return "Ugyldigt tal: skal v\u00E6re deleligt med " + code.divisor;
        } else if ("unrecognized_keys" === code) {
          let str8 = "Ukendt n\u00F8gle";
          if (code.keys.length > 1) {
            str8 = "Ukendte n\u00F8gler";
          }
          const _HermesInternal3 = HermesInternal;
          return "" + str8 + ": " + closure_2.joinValues(code.keys, ", ");
        } else {
          str = "invalid_key";
          if ("invalid_key" === code) {
            const _HermesInternal2 = HermesInternal;
            return "Ugyldig n\u00F8gle i " + code.origin;
          } else if ("invalid_union" === code) {
            return "Ugyldigt input: matcher ingen af de tilladte typer";
          } else if ("invalid_element" === code) {
            const _HermesInternal = HermesInternal;
            return "Ugyldig v\u00E6rdi i " + code.origin;
          } else {
            return "Ugyldigt input";
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
