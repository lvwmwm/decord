// Module ID: 13056
// Function ID: 13057
// Dependencies: [13057, 13069, 13070, 13078, 13066, 13067, 13059, 13079, 13093, 13096, 13064, 13097, 13098]
// Exports: create

// Module 13056
import Lexer from "Lexer" /* 13079 */;
import _slicedToArray from "_slicedToArray" /* 13098 */;

const require = globalThis.__r;
let _require;

function createSyntax(types) {
  let obj;
  let tmp4;
  _require = types;
  let tmp = require("createParser")(types);
  const arr = require("createWalker")(types);
  const tmp2 = require("createGenerator")(types);
  let tmp3 = require("createConvertors")(arr);
  obj = {
    List: require("List"),
    SyntaxError: require("createCustomError"),
    TokenStream: require("TokenStream"),
    Lexer: require("Lexer"),
    vendorPrefix: require("module_13093").vendorPrefix,
    keyword: require("module_13093").keyword,
    property: require("module_13093").property,
    isCustomProperty: require("module_13093").isCustomProperty,
    definitionSyntax: require("module_13096"),
    lexer: tmp4,
    createLexer(arg0) {
      const tmp = new Lexer(arg0, obj, obj.lexer.structure);
      return tmp;
    },
    tokenize: require("tokenize"),
    parse: tmp,
    walk: arr,
    generate: tmp2,
    find: arr.find,
    findLast: arr.findLast,
    findAll: arr.findAll,
    clone: require("clone"),
    fromPlainObject: tmp3.fromPlainObject,
    toPlainObject: tmp3.toPlainObject,
    createSyntax(arg0) {
      return createSyntax(types(obj[12])({}, arg0));
    },
    fork(fn) {
      let tmp6;
      const tmp3 = _slicedToArray({}, types);
      const tmp4 = createSyntax;
      if (typeof fn === "function") {
        const _Object = Object;
        tmp6 = fn(tmp3, Object.assign);
      } else {
        tmp6 = _slicedToArray(tmp3, fn);
      }
      return tmp4(tmp6);
    }
  };
  const obj2 = { generic: true, types: types.types, atrules: types.atrules, properties: types.properties, node: types.node };
  tmp4 = new require("Lexer")(obj2, obj);
  return obj;
}

export const create = (arg0) => createSyntax(_slicedToArray({}, arg0));
