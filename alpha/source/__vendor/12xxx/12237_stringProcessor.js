// Module ID: 12237
// Function ID: 12238
// Name: stringProcessor
// Dependencies: [109, 717, 32, 12165, 12160, 12163, 12236]
// Exports: anyProcessor, arrayProcessor, bigintProcessor, booleanProcessor, catchProcessor, customProcessor, dateProcessor, defaultProcessor, enumProcessor, fileProcessor, functionProcessor, intersectionProcessor, lazyProcessor, literalProcessor, mapProcessor, nanProcessor, neverProcessor, nonoptionalProcessor, nullProcessor, nullableProcessor, numberProcessor, objectProcessor, optionalProcessor, pipeProcessor, prefaultProcessor, promiseProcessor, readonlyProcessor, recordProcessor, setProcessor, stringProcessor, successProcessor, symbolProcessor, templateLiteralProcessor, toJSONSchema, transformProcessor, tupleProcessor, undefinedProcessor, unionProcessor, unknownProcessor, voidProcessor

// Module 12237 (stringProcessor)
import captureStackTrace from "captureStackTrace" /* 12160 */;
import $ZodType from "$ZodType" /* 12163 */;
import cuid2 from "cuid" /* 12165 */;
import _mod12236 from "module_12236" /* 12236 */;
import _objectWithoutProperties_mod from "_objectWithoutProperties" /* 109 */;
import _toArray from "_toArray" /* 717 */;
import _slicedToArray from "_slicedToArray" /* 32 */;

const require = globalThis.__r;
let _exports, _require, hasOwnProperty, map1, set;

