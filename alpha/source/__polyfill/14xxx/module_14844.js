// Module ID: 14844
// Function ID: 14845
// Dependencies: [14845, 14857, 14858, 14866, 14854, 14855, 14847, 14867, 14881, 14884, 14852, 14885, 14886]
// Exports: create

// Module 14844
import Lexer from "Lexer" /* 14867 */;
import _slicedToArray from "_slicedToArray" /* 14886 */;

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
    vendorPrefix: require("module_14881").vendorPrefix,
    keyword: require("module_14881").keyword,
    property: require("module_14881").property,
    isCustomProperty: require("module_14881").isCustomProperty,
    definitionSyntax: require("module_14884"),
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
