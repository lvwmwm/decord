// Module ID: 12098
// Function ID: 94338
// Name: stringProcessor
// Dependencies: [77, 57, 65, 12039, 12097]
// Exports: anyProcessor, arrayProcessor, bigintProcessor, booleanProcessor, catchProcessor, customProcessor, dateProcessor, defaultProcessor, enumProcessor, fileProcessor, functionProcessor, intersectionProcessor, lazyProcessor, literalProcessor, mapProcessor, nanProcessor, neverProcessor, nonoptionalProcessor, nullProcessor, nullableProcessor, numberProcessor, objectProcessor, optionalProcessor, pipeProcessor, prefaultProcessor, promiseProcessor, readonlyProcessor, recordProcessor, setProcessor, stringProcessor, successProcessor, symbolProcessor, templateLiteralProcessor, toJSONSchema, transformProcessor, tupleProcessor, undefinedProcessor, unionProcessor, unknownProcessor, voidProcessor

// Module 12098 (stringProcessor)
import _defineProperty from "_defineProperty";
import _slicedToArray from "_slicedToArray";
import _toConsumableArray from "_toConsumableArray";

let closure_6 = { guid: "uuid", url: "uri", datetime: "date-time", json_string: "json-string", regex: "" };

export const toJSONSchema = function toJSONSchema(_idmap, uri) {
  let obj = { processors: exports.allProcessors };
  const initializeContextResult = require(12097) /* initializeContext */.initializeContext(Object.assign({}, uri, obj));
  if (tmp) {
    obj = {};
    _idmap = _idmap._idmap;
    const entries = _idmap.entries();
    const tmp10 = entries[Symbol.iterator]();
    while (tmp10 !== undefined) {
      let tmp13 = _slicedToArray;
      let tmp14 = _slicedToArray(tmp11, 2);
      let first = tmp14[0];
      let tmp16 = require;
      let tmp17 = dependencyMap;
      let tmp18 = initializeContextResult;
      let processResult = require(12097) /* initializeContext */.process(tmp14[1], tmp7);
      continue;
    }
    obj = {};
    const obj1 = { registry: _idmap };
    uri = undefined;
    if (null != uri) {
      uri = uri.uri;
    }
    obj1.uri = uri;
    obj1.defs = obj;
    initializeContextResult.external = obj1;
    const _idmap2 = _idmap._idmap;
    const entries1 = _idmap2.entries();
    for (const item10069 of entries1) {
      let tmp25 = _slicedToArray;
      let tmp26 = _slicedToArray(item10069, 2);
      let tmp27 = tmp26[1];
      let tmp28 = require;
      let tmp29 = dependencyMap;
      let tmp30 = initializeContextResult;
      let extractDefsResult = require(12097) /* initializeContext */.extractDefs(tmp7, tmp27);
      let tmp32 = obj;
      obj[tmp26[0]] = require(12097) /* initializeContext */.finalize(tmp7, tmp27);
      continue;
    }
    const _Object = Object;
    if (Object.keys(obj).length > 0) {
      let str = "definitions";
      if ("draft-2020-12" === initializeContextResult.target) {
        str = "$defs";
      }
      obj.__shared = _defineProperty({}, str, obj);
    }
    const obj2 = { schemas: obj };
    return obj2;
  } else {
    tmp2(12097).process(_idmap, initializeContextResult);
    tmp2(12097).extractDefs(initializeContextResult, _idmap);
    return tmp2(12097).finalize(initializeContextResult, _idmap);
  }
  tmp = "_idmap" in _idmap;
};
export const stringProcessor = function stringProcessor(closure_0, arg1, format, arg3) {
  let contentEncoding;
  let maximum;
  let minimum;
  let patterns;
  closure_0 = arg1;
  format.type = "string";
  ({ minimum, maximum, format, patterns, contentEncoding } = closure_0._zod.bag);
  if ("number" === typeof minimum) {
    format.minLength = minimum;
  }
  if ("number" === typeof maximum) {
    format.maxLength = maximum;
  }
  if (format) {
    let tmp5 = format;
    if (null != table[format]) {
      tmp5 = tmp3;
    }
    format.format = tmp5;
    if ("" === format.format) {
      delete tmp.format;
    }
    if ("time" === format) {
      delete tmp.format;
    }
  }
  if (contentEncoding) {
    format.contentEncoding = contentEncoding;
  }
  if (patterns) {
    if (patterns.size > 0) {
      const arr = _toConsumableArray(patterns);
      if (1 === arr.length) {
        format.pattern = arr[0].source;
      } else if (arr.length > 1) {
        format.allOf = _toConsumableArray(arr.map((source) => {
          if ("draft-07" !== closure_0.target) {
            if ("draft-04" !== closure_0.target) {
              if ("openapi-3.0" !== closure_0.target) {
                let obj = {};
              }
              obj = { pattern: source.source };
              return tmp2({}, { type: "string" }, obj);
            }
          }
        }));
      }
    }
  }
};
export const numberProcessor = function numberProcessor(closure_0, target, arg2, arg3) {
  let exclusiveMaximum;
  let exclusiveMinimum;
  let format;
  let maximum;
  let minimum;
  let multipleOf;
  ({ minimum, maximum, format, multipleOf, exclusiveMaximum, exclusiveMinimum } = closure_0._zod.bag);
  if ("string" === typeof format) {
    if (format.includes("int")) {
      arg2.type = "integer";
    }
    let tmp2 = "number" === typeof exclusiveMinimum;
    if (tmp2) {
      if ("draft-04" !== target.target) {
        if ("openapi-3.0" !== target.target) {
          arg2.exclusiveMinimum = exclusiveMinimum;
        }
      }
      arg2.minimum = exclusiveMinimum;
      arg2.exclusiveMinimum = true;
    }
    if ("number" === typeof minimum) {
      arg2.minimum = minimum;
      if (tmp2) {
        tmp2 = "draft-04" !== target.target;
      }
      if (tmp2) {
        if (exclusiveMinimum >= minimum) {
          delete tmp.minimum;
        } else {
          delete tmp.exclusiveMinimum;
        }
      }
    }
    let tmp3 = "number" === typeof exclusiveMaximum;
    if (tmp3) {
      if ("draft-04" !== target.target) {
        if ("openapi-3.0" !== target.target) {
          arg2.exclusiveMaximum = exclusiveMaximum;
        }
      }
      arg2.maximum = exclusiveMaximum;
      arg2.exclusiveMaximum = true;
    }
    if ("number" === typeof maximum) {
      arg2.maximum = maximum;
      if (tmp3) {
        tmp3 = "draft-04" !== target.target;
      }
      if (tmp3) {
        if (exclusiveMaximum <= maximum) {
          delete tmp.maximum;
        } else {
          delete tmp.exclusiveMaximum;
        }
      }
    }
    if ("number" === typeof multipleOf) {
      arg2.multipleOf = multipleOf;
    }
  }
  arg2.type = "number";
};
export const booleanProcessor = function booleanProcessor(closure_0, arg1, arg2, arg3) {
  arg2.type = "boolean";
};
export const bigintProcessor = function bigintProcessor(closure_0, unrepresentable, arg2, arg3) {
  if ("throw" === unrepresentable.unrepresentable) {
    const _Error = Error;
    const error = new Error("BigInt cannot be represented in JSON Schema");
    throw error;
  }
};
export const symbolProcessor = function symbolProcessor(closure_0, unrepresentable, arg2, arg3) {
  if ("throw" === unrepresentable.unrepresentable) {
    const _Error = Error;
    const error = new Error("Symbols cannot be represented in JSON Schema");
    throw error;
  }
};
export const nullProcessor = function nullProcessor(closure_0, target, arg2, arg3) {
  if ("openapi-3.0" === target.target) {
    arg2.type = "string";
    arg2.nullable = true;
    arg2.enum = [null];
  } else {
    arg2.type = "null";
  }
};
export const undefinedProcessor = function undefinedProcessor(closure_0, unrepresentable, arg2, arg3) {
  if ("throw" === unrepresentable.unrepresentable) {
    const _Error = Error;
    const error = new Error("Undefined cannot be represented in JSON Schema");
    throw error;
  }
};
export const voidProcessor = function voidProcessor(closure_0, unrepresentable, arg2, arg3) {
  if ("throw" === unrepresentable.unrepresentable) {
    const _Error = Error;
    const error = new Error("Void cannot be represented in JSON Schema");
    throw error;
  }
};
export const neverProcessor = function neverProcessor(closure_0, arg1, arg2, arg3) {
  arg2.not = {};
};
export function anyProcessor(closure_0, arg1, arg2, arg3) {

}
export function unknownProcessor(closure_0, arg1, arg2, arg3) {

}
export const dateProcessor = function dateProcessor(closure_0, unrepresentable, arg2, arg3) {
  if ("throw" === unrepresentable.unrepresentable) {
    const _Error = Error;
    const error = new Error("Date cannot be represented in JSON Schema");
    throw error;
  }
};
export const enumProcessor = function enumProcessor(closure_0, arg1, arg2, arg3) {
  const enumValues = require(12039) /* cached */.getEnumValues(closure_0._zod.def.entries);
  if (enumValues.every((arg0) => "number" === typeof arg0)) {
    arg2.type = "number";
  }
  if (enumValues.every((arg0) => "string" === typeof arg0)) {
    arg2.type = "string";
  }
  arg2.enum = enumValues;
};
export const literalProcessor = function literalProcessor(closure_0, unrepresentable, arg2, arg3) {
  const items = [];
  const iter = closure_0._zod.def.values[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp26 = nextResult;
    if (undefined === nextResult) {
      let tmp14 = unrepresentable;
      if ("throw" === unrepresentable.unrepresentable) {
        let _Error2 = Error;
        let tmp15 = new.target;
        let str2 = "Literal `undefined` cannot be represented in JSON Schema";
        let tmp16 = new.target;
        let error = new Error("Literal `undefined` cannot be represented in JSON Schema");
        let tmp18 = error;
        throw error;
      }
    } else {
      let tmp2 = nextResult;
      if ("bigint" === typeof tmp26) {
        let tmp6 = unrepresentable;
        if ("throw" === unrepresentable.unrepresentable) {
          let _Error = Error;
          let tmp10 = new.target;
          let str = "BigInt literals cannot be represented in JSON Schema";
          let tmp11 = new.target;
          let error1 = new Error("BigInt literals cannot be represented in JSON Schema");
          let tmp13 = error1;
          throw error1;
        } else {
          let tmp7 = items;
          let _Number = Number;
          let tmp8 = nextResult;
          let arr = items.push(Number(tmp26));
        }
      } else {
        let tmp3 = items;
        let tmp4 = nextResult;
        arr = items.push(tmp26);
      }
    }
    continue;
  }
  if (0 !== items.length) {
    if (1 === items.length) {
      const first = items[0];
      let str7 = "null";
      if (null !== first) {
        str7 = typeof first;
      }
      arg2.type = str7;
      if ("draft-04" !== unrepresentable.target) {
        if ("openapi-3.0" !== unrepresentable.target) {
          arg2.const = first;
        }
      }
      const items1 = [first];
      arg2.enum = items1;
    } else {
      if (items.every((arg0) => "number" === typeof arg0)) {
        arg2.type = "number";
      }
      if (items.every((arg0) => "string" === typeof arg0)) {
        arg2.type = "string";
      }
      if (items.every((arg0) => "boolean" === typeof arg0)) {
        arg2.type = "boolean";
      }
      if (items.every((arg0) => null === arg0)) {
        arg2.type = "null";
      }
      arg2.enum = items;
    }
  }
};
export const nanProcessor = function nanProcessor(closure_0, unrepresentable, arg2, arg3) {
  if ("throw" === unrepresentable.unrepresentable) {
    const _Error = Error;
    const error = new Error("NaN cannot be represented in JSON Schema");
    throw error;
  }
};
export const templateLiteralProcessor = function templateLiteralProcessor(closure_0, arg1, arg2, arg3) {
  const pattern = closure_0._zod.pattern;
  if (pattern) {
    arg2.type = "string";
    arg2.pattern = pattern.source;
  } else {
    const _Error = Error;
    const error = new Error("Pattern not found in template literal");
    throw error;
  }
};
export const fileProcessor = function fileProcessor(closure_0, arg1, arg2, arg3) {
  let maximum;
  let mime;
  let minimum;
  const obj = { type: "string", format: "binary", contentEncoding: "binary" };
  ({ minimum, maximum, mime } = closure_0._zod.bag);
  if (undefined !== minimum) {
    obj.minLength = minimum;
  }
  if (undefined !== maximum) {
    obj.maxLength = maximum;
  }
  if (mime) {
    if (1 === mime.length) {
      obj.contentMediaType = mime[0];
      const _Object3 = Object;
      const merged = Object.assign(arg2, obj);
    } else {
      const _Object2 = Object;
      const merged1 = Object.assign(arg2, obj);
      arg2.anyOf = mime.map((contentMediaType) => ({ contentMediaType }));
    }
  } else {
    const _Object = Object;
    const merged2 = Object.assign(arg2, obj);
  }
};
export const successProcessor = function successProcessor(closure_0, arg1, arg2, arg3) {
  arg2.type = "boolean";
};
export const customProcessor = function customProcessor(closure_0, unrepresentable, arg2, arg3) {
  if ("throw" === unrepresentable.unrepresentable) {
    const _Error = Error;
    const error = new Error("Custom types cannot be represented in JSON Schema");
    throw error;
  }
};
export const functionProcessor = function functionProcessor(closure_0, unrepresentable, arg2, arg3) {
  if ("throw" === unrepresentable.unrepresentable) {
    const _Error = Error;
    const error = new Error("Function types cannot be represented in JSON Schema");
    throw error;
  }
};
export const transformProcessor = function transformProcessor(closure_0, unrepresentable, arg2, arg3) {
  if ("throw" === unrepresentable.unrepresentable) {
    const _Error = Error;
    const error = new Error("Transforms cannot be represented in JSON Schema");
    throw error;
  }
};
export const mapProcessor = function mapProcessor(closure_0, unrepresentable, arg2, arg3) {
  if ("throw" === unrepresentable.unrepresentable) {
    const _Error = Error;
    const error = new Error("Map cannot be represented in JSON Schema");
    throw error;
  }
};
export const setProcessor = function setProcessor(closure_0, unrepresentable, arg2, arg3) {
  if ("throw" === unrepresentable.unrepresentable) {
    const _Error = Error;
    const error = new Error("Set cannot be represented in JSON Schema");
    throw error;
  }
};
export const arrayProcessor = function arrayProcessor(closure_0, arg1, arg2, path) {
  let maximum;
  let minimum;
  ({ minimum, maximum } = closure_0._zod.bag);
  if ("number" === typeof minimum) {
    arg2.minItems = minimum;
  }
  if ("number" === typeof maximum) {
    arg2.maxItems = maximum;
  }
  arg2.type = "array";
  const obj = {};
  const items = [];
  obj.path = items.concat(_toConsumableArray(path.path), ["items"]);
  arg2.items = require(12097) /* initializeContext */.process(closure_0._zod.def.element, arg1, Object.assign({}, path, obj));
};
export const objectProcessor = function objectProcessor(closure_0, io, properties, path) {
  const _require = io;
  const def = closure_0._zod.def;
  properties.type = "object";
  properties.properties = {};
  const shape = def.shape;
  for (const key10014 in shape) {
    let tmp7 = key10014;
    let tmp8 = _require;
    let tmp9 = dependencyMap;
    let _Object2 = Object;
    let obj = {};
    let items = [];
    let tmp10 = _toConsumableArray;
    let items1 = ["properties", key10014];
    obj.path = items.concat(_toConsumableArray(arg3.path), items1);
    arg2.properties[key10014] = _require(12097).process(shape[key10014], arg1, Object.assign({}, arg3, obj));
    continue;
  }
  const set = new Set(Object.keys(shape));
  const set1 = new Set(_toConsumableArray(new Set(Object.keys(shape))).filter((arg0) => {
    const _zod = def.shape[arg0]._zod;
    if ("input" === io.io) {
      let tmp = undefined === _zod.optin;
    } else {
      tmp = undefined === _zod.optout;
    }
    return tmp;
  }));
  if (set1.size > 0) {
    const _Array = Array;
    properties.required = Array.from(set1);
  }
  const catchall = def.catchall;
  let type;
  if (null != catchall) {
    type = catchall._zod.def.type;
  }
  if ("never" === type) {
    properties.additionalProperties = false;
  } else if (def.catchall) {
    if (def.catchall) {
      const _Object = Object;
      obj = {};
      const items2 = [];
      obj.path = items2.concat(_toConsumableArray(path.path), ["additionalProperties"]);
      properties.additionalProperties = _require(12097).process(def.catchall, io, Object.assign({}, path, obj));
    }
  } else if ("output" === io.io) {
    properties.additionalProperties = false;
  }
};
export const unionProcessor = function unionProcessor(closure_0, arg1, arg2, arg3) {
  closure_0 = arg1;
  let closure_1 = arg3;
  const def = closure_0._zod.def;
  const dependencyMap = tmp;
  const options = def.options;
  const mapped = options.map((arg0, arg1) => {
    const obj = {};
    const items = [];
    let str = "anyOf";
    if (callback) {
      str = "oneOf";
    }
    const items1 = [str, arg1];
    obj.path = items.concat(outer1_5(path.path), items1);
    return callback(callback[4]).process(arg0, callback, Object.assign({}, path, obj));
  });
  if (false === def.inclusive) {
    arg2.oneOf = mapped;
  } else {
    arg2.anyOf = mapped;
  }
};
export const intersectionProcessor = function intersectionProcessor(closure_0, arg1, arg2, path) {
  const def = closure_0._zod.def;
  let obj = {};
  const items = [];
  obj.path = items.concat(_toConsumableArray(path.path), ["allOf", 0]);
  const processResult = require(12097) /* initializeContext */.process(def.left, arg1, Object.assign({}, path, obj));
  obj = {};
  const items1 = [];
  obj.path = items1.concat(_toConsumableArray(path.path), ["allOf", 1]);
  const processResult1 = require(12097) /* initializeContext */.process(def.right, arg1, Object.assign({}, path, obj));
  function isSimpleIntersection(processResult) {
    let tmp = "allOf" in processResult;
    if (tmp) {
      const _Object = Object;
      tmp = 1 === Object.keys(processResult).length;
    }
    return tmp;
  }
  const items2 = [];
  if (isSimpleIntersection(processResult)) {
    let allOf = processResult.allOf;
  } else {
    allOf = [processResult];
  }
  if (isSimpleIntersection(processResult1)) {
    let allOf1 = processResult1.allOf;
  } else {
    allOf1 = [processResult1];
  }
  arg2.allOf = items2.concat(_toConsumableArray(allOf), _toConsumableArray(allOf1));
};
export const tupleProcessor = function tupleProcessor(closure_0, target, items, path) {
  let maximum;
  let minimum;
  const _require = target;
  let closure_1 = path;
  let def = closure_0._zod.def;
  items.type = "array";
  let str = "items";
  if ("draft-2020-12" === target.target) {
    str = "prefixItems";
  }
  if ("draft-2020-12" === target.target) {
    let str2 = "items";
  } else {
    str2 = "additionalItems";
  }
  items = def.items;
  const mapped = items.map((arg0, arg1) => {
    const obj = {};
    const items = [];
    const items1 = [str, arg1];
    obj.path = items.concat(outer1_5(path.path), items1);
    return target(str[4]).process(arg0, target, Object.assign({}, path, obj));
  });
  if (!def.rest) {
    if ("draft-2020-12" === target.target) {
      items.prefixItems = mapped;
      if (null) {
        items.items = null;
      }
    } else if ("openapi-3.0" === target.target) {
      let obj = { anyOf: mapped };
      items.items = obj;
      if (null) {
        const anyOf = items.items.anyOf;
        anyOf.push(null);
      }
      items.minItems = mapped.length;
      if (!null) {
        items.maxItems = mapped.length;
      }
    } else {
      items.items = mapped;
      if (null) {
        items.additionalItems = null;
      }
    }
    ({ minimum, maximum } = closure_0._zod.bag);
    if ("number" === typeof minimum) {
      items.minItems = minimum;
    }
    if ("number" === typeof maximum) {
      items.maxItems = maximum;
    }
  } else {
    obj = {};
    let items1 = [];
    const items2 = [str2];
    if ("openapi-3.0" === target.target) {
      def = [];
      def[0] = def.items.length;
      let items3 = def;
    } else {
      items3 = [];
    }
    obj.path = items1.concat(_toConsumableArray(path.path), items2, _toConsumableArray(items3));
    _require(str[4]).process(def.rest, target, Object.assign({}, path, obj));
    const tmp4 = _toConsumableArray;
    const tmp5 = _toConsumableArray(path.path);
  }
};
export const recordProcessor = function recordProcessor(closure_0, target, arg2, path) {
  const def = closure_0._zod.def;
  arg2.type = "object";
  const keyType = def.keyType;
  const bag = keyType._zod.bag;
  if (null != bag) {
    const patterns = bag.patterns;
  }
  if ("loose" === def.mode) {
    if (patterns) {
      if (patterns.size > 0) {
        const _Object2 = Object;
        let obj = {};
        const items = [];
        obj.path = items.concat(_toConsumableArray(path.path), ["patternProperties", "*"]);
        const processResult = require(12097) /* initializeContext */.process(def.valueType, target, Object.assign({}, path, obj));
        tmp.patternProperties = {};
        for (const item10094 of patterns) {
          let tmp15 = arg2;
          let tmp16 = processResult;
          tmp.patternProperties[item10094.source] = processResult;
          continue;
        }
      }
      const values = keyType._zod.values;
      if (values) {
        const found = _toConsumableArray(values).filter((arg0) => {
          let tmp2 = "string" === tmp;
          if (!tmp2) {
            tmp2 = "number" === tmp;
          }
          return tmp2;
        });
        if (found.length > 0) {
          arg2.required = found;
        }
        const arr4 = _toConsumableArray(values);
      }
    }
  }
  let tmp2 = "draft-07" !== target.target;
  if (tmp2) {
    tmp2 = "draft-2020-12" !== target.target;
  }
  if (!tmp2) {
    const _Object = Object;
    obj = {};
    const items1 = [];
    obj.path = items1.concat(_toConsumableArray(path.path), ["propertyNames"]);
    tmp.propertyNames = require(12097) /* initializeContext */.process(def.keyType, target, Object.assign({}, path, obj));
  }
  obj = {};
  const items2 = [];
  obj.path = items2.concat(_toConsumableArray(path.path), ["additionalProperties"]);
  arg2.additionalProperties = require(12097) /* initializeContext */.process(def.valueType, target, Object.assign({}, path, obj));
};
export const nullableProcessor = function nullableProcessor(closure_0, target, arg2, arg3) {
  const def = closure_0._zod.def;
  if ("openapi-3.0" === target.target) {
    tmp2.ref = def.innerType;
    arg2.nullable = true;
  } else {
    const items = [processResult, ];
    const obj = { type: "null" };
    items[1] = obj;
    arg2.anyOf = items;
  }
};
export const nonoptionalProcessor = function nonoptionalProcessor(closure_0, seen, arg2, arg3) {
  const def = closure_0._zod.def;
  require(12097) /* initializeContext */.process(def.innerType, seen, arg3);
  seen = seen.seen;
  seen.get(closure_0).ref = def.innerType;
};
export const defaultProcessor = function defaultProcessor(closure_0, seen, arg2, arg3) {
  const def = closure_0._zod.def;
  require(12097) /* initializeContext */.process(def.innerType, seen, arg3);
  seen = seen.seen;
  seen.get(closure_0).ref = def.innerType;
  arg2.default = JSON.parse(JSON.stringify(def.defaultValue));
};
export const prefaultProcessor = function prefaultProcessor(closure_0, seen, arg2, arg3) {
  const def = closure_0._zod.def;
  require(12097) /* initializeContext */.process(def.innerType, seen, arg3);
  seen = seen.seen;
  seen.get(closure_0).ref = def.innerType;
  if ("input" === seen.io) {
    const _JSON = JSON;
    const _JSON2 = JSON;
    arg2._prefault = JSON.parse(JSON.stringify(def.defaultValue));
  }
};
export const catchProcessor = function catchProcessor(closure_0, seen, arg2, arg3) {
  const def = closure_0._zod.def;
  require(12097) /* initializeContext */.process(def.innerType, seen, arg3);
  seen = seen.seen;
  seen.get(closure_0).ref = def.innerType;
  arg2.default = def.catchValue(undefined);
};
export const pipeProcessor = function pipeProcessor(closure_0, io, arg2, arg3) {
  const def = closure_0._zod.def;
  if ("input" !== io.io) {
    const out = def.out;
    require(12097) /* initializeContext */.process(out, io, arg3);
    const seen = io.seen;
    seen.get(closure_0).ref = out;
  }
};
export const readonlyProcessor = function readonlyProcessor(closure_0, seen, arg2, arg3) {
  const def = closure_0._zod.def;
  require(12097) /* initializeContext */.process(def.innerType, seen, arg3);
  seen = seen.seen;
  seen.get(closure_0).ref = def.innerType;
  arg2.readOnly = true;
};
export const promiseProcessor = function promiseProcessor(closure_0, seen, arg2, arg3) {
  const def = closure_0._zod.def;
  require(12097) /* initializeContext */.process(def.innerType, seen, arg3);
  seen = seen.seen;
  seen.get(closure_0).ref = def.innerType;
};
export const optionalProcessor = function optionalProcessor(closure_0, seen, arg2, arg3) {
  const def = closure_0._zod.def;
  require(12097) /* initializeContext */.process(def.innerType, seen, arg3);
  seen = seen.seen;
  seen.get(closure_0).ref = def.innerType;
};
export const lazyProcessor = function lazyProcessor(closure_0, seen, arg2, arg3) {
  const innerType = closure_0._zod.innerType;
  require(12097) /* initializeContext */.process(innerType, seen, arg3);
  seen = seen.seen;
  seen.get(closure_0).ref = innerType;
};
export const allProcessors = { string: exports.stringProcessor, number: exports.numberProcessor, boolean: exports.booleanProcessor, bigint: exports.bigintProcessor, symbol: exports.symbolProcessor, null: exports.nullProcessor, undefined: exports.undefinedProcessor, void: exports.voidProcessor, never: exports.neverProcessor, any: exports.anyProcessor, unknown: exports.unknownProcessor, date: exports.dateProcessor, enum: exports.enumProcessor, literal: exports.literalProcessor, nan: exports.nanProcessor, template_literal: exports.templateLiteralProcessor, file: exports.fileProcessor, success: exports.successProcessor, custom: exports.customProcessor, function: exports.functionProcessor, transform: exports.transformProcessor, map: exports.mapProcessor, set: exports.setProcessor, array: exports.arrayProcessor, object: exports.objectProcessor, union: exports.unionProcessor, intersection: exports.intersectionProcessor, tuple: exports.tupleProcessor, record: exports.recordProcessor, nullable: exports.nullableProcessor, nonoptional: exports.nonoptionalProcessor, default: exports.defaultProcessor, prefault: exports.prefaultProcessor, catch: exports.catchProcessor, pipe: exports.pipeProcessor, readonly: exports.readonlyProcessor, promise: exports.promiseProcessor, optional: exports.optionalProcessor, lazy: exports.lazyProcessor };
