// Module ID: 12240
// Function ID: 12241
// Name: ZodType
// Dependencies: [5, 12158, 12237, 12165, 12181, 12241, 12242, 12236]
// Exports: _default, _function, any, array, base64, base64url, bigint, boolean, catch, check, cidrv4, cidrv6, codec, creditCard, cuid, cuid2, currencyCode, custom, date, discriminatedUnion, e164, email, emoji, enum, exactOptional, file, float32, float64, function, guid, hash, hex, hostname, httpUrl, iban, instanceof, int, int32, int64, intersection, invertCodec, ipv4, ipv6, json, jwt, keyof, ksuid, lazy, literal, looseObject, looseRecord, mac, map, nan, nanoid, nativeEnum, never, nonoptional, null, nullable, nullish, number, object, optional, partialRecord, pipe, prefault, preprocess, promise, readonly, record, refine, set, strictObject, string, stringFormat, stringbool, success, superRefine, symbol, templateLiteral, transform, tuple, uint32, uint64, ulid, undefined, union, unknown, url, uuid, uuidv4, uuidv6, uuidv7, void, xid, xor

// Module 12240 (ZodType)
import cuid3 from "cuid" /* 12165 */;
import default_12 from "default_1" /* 12181 */;
import stringProcessor2 from "stringProcessor" /* 12237 */;
import lt2 from "lt" /* 12241 */;
import _mod12242 from "module_12242" /* 12242 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import util_mod from "util" /* 12158 */;
import { util as util_mod } from "util" /* 12158 */;

const require = globalThis.__r;
let ZodEncodeError, _exports, c0, hasOwnProperty;