const number_format = (minimum, format) => {
  let tmp5;
  let tmp6;
  format = format.format;
  if (typeof setFormat === "function") {
    minimum.format = format;
    if (format.includes("int")) {
      minimum.isInt = true;
    }
    [tmp5, tmp6] = BIGINT_FORMAT_RANGES[format.format];
    _slicedToArray(BIGINT_FORMAT_RANGES[format.format], 2);
    if (typeof narrowMin === "function") {
      const tmp8 = undefined === minimum.minimum || tmp5 > minimum.minimum;
      if (tmp8) {
        minimum.minimum = tmp5;
      }
      if (typeof narrowMax === "function") {
        const tmp10 = undefined === minimum.maximum || tmp6 < minimum.maximum;
        if (tmp10) {
          minimum.maximum = tmp6;
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
let self = this;
function aggregateChecks(keyType) {
  let checks1;
  obj = {};
  const def = keyType._zod.def;
  const traits = keyType._zod.traits;
  if (traits.has("$ZodCheck")) {
    const items = [keyType];
    let checks = def.checks;
    if (checks == null) {
      checks = [];
    }
    HermesBuiltin.arraySpread(items, checks, 1);
    checks1 = items;
  } else {
    checks1 = def.checks;
    if (checks1 == null) {
      checks1 = [];
    }
  }
  const iter = checks1[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp10 = obj[nextResult._zod.def.check];
    if (tmp10 != null) {
      let tmp10Result = tmp10(obj, tmp8._zod.def);
    }
    continue;
  }
  const bag = keyType._zod.bag;
  if (undefined !== bag.minimum) {
    narrowMin(obj, "minimum", bag.minimum);
  }
  if (undefined !== bag.exclusiveMinimum) {
    narrowMin(obj, "exclusiveMinimum", bag.exclusiveMinimum);
  }
  if (undefined !== bag.maximum) {
    narrowMax(obj, "maximum", bag.maximum);
  }
  if (undefined !== bag.exclusiveMaximum) {
    narrowMax(obj, "exclusiveMaximum", bag.exclusiveMaximum);
  }
  if (undefined !== bag.multipleOf) {
    addDivisor(obj, bag.multipleOf);
  }
  if (undefined !== bag.format) {
    if (obj.format == null) {
      obj.format = bag.format;
    }
    const format = bag.format;
    if (format.includes("int")) {
      obj.isInt = true;
    }
  }
  if (bag.mime) {
    intersectMime(obj, bag.mime);
  }
  let patterns = bag.patterns;
  if (patterns == null) {
    patterns = [];
  }
  const tmp25 = patterns[Symbol.iterator]();
  while (tmp25 !== undefined) {
    let tmp28 = addPattern(obj, tmp26);
    continue;
  }
  return obj;
}
function inputOptin(innerType) {
  let optin;
  const def = innerType._zod.def;
  if ("pipe" === def.type) {
    const traits = def.in._zod.traits;
    if (traits.has("$ZodTransform")) {
      optin = inputOptin(def.out);
    }
    return optin;
  }
  if ("catch" === def.type) {
    optin = inputOptin(def.innerType);
  } else {
    optin = innerType._zod.optin;
  }
}
function stringifyKeyNames(get, def, has) {
  let closure_3;
  let exclusiveMaximum;
  let exclusiveMinimum;
  let format;
  let id;
  let maximum;
  let minimum;
  let multipleOf;
  let closure_0 = get;
  _exports = def;
  let closure_2 = has;
  if (def.$ref) {
    if (has.has(_exports)) {
      return _exports;
    } else {
      has.add(_exports);
      const value = get.get(_exports);
      def = undefined;
      if (value != null) {
        def = value.def;
      }
      if (def) {
        let tmp31 = stringifyKeyNames(get, def, has);
        if (tmp31 === def) {
          tmp31 = _exports;
        }
        return tmp31;
      } else {
        return _exports;
      }
    }
  } else {
    let items1;
    const items = ["anyOf", "oneOf"];
    function _loop() {
      const arr = obj[closure_3];
      const tmp = closure_3;
      if (Array.isArray(arr)) {
        const mapped = arr.map((item) => stringifyKeyNames(arr, item, has));
        if (mapped.some((item, index) => item !== arr[index])) {
          obj = {};
          const merged = Object.assign(obj);
          obj[tmp] = mapped;
        }
      } else {
        return 1;
      }
    }
    const iter = items[Symbol.iterator]();
    let tmp = items;
    while (iter !== undefined) {
      _objectWithoutProperties = iter.next();
      let _loopResult = _loop();
      continue;
    }
    const _Array = Array;
    const type = _exports.type;
    if (Array.isArray(_exports.type)) {
      items1 = type;
    } else {
      items1 = [type];
    }
    const hasItem = items1.includes("string");
    const someResult = !hasItem && items1.some((item) => "number" === item || "integer" === item);
    let _enum = _exports.enum;
    if (_enum == null) {
      let tmp13;
      if (undefined !== _exports.const) {
        const items2 = [_exports.const];
        tmp13 = items2;
      }
      _enum = tmp13;
    }
    if (!someResult) {
      let someResult1;
      if (_enum != null) {
        someResult1 = _enum.some((item) => typeof item === "number");
      }
      if (!someResult1) {
        return _exports;
      }
    }
    ({ minimum, maximum, exclusiveMinimum, exclusiveMaximum, multipleOf, format, id } = _exports);
    const tmp20 = _objectWithoutProperties(_exports, closure_6);
    if (tmp20.enum) {
      const _enum1 = tmp20.enum;
      tmp20.enum = _enum1.map((item) => {
        let StringResult = item;
        if (typeof item === "number") {
          const _String = String;
          StringResult = String(item);
        }
        return StringResult;
      });
    } else if (typeof tmp20.const === "number") {
      let _String = String;
      tmp20.const = String(tmp20.const);
    }
    if (someResult) {
      tmp20.type = "string";
      if (!_enum) {
        tmp20.pattern = (items1.includes("number") ? cuid.number : cuid.integer).source;
      }
    }
    return tmp20;
  }
}
let _objectWithoutProperties = _objectWithoutProperties_mod;
let closure_6 = ["minimum", "maximum", "exclusiveMinimum", "exclusiveMaximum", "multipleOf", "format", "id"];
let tmp = this && self.__createBinding;
if (!tmp) {
  let tmp2 = globalThis;
  let _Object = Object;
  tmp = Object.create ? ((arg0, __esModule, arg2, arg3) => {
    function get() {
      return __esModule[closure_1];
    }
    let closure_0 = __esModule;
    let closure_1 = arg2;
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
      obj = { enumerable: true, get };
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
let closure_7 = tmp;
let tmp3 = self && self.__setModuleDefault;
if (!tmp3) {
  let tmp4 = globalThis;
  let _Object2 = Object;
  tmp3 = Object.create ? ((arg0, value) => {
    obj = { enumerable: true, value };
    Object.defineProperty(arg0, "default", obj);
  }) : ((arg0, arg1) => {
    arg0.default = arg1;
  });
}
let closure_8 = tmp3;
let tmp5 = self && self.__importStar || ((__esModule) => {
  const tmp = __esModule;
  if (tmp) {
    if (__esModule.__esModule) {
      return __esModule;
    }
  }
  obj = {};
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
        let tmp6 = closure_7(obj, __esModule, key10009);
        continue;
      }
      continue;
    }
  }
  closure_8(obj, __esModule);
  return obj;
});
const cuid = tmp5(cuid2);
function narrowMin(arg0, exclusiveMinimum, exclusiveMinimum2) {
  const tmp = undefined === arg0[exclusiveMinimum] || exclusiveMinimum2 > arg0[exclusiveMinimum];
  if (tmp) {
    arg0[exclusiveMinimum] = exclusiveMinimum2;
  }
}
function narrowMax(arg0, exclusiveMaximum, exclusiveMaximum2) {
  const tmp = undefined === arg0[exclusiveMaximum] || exclusiveMaximum2 < arg0[exclusiveMaximum];
  if (tmp) {
    arg0[exclusiveMaximum] = exclusiveMaximum2;
  }
}
function narrowBoth(arg0, arg1) {

}
function addDivisor(multipleOf, multipleOf2) {
  if (multipleOf.multipleOf == null) {
    multipleOf.multipleOf = [];
  }
  multipleOf = multipleOf.multipleOf;
  if (!multipleOf.includes(multipleOf)) {
    const multipleOf1 = multipleOf.multipleOf;
    multipleOf1.push(multipleOf);
  }
}
function addPattern(patterns, arg1) {
  if (patterns.patterns == null) {
    const _Set = Set;
    const self = this;
    const self2 = this;
    patterns.patterns = new Set();
    set = new Set();
  }
  patterns = patterns.patterns;
  patterns.add(arg1);
}
function intersectMime(mime, mime2) {
  let found;
  let closure_0 = mime;
  if (mime.mime) {
    mime = mime.mime;
    found = mime.filter((item) => mime.includes(item));
  } else {
    found = [];
    HermesBuiltin.arraySpread(found, mime, 0);
  }
  mime.mime = found;
}
function setFormat(arg0, arg1) {

}
function minContributor(minimum, minimum2) {
  minimum = minimum2.minimum;
  if (typeof narrowMin === "function") {
    const tmp2 = undefined === minimum.minimum || minimum > minimum.minimum;
    if (tmp2) {
      minimum.minimum = minimum;
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
function maxContributor(maximum, maximum2) {
  maximum = maximum2.maximum;
  if (typeof narrowMax === "function") {
    const tmp2 = undefined === maximum.maximum || maximum < maximum.maximum;
    if (tmp2) {
      maximum.maximum = maximum;
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
let obj = {
  greater_than(arg0, inclusive) {
    let str = "exclusiveMinimum";
    const tmp = narrowMin;
    if (inclusive.inclusive) {
      str = "minimum";
    }
    const value = inclusive.value;
    if (typeof tmp === "function") {
      const tmp3 = undefined === arg0[str] || value > arg0[str];
      if (tmp3) {
        arg0[str] = value;
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  },
  less_than(arg0, inclusive) {
    let str = "exclusiveMaximum";
    const tmp = narrowMax;
    if (inclusive.inclusive) {
      str = "maximum";
    }
    const value = inclusive.value;
    if (typeof tmp === "function") {
      const tmp3 = undefined === arg0[str] || value < arg0[str];
      if (tmp3) {
        arg0[str] = value;
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  },
  multiple_of(multipleOf, value) {
    value = value.value;
    if (typeof addDivisor === "function") {
      if (multipleOf.multipleOf == null) {
        multipleOf.multipleOf = [];
      }
      multipleOf = multipleOf.multipleOf;
      if (!multipleOf.includes(value)) {
        const multipleOf1 = multipleOf.multipleOf;
        multipleOf1.push(value);
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  },
  number_format,
  bigint_format: number_format,
  min_length: minContributor,
  max_length: maxContributor,
  length_equals(minimum, arg1) {
    if (typeof narrowBoth === "function") {
      if (typeof narrowMin === "function") {
        const tmp3 = undefined === minimum.minimum || arg1.length > minimum.minimum;
        if (tmp3) {
          minimum.minimum = arg1.length;
        }
        if (typeof narrowMax === "function") {
          const tmp5 = undefined === minimum.maximum || arg1.length < minimum.maximum;
          if (tmp5) {
            minimum.maximum = arg1.length;
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  },
  min_size: minContributor,
  max_size: maxContributor,
  size_equals(minimum, size) {
    size = size.size;
    if (typeof narrowBoth === "function") {
      if (typeof narrowMin === "function") {
        const tmp3 = undefined === minimum.minimum || size > minimum.minimum;
        if (tmp3) {
          minimum.minimum = size;
        }
        if (typeof narrowMax === "function") {
          const tmp5 = undefined === minimum.maximum || size < minimum.maximum;
          if (tmp5) {
            minimum.maximum = size;
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  },
  string_format(patterns, format) {
    format = format.format;
    if (typeof setFormat === "function") {
      patterns.format = format;
      if (format.includes("int")) {
        patterns.isInt = true;
      }
      if (format.pattern) {
        if (typeof addPattern === "function") {
          if (patterns.patterns == null) {
            const _Set = Set;
            const self = this;
            const self2 = this;
            patterns.patterns = new Set();
            set = new Set();
          }
          patterns = patterns.patterns;
          patterns.add(tmp3);
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
      const tmp9 = "base64" !== format.format && "base64url" !== format.format;
      if (!tmp9) {
        patterns.contentEncoding = format.format;
      }
      const local = format.local || -1 === format.precision;
      if (local) {
        patterns.laxFormat = true;
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  },
  mime_type(mime, mime2) {
    mime = mime2.mime;
    if (typeof intersectMime === "function") {
      let found;
      if (mime.mime) {
        const mime1 = mime.mime;
        found = mime1.filter((item) => mime.includes(item));
      } else {
        found = [];
        HermesBuiltin.arraySpread(found, mime, 0);
      }
      mime.mime = found;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
};
const NUMBER_FORMAT_RANGES = captureStackTrace.NUMBER_FORMAT_RANGES;
const BIGINT_FORMAT_RANGES = captureStackTrace.BIGINT_FORMAT_RANGES;
let closure_19 = { guid: "uuid", url: "uri", datetime: "date-time", json_string: "json-string", regex: "" };
let items = [$ZodType.base64Charset, cuid.base64];
let items1 = [items, ];
let items2 = [$ZodType.base64urlCharset, cuid.base64url];
items1[1] = items2;
let map = new Map(items1);
function exactPattern(item10090) {
  let value = map.get(item10090);
  if (value == null) {
    value = item10090;
  }
  return value;
}
const weakMap = new WeakMap();
let closure_25 = Symbol();
let tmp10 = (() => {
  let tmp = exports;
  const ownPropertyNames = Object.getOwnPropertyNames(exports);
  let num = 0;
  if (0 < ownPropertyNames.length) {
    const _Object = Object;
    const ownPropertyDescriptor = Object.getOwnPropertyDescriptor(exports, ownPropertyNames[num]);
    if (ownPropertyDescriptor) {
      if (ownPropertyDescriptor.get) {
        if (ownPropertyDescriptor.configurable) {
          let value;
          try {
            value = ownPropertyDescriptor.get();
          } catch (err) {
          }
          if (undefined !== value) {
            const _Object2 = Object;
            obj = { value, writable: false, enumerable: ownPropertyDescriptor.enumerable, configurable: false };
            Object.defineProperty(exports, ownPropertyNames[num], obj);
          }
        }
      }
    }
    num = num + 1;
    tmp = tmp2;
  }
  const frozen = Object.freeze(tmp);
})();

export { aggregateChecks };
export function toJSONSchema(_idmap, uri) {
  let first1;
  let obj4;
  let tmp28;
  obj = { processors: exports.allProcessors };
  const tmp = "_idmap" in _idmap;
  const initializeContext = _mod12236.initializeContext;
  const merged = Object.assign(uri);
  const initializeContextResult = initializeContext(obj);
  if (tmp) {
    _idmap = _idmap._idmap;
    const entries = _idmap.entries();
    const tmp10 = entries[Symbol.iterator]();
    while (tmp10 !== undefined) {
      let tmp15 = _slicedToArray(tmp12, 2);
      let first = tmp15[0];
      let processSchemaResult = _mod12236.processSchema(tmp15[1], initializeContextResult);
      continue;
    }
    const obj2 = {};
    const obj3 = { registry: _idmap, uri, defs: obj4 };
    uri = undefined;
    if (uri != null) {
      uri = uri.uri;
    }
    obj4 = {};
    initializeContextResult.external = obj3;
    const _idmap2 = _idmap._idmap;
    const entries1 = _idmap2.entries();
    for (const item10061 of entries1) {
      [first1, tmp28] = item10061;
      let extractDefsResult = _mod12236.extractDefs(initializeContextResult, tmp28);
      let assignPropResult = captureStackTrace.assignProp(obj2, first1, _mod12236.finalize(initializeContextResult, tmp28));
      continue;
    }
    const _Object = Object;
    if (Object.keys(obj4).length > 0) {
      let str = "definitions";
      if ("draft-2020-12" === initializeContextResult.target) {
        str = "$defs";
      }
      const obj5 = {};
      obj5[str] = obj4;
      obj2.__shared = obj5;
    }
    return { schemas: obj2 };
  } else {
    _mod12236.processSchema(_idmap, initializeContextResult);
    _mod12236.extractDefs(initializeContextResult, _idmap);
    return _mod12236.finalize(initializeContextResult, _idmap);
  }
}
export const stringProcessor = (keyType, arg1, format, arg3) => {
  let contentEncoding;
  let laxFormat;
  let maximum;
  let minimum;
  let patterns;
  let closure_0 = arg1;
  format.type = "string";
  ({ minimum, maximum, format, patterns, contentEncoding, laxFormat } = aggregateChecks(keyType));
  const tmp3 = aggregateChecks(keyType);
  if (typeof minimum === "number") {
    format.minLength = minimum;
  }
  if (typeof maximum === "number") {
    format.maxLength = maximum;
  }
  if (format) {
    let tmp5 = closure_19[format];
    if (tmp5 == null) {
      tmp5 = format;
    }
    format.format = tmp5;
    if ("" === format.format) {
      delete format["format"];
    }
    const tmp7 = "time" === format || laxFormat;
    if (tmp7) {
      delete format["format"];
    }
  }
  if (contentEncoding) {
    format.contentEncoding = contentEncoding;
  }
  if (patterns) {
    if (patterns.size > 0) {
      const items = [];
      HermesBuiltin.arraySpread(items, patterns, 0);
      const mapped = items.map(exactPattern);
      if (1 === mapped.length) {
        format.pattern = mapped[0].source;
      } else if (mapped.length > 1) {
        const items1 = [];
        HermesBuiltin.arraySpread(items1, mapped.map((source) => {
          if ("draft-07" !== target.target) {
            if ("draft-04" !== target.target) {
              if ("openapi-3.0" !== target.target) {
                obj = {};
              }
              const obj2 = { pattern: source.source };
              const merged = Object.assign(obj);
              return obj2;
            }
          }
          obj = { type: "string" };
        }), 0);
        format.allOf = items1;
      }
    }
  }
};
export const numberProcessor = function(zodSchema, target, allOf, path) {
  let exclusiveMaximum;
  let exclusiveMinimum;
  let maximum;
  let minimum;
  let multipleOf;
  const tmp = aggregateChecks(zodSchema);
  ({ minimum, maximum, multipleOf, exclusiveMaximum, exclusiveMinimum } = tmp);
  let str = "number";
  if (tmp.isInt) {
    str = "integer";
  }
  allOf.type = str;
  let tmp2 = typeof exclusiveMinimum === "number";
  if (typeof exclusiveMinimum === "number") {
    let NEGATIVE_INFINITY = minimum;
    if (minimum == null) {
      const _Number = Number;
      NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;
    }
    tmp2 = exclusiveMinimum >= NEGATIVE_INFINITY;
  }
  let tmp4 = typeof exclusiveMaximum === "number";
  if (typeof exclusiveMaximum === "number") {
    let POSITIVE_INFINITY = maximum;
    if (maximum == null) {
      const _Number2 = Number;
      POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
    }
    tmp4 = exclusiveMaximum <= POSITIVE_INFINITY;
  }
  if (tmp2) {
    if ("draft-04" === target.target || "openapi-3.0" === target.target) {
      allOf.minimum = exclusiveMinimum;
      allOf.exclusiveMinimum = true;
    } else {
      allOf.exclusiveMinimum = exclusiveMinimum;
    }
  } else if (typeof minimum === "number") {
    allOf.minimum = minimum;
  }
  if (tmp4) {
    if ("draft-04" === target.target || "openapi-3.0" === target.target) {
      allOf.maximum = exclusiveMaximum;
      allOf.exclusiveMaximum = true;
    } else {
      allOf.exclusiveMaximum = exclusiveMaximum;
    }
  } else if (typeof maximum === "number") {
    allOf.maximum = maximum;
  }
  if (multipleOf) {
    const _Set = Set;
    const self = this;
    const self2 = this;
    set = new Set();
    const iter = multipleOf[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp13 = nextResult;
      let _Number3 = Number;
      if (Number.isFinite(nextResult)) {
        if (0 !== tmp13) {
          let _Math = Math;
          let addResult = set.add(Math.abs(tmp13));
          continue;
        }
      }
      let _HermesInternal = HermesInternal;
      let result = _mod12236.handleUnrepresentable(zodSchema, target, allOf, path, "A multipleOf divisor of " + tmp13 + " cannot be represented in JSON Schema");
    }
    const arr = _toArray(set);
    const first = arr[0];
    const substr = arr.slice(1);
    if (undefined !== first) {
      allOf.multipleOf = first;
    }
    if (substr.length) {
      allOf = allOf.allOf;
      if (allOf == null) {
        allOf = [];
      }
      const items = [];
      const arraySpreadResult = HermesBuiltin.arraySpread(items, allOf, 0);
      HermesBuiltin.arraySpread(items, substr.map((multipleOf) => ({ multipleOf })), arraySpreadResult);
      allOf.allOf = items;
    }
  }
};
export const booleanProcessor = (arg0, arg1, arg2, arg3) => {
  arg2.type = "boolean";
};
export const bigintProcessor = (zodSchema, unrepresentable, properties, path) => {
  const result = _mod12236.handleUnrepresentable(zodSchema, unrepresentable, properties, path, "BigInt cannot be represented in JSON Schema");
};
export const symbolProcessor = (zodSchema, unrepresentable, properties, path) => {
  const result = _mod12236.handleUnrepresentable(zodSchema, unrepresentable, properties, path, "Symbols cannot be represented in JSON Schema");
};
export const nullProcessor = (arg0, target, arg2, arg3) => {
  if ("openapi-3.0" === target.target) {
    arg2.type = "string";
    arg2.nullable = true;
    arg2.enum = [null];
  } else {
    arg2.type = "null";
  }
};
export const undefinedProcessor = (zodSchema, unrepresentable, properties, path) => {
  const result = _mod12236.handleUnrepresentable(zodSchema, unrepresentable, properties, path, "Undefined cannot be represented in JSON Schema");
};
export const voidProcessor = (zodSchema, unrepresentable, properties, path) => {
  const result = _mod12236.handleUnrepresentable(zodSchema, unrepresentable, properties, path, "Void cannot be represented in JSON Schema");
};
export const neverProcessor = (arg0, arg1, arg2, arg3) => {
  arg2.not = {};
};
export const anyProcessor = (arg0, arg1, arg2, arg3) => {

};
export const unknownProcessor = (arg0, arg1, arg2, arg3) => {

};
export const dateProcessor = (zodSchema, unrepresentable, properties, path) => {
  const result = _mod12236.handleUnrepresentable(zodSchema, unrepresentable, properties, path, "Date cannot be represented in JSON Schema");
};
export const enumProcessor = (_zod, arg1, arg2, arg3) => {
  const enumValues = captureStackTrace.getEnumValues(_zod._zod.def.entries);
  if (0 !== enumValues.length) {
    if (enumValues.every((item) => typeof item === "number")) {
      arg2.type = "number";
    }
    if (enumValues.every((item) => typeof item === "string")) {
      arg2.type = "string";
    }
    arg2.enum = enumValues;
  } else {
    arg2.not = {};
  }
};
export const literalProcessor = (_zod, target, properties, path) => {
  const def = _zod._zod.def;
  if (0 !== def.values.length) {
    const items = [];
    const values = def.values;
    const iter = values[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp6 = nextResult;
      if (undefined === nextResult) {
        let str4 = "Literal `undefined` cannot be represented in JSON Schema";
        if (_mod12236.handleUnrepresentable(_zod, target, properties, path, "Literal `undefined` cannot be represented in JSON Schema")) {
          iter.return();
        }
      } else if (typeof tmp6 === "bigint") {
        let str3 = "BigInt literals cannot be represented in JSON Schema";
        if (_mod12236.handleUnrepresentable(_zod, target, properties, path, "BigInt literals cannot be represented in JSON Schema")) {
          iter.return();
        } else {
          let _Number = Number;
          let arr = items.push(Number(tmp6));
        }
      } else {
        let arr2 = items.push(tmp6);
      }
      continue;
    }
    if (0 !== items.length) {
      if (1 === items.length) {
        const first = items[0];
        let str9 = "null";
        if (null !== first) {
          str9 = typeof first;
        }
        properties.type = str9;
        if ("draft-04" !== target.target) {
          if ("openapi-3.0" !== target.target) {
            properties.const = first;
          }
        }
        const items1 = [first];
        properties.enum = items1;
      } else {
        if (items.every((item) => typeof item === "number")) {
          properties.type = "number";
        }
        if (items.every((item) => typeof item === "string")) {
          properties.type = "string";
        }
        if (items.every((flag) => typeof flag === "boolean")) {
          properties.type = "boolean";
        }
        if (items.every((item) => null === item)) {
          properties.type = "null";
        }
        properties.enum = items;
      }
    }
  } else {
    properties.not = {};
  }
};
export const nanProcessor = (zodSchema, unrepresentable, properties, path) => {
  const result = _mod12236.handleUnrepresentable(zodSchema, unrepresentable, properties, path, "NaN cannot be represented in JSON Schema");
};
export const templateLiteralProcessor = function(_zod, arg1, arg2, arg3) {
  const pattern = _zod._zod.pattern;
  if (pattern) {
    arg2.type = "string";
    arg2.pattern = pattern.source;
  } else {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("Pattern not found in template literal");
    throw error;
  }
};
export const fileProcessor = (keyType, arg1, arg2, arg3) => {
  let maximum;
  let mime;
  let minimum;
  arg2.type = "string";
  arg2.format = "binary";
  arg2.contentEncoding = "binary";
  ({ minimum, maximum, mime } = aggregateChecks(keyType));
  aggregateChecks(keyType);
  if (undefined !== minimum) {
    arg2.minLength = minimum;
  }
  if (undefined !== maximum) {
    arg2.maxLength = maximum;
  }
  if (mime) {
    if (0 === mime.length) {
      arg2.not = {};
    } else if (1 === mime.length) {
      arg2.contentMediaType = mime[0];
    } else {
      arg2.anyOf = mime.map((contentMediaType) => ({ contentMediaType }));
    }
  }
};
export const successProcessor = (arg0, arg1, arg2, arg3) => {
  arg2.type = "boolean";
};
export const customProcessor = (zodSchema, unrepresentable, properties, path) => {
  const result = _mod12236.handleUnrepresentable(zodSchema, unrepresentable, properties, path, "Custom types cannot be represented in JSON Schema");
};
export const functionProcessor = (zodSchema, unrepresentable, properties, path) => {
  const result = _mod12236.handleUnrepresentable(zodSchema, unrepresentable, properties, path, "Function types cannot be represented in JSON Schema");
};
export const transformProcessor = (zodSchema, unrepresentable, properties, path) => {
  const result = _mod12236.handleUnrepresentable(zodSchema, unrepresentable, properties, path, "Transforms cannot be represented in JSON Schema");
};
export const mapProcessor = (zodSchema, unrepresentable, properties, path) => {
  const result = _mod12236.handleUnrepresentable(zodSchema, unrepresentable, properties, path, "Map cannot be represented in JSON Schema");
};
export const setProcessor = (zodSchema, unrepresentable, properties, path) => {
  const result = _mod12236.handleUnrepresentable(zodSchema, unrepresentable, properties, path, "Set cannot be represented in JSON Schema");
};
export const arrayProcessor = (_zod, initializeContextResult, arg2, path) => {
  let items;
  let maximum;
  let minimum;
  const def = _zod._zod.def;
  ({ minimum, maximum } = aggregateChecks(_zod));
  aggregateChecks(_zod);
  if (typeof minimum === "number") {
    arg2.minItems = minimum;
  }
  if (typeof maximum === "number") {
    arg2.maxItems = maximum;
  }
  arg2.type = "array";
  obj = { path: items };
  const processSchema = _mod12236.processSchema;
  const element = def.element;
  const merged = Object.assign(path);
  items = [];
  items[HermesBuiltin.arraySpread(items, path.path, 0)] = "items";
  arg2.items = processSchema(element, initializeContextResult, obj);
};
export const objectProcessor = (_zod, io, properties, path) => {
  let items2;
  const def = _zod._zod.def;
  const shape = def.shape;
  if (!Object.getOwnPropertySymbols(shape).length) {
    properties.type = "object";
    properties.properties = {};
    for (const key10034 in shape) {
      let assignProp = captureStackTrace.assignProp;
      properties = properties.properties;
      let obj2 = { path: items };
      let processSchema2 = _mod12236.processSchema;
      let tmp32 = shape[key10034];
      let merged = Object.assign(path);
      let items = [, ];
      let arraySpreadResult = HermesBuiltin.arraySpread(items, path.path, 0);
      items[arraySpreadResult] = "properties";
      items[arraySpreadResult + 1] = key10034;
      let assignPropResult = assignProp(properties, key10034, processSchema2(tmp32, io, obj2));
      continue;
    }
    const items1 = [];
    const _Object = Object;
    const keys = Object.keys(shape);
    const iter = keys[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp16;
      let tmp14 = def.shape[nextResult];
      let tmp13 = nextResult;
      if ("input" === io.io) {
        tmp16 = undefined === inputOptin(tmp14);
      } else {
        tmp16 = undefined === tmp14._zod.optout;
      }
      if (tmp16) {
        let arr = items1.push(tmp13);
      }
      continue;
    }
    if (items1.length > 0) {
      properties.required = items1;
    }
    const catchall = def.catchall;
    let type;
    if (catchall != null) {
      type = catchall._zod.def.type;
    }
    if ("never" === type) {
      properties.additionalProperties = false;
    } else if (def.catchall) {
      if (def.catchall) {
        obj = { path: items2 };
        const processSchema = _mod12236.processSchema;
        const catchall2 = def.catchall;
        const merged1 = Object.assign(path);
        items2 = [];
        items2[HermesBuiltin.arraySpread(items2, path.path, 0)] = "additionalProperties";
        properties.additionalProperties = processSchema(catchall2, io, obj);
      }
    } else if ("output" === io.io) {
      properties.additionalProperties = false;
    }
  }
};
export const unionProcessor = (_zod, arg1, arg2, arg3) => {
  let closure_0 = arg1;
  const path = arg3;
  const def = _zod._zod.def;
  let tmp = false === def.inclusive;
  let closure_2 = tmp;
  const options = def.options;
  const mapped = options.map((item, index) => {
    let items;
    obj = { path: items };
    const processSchema = _mod12236.processSchema;
    const merged = Object.assign(path);
    items = [...closure_1.path];
    let str = "anyOf";
    const tmp = closure_0;
    if (closure_2) {
      str = "oneOf";
    }
    items[tmp3] = str;
    items[tmp3 + 1] = index;
    return processSchema(item, tmp, obj);
  });
  if (tmp) {
    arg2.oneOf = mapped;
  } else {
    arg2.anyOf = mapped;
  }
};
export const intersectionProcessor = (_zod, intersections, arg2, path) => {
  let allOf;
  let allOf1;
  let items;
  let items1;
  const def = _zod._zod.def;
  obj = { path: items };
  const processSchema = _mod12236.processSchema;
  const left = def.left;
  const merged = Object.assign(path);
  items = [...path.path, "allOf", 0];
  const processSchemaResult = processSchema(left, intersections, obj);
  const obj2 = { path: items1 };
  const processSchema2 = _mod12236.processSchema;
  const right = def.right;
  const merged1 = Object.assign(path);
  items1 = [...path.path, "allOf", 1];
  const processSchema2Result = processSchema2(right, intersections, obj2);
  let tmp6 = "allOf" in processSchemaResult;
  if (tmp6) {
    const _Object = Object;
    tmp6 = 1 === Object.keys(processSchemaResult).length;
  }
  if (tmp6) {
    allOf = processSchemaResult.allOf;
  } else {
    allOf = [processSchemaResult];
  }
  const items2 = [...allOf];
  let tmp9 = "allOf" in processSchema2Result;
  if (tmp9) {
    const _Object2 = Object;
    tmp9 = 1 === Object.keys(processSchema2Result).length;
  }
  if (tmp9) {
    allOf1 = processSchema2Result.allOf;
  } else {
    allOf1 = [processSchema2Result];
  }
  HermesBuiltin.arraySpread(items2, allOf1, tmp8);
  arg2.allOf = items2;
  intersections = intersections.intersections;
  intersections.push(items2);
};
export const tupleProcessor = (_zod, target, items, path) => {
  let items1;
  let maximum;
  let minimum;
  let str2;
  _require = target;
  const def = _zod._zod.def;
  items.type = "array";
  let str = "items";
  if ("draft-2020-12" === target.target) {
    str = "prefixItems";
  }
  if ("draft-2020-12" === target.target) {
    str2 = "items";
  } else {
    str2 = "additionalItems";
  }
  items = def.items;
  const mapped = items.map((item, index) => {
    let items;
    obj = { path: items };
    const processSchema = _mod12236.processSchema;
    const merged = Object.assign(path);
    items = [...closure_1.path, str, index];
    return processSchema(item, target, obj);
  });
  let processSchemaResult = null;
  if (def.rest) {
    let items3;
    obj = { path: items1 };
    let processSchema = require("module_12236").processSchema;
    const rest = def.rest;
    let merged = Object.assign(path);
    items1 = [];
    const arraySpreadResult = HermesBuiltin.arraySpread(items1, path.path, 0);
    items1[arraySpreadResult] = str2;
    if ("openapi-3.0" === target.target) {
      const items2 = [def.items.length];
      items3 = items2;
    } else {
      items3 = [];
    }
    HermesBuiltin.arraySpread(items1, items3, arraySpreadResult + 1);
    processSchemaResult = processSchema(rest, target, obj);
  }
  let length = def.items.length;
  let tmp14 = length;
  if (length > 0) {
    while (true) {
      let tmp17;
      let tmp15 = def.items[length - 1];
      if ("input" === target.io) {
        let optin;
        let def2 = tmp15._zod.def;
        if ("pipe" === def2.type) {
          let traits = def2.in._zod.traits;
          if (traits.has("$ZodTransform")) {
            let optin3;
            let out = def2.out;
            let def4 = out._zod.def;
            if ("pipe" === def4.type) {
              let traits3 = def4.in._zod.traits;
              if (traits3.has("$ZodTransform")) {
                optin3 = inputOptin(def4.out);
                optin = optin3;
                tmp17 = undefined !== optin;
              }
            }
            if ("catch" === def4.type) {
              optin3 = inputOptin(def4.innerType);
            } else {
              optin3 = out._zod.optin;
            }
          }
        }
        if ("catch" === def2.type) {
          let optin2;
          let innerType = def2.innerType;
          let def3 = innerType._zod.def;
          if ("pipe" === def3.type) {
            let traits2 = def3.in._zod.traits;
            if (traits2.has("$ZodTransform")) {
              optin2 = inputOptin(def3.out);
              optin = optin2;
            }
          }
          if ("catch" === def3.type) {
            optin2 = inputOptin(def3.innerType);
          } else {
            optin2 = innerType._zod.optin;
          }
        } else {
          optin = tmp15._zod.optin;
        }
      } else {
        tmp17 = "optional" === tmp15._zod.optout;
      }
      tmp14 = length;
      if (!tmp17) {
        break;
      } else {
        length = length - 1;
        tmp14 = length;
        if (length <= 0) {
          break;
        }
      }
    }
  }
  const rest2 = def.rest;
  if ("draft-2020-12" === target.target) {
    items.prefixItems = mapped;
    if (rest2) {
      if (processSchemaResult) {
        items.items = processSchemaResult;
      }
    } else {
      items.items = false;
    }
    if (tmp14 > 0) {
      items.minItems = tmp14;
    }
    if (!rest2) {
      items.maxItems = def.items.length;
    }
  } else if ("openapi-3.0" === target.target) {
    const obj2 = { anyOf: mapped };
    items.items = obj2;
    if (processSchemaResult) {
      const anyOf = items.items.anyOf;
      anyOf.push(processSchemaResult);
    }
    if (tmp14 > 0) {
      items.minItems = tmp14;
    }
    if (!rest2) {
      items.maxItems = def.items.length;
    }
  } else {
    items.items = mapped;
    if (rest2) {
      if (processSchemaResult) {
        items.additionalItems = processSchemaResult;
      }
    } else {
      items.additionalItems = false;
    }
    if (tmp14 > 0) {
      items.minItems = tmp14;
    }
    if (!rest2) {
      items.maxItems = def.items.length;
    }
  }
  ({ minimum, maximum } = aggregateChecks(_zod));
  aggregateChecks(_zod);
  if (typeof minimum === "number") {
    items.minItems = minimum;
  }
  if (typeof maximum === "number") {
    items.maxItems = maximum;
  }
};
export const recordProcessor = (_zod, io, patternProperties, path) => {
  let items;
  let items2;
  let items4;
  _require = io;
  let def = _zod._zod.def;
  patternProperties.type = "object";
  const keyType = def.keyType;
  const patterns = aggregateChecks(keyType).patterns;
  if ("loose" === def.mode) {
    if (patterns) {
      if (patterns.size > 0) {
        let tmp14 = { path: items };
        let tmp15 = path;
        const obj3 = { path: items };
        const processSchema3 = require("module_12236").processSchema;
        const valueType2 = def.valueType;
        const merged = Object.assign(path);
        items = [, ];
        let tmp17 = items;
        const arraySpreadResult = HermesBuiltin.arraySpread(items, path.path, 0);
        items[arraySpreadResult] = "patternProperties";
        items[arraySpreadResult + 1] = "*";
        patternProperties.patternProperties = {};
        let tmp20 = patterns;
        let tmp21 = patterns;
        for (const item10090 of patterns) {
          let tmp22 = _require;
          let tmp23 = dependencyMap;
          let tmp24 = exactPattern;
          let assignPropResult = require("captureStackTrace").assignProp(patternProperties.patternProperties, exactPattern(item10090).source, tmp19);
          continue;
        }
      }
      let values = keyType._zod.values;
      let tmp26 = "input" === io.io;
      if (tmp26) {
        tmp26 = undefined !== inputOptin(def.valueType);
      }
      if (values) {
        if (!def.partial) {
          if (!tmp26) {
            let items1 = [];
            let tmp29 = values;
            HermesBuiltin.arraySpread(items1, values, 0);
            const found = items1.filter((item) => typeof item === "string" || typeof item === "number");
            if (found.length > 0) {
              let tmp31 = globalThis;
              const _String = String;
              patternProperties.required = found.map(String);
            }
          }
        }
      }
    }
  }
  if ("draft-07" === io.target) {
    let tmp2 = _require;
    let tmp3 = dependencyMap;
    obj = { path: items2 };
    let tmp4 = obj;
    const processSchema = require("module_12236").processSchema;
    const keyType2 = def.keyType;
    const merged1 = Object.assign(path);
    items2 = [];
    const tmp7 = items2;
    items2[HermesBuiltin.arraySpread(items2, path.path, 0)] = "propertyNames";
    patternProperties.propertyNames = processSchema(keyType2, io, obj);
    let value = weakMap.get(io);
    const obj2 = weakMap;
    if (!value) {
      const items3 = [];
      let result = obj2.set(io, items3);
      const deferred = io.deferred;
      deferred.push(() => {
        function rewriteKeyNames(seen) {
          map = new Map();
          seen = seen.seen;
          const values = seen.values();
          for (const item10020 of values) {
            let tmp2 = item10020;
            let def = item10020.def;
            if (def) {
              def = !map.has(tmp2.schema);
            }
            if (def) {
              let result = map.set(tmp2.schema, tmp2);
            }
            continue;
          }
          map1 = new Map();
          let items1 = closure_1_24.get(seen);
          if (items1 == null) {
            items1 = [];
          }
          const tmp6 = items1[Symbol.iterator]();
          while (tmp6 !== undefined) {
            let seen2 = seen.seen;
            let value2 = seen2.get(tmp7);
            let tmp9 = value2;
            let def1;
            if (value2 != null) {
              def1 = value2.def;
            }
            if (def1 == null) {
              let schema;
              if (tmp9 != null) {
                schema = tmp9.schema;
              }
              def1 = schema;
            }
            let propertyNames;
            if (def1 != null) {
              propertyNames = def1.propertyNames;
            }
            let tmp14 = propertyNames;
            if (tmp14) {
              if (true !== tmp14) {
                if (!map1.has(tmp14)) {
                  let _Set = Set;
                  let self = this;
                  let self2 = this;
                  set = new Set();
                  let tmp21 = closure_1_23(map, tmp14, set);
                  if (tmp21 !== tmp14) {
                    let result1 = map1.set(tmp14, tmp22);
                  }
                }
              }
            }
            continue;
          }
          if (map1.size) {
            const seen3 = seen.seen;
            const values2 = seen3.values();
            for (const item10086 of values2) {
              let items = [, ];
              ({ schema: arr2[0], def: arr2[1] } = item10086);
              for (const item10094 of items) {
                let item10094;
                let tmp31 = item10094;
                if (tmp31) {
                  item10094 = map1.get(tmp31.propertyNames);
                }
                if (item10094) {
                  tmp31.propertyNames = tmp33;
                }
                continue;
              }
              continue;
            }
          }
        }
        rewriteKeyNames(io);
      });
      value = items3;
    }
    const arr2 = value.push(_zod);
  }
  const obj4 = { path: items4 };
  const processSchema2 = require("module_12236").processSchema;
  const valueType = def.valueType;
  const merged2 = Object.assign(path);
  items4 = [];
  items4[HermesBuiltin.arraySpread(items4, path.path, 0)] = "additionalProperties";
  patternProperties.additionalProperties = processSchema2(valueType, io, obj4);
};
export const nullableProcessor = (_zod, target, arg2, path) => {
  const def = _zod._zod.def;
  const processSchemaResult = _mod12236.processSchema(def.innerType, target, path);
  if ("openapi-3.0" === target.target) {
    tmp2.ref = def.innerType;
    arg2.nullable = true;
  } else {
    const items = [processSchemaResult, { type: "null" }];
    arg2.anyOf = items;
  }
};
export const nonoptionalProcessor = (_zod, seen, arg2, path) => {
  const def = _zod._zod.def;
  _mod12236.processSchema(def.innerType, seen, path);
  seen = seen.seen;
  seen.get(_zod).ref = def.innerType;
};
export const defaultProcessor = (_zod, seen, properties, path) => {
  let parsed;
  const def = _zod._zod.def;
  _mod12236.processSchema(def.innerType, seen, path);
  seen = seen.seen;
  seen.get(_zod).ref = def.innerType;
  let c0 = false;
  const tmp5 = c0;
  if (tmp5) {
    const result = _mod12236.handleUnrepresentable(_zod, seen, properties, path, "BigInt defaults cannot be represented in JSON Schema");
    parsed = closure_25;
  } else {
    const _JSON = JSON;
    parsed = JSON.parse(tmp4);
  }
  if (parsed !== closure_25) {
    properties.default = parsed;
  }
};
export const prefaultProcessor = (_zod, seen, properties, path) => {
  const def = _zod._zod.def;
  _mod12236.processSchema(def.innerType, seen, path);
  seen = seen.seen;
  seen.get(_zod).ref = def.innerType;
  if ("input" === seen.io) {
    let parsed;
    let c0 = false;
    const _JSON2 = JSON;
    const tmp14 = c0;
    if (tmp14) {
      const result = _mod12236.handleUnrepresentable(_zod, seen, properties, path, "BigInt defaults cannot be represented in JSON Schema");
      parsed = closure_25;
    } else {
      const _JSON = JSON;
      parsed = JSON.parse(tmp13);
    }
    if (parsed !== closure_25) {
      properties._prefault = parsed;
    }
  }
};
export const catchProcessor = (_zod, seen, properties, path) => {
  const def = _zod._zod.def;
  _mod12236.processSchema(def.innerType, seen, path);
  seen = seen.seen;
  seen.get(_zod).ref = def.innerType;
  try {
    properties.default = def.catchValue(undefined);
  } catch (err) {
    const result = _mod12236.handleUnrepresentable(_zod, seen, properties, path, "Dynamic catch values are not supported in JSON Schema");
  }
};
export const pipeProcessor = (_zod, io, arg2, path) => {
  let out;
  const def = _zod._zod.def;
  const traits = def.in._zod.traits;
  if ("input" === io.io) {
    out = traits.has("$ZodTransform") ? def.out : def.in;
  } else {
    out = def.out;
  }
  _mod12236.processSchema(out, io, path);
  const seen = io.seen;
  seen.get(_zod).ref = out;
};
export const readonlyProcessor = (_zod, seen, arg2, path) => {
  const def = _zod._zod.def;
  _mod12236.processSchema(def.innerType, seen, path);
  seen = seen.seen;
  seen.get(_zod).ref = def.innerType;
  arg2.readOnly = true;
};
export const promiseProcessor = (_zod, seen, arg2, path) => {
  const def = _zod._zod.def;
  _mod12236.processSchema(def.innerType, seen, path);
  seen = seen.seen;
  seen.get(_zod).ref = def.innerType;
};
export const optionalProcessor = (_zod, seen, arg2, path) => {
  const def = _zod._zod.def;
  _mod12236.processSchema(def.innerType, seen, path);
  seen = seen.seen;
  seen.get(_zod).ref = def.innerType;
};
export const lazyProcessor = (_zod, seen, arg2, path) => {
  const innerType = _zod._zod.innerType;
  _mod12236.processSchema(innerType, seen, path);
  seen = seen.seen;
  seen.get(_zod).ref = innerType;
};
export const allProcessors = { string: exports.stringProcessor, number: exports.numberProcessor, boolean: exports.booleanProcessor, bigint: exports.bigintProcessor, symbol: exports.symbolProcessor, null: exports.nullProcessor, undefined: exports.undefinedProcessor, void: exports.voidProcessor, never: exports.neverProcessor, any: exports.anyProcessor, unknown: exports.unknownProcessor, date: exports.dateProcessor, enum: exports.enumProcessor, literal: exports.literalProcessor, nan: exports.nanProcessor, template_literal: exports.templateLiteralProcessor, file: exports.fileProcessor, success: exports.successProcessor, custom: exports.customProcessor, function: exports.functionProcessor, transform: exports.transformProcessor, map: exports.mapProcessor, set: exports.setProcessor, array: exports.arrayProcessor, object: exports.objectProcessor, union: exports.unionProcessor, intersection: exports.intersectionProcessor, tuple: exports.tupleProcessor, record: exports.recordProcessor, nullable: exports.nullableProcessor, nonoptional: exports.nonoptionalProcessor, default: exports.defaultProcessor, prefault: exports.prefaultProcessor, catch: exports.catchProcessor, pipe: exports.pipeProcessor, readonly: exports.readonlyProcessor, promise: exports.promiseProcessor, optional: exports.optionalProcessor, lazy: exports.lazyProcessor };
