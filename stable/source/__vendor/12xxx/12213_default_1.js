// Module ID: 12213
// Function ID: 12214
// Name: default_1
// Dependencies: [12160]
// Exports: default

// Module 12213 (default_1)
import captureStackTrace2 from "captureStackTrace" /* 12160 */;

let hasOwnProperty;

const self = this;
let tmp = this && self.__createBinding;
if (!tmp) {
  let _Object = Object;
  tmp = Object.create ? ((arg0, __esModule, arg2, arg3) => {
    function get() {
      return __esModule[closure_1];
    }
    closure_0 = __esModule;
    closure_1 = arg2;
    let tmp = arg3;
    if (undefined === arg3) {
      tmp = arg2;
    }
    let ownPropertyDescriptor = Object.getOwnPropertyDescriptor(__esModule, arg2);
    let tmp3 = ownPropertyDescriptor;
    if (tmp3) {
      let tmp4;
      if ("get" in ownPropertyDescriptor) {
        tmp4 = !__esModule.__esModule;
      } else {
        tmp4 = ownPropertyDescriptor.writable || ownPropertyDescriptor.configurable;
      }
      tmp3 = !tmp4;
    }
    if (!tmp3) {
      ownPropertyDescriptor = { enumerable: true, get };
      const obj = { enumerable: true, get };
    }
    Object.defineProperty(arg0, tmp, ownPropertyDescriptor);
  }) : ((arg0, arg1, arg2, arg3) => {
    let tmp = arg3;
    if (undefined === arg3) {
      tmp = arg2;
    }
    arg0[tmp] = arg1[arg2];
  });
}
let closure_0 = tmp;
let tmp3 = self && self.__setModuleDefault;
if (!tmp3) {
  let tmp4 = globalThis;
  const _Object2 = Object;
  tmp3 = Object.create ? ((arg0, value) => {
    const obj = { enumerable: true, value };
    Object.defineProperty(arg0, "default", obj);
  }) : ((arg0, arg1) => {
    arg0.default = arg1;
  });
}
let closure_1 = tmp3;
let tmp5 = self && self.__importStar || ((__esModule) => {
  const tmp = __esModule;
  if (tmp) {
    if (__esModule.__esModule) {
      return __esModule;
    }
  }
  const obj = {};
  if (null != __esModule) {
    for (const key10009 in __esModule) {
      let callResult = "default" !== key10009;
      if (callResult) {
        let _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        callResult = hasOwnProperty.call(__esModule, key10009);
      }
      if (!callResult) {
        continue;
      } else {
        let tmp6 = closure_0(obj, __esModule, key10009);
        continue;
      }
      continue;
    }
  }
  closure_1(obj, __esModule);
  return obj;
});
const captureStackTrace = tmp5(captureStackTrace2);
function error() {

}

