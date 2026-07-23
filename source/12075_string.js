// Module ID: 12075
// Function ID: 94170
// Name: string
// Dependencies: [5, 65, 12009, 12072, 12076, 12077, 12078, 12071]

// Module 12075 (string)
import asyncGeneratorStep from "module_12077";
import _toConsumableArray from "_toConsumableArray";

const self = this;
function string(message) {
  return closure_7._string(exports.ZodString, message);
}
function number(message) {
  return closure_7._number(exports.ZodNumber, message);
}
function int(message) {
  return closure_7._int(exports.ZodNumberFormat, message);
}
function boolean(message) {
  return closure_7._boolean(exports.ZodBoolean, message);
}
function _null(arg0) {
  return closure_7._null(exports.ZodNull, arg0);
}
function unknown() {
  return closure_7._unknown(exports.ZodUnknown);
}
function never(message) {
  return closure_7._never(exports.ZodNever, message);
}
function array(element, message) {
  return closure_7._array(exports.ZodArray, element, message);
}
function union(roles, added) {
  const util = require(12009).util;
  const zodUnion = new exports.ZodUnion(Object.assign({ type: "union", options: roles }, util.normalizeParams(added)));
  return zodUnion;
}
function intersection(arr, closure_6) {
  const zodIntersection = new exports.ZodIntersection({ type: "intersection", left: arr, right: closure_6 });
  return zodIntersection;
}
function tuple(mapped2, arg1, message) {
  let tmp2 = arg1;
  if (arg1 instanceof closure_7.$ZodType) {
    tmp2 = message;
  }
  let tmp3 = null;
  if (arg1 instanceof closure_7.$ZodType) {
    tmp3 = arg1;
  }
  const obj = { type: "tuple", items: mapped2, rest: tmp3 };
  const util = require(12009).util;
  const zodTuple = new exports.ZodTuple(Object.assign(obj, util.normalizeParams(tmp2)));
  return zodTuple;
}
function record(keyType, valueType, message) {
  const util = require(12009).util;
  const zodRecord = new exports.ZodRecord(Object.assign({ type: "record", keyType, valueType }, util.normalizeParams(message)));
  return zodRecord;
}
function _enum(arr, message) {
  let fromEntriesResult = arr;
  if (Array.isArray(arr)) {
    const _Object = Object;
    fromEntriesResult = Object.fromEntries(arr.map((arg0) => {
      const items = [arg0, arg0];
      return items;
    }));
  }
  const obj = { type: "enum", entries: fromEntriesResult };
  const util = require(12009).util;
  const zodEnum = new exports.ZodEnum(Object.assign(obj, util.normalizeParams(message)));
  return zodEnum;
}
function transform(transform) {
  const zodTransform = new exports.ZodTransform({ type: "transform", transform });
  return zodTransform;
}
function optional(innerType) {
  const zodOptional = new exports.ZodOptional({ type: "optional", innerType });
  return zodOptional;
}
function exactOptional(innerType) {
  const zodExactOptional = new exports.ZodExactOptional({ type: "optional", innerType });
  return zodExactOptional;
}
function nullable(innerType) {
  const zodNullable = new exports.ZodNullable({ type: "nullable", innerType });
  return zodNullable;
}
function _default(innerType) {
  let closure_0 = arg1;
  const obj = { type: "default", innerType };
  Object.defineProperty(obj, "defaultValue", {
    get: () => {
      if ("function" === typeof callback) {
        let shallowCloneResult = callback();
      } else {
        const util = callback(outer1_2[2]).util;
        shallowCloneResult = util.shallowClone(callback);
      }
      return shallowCloneResult;
    },
    set: undefined
  });
  const zodDefault = new exports.ZodDefault(obj);
  return zodDefault;
}
function prefault(innerType) {
  let closure_0 = arg1;
  const obj = { type: "prefault", innerType };
  Object.defineProperty(obj, "defaultValue", {
    get: () => {
      if ("function" === typeof callback) {
        let shallowCloneResult = callback();
      } else {
        const util = callback(outer1_2[2]).util;
        shallowCloneResult = util.shallowClone(callback);
      }
      return shallowCloneResult;
    },
    set: undefined
  });
  const zodPrefault = new exports.ZodPrefault(obj);
  return zodPrefault;
}
function nonoptional(innerType, message) {
  const util = require(12009).util;
  const zodNonOptional = new exports.ZodNonOptional(Object.assign({ type: "nonoptional", innerType }, util.normalizeParams(message)));
  return zodNonOptional;
}
function _catch(innerType) {
  let fn = arg1;
  let closure_0 = arg1;
  const obj = { type: "catch", innerType };
  if ("function" !== typeof arg1) {
    fn = () => closure_0;
  }
  obj.catchValue = fn;
  const zodCatch = new exports.ZodCatch(obj);
  return zodCatch;
}
function pipe(arg0, out) {
  const zodPipe = new exports.ZodPipe({ type: "pipe", in: arg0, out });
  return zodPipe;
}
function readonly(nullableResult) {
  const zodReadonly = new exports.ZodReadonly({ type: "readonly", innerType: nullableResult });
  return zodReadonly;
}
function lazy(importPromise) {
  const zodLazy = new exports.ZodLazy({ type: "lazy", getter: importPromise });
  return zodLazy;
}
function _function(input) {
  const obj = { type: "function" };
  input = undefined;
  if (null != input) {
    input = input.input;
  }
  if (Array.isArray(input)) {
    let input1;
    if (null != input) {
      input1 = input.input;
    }
    input = tuple(input1);
    const tmp5 = tuple;
  } else {
    input = undefined;
    if (null != input) {
      input = input.input;
    }
    if (null == input) {
      input = array(unknown());
    }
  }
  obj.input = input;
  let output;
  if (null != input) {
    output = input.output;
  }
  if (null == output) {
    output = unknown();
  }
  obj.output = output;
  const zodFunction = new exports.ZodFunction(obj);
  return zodFunction;
}
function refine(fn) {
  if (arguments.length > 1) {
    return closure_7._refine(exports.ZodCustom, fn, {});
  }
}
function superRefine(arg0) {
  return closure_7._superRefine(arg0);
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
    exports.ZodType = undefined;
    exports._ZodString = undefined;
    exports.ZodString = undefined;
    exports.ZodStringFormat = undefined;
    exports.ZodEmail = undefined;
    exports.ZodGUID = undefined;
    exports.ZodUUID = undefined;
    exports.ZodURL = undefined;
    exports.ZodEmoji = undefined;
    exports.ZodNanoID = undefined;
    exports.ZodCUID = undefined;
    exports.ZodCUID2 = undefined;
    exports.ZodULID = undefined;
    exports.ZodXID = undefined;
    exports.ZodKSUID = undefined;
    exports.ZodIPv4 = undefined;
    exports.ZodMAC = undefined;
    exports.ZodIPv6 = undefined;
    exports.ZodCIDRv4 = undefined;
    exports.ZodCIDRv6 = undefined;
    exports.ZodBase64 = undefined;
    exports.ZodBase64URL = undefined;
    exports.ZodE164 = undefined;
    exports.ZodJWT = undefined;
    exports.ZodCustomStringFormat = undefined;
    exports.ZodNumber = undefined;
    exports.ZodNumberFormat = undefined;
    exports.ZodBoolean = undefined;
    exports.ZodBigInt = undefined;
    exports.ZodBigIntFormat = undefined;
    exports.ZodSymbol = undefined;
    exports.ZodUndefined = undefined;
    exports.ZodNull = undefined;
    exports.ZodAny = undefined;
    exports.ZodUnknown = undefined;
    exports.ZodNever = undefined;
    exports.ZodVoid = undefined;
    exports.ZodDate = undefined;
    exports.ZodArray = undefined;
    exports.ZodObject = undefined;
    exports.ZodUnion = undefined;
    exports.ZodXor = undefined;
    exports.ZodDiscriminatedUnion = undefined;
    exports.ZodIntersection = undefined;
    exports.ZodTuple = undefined;
    exports.ZodRecord = undefined;
    exports.ZodMap = undefined;
    exports.ZodSet = undefined;
    exports.ZodEnum = undefined;
    exports.ZodLiteral = undefined;
    exports.ZodFile = undefined;
    exports.ZodTransform = undefined;
    exports.ZodOptional = undefined;
    exports.ZodExactOptional = undefined;
    exports.ZodNullable = undefined;
    exports.ZodDefault = undefined;
    exports.ZodPrefault = undefined;
    exports.ZodNonOptional = undefined;
    exports.ZodSuccess = undefined;
    exports.ZodCatch = undefined;
    exports.ZodNaN = undefined;
    exports.ZodPipe = undefined;
    exports.ZodCodec = undefined;
    exports.ZodReadonly = undefined;
    exports.ZodTemplateLiteral = undefined;
    exports.ZodLazy = undefined;
    exports.ZodPromise = undefined;
    exports.ZodFunction = undefined;
    exports.ZodCustom = undefined;
    exports.describe = undefined;
    exports.meta = undefined;
    exports.stringbool = undefined;
    exports.string = string;
    exports.email = function email(message) {
      return closure_7._email(exports.ZodEmail, message);
    };
    exports.guid = function guid(message) {
      return closure_7._guid(exports.ZodGUID, message);
    };
    exports.uuid = function uuid(message) {
      return closure_7._uuid(exports.ZodUUID, message);
    };
    exports.uuidv4 = function uuidv4(message) {
      return closure_7._uuidv4(exports.ZodUUID, message);
    };
    exports.uuidv6 = function uuidv6(message) {
      return closure_7._uuidv6(exports.ZodUUID, message);
    };
    exports.uuidv7 = function uuidv7(message) {
      return closure_7._uuidv7(exports.ZodUUID, message);
    };
    exports.url = function url(LinkIcon, url, lockIdentifier) {
      return closure_7._url(exports.ZodURL, LinkIcon);
    };
    exports.httpUrl = function httpUrl(message) {
      const util = require(12009).util;
      return closure_7._url(exports.ZodURL, Object.assign({ protocol: /^https?$/, hostname: closure_7.regexes.domain }, util.normalizeParams(message)));
    };
    exports.emoji = function emoji(message) {
      return closure_7._emoji(exports.ZodEmoji, message);
    };
    exports.nanoid = function nanoid(message) {
      return closure_7._nanoid(exports.ZodNanoID, message);
    };
    exports.cuid = function cuid(message) {
      return closure_7._cuid(exports.ZodCUID, message);
    };
    exports.cuid2 = function cuid2(message) {
      return closure_7._cuid2(exports.ZodCUID2, message);
    };
    exports.ulid = function ulid(message) {
      return closure_7._ulid(exports.ZodULID, message);
    };
    exports.xid = function xid(message) {
      return closure_7._xid(exports.ZodXID, message);
    };
    exports.ksuid = function ksuid(message) {
      return closure_7._ksuid(exports.ZodKSUID, message);
    };
    exports.ipv4 = function ipv4(message) {
      return closure_7._ipv4(exports.ZodIPv4, message);
    };
    exports.mac = function mac(message) {
      return closure_7._mac(exports.ZodMAC, message);
    };
    exports.ipv6 = function ipv6(message) {
      return closure_7._ipv6(exports.ZodIPv6, message);
    };
    exports.cidrv4 = function cidrv4(message) {
      return closure_7._cidrv4(exports.ZodCIDRv4, message);
    };
    exports.cidrv6 = function cidrv6(message) {
      return closure_7._cidrv6(exports.ZodCIDRv6, message);
    };
    exports.base64 = function base64(message) {
      return closure_7._base64(exports.ZodBase64, message);
    };
    exports.base64url = function base64url(message) {
      return closure_7._base64url(exports.ZodBase64URL, message);
    };
    exports.e164 = function e164(message) {
      return closure_7._e164(exports.ZodE164, message);
    };
    exports.jwt = function jwt(message) {
      return closure_7._jwt(exports.ZodJWT, message);
    };
    exports.stringFormat = function stringFormat(combined, hex) {
      if (arguments.length > 2) {
        if (undefined !== arguments[2]) {
          let obj = arguments[2];
        }
        return closure_7._stringFormat(exports.ZodCustomStringFormat, combined, hex, obj);
      }
      obj = {};
    };
    exports.hostname = function hostname(enc) {
      return closure_7._stringFormat(exports.ZodCustomStringFormat, "hostname", closure_7.regexes.hostname, enc);
    };
    exports.hex = function hex(enc) {
      return closure_7._stringFormat(exports.ZodCustomStringFormat, "hex", closure_7.regexes.hex, enc);
    };
    exports.hash = function hash(arg0, enc) {
      enc = undefined;
      if (null != enc) {
        enc = enc.enc;
      }
      let str = "hex";
      if (null != enc) {
        str = enc;
      }
      const combined = "" + arg0 + "_" + str;
      if (closure_7.regexes[combined]) {
        return closure_7._stringFormat(exports.ZodCustomStringFormat, combined, tmp3, enc);
      } else {
        const _Error = Error;
        const _HermesInternal = HermesInternal;
        const error = new Error("Unrecognized hash format: " + combined);
        throw error;
      }
    };
    exports.number = number;
    exports.int = int;
    exports.float32 = function float32(message) {
      return closure_7._float32(exports.ZodNumberFormat, message);
    };
    exports.float64 = function float64(message) {
      return closure_7._float64(exports.ZodNumberFormat, message);
    };
    exports.int32 = function int32(message) {
      return closure_7._int32(exports.ZodNumberFormat, message);
    };
    exports.uint32 = function uint32(message) {
      return closure_7._uint32(exports.ZodNumberFormat, message);
    };
    exports.boolean = boolean;
    exports.bigint = function bigint(message) {
      return closure_7._bigint(exports.ZodBigInt, message);
    };
    exports.int64 = function int64(message) {
      return closure_7._int64(exports.ZodBigIntFormat, message);
    };
    exports.uint64 = function uint64(message) {
      return closure_7._uint64(exports.ZodBigIntFormat, message);
    };
    exports.symbol = function symbol(message) {
      return closure_7._symbol(exports.ZodSymbol, message);
    };
    exports.undefined = function _undefined(arg0) {
      return closure_7._undefined(exports.ZodUndefined, arg0);
    };
    exports.null = _null;
    exports.any = function any() {
      return closure_7._any(exports.ZodAny);
    };
    exports.unknown = unknown;
    exports.never = never;
    exports.void = function _void(arg0) {
      return closure_7._void(exports.ZodVoid, arg0);
    };
    exports.date = function date(message) {
      return closure_7._date(exports.ZodDate, message);
    };
    exports.array = array;
    exports.keyof = function keyof(_zod) {
      return _enum(Object.keys(_zod._zod.def.shape));
    };
    exports.object = function object(arg0, message) {
      let obj = arg0;
      obj = { type: "object" };
      if (null == arg0) {
        obj = {};
      }
      obj.shape = obj;
      const util = require(12009).util;
      const zodObject = new exports.ZodObject(Object.assign(obj, util.normalizeParams(message)));
      return zodObject;
    };
    exports.strictObject = function strictObject(shape, message) {
      const util = require(12009).util;
      const zodObject = new exports.ZodObject(Object.assign({ type: "object", shape, catchall: never() }, util.normalizeParams(message)));
      return zodObject;
    };
    exports.looseObject = function looseObject(shape, message) {
      const util = require(12009).util;
      const zodObject = new exports.ZodObject(Object.assign({ type: "object", shape, catchall: unknown() }, util.normalizeParams(message)));
      return zodObject;
    };
    exports.union = union;
    exports.xor = function xor(options, message) {
      const obj = { type: "union", options, inclusive: false };
      const util = require(12009).util;
      const zodXor = new exports.ZodXor(Object.assign(obj, util.normalizeParams(message)));
      return zodXor;
    };
    exports.discriminatedUnion = function discriminatedUnion(discriminator, options, message) {
      const util = require(12009).util;
      const zodDiscriminatedUnion = new exports.ZodDiscriminatedUnion(Object.assign({ type: "union", options, discriminator }, util.normalizeParams(message)));
      return zodDiscriminatedUnion;
    };
    exports.intersection = intersection;
    exports.tuple = tuple;
    exports.record = record;
    exports.partialRecord = function partialRecord(z11, objectResult, message) {
      const cloneResult = closure_7.clone(z11);
      cloneResult._zod.values = undefined;
      const util = require(12009).util;
      const zodRecord = new exports.ZodRecord(Object.assign({ type: "record", keyType: cloneResult, valueType: objectResult }, util.normalizeParams(message)));
      return zodRecord;
    };
    exports.looseRecord = function looseRecord(stringResult1, anyResult, message) {
      const util = require(12009).util;
      const zodRecord = new exports.ZodRecord(Object.assign({ type: "record", keyType: stringResult1, valueType: anyResult, mode: "loose" }, util.normalizeParams(message)));
      return zodRecord;
    };
    exports.map = function map(keyType, valueType, message) {
      const util = require(12009).util;
      const zodMap = new exports.ZodMap(Object.assign({ type: "map", keyType, valueType }, util.normalizeParams(message)));
      return zodMap;
    };
    exports.set = function set(valueType, message) {
      const util = require(12009).util;
      const zodSet = new exports.ZodSet(Object.assign({ type: "set", valueType }, util.normalizeParams(message)));
      return zodSet;
    };
    exports.enum = _enum;
    exports.nativeEnum = function nativeEnum(entries, message) {
      const util = require(12009).util;
      const zodEnum = new exports.ZodEnum(Object.assign({ type: "enum", entries }, util.normalizeParams(message)));
      return zodEnum;
    };
    exports.literal = function literal(arg0, message) {
      const obj = { type: "literal" };
      let tmp = arg0;
      if (!Array.isArray(arg0)) {
        const items = [arg0];
        tmp = items;
      }
      obj.values = tmp;
      const util = require(12009).util;
      const zodLiteral = new exports.ZodLiteral(Object.assign(obj, util.normalizeParams(message)));
      return zodLiteral;
    };
    exports.file = function file(message) {
      return closure_7._file(exports.ZodFile, message);
    };
    exports.transform = transform;
    exports.optional = optional;
    exports.exactOptional = exactOptional;
    exports.nullable = nullable;
    exports.nullish = function nullish(innerType) {
      return optional(nullable(innerType));
    };
    exports._default = _default;
    exports.prefault = prefault;
    exports.nonoptional = nonoptional;
    exports.success = function success(innerType) {
      const zodSuccess = new exports.ZodSuccess({ type: "success", innerType });
      return zodSuccess;
    };
    exports.catch = _catch;
    exports.nan = function nan(message) {
      return closure_7._nan(exports.ZodNaN, message);
    };
    exports.pipe = pipe;
    exports.codec = function codec(arg0, out, decode) {
      const zodCodec = new exports.ZodCodec({ type: "pipe", in: arg0, out, transform: decode.decode, reverseTransform: decode.encode });
      return zodCodec;
    };
    exports.readonly = readonly;
    exports.templateLiteral = function templateLiteral(parts, message) {
      const util = require(12009).util;
      const zodTemplateLiteral = new exports.ZodTemplateLiteral(Object.assign({ type: "template_literal", parts }, util.normalizeParams(message)));
      return zodTemplateLiteral;
    };
    exports.lazy = lazy;
    exports.promise = function promise(innerType, arg1, dataAttributes) {
      return new exports.ZodPromise({ type: "promise", innerType });
    };
    exports._function = _function;
    exports.function = _function;
    exports._function = _function;
    exports.function = _function;
    exports.check = function check(check) {
      const ZodCheck = new closure_7.$ZodCheck({ check: "custom" });
      ZodCheck._zod.check = check;
      return ZodCheck;
    };
    exports.custom = function custom(arg0, message) {
      let fn = arg0;
      if (null == arg0) {
        fn = () => true;
      }
      return closure_7._custom(exports.ZodCustom, fn, message);
    };
    exports.refine = refine;
    exports.superRefine = superRefine;
    exports.instanceof = function _instanceof(Class) {
      const _require = Class;
      if (arguments.length > 1) {
        const ZodCustom = zodCustom.ZodCustom;
        const _Object = Object;
        let obj = {
          type: "custom",
          check: "custom",
          fn(prototype, _invoke, arg2, arg3) {
              return prototype instanceof closure_0;
            },
          abort: true
        };
        const util = _require(12009).util;
        const prototype = ZodCustom.prototype;
        zodCustom = new ZodCustom(Object.assign(obj, util.normalizeParams({})));
        zodCustom._zod.bag.Class = Class;
        zodCustom._zod.check = (value) => {
          if (!(value.value instanceof Class)) {
            const issues = value.issues;
            const obj = { code: "invalid_type", expected: Class.name, input: value.value, inst: zodCustom };
            let path = zodCustom._zod.def.path;
            if (null == path) {
              path = [];
            }
            obj.path = outer1_4(path);
            issues.push(obj);
            const tmp3 = outer1_4;
          }
        };
        return zodCustom;
      }
    };
    exports.json = function json(arg0) {
      let closure_0 = arg0;
      const tmp = lazy(() => {
        const items = [outer1_12(closure_0), outer1_13(), outer1_15(), outer1_16(), outer1_19(closure_1), outer1_23(outer1_12(), closure_1)];
        return outer1_20(items);
      });
      const exports = tmp;
      return tmp;
    };
    exports.preprocess = function preprocess(arg0, out) {
      return pipe(transform(arg0), out);
    };
    const fnResult = fn(require("module_12009"));
    let closure_8 = fn(require("stringProcessor"));
    let closure_9 = fn(require("module_12076"));
    let closure_10 = fn(require("module_12077"));
    let closure_11 = fn(require("module_12078"));
    exports.ZodType = fnResult.$constructor("ZodType", (_standard, def) => {
      const _require = _standard;
      let closure_1 = def;
      const $ZodType = closure_7.$ZodType;
      $ZodType.init(_standard, def);
      let obj = {};
      obj = { input: _require(12071).createStandardJSONSchemaMethod(_standard, "input"), output: _require(12071).createStandardJSONSchemaMethod(_standard, "output") };
      obj.jsonSchema = obj;
      const merged = Object.assign(_standard["~standard"], obj);
      _standard.toJSONSchema = _require(12071).createToJSONSchemaMethod(_standard, {});
      _standard.def = def;
      _standard.type = def.type;
      obj = { value: def };
      Object.defineProperty(_standard, "_def", obj);
      _standard.check = () => {
        const length = arguments.length;
        const arr = new Array(length);
        for (let num = 0; num < length; num = num + 1) {
          arr[num] = arguments[num];
        }
        const util = standard(outer1_2[2]).util;
        let obj = {};
        const items = [];
        let checks = def.checks;
        if (null == checks) {
          checks = [];
        }
        obj.checks = items.concat(outer1_4(checks), outer1_4(arr.map((check) => {
          let tmp = check;
          if ("function" === typeof check) {
            let obj = {};
            obj = { check };
            obj = { check: "custom" };
            obj.def = obj;
            obj.onattach = [];
            obj._zod = obj;
            tmp = obj;
          }
          return tmp;
        })));
        return standard.clone(util.mergeDefs(def, obj), { parent: true });
      };
      _standard.with = _standard.check;
      _standard.clone = (arg0, arg1) => outer1_7.clone(closure_0, arg0, arg1);
      _standard.brand = () => closure_0;
      _standard.register = (add) => {
        add.add(closure_0, arg1);
        return closure_0;
      };
      _standard.parse = (arg0, arg1) => outer1_11.parse(standard, arg0, arg1, { callee: standard.parse });
      _standard.safeParse = (arg0, arg1) => outer1_11.safeParse(closure_0, arg0, arg1);
      _standard.parseAsync = (() => {
        // CreateGeneratorClosureLongIndex (0x67)
        let closure_0 = outer1_3(tmp);
        return function(arg0, arg1) {
          return callback(...arguments);
        };
      })();
      _standard.safeParseAsync = (() => {
        // CreateGeneratorClosureLongIndex (0x67)
        let closure_0 = outer1_3(tmp);
        return function(arg0, arg1) {
          return callback(...arguments);
        };
      })();
      _standard.spa = _standard.safeParseAsync;
      _standard.encode = (arg0, arg1) => outer1_11.encode(closure_0, arg0, arg1);
      _standard.decode = (arg0, arg1) => outer1_11.decode(closure_0, arg0, arg1);
      _standard.encodeAsync = (() => {
        // CreateGeneratorClosureLongIndex (0x67)
        let closure_0 = outer1_3(tmp);
        return function(arg0, arg1) {
          return callback(...arguments);
        };
      })();
      _standard.decodeAsync = (() => {
        // CreateGeneratorClosureLongIndex (0x67)
        let closure_0 = outer1_3(tmp);
        return function(arg0, arg1) {
          return callback(...arguments);
        };
      })();
      _standard.safeEncode = (arg0, arg1) => outer1_11.safeEncode(closure_0, arg0, arg1);
      _standard.safeDecode = (arg0, arg1) => outer1_11.safeDecode(closure_0, arg0, arg1);
      _standard.safeEncodeAsync = (() => {
        // CreateGeneratorClosureLongIndex (0x67)
        let closure_0 = outer1_3(tmp);
        return function(arg0, arg1) {
          return callback(...arguments);
        };
      })();
      _standard.safeDecodeAsync = (() => {
        // CreateGeneratorClosureLongIndex (0x67)
        let closure_0 = outer1_3(tmp);
        return function(arg0, arg1) {
          return callback(...arguments);
        };
      })();
      _standard.refine = (arg0, arg1) => standard.check(outer1_36(arg0, arg1));
      _standard.superRefine = (arg0) => standard.check(outer1_37(arg0));
      _standard.overwrite = (arg0) => standard.check(outer1_9.overwrite(arg0));
      _standard.optional = () => outer1_26(closure_0);
      _standard.exactOptional = () => outer1_27(closure_0);
      _standard.nullable = () => outer1_28(closure_0);
      _standard.nullish = () => outer1_26(outer1_28(closure_0));
      _standard.nonoptional = (arg0) => outer1_31(closure_0, arg0);
      _standard.array = () => outer1_19(closure_0);
      _standard.or = (arg0) => {
        const items = [closure_0, arg0];
        return outer1_20(items);
      };
      _standard.and = (arg0) => outer1_21(closure_0, arg0);
      _standard.transform = (arg0) => outer1_33(closure_0, outer1_25(arg0));
      _standard.default = (arg0) => outer1_29(closure_0, arg0);
      _standard.prefault = (arg0) => outer1_30(closure_0, arg0);
      _standard.catch = (arg0) => outer1_32(closure_0, arg0);
      _standard.pipe = (arg0) => outer1_33(closure_0, arg0);
      _standard.readonly = () => outer1_34(closure_0);
      _standard.describe = (description) => {
        const cloneResult = standard.clone();
        const globalRegistry = outer1_7.globalRegistry;
        globalRegistry.add(cloneResult, { description });
        return cloneResult;
      };
      Object.defineProperty(_standard, "description", {
        get() {
          const globalRegistry = outer1_7.globalRegistry;
          const value = globalRegistry.get(closure_0);
          let description;
          if (null != value) {
            description = value.description;
          }
          return description;
        },
        configurable: true
      });
      _standard.meta = () => {
        if (0 === arguments.length) {
          const globalRegistry2 = outer1_7.globalRegistry;
          return globalRegistry2.get(standard);
        } else {
          const cloneResult = standard.clone();
          const globalRegistry = outer1_7.globalRegistry;
          let first;
          if (arguments.length > 0) {
            first = arguments[0];
          }
          globalRegistry.add(cloneResult, first);
          return cloneResult;
        }
      };
      _standard.isOptional = () => standard.safeParse(undefined).success;
      _standard.isNullable = () => standard.safeParse(null).success;
      _standard.apply = (arg0) => arg0(closure_0);
      return _standard;
    });
    exports._ZodString = fnResult.$constructor("_ZodString", (_zod) => {
      let closure_0 = _zod;
      const $ZodString = closure_7.$ZodString;
      $ZodString.init(_zod, arg1);
      const ZodType = exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (arg0, format) => outer1_8.stringProcessor(closure_0, arg0, format, arg2);
      const bag = _zod._zod.bag;
      const format = bag.format;
      let tmp3 = null;
      if (null != format) {
        tmp3 = format;
      }
      _zod.format = tmp3;
      const minimum = bag.minimum;
      let tmp4 = null;
      if (null != minimum) {
        tmp4 = minimum;
      }
      _zod.minLength = tmp4;
      const maximum = bag.maximum;
      let tmp5 = null;
      if (null != maximum) {
        tmp5 = maximum;
      }
      _zod.maxLength = tmp5;
      _zod.regex = () => {
        const regex = outer1_9.regex;
        return _zod.check(regex(...arguments));
      };
      _zod.includes = () => {
        const includes = outer1_9.includes;
        return _zod.check(includes(...arguments));
      };
      _zod.startsWith = () => {
        const startsWith = outer1_9.startsWith;
        return _zod.check(startsWith(...arguments));
      };
      _zod.endsWith = () => {
        const endsWith = outer1_9.endsWith;
        return _zod.check(endsWith(...arguments));
      };
      _zod.min = () => {
        const minLength = outer1_9.minLength;
        return _zod.check(minLength(...arguments));
      };
      _zod.max = () => {
        const maxLength = outer1_9.maxLength;
        return _zod.check(maxLength(...arguments));
      };
      _zod.length = () => _zod.check(outer1_9.length(...arguments));
      _zod.nonempty = () => {
        const length = arguments.length;
        const array = new Array(length);
        for (let num = 0; num < length; num = num + 1) {
          array[num] = arguments[num];
        }
        const minLength = outer1_9.minLength;
        const items = [1];
        return _zod.check(minLength.apply(outer1_9, items.concat(array)));
      };
      _zod.lowercase = (arg0) => _zod.check(outer1_9.lowercase(arg0));
      _zod.uppercase = (arg0) => _zod.check(outer1_9.uppercase(arg0));
      _zod.trim = () => _zod.check(outer1_9.trim());
      _zod.normalize = () => {
        const normalize = outer1_9.normalize;
        return _zod.check(normalize(...arguments));
      };
      _zod.toLowerCase = () => _zod.check(outer1_9.toLowerCase());
      _zod.toUpperCase = () => _zod.check(outer1_9.toUpperCase());
      _zod.slugify = () => _zod.check(outer1_9.slugify());
    });
    exports.ZodString = fnResult.$constructor("ZodString", (arg0, arg1) => {
      let closure_0 = arg0;
      const $ZodString = closure_7.$ZodString;
      $ZodString.init(arg0, arg1);
      const _ZodString = exports._ZodString;
      _ZodString.init(arg0, arg1);
      arg0.email = (message) => closure_0.check(outer1_7._email(outer1_1.ZodEmail, message));
      arg0.url = (LinkIcon) => closure_0.check(outer1_7._url(outer1_1.ZodURL, LinkIcon));
      arg0.jwt = (message) => closure_0.check(outer1_7._jwt(outer1_1.ZodJWT, message));
      arg0.emoji = (message) => closure_0.check(outer1_7._emoji(outer1_1.ZodEmoji, message));
      arg0.guid = (message) => closure_0.check(outer1_7._guid(outer1_1.ZodGUID, message));
      arg0.uuid = (message) => closure_0.check(outer1_7._uuid(outer1_1.ZodUUID, message));
      arg0.uuidv4 = (message) => closure_0.check(outer1_7._uuidv4(outer1_1.ZodUUID, message));
      arg0.uuidv6 = (message) => closure_0.check(outer1_7._uuidv6(outer1_1.ZodUUID, message));
      arg0.uuidv7 = (message) => closure_0.check(outer1_7._uuidv7(outer1_1.ZodUUID, message));
      arg0.nanoid = (message) => closure_0.check(outer1_7._nanoid(outer1_1.ZodNanoID, message));
      arg0.guid = (message) => closure_0.check(outer1_7._guid(outer1_1.ZodGUID, message));
      arg0.cuid = (message) => closure_0.check(outer1_7._cuid(outer1_1.ZodCUID, message));
      arg0.cuid2 = (message) => closure_0.check(outer1_7._cuid2(outer1_1.ZodCUID2, message));
      arg0.ulid = (message) => closure_0.check(outer1_7._ulid(outer1_1.ZodULID, message));
      arg0.base64 = (message) => closure_0.check(outer1_7._base64(outer1_1.ZodBase64, message));
      arg0.base64url = (message) => closure_0.check(outer1_7._base64url(outer1_1.ZodBase64URL, message));
      arg0.xid = (message) => closure_0.check(outer1_7._xid(outer1_1.ZodXID, message));
      arg0.ksuid = (message) => closure_0.check(outer1_7._ksuid(outer1_1.ZodKSUID, message));
      arg0.ipv4 = (message) => closure_0.check(outer1_7._ipv4(outer1_1.ZodIPv4, message));
      arg0.ipv6 = (message) => closure_0.check(outer1_7._ipv6(outer1_1.ZodIPv6, message));
      arg0.cidrv4 = (message) => closure_0.check(outer1_7._cidrv4(outer1_1.ZodCIDRv4, message));
      arg0.cidrv6 = (message) => closure_0.check(outer1_7._cidrv6(outer1_1.ZodCIDRv6, message));
      arg0.e164 = (message) => closure_0.check(outer1_7._e164(outer1_1.ZodE164, message));
      arg0.datetime = (arg0) => closure_0.check(outer1_10.datetime(arg0));
      arg0.date = (arg0) => closure_0.check(outer1_10.date(arg0));
      arg0.time = (arg0) => closure_0.check(outer1_10.time(arg0));
      arg0.duration = (arg0) => closure_0.check(outer1_10.duration(arg0));
    });
    exports.ZodStringFormat = fnResult.$constructor("ZodStringFormat", (arg0, arg1) => {
      const $ZodStringFormat = closure_7.$ZodStringFormat;
      $ZodStringFormat.init(arg0, arg1);
      const _ZodString = exports._ZodString;
      _ZodString.init(arg0, arg1);
    });
    exports.ZodEmail = fnResult.$constructor("ZodEmail", (arg0, arg1) => {
      const $ZodEmail = closure_7.$ZodEmail;
      $ZodEmail.init(arg0, arg1);
      const ZodStringFormat = exports.ZodStringFormat;
      ZodStringFormat.init(arg0, arg1);
    });
    exports.ZodGUID = fnResult.$constructor("ZodGUID", (arg0, arg1) => {
      const $ZodGUID = closure_7.$ZodGUID;
      $ZodGUID.init(arg0, arg1);
      const ZodStringFormat = exports.ZodStringFormat;
      ZodStringFormat.init(arg0, arg1);
    });
    exports.ZodUUID = fnResult.$constructor("ZodUUID", (arg0, arg1) => {
      const $ZodUUID = closure_7.$ZodUUID;
      $ZodUUID.init(arg0, arg1);
      const ZodStringFormat = exports.ZodStringFormat;
      ZodStringFormat.init(arg0, arg1);
    });
    exports.ZodURL = fnResult.$constructor("ZodURL", (arg0, arg1) => {
      const $ZodURL = closure_7.$ZodURL;
      $ZodURL.init(arg0, arg1);
      const ZodStringFormat = exports.ZodStringFormat;
      ZodStringFormat.init(arg0, arg1);
    });
    exports.ZodEmoji = fnResult.$constructor("ZodEmoji", (arg0, arg1) => {
      const $ZodEmoji = closure_7.$ZodEmoji;
      $ZodEmoji.init(arg0, arg1);
      const ZodStringFormat = exports.ZodStringFormat;
      ZodStringFormat.init(arg0, arg1);
    });
    exports.ZodNanoID = fnResult.$constructor("ZodNanoID", (arg0, arg1) => {
      const $ZodNanoID = closure_7.$ZodNanoID;
      $ZodNanoID.init(arg0, arg1);
      const ZodStringFormat = exports.ZodStringFormat;
      ZodStringFormat.init(arg0, arg1);
    });
    exports.ZodCUID = fnResult.$constructor("ZodCUID", (arg0, arg1) => {
      const $ZodCUID = closure_7.$ZodCUID;
      $ZodCUID.init(arg0, arg1);
      const ZodStringFormat = exports.ZodStringFormat;
      ZodStringFormat.init(arg0, arg1);
    });
    exports.ZodCUID2 = fnResult.$constructor("ZodCUID2", (arg0, arg1) => {
      const $ZodCUID2 = closure_7.$ZodCUID2;
      $ZodCUID2.init(arg0, arg1);
      const ZodStringFormat = exports.ZodStringFormat;
      ZodStringFormat.init(arg0, arg1);
    });
    exports.ZodULID = fnResult.$constructor("ZodULID", (arg0, arg1) => {
      const $ZodULID = closure_7.$ZodULID;
      $ZodULID.init(arg0, arg1);
      const ZodStringFormat = exports.ZodStringFormat;
      ZodStringFormat.init(arg0, arg1);
    });
    exports.ZodXID = fnResult.$constructor("ZodXID", (arg0, arg1) => {
      const $ZodXID = closure_7.$ZodXID;
      $ZodXID.init(arg0, arg1);
      const ZodStringFormat = exports.ZodStringFormat;
      ZodStringFormat.init(arg0, arg1);
    });
    exports.ZodKSUID = fnResult.$constructor("ZodKSUID", (arg0, arg1) => {
      const $ZodKSUID = closure_7.$ZodKSUID;
      $ZodKSUID.init(arg0, arg1);
      const ZodStringFormat = exports.ZodStringFormat;
      ZodStringFormat.init(arg0, arg1);
    });
    exports.ZodIPv4 = fnResult.$constructor("ZodIPv4", (arg0, arg1) => {
      const $ZodIPv4 = closure_7.$ZodIPv4;
      $ZodIPv4.init(arg0, arg1);
      const ZodStringFormat = exports.ZodStringFormat;
      ZodStringFormat.init(arg0, arg1);
    });
    exports.ZodMAC = fnResult.$constructor("ZodMAC", (arg0, arg1) => {
      const $ZodMAC = closure_7.$ZodMAC;
      $ZodMAC.init(arg0, arg1);
      const ZodStringFormat = exports.ZodStringFormat;
      ZodStringFormat.init(arg0, arg1);
    });
    exports.ZodIPv6 = fnResult.$constructor("ZodIPv6", (arg0, arg1) => {
      const $ZodIPv6 = closure_7.$ZodIPv6;
      $ZodIPv6.init(arg0, arg1);
      const ZodStringFormat = exports.ZodStringFormat;
      ZodStringFormat.init(arg0, arg1);
    });
    exports.ZodCIDRv4 = fnResult.$constructor("ZodCIDRv4", (arg0, arg1) => {
      const $ZodCIDRv4 = closure_7.$ZodCIDRv4;
      $ZodCIDRv4.init(arg0, arg1);
      const ZodStringFormat = exports.ZodStringFormat;
      ZodStringFormat.init(arg0, arg1);
    });
    exports.ZodCIDRv6 = fnResult.$constructor("ZodCIDRv6", (arg0, arg1) => {
      const $ZodCIDRv6 = closure_7.$ZodCIDRv6;
      $ZodCIDRv6.init(arg0, arg1);
      const ZodStringFormat = exports.ZodStringFormat;
      ZodStringFormat.init(arg0, arg1);
    });
    exports.ZodBase64 = fnResult.$constructor("ZodBase64", (arg0, arg1) => {
      const $ZodBase64 = closure_7.$ZodBase64;
      $ZodBase64.init(arg0, arg1);
      const ZodStringFormat = exports.ZodStringFormat;
      ZodStringFormat.init(arg0, arg1);
    });
    exports.ZodBase64URL = fnResult.$constructor("ZodBase64URL", (arg0, arg1) => {
      const $ZodBase64URL = closure_7.$ZodBase64URL;
      $ZodBase64URL.init(arg0, arg1);
      const ZodStringFormat = exports.ZodStringFormat;
      ZodStringFormat.init(arg0, arg1);
    });
    exports.ZodE164 = fnResult.$constructor("ZodE164", (arg0, arg1) => {
      const $ZodE164 = closure_7.$ZodE164;
      $ZodE164.init(arg0, arg1);
      const ZodStringFormat = exports.ZodStringFormat;
      ZodStringFormat.init(arg0, arg1);
    });
    exports.ZodJWT = fnResult.$constructor("ZodJWT", (arg0, arg1) => {
      const $ZodJWT = closure_7.$ZodJWT;
      $ZodJWT.init(arg0, arg1);
      const ZodStringFormat = exports.ZodStringFormat;
      ZodStringFormat.init(arg0, arg1);
    });
    exports.ZodCustomStringFormat = fnResult.$constructor("ZodCustomStringFormat", (arg0, arg1) => {
      const $ZodCustomStringFormat = closure_7.$ZodCustomStringFormat;
      $ZodCustomStringFormat.init(arg0, arg1);
      const ZodStringFormat = exports.ZodStringFormat;
      ZodStringFormat.init(arg0, arg1);
    });
    exports.ZodNumber = fnResult.$constructor("ZodNumber", (_zod) => {
      let closure_0 = _zod;
      const $ZodNumber = closure_7.$ZodNumber;
      $ZodNumber.init(_zod, arg1);
      const ZodType = exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (target) => outer1_8.numberProcessor(closure_0, target, arg1, arg2);
      _zod.gt = (arg0, arg1) => _zod.check(outer1_9.gt(arg0, arg1));
      _zod.gte = (arg0, arg1) => _zod.check(outer1_9.gte(arg0, arg1));
      _zod.min = (arg0, arg1) => _zod.check(outer1_9.gte(arg0, arg1));
      _zod.lt = (arg0, arg1) => _zod.check(outer1_9.lt(arg0, arg1));
      _zod.lte = (arg0, arg1) => _zod.check(outer1_9.lte(arg0, arg1));
      _zod.max = (arg0, arg1) => _zod.check(outer1_9.lte(arg0, arg1));
      _zod.int = (arg0) => _zod.check(outer1_14(arg0));
      _zod.safe = (arg0) => _zod.check(outer1_14(arg0));
      _zod.positive = (arg0) => _zod.check(outer1_9.gt(0, arg0));
      _zod.nonnegative = (arg0) => _zod.check(outer1_9.gte(0, arg0));
      _zod.negative = (arg0) => _zod.check(outer1_9.lt(0, arg0));
      _zod.nonpositive = (arg0) => _zod.check(outer1_9.lte(0, arg0));
      _zod.multipleOf = (arg0, arg1) => _zod.check(outer1_9.multipleOf(arg0, arg1));
      _zod.step = (arg0, arg1) => _zod.check(outer1_9.multipleOf(arg0, arg1));
      _zod.finite = () => closure_0;
      const bag = _zod._zod.bag;
      let NEGATIVE_INFINITY = bag.minimum;
      if (null == NEGATIVE_INFINITY) {
        const _Number = Number;
        NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;
      }
      let NEGATIVE_INFINITY2 = bag.exclusiveMinimum;
      if (null == NEGATIVE_INFINITY2) {
        const _Number2 = Number;
        NEGATIVE_INFINITY2 = Number.NEGATIVE_INFINITY;
      }
      const bound = Math.max(NEGATIVE_INFINITY, NEGATIVE_INFINITY2);
      let tmp4 = null;
      if (null != bound) {
        tmp4 = bound;
      }
      _zod.minValue = tmp4;
      let POSITIVE_INFINITY = bag.maximum;
      if (null == POSITIVE_INFINITY) {
        const _Number3 = Number;
        POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
      }
      let POSITIVE_INFINITY2 = bag.exclusiveMaximum;
      if (null == POSITIVE_INFINITY2) {
        const _Number4 = Number;
        POSITIVE_INFINITY2 = Number.POSITIVE_INFINITY;
      }
      const bound1 = Math.min(POSITIVE_INFINITY, POSITIVE_INFINITY2);
      let tmp6 = null;
      if (null != bound1) {
        tmp6 = bound1;
      }
      _zod.maxValue = tmp6;
      const format = bag.format;
      let str = "";
      if (null != format) {
        str = format;
      }
      let hasItem = str.includes("int");
      if (!hasItem) {
        const multipleOf = bag.multipleOf;
        let num = 0.5;
        if (null != multipleOf) {
          num = multipleOf;
        }
        hasItem = Number.isSafeInteger(num);
      }
      _zod.isInt = hasItem;
      _zod.isFinite = true;
      const format2 = bag.format;
      let tmp8 = null;
      if (null != format2) {
        tmp8 = format2;
      }
      _zod.format = tmp8;
    });
    exports.ZodNumberFormat = fnResult.$constructor("ZodNumberFormat", (arg0, arg1) => {
      const $ZodNumberFormat = closure_7.$ZodNumberFormat;
      $ZodNumberFormat.init(arg0, arg1);
      const ZodNumber = exports.ZodNumber;
      ZodNumber.init(arg0, arg1);
    });
    exports.ZodBoolean = fnResult.$constructor("ZodBoolean", (_zod) => {
      let closure_0 = _zod;
      const $ZodBoolean = closure_7.$ZodBoolean;
      $ZodBoolean.init(_zod, arg1);
      const ZodType = exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (arg0, arg1, arg2) => outer1_8.booleanProcessor(closure_0, arg0, arg1, arg2);
    });
    exports.ZodBigInt = fnResult.$constructor("ZodBigInt", (_zod) => {
      let closure_0 = _zod;
      const $ZodBigInt = closure_7.$ZodBigInt;
      $ZodBigInt.init(_zod, arg1);
      const ZodType = exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (unrepresentable) => outer1_8.bigintProcessor(closure_0, unrepresentable, arg1, arg2);
      _zod.gte = (arg0, arg1) => _zod.check(outer1_9.gte(arg0, arg1));
      _zod.min = (arg0, arg1) => _zod.check(outer1_9.gte(arg0, arg1));
      _zod.gt = (arg0, arg1) => _zod.check(outer1_9.gt(arg0, arg1));
      _zod.gte = (arg0, arg1) => _zod.check(outer1_9.gte(arg0, arg1));
      _zod.min = (arg0, arg1) => _zod.check(outer1_9.gte(arg0, arg1));
      _zod.lt = (arg0, arg1) => _zod.check(outer1_9.lt(arg0, arg1));
      _zod.lte = (arg0, arg1) => _zod.check(outer1_9.lte(arg0, arg1));
      _zod.max = (arg0, arg1) => _zod.check(outer1_9.lte(arg0, arg1));
      _zod.positive = (arg0) => _zod.check(outer1_9.gt(BigInt(0), arg0));
      _zod.negative = (arg0) => _zod.check(outer1_9.lt(BigInt(0), arg0));
      _zod.nonpositive = (arg0) => _zod.check(outer1_9.lte(BigInt(0), arg0));
      _zod.nonnegative = (arg0) => _zod.check(outer1_9.gte(BigInt(0), arg0));
      _zod.multipleOf = (arg0, arg1) => _zod.check(outer1_9.multipleOf(arg0, arg1));
      const bag = _zod._zod.bag;
      const minimum = bag.minimum;
      let tmp3 = null;
      if (null != minimum) {
        tmp3 = minimum;
      }
      _zod.minValue = tmp3;
      const maximum = bag.maximum;
      let tmp4 = null;
      if (null != maximum) {
        tmp4 = maximum;
      }
      _zod.maxValue = tmp4;
      const format = bag.format;
      let tmp5 = null;
      if (null != format) {
        tmp5 = format;
      }
      _zod.format = tmp5;
    });
    exports.ZodBigIntFormat = fnResult.$constructor("ZodBigIntFormat", (arg0, arg1) => {
      const $ZodBigIntFormat = closure_7.$ZodBigIntFormat;
      $ZodBigIntFormat.init(arg0, arg1);
      const ZodBigInt = exports.ZodBigInt;
      ZodBigInt.init(arg0, arg1);
    });
    exports.ZodSymbol = fnResult.$constructor("ZodSymbol", (_zod) => {
      let closure_0 = _zod;
      const $ZodSymbol = closure_7.$ZodSymbol;
      $ZodSymbol.init(_zod, arg1);
      const ZodType = exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (unrepresentable) => outer1_8.symbolProcessor(closure_0, unrepresentable, arg1, arg2);
    });
    exports.ZodUndefined = fnResult.$constructor("ZodUndefined", (_zod) => {
      let closure_0 = _zod;
      const $ZodUndefined = closure_7.$ZodUndefined;
      $ZodUndefined.init(_zod, arg1);
      const ZodType = exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (unrepresentable) => outer1_8.undefinedProcessor(closure_0, unrepresentable, arg1, arg2);
    });
    exports.ZodNull = fnResult.$constructor("ZodNull", (_zod) => {
      let closure_0 = _zod;
      const $ZodNull = closure_7.$ZodNull;
      $ZodNull.init(_zod, arg1);
      const ZodType = exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (target) => outer1_8.nullProcessor(closure_0, target, arg1, arg2);
    });
    exports.ZodAny = fnResult.$constructor("ZodAny", (_zod) => {
      let closure_0 = _zod;
      const $ZodAny = closure_7.$ZodAny;
      $ZodAny.init(_zod, arg1);
      const ZodType = exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (arg0, arg1, arg2) => outer1_8.anyProcessor(closure_0, arg0, arg1, arg2);
    });
    exports.ZodUnknown = fnResult.$constructor("ZodUnknown", (_zod) => {
      let closure_0 = _zod;
      const $ZodUnknown = closure_7.$ZodUnknown;
      $ZodUnknown.init(_zod, arg1);
      const ZodType = exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (arg0, arg1, arg2) => outer1_8.unknownProcessor(closure_0, arg0, arg1, arg2);
    });
    exports.ZodNever = fnResult.$constructor("ZodNever", (_zod) => {
      let closure_0 = _zod;
      const $ZodNever = closure_7.$ZodNever;
      $ZodNever.init(_zod, arg1);
      const ZodType = exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (arg0, arg1, arg2) => outer1_8.neverProcessor(closure_0, arg0, arg1, arg2);
    });
    exports.ZodVoid = fnResult.$constructor("ZodVoid", (_zod) => {
      let closure_0 = _zod;
      const $ZodVoid = closure_7.$ZodVoid;
      $ZodVoid.init(_zod, arg1);
      const ZodType = exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (unrepresentable) => outer1_8.voidProcessor(closure_0, unrepresentable, arg1, arg2);
    });
    exports.ZodDate = fnResult.$constructor("ZodDate", (_zod) => {
      let closure_0 = _zod;
      const $ZodDate = closure_7.$ZodDate;
      $ZodDate.init(_zod, arg1);
      const ZodType = exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (unrepresentable) => outer1_8.dateProcessor(closure_0, unrepresentable, arg1, arg2);
      _zod.min = (arg0, arg1) => _zod.check(outer1_9.gte(arg0, arg1));
      _zod.max = (arg0, arg1) => _zod.check(outer1_9.lte(arg0, arg1));
      const bag = _zod._zod.bag;
      let date = null;
      if (bag.minimum) {
        const _Date = Date;
        date = new Date(bag.minimum);
      }
      _zod.minDate = date;
      let date1 = null;
      if (bag.maximum) {
        const _Date2 = Date;
        date1 = new Date(bag.maximum);
      }
      _zod.maxDate = date1;
    });
    exports.ZodArray = fnResult.$constructor("ZodArray", (_zod, element) => {
      let closure_0 = _zod;
      const $ZodArray = closure_7.$ZodArray;
      $ZodArray.init(_zod, element);
      const ZodType = exports.ZodType;
      ZodType.init(_zod, element);
      _zod._zod.processJSONSchema = (arg0, arg1, path) => outer1_8.arrayProcessor(closure_0, arg0, arg1, path);
      _zod.element = element.element;
      _zod.min = (minItems) => _zod.check(outer1_9.minLength(minItems, arg1));
      _zod.nonempty = (arg0) => _zod.check(outer1_9.minLength(1, arg0));
      _zod.max = (maxItems) => _zod.check(outer1_9.maxLength(maxItems, arg1));
      _zod.length = (arg0, arg1) => _zod.check(outer1_9.length(arg0, arg1));
      _zod.unwrap = () => _zod.element;
    });
    exports.ZodObject = fnResult.$constructor("ZodObject", (_zod) => {
      const _require = _zod;
      const _exports = arg1;
      const $ZodObjectJIT = closure_7.$ZodObjectJIT;
      $ZodObjectJIT.init(_zod, arg1);
      const ZodType = _exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (io, properties, path) => outer1_8.objectProcessor(closure_0, io, properties, path);
      let util = _require(12009).util;
      util.defineLazy(_zod, "shape", () => closure_1.shape);
      _zod.keyof = () => outer1_24(Object.keys(_zod._zod.def.shape));
      _zod.catchall = (catchall) => _zod.clone(Object.assign({}, _zod._zod.def, { catchall }));
      _zod.passthrough = () => _zod.clone(Object.assign({}, _zod._zod.def, { catchall: outer1_17() }));
      _zod.loose = () => _zod.clone(Object.assign({}, _zod._zod.def, { catchall: outer1_17() }));
      _zod.strict = () => _zod.clone(Object.assign({}, _zod._zod.def, { catchall: outer1_18() }));
      _zod.strip = () => _zod.clone(Object.assign({}, _zod._zod.def, { catchall: undefined }));
      _zod.extend = (arg0) => {
        const util = _zod(outer1_2[2]).util;
        return util.extend(_zod, arg0);
      };
      _zod.safeExtend = (arg0) => {
        const util = _zod(outer1_2[2]).util;
        return util.safeExtend(_zod, arg0);
      };
      _zod.merge = (arg0) => {
        const util = _zod(outer1_2[2]).util;
        return util.merge(_zod, arg0);
      };
      _zod.pick = (arg0) => {
        const util = _zod(outer1_2[2]).util;
        return util.pick(_zod, arg0);
      };
      _zod.omit = (closure_3) => {
        const util = _zod(outer1_2[2]).util;
        return util.omit(_zod, closure_3);
      };
      _zod.partial = () => {
        let first;
        const util = _zod(outer1_2[2]).util;
        if (arguments.length > 0) {
          first = arguments[0];
        }
        return util.partial(closure_1.ZodOptional, _zod, first);
      };
      _zod.required = () => {
        let first;
        const util = _zod(outer1_2[2]).util;
        if (arguments.length > 0) {
          first = arguments[0];
        }
        return util.required(closure_1.ZodNonOptional, _zod, first);
      };
    });
    exports.ZodUnion = fnResult.$constructor("ZodUnion", (_zod, options) => {
      let closure_0 = _zod;
      const $ZodUnion = closure_7.$ZodUnion;
      $ZodUnion.init(_zod, options);
      const ZodType = exports.ZodType;
      ZodType.init(_zod, options);
      _zod._zod.processJSONSchema = (arg0, arg1, arg2) => outer1_8.unionProcessor(closure_0, arg0, arg1, arg2);
      _zod.options = options.options;
    });
    exports.ZodXor = fnResult.$constructor("ZodXor", (_zod, options) => {
      let closure_0 = _zod;
      const ZodUnion = exports.ZodUnion;
      ZodUnion.init(_zod, options);
      const $ZodXor = closure_7.$ZodXor;
      $ZodXor.init(_zod, options);
      _zod._zod.processJSONSchema = (arg0, arg1, arg2) => outer1_8.unionProcessor(closure_0, arg0, arg1, arg2);
      _zod.options = options.options;
    });
    exports.ZodDiscriminatedUnion = fnResult.$constructor("ZodDiscriminatedUnion", (arg0, arg1) => {
      const ZodUnion = exports.ZodUnion;
      ZodUnion.init(arg0, arg1);
      const $ZodDiscriminatedUnion = closure_7.$ZodDiscriminatedUnion;
      $ZodDiscriminatedUnion.init(arg0, arg1);
    });
    exports.ZodIntersection = fnResult.$constructor("ZodIntersection", (_zod) => {
      let closure_0 = _zod;
      const $ZodIntersection = closure_7.$ZodIntersection;
      $ZodIntersection.init(_zod, arg1);
      const ZodType = exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (arg0, arg1, path) => outer1_8.intersectionProcessor(closure_0, arg0, arg1, path);
    });
    exports.ZodTuple = fnResult.$constructor("ZodTuple", (_zod) => {
      let closure_0 = _zod;
      const $ZodTuple = closure_7.$ZodTuple;
      $ZodTuple.init(_zod, arg1);
      const ZodType = exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (target, items, path) => outer1_8.tupleProcessor(closure_0, target, items, path);
      _zod.rest = (rest) => _zod.clone(Object.assign({}, _zod._zod.def, { rest }));
    });
    exports.ZodRecord = fnResult.$constructor("ZodRecord", (_zod) => {
      let closure_0 = _zod;
      const $ZodRecord = closure_7.$ZodRecord;
      $ZodRecord.init(_zod, arg1);
      const ZodType = exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (target, arg1, path) => outer1_8.recordProcessor(closure_0, target, arg1, path);
      ({ keyType: _zod.keyType, valueType: _zod.valueType } = arg1);
    });
    exports.ZodMap = fnResult.$constructor("ZodMap", (_zod) => {
      let closure_0 = _zod;
      const $ZodMap = closure_7.$ZodMap;
      $ZodMap.init(_zod, arg1);
      const ZodType = exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (unrepresentable) => outer1_8.mapProcessor(closure_0, unrepresentable, arg1, arg2);
      ({ keyType: _zod.keyType, valueType: _zod.valueType } = arg1);
      _zod.min = () => {
        const _minSize = outer1_7._minSize;
        return _zod.check(_minSize(...arguments));
      };
      _zod.nonempty = (message) => _zod.check(outer1_7._minSize(1, message));
      _zod.max = () => {
        const _maxSize = outer1_7._maxSize;
        return _zod.check(_maxSize(...arguments));
      };
      _zod.size = () => {
        const _size = outer1_7._size;
        return _zod.check(_size(...arguments));
      };
    });
    exports.ZodSet = fnResult.$constructor("ZodSet", (_zod) => {
      let closure_0 = _zod;
      const $ZodSet = closure_7.$ZodSet;
      $ZodSet.init(_zod, arg1);
      const ZodType = exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (unrepresentable) => outer1_8.setProcessor(closure_0, unrepresentable, arg1, arg2);
      _zod.min = () => {
        const _minSize = outer1_7._minSize;
        return _zod.check(_minSize(...arguments));
      };
      _zod.nonempty = (message) => _zod.check(outer1_7._minSize(1, message));
      _zod.max = () => {
        const _maxSize = outer1_7._maxSize;
        return _zod.check(_maxSize(...arguments));
      };
      _zod.size = () => {
        const _size = outer1_7._size;
        return _zod.check(_size(...arguments));
      };
    });
    exports.ZodEnum = fnResult.$constructor("ZodEnum", (_zod) => {
      let closure_0 = _zod;
      const _exports = arg1;
      const $ZodEnum = closure_7.$ZodEnum;
      $ZodEnum.init(_zod, arg1);
      const ZodType = _exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (arg0, arg1, arg2) => outer1_8.enumProcessor(closure_0, arg0, arg1, arg2);
      _zod.enum = arg1.entries;
      _zod.options = Object.values(arg1.entries);
      const set = new Set(Object.keys(arg1.entries));
      _zod.extract = (items, message) => {
        let obj = {};
        for (const item10005 of arg0) {
          let tmp = item10005;
          let tmp2 = set;
          if (set.has(item10005)) {
            let tmp9 = obj;
            let tmp10 = item10005;
            let tmp11 = closure_1;
            obj[tmp] = closure_1.entries[tmp];
            continue;
          } else {
            let tmp3 = globalThis;
            let _Error = Error;
            let tmp4 = item10005;
            let _HermesInternal = HermesInternal;
            let str = "Key ";
            let str2 = " not found in enum";
            let tmp5 = new.target;
            let tmp6 = new.target;
            let error = new Error("Key " + tmp + " not found in enum");
            let tmp8 = error;
            throw error;
          }
        }
        obj = { checks: [] };
        const util = _zod(set[2]).util;
        obj = { entries: obj };
        const zodEnum = new closure_1.ZodEnum(Object.assign({}, closure_1, obj, util.normalizeParams(message), obj));
        return zodEnum;
      };
      _zod.exclude = (items, message) => {
        const merged = Object.assign({}, closure_1.entries);
        for (const item10012 of arg0) {
          let tmp5 = set;
          let tmp4 = item10012;
          if (set.has(item10012)) {
            let tmp11 = merged;
            let tmp12 = item10012;
            delete tmp2[tmp];
            continue;
          } else {
            let _Error = Error;
            let tmp6 = item10012;
            let _HermesInternal = HermesInternal;
            let str = "Key ";
            let str2 = " not found in enum";
            let tmp7 = new.target;
            let tmp8 = new.target;
            let error = new Error("Key " + tmp4 + " not found in enum");
            let tmp10 = error;
            throw error;
          }
        }
        let obj = { checks: [] };
        const util = _zod(set[2]).util;
        obj = { entries: merged };
        const zodEnum = new closure_1.ZodEnum(Object.assign({}, closure_1, obj, util.normalizeParams(message), obj));
        return zodEnum;
      };
    });
    exports.ZodLiteral = fnResult.$constructor("ZodLiteral", (_zod) => {
      let closure_0 = _zod;
      const _exports = arg1;
      const $ZodLiteral = closure_7.$ZodLiteral;
      $ZodLiteral.init(_zod, arg1);
      const ZodType = _exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (unrepresentable) => outer1_8.literalProcessor(closure_0, unrepresentable, arg1, arg2);
      _zod.values = new Set(arg1.values);
      Object.defineProperty(_zod, "value", {
        get() {
          if (closure_1.values.length > 1) {
            const _Error = Error;
            const error = new Error("This schema contains multiple valid literal values. Use `.values` instead.");
            throw error;
          } else {
            return closure_1.values[0];
          }
        }
      });
    });
    exports.ZodFile = fnResult.$constructor("ZodFile", (_zod) => {
      let closure_0 = _zod;
      const $ZodFile = closure_7.$ZodFile;
      $ZodFile.init(_zod, arg1);
      const ZodType = exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (arg0, arg1, arg2) => outer1_8.fileProcessor(closure_0, arg0, arg1, arg2);
      _zod.min = (minimum, message) => _zod.check(outer1_7._minSize(minimum, message));
      _zod.max = (maximum, message) => _zod.check(outer1_7._maxSize(maximum, message));
      _zod.mime = (mime, message) => {
        let tmp3 = mime;
        if (!Array.isArray(mime)) {
          const items = [mime];
          tmp3 = items;
        }
        return _zod.check(outer1_7._mime(tmp3, message));
      };
    });
    exports.ZodTransform = fnResult.$constructor("ZodTransform", (_zod) => {
      let closure_0 = _zod;
      const _exports = arg1;
      const $ZodTransform = closure_7.$ZodTransform;
      $ZodTransform.init(_zod, arg1);
      const ZodType = _exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (unrepresentable) => outer1_8.transformProcessor(closure_0, unrepresentable, arg1, arg2);
      _zod._zod.parse = (arg0, direction) => {
        let iter = arg0;
        const constructor = arg0;
        if ("backward" === direction.direction) {
          const $ZodEncodeError = outer1_7.$ZodEncodeError;
          const prototype = $ZodEncodeError.prototype;
          const ZodEncodeError = new $ZodEncodeError(constructor.constructor.name);
          throw ZodEncodeError;
        } else {
          iter.addIssue = (fatal) => {
            if ("string" === typeof fatal) {
              const issues = lib.issues;
              const util2 = lib(outer2_2[2]).util;
              issues.push(util2.issue(fatal, lib.value, outer1_1));
            } else {
              if (fatal.fatal) {
                fatal.continue = false;
              }
              if (null == fatal.code) {
                fatal.code = "custom";
              }
              if (null == fatal.input) {
                fatal.input = lib.value;
              }
              if (null == fatal.inst) {
                fatal.inst = lib;
              }
              const issues1 = lib.issues;
              const util = lib(outer2_2[2]).util;
              issues1.push(util.issue(fatal));
            }
          };
          const transformResult = closure_1.transform(iter.value, iter);
          if (transformResult instanceof Promise) {
            iter = transformResult.then((value) => {
              closure_0.value = value;
              return closure_0;
            });
          } else {
            iter.value = transformResult;
          }
          return iter;
        }
      };
    });
    exports.ZodOptional = fnResult.$constructor("ZodOptional", (_zod) => {
      let closure_0 = _zod;
      const $ZodOptional = closure_7.$ZodOptional;
      $ZodOptional.init(_zod, arg1);
      const ZodType = exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (seen) => outer1_8.optionalProcessor(closure_0, seen, arg1, arg2);
      _zod.unwrap = () => _zod._zod.def.innerType;
    });
    exports.ZodExactOptional = fnResult.$constructor("ZodExactOptional", (_zod) => {
      let closure_0 = _zod;
      const $ZodExactOptional = closure_7.$ZodExactOptional;
      $ZodExactOptional.init(_zod, arg1);
      const ZodType = exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (seen) => outer1_8.optionalProcessor(closure_0, seen, arg1, arg2);
      _zod.unwrap = () => _zod._zod.def.innerType;
    });
    exports.ZodNullable = fnResult.$constructor("ZodNullable", (_zod) => {
      let closure_0 = _zod;
      const $ZodNullable = closure_7.$ZodNullable;
      $ZodNullable.init(_zod, arg1);
      const ZodType = exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (target) => outer1_8.nullableProcessor(closure_0, target, arg1, arg2);
      _zod.unwrap = () => _zod._zod.def.innerType;
    });
    exports.ZodDefault = fnResult.$constructor("ZodDefault", (_zod) => {
      let closure_0 = _zod;
      const $ZodDefault = closure_7.$ZodDefault;
      $ZodDefault.init(_zod, arg1);
      const ZodType = exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (seen) => outer1_8.defaultProcessor(closure_0, seen, arg1, arg2);
      _zod.unwrap = () => _zod._zod.def.innerType;
      _zod.removeDefault = _zod.unwrap;
    });
    exports.ZodPrefault = fnResult.$constructor("ZodPrefault", (_zod) => {
      let closure_0 = _zod;
      const $ZodPrefault = closure_7.$ZodPrefault;
      $ZodPrefault.init(_zod, arg1);
      const ZodType = exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (seen) => outer1_8.prefaultProcessor(closure_0, seen, arg1, arg2);
      _zod.unwrap = () => _zod._zod.def.innerType;
    });
    exports.ZodNonOptional = fnResult.$constructor("ZodNonOptional", (_zod) => {
      let closure_0 = _zod;
      const $ZodNonOptional = closure_7.$ZodNonOptional;
      $ZodNonOptional.init(_zod, arg1);
      const ZodType = exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (seen) => outer1_8.nonoptionalProcessor(closure_0, seen, arg1, arg2);
      _zod.unwrap = () => _zod._zod.def.innerType;
    });
    exports.ZodSuccess = fnResult.$constructor("ZodSuccess", (_zod) => {
      let closure_0 = _zod;
      const $ZodSuccess = closure_7.$ZodSuccess;
      $ZodSuccess.init(_zod, arg1);
      const ZodType = exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (arg0, arg1, arg2) => outer1_8.successProcessor(closure_0, arg0, arg1, arg2);
      _zod.unwrap = () => _zod._zod.def.innerType;
    });
    exports.ZodCatch = fnResult.$constructor("ZodCatch", (_zod) => {
      let closure_0 = _zod;
      const $ZodCatch = closure_7.$ZodCatch;
      $ZodCatch.init(_zod, arg1);
      const ZodType = exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (seen) => outer1_8.catchProcessor(closure_0, seen, arg1, arg2);
      _zod.unwrap = () => _zod._zod.def.innerType;
      _zod.removeCatch = _zod.unwrap;
    });
    exports.ZodNaN = fnResult.$constructor("ZodNaN", (_zod) => {
      let closure_0 = _zod;
      const $ZodNaN = closure_7.$ZodNaN;
      $ZodNaN.init(_zod, arg1);
      const ZodType = exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (unrepresentable) => outer1_8.nanProcessor(closure_0, unrepresentable, arg1, arg2);
    });
    exports.ZodPipe = fnResult.$constructor("ZodPipe", (_zod) => {
      let closure_0 = _zod;
      const $ZodPipe = closure_7.$ZodPipe;
      $ZodPipe.init(_zod, arg1);
      const ZodType = exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (io) => outer1_8.pipeProcessor(closure_0, io, arg1, arg2);
      ({ in: _zod.in, out: _zod.out } = arg1);
    });
    exports.ZodCodec = fnResult.$constructor("ZodCodec", (arg0, arg1) => {
      const ZodPipe = exports.ZodPipe;
      ZodPipe.init(arg0, arg1);
      const $ZodCodec = closure_7.$ZodCodec;
      $ZodCodec.init(arg0, arg1);
    });
    exports.ZodReadonly = fnResult.$constructor("ZodReadonly", (_zod) => {
      let closure_0 = _zod;
      const $ZodReadonly = closure_7.$ZodReadonly;
      $ZodReadonly.init(_zod, arg1);
      const ZodType = exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (seen) => outer1_8.readonlyProcessor(closure_0, seen, arg1, arg2);
      _zod.unwrap = () => _zod._zod.def.innerType;
    });
    exports.ZodTemplateLiteral = fnResult.$constructor("ZodTemplateLiteral", (_zod) => {
      let closure_0 = _zod;
      const $ZodTemplateLiteral = closure_7.$ZodTemplateLiteral;
      $ZodTemplateLiteral.init(_zod, arg1);
      const ZodType = exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (arg0, arg1, arg2) => outer1_8.templateLiteralProcessor(closure_0, arg0, arg1, arg2);
    });
    exports.ZodLazy = fnResult.$constructor("ZodLazy", (_zod) => {
      let closure_0 = _zod;
      const $ZodLazy = closure_7.$ZodLazy;
      $ZodLazy.init(_zod, arg1);
      const ZodType = exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (seen) => outer1_8.lazyProcessor(closure_0, seen, arg1, arg2);
      _zod.unwrap = () => {
        const def = _zod._zod.def;
        return def.getter();
      };
    });
    exports.ZodPromise = fnResult.$constructor("ZodPromise", (_zod) => {
      let closure_0 = _zod;
      closure_7.$ZodPromise.init(_zod, arg1);
      const ZodType = exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (seen) => outer1_8.promiseProcessor(closure_0, seen, arg1, arg2);
      _zod.unwrap = () => _zod._zod.def.innerType;
    });
    exports.ZodFunction = fnResult.$constructor("ZodFunction", (_zod) => {
      let closure_0 = _zod;
      const $ZodFunction = closure_7.$ZodFunction;
      $ZodFunction.init(_zod, arg1);
      const ZodType = exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (unrepresentable) => outer1_8.functionProcessor(closure_0, unrepresentable, arg1, arg2);
    });
    exports.ZodCustom = fnResult.$constructor("ZodCustom", (_zod) => {
      let closure_0 = _zod;
      const $ZodCustom = closure_7.$ZodCustom;
      $ZodCustom.init(_zod, arg1);
      const ZodType = exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (unrepresentable) => outer1_8.customProcessor(closure_0, unrepresentable, arg1, arg2);
    });
    ({ describe: exports.describe, meta: exports.meta } = fnResult);
    exports.stringbool = function stringbool() {
      const length = arguments.length;
      const array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      const _stringbool = closure_7._stringbool;
      const items = [{ Codec: exports.ZodCodec, Boolean: exports.ZodBoolean, String: exports.ZodString }];
      return _stringbool.apply(closure_7, items.concat(array));
    };
  } else {
    const _Object2 = Object;
  }
} else {
  let _Object = Object;
}
