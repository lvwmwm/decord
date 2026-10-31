// Module ID: 12848
// Function ID: 12849
// Name: Lexer
// Dependencies: [32, 12849, 12853, 12854, 12855, 12856, 12857, 12858, 12859, 12850, 12862, 12863, 12864]

// Module 12848 (Lexer)
import _mod12853 from "module_12853" /* 12853 */;
import _mod12854 from "module_12854" /* 12854 */;
import _mod12855 from "module_12855" /* 12855 */;
import _mod12856 from "module_12856" /* 12856 */;
import createCustomError from "createCustomError" /* 12857 */;
import _mod12858 from "module_12858" /* 12858 */;
import _mod12859 from "module_12859" /* 12859 */;
import _mod12862 from "module_12862" /* 12862 */;
import _mod12863 from "module_12863" /* 12863 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import parse_mod from "parse" /* 12849 */;

const require = globalThis.__r;
let _require;

function dumpMapSyntax(descriptors, compact, arg2) {
  const obj = {};
  for (const key10007 in descriptors) {
    if (!descriptors[key10007].syntax) {
      continue;
    } else {
      let syntax;
      if (arg2) {
        syntax = descriptors[key10007].syntax;
      } else {
        let obj2 = { compact };
        syntax = _mod12853(descriptors[key10007].syntax, obj2);
      }
      obj[key10007] = syntax;
      continue;
    }
    continue;
  }
  return obj;
}
function dumpAtruleMapSyntax(atrules, compact, arg2) {
  let descriptors;
  let first;
  let tmp7;
  const obj = {};
  const entries = Object.entries(atrules);
  const tmp2 = entries[Symbol.iterator]();
  while (tmp2 !== undefined) {
    [first, tmp7] = tmp3;
    let tmp8 = tmp7;
    let prelude = tmp7.prelude;
    if (prelude) {
      let syntax;
      if (arg2) {
        syntax = tmp8.prelude.syntax;
      } else {
        let obj2 = { compact };
        syntax = _mod12853(tmp8.prelude.syntax, obj2);
      }
      prelude = syntax;
    }
    let obj3 = { prelude, descriptors };
    descriptors = tmp8.descriptors;
    if (descriptors) {
      descriptors = dumpMapSyntax(tmp8.descriptors, compact, arg2);
    }
    obj[first] = obj3;
    continue;
  }
  return obj;
}
function matchSyntax(self, descriptor, value, arg3) {
  let obj2;
  const arr = _mod12855(value, self.syntax);
  let num = 0;
  let flag = false;
  if (0 < arr.length) {
    flag = true;
    const str = arr[num].value;
    while ("var(" !== str.toLowerCase()) {
      let sum = num + 1;
      num = sum;
      flag = false;
      if (sum >= arr.length) {
        break;
      }
    }
  }
  if (flag) {
    const _Error = Error;
    const self3 = this;
    const self4 = this;
    const error = new Error("Matching for a tree with var() is not supported");
    obj2 = { matched: null, iterations: "Boolean", error, getTrace: _mod12854.getTrace, isType: _mod12854.isType, isProperty: _mod12854.isProperty, isKeyword: _mod12854.isKeyword };
    const obj = { matched: null, iterations: "Boolean", error, getTrace: _mod12854.getTrace, isType: _mod12854.isType, isProperty: _mod12854.isProperty, isKeyword: _mod12854.isKeyword };
  } else {
    let matchAsTreeResult;
    if (arg3) {
      const tmpResult = _mod12856;
      matchAsTreeResult = tmpResult.matchAsTree(arr, self.valueCommonSyntax, self);
    }
    if (!arg3) {
      const tmpResult2 = _mod12856;
      const str2 = tmpResult2.matchAsTree(arr, descriptor.match, self);
      matchAsTreeResult = str2;
      if (!str2.match) {
        self = this;
        const self2 = this;
        const syntaxMatchError = new tmp(12857).SyntaxMatchError(str2.reason, descriptor.syntax, value, str2);
        obj2 = { matched: null, iterations: str2.iterations, error: syntaxMatchError, getTrace: _mod12854.getTrace, isType: _mod12854.isType, isProperty: _mod12854.isProperty, isKeyword: _mod12854.isKeyword };
      }
    }
    ({ match: obj4.matched, iterations: obj4.iterations } = matchAsTreeResult);
    obj2 = { matched: null, iterations: null, error: null, getTrace: _mod12854.getTrace, isType: _mod12854.isType, isProperty: _mod12854.isProperty, isKeyword: _mod12854.isKeyword };
    const obj3 = { matched: null, iterations: null, error: null, getTrace: _mod12854.getTrace, isType: _mod12854.isType, isProperty: _mod12854.isProperty, isKeyword: _mod12854.isKeyword };
  }
  return obj2;
}
let parse = parse_mod;
const _false = parse.buildMatchGraph("inherit | initial | unset");
parse = parse_mod;
const valueCommonSyntax2 = parse.buildMatchGraph("inherit | initial | unset | <-ms-legacy-expression>");
class Lexer {
  constructor(types, syntax, arg2) {
    let structureFromConfig;
    const obj = { valueCommonSyntax, syntax, generic: false, atrules: {}, properties: {}, types: {}, structure: structureFromConfig };
    structureFromConfig = arg2;
    if (!structureFromConfig) {
      const obj2 = _mod12858;
      structureFromConfig = obj2.getStructureFromConfig(types);
    }
    if (types) {
      if (types.types) {
        for (const key10020 in types.types) {
          let addType_Result = obj.addType_(key10020, types.types[key10020]);
          continue;
        }
      }
      if (types.generic) {
        obj.generic = true;
        for (const key10029 in _mod12859) {
          let addType_Result1 = obj.addType_(key10029, _mod12859[key10029]);
          continue;
        }
      }
      if (types.atrules) {
        for (const key10033 in types.atrules) {
          let addAtrule_Result = obj.addAtrule_(key10033, types.atrules[key10033]);
          continue;
        }
      }
      if (types.properties) {
        for (const key10037 in types.properties) {
          let addProperty_Result = obj.addProperty_(key10037, types.properties[key10037]);
          continue;
        }
      }
    }
  }
}
Lexer.prototype = {
  structure: {},
  checkStructure(arg0) {
    function collectWarning(node, message) {
      const obj = { node, message };
      items.push(obj);
    }
    const structure = this.structure;
    const items = [];
    const syntax = this.syntax;
    syntax.walk(arg0, (type) => {
      type = type.type;
      const tmp = structure;
      if (structure.hasOwnProperty(type.type)) {
        const obj2 = tmp[type];
        obj2.check(type, collectWarning);
      } else {
        const obj = { node: type, message: `Unknown node type \`${type}\`` };
        items.push(obj);
      }
    });
    return items.length && items;
  },
  createDescriptor(prelude, Type, anonymous, arg3) {
    _require = prelude;
    let tmp = arg3;
    if (arg3 === undefined) {
      tmp = null;
    }
    let obj = { type: Type, name: anonymous };
    let obj2 = { type: Type, name: anonymous, parent: tmp, syntax: null, match: null };
    if (typeof prelude === "function") {
      const obj5 = require("parse");
      obj2.match = obj5.buildMatchGraph(prelude, obj);
    } else {
      if (typeof prelude === "string") {
        const _Object = Object;
        const obj3 = {
          get() {
                obj = { value: require("parse")(prelude) };
                Object.defineProperty(obj2, "syntax", obj);
                return obj2.syntax;
              }
        };
        Object.defineProperty(obj2, "syntax", obj3);
      } else {
        obj2.syntax = prelude;
      }
      const _Object2 = Object;
      const obj4 = {
        get() {
            obj = { value: obj2.buildMatchGraph(obj2.syntax, obj) };
            obj2 = require("parse");
            defineProperty(obj2, "match", obj);
            return obj2.match;
          }
      };
      Object.defineProperty(obj2, "match", obj4);
    }
    return obj2;
  },
  addAtrule_(key10033, prelude) {
    let descriptor;
    let reduced;
    const self = this;
    let closure_1 = key10033;
    if (prelude) {
      const obj = { type: "Atrule", name: key10033, prelude: descriptor, descriptors: reduced };
      descriptor = null;
      const atrules = self.atrules;
      if (prelude.prelude) {
        descriptor = self.createDescriptor(prelude.prelude, "AtrulePrelude", key10033);
      }
      reduced = null;
      if (prelude.descriptors) {
        const _Object = Object;
        const keys = Object.keys(prelude.descriptors);
        reduced = keys.reduce((acc, item) => {
          acc[item] = self.createDescriptor(prelude.descriptors[item], "AtruleDescriptor", item, key10033);
          return acc;
        }, {});
      }
      atrules[key10033] = obj;
    }
  },
  addProperty_(key10037, prelude) {
    const tmp = prelude;
    if (tmp) {
      const self = this;
      this.properties[key10037] = this.createDescriptor(prelude, "Property", key10037);
    }
  },
  addType_(key10020, prelude) {
    const tmp = prelude;
    if (tmp) {
      const self = this;
      this.types[key10020] = this.createDescriptor(prelude, "Type", key10020);
      if (prelude === _mod12859["-ms-legacy-expression"]) {
        self.valueCommonSyntax = valueCommonSyntax2;
      }
    }
  },
  checkAtruleName(color) {
    if (!this.getAtrule(color)) {
      const self = this;
      const self2 = this;
      const syntaxReferenceError = new createCustomError.SyntaxReferenceError("Unknown at-rule", "@" + color);
      return syntaxReferenceError;
    }
  },
  checkAtrulePrelude(color, value) {
    const self = this;
    const checkAtruleNameResult = this.checkAtruleName(color);
    if (checkAtruleNameResult) {
      return checkAtruleNameResult;
    } else {
      const atrule = self.getAtrule(color);
      if (!atrule.prelude) {
        let syntaxError;
        if (value) {
          const _SyntaxError = SyntaxError;
          const self2 = this;
          const self3 = this;
          syntaxError = new SyntaxError("At-rule `@" + color + "` should not contain a prelude");
        }
        return syntaxError;
      }
      let syntaxError1;
      if (atrule.prelude) {
        if (!value) {
          const _SyntaxError2 = SyntaxError;
          const self4 = this;
          const self5 = this;
          syntaxError1 = new SyntaxError("At-rule `@" + color + "` should contain a prelude");
        }
      }
      syntaxError = syntaxError1;
    }
  },
  checkAtruleDescriptorName(color, color2) {
    const self = this;
    const checkAtruleNameResult = this.checkAtruleName(color);
    if (checkAtruleNameResult) {
      return checkAtruleNameResult;
    } else {
      let syntaxError;
      const atrule = self.getAtrule(color);
      const obj = _mod12862;
      const keywordResult = obj.keyword(color);
      const tmp4 = require;
      if (atrule.descriptors) {
        let syntaxReferenceError;
        if (!atrule.descriptors[keywordResult.name]) {
          if (!atrule.descriptors[keywordResult.basename]) {
            const self4 = this;
            const self5 = this;
            syntaxReferenceError = new tmp4(12857).SyntaxReferenceError("Unknown at-rule descriptor", color);
          }
        }
        syntaxError = syntaxReferenceError;
      } else {
        const _SyntaxError = SyntaxError;
        const self2 = this;
        const self3 = this;
        syntaxError = new SyntaxError("At-rule `@" + color + "` has no known descriptors");
      }
      return syntaxError;
    }
  },
  checkPropertyName(property) {
    let error;
    const obj = _mod12862;
    if (obj.property(property).custom) {
      const _Error = Error;
      const self4 = this;
      const self5 = this;
      error = new Error("Lexer matching doesn't applicable for custom properties");
    } else {
      const self = this;
      if (!this.getProperty(property)) {
        const self2 = this;
        const self3 = this;
        error = new createCustomError.SyntaxReferenceError("Unknown property", property);
      }
    }
    return error;
  },
  matchAtrulePrelude(color, value) {
    let obj;
    const self = this;
    const checkAtrulePreludeResult = this.checkAtrulePrelude(color, value);
    if (checkAtrulePreludeResult) {
      obj = { matched: null, iterations: "Boolean", error: checkAtrulePreludeResult, getTrace: _mod12854.getTrace, isType: _mod12854.isType, isProperty: _mod12854.isProperty, isKeyword: _mod12854.isKeyword };
      const obj2 = { matched: null, iterations: "Boolean", error: checkAtrulePreludeResult, getTrace: _mod12854.getTrace, isType: _mod12854.isType, isProperty: _mod12854.isProperty, isKeyword: _mod12854.isKeyword };
    } else if (value) {
      obj = matchSyntax(self, self.getAtrule(color).prelude, value, false);
    } else {
      obj = { matched: null, iterations: "Boolean", error: true, getTrace: _mod12854.getTrace, isType: _mod12854.isType, isProperty: _mod12854.isProperty, isKeyword: _mod12854.isKeyword };
    }
    return obj;
  },
  matchAtruleDescriptor(color, color2, arg2) {
    const self = this;
    const result = this.checkAtruleDescriptorName(color, color);
    if (result) {
      const obj2 = { matched: null, iterations: "Boolean", error: result, getTrace: _mod12854.getTrace, isType: _mod12854.isType, isProperty: _mod12854.isProperty, isKeyword: _mod12854.isKeyword };
      return obj2;
    } else {
      const atrule = self.getAtrule(color);
      const obj = _mod12862;
      const keywordResult = obj.keyword(color);
      let tmp7 = atrule.descriptors[keywordResult.name];
      const tmp6 = matchSyntax;
      if (!tmp7) {
        tmp7 = atrule.descriptors[keywordResult.basename];
      }
      return tmp6(self, tmp7, arg2, false);
    }
  },
  matchDeclaration(type) {
    let matchPropertyResult;
    if ("Declaration" !== type.type) {
      const _Error = Error;
      const self2 = this;
      const self3 = this;
      const error = new Error("Not a Declaration node");
      matchPropertyResult = { matched: null, iterations: "Boolean", error, getTrace: _mod12854.getTrace, isType: _mod12854.isType, isProperty: _mod12854.isProperty, isKeyword: _mod12854.isKeyword };
      const obj = { matched: null, iterations: "Boolean", error, getTrace: _mod12854.getTrace, isType: _mod12854.isType, isProperty: _mod12854.isProperty, isKeyword: _mod12854.isKeyword };
    } else {
      const self = this;
      matchPropertyResult = this.matchProperty(type.property, type.value);
    }
    return matchPropertyResult;
  },
  matchProperty(property, value) {
    let tmp5;
    const self = this;
    const checkPropertyNameResult = this.checkPropertyName(property);
    if (checkPropertyNameResult) {
      tmp5 = { matched: null, iterations: "Boolean", error: checkPropertyNameResult, getTrace: _mod12854.getTrace, isType: _mod12854.isType, isProperty: _mod12854.isProperty, isKeyword: _mod12854.isKeyword };
      const obj = { matched: null, iterations: "Boolean", error: checkPropertyNameResult, getTrace: _mod12854.getTrace, isType: _mod12854.isType, isProperty: _mod12854.isProperty, isKeyword: _mod12854.isKeyword };
    } else {
      tmp5 = matchSyntax(self, self.getProperty(property), value, true);
    }
    return tmp5;
  },
  matchType(reference, value) {
    let obj;
    const self = this;
    const type = this.getType(reference);
    if (type) {
      obj = matchSyntax(self, type, value, false);
    } else {
      const self2 = this;
      const self3 = this;
      const syntaxReferenceError = new createCustomError.SyntaxReferenceError("Unknown type", reference);
      obj = { matched: null, iterations: "Boolean", error: syntaxReferenceError, getTrace: _mod12854.getTrace, isType: _mod12854.isType, isProperty: _mod12854.isProperty, isKeyword: _mod12854.isKeyword };
    }
    return obj;
  },
  match(type, value) {
    let obj;
    if (typeof type === "string") {
      let match = typeof type !== "string";
      if (typeof type !== "string") {
        match = type.match;
      }
      const self3 = this;
      let descriptor = type;
      if (!match) {
        descriptor = self3.createDescriptor(type, "Type", "anonymous");
      }
      obj = matchSyntax(self3, descriptor, value, false);
    } else {
      const self = this;
      const self2 = this;
      const syntaxReferenceError = new createCustomError.SyntaxReferenceError("Bad syntax");
      obj = { matched: null, iterations: "Boolean", error: syntaxReferenceError, getTrace: _mod12854.getTrace, isType: _mod12854.isType, isProperty: _mod12854.isProperty, isKeyword: _mod12854.isKeyword };
    }
    return obj;
  },
  findValueFragments(property, value, arg2, arg3) {
    const obj = _mod12863;
    return obj.matchFragments(this, value, this.matchProperty(property, value), arg2, arg3);
  },
  findDeclarationValueFragments(value, arg1, arg2) {
    const obj = _mod12863;
    return obj.matchFragments(this, value.value, this.matchDeclaration(value), arg1, arg2);
  },
  findAllFragments(arg0, arg1, arg2) {
    let fn;
    let closure_0 = arg1;
    let closure_1 = arg2;
    const items = [];
    const syntax = this.syntax;
    const obj = { visit: "Declaration", enter: fn.bind(this) };
    fn = function(value) {
      const push = items.push;
      push.apply(items, this.findDeclarationValueFragments(value, closure_0, closure_1));
    };
    const walk = syntax.walk;
    walk(arg0, obj);
    return items;
  },
  getAtrule(color, flag) {
    if (flag === undefined) {
      flag = true;
    }
    const self = this;
    const obj = _mod12862;
    const keywordResult = obj.keyword(color);
    if (keywordResult.vendor) {
      let tmp2;
      if (flag) {
        tmp2 = self.atrules[keywordResult.name] || self.atrules[keywordResult.basename];
      }
      if (!tmp2) {
        tmp2 = null;
      }
      return tmp2;
    }
    tmp2 = self.atrules[keywordResult.name];
  },
  getAtrulePrelude(color, flag) {
    if (flag === undefined) {
      flag = true;
    }
    const atrule = this.getAtrule(color, flag);
    return atrule && atrule.prelude || null;
  },
  getAtruleDescriptor(keys, arg1) {
    const self = this;
    const atrules = this.atrules;
    const tmp = atrules.hasOwnProperty(keys) && self.atrules.declarators && self.atrules[keys].declarators[arg1] || null;
    return tmp;
  },
  getProperty(property) {
    let flag = arg1;
    if (arg1 === undefined) {
      flag = true;
    }
    const self = this;
    const obj = _mod12862;
    const propertyResult = obj.property(property);
    if (propertyResult.vendor) {
      let tmp2;
      if (flag) {
        tmp2 = self.properties[propertyResult.name] || self.properties[propertyResult.basename];
      }
      if (!tmp2) {
        tmp2 = null;
      }
      return tmp2;
    }
    tmp2 = self.properties[propertyResult.name];
  },
  getType(keys) {
    const types = this.types;
    let tmp = null;
    if (types.hasOwnProperty(keys)) {
      tmp = this.types[keys];
    }
    return tmp;
  },
  validate() {
    let tmp9;
    const f127677 = (type) => {
      if ("Type" === type.type) {
        let properties;
        let tmp;
        if ("Type" === type.type) {
          properties = found.types;
          tmp = found;
        } else {
          tmp = found;
          properties = found.properties;
        }
        const obj = "Type" === type.type ? require : dependencyMap;
        let hasOwnPropertyResult = properties.hasOwnProperty(type.name);
        if (hasOwnPropertyResult) {
          let tmp6;
          const name = type.name;
          let closure_0 = tmp;
          if (obj.hasOwnProperty(name)) {
            tmp6 = obj[name];
          } else {
            obj[name] = false;
            if (null !== properties[type.name].syntax) {
              found(found1[12])(properties[type.name].syntax, f127677, globalThis);
            }
          }
          hasOwnPropertyResult = !tmp6;
        }
        if (!hasOwnPropertyResult) {
          _slicedToArray[found1] = true;
        }
      }
    };
    const self = this;
    let obj = {};
    let found = obj;
    const obj2 = {};
    let found1 = obj2;
    for (const key10009 in this.types) {
      let tmp11 = self.types[key10009];
      if (obj.hasOwnProperty(key10009)) {
        continue;
      } else {
        obj[key10009] = false;
        if (null === tmp11.syntax) {
          continue;
        } else {
          let tmp = found;
          let tmp3 = found(found1[12])(tmp11.syntax, f127677, globalThis);
          continue;
        }
        continue;
      }
      continue;
    }
    for (const key10021 in self.properties) {
      let tmp13 = self.properties[key10021];
      if (obj2.hasOwnProperty(key10021)) {
        continue;
      } else {
        obj2[key10021] = false;
        if (null === tmp13.syntax) {
          continue;
        } else {
          let tmp6 = found1;
          let tmp7 = found(found1[12])(tmp13.syntax, f127677, globalThis);
          continue;
        }
        continue;
      }
      continue;
    }
    const keys = Object.keys(obj);
    found = keys.filter((item) => found[item]);
    const keys1 = Object.keys(obj2);
    found1 = keys1.filter((item) => found1[item]);
    if (found.length) {
      tmp9 = { types: found, properties: found1 };
      const obj3 = { types: found, properties: found1 };
    } else {
      tmp9 = null;
    }
    return tmp9;
  },
  dump(arg0, arg1) {
    let obj2;
    let obj4;
    const self = this;
    const types = this.types;
    const obj = { generic: this.generic, types: obj2, properties: obj4, atrules: dumpAtruleMapSyntax(self.atrules, !arg1, arg0) };
    obj2 = {};
    for (const key10011 in types) {
      if (!types[key10011].syntax) {
        continue;
      } else {
        let syntax;
        if (arg0) {
          syntax = types[key10011].syntax;
        } else {
          let obj3 = { compact: tmp };
          syntax = _mod12853(types[key10011].syntax, obj3);
        }
        obj2[key10011] = syntax;
        continue;
      }
      continue;
    }
    const properties = self.properties;
    obj4 = {};
    for (const key10026 in properties) {
      if (!properties[key10026].syntax) {
        continue;
      } else {
        let syntax2;
        if (arg0) {
          syntax2 = properties[key10026].syntax;
        } else {
          let obj5 = { compact: tmp4 };
          syntax2 = _mod12853(properties[key10026].syntax, obj5);
        }
        obj4[key10026] = syntax2;
        continue;
      }
      continue;
    }
    return obj;
  },
  toString() {
    return JSON.stringify(this.dump());
  }
};

export default Lexer;
