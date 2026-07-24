// Module ID: 12080
// Function ID: 94016
// Name: cached
// Dependencies: [12039]

// Module 12080 (cached)
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
      let closure_0 = { string: { unit: "caracteres", verb: "ter" }, file: { unit: "bytes", verb: "ter" }, array: { unit: "itens", verb: "ter" }, set: { unit: "itens", verb: "ter" } };
      let closure_1 = { regex: "padr\u00E3o", email: "endere\u00E7o de e-mail", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "data e hora ISO", date: "data ISO", time: "hora ISO", duration: "dura\u00E7\u00E3o ISO", ipv4: "endere\u00E7o IPv4", ipv6: "endere\u00E7o IPv6", cidrv4: "faixa de IPv4", cidrv6: "faixa de IPv6", base64: "texto codificado em base64", base64url: "URL codificada em base64", json_string: "texto JSON", e164: "n\u00FAmero E.164", jwt: "JWT", template_literal: "entrada" };
      let closure_2 = { nan: "NaN", number: "n\u00FAmero", null: "nulo" };
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
            let combined = "Tipo inv\u00E1lido: esperado instanceof " + code.expected + ", recebido " + tmp53;
          } else {
            const _HermesInternal16 = HermesInternal;
            combined = "Tipo inv\u00E1lido: esperado " + expected + ", recebido " + tmp53;
          }
          return combined;
        } else if ("invalid_value" === code) {
          if (1 === code.values.length) {
            const _HermesInternal15 = HermesInternal;
            let combined1 = "Entrada inv\u00E1lida: esperado " + closure_2.stringifyPrimitive(code.values[0]);
          } else {
            const _HermesInternal14 = HermesInternal;
            combined1 = "Op\u00E7\u00E3o inv\u00E1lida: esperada uma das " + closure_2.joinValues(code.values, "|");
          }
          return combined1;
        } else if ("too_big" === code) {
          let str32 = "<";
          if (code.inclusive) {
            str32 = "<=";
          }
          const tmp28 = getSizing(code.origin);
          const origin2 = code.origin;
          let str33 = "valor";
          if (tmp28) {
            if (tmp30) {
              str33 = origin2;
            }
            let str = code.maximum.toString();
            const unit = tmp28.unit;
            let str38 = "elementos";
            if (null != unit) {
              str38 = unit;
            }
            const _HermesInternal13 = HermesInternal;
            let combined2 = "Muito grande: esperado que " + str33 + " tivesse " + str32 + str + " " + str38;
            const str37 = code.maximum;
          } else {
            let tmp31 = str33;
            if (tmp30) {
              tmp31 = origin2;
            }
            const _HermesInternal12 = HermesInternal;
            combined2 = "Muito grande: esperado que " + tmp31 + " fosse " + str32 + code.maximum.toString();
            const str34 = code.maximum;
          }
          return combined2;
        } else if ("too_small" === code) {
          let str26 = ">";
          if (code.inclusive) {
            str26 = ">=";
          }
          const tmp17 = getSizing(code.origin);
          ({ origin, minimum } = code);
          const str1 = minimum.toString();
          if (tmp17) {
            const _HermesInternal11 = HermesInternal;
            let combined3 = "Muito pequeno: esperado que " + origin + " tivesse " + str26 + str1 + " " + tmp17.unit;
          } else {
            const _HermesInternal10 = HermesInternal;
            combined3 = "Muito pequeno: esperado que " + origin + " fosse " + str26 + str1;
          }
          return combined3;
        } else if ("invalid_format" === code) {
          if ("starts_with" === code.format) {
            const _HermesInternal9 = HermesInternal;
            let combined4 = "Texto inv\u00E1lido: deve come\u00E7ar com \"" + code.prefix + "\"";
          } else if ("ends_with" === code.format) {
            const _HermesInternal8 = HermesInternal;
            combined4 = "Texto inv\u00E1lido: deve terminar com \"" + code.suffix + "\"";
          } else if ("includes" === code.format) {
            const _HermesInternal7 = HermesInternal;
            combined4 = "Texto inv\u00E1lido: deve incluir \"" + code.includes + "\"";
          } else if ("regex" === code.format) {
            const _HermesInternal6 = HermesInternal;
            combined4 = "Texto inv\u00E1lido: deve corresponder ao padr\u00E3o " + code.pattern;
          } else {
            let format = table2[code.format];
            if (null == format) {
              format = code.format;
            }
            const _HermesInternal5 = HermesInternal;
            combined4 = "" + format + " inv\u00E1lido";
          }
          return combined4;
        } else if ("not_multiple_of" === code) {
          const _HermesInternal4 = HermesInternal;
          return "N\u00FAmero inv\u00E1lido: deve ser m\u00FAltiplo de " + code.divisor;
        } else if ("unrecognized_keys" === code) {
          let str8 = "";
          let str9 = "";
          if (code.keys.length > 1) {
            str9 = "s";
          }
          if (code.keys.length > 1) {
            str8 = "s";
          }
          const _HermesInternal3 = HermesInternal;
          return "Chave" + str9 + " desconhecida" + str8 + ": " + closure_2.joinValues(code.keys, ", ");
        } else {
          str = "invalid_key";
          if ("invalid_key" === code) {
            const _HermesInternal2 = HermesInternal;
            return "Chave inv\u00E1lida em " + code.origin;
          } else if ("invalid_union" === code) {
            return "Entrada inv\u00E1lida";
          } else if ("invalid_element" === code) {
            const _HermesInternal = HermesInternal;
            return "Valor inv\u00E1lido em " + code.origin;
          } else {
            return "Campo inv\u00E1lido";
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