export default function default_1() {
  let obj4;
  let obj5;
  let obj6;
  let obj7;
  if (typeof obj4 === "function") {
    let obj = {
      localeError: (code) => {
          let combined10;
          let combined11;
          let combined9;
          let obj7;
          let origin;
          let tmp3;
          switch (code.code) {
            case "invalid_type":
            {
              const expected = code.expected;
              let tmp72 = obj4[expected];
              const tmp71 = obj4;
              if (tmp72 == null) {
                const _HermesInternal26 = HermesInternal;
                tmp72 = { name: "valor \"" + expected + "\"", articles: obj3.masculine };
                const obj = { name: "valor \"" + expected + "\"", articles: obj3.masculine };
              }
              const _HermesInternal27 = HermesInternal;
              const combined = "" + tmp72.articles.indefinite + " " + tmp72.name;
              const parsedTypeResult = captureStackTrace.parsedType(code.input);
              let tmp80 = tmp71[parsedTypeResult];
              if (tmp80 == null) {
                obj2 = { name: "valor \"" + parsedTypeResult + "\"", articles: obj3.masculine };
                const _HermesInternal28 = HermesInternal;
                tmp80 = obj2;
              }
              const _HermesInternal29 = HermesInternal;
              const _HermesInternal30 = HermesInternal;
              return "Entrada inv\u00E1lida: esperava " + combined + ", recebeu " + "" + tmp80.articles.indefinite + " " + tmp80.name;
            }
            case "invalid_value":
            {
              let combined1;
              if (1 === code.values.length) {
                const _HermesInternal25 = HermesInternal;
                combined1 = "Entrada inv\u00E1lida: esperava " + captureStackTrace.stringifyPrimitive(code.values[0]);
              } else {
                const _HermesInternal24 = HermesInternal;
                combined1 = "Op\u00E7\u00E3o inv\u00E1lida: esperava uma das seguintes op\u00E7\u00F5es: " + captureStackTrace.joinValues(code.values, "|");
              }
              return combined1;
            }
            case "too_big":
            {
              let combined3;
              let str46 = "<";
              if (code.inclusive) {
                str46 = "<=";
              }
              const origin3 = code.origin;
              let tmp49 = obj4[origin3];
              if (obj2[code.origin] ?? null) {
                if (tmp49 == null) {
                  obj3 = { name: "valor \"" + origin3 + "\"", articles: obj3.masculine };
                  const _HermesInternal21 = HermesInternal;
                  tmp49 = obj3;
                }
                const _HermesInternal22 = HermesInternal;
                const combined2 = "" + tmp49.articles.definite + " " + tmp49.name;
                const str59 = code.maximum;
                const _HermesInternal23 = HermesInternal;
                const str1 = str59.toString();
                const str60 = (obj2[code.origin] ?? null).unit ?? "elementos";
                combined3 = "Demasiado grande: esperava que " + combined2 + " tivesse " + str46 + " " + str1 + " " + str60;
              } else {
                let tmp50 = tmp49;
                if (tmp49 == null) {
                  obj4 = { name: "valor \"" + origin3 + "\"", articles: obj3.masculine };
                  const _HermesInternal18 = HermesInternal;
                  tmp50 = obj4;
                }
                const _HermesInternal19 = HermesInternal;
                const str51 = code.maximum;
                const combined4 = "" + tmp50.articles.definite + " " + tmp50.name;
                const _HermesInternal20 = HermesInternal;
                combined3 = "Demasiado grande: esperava que " + combined4 + " fosse " + str46 + " " + str51.toString();
              }
              return combined3;
            }
            case "too_small":
            {
              let combined6;
              let str27 = ">";
              if (code.inclusive) {
                str27 = ">=";
              }
              const origin2 = code.origin;
              let tmp28 = obj4[origin2];
              if (obj2[code.origin] ?? null) {
                if (tmp28 == null) {
                  const _HermesInternal15 = HermesInternal;
                  tmp28 = { name: "valor \"" + origin2 + "\"", articles: obj3.masculine };
                  const obj5 = { name: "valor \"" + origin2 + "\"", articles: obj3.masculine };
                }
                const _HermesInternal16 = HermesInternal;
                const combined5 = "" + tmp28.articles.definite + " " + tmp28.name;
                const str40 = code.minimum;
                const _HermesInternal17 = HermesInternal;
                const str41 = (obj2[code.origin] ?? null).unit ?? "elementos";
                const str79 = str40.toString();
                combined6 = "Demasiado pequeno: esperava que " + combined5 + " tivesse " + str27 + " " + str79 + " " + str41;
              } else {
                let tmp29 = tmp28;
                if (tmp28 == null) {
                  const _HermesInternal12 = HermesInternal;
                  tmp29 = { name: "valor \"" + origin2 + "\"", articles: obj3.masculine };
                  const obj6 = { name: "valor \"" + origin2 + "\"", articles: obj3.masculine };
                }
                const _HermesInternal13 = HermesInternal;
                const str32 = code.minimum;
                const combined7 = "" + tmp29.articles.definite + " " + tmp29.name;
                const _HermesInternal14 = HermesInternal;
                combined6 = "Demasiado pequeno: esperava que " + combined7 + " fosse " + str27 + " " + str32.toString();
              }
              return combined6;
            }
            case "invalid_format":
            {
              let combined8;
              if ("starts_with" === code.format) {
                const _HermesInternal11 = HermesInternal;
                combined8 = "Texto inv\u00E1lido: deve come\u00E7ar por \"" + code.prefix + "\"";
              } else if ("ends_with" === code.format) {
                const _HermesInternal10 = HermesInternal;
                combined8 = "Texto inv\u00E1lido: deve terminar em \"" + code.suffix + "\"";
              } else if ("includes" === code.format) {
                const _HermesInternal9 = HermesInternal;
                combined8 = "Texto inv\u00E1lido: deve incluir \"" + code.includes + "\"";
              } else if ("regex" === code.format) {
                const _HermesInternal8 = HermesInternal;
                combined8 = "Texto inv\u00E1lido: deve corresponder ao padr\u00E3o " + code.pattern;
              } else {
                const format = closure_1[code.format] ?? code.format;
                const _HermesInternal7 = HermesInternal;
                combined8 = "Formato d" + format + " inv\u00E1lido";
              }
              return combined8;
            }
            case "not_multiple_of":
            {
              const _HermesInternal6 = HermesInternal;
              return "N\u00FAmero inv\u00E1lido: deve ser m\u00FAltiplo de " + code.divisor;
            }
            case "unrecognized_keys":
            {
              let str10 = "";
              if (code.keys.length > 1) {
                str10 = "s";
              }
              const _HermesInternal5 = HermesInternal;
              return "Chave" + str10 + " inv\u00E1lida" + str10 + ": " + captureStackTrace.joinValues(code.keys, ", ");
            }
            case "invalid_key":
            {
              origin = code.origin;
              tmp3 = obj4[origin];
              if (tmp3 == null) {
                obj7 = { name: combined9, articles: obj3.masculine };
                let _HermesInternal2 = HermesInternal;
                combined9 = "valor \"" + origin + "\"";
                tmp3 = obj7;
              }
              let _HermesInternal3 = HermesInternal;
              combined10 = "" + tmp3.articles.definite + " " + tmp3.name;
              let _HermesInternal4 = HermesInternal;
              combined11 = "Entrada inv\u00E1lida n" + combined10;
              return combined11;
            }
            case "invalid_element":
            {
              origin = code.origin;
              tmp3 = obj4[origin];
              if (tmp3 == null) {
                obj7 = { name: combined9, articles: obj3.masculine };
                let _HermesInternal2 = HermesInternal;
                combined9 = "valor \"" + origin + "\"";
                tmp3 = obj7;
              }
              let _HermesInternal3 = HermesInternal;
              combined10 = "" + tmp3.articles.definite + " " + tmp3.name;
              let _HermesInternal4 = HermesInternal;
              combined11 = "Entrada inv\u00E1lida n" + combined10;
              return combined11;
            }
            case "invalid_union":
            {
              let str2 = "Entrada inv\u00E1lida";
              if (code.options) {
                const _Array = Array;
                str2 = "Entrada inv\u00E1lida";
                if (Array.isArray(code.options)) {
                  str2 = "Entrada inv\u00E1lida";
                  if (code.options.length > 0) {
                    const options = code.options;
                    const mapped = options.map((item) => "'" + item + "'");
                    const _HermesInternal = HermesInternal;
                    str2 = "Valor de discrimina\u00E7\u00E3o inv\u00E1lido. Esperava " + mapped.join(" | ");
                  }
                }
              }
              return str2;
            }
            default:
            {
              return "Entrada inv\u00E1lida";
            }
          }
        }
    };
    let obj2 = { string: { unit: "caracteres" }, file: { unit: "bytes" }, array: { unit: "elementos" }, set: { unit: "elementos" }, map: { unit: "entradas" } };
    closure_1 = { regex: "a entrada", email: "o endere\u00E7o de e-mail", url: "o URL", emoji: "o emoji", uuid: "o UUID", uuidv4: "o UUIDv4", uuidv6: "o UUIDv6", nanoid: "o nanoid", guid: "o GUID", cuid: "o cuid", cuid2: "o cuid2", ulid: "o ULID", xid: "o XID", ksuid: "o KSUID", datetime: "a data e hora ISO", date: "a data ISO", time: "a hora ISO", duration: "a dura\u00E7\u00E3o ISO", ipv4: "o endere\u00E7o IPv4", ipv6: "o endere\u00E7o IPv6", mac: "o endere\u00E7o MAC", cidrv4: "o intervalo de endere\u00E7os IPv4", cidrv6: "o intervalo de endere\u00E7os IPv6", base64: "o texto codificado em base64", base64url: "o texto codificado em base64url", json_string: "o texto JSON", e164: "o n\u00FAmero E.164", credit_card: "o n\u00FAmero de cart\u00E3o de cr\u00E9dito", currency_code: "o c\u00F3digo de moeda", iban: "o IBAN", jwt: "o JWT", template_literal: "a entrada" };
    let obj3 = { masculine: { definite: "o", indefinite: "um" }, feminine: { definite: "a", indefinite: "uma" } };
    obj4 = { string: obj5, number: obj6, int: obj7, boolean: obj8, bigint: obj9, symbol: obj10, undefined: obj11, null: obj12, never: obj13, void: obj14, date: obj15, array: obj16, object: obj17, tuple: obj18, record: obj19, map: obj20, set: obj21, file: obj22, nonoptional: obj23, nan: obj24, function: obj25 };
    obj5 = { name: "texto", articles: obj3.masculine };
    obj6 = { name: "n\u00FAmero", articles: obj3.masculine };
    obj7 = { name: "n\u00FAmero inteiro", articles: obj3.masculine };
    return obj;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
