// Module ID: 12056
// Function ID: 93751
// Name: cached
// Dependencies: [12039]

// Module 12056 (cached)
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
      let closure_0 = { string: { unit: "caracteres", verb: "tener" }, file: { unit: "bytes", verb: "tener" }, array: { unit: "elementos", verb: "tener" }, set: { unit: "elementos", verb: "tener" } };
      let closure_1 = { regex: "entrada", email: "direcci\u00F3n de correo electr\u00F3nico", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "fecha y hora ISO", date: "fecha ISO", time: "hora ISO", duration: "duraci\u00F3n ISO", ipv4: "direcci\u00F3n IPv4", ipv6: "direcci\u00F3n IPv6", cidrv4: "rango IPv4", cidrv6: "rango IPv6", base64: "cadena codificada en base64", base64url: "URL codificada en base64", json_string: "cadena JSON", e164: "n\u00FAmero E.164", jwt: "JWT", template_literal: "entrada" };
      let closure_2 = { nan: "NaN", string: "texto", number: "n\u00FAmero", boolean: "booleano", array: "arreglo", object: "objeto", set: "conjunto", file: "archivo", date: "fecha", bigint: "n\u00FAmero grande", symbol: "s\u00EDmbolo", undefined: "indefinido", null: "nulo", function: "funci\u00F3n", map: "mapa", record: "registro", tuple: "tupla", enum: "enumeraci\u00F3n", union: "uni\u00F3n", literal: "literal", promise: "promesa", void: "vac\u00EDo", never: "nunca", unknown: "desconocido", any: "cualquiera" };
      return (code) => {
        code = code.code;
        if ("invalid_type" === code) {
          let expected = closure_2[code.expected];
          if (null == expected) {
            expected = code.expected;
          }
          const parsedTypeResult = closure_2.parsedType(code.input);
          let tmp60 = parsedTypeResult;
          if (null != closure_2[parsedTypeResult]) {
            tmp60 = tmp59;
          }
          if (obj.test(code.expected)) {
            const _HermesInternal17 = HermesInternal;
            let combined = "Entrada inv\u00E1lida: se esperaba instanceof " + code.expected + ", recibido " + tmp60;
          } else {
            const _HermesInternal16 = HermesInternal;
            combined = "Entrada inv\u00E1lida: se esperaba " + expected + ", recibido " + tmp60;
          }
          return combined;
        } else if ("invalid_value" === code) {
          if (1 === code.values.length) {
            const _HermesInternal15 = HermesInternal;
            let combined1 = "Entrada inv\u00E1lida: se esperaba " + closure_2.stringifyPrimitive(code.values[0]);
          } else {
            const _HermesInternal14 = HermesInternal;
            combined1 = "Opci\u00F3n inv\u00E1lida: se esperaba una de " + closure_2.joinValues(code.values, "|");
          }
          return combined1;
        } else if ("too_big" === code) {
          let str30 = "<";
          if (code.inclusive) {
            str30 = "<=";
          }
          const tmp34 = getSizing(code.origin);
          let origin4 = closure_2[code.origin];
          if (null == origin4) {
            origin4 = code.origin;
          }
          let str31 = "valor";
          if (tmp34) {
            if (tmp37) {
              str31 = origin4;
            }
            let str = code.maximum.toString();
            const unit = tmp34.unit;
            let str36 = "elementos";
            if (null != unit) {
              str36 = unit;
            }
            const _HermesInternal13 = HermesInternal;
            let combined2 = "Demasiado grande: se esperaba que " + str31 + " tuviera " + str30 + str + " " + str36;
            const str35 = code.maximum;
          } else {
            let tmp38 = str31;
            if (tmp37) {
              tmp38 = origin4;
            }
            const _HermesInternal12 = HermesInternal;
            combined2 = "Demasiado grande: se esperaba que " + tmp38 + " fuera " + str30 + code.maximum.toString();
            const str32 = code.maximum;
          }
          return combined2;
        } else if ("too_small" === code) {
          let str23 = ">";
          if (code.inclusive) {
            str23 = ">=";
          }
          const tmp21 = getSizing(code.origin);
          let origin3 = closure_2[code.origin];
          if (null == origin3) {
            origin3 = code.origin;
          }
          const str1 = code.minimum.toString();
          if (tmp21) {
            const _HermesInternal11 = HermesInternal;
            let combined3 = "Demasiado peque\u00F1o: se esperaba que " + origin3 + " tuviera " + str23 + str1 + " " + tmp21.unit;
          } else {
            const _HermesInternal10 = HermesInternal;
            combined3 = "Demasiado peque\u00F1o: se esperaba que " + origin3 + " fuera " + str23 + str1;
          }
          return combined3;
        } else if ("invalid_format" === code) {
          if ("starts_with" === code.format) {
            const _HermesInternal9 = HermesInternal;
            let combined4 = "Cadena inv\u00E1lida: debe comenzar con \"" + code.prefix + "\"";
          } else if ("ends_with" === code.format) {
            const _HermesInternal8 = HermesInternal;
            combined4 = "Cadena inv\u00E1lida: debe terminar en \"" + code.suffix + "\"";
          } else if ("includes" === code.format) {
            const _HermesInternal7 = HermesInternal;
            combined4 = "Cadena inv\u00E1lida: debe incluir \"" + code.includes + "\"";
          } else if ("regex" === code.format) {
            const _HermesInternal6 = HermesInternal;
            combined4 = "Cadena inv\u00E1lida: debe coincidir con el patr\u00F3n " + code.pattern;
          } else {
            let format = table2[code.format];
            if (null == format) {
              format = code.format;
            }
            const _HermesInternal5 = HermesInternal;
            combined4 = "Inv\u00E1lido " + format;
          }
          return combined4;
        } else if ("not_multiple_of" === code) {
          const _HermesInternal4 = HermesInternal;
          return "N\u00FAmero inv\u00E1lido: debe ser m\u00FAltiplo de " + code.divisor;
        } else if ("unrecognized_keys" === code) {
          let str6 = "";
          let str7 = "";
          if (code.keys.length > 1) {
            str7 = "s";
          }
          if (code.keys.length > 1) {
            str6 = "s";
          }
          const _HermesInternal3 = HermesInternal;
          return "Llave" + str7 + " desconocida" + str6 + ": " + closure_2.joinValues(code.keys, ", ");
        } else if ("invalid_key" === code) {
          let origin2 = closure_2[code.origin];
          if (null == origin2) {
            origin2 = code.origin;
          }
          const _HermesInternal2 = HermesInternal;
          return "Llave inv\u00E1lida en " + origin2;
        } else {
          str = "invalid_union";
          if ("invalid_union" !== code) {
            if ("invalid_element" === code) {
              let origin = closure_2[code.origin];
              if (null == origin) {
                origin = code.origin;
              }
              const _HermesInternal = HermesInternal;
              return "Valor inv\u00E1lido en " + origin;
            }
          }
          return "Entrada inv\u00E1lida";
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