let _decode;
let _decodeAsync;
let _encode;
let _encodeAsync;
let _parse;
let _parseAsync;
const f104522 = (item) => {
  const items = [item, item];
  return items;
};
let self = this;
let tmp2 = this && self.__createBinding;
if (!tmp2) {
  let tmp3 = globalThis;
  let _Object = Object;
  tmp2 = Object.create ? ((arg0, __esModule, arg2, arg3) => {
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
let closure_4 = tmp2;
let tmp4 = self && self.__setModuleDefault;
if (!tmp4) {
  let tmp5 = globalThis;
  let _Object2 = Object;
  tmp4 = Object.create ? ((arg0, value) => {
    const obj = { enumerable: true, value };
    Object.defineProperty(arg0, "default", obj);
  }) : ((arg0, arg1) => {
    arg0.default = arg1;
  });
}
let closure_5 = tmp4;
let tmp6 = self && self.__importStar || ((__esModule) => {
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
        let tmp6 = closure_4(obj, __esModule, key10009);
        continue;
      }
      continue;
    }
  }
  closure_5(obj, __esModule);
  return obj;
});
let tmp7 = self && self.__importDefault || ((__esModule) => {
  let tmp2;
  const tmp = __esModule;
  if (!tmp) {
    tmp2 = { default: __esModule };
    const obj = { default: __esModule };
  } else {
    tmp2 = __esModule;
  }
  return tmp2;
});
function _function(input) {
  let output;
  let zodTuple;
  input = undefined;
  const ZodFunction = exports.ZodFunction;
  const _Array = Array;
  if (input != null) {
    input = input.input;
  }
  if (isArray(input)) {
    let input1;
    if (input != null) {
      input1 = input.input;
    }
    const ZodTuple = tmp.ZodTuple;
    const obj = { type: "tuple", items: input1, rest: null };
    util = require("util").util;
    const merged = Object.assign(util.normalizeParams(undefined));
    const self = this;
    const self2 = this;
    zodTuple = new ZodTuple(obj);
  } else {
    zodTuple = undefined;
    if (input != null) {
      zodTuple = input.input;
    }
    if (zodTuple == null) {
      zodTuple = util._array(tmp.ZodArray, util._unknown(tmp.ZodUnknown), undefined);
    }
  }
  const obj2 = { type: "function", input: zodTuple, output };
  output = undefined;
  if (input != null) {
    output = input.output;
  }
  if (output == null) {
    output = util._unknown(tmp.ZodUnknown);
  }
  const zodFunction = new ZodFunction(obj2);
  return zodFunction;
}
function string(zodLazy) {
  return util._string(exports.ZodString, zodLazy);
}
function number(zodLazy) {
  return util._number(exports.ZodNumber, zodLazy);
}
function int(zodLazy) {
  return util._int(exports.ZodNumberFormat, zodLazy);
}
function boolean(zodLazy) {
  return util._boolean(exports.ZodBoolean, zodLazy);
}
function _null(arg0) {
  return util._null(exports.ZodNull, arg0);
}
function unknown() {
  return util._unknown(exports.ZodUnknown);
}
function never(zodLazy) {
  return util._never(exports.ZodNever, zodLazy);
}
function array(util, zodLazy) {
  return util._array(exports.ZodArray, util, zodLazy);
}
function union(options, zodLazy) {
  const ZodUnion = exports.ZodUnion;
  const obj = { type: "union", options };
  util = require("util").util;
  const merged = Object.assign(util.normalizeParams(zodLazy));
  const zodUnion = new ZodUnion(obj);
  return zodUnion;
}
function intersection(found, items3) {
  const rect = { type: "intersection", left: found, right: items3 };
  const zodIntersection = new exports.ZodIntersection(rect);
  return zodIntersection;
}
function tuple(items, arg1, zodLazy) {
  let tmp2 = arg1;
  if (arg1 instanceof util.$ZodType) {
    tmp2 = zodLazy;
  }
  let tmp3 = null;
  if (arg1 instanceof util.$ZodType) {
    tmp3 = arg1;
  }
  const ZodTuple = exports.ZodTuple;
  const obj = { type: "tuple", items, rest: tmp3 };
  util = require("util").util;
  const merged = Object.assign(util.normalizeParams(tmp2));
  const zodTuple = new ZodTuple(obj);
  return zodTuple;
}
function record(keyType, _zod, zodLazy) {
  const tmp = _zod;
  if (tmp) {
    let zodRecord2;
    if (_zod._zod) {
      const ZodRecord2 = exports.ZodRecord;
      const obj2 = { type: "record", keyType, valueType: _zod };
      const util2 = require("util").util;
      const merged = Object.assign(util2.normalizeParams(zodLazy));
      const self = this;
      const self2 = this;
      zodRecord2 = new ZodRecord2(obj2);
    }
    return zodRecord2;
  }
  const ZodRecord = exports.ZodRecord;
  const obj = { type: "record", keyType: util._string(exports.ZodString, undefined), valueType: keyType };
  util = require("util").util;
  const merged1 = Object.assign(util.normalizeParams(_zod));
  zodRecord2 = new ZodRecord(obj);
}
function _enum(arr, zodLazy) {
  let fromEntriesResult = arr;
  if (Array.isArray(arr)) {
    const _Object = Object;
    fromEntriesResult = Object.fromEntries(arr.map(f104522));
  }
  const ZodEnum = exports.ZodEnum;
  const obj = { type: "enum", entries: fromEntriesResult };
  util = require("util").util;
  const merged = Object.assign(util.normalizeParams(zodLazy));
  const zodEnum = new ZodEnum(obj);
  return zodEnum;
}
function transform(transform) {
  const obj = { type: "transform", transform };
  const zodTransform = new exports.ZodTransform(obj);
  return zodTransform;
}
function optional(innerType) {
  const obj = { type: "optional", innerType };
  const zodOptional = new exports.ZodOptional(obj);
  return zodOptional;
}
function exactOptional(innerType) {
  const obj = { type: "optional", innerType };
  const zodExactOptional = new exports.ZodExactOptional(obj);
  return zodExactOptional;
}
function nullable(innerType) {
  const obj = { type: "nullable", innerType };
  const zodNullable = new exports.ZodNullable(obj);
  return zodNullable;
}
function _default(innerType, arg1) {
  let closure_0 = arg1;
  const obj = { type: "default", innerType };
  const ZodDefault = exports.ZodDefault;
  Object.defineProperty(obj, "defaultValue", {
    get: () => {
      let shallowCloneResult;
      if (typeof closure_0 === "function") {
        shallowCloneResult = tmp();
      } else {
        util = require("util").util;
        shallowCloneResult = util.shallowClone(tmp);
      }
      return shallowCloneResult;
    },
    set: undefined
  });
  const zodDefault = new ZodDefault(obj);
  return zodDefault;
}
function prefault(innerType, arg1) {
  let closure_0 = arg1;
  const obj = { type: "prefault", innerType };
  const ZodPrefault = exports.ZodPrefault;
  Object.defineProperty(obj, "defaultValue", {
    get: () => {
      let shallowCloneResult;
      if (typeof closure_0 === "function") {
        shallowCloneResult = tmp();
      } else {
        util = require("util").util;
        shallowCloneResult = util.shallowClone(tmp);
      }
      return shallowCloneResult;
    },
    set: undefined
  });
  const zodPrefault = new ZodPrefault(obj);
  return zodPrefault;
}
function nonoptional(innerType, zodLazy) {
  const ZodNonOptional = exports.ZodNonOptional;
  const obj = { type: "nonoptional", innerType };
  util = require("util").util;
  const merged = Object.assign(util.normalizeParams(zodLazy));
  const zodNonOptional = new ZodNonOptional(obj);
  return zodNonOptional;
}
function _catch(innerType, fn) {
  let constantCatchResult;
  const obj = { type: "catch", innerType, catchValue: constantCatchResult };
  constantCatchResult = fn;
  const ZodCatch = exports.ZodCatch;
  if (typeof fn !== "function") {
    util = util.util;
    constantCatchResult = util.constantCatch(fn);
  }
  const zodCatch = new ZodCatch(obj);
  return zodCatch;
}
function pipe(_in, out) {
  const obj = { type: "pipe", in: _in, out };
  const zodPipe = new exports.ZodPipe(obj);
  return zodPipe;
}
function readonly(innerType) {
  const obj = { type: "readonly", innerType };
  const zodReadonly = new exports.ZodReadonly(obj);
  return zodReadonly;
}
function lazy(getter) {
  const obj = { type: "lazy", getter };
  const zodLazy = new exports.ZodLazy(obj);
  return zodLazy;
}
function refine(fn, zodLazy) {
  let obj = zodLazy;
  if (zodLazy === undefined) {
    obj = {};
  }
  return util._refine(exports.ZodCustom, fn, obj);
}
function superRefine(arg0, zodLazy) {
  return util._superRefine(arg0, zodLazy);
}
let util = util_mod;
const stringProcessor = tmp6(stringProcessor2);
let closure_8 = tmp6(cuid3);
const default_1 = tmp7(default_12);
let closure_10 = tmp6(lt2);
const parse = tmp6(_mod12242);
let obj = {
  check() {
    let items1;
    const items = [...arguments];
    const def = this.def;
    const clone = this.clone;
    util = require("util").util;
    let checks = def.checks;
    const mergeDefs = util.mergeDefs;
    if (checks == null) {
      checks = [];
    }
    let obj = { checks: items1 };
    items1 = [
      ...checks,
      ...items.map((check) => {
        let obj2;
        let tmp = check;
        if (typeof check === "function") {
          const obj = { _zod: obj2 };
          tmp = obj;
          obj2 = { check, def: { check: "custom" }, onattach: [] };
        }
        return tmp;
      })
    ];
    return clone(mergeDefs(def, obj), { parent: true });
  },
  with: function() {
    const items = [...HermesBuiltin.copyRestArgs()];
    return this.check.apply(items);
  },
  clone(arg0, arg1) {
    return util.clone(this, arg0, arg1);
  },
  brand() {
    return this;
  },
  register(add, arg1) {
    add.add(this, arg1);
    return this;
  },
  refine(fn, zodLazy) {
    let obj = zodLazy;
    const check = this.check;
    if (zodLazy === undefined) {
      obj = {};
    }
    return check(util._refine(exports.ZodCustom, fn, obj));
  },
  superRefine(arg0, zodLazy) {
    return this.check(util._superRefine(arg0, zodLazy));
  },
  overwrite(arg0) {
    return this.check(closure_10.overwrite(arg0));
  },
  optional() {
    const obj = { type: "optional", innerType: this };
    const zodOptional = new exports.ZodOptional(obj);
    return zodOptional;
  },
  exactOptional() {
    const obj = { type: "optional", innerType: this };
    const zodExactOptional = new exports.ZodExactOptional(obj);
    return zodExactOptional;
  },
  nullable() {
    const obj = { type: "nullable", innerType: this };
    const zodNullable = new exports.ZodNullable(obj);
    return zodNullable;
  },
  nullish() {
    const obj = { type: "nullable", innerType: this };
    const zodNullable = new exports.ZodNullable(obj);
    const obj2 = { type: "optional", innerType: zodNullable };
    const zodOptional = new exports.ZodOptional(obj2);
    return zodOptional;
  },
  nonoptional(zodLazy) {
    const ZodNonOptional = exports.ZodNonOptional;
    const obj = { type: "nonoptional", innerType: this };
    util = require("util").util;
    const merged = Object.assign(util.normalizeParams(zodLazy));
    const zodNonOptional = new ZodNonOptional(obj);
    return zodNonOptional;
  },
  array() {
    return util._array(exports.ZodArray, this, undefined);
  },
  or(arg0) {
    const items = [this, arg0];
    const ZodUnion = exports.ZodUnion;
    const obj = { type: "union", options: items };
    util = require("util").util;
    const merged = Object.assign(util.normalizeParams(undefined));
    const zodUnion = new ZodUnion(obj);
    return zodUnion;
  },
  and(right) {
    const rect = { type: "intersection", left: this, right };
    const zodIntersection = new exports.ZodIntersection(rect);
    return zodIntersection;
  },
  transform(transform) {
    const obj = { type: "transform", transform };
    const zodTransform = new exports.ZodTransform(obj);
    const obj2 = { type: "pipe", in: this, out: zodTransform };
    const zodPipe = new exports.ZodPipe(obj2);
    return zodPipe;
  },
  default: function(arg0) {
    let closure_0 = arg0;
    const obj = { type: "default", innerType: this };
    const ZodDefault = exports.ZodDefault;
    Object.defineProperty(obj, "defaultValue", {
      get: () => {
        let shallowCloneResult;
        if (typeof closure_0 === "function") {
          shallowCloneResult = tmp();
        } else {
          util = require("util").util;
          shallowCloneResult = util.shallowClone(tmp);
        }
        return shallowCloneResult;
      },
      set: undefined
    });
    const zodDefault = new ZodDefault(obj);
    return zodDefault;
  },
  prefault(arg0) {
    let closure_0 = arg0;
    const obj = { type: "prefault", innerType: this };
    const ZodPrefault = exports.ZodPrefault;
    Object.defineProperty(obj, "defaultValue", {
      get: () => {
        let shallowCloneResult;
        if (typeof closure_0 === "function") {
          shallowCloneResult = tmp();
        } else {
          util = require("util").util;
          shallowCloneResult = util.shallowClone(tmp);
        }
        return shallowCloneResult;
      },
      set: undefined
    });
    const zodPrefault = new ZodPrefault(obj);
    return zodPrefault;
  },
  catch: function(fn) {
    let constantCatchResult;
    const obj = { type: "catch", innerType: this, catchValue: constantCatchResult };
    constantCatchResult = fn;
    const ZodCatch = exports.ZodCatch;
    if (typeof fn !== "function") {
      util = util.util;
      constantCatchResult = util.constantCatch(fn);
    }
    const zodCatch = new ZodCatch(obj);
    return zodCatch;
  },
  pipe(out) {
    const obj = { type: "pipe", in: this, out };
    const zodPipe = new exports.ZodPipe(obj);
    return zodPipe;
  },
  readonly() {
    const obj = { type: "readonly", innerType: this };
    const zodReadonly = new exports.ZodReadonly(obj);
    return zodReadonly;
  },
  describe(description) {
    const cloneResult = this.clone();
    const globalRegistry = util.globalRegistry;
    const obj = { description };
    globalRegistry.add(cloneResult, obj);
    return cloneResult;
  },
  meta() {
    const self = this;
    const items = [...arguments];
    if (0 === items.length) {
      const globalRegistry2 = util.globalRegistry;
      return globalRegistry2.get(self);
    } else {
      const cloneResult = self.clone();
      const globalRegistry = util.globalRegistry;
      globalRegistry.add(cloneResult, items[0]);
      return cloneResult;
    }
  },
  isOptional() {
    return this.safeParse(undefined).success;
  },
  isNullable() {
    return this.safeParse(null).success;
  },
  apply(fn) {
    let applyResult;
    const self = this;
    const substr = [...arguments].slice();
    if (0 === substr.length) {
      applyResult = fn(self);
    } else {
      const items = [self];
      HermesBuiltin.arraySpread(items, substr, 1);
      applyResult = HermesBuiltin.apply(fn, items, undefined);
    }
    return applyResult;
  },
  parse: _parse,
  parseAsync: _parseAsync,
  safeParse(arg0, arg1) {
    return parse.safeParse(this, arg0, arg1);
  },
  safeParseAsync(arg0, arg1) {
    let closure_0 = arg0;
    let closure_1 = arg1;
    const self = this;
    return (async (arg0, value) => {
      if (c0 === 2) {
        c0 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c0 = 2;
          if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c0 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            c0 = 3;
            const obj = { value: parse.safeParseAsync(self, closure_0, closure_1), done: true };
            return obj;
          }
        } catch (tmp7) {
          c0 = 3;
          throw tmp7;
        }
      }
    })();
  },
  validate(arg0, arg1) {
    return parse.validate(this, arg0, arg1);
  },
  validateAsync(arg0, arg1) {
    return parse.validateAsync(this, arg0, arg1);
  },
  encode: _encode,
  decode: _decode,
  encodeAsync: _encodeAsync,
  decodeAsync: _decodeAsync,
  safeEncode(arg0, arg1) {
    return parse.safeEncode(this, arg0, arg1);
  },
  safeDecode(arg0, arg1) {
    return parse.safeDecode(this, arg0, arg1);
  },
  safeEncodeAsync(self, arg1) {
    let closure_0 = self;
    let closure_1 = arg1;
    self = this;
    return (async (arg0, value) => {
      if (c0 === 2) {
        c0 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c0 = 2;
          if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c0 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            c0 = 3;
            const obj = { value: parse.safeEncodeAsync(self, closure_0, closure_1), done: true };
            return obj;
          }
        } catch (tmp7) {
          c0 = 3;
          throw tmp7;
        }
      }
    })();
  },
  safeDecodeAsync(self, arg1) {
    let closure_0 = self;
    let closure_1 = arg1;
    self = this;
    return (async (arg0, value) => {
      if (c0 === 2) {
        c0 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c0 = 2;
          if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c0 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            c0 = 3;
            const obj = { value: parse.safeDecodeAsync(self, closure_0, closure_1), done: true };
            return obj;
          }
        } catch (tmp7) {
          c0 = 3;
          throw tmp7;
        }
      }
    })();
  },
  toJSONSchema(arg0) {
    return require("module_12236").createToJSONSchemaMethod(this, {})(arg0);
  }
};
const $constructor = util.$constructor;
Object.defineProperty(obj, "~standard", {
  get: function() {
    util = require("util").util;
    const hide = util.hide;
    const obj = { jsonSchema: { input: require("module_12236").createStandardJSONSchemaMethod(this, "input"), output: require("module_12236").createStandardJSONSchemaMethod(this, "output") } };
    const merged = Object.assign(util.standardProps(this));
    ({ input: require("module_12236").createStandardJSONSchemaMethod(this, "input"), output: require("module_12236").createStandardJSONSchemaMethod(this, "output") });
    return hide(this, "~standard", obj);
  },
  set: function(value) {
    util = require("util").util;
    util.own(this, "~standard", value);
  }
});
_parse = function _parse(arg0, arg1) {
  const obj = { callee: _parse };
  return parse.parse(this, arg0, arg1, obj);
};
_parseAsync = function _parseAsync(arg0, arg1) {
  return closure_0(...arguments);
};
_asyncToGenerator(async function(arg0, arg1) {
  const self = this;
  let closure_1 = arg0;
  let closure_2 = arg1;
  let c4 = 0;
  let c3 = 0;
  return (async (arg0, value) => {
    const obj4 = { callee: _parseAsync };
    await closure_1_11.parseAsync(self, closure_1, closure_2, obj4);
    return value;
  })();
});
Object.defineProperty(obj, "spa", {
  get: function() {
    let safeParseAsync;
    if (this != null) {
      safeParseAsync = this.safeParseAsync;
    }
    return safeParseAsync;
  },
  set: function(value) {
    util = require("util").util;
    util.own(this, "spa", value);
  }
});
_encode = function _encode($ZodRealError, arg1) {
  const obj = { callee: _encode };
  return parse.encode(this, $ZodRealError, arg1, obj);
};
_decode = function _decode($ZodRealError, arg1) {
  const obj = { callee: _decode };
  return parse.decode(this, $ZodRealError, arg1, obj);
};
_encodeAsync = function _encodeAsync($ZodRealError, arg1) {
  return closure_0(...arguments);
};
_asyncToGenerator(async function(arg0, arg1) {
  const self = this;
  let closure_1 = arg0;
  let closure_2 = arg1;
  let c4 = 0;
  let c3 = 0;
  return (async (arg0, value) => {
    const obj4 = { callee: _encodeAsync };
    await closure_1_11.encodeAsync(self, closure_1, closure_2, obj4);
    return value;
  })();
});
_decodeAsync = function _decodeAsync($ZodRealError, arg1) {
  return closure_0(...arguments);
};
let _require = _asyncToGenerator(async function(arg0, arg1) {
  const self = this;
  let closure_1 = arg0;
  let closure_2 = arg1;
  let c4 = 0;
  let c3 = 0;
  return (async (arg0, value) => {
    const obj4 = { callee: _decodeAsync };
    await closure_1_11.decodeAsync(self, closure_1, closure_2, obj4);
    return value;
  })();
});
Object.defineProperty(obj, "description", {
  get: function() {
    const globalRegistry = util.globalRegistry;
    const value = globalRegistry.get(this);
    let description;
    if (value != null) {
      description = value.description;
    }
    return description;
  },
  set: undefined
});
Object.defineProperty(obj, "_def", {
  get: function() {
    return this._zod.def;
  },
  set: undefined
});
const $constructor2 = util.$constructor;
util = util_mod;
let obj2 = {
  format(keyType) {
    let format = stringProcessor.aggregateChecks(keyType).format;
    if (format == null) {
      format = null;
    }
    return format;
  },
  minLength(keyType) {
    let minimum = stringProcessor.aggregateChecks(keyType).minimum;
    if (minimum == null) {
      minimum = null;
    }
    return minimum;
  },
  maxLength(keyType) {
    let maximum = stringProcessor.aggregateChecks(keyType).maximum;
    if (maximum == null) {
      maximum = null;
    }
    return maximum;
  }
};
const range = {
  regex() {
    const items = [...HermesBuiltin.copyRestArgs()];
    return this.check(closure_10.regex.apply(items));
  },
  includes() {
    const items = [...HermesBuiltin.copyRestArgs()];
    return this.check(closure_10.includes.apply(items));
  },
  startsWith() {
    const items = [...HermesBuiltin.copyRestArgs()];
    return this.check(closure_10.startsWith.apply(items));
  },
  endsWith() {
    const items = [...HermesBuiltin.copyRestArgs()];
    return this.check(closure_10.endsWith.apply(items));
  },
  min() {
    const items = [...HermesBuiltin.copyRestArgs()];
    return this.check(closure_10.minLength.apply(items));
  },
  max() {
    const items = [...HermesBuiltin.copyRestArgs()];
    return this.check(closure_10.maxLength.apply(items));
  },
  length() {
    const items = [...HermesBuiltin.copyRestArgs()];
    return this.check(closure_10.length.apply(items));
  },
  nonempty() {
    const items = [1, ...HermesBuiltin.copyRestArgs()];
    return this.check(closure_10.minLength.apply(items));
  },
  lowercase(arg0) {
    return this.check(closure_10.lowercase(arg0));
  },
  uppercase(arg0) {
    return this.check(closure_10.uppercase(arg0));
  },
  trim() {
    return this.check(closure_10.trim());
  },
  normalize() {
    const items = [...HermesBuiltin.copyRestArgs()];
    return this.check(closure_10.normalize.apply(items));
  },
  toLowerCase() {
    return this.check(closure_10.toLowerCase());
  },
  toUpperCase() {
    return this.check(closure_10.toUpperCase());
  },
  slugify() {
    return this.check(closure_10.slugify());
  }
};
let obj3 = {
  email(zodLazy) {
    return this.check(util._email(exports.ZodEmail, zodLazy));
  },
  url(url) {
    return this.check(util._url(exports.ZodURL, url));
  },
  jwt(zodLazy) {
    return this.check(util._jwt(exports.ZodJWT, zodLazy));
  },
  emoji(zodLazy) {
    return this.check(util._emoji(exports.ZodEmoji, zodLazy));
  },
  guid(zodLazy) {
    return this.check(util._guid(exports.ZodGUID, zodLazy));
  },
  uuid(zodLazy) {
    return this.check(util._uuid(exports.ZodUUID, zodLazy));
  },
  uuidv4(zodLazy) {
    return this.check(util._uuidv4(exports.ZodUUID, zodLazy));
  },
  uuidv6(zodLazy) {
    return this.check(util._uuidv6(exports.ZodUUID, zodLazy));
  },
  uuidv7(zodLazy) {
    return this.check(util._uuidv7(exports.ZodUUID, zodLazy));
  },
  nanoid(zodLazy) {
    return this.check(util._nanoid(exports.ZodNanoID, zodLazy));
  },
  cuid(zodLazy) {
    return this.check(util._cuid(exports.ZodCUID, zodLazy));
  },
  cuid2(zodLazy) {
    return this.check(util._cuid2(exports.ZodCUID2, zodLazy));
  },
  ulid(zodLazy) {
    return this.check(util._ulid(exports.ZodULID, zodLazy));
  },
  base64(zodLazy) {
    return this.check(util._base64(exports.ZodBase64, zodLazy));
  },
  base64url(zodLazy) {
    return this.check(util._base64url(exports.ZodBase64URL, zodLazy));
  },
  xid(zodLazy) {
    return this.check(util._xid(exports.ZodXID, zodLazy));
  },
  ksuid(zodLazy) {
    return this.check(util._ksuid(exports.ZodKSUID, zodLazy));
  },
  ipv4(zodLazy) {
    return this.check(util._ipv4(exports.ZodIPv4, zodLazy));
  },
  ipv6(zodLazy) {
    return this.check(util._ipv6(exports.ZodIPv6, zodLazy));
  },
  cidrv4(zodLazy) {
    return this.check(util._cidrv4(exports.ZodCIDRv4, zodLazy));
  },
  cidrv6(zodLazy) {
    return this.check(util._cidrv6(exports.ZodCIDRv6, zodLazy));
  },
  e164(zodLazy) {
    return this.check(util._e164(exports.ZodE164, zodLazy));
  },
  datetime(zodLazy) {
    return this.check(util._isoDateTime(exports.ZodISODateTime, zodLazy));
  },
  date(zodLazy) {
    return this.check(util._isoDate(exports.ZodISODate, zodLazy));
  },
  time(zodLazy) {
    return this.check(util._isoTime(exports.ZodISOTime, zodLazy));
  },
  duration(zodLazy) {
    return this.check(util._isoDuration(exports.ZodISODuration, zodLazy));
  }
};
const $constructor3 = util.$constructor;
let util2 = util_mod;
let obj4 = {
  minValue(keyType) {
    let exclusiveMinimum;
    let minimum;
    ({ minimum, exclusiveMinimum } = stringProcessor.aggregateChecks(keyType));
    const _Math = Math;
    stringProcessor.aggregateChecks(keyType);
    if (minimum == null) {
      const _Number = Number;
      minimum = Number.NEGATIVE_INFINITY;
    }
    if (exclusiveMinimum == null) {
      const _Number2 = Number;
      exclusiveMinimum = Number.NEGATIVE_INFINITY;
    }
    return max(minimum, exclusiveMinimum);
  },
  maxValue(keyType) {
    let exclusiveMaximum;
    let maximum;
    ({ maximum, exclusiveMaximum } = stringProcessor.aggregateChecks(keyType));
    const _Math = Math;
    stringProcessor.aggregateChecks(keyType);
    if (maximum == null) {
      const _Number = Number;
      maximum = Number.POSITIVE_INFINITY;
    }
    if (exclusiveMaximum == null) {
      const _Number2 = Number;
      exclusiveMaximum = Number.POSITIVE_INFINITY;
    }
    return min(maximum, exclusiveMaximum);
  },
  isInt(keyType) {
    const aggregateChecksResult = stringProcessor.aggregateChecks(keyType);
    const multipleOf = aggregateChecksResult.multipleOf;
    let isInt = aggregateChecksResult.isInt;
    if (!isInt) {
      let someResult;
      if (multipleOf != null) {
        const _Number = Number;
        someResult = multipleOf.some(Number.isSafeInteger);
      }
      isInt = someResult;
    }
    return isInt;
  },
  format(keyType) {
    let format = stringProcessor.aggregateChecks(keyType).format;
    if (format == null) {
      format = null;
    }
    return format;
  }
};
const range1 = {
  gt(arg0, arg1) {
    return this.check(closure_10.gt(arg0, arg1));
  },
  gte(arg0, arg1) {
    return this.check(closure_10.gte(arg0, arg1));
  },
  min(arg0, arg1) {
    return this.check(closure_10.gte(arg0, arg1));
  },
  lt(arg0, arg1) {
    return this.check(closure_10.lt(arg0, arg1));
  },
  lte(arg0, arg1) {
    return this.check(closure_10.lte(arg0, arg1));
  },
  max(arg0, arg1) {
    return this.check(closure_10.lte(arg0, arg1));
  },
  int(zodLazy) {
    return this.check(util._int(exports.ZodNumberFormat, zodLazy));
  },
  safe(zodLazy) {
    return this.check(util._int(exports.ZodNumberFormat, zodLazy));
  },
  positive(arg0) {
    return this.check(closure_10.gt(0, arg0));
  },
  nonnegative(arg0) {
    return this.check(closure_10.gte(0, arg0));
  },
  negative(arg0) {
    return this.check(closure_10.lt(0, arg0));
  },
  nonpositive(arg0) {
    return this.check(closure_10.lte(0, arg0));
  },
  multipleOf(arg0, arg1) {
    return this.check(closure_10.multipleOf(arg0, arg1));
  },
  step(arg0, arg1) {
    return this.check(closure_10.multipleOf(arg0, arg1));
  },
  finite() {
    return this;
  }
};
const $constructor4 = util.$constructor;
let util3 = util_mod;
const obj5 = {
  minValue(keyType) {
    let minimum = stringProcessor.aggregateChecks(keyType).minimum;
    if (minimum == null) {
      minimum = null;
    }
    return minimum;
  },
  maxValue(keyType) {
    let maximum = stringProcessor.aggregateChecks(keyType).maximum;
    if (maximum == null) {
      maximum = null;
    }
    return maximum;
  },
  format(keyType) {
    let format = stringProcessor.aggregateChecks(keyType).format;
    if (format == null) {
      format = null;
    }
    return format;
  }
};
const range2 = {
  gte(arg0, arg1) {
    return this.check(closure_10.gte(arg0, arg1));
  },
  min(arg0, arg1) {
    return this.check(closure_10.gte(arg0, arg1));
  },
  gt(arg0, arg1) {
    return this.check(closure_10.gt(arg0, arg1));
  },
  lt(arg0, arg1) {
    return this.check(closure_10.lt(arg0, arg1));
  },
  lte(arg0, arg1) {
    return this.check(closure_10.lte(arg0, arg1));
  },
  max(arg0, arg1) {
    return this.check(closure_10.lte(arg0, arg1));
  },
  positive(arg0) {
    return this.check(closure_10.gt(BigInt(0), arg0));
  },
  negative(arg0) {
    return this.check(closure_10.lt(BigInt(0), arg0));
  },
  nonpositive(arg0) {
    return this.check(closure_10.lte(BigInt(0), arg0));
  },
  nonnegative(arg0) {
    return this.check(closure_10.gte(BigInt(0), arg0));
  },
  multipleOf(arg0, arg1) {
    return this.check(closure_10.multipleOf(arg0, arg1));
  }
};
const $constructor5 = util.$constructor;
const obj6 = {
  minDate(keyType) {
    const minimum = stringProcessor.aggregateChecks(keyType).minimum;
    let date = null;
    if (minimum) {
      const _Date = Date;
      const self = this;
      const self2 = this;
      date = new Date(minimum);
    }
    return date;
  },
  maxDate(keyType) {
    const maximum = stringProcessor.aggregateChecks(keyType).maximum;
    let date = null;
    if (maximum) {
      const _Date = Date;
      const self = this;
      const self2 = this;
      date = new Date(maximum);
    }
    return date;
  }
};
const range3 = {
  min(arg0, arg1) {
    return this.check(closure_10.minLength(arg0, arg1));
  },
  nonempty(arg0) {
    return this.check(closure_10.minLength(1, arg0));
  },
  max(arg0, arg1) {
    return this.check(closure_10.maxLength(arg0, arg1));
  },
  length(arg0, arg1) {
    return this.check(closure_10.length(arg0, arg1));
  },
  unwrap() {
    return this.element;
  }
};
const obj7 = {
  keyof() {
    const keys = Object.keys(this._zod.def.shape);
    let fromEntriesResult = keys;
    if (Array.isArray(keys)) {
      const _Object = Object;
      fromEntriesResult = Object.fromEntries(keys.map(f104522));
    }
    const ZodEnum = exports.ZodEnum;
    const obj = { type: "enum", entries: fromEntriesResult };
    util = require("util").util;
    const merged = Object.assign(util.normalizeParams(undefined));
    const zodEnum = new ZodEnum(obj);
    return zodEnum;
  },
  catchall(catchall) {
    const clone = this.clone;
    util = require("util").util;
    const obj = { catchall };
    return clone(util.mergeDefs(this._zod.def, obj));
  },
  passthrough() {
    const clone = this.clone;
    util = require("util").util;
    const obj = { catchall: util._unknown(exports.ZodUnknown) };
    return clone(util.mergeDefs(this._zod.def, obj));
  },
  loose() {
    const clone = this.clone;
    util = require("util").util;
    const obj = { catchall: util._unknown(exports.ZodUnknown) };
    return clone(util.mergeDefs(this._zod.def, obj));
  },
  strict() {
    const clone = this.clone;
    util = require("util").util;
    const obj = { catchall: util._never(exports.ZodNever, undefined) };
    return clone(util.mergeDefs(this._zod.def, obj));
  },
  strip() {
    const clone = this.clone;
    util = require("util").util;
    return clone(util.mergeDefs(this._zod.def, { catchall: "r" }));
  },
  extend(arg0) {
    util = require("util").util;
    return util.extend(this, arg0);
  },
  safeExtend(arg0) {
    util = require("util").util;
    return util.safeExtend(this, arg0);
  },
  merge(arg0) {
    util = require("util").util;
    return util.merge(this, arg0);
  },
  pick(arg0) {
    util = require("util").util;
    return util.pick(this, arg0);
  },
  omit(arg0) {
    util = require("util").util;
    return util.omit(this, arg0);
  },
  partial() {
    const items = [...arguments];
    util = require("util").util;
    return util.partial(exports.ZodOptional, this, items[0]);
  },
  exactPartial() {
    const items = [...arguments];
    util = require("util").util;
    return util.partial(exports.ZodExactOptional, this, items[0], "exactPartial");
  },
  required() {
    const items = [...arguments];
    util = require("util").util;
    return util.required(exports.ZodNonOptional, this, items[0]);
  }
};
const obj8 = {
  rest(rest) {
    const clone = this.clone;
    const obj = { rest };
    const merged = Object.assign(this._zod.def);
    return clone(obj);
  },
  partial() {
    let ZodOptional;
    let items;
    const self = this;
    const def = this._zod.def;
    const checks = def.checks;
    let length;
    if (checks != null) {
      length = checks.length;
    }
    if (length) {
      const _Error = Error;
      const self2 = this;
      const self3 = this;
      const error = new Error(".partial() cannot be used on tuple schemas containing refinements");
      throw error;
    } else {
      let obj = {
        items: items.map((innerType) => {
            const obj = { type: "optional", innerType };
            const zodOptional = new ZodOptional.ZodOptional(obj);
            return zodOptional;
          })
      };
      const clone = self.clone;
      const merged = Object.assign(def);
      items = def.items;
      return clone(obj);
    }
  }
};
({ describe: exports.describe, meta: exports.meta } = util);
const obj9 = {
  properties(shape, zodLazy) {
    return this.check(util._properties(shape, zodLazy));
  }
};
let tmp9 = (() => {
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
            const obj = { value, writable: false, enumerable: ownPropertyDescriptor.enumerable, configurable: false };
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
const ZodUnion_export = util.$constructor("ZodUnion", (_zod, options) => {
  let closure_0 = _zod;
  const $ZodUnion = util.$ZodUnion;
  $ZodUnion.init(_zod, options);
  const ZodType = exports.ZodType;
  ZodType.init(_zod, options);
  _zod._zod.processJSONSchema = (arg0, arg1, arg2) => stringProcessor.unionProcessor(_zod, arg0, arg1, arg2);
  _zod.options = options.options;
});
const ZodTuple_export = util.$constructor("ZodTuple", (_zod, arg1) => {
  let closure_0 = _zod;
  if (!util.globalConfig.memoizer) {
    const config = obj.config;
    const obj2 = { memoizer: util.memoizer() };
    config(obj2);
  }
  const $ZodTuple = obj.$ZodTuple;
  $ZodTuple.init(_zod, arg1);
  const ZodType = exports.ZodType;
  ZodType.init(_zod, arg1);
  _zod._zod.processJSONSchema = (arg0, arg1, arg2) => stringProcessor.tupleProcessor(_zod, arg0, arg1, arg2);
}, obj8);
const ZodRecord_export = util.$constructor("ZodRecord", (_zod, arg1) => {
  let closure_0 = _zod;
  if (!util.globalConfig.memoizer) {
    const config = obj.config;
    const obj2 = { memoizer: util.memoizer() };
    config(obj2);
  }
  const $ZodRecord = obj.$ZodRecord;
  $ZodRecord.init(_zod, arg1);
  const ZodType = exports.ZodType;
  ZodType.init(_zod, arg1);
  _zod._zod.processJSONSchema = (arg0, arg1, arg2) => stringProcessor.recordProcessor(_zod, arg0, arg1, arg2);
  ({ keyType: _zod.keyType, valueType: _zod.valueType } = arg1);
});
const ZodEnum_export = util.$constructor("ZodEnum", (_zod, arg1) => {
  let closure_1;
  let closure_0 = _zod;
  _exports = arg1;
  const $ZodEnum = util.$ZodEnum;
  $ZodEnum.init(_zod, arg1);
  const ZodType = _exports.ZodType;
  ZodType.init(_zod, arg1);
  _zod._zod.processJSONSchema = (arg0, arg1, arg2) => stringProcessor.enumProcessor(_zod, arg0, arg1, arg2);
  _zod.enum = arg1.entries;
  const items = [..._zod._zod.values];
  _zod.options = items;
  set = new Set(Object.keys(arg1.entries));
  _zod.extract = function(arg0, zodLazy) {
    const obj = {};
    const iter = arg0[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp2 = nextResult;
      if (set.has(nextResult)) {
        obj[tmp2] = closure_1.entries[tmp2];
        continue;
      } else {
        let tmp4 = globalThis;
        let _Error = Error;
        let _HermesInternal = HermesInternal;
        let str = " not found in enum";
        let str2 = "Key ";
        let self = this;
        let self2 = this;
        let error = new Error("Key " + tmp2 + " not found in enum");
        throw error;
      }
    }
    const ZodEnum = exports.ZodEnum;
    const obj2 = { checks: [], entries: obj };
    const merged = Object.assign(closure_1);
    util = require("util").util;
    const merged1 = Object.assign(util.normalizeParams(zodLazy));
    const zodEnum = new ZodEnum(obj2);
    return zodEnum;
  };
  _zod.exclude = function(arg0, zodLazy) {
    const obj = {};
    const merged = Object.assign(closure_1.entries);
    const iter = arg0[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      if (set.has(nextResult)) {
        delete obj[tmp2];
        continue;
      } else {
        let tmp5 = globalThis;
        let _Error = Error;
        let _HermesInternal = HermesInternal;
        let str = " not found in enum";
        let str2 = "Key ";
        let self = this;
        let self2 = this;
        let error = new Error("Key " + tmp3 + " not found in enum");
        throw error;
      }
    }
    const ZodEnum = exports.ZodEnum;
    const obj2 = { checks: [], entries: obj };
    const merged1 = Object.assign(closure_1);
    util = require("util").util;
    const merged2 = Object.assign(util.normalizeParams(zodLazy));
    const zodEnum = new ZodEnum(obj2);
    return zodEnum;
  };
});
const ZodOptional_export = util.$constructor("ZodOptional", (_zod, arg1) => {
  const $ZodOptional = util.$ZodOptional;
  $ZodOptional.init(_zod, arg1);
  const ZodType = exports.ZodType;
  ZodType.init(_zod, arg1);
  _zod._zod.processJSONSchema = (arg0, arg1, arg2) => stringProcessor.optionalProcessor(_zod, arg0, arg1, arg2);
  _zod.unwrap = () => _zod._zod.def.innerType;
});
const ZodDefault_export = util.$constructor("ZodDefault", (_zod, arg1) => {
  const $ZodDefault = util.$ZodDefault;
  $ZodDefault.init(_zod, arg1);
  const ZodType = exports.ZodType;
  ZodType.init(_zod, arg1);
  _zod._zod.processJSONSchema = (arg0, arg1, arg2) => stringProcessor.defaultProcessor(_zod, arg0, arg1, arg2);
  _zod.unwrap = () => _zod._zod.def.innerType;
  _zod.removeDefault = _zod.unwrap;
});
const ZodPrefault_export = util.$constructor("ZodPrefault", (_zod, arg1) => {
  const $ZodPrefault = util.$ZodPrefault;
  $ZodPrefault.init(_zod, arg1);
  const ZodType = exports.ZodType;
  ZodType.init(_zod, arg1);
  _zod._zod.processJSONSchema = (arg0, arg1, arg2) => stringProcessor.prefaultProcessor(_zod, arg0, arg1, arg2);
  _zod.unwrap = () => _zod._zod.def.innerType;
});
const ZodNonOptional_export = util.$constructor("ZodNonOptional", (_zod, arg1) => {
  const $ZodNonOptional = util.$ZodNonOptional;
  $ZodNonOptional.init(_zod, arg1);
  const ZodType = exports.ZodType;
  ZodType.init(_zod, arg1);
  _zod._zod.processJSONSchema = (arg0, arg1, arg2) => stringProcessor.nonoptionalProcessor(_zod, arg0, arg1, arg2);
  _zod.unwrap = () => _zod._zod.def.innerType;
});
const ZodCatch_export = util.$constructor("ZodCatch", (_zod, arg1) => {
  const $ZodCatch = util.$ZodCatch;
  $ZodCatch.init(_zod, arg1);
  const ZodType = exports.ZodType;
  ZodType.init(_zod, arg1);
  _zod._zod.processJSONSchema = (arg0, arg1, arg2) => stringProcessor.catchProcessor(_zod, arg0, arg1, arg2);
  _zod.unwrap = () => _zod._zod.def.innerType;
  _zod.removeCatch = _zod.unwrap;
});
const ZodFunction_export = util.$constructor("ZodFunction", (_zod, arg1) => {
  let closure_0 = _zod;
  const $ZodFunction = util.$ZodFunction;
  $ZodFunction.init(_zod, arg1);
  const ZodType = exports.ZodType;
  ZodType.init(_zod, arg1);
  _zod._zod.processJSONSchema = (arg0, arg1, arg2) => stringProcessor.functionProcessor(_zod, arg0, arg1, arg2);
});

export { string };
export function email(zodLazy) {
  return util._email(exports.ZodEmail, zodLazy);
}
export function guid(zodLazy) {
  return util._guid(exports.ZodGUID, zodLazy);
}
export function uuid(zodLazy) {
  return util._uuid(exports.ZodUUID, zodLazy);
}
export function uuidv4(zodLazy) {
  return util._uuidv4(exports.ZodUUID, zodLazy);
}
export function uuidv6(zodLazy) {
  return util._uuidv6(exports.ZodUUID, zodLazy);
}
export function uuidv7(zodLazy) {
  return util._uuidv7(exports.ZodUUID, zodLazy);
}
export function url(url) {
  return util._url(exports.ZodURL, url);
}
export function httpUrl(zodLazy) {
  const url = { protocol: closure_8.httpProtocol, hostname: closure_8.domain };
  const _url = util._url;
  const ZodURL = exports.ZodURL;
  util = require("util").util;
  const merged = Object.assign(util.normalizeParams(zodLazy));
  return _url(ZodURL, url);
}
export function emoji(zodLazy) {
  return util._emoji(exports.ZodEmoji, zodLazy);
}
export function nanoid(zodLazy) {
  return util._nanoid(exports.ZodNanoID, zodLazy);
}
export function cuid(zodLazy) {
  return util._cuid(exports.ZodCUID, zodLazy);
}
export function cuid2(zodLazy) {
  return util._cuid2(exports.ZodCUID2, zodLazy);
}
export function ulid(zodLazy) {
  return util._ulid(exports.ZodULID, zodLazy);
}
export function xid(zodLazy) {
  return util._xid(exports.ZodXID, zodLazy);
}
export function ksuid(zodLazy) {
  return util._ksuid(exports.ZodKSUID, zodLazy);
}
export function ipv4(zodLazy) {
  return util._ipv4(exports.ZodIPv4, zodLazy);
}
export function mac(delimiter) {
  return util._mac(exports.ZodMAC, delimiter);
}
export function ipv6(zodLazy) {
  return util._ipv6(exports.ZodIPv6, zodLazy);
}
export function cidrv4(zodLazy) {
  return util._cidrv4(exports.ZodCIDRv4, zodLazy);
}
export function cidrv6(zodLazy) {
  return util._cidrv6(exports.ZodCIDRv6, zodLazy);
}
export function base64(zodLazy) {
  return util._base64(exports.ZodBase64, zodLazy);
}
export function base64url(zodLazy) {
  return util._base64url(exports.ZodBase64URL, zodLazy);
}
export function e164(zodLazy) {
  return util._e164(exports.ZodE164, zodLazy);
}
export function creditCard(zodLazy) {
  return util._creditCard(exports.ZodCreditCard, zodLazy);
}
export function iban(zodLazy) {
  return util._iban(exports.ZodIBAN, zodLazy);
}
export function jwt(zodLazy) {
  return util._jwt(exports.ZodJWT, zodLazy);
}
export function stringFormat(combined, currencyCode, enc) {
  let obj = enc;
  if (enc === undefined) {
    obj = {};
  }
  return util._stringFormat(exports.ZodCustomStringFormat, combined, currencyCode, obj);
}
export function hostname(enc) {
  return util._stringFormat(exports.ZodCustomStringFormat, "hostname", closure_8.hostname, enc);
}
export function hex(enc) {
  return util._stringFormat(exports.ZodCustomStringFormat, "hex", closure_8.hex, enc);
}
export function currencyCode(enc) {
  return util._stringFormat(exports.ZodCustomStringFormat, "currency_code", closure_8.currencyCode, enc);
}
export function hash(arg0, enc) {
  let str;
  if (enc != null) {
    str = enc.enc;
  }
  if (str == null) {
    str = "hex";
  }
  const combined = "" + arg0 + "_" + str;
  if (util.regexes[combined]) {
    return util._stringFormat(exports.ZodCustomStringFormat, combined, util.regexes[combined], enc);
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const self = this;
    const self2 = this;
    const error = new Error("Unrecognized hash format: " + combined);
    throw error;
  }
}
export { number };
export { int };
export function float32(zodLazy) {
  return util._float32(exports.ZodNumberFormat, zodLazy);
}
export function float64(zodLazy) {
  return util._float64(exports.ZodNumberFormat, zodLazy);
}
export function int32(zodLazy) {
  return util._int32(exports.ZodNumberFormat, zodLazy);
}
export function uint32(zodLazy) {
  return util._uint32(exports.ZodNumberFormat, zodLazy);
}
export { boolean };
export function bigint(zodLazy) {
  return util._bigint(exports.ZodBigInt, zodLazy);
}
export function int64(zodLazy) {
  return util._int64(exports.ZodBigIntFormat, zodLazy);
}
export function uint64(zodLazy) {
  return util._uint64(exports.ZodBigIntFormat, zodLazy);
}
export function symbol(zodLazy) {
  return util._symbol(exports.ZodSymbol, zodLazy);
}
const undefined_export = function _undefined(arg0) {
  return util._undefined(exports.ZodUndefined, arg0);
};
export { undefined_export as undefined };
const null_export = _null;
export { null_export as null };
export function any() {
  return util._any(exports.ZodAny);
}
export { unknown };
export { never };
const void_export = function _void(arg0) {
  return util._void(exports.ZodVoid, arg0);
};
export { void_export as void };
export function date(zodLazy) {
  return util._date(exports.ZodDate, zodLazy);
}
export { array };
export function keyof(_zod) {
  const keys = Object.keys(_zod._zod.def.shape);
  let fromEntriesResult = keys;
  if (Array.isArray(keys)) {
    const _Object = Object;
    fromEntriesResult = Object.fromEntries(keys.map(f104522));
  }
  const ZodEnum = exports.ZodEnum;
  const obj = { type: "enum", entries: fromEntriesResult };
  util = require("util").util;
  const merged = Object.assign(util.normalizeParams(undefined));
  const zodEnum = new ZodEnum(obj);
  return zodEnum;
}
export function object(arg0, zodLazy) {
  let obj = arg0;
  if (arg0 == null) {
    obj = {};
  }
  const obj2 = { type: "object", shape: obj };
  util = require("util").util;
  const merged = Object.assign(util.normalizeParams(zodLazy));
  const zodObject = new exports.ZodObject(obj2);
  return zodObject;
}
export function strictObject(shape, zodLazy) {
  const ZodObject = exports.ZodObject;
  const obj = { type: "object", shape, catchall: util._never(exports.ZodNever, undefined) };
  util = require("util").util;
  const merged = Object.assign(util.normalizeParams(zodLazy));
  const zodObject = new ZodObject(obj);
  return zodObject;
}
export function looseObject(shape, zodLazy) {
  const ZodObject = exports.ZodObject;
  const obj = { type: "object", shape, catchall: util._unknown(exports.ZodUnknown) };
  util = require("util").util;
  const merged = Object.assign(util.normalizeParams(zodLazy));
  const zodObject = new ZodObject(obj);
  return zodObject;
}
export { union };
export function xor(options, zodLazy) {
  const ZodXor = exports.ZodXor;
  const obj = { type: "union", options, inclusive: false };
  util = require("util").util;
  const merged = Object.assign(util.normalizeParams(zodLazy));
  const zodXor = new ZodXor(obj);
  return zodXor;
}
export function discriminatedUnion(discriminator, options, zodLazy) {
  const ZodDiscriminatedUnion = exports.ZodDiscriminatedUnion;
  const obj = { type: "union", options, discriminator };
  util = require("util").util;
  const merged = Object.assign(util.normalizeParams(zodLazy));
  const zodDiscriminatedUnion = new ZodDiscriminatedUnion(obj);
  return zodDiscriminatedUnion;
}
export { intersection };
export { tuple };
export { record };
export function partialRecord(z11, object1Result, zodLazy) {
  const ZodRecord = exports.ZodRecord;
  const obj = { type: "record", keyType: z11, valueType: object1Result, partial: true };
  util = require("util").util;
  const merged = Object.assign(util.normalizeParams(zodLazy));
  const zodRecord = new ZodRecord(obj);
  return zodRecord;
}
export function looseRecord(keyType, valueType, zodLazy) {
  const ZodRecord = exports.ZodRecord;
  const obj = { type: "record", keyType, valueType, mode: "loose" };
  util = require("util").util;
  const merged = Object.assign(util.normalizeParams(zodLazy));
  const zodRecord = new ZodRecord(obj);
  return zodRecord;
}
export function map(keyType, valueType, zodLazy) {
  const ZodMap = exports.ZodMap;
  const obj = { type: "map", keyType, valueType };
  util = require("util").util;
  const merged = Object.assign(util.normalizeParams(zodLazy));
  const zodMap = new ZodMap(obj);
  return zodMap;
}
export function set(valueType, zodLazy) {
  const ZodSet = exports.ZodSet;
  const obj = { type: "set", valueType };
  util = require("util").util;
  const merged = Object.assign(util.normalizeParams(zodLazy));
  const zodSet = new ZodSet(obj);
  return zodSet;
}
const enum_export = _enum;
export { enum_export as enum };
export function nativeEnum(entries, zodLazy) {
  const ZodEnum = exports.ZodEnum;
  const obj = { type: "enum", entries };
  util = require("util").util;
  const merged = Object.assign(util.normalizeParams(zodLazy));
  const zodEnum = new ZodEnum(obj);
  return zodEnum;
}
export function literal(arg0, zodLazy) {
  const ZodLiteral = exports.ZodLiteral;
  let tmp = arg0;
  if (!Array.isArray(arg0)) {
    const items = [arg0];
    tmp = items;
  }
  const obj = { type: "literal", values: tmp };
  util = require("util").util;
  const merged = Object.assign(util.normalizeParams(zodLazy));
  const zodLiteral = new ZodLiteral(obj);
  return zodLiteral;
}
export function file(zodLazy) {
  return util._file(exports.ZodFile, zodLazy);
}
export { transform };
export { optional };
export { exactOptional };
export { nullable };
export function nullish(innerType) {
  const obj = { type: "nullable", innerType };
  const zodNullable = new exports.ZodNullable(obj);
  const obj2 = { type: "optional", innerType: zodNullable };
  const zodOptional = new exports.ZodOptional(obj2);
  return zodOptional;
}
export { _default };
export { prefault };
export { nonoptional };
export function success(innerType) {
  const obj = { type: "success", innerType };
  const zodSuccess = new exports.ZodSuccess(obj);
  return zodSuccess;
}
const catch_export = _catch;
export { catch_export as catch };
export function nan(zodLazy) {
  return util._nan(exports.ZodNaN, zodLazy);
}
export { pipe };
export function codec(_in, out, decode) {
  const obj = { type: "pipe", in: _in, out, transform: decode.decode, reverseTransform: decode.encode };
  const zodCodec = new exports.ZodCodec(obj);
  return zodCodec;
}
export function invertCodec(_zod) {
  const def = _zod._zod.def;
  const obj = { type: "pipe", in: def.out, out: def.in, transform: def.reverseTransform, reverseTransform: def.transform };
  const zodCodec = new exports.ZodCodec(obj);
  return zodCodec;
}
export { readonly };
export function templateLiteral(parts, zodLazy) {
  const ZodTemplateLiteral = exports.ZodTemplateLiteral;
  const obj = { type: "template_literal", parts };
  util = require("util").util;
  const merged = Object.assign(util.normalizeParams(zodLazy));
  const zodTemplateLiteral = new ZodTemplateLiteral(obj);
  return zodTemplateLiteral;
}
export { lazy };
export function promise(innerType) {
  const obj = { type: "promise", innerType };
  const zodPromise = new exports.ZodPromise(obj);
  return zodPromise;
}
export { _function };
const function_export = _function;
export { function_export as function };
export function check(check) {
  const ZodCheck = new util.$ZodCheck({ check: "custom" });
  ZodCheck._zod.check = check;
  return ZodCheck;
}
export function custom(arg0, zodLazy) {
  let fn = arg0;
  const _custom = util._custom;
  const ZodCustom = exports.ZodCustom;
  if (arg0 == null) {
    fn = () => true;
  }
  return _custom(ZodCustom, fn, zodLazy);
}
export { refine };
export { superRefine };
const instanceof_export = function _instanceof(Class, zodLazy) {
  let closure_0 = Class;
  let obj = zodLazy;
  if (zodLazy === undefined) {
    obj = {};
  }
  const ZodInstanceOf = exports.ZodInstanceOf;
  const obj2 = {
    type: "custom",
    check: "custom",
    fn(arg0) {
      return arg0 instanceof closure_0;
    },
    abort: true
  };
  util = require("util").util;
  const merged = Object.assign(util.normalizeParams(obj));
  const zodInstanceOf = new ZodInstanceOf(obj2);
  zodInstanceOf._zod.bag.Class = Class;
  zodInstanceOf._zod.check = (value) => {
    let items;
    if (!(value.value instanceof closure_0)) {
      const issues = value.issues;
      let path = zodInstanceOf._zod.def.path;
      const push = issues.push;
      const obj = { code: "invalid_type", expected: tmp2.name, input: value.value, inst: zodInstanceOf, path: items };
      if (path == null) {
        path = [];
      }
      items = [];
      HermesBuiltin.arraySpread(items, path, 0);
      push(obj);
    }
  };
  return zodInstanceOf;
};
export { instanceof_export as instanceof };
export function json(arg0) {
  let zodLazy;
  let closure_0 = arg0;
  let obj = {
    type: "lazy",
    getter: function() {
      const items = [util._string(exports.ZodString, closure_0), util._number(exports.ZodNumber, undefined), util._boolean(exports.ZodBoolean, undefined), util._null(exports.ZodNull, undefined), util._array(exports.ZodArray, zodLazy, undefined), ];
      const _stringResult = util._string(exports.ZodString, undefined);
      const obj = util;
      if (zodLazy) {
        let zodRecord2;
        let tmp4;
        if (zodLazy._zod) {
          const ZodRecord2 = tmp.ZodRecord;
          const obj2 = { type: "record", keyType: _stringResult, valueType: zodLazy };
          const util2 = require("util").util;
          const merged = Object.assign(util2.normalizeParams(undefined));
          const self = this;
          const self2 = this;
          zodRecord2 = new ZodRecord2(obj2);
          tmp4 = require;
        }
        items[5] = zodRecord2;
        const ZodUnion = tmp.ZodUnion;
        const obj3 = { type: "union", options: items };
        const util3 = tmp4(12158).util;
        const merged1 = Object.assign(util3.normalizeParams(undefined));
        const self3 = this;
        const self4 = this;
        const zodUnion = new ZodUnion(obj3);
        return zodUnion;
      }
      const ZodRecord = tmp.ZodRecord;
      tmp4 = require;
      const obj4 = { type: "record", keyType: obj._string(exports.ZodString, undefined), valueType: _stringResult };
      util = require("util").util;
      const merged2 = Object.assign(util.normalizeParams(tmp2));
      zodRecord2 = new ZodRecord(obj4);
    }
  };
  zodLazy = new zodLazy.ZodLazy(obj);
  return zodLazy;
}
export function preprocess(transform, out) {
  let zodTransform;
  const ZodPreprocess = exports.ZodPreprocess;
  const obj = { type: "pipe", in: zodTransform, out };
  const obj2 = { type: "transform", transform };
  zodTransform = new exports.ZodTransform(obj2);
  const zodPreprocess = new ZodPreprocess(obj);
  return zodPreprocess;
}
export const ZodType = $constructor("ZodType", (arg0, def) => {
  if (!util.globalConfig.localeError) {
    util.config(default_1.default());
  }
  const $ZodType = obj.$ZodType;
  $ZodType.init(arg0, def);
  arg0.def = def;
  arg0.type = def.type;
  return arg0;
}, obj);
export const _ZodString = $constructor2("_ZodString", (_zod, arg1) => {
  let closure_0 = _zod;
  const $ZodString = util.$ZodString;
  $ZodString.init(_zod, arg1);
  const ZodType = exports.ZodType;
  ZodType.init(_zod, arg1);
  _zod._zod.processJSONSchema = (arg0, arg1, arg2) => stringProcessor.stringProcessor(_zod, arg0, arg1, arg2);
}, util.derived(obj2, range));
export const ZodString = util.$constructor("ZodString", (arg0, arg1) => {
  const $ZodString = util.$ZodString;
  $ZodString.init(arg0, arg1);
  const _ZodString = exports._ZodString;
  _ZodString.init(arg0, arg1);
}, obj3);
export const ZodStringFormat = util.$constructor("ZodStringFormat", (arg0, arg1) => {
  const $ZodStringFormat = util.$ZodStringFormat;
  $ZodStringFormat.init(arg0, arg1);
  const _ZodString = exports._ZodString;
  _ZodString.init(arg0, arg1);
});
export const ZodISODateTime = util.$constructor("ZodISODateTime", (arg0, arg1) => {
  const $ZodISODateTime = util.$ZodISODateTime;
  $ZodISODateTime.init(arg0, arg1);
  const ZodStringFormat = exports.ZodStringFormat;
  ZodStringFormat.init(arg0, arg1);
});
export const ZodISODate = util.$constructor("ZodISODate", (arg0, arg1) => {
  const $ZodISODate = util.$ZodISODate;
  $ZodISODate.init(arg0, arg1);
  const ZodStringFormat = exports.ZodStringFormat;
  ZodStringFormat.init(arg0, arg1);
});
export const ZodISOTime = util.$constructor("ZodISOTime", (arg0, arg1) => {
  const $ZodISOTime = util.$ZodISOTime;
  $ZodISOTime.init(arg0, arg1);
  const ZodStringFormat = exports.ZodStringFormat;
  ZodStringFormat.init(arg0, arg1);
});
export const ZodISODuration = util.$constructor("ZodISODuration", (arg0, arg1) => {
  const $ZodISODuration = util.$ZodISODuration;
  $ZodISODuration.init(arg0, arg1);
  const ZodStringFormat = exports.ZodStringFormat;
  ZodStringFormat.init(arg0, arg1);
});
export const ZodEmail = util.$constructor("ZodEmail", (arg0, arg1) => {
  const $ZodEmail = util.$ZodEmail;
  $ZodEmail.init(arg0, arg1);
  const ZodStringFormat = exports.ZodStringFormat;
  ZodStringFormat.init(arg0, arg1);
});
export const ZodGUID = util.$constructor("ZodGUID", (arg0, arg1) => {
  const $ZodGUID = util.$ZodGUID;
  $ZodGUID.init(arg0, arg1);
  const ZodStringFormat = exports.ZodStringFormat;
  ZodStringFormat.init(arg0, arg1);
});
export const ZodUUID = util.$constructor("ZodUUID", (arg0, arg1) => {
  const $ZodUUID = util.$ZodUUID;
  $ZodUUID.init(arg0, arg1);
  const ZodStringFormat = exports.ZodStringFormat;
  ZodStringFormat.init(arg0, arg1);
});
export const ZodURL = util.$constructor("ZodURL", (arg0, arg1) => {
  const $ZodURL = util.$ZodURL;
  $ZodURL.init(arg0, arg1);
  const ZodStringFormat = exports.ZodStringFormat;
  ZodStringFormat.init(arg0, arg1);
});
export const ZodEmoji = util.$constructor("ZodEmoji", (arg0, arg1) => {
  const $ZodEmoji = util.$ZodEmoji;
  $ZodEmoji.init(arg0, arg1);
  const ZodStringFormat = exports.ZodStringFormat;
  ZodStringFormat.init(arg0, arg1);
});
export const ZodNanoID = util.$constructor("ZodNanoID", (arg0, arg1) => {
  const $ZodNanoID = util.$ZodNanoID;
  $ZodNanoID.init(arg0, arg1);
  const ZodStringFormat = exports.ZodStringFormat;
  ZodStringFormat.init(arg0, arg1);
});
export const ZodCUID = util.$constructor("ZodCUID", (arg0, arg1) => {
  const $ZodCUID = util.$ZodCUID;
  $ZodCUID.init(arg0, arg1);
  const ZodStringFormat = exports.ZodStringFormat;
  ZodStringFormat.init(arg0, arg1);
});
export const ZodCUID2 = util.$constructor("ZodCUID2", (arg0, arg1) => {
  const $ZodCUID2 = util.$ZodCUID2;
  $ZodCUID2.init(arg0, arg1);
  const ZodStringFormat = exports.ZodStringFormat;
  ZodStringFormat.init(arg0, arg1);
});
export const ZodULID = util.$constructor("ZodULID", (arg0, arg1) => {
  const $ZodULID = util.$ZodULID;
  $ZodULID.init(arg0, arg1);
  const ZodStringFormat = exports.ZodStringFormat;
  ZodStringFormat.init(arg0, arg1);
});
export const ZodXID = util.$constructor("ZodXID", (arg0, arg1) => {
  const $ZodXID = util.$ZodXID;
  $ZodXID.init(arg0, arg1);
  const ZodStringFormat = exports.ZodStringFormat;
  ZodStringFormat.init(arg0, arg1);
});
export const ZodKSUID = util.$constructor("ZodKSUID", (arg0, arg1) => {
  const $ZodKSUID = util.$ZodKSUID;
  $ZodKSUID.init(arg0, arg1);
  const ZodStringFormat = exports.ZodStringFormat;
  ZodStringFormat.init(arg0, arg1);
});
export const ZodIPv4 = util.$constructor("ZodIPv4", (arg0, arg1) => {
  const $ZodIPv4 = util.$ZodIPv4;
  $ZodIPv4.init(arg0, arg1);
  const ZodStringFormat = exports.ZodStringFormat;
  ZodStringFormat.init(arg0, arg1);
});
export const ZodMAC = util.$constructor("ZodMAC", (arg0, arg1) => {
  const $ZodMAC = util.$ZodMAC;
  $ZodMAC.init(arg0, arg1);
  const ZodStringFormat = exports.ZodStringFormat;
  ZodStringFormat.init(arg0, arg1);
});
export const ZodIPv6 = util.$constructor("ZodIPv6", (arg0, arg1) => {
  const $ZodIPv6 = util.$ZodIPv6;
  $ZodIPv6.init(arg0, arg1);
  const ZodStringFormat = exports.ZodStringFormat;
  ZodStringFormat.init(arg0, arg1);
});
export const ZodCIDRv4 = util.$constructor("ZodCIDRv4", (arg0, arg1) => {
  const $ZodCIDRv4 = util.$ZodCIDRv4;
  $ZodCIDRv4.init(arg0, arg1);
  const ZodStringFormat = exports.ZodStringFormat;
  ZodStringFormat.init(arg0, arg1);
});
export const ZodCIDRv6 = util.$constructor("ZodCIDRv6", (arg0, arg1) => {
  const $ZodCIDRv6 = util.$ZodCIDRv6;
  $ZodCIDRv6.init(arg0, arg1);
  const ZodStringFormat = exports.ZodStringFormat;
  ZodStringFormat.init(arg0, arg1);
});
export const ZodBase64 = util.$constructor("ZodBase64", (arg0, arg1) => {
  const $ZodBase64 = util.$ZodBase64;
  $ZodBase64.init(arg0, arg1);
  const ZodStringFormat = exports.ZodStringFormat;
  ZodStringFormat.init(arg0, arg1);
});
export const ZodBase64URL = util.$constructor("ZodBase64URL", (arg0, arg1) => {
  const $ZodBase64URL = util.$ZodBase64URL;
  $ZodBase64URL.init(arg0, arg1);
  const ZodStringFormat = exports.ZodStringFormat;
  ZodStringFormat.init(arg0, arg1);
});
export const ZodE164 = util.$constructor("ZodE164", (arg0, arg1) => {
  const $ZodE164 = util.$ZodE164;
  $ZodE164.init(arg0, arg1);
  const ZodStringFormat = exports.ZodStringFormat;
  ZodStringFormat.init(arg0, arg1);
});
export const ZodCreditCard = util.$constructor("ZodCreditCard", (arg0, arg1) => {
  const $ZodCreditCard = util.$ZodCreditCard;
  $ZodCreditCard.init(arg0, arg1);
  const ZodStringFormat = exports.ZodStringFormat;
  ZodStringFormat.init(arg0, arg1);
});
export const ZodIBAN = util.$constructor("ZodIBAN", (arg0, arg1) => {
  const $ZodIBAN = util.$ZodIBAN;
  $ZodIBAN.init(arg0, arg1);
  const ZodStringFormat = exports.ZodStringFormat;
  ZodStringFormat.init(arg0, arg1);
});
export const ZodJWT = util.$constructor("ZodJWT", (arg0, arg1) => {
  const $ZodJWT = util.$ZodJWT;
  $ZodJWT.init(arg0, arg1);
  const ZodStringFormat = exports.ZodStringFormat;
  ZodStringFormat.init(arg0, arg1);
});
export const ZodCustomStringFormat = util.$constructor("ZodCustomStringFormat", (arg0, arg1) => {
  const $ZodCustomStringFormat = util.$ZodCustomStringFormat;
  $ZodCustomStringFormat.init(arg0, arg1);
  const ZodStringFormat = exports.ZodStringFormat;
  ZodStringFormat.init(arg0, arg1);
});
export const ZodNumber = $constructor3("ZodNumber", (_zod, arg1) => {
  let closure_0 = _zod;
  const $ZodNumber = util.$ZodNumber;
  $ZodNumber.init(_zod, arg1);
  const ZodType = exports.ZodType;
  ZodType.init(_zod, arg1);
  _zod._zod.processJSONSchema = (arg0, arg1, arg2) => stringProcessor.numberProcessor(_zod, arg0, arg1, arg2);
  _zod.isFinite = true;
}, util2.derived(obj4, range1));
export const ZodNumberFormat = util.$constructor("ZodNumberFormat", (arg0, arg1) => {
  const $ZodNumberFormat = util.$ZodNumberFormat;
  $ZodNumberFormat.init(arg0, arg1);
  const ZodNumber = exports.ZodNumber;
  ZodNumber.init(arg0, arg1);
});
export const ZodBoolean = util.$constructor("ZodBoolean", (_zod, arg1) => {
  let closure_0 = _zod;
  const $ZodBoolean = util.$ZodBoolean;
  $ZodBoolean.init(_zod, arg1);
  const ZodType = exports.ZodType;
  ZodType.init(_zod, arg1);
  _zod._zod.processJSONSchema = (arg0, arg1, arg2) => stringProcessor.booleanProcessor(_zod, arg0, arg1, arg2);
});
export const ZodBigInt = $constructor4("ZodBigInt", (_zod, arg1) => {
  let closure_0 = _zod;
  const $ZodBigInt = util.$ZodBigInt;
  $ZodBigInt.init(_zod, arg1);
  const ZodType = exports.ZodType;
  ZodType.init(_zod, arg1);
  _zod._zod.processJSONSchema = (arg0, arg1, arg2) => stringProcessor.bigintProcessor(_zod, arg0, arg1, arg2);
}, util3.derived(obj5, range2));
export const ZodBigIntFormat = util.$constructor("ZodBigIntFormat", (arg0, arg1) => {
  const $ZodBigIntFormat = util.$ZodBigIntFormat;
  $ZodBigIntFormat.init(arg0, arg1);
  const ZodBigInt = exports.ZodBigInt;
  ZodBigInt.init(arg0, arg1);
});
export const ZodSymbol = util.$constructor("ZodSymbol", (_zod, arg1) => {
  let closure_0 = _zod;
  const $ZodSymbol = util.$ZodSymbol;
  $ZodSymbol.init(_zod, arg1);
  const ZodType = exports.ZodType;
  ZodType.init(_zod, arg1);
  _zod._zod.processJSONSchema = (arg0, arg1, arg2) => stringProcessor.symbolProcessor(_zod, arg0, arg1, arg2);
});
export const ZodUndefined = util.$constructor("ZodUndefined", (_zod, arg1) => {
  let closure_0 = _zod;
  const $ZodUndefined = util.$ZodUndefined;
  $ZodUndefined.init(_zod, arg1);
  const ZodType = exports.ZodType;
  ZodType.init(_zod, arg1);
  _zod._zod.processJSONSchema = (arg0, arg1, arg2) => stringProcessor.undefinedProcessor(_zod, arg0, arg1, arg2);
});
export const ZodNull = util.$constructor("ZodNull", (_zod, arg1) => {
  let closure_0 = _zod;
  const $ZodNull = util.$ZodNull;
  $ZodNull.init(_zod, arg1);
  const ZodType = exports.ZodType;
  ZodType.init(_zod, arg1);
  _zod._zod.processJSONSchema = (arg0, arg1, arg2) => stringProcessor.nullProcessor(_zod, arg0, arg1, arg2);
});
export const ZodAny = util.$constructor("ZodAny", (_zod, arg1) => {
  let closure_0 = _zod;
  const $ZodAny = util.$ZodAny;
  $ZodAny.init(_zod, arg1);
  const ZodType = exports.ZodType;
  ZodType.init(_zod, arg1);
  _zod._zod.processJSONSchema = (arg0, arg1, arg2) => stringProcessor.anyProcessor(_zod, arg0, arg1, arg2);
});
export const ZodUnknown = util.$constructor("ZodUnknown", (_zod, arg1) => {
  let closure_0 = _zod;
  const $ZodUnknown = util.$ZodUnknown;
  $ZodUnknown.init(_zod, arg1);
  const ZodType = exports.ZodType;
  ZodType.init(_zod, arg1);
  _zod._zod.processJSONSchema = (arg0, arg1, arg2) => stringProcessor.unknownProcessor(_zod, arg0, arg1, arg2);
});
export const ZodNever = util.$constructor("ZodNever", (_zod, arg1) => {
  let closure_0 = _zod;
  const $ZodNever = util.$ZodNever;
  $ZodNever.init(_zod, arg1);
  const ZodType = exports.ZodType;
  ZodType.init(_zod, arg1);
  _zod._zod.processJSONSchema = (arg0, arg1, arg2) => stringProcessor.neverProcessor(_zod, arg0, arg1, arg2);
});
export const ZodVoid = util.$constructor("ZodVoid", (_zod, arg1) => {
  let closure_0 = _zod;
  const $ZodVoid = util.$ZodVoid;
  $ZodVoid.init(_zod, arg1);
  const ZodType = exports.ZodType;
  ZodType.init(_zod, arg1);
  _zod._zod.processJSONSchema = (arg0, arg1, arg2) => stringProcessor.voidProcessor(_zod, arg0, arg1, arg2);
});
export const ZodDate = $constructor5("ZodDate", (_zod, arg1) => {
  const $ZodDate = util.$ZodDate;
  $ZodDate.init(_zod, arg1);
  const ZodType = exports.ZodType;
  ZodType.init(_zod, arg1);
  _zod._zod.processJSONSchema = (arg0, arg1, arg2) => stringProcessor.dateProcessor(_zod, arg0, arg1, arg2);
  _zod.min = (arg0, arg1) => _zod.check(closure_10.gte(arg0, arg1));
  _zod.max = (arg0, arg1) => _zod.check(closure_10.lte(arg0, arg1));
}, util_mod.derived(obj6, {}));
export const ZodArray = util.$constructor("ZodArray", (_zod, element) => {
  let closure_0 = _zod;
  if (!util.globalConfig.memoizer) {
    const config = obj.config;
    const obj2 = { memoizer: util.memoizer() };
    config(obj2);
  }
  const $ZodArray = obj.$ZodArray;
  $ZodArray.init(_zod, element);
  const ZodType = exports.ZodType;
  ZodType.init(_zod, element);
  _zod._zod.processJSONSchema = (arg0, arg1, arg2) => stringProcessor.arrayProcessor(_zod, arg0, arg1, arg2);
  _zod.element = element.element;
}, range3);
export const ZodObject = util.$constructor("ZodObject", (_zod, arg1) => {
  _require = _zod;
  if (!util.globalConfig.memoizer) {
    const config = obj.config;
    const obj2 = { memoizer: util.memoizer() };
    config(obj2);
  }
  const $ZodObjectJIT = obj.$ZodObjectJIT;
  $ZodObjectJIT.init(_zod, arg1);
  const ZodType = exports.ZodType;
  ZodType.init(_zod, arg1);
  _zod._zod.processJSONSchema = (arg0, arg1, arg2) => stringProcessor.objectProcessor(_zod, arg0, arg1, arg2);
  util = require("util").util;
  util.installLazyProp(_zod, "shape", (_zod) => _zod._zod.def.shape, false);
}, obj7);
export { ZodUnion_export as ZodUnion };
export const ZodXor = util.$constructor("ZodXor", (_zod, options) => {
  let closure_0 = _zod;
  const ZodUnion = exports.ZodUnion;
  ZodUnion.init(_zod, options);
  const $ZodXor = util.$ZodXor;
  $ZodXor.init(_zod, options);
  _zod._zod.processJSONSchema = (arg0, arg1, arg2) => stringProcessor.unionProcessor(_zod, arg0, arg1, arg2);
  _zod.options = options.options;
});
export const ZodDiscriminatedUnion = util.$constructor("ZodDiscriminatedUnion", (arg0, arg1) => {
  const ZodUnion = exports.ZodUnion;
  ZodUnion.init(arg0, arg1);
  const $ZodDiscriminatedUnion = util.$ZodDiscriminatedUnion;
  $ZodDiscriminatedUnion.init(arg0, arg1);
});
export const ZodIntersection = util.$constructor("ZodIntersection", (_zod, arg1) => {
  let closure_0 = _zod;
  const $ZodIntersection = util.$ZodIntersection;
  $ZodIntersection.init(_zod, arg1);
  const ZodType = exports.ZodType;
  ZodType.init(_zod, arg1);
  _zod._zod.processJSONSchema = (arg0, arg1, arg2) => stringProcessor.intersectionProcessor(_zod, arg0, arg1, arg2);
});
export { ZodTuple_export as ZodTuple };
export { ZodRecord_export as ZodRecord };
export const ZodMap = util.$constructor("ZodMap", (_zod, arg1) => {
  if (!util.globalConfig.memoizer) {
    const config = obj.config;
    const obj2 = { memoizer: util.memoizer() };
    config(obj2);
  }
  const $ZodMap = obj.$ZodMap;
  $ZodMap.init(_zod, arg1);
  const ZodType = exports.ZodType;
  ZodType.init(_zod, arg1);
  _zod._zod.processJSONSchema = (arg0, arg1, arg2) => stringProcessor.mapProcessor(_zod, arg0, arg1, arg2);
  ({ keyType: _zod.keyType, valueType: _zod.valueType } = arg1);
  _zod.min = () => {
    const items = [...HermesBuiltin.copyRestArgs()];
    return _zod.check(util._minSize.apply(items));
  };
  _zod.nonempty = (zodLazy) => _zod.check(util._minSize(1, zodLazy));
  _zod.max = () => {
    const items = [...HermesBuiltin.copyRestArgs()];
    return _zod.check(util._maxSize.apply(items));
  };
  _zod.size = () => {
    const items = [...HermesBuiltin.copyRestArgs()];
    return _zod.check(util._size.apply(items));
  };
});
export const ZodSet = util.$constructor("ZodSet", (_zod, arg1) => {
  if (!util.globalConfig.memoizer) {
    const config = obj.config;
    const obj2 = { memoizer: util.memoizer() };
    config(obj2);
  }
  const $ZodSet = obj.$ZodSet;
  $ZodSet.init(_zod, arg1);
  const ZodType = exports.ZodType;
  ZodType.init(_zod, arg1);
  _zod._zod.processJSONSchema = (arg0, arg1, arg2) => stringProcessor.setProcessor(_zod, arg0, arg1, arg2);
  _zod.min = () => {
    const items = [...HermesBuiltin.copyRestArgs()];
    return _zod.check(util._minSize.apply(items));
  };
  _zod.nonempty = (zodLazy) => _zod.check(util._minSize(1, zodLazy));
  _zod.max = () => {
    const items = [...HermesBuiltin.copyRestArgs()];
    return _zod.check(util._maxSize.apply(items));
  };
  _zod.size = () => {
    const items = [...HermesBuiltin.copyRestArgs()];
    return _zod.check(util._size.apply(items));
  };
});
export { ZodEnum_export as ZodEnum };
export const ZodLiteral = util.$constructor("ZodLiteral", (_zod, arg1) => {
  let values;
  let closure_0 = _zod;
  _exports = arg1;
  const $ZodLiteral = util.$ZodLiteral;
  $ZodLiteral.init(_zod, arg1);
  const ZodType = _exports.ZodType;
  ZodType.init(_zod, arg1);
  _zod._zod.processJSONSchema = (arg0, arg1, arg2) => stringProcessor.literalProcessor(_zod, arg0, arg1, arg2);
  _zod.values = new Set(arg1.values);
  const obj = {
    get() {
      if (values.values.length > 1) {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error = new Error("This schema contains multiple valid literal values. Use `.values` instead.");
        throw error;
      } else {
        return tmp.values[0];
      }
    }
  };
  new Set(arg1.values);
  Object.defineProperty(_zod, "value", obj);
});
export const ZodFile = util.$constructor("ZodFile", (_zod, arg1) => {
  const $ZodFile = util.$ZodFile;
  $ZodFile.init(_zod, arg1);
  const ZodType = exports.ZodType;
  ZodType.init(_zod, arg1);
  _zod._zod.processJSONSchema = (arg0, arg1, arg2) => stringProcessor.fileProcessor(_zod, arg0, arg1, arg2);
  _zod.min = (minimum, zodLazy) => _zod.check(util._minSize(minimum, zodLazy));
  _zod.max = (maximum, zodLazy) => _zod.check(util._maxSize(maximum, zodLazy));
  _zod.mime = (items, zodLazy) => {
    const check = _zod.check;
    const _mime = util._mime;
    let tmp3 = items;
    if (!Array.isArray(items)) {
      items = [items];
      tmp3 = items;
    }
    return check(_mime(tmp3, zodLazy));
  };
});
export const ZodTransform = util.$constructor("ZodTransform", (_zod, arg1) => {
  let closure_1;
  let constructor = _zod;
  _exports = arg1;
  if (!util.globalConfig.memoizer) {
    const config = obj.config;
    const obj2 = { memoizer: util.memoizer() };
    config(obj2);
  }
  const $ZodTransform = obj.$ZodTransform;
  $ZodTransform.init(_zod, arg1);
  const ZodType = _exports.ZodType;
  ZodType.init(_zod, arg1);
  _zod._zod.processJSONSchema = (arg0, arg1, arg2) => stringProcessor.transformProcessor(constructor, arg0, arg1, arg2);
  _zod._zod.parse = function(inst, direction) {
    let iter = inst;
    constructor = inst;
    if ("backward" === direction.direction) {
      const self = this;
      const self2 = this;
      ZodEncodeError = new ZodEncodeError.$ZodEncodeError(constructor.constructor.name);
      throw ZodEncodeError;
    } else {
      iter.addIssue = (fatal) => {
        if (typeof fatal === "string") {
          const issues = inst.issues;
          const push2 = issues.push;
          const util2 = require("util").util;
          push2(util2.issue(fatal, inst.value, closure_1));
        } else {
          if (fatal.fatal) {
            fatal.continue = false;
          }
          if (fatal.code == null) {
            fatal.code = "custom";
          }
          if (!("input" in fatal)) {
            fatal.input = inst.value;
          }
          if (fatal.inst == null) {
            fatal.inst = inst;
          }
          const issues1 = inst.issues;
          const push = issues1.push;
          util = require("util").util;
          push(util.issue(fatal));
        }
      };
      const transformResult = closure_1.transform(iter.value, iter);
      if (transformResult instanceof Promise) {
        iter = transformResult.then((value) => {
          inst.value = value;
          return inst;
        });
      } else {
        iter.value = transformResult;
      }
      return iter;
    }
  };
});
export { ZodOptional_export as ZodOptional };
export const ZodExactOptional = util.$constructor("ZodExactOptional", (_zod, arg1) => {
  const $ZodExactOptional = util.$ZodExactOptional;
  $ZodExactOptional.init(_zod, arg1);
  const ZodType = exports.ZodType;
  ZodType.init(_zod, arg1);
  _zod._zod.processJSONSchema = (arg0, arg1, arg2) => stringProcessor.optionalProcessor(_zod, arg0, arg1, arg2);
  _zod.unwrap = () => _zod._zod.def.innerType;
});
export const ZodNullable = util.$constructor("ZodNullable", (_zod, arg1) => {
  const $ZodNullable = util.$ZodNullable;
  $ZodNullable.init(_zod, arg1);
  const ZodType = exports.ZodType;
  ZodType.init(_zod, arg1);
  _zod._zod.processJSONSchema = (arg0, arg1, arg2) => stringProcessor.nullableProcessor(_zod, arg0, arg1, arg2);
  _zod.unwrap = () => _zod._zod.def.innerType;
});
export { ZodDefault_export as ZodDefault };
export { ZodPrefault_export as ZodPrefault };
export { ZodNonOptional_export as ZodNonOptional };
export const ZodSuccess = util.$constructor("ZodSuccess", (_zod, arg1) => {
  const $ZodSuccess = util.$ZodSuccess;
  $ZodSuccess.init(_zod, arg1);
  const ZodType = exports.ZodType;
  ZodType.init(_zod, arg1);
  _zod._zod.processJSONSchema = (arg0, arg1, arg2) => stringProcessor.successProcessor(_zod, arg0, arg1, arg2);
  _zod.unwrap = () => _zod._zod.def.innerType;
});
export { ZodCatch_export as ZodCatch };
export const ZodNaN = util.$constructor("ZodNaN", (_zod, arg1) => {
  let closure_0 = _zod;
  const $ZodNaN = util.$ZodNaN;
  $ZodNaN.init(_zod, arg1);
  const ZodType = exports.ZodType;
  ZodType.init(_zod, arg1);
  _zod._zod.processJSONSchema = (arg0, arg1, arg2) => stringProcessor.nanProcessor(_zod, arg0, arg1, arg2);
});
export const ZodPipe = util.$constructor("ZodPipe", (_zod, arg1) => {
  let closure_0 = _zod;
  const $ZodPipe = util.$ZodPipe;
  $ZodPipe.init(_zod, arg1);
  const ZodType = exports.ZodType;
  ZodType.init(_zod, arg1);
  _zod._zod.processJSONSchema = (arg0, arg1, arg2) => stringProcessor.pipeProcessor(_zod, arg0, arg1, arg2);
  ({ in: _zod.in, out: _zod.out } = arg1);
});
export const ZodCodec = util.$constructor("ZodCodec", (arg0, arg1) => {
  const ZodPipe = exports.ZodPipe;
  ZodPipe.init(arg0, arg1);
  const $ZodCodec = util.$ZodCodec;
  $ZodCodec.init(arg0, arg1);
});
export const ZodPreprocess = util.$constructor("ZodPreprocess", (arg0, arg1) => {
  const ZodPipe = exports.ZodPipe;
  ZodPipe.init(arg0, arg1);
  const $ZodPreprocess = util.$ZodPreprocess;
  $ZodPreprocess.init(arg0, arg1);
});
export const ZodReadonly = util.$constructor("ZodReadonly", (_zod, arg1) => {
  const $ZodReadonly = util.$ZodReadonly;
  $ZodReadonly.init(_zod, arg1);
  const ZodType = exports.ZodType;
  ZodType.init(_zod, arg1);
  _zod._zod.processJSONSchema = (arg0, arg1, arg2) => stringProcessor.readonlyProcessor(_zod, arg0, arg1, arg2);
  _zod.unwrap = () => _zod._zod.def.innerType;
});
export const ZodTemplateLiteral = util.$constructor("ZodTemplateLiteral", (_zod, arg1) => {
  let closure_0 = _zod;
  const $ZodTemplateLiteral = util.$ZodTemplateLiteral;
  $ZodTemplateLiteral.init(_zod, arg1);
  const ZodType = exports.ZodType;
  ZodType.init(_zod, arg1);
  _zod._zod.processJSONSchema = (arg0, arg1, arg2) => stringProcessor.templateLiteralProcessor(_zod, arg0, arg1, arg2);
});
export const ZodLazy = util.$constructor("ZodLazy", (_zod, arg1) => {
  const $ZodLazy = util.$ZodLazy;
  $ZodLazy.init(_zod, arg1);
  const ZodType = exports.ZodType;
  ZodType.init(_zod, arg1);
  _zod._zod.processJSONSchema = (arg0, arg1, arg2) => stringProcessor.lazyProcessor(_zod, arg0, arg1, arg2);
  _zod.unwrap = () => {
    const def = _zod._zod.def;
    return def.getter();
  };
});
export const ZodPromise = util.$constructor("ZodPromise", (_zod, arg1) => {
  const $ZodPromise = util.$ZodPromise;
  $ZodPromise.init(_zod, arg1);
  const ZodType = exports.ZodType;
  ZodType.init(_zod, arg1);
  _zod._zod.processJSONSchema = (arg0, arg1, arg2) => stringProcessor.promiseProcessor(_zod, arg0, arg1, arg2);
  _zod.unwrap = () => _zod._zod.def.innerType;
});
export { ZodFunction_export as ZodFunction };
export const ZodCustom = util.$constructor("ZodCustom", (_zod, arg1) => {
  let closure_0 = _zod;
  const $ZodCustom = util.$ZodCustom;
  $ZodCustom.init(_zod, arg1);
  const ZodType = exports.ZodType;
  ZodType.init(_zod, arg1);
  _zod._zod.processJSONSchema = (arg0, arg1, arg2) => stringProcessor.customProcessor(_zod, arg0, arg1, arg2);
});
export const ZodInstanceOf = util.$constructor("ZodInstanceOf", (arg0, arg1) => {
  const ZodCustom = exports.ZodCustom;
  ZodCustom.init(arg0, arg1);
}, obj9);
export const stringbool = () => {
  const obj = { Codec: exports.ZodCodec, Boolean: exports.ZodBoolean, String: exports.ZodString };
  const items = [obj, ...HermesBuiltin.copyRestArgs()];
  return util._stringbool.apply(items);
};
