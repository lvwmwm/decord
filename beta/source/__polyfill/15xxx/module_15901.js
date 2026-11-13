// Module ID: 15901
// Function ID: 15902
// Dependencies: [93, 95, 98, 32, 5, 41, 42, 15899, 15897, 15898, 15902, 15895]
// Exports: custom, instanceof, oboolean, onumber, ostring

// Module 15901
import defaultErrorMap from "defaultErrorMap" /* 15895 */;
import _mod15898 from "module_15898" /* 15898 */;
import DIRTY from "DIRTY" /* 15899 */;
import errorUtil2 from "errorUtil" /* 15902 */;
import c2_mod from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;

const require = globalThis.__r;
let c7, success;

let self = this;
function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

    }));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
function processCreateParams(required_error) {
  let errorMap;
  let invalid_type_error;
  let closure_0 = required_error;
  if (closure_0) {
    ({ errorMap, invalid_type_error } = required_error);
    required_error = required_error.required_error;
    const description = required_error.description;
    if (errorMap) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("Can't use \"invalid_type_error\" or \"required_error\" in conjunction with custom error map.");
      throw error;
    }
    const obj = { errorMap: null, description: null };
    if (errorMap) {
      obj.errorMap = errorMap;
      obj.description = description;
      return obj;
    } else {
      obj.errorMap = function errorMap(code, defaultError) {
        let obj;
        defaultError = message.message;
        if ("invalid_enum_value" === code.code) {
          if (null == defaultError) {
            defaultError = defaultError.defaultError;
          }
          obj = { message: defaultError };
          const obj2 = { message: defaultError };
        } else if (undefined === defaultError.data) {
          let defaultError3 = defaultError;
          if (null == defaultError) {
            defaultError3 = required_error;
          }
          if (null === defaultError3) {
            defaultError3 = defaultError.defaultError;
          }
          obj = { message: defaultError3 };
          const obj3 = { message: defaultError3 };
        } else if ("invalid_type" !== code.code) {
          obj = { message: defaultError.defaultError };
          const obj4 = { message: defaultError.defaultError };
        } else {
          let defaultError2 = defaultError;
          if (null == defaultError) {
            defaultError2 = invalid_type_error;
          }
          if (null === defaultError2) {
            defaultError2 = defaultError.defaultError;
          }
          obj = { message: defaultError2 };
        }
        return obj;
      };
      obj.description = description;
      return obj;
    }
  } else {
    return {};
  }
}
function timeRegexSource(iter) {
  let str2;
  const precision = iter.precision;
  if (precision) {
    const _HermesInternal2 = HermesInternal;
    str2 = "" + "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d" + "\\.\\d{" + precision + "}";
  } else {
    str2 = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
    if (null == precision) {
      const _HermesInternal = HermesInternal;
      str2 = "" + "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d" + "(\\.\\d+)?";
    }
  }
  return str2;
}
function datetimeRegex(iter) {
  let str2;
  const precision = iter.precision;
  const tmp = c31;
  if (iter.precision) {
    const _HermesInternal2 = HermesInternal;
    str2 = "" + "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d" + "\\.\\d{" + precision + "}";
  } else {
    str2 = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
    if (null == precision) {
      const _HermesInternal = HermesInternal;
      str2 = "" + "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d" + "(\\.\\d+)?";
    }
  }
  const combined = "" + tmp + "T" + str2;
  const items = [];
  let str9 = "Z";
  const push = items.push;
  if (iter.local) {
    str9 = "Z?";
  }
  push(str9);
  if (iter.offset) {
    items.push("([+-]\\d{2}:?\\d{2})");
  }
  regExp = new RegExp("^" + "" + combined + "(" + items.join("|") + ")" + "$");
  return regExp;
}
function isValidJWT(arg0, arg1) {
  if (re22.test(arg0)) {
    try {
      const str2 = _slicedToArray(arg0.split("."), 1)[0];
      const str4 = str2.replace(/-/g, "+");
      const replaced = str4.replace(/_/g, "/");
      const _JSON = JSON;
      const _atob = atob;
      const parsed = JSON.parse(atob(replaced.padEnd(str2.length + (4 - str2.length % 4) % 4, "=")));
      let tmp5 = typeof parsed === "object" && null !== tmp4;
      if (tmp5) {
        let tmp9 = !(!tmp4.typ || !tmp4.alg);
        const tmp7 = !tmp4.typ || !tmp4.alg;
        if (tmp9) {
          tmp9 = !arg1 || parsed.alg === arg1;
          const tmp11 = !arg1 || parsed.alg === arg1;
        }
        tmp5 = tmp9;
      }
      return tmp5;
    } catch (err) {
      return false;
    }
  } else {
    return false;
  }
}
function isValidCidr(data, version) {
  const tmp = "v4" !== version && version || !re26.test(data);
  let tmp3 = !tmp;
  if (tmp) {
    tmp3 = !("v6" !== version && version || !re28.test(data));
    const tmp4 = "v6" !== version && version || !re28.test(data);
  }
  return tmp3;
}
function deepPartialify(element) {
  if (element instanceof _module2Result14) {
    const obj4 = {};
    for (const key10045 in element.shape) {
      obj4[key10045] = _module2Result29.create(deepPartialify(element.shape[key10045]));
      continue;
    }
    const obj5 = {
      shape() {
          return obj4;
        }
    };
    const merged = Object.assign(element._def);
    const self3 = this;
    const self4 = this;
    const tmp13 = new _module2Result14(obj5);
    return tmp13;
  } else {
    let tmp2;
    if (element instanceof _module2Result13) {
      obj6 = { type: deepPartialify(element.element) };
      const merged1 = Object.assign(element._def);
      const self = this;
      const self2 = this;
      tmp2 = new tmp(obj6);
    } else {
      const obj = _module2Result29;
      if (element instanceof _module2Result29) {
        tmp2 = obj.create(deepPartialify(element.unwrap()));
      } else {
        const obj2 = _module2Result30;
        if (element instanceof _module2Result30) {
          tmp2 = obj2.create(deepPartialify(element.unwrap()));
        } else {
          tmp2 = element;
          const obj3 = _module2Result18;
          if (element instanceof _module2Result18) {
            const items = element.items;
            tmp2 = obj3.create(items.map((item) => deepPartialify(item)));
          }
        }
      }
    }
    return tmp2;
  }
}
function mergeValues(data, arg1) {
  const parsedType = _mod15898.getParsedType(data);
  const parsedType1 = _mod15898.getParsedType(arg1);
  if (data === arg1) {
    return { valid: true, data };
  } else {
    if (parsedType === _mod15898.ZodParsedType.object) {
      if (parsedType1 === _mod15898.ZodParsedType.object) {
        const util = tmp(15898).util;
        let closure_0 = util.objectKeys(arg1);
        const util2 = tmp(15898).util;
        const objectKeysResult = util2.objectKeys(data);
        const found = objectKeysResult.filter((item) => -1 !== closure_0.indexOf(item));
        const obj3 = {};
        const merged = Object.assign(data);
        const merged1 = Object.assign(arg1);
        const iter = found[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp20 = nextResult;
          let tmp22 = mergeValues(data[nextResult], arg1[nextResult]);
          if (tmp22.valid) {
            obj3[tmp20] = tmp23.data;
            continue;
          } else {
            let obj4 = { valid: false };
            iter.return();
            return obj4;
          }
        }
        return { valid: true, data: obj3 };
      }
    }
    if (parsedType === _mod15898.ZodParsedType.array) {
      if (parsedType1 === _mod15898.ZodParsedType.array) {
        if (data.length !== arg1.length) {
          return { valid: false };
        } else {
          const items = [];
          let num3 = 0;
          if (0 < data.length) {
            const tmp6 = mergeValues(data[num3], arg1[num3]);
            while (tmp6.valid) {
              let arr = items.push(tmp6.data);
              num3 = num3 + 1;
            }
            return { valid: false };
          }
          return { valid: true, data: items };
        }
      }
    }
    if (parsedType === _mod15898.ZodParsedType.date) {
      if (parsedType1 === _mod15898.ZodParsedType.date) {
        let obj;
        if (+data === +arg1) {
          obj = { valid: true, data };
          const obj7 = { valid: true, data };
        }
        return obj;
      }
    }
    obj = { valid: false };
  }
}
let c2 = c2_mod;
let closure_10 = this && self.__classPrivateFieldGet || (function(arg0, has, arg2, call) {
  let tmp6;
  if ("a" === arg2) {
    if (!call) {
      const _TypeError = TypeError;
      const self = this;
      const self2 = this;
      const typeError = new TypeError("Private accessor was defined without a getter");
      throw typeError;
    }
  }
  if (typeof has === "function") {
    tmp6 = arg0 !== has || !call;
  } else {
    tmp6 = !has.has(arg0);
  }
  if (tmp6) {
    const _TypeError2 = TypeError;
    const self3 = this;
    const self4 = this;
    const typeError1 = new TypeError("Cannot read private member from an object whose class did not declare it");
    throw typeError1;
  } else {
    let tmp7 = call;
    if ("m" !== arg2) {
      let callResult;
      if ("a" === arg2) {
        callResult = call.call(arg0);
      } else if (call) {
        callResult = call.value;
      } else {
        callResult = has.get(arg0);
      }
      tmp7 = callResult;
    }
    return tmp7;
  }
});
let tmp4 = self && self.__classPrivateFieldSet || (function(arg0, has, value, arg3, call) {
  if ("m" === arg3) {
    const _TypeError3 = TypeError;
    const self5 = this;
    const self6 = this;
    const typeError = new TypeError("Private method is not writable");
    throw typeError;
  } else {
    let tmp7;
    if ("a" === arg3) {
      if (!call) {
        const _TypeError = TypeError;
        const self = this;
        const self2 = this;
        const typeError1 = new TypeError("Private accessor was defined without a setter");
        throw typeError1;
      }
    }
    if (typeof has === "function") {
      tmp7 = arg0 !== has || !call;
    } else {
      tmp7 = !has.has(arg0);
    }
    if (tmp7) {
      const _TypeError2 = TypeError;
      const self3 = this;
      const self4 = this;
      const typeError2 = new TypeError("Cannot write private member to an object whose class did not declare it");
      throw typeError2;
    } else {
      if ("a" === arg3) {
        call.call(arg0, value);
      } else if (call) {
        call.value = value;
      } else {
        const result = has.set(arg0, value);
      }
      return value;
    }
  }
});
let closure_11 = tmp4;
function createZodEnum(values, required_error) {
  let errorMap;
  let invalid_type_error;
  let obj3;
  let closure_0 = required_error;
  invalid_type_error = undefined;
  required_error = undefined;
  const obj = { values, typeName: obj6.ZodEnum };
  const tmp = _module2Result25;
  if (required_error) {
    ({ errorMap, invalid_type_error } = required_error);
    required_error = required_error.required_error;
    const description = required_error.description;
    if (errorMap) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("Can't use \"invalid_type_error\" or \"required_error\" in conjunction with custom error map.");
      throw error;
    }
    const obj2 = { errorMap: null, description: null };
    if (errorMap) {
      obj2.errorMap = errorMap;
      obj2.description = description;
      obj3 = obj2;
    } else {
      obj2.errorMap = function errorMap(code, defaultError) {
        let obj;
        defaultError = message.message;
        if ("invalid_enum_value" === code.code) {
          if (null == defaultError) {
            defaultError = defaultError.defaultError;
          }
          obj = { message: defaultError };
          const obj2 = { message: defaultError };
        } else if (undefined === defaultError.data) {
          let defaultError3 = defaultError;
          if (null == defaultError) {
            defaultError3 = required_error;
          }
          if (null === defaultError3) {
            defaultError3 = defaultError.defaultError;
          }
          obj = { message: defaultError3 };
          const obj3 = { message: defaultError3 };
        } else if ("invalid_type" !== code.code) {
          obj = { message: defaultError.defaultError };
          const obj4 = { message: defaultError.defaultError };
        } else {
          let defaultError2 = defaultError;
          if (null == defaultError) {
            defaultError2 = invalid_type_error;
          }
          if (null === defaultError2) {
            defaultError2 = defaultError.defaultError;
          }
          obj = { message: defaultError2 };
        }
        return obj;
      };
      obj2.description = description;
      obj3 = obj2;
    }
  } else {
    obj3 = {};
  }
  const merged = Object.assign(obj3);
  const tmp2 = new tmp(obj);
  return tmp2;
}
function custom(arg0) {
  let superRefineResult;
  let closure_0 = arg0;
  let closure_2 = arg2;
  const obj2 = _module2Result9.create();
  if (arg0) {
    superRefineResult = obj2.superRefine((arg0, addIssue) => {
      let closure_0 = arg0;
      const promise = closure_0(arg0);
      if (promise instanceof Promise) {
        return promise.then((result) => {
          const tmp = result;
          if (!tmp) {
            let tmp2Result;
            if (typeof message === "function") {
              tmp2Result = tmp2(tmp3);
            } else {
              tmp2Result = tmp2;
              if (typeof message === "string") {
                tmp2Result = { message };
                const obj2 = { message };
              }
            }
            let tmp5 = tmp2Result;
            if (typeof tmp2Result === "string") {
              tmp5 = { message: tmp2Result };
              const obj3 = { message: tmp2Result };
            }
            const fatal = tmp5.fatal ?? c2;
            message = { code: "custom", fatal: null === fatal || undefined === fatal || fatal };
            addIssue = addIssue.addIssue;
            const merged = Object.assign(tmp5);
            addIssue(message);
          }
        });
      } else if (!promise) {
        let tmpResult;
        let tmp = addIssue;
        if (typeof addIssue === "function") {
          tmpResult = tmp(arg0);
        } else {
          tmpResult = tmp;
          if (typeof tmp === "string") {
            let obj2 = { message: tmp };
            tmpResult = obj2;
          }
        }
        let tmp3 = tmpResult;
        if (typeof tmpResult === "string") {
          let obj3 = { message: tmpResult };
          tmp3 = obj3;
        }
        let fatal = tmp3.fatal ?? c2;
        let tmp5 = null === fatal || undefined === fatal || fatal;
        const obj = { code: "custom", fatal: tmp5 };
        addIssue = addIssue.addIssue;
        let merged = Object.assign(tmp3);
        addIssue(obj);
      }
    });
  } else {
    superRefineResult = obj2;
  }
  return superRefineResult;
}
class ParseInputLazyPath {
  constructor(parent, data, _path, _key) {
    _classCallCheck(this, ParseInputLazyPath);
    this._cachedPath = [];
    this.parent = parent;
    this.data = data;
    this._path = _path;
    this._key = _key;
  }
}
let obj = {
  key: "path",
  get() {
    const self = this;
    if (!this._cachedPath.length) {
      const _Array = Array;
      const _cachedPath = self._cachedPath;
      const push = _cachedPath.push;
      const _path = self._path;
      if (self._key instanceof Array) {
        const items = [];
        HermesBuiltin.arraySpread(items, self._key, HermesBuiltin.arraySpread(items, _path, 0));
        HermesBuiltin.apply(push, items, _cachedPath);
      } else {
        const items1 = [];
        items1[HermesBuiltin.arraySpread(items1, _path, 0)] = self._key;
        HermesBuiltin.apply(push, items1, _cachedPath);
      }
    }
    return self._cachedPath;
  }
};
let items = [obj];
let closure_12 = _createClass(ParseInputLazyPath, items);
function handleResult(common, value) {
  _require = common;
  if (require("DIRTY").isValid(value)) {
    return { success: true, data: value.value };
  } else if (common.common.issues.length) {
    const obj = { success: false };
    Object.defineProperty(obj, "error", {
      get: function() {
          const self = this;
          if (this._error) {
            return self._error;
          } else {
            const self2 = this;
            const self3 = this;
            const zodError = new require("module_15897").ZodError(obj2.common.issues);
            self._error = zodError;
            return self._error;
          }
        },
      set: undefined
    });
    return obj;
  } else {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("Validation failed but no issues detected.");
    throw error;
  }
}
let _require;
let closure_1;
class ZodType {
  constructor(_def) {
    const self = this;
    _classCallCheck(this, ZodType);
    this.spa = this.safeParseAsync;
    this._def = _def;
    const parse = this.parse;
    this.parse = parse.bind(this);
    const safeParse = this.safeParse;
    this.safeParse = safeParse.bind(this);
    const parseAsync = this.parseAsync;
    this.parseAsync = parseAsync.bind(this);
    const safeParseAsync = this.safeParseAsync;
    this.safeParseAsync = safeParseAsync.bind(this);
    const spa = this.spa;
    this.spa = spa.bind(this);
    const refine = this.refine;
    this.refine = refine.bind(this);
    const refinement = this.refinement;
    this.refinement = refinement.bind(this);
    const superRefine = this.superRefine;
    this.superRefine = superRefine.bind(this);
    const optional = this.optional;
    this.optional = optional.bind(this);
    const nullable = this.nullable;
    this.nullable = nullable.bind(this);
    const nullish = this.nullish;
    this.nullish = nullish.bind(this);
    const array = this.array;
    this.array = array.bind(this);
    const promise = this.promise;
    this.promise = promise.bind(this);
    const or = this.or;
    this.or = or.bind(this);
    const and = this.and;
    this.and = and.bind(this);
    const transform = this.transform;
    this.transform = transform.bind(this);
    const brand = this.brand;
    this.brand = brand.bind(this);
    const _default = this.default;
    this.default = _default.bind(this);
    const _catch = this.catch;
    this.catch = _catch.bind(this);
    const describe = this.describe;
    this.describe = describe.bind(this);
    const pipe = this.pipe;
    this.pipe = pipe.bind(this);
    const readonly = this.readonly;
    this.readonly = readonly.bind(this);
    const isNullable = this.isNullable;
    this.isNullable = isNullable.bind(this);
    const isOptional = this.isOptional;
    this.isOptional = isOptional.bind(this);
    this["~standard"] = {
      version: 1,
      vendor: "zod",
      validate(arg0) {
        return self["~validate"](arg0);
      }
    };
  }
}
let obj2 = {
  key: "description",
  get() {
    return this._def.description;
  }
};
let items1 = [
  obj2,
  {
    key: "_getType",
    value: function _getType(data) {
      return _mod15898.getParsedType(data.data);
    }
  },
  {
    key: "_getOrReturnCtx",
    value: function _getOrReturnCtx(parent, _getOrReturnCtxResult3) {
      let tmp = _getOrReturnCtxResult3;
      if (!tmp) {
        const self = this;
        const obj = { common: parent.parent.common, data: parent.data, parsedType: _mod15898.getParsedType(parent.data), schemaErrorMap: this._def.errorMap, path: null, parent: null };
        ({ path: obj.path, parent: obj.parent } = parent);
        tmp = obj;
      }
      return tmp;
    }
  },
  {
    key: "_processInputParams",
    value: function _processInputParams(common) {
      let parseStatus;
      const obj = { status: parseStatus, ctx: { common: common.parent.common, data: common.data, parsedType: _mod15898.getParsedType(common.data), schemaErrorMap: this._def.errorMap, path: common.path, parent: common.parent } };
      parseStatus = new DIRTY.ParseStatus();
      ({ common: common.parent.common, data: common.data, parsedType: _mod15898.getParsedType(common.data), schemaErrorMap: this._def.errorMap, path: common.path, parent: common.parent });
      return obj;
    }
  },
  {
    key: "_parseSync",
    value: function _parseSync(arg0) {
      const _parseResult = this._parse(arg0);
      if (DIRTY.isAsync(_parseResult)) {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error = new Error("Synchronous parse encountered promise.");
        throw error;
      } else {
        return _parseResult;
      }
    }
  },
  {
    key: "_parseAsync",
    value: function _parseAsync($ZodRealError) {
      return Promise.resolve(this._parse($ZodRealError));
    }
  },
  {
    key: "parse",
    value: function parse(arg0, arg1) {
      const safeParseResult = this.safeParse(arg0, arg1);
      if (safeParseResult.success) {
        return safeParseResult.data;
      } else {
        throw safeParseResult.error;
      }
    }
  },
  {
    key: "safeParse",
    value: function safeParse(data, arg1) {
      let async;
      let errorMap;
      let obj2;
      let path;
      const obj = { issues: [], async: null !== async && undefined !== async && async, contextualErrorMap: errorMap };
      async = undefined;
      if (null != arg1) {
        async = arg1.async;
      }
      errorMap = undefined;
      if (null != arg1) {
        errorMap = arg1.errorMap;
      }
      obj2 = { common: obj, path, schemaErrorMap: this._def.errorMap, parent: null, data, parsedType: obj2(15898).getParsedType(data) };
      path = undefined;
      if (null != arg1) {
        path = arg1.path;
      }
      if (!path) {
        path = [];
      }
      const obj3 = { data, path: obj2.path, parent: obj2 };
      const iter = this._parseSync(obj3);
      const tmp3 = obj2;
      if (typeof handleResult === "function") {
        let obj5;
        if (tmp3(15899).isValid(iter)) {
          obj5 = { success: true, data: iter.value };
          const obj4 = { success: true, data: iter.value };
        } else if (obj2.common.issues.length) {
          obj5 = { success: false };
          Object.defineProperty(obj5, "error", {
            get: function() {
                  const self = this;
                  if (this._error) {
                    return self._error;
                  } else {
                    const self2 = this;
                    const self3 = this;
                    const zodError = new require("module_15897").ZodError(obj2.common.issues);
                    self._error = zodError;
                    return self._error;
                  }
                },
            set: undefined
          });
        } else {
          const _Error = Error;
          let self = this;
          let self2 = this;
          const error = new Error("Validation failed but no issues detected.");
          throw error;
        }
        return obj5;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
  },
  {
    key: "~validate",
    value: function validate(data) {
      let parent;
      const self = this;
      parent = { common: { issues: [], async: this["~standard"].async }, path: [], schemaErrorMap: this._def.errorMap, parent: null, data, parsedType: parent(15898).getParsedType(data) };
      const tmp = parent;
      if (this["~standard"].async) {
        let obj2 = { data, path: [], parent };
        const _parseAsyncResult = self._parseAsync(obj2);
        return _parseAsyncResult.then((value) => {
          let obj;
          if (DIRTY.isValid(value)) {
            obj = { value: value.value };
            const obj2 = { value: value.value };
          } else {
            obj = { issues: obj.common.issues };
          }
          return obj;
        });
      } else {
        try {
          let obj5;
          const obj3 = { data, path: [], parent };
          const iter = self._parseSync(obj3);
          if (tmp(15899).isValid(iter)) {
            obj5 = { value: iter.value };
            const obj4 = { value: iter.value };
          } else {
            obj5 = { issues: parent.common.issues };
          }
          return obj5;
        } catch (tmp4) {
          let message;
          if (null != tmp4) {
            message = tmp4.message;
          }
          let formatted;
          if (null !== message) {
            if (undefined !== message) {
              formatted = message.toLowerCase();
            }
          }
          let hasItem;
          if (null !== formatted) {
            if (undefined !== formatted) {
              hasItem = formatted.includes("encountered");
            }
          }
          if (hasItem) {
            self["~standard"].async = true;
          }
          obj6 = { issues: [], async: true };
          parent.common = obj6;
        }
      }
    }
  },
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,

];
let entry = {
  key: "parseAsync",
  value: function parseAsync(input, value) {
    return closure_1(...arguments);
  }
};
closure_1 = _asyncToGenerator(async function(arg0, arg1) {
  const self = this;
  closure_1 = arg0;
  let closure_2 = arg1;
  let c4 = 0;
  let c5 = 0;
  return (async (arg0, value) => {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        return { value, done: true };
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            return { value, done: true };
          } else {
            closure_3 = tmp;
            success = undefined;
            c4 = 1;
            c5 = 1;
            const obj4 = { value: self.safeParseAsync(closure_1, closure_2), done: false };
            return obj4;
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          return { value, done: true };
        } else {
          success = value;
          if (success.success) {
            c5 = 3;
            return { value: success.data, done: true };
          } else {
            throw success.error;
          }
        }
      } catch (tmp12) {
        c5 = 3;
        throw tmp12;
      }
    }
  })();
});
items1[9] = entry;
let entry1 = {
  key: "safeParseAsync",
  value: function safeParseAsync(arg0, arg1) {
    return closure_0(...arguments);
  }
};
_require = _asyncToGenerator(async function(data, arg1) {
  let closure_3;
  let closure_4;
  const self = this;
  let closure_2 = arg1;
  let c5 = 0;
  let c6 = 0;
  return (async (arg0, value) => {
    let errorMap;
    let path;
    const obj4 = { issues: [], contextualErrorMap: errorMap, async: true };
    if (null != closure_2) {
      errorMap = tmp22.errorMap;
    }
    const obj5 = { common: obj4, path, schemaErrorMap: self._def.errorMap, parent: null, data, parsedType: self(data[9]).getParsedType(data) };
    if (null != closure_2) {
      path = tmp22.path;
    }
    if (!path) {
      path = [];
    }
    obj6 = { data, path: obj5.path, parent: obj5 };
    const _parseResult = self._parse(obj6);
    let resolved = _parseResult;
    if (!self(data[7]).isAsync(_parseResult)) {
      resolved = Promise.resolve(_parseResult);
    }
    data = await resolved;
    return closure_1_13(obj5, data);
  })();
});
items1[10] = entry1;
items1[11] = {
  key: "refine",
  value: function refine(arg0, arg1) {
    let closure_0 = arg0;
    let closure_1 = arg1;
    return this._refinement((arg0, addIssue) => {
      let flag;
      closure_0 = arg0;
      const promise = closure_0(arg0);
      function setError() {

      }
      if (typeof Promise !== "undefined") {
        if (promise instanceof Promise) {
          flag = promise.then((result) => {
            let flag = result;
            if (!flag) {
              if (typeof setError === "function") {
                addIssue = addIssue.addIssue;
                const obj = { code: require("module_15897").ZodIssueCode.custom };
                if (typeof addIssue !== "string") {
                  let tmp6Result;
                  if (undefined !== addIssue) {
                    tmp6Result = tmp6;
                    if (typeof addIssue === "function") {
                      tmp6Result = tmp6(tmp5);
                    }
                  }
                  const merged = Object.assign(tmp6Result);
                  addIssue(obj);
                  flag = false;
                }
                tmp6Result = { message: addIssue };
                const obj2 = { message: addIssue };
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            }
            return flag;
          });
        }
        return flag;
      }
      flag = promise;
      if (!flag) {
        let obj = { code: closure_0(addIssue[8]).ZodIssueCode.custom };
        addIssue = addIssue.addIssue;
        if (typeof addIssue !== "string") {
          let tmp3Result;
          if (undefined !== addIssue) {
            tmp3Result = tmp3;
            if (typeof addIssue === "function") {
              tmp3Result = tmp3(arg0);
            }
          }
          const tmp5 = obj;
          const tmp6 = tmp3Result;
          let merged = Object.assign(tmp3Result);
          addIssue(obj);
          flag = false;
        }
        let obj2 = { message: tmp3 };
        tmp3Result = obj2;
      }
    });
  }
};
items1[12] = {
  key: "refinement",
  value: function refinement(resolveResult, arg1) {
    let closure_1 = arg1;
    return this._refinement((arg0, addIssue) => {
      let flag = resolveResult(arg0);
      if (!flag) {
        let tmp2 = closure_1;
        addIssue = addIssue.addIssue;
        if (typeof closure_1 === "function") {
          tmp2 = closure_1(arg0, addIssue);
        }
        addIssue(tmp2);
        flag = false;
      }
      return flag;
    });
  }
};
items1[13] = {
  key: "_refinement",
  value: function _refinement(refinement) {
    let obj2;
    const obj = { schema: this, typeName: obj6.ZodEffects, effect: obj2 };
    obj2 = { type: "refinement", refinement };
    const tmp = new _module2Result28(obj);
    return tmp;
  }
};
items1[14] = {
  key: "superRefine",
  value: function superRefine(refinement) {
    return this._refinement(refinement);
  }
};
items1[15] = {
  key: "optional",
  value: function optional() {
    return _module2Result29.create(this, this._def);
  }
};
items1[16] = {
  key: "nullable",
  value: function nullable() {
    return _module2Result30.create(this, this._def);
  }
};
items1[17] = {
  key: "nullish",
  value: function nullish() {
    const nullableResult = this.nullable();
    return nullableResult.optional();
  }
};
items1[18] = {
  key: "array",
  value: function array() {
    return _module2Result13.create(this);
  }
};
items1[19] = {
  key: "promise",
  value: function promise() {
    return _module2Result27.create(this, this._def);
  }
};
items1[20] = {
  key: "or",
  value: function or(arg0) {
    const items = [this, arg0];
    return _module2Result15.create(items, this._def);
  }
};
items1[21] = {
  key: "and",
  value: function and(arg0) {
    return _module2Result17.create(this, arg0, this._def);
  }
};
items1[22] = {
  key: "transform",
  value: function transform(transform) {
    let errorMap;
    let invalid_type_error;
    let obj;
    const _def = this._def;
    invalid_type_error = undefined;
    let required_error;
    const tmp = _module2Result28;
    if (_def) {
      ({ errorMap, invalid_type_error } = _def);
      required_error = _def.required_error;
      const description = _def.description;
      if (errorMap) {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error = new Error("Can't use \"invalid_type_error\" or \"required_error\" in conjunction with custom error map.");
        throw error;
      }
      const obj2 = { errorMap: null, description: null };
      if (errorMap) {
        obj2.errorMap = errorMap;
        obj2.description = description;
        obj = obj2;
      } else {
        obj2.errorMap = function errorMap(code, defaultError) {
          let obj;
          defaultError = message.message;
          if ("invalid_enum_value" === code.code) {
            if (null == defaultError) {
              defaultError = defaultError.defaultError;
            }
            obj = { message: defaultError };
            const obj2 = { message: defaultError };
          } else if (undefined === defaultError.data) {
            let defaultError3 = defaultError;
            if (null == defaultError) {
              defaultError3 = required_error;
            }
            if (null === defaultError3) {
              defaultError3 = defaultError.defaultError;
            }
            obj = { message: defaultError3 };
            const obj3 = { message: defaultError3 };
          } else if ("invalid_type" !== code.code) {
            obj = { message: defaultError.defaultError };
            const obj4 = { message: defaultError.defaultError };
          } else {
            let defaultError2 = defaultError;
            if (null == defaultError) {
              defaultError2 = invalid_type_error;
            }
            if (null === defaultError2) {
              defaultError2 = defaultError.defaultError;
            }
            obj = { message: defaultError2 };
          }
          return obj;
        };
        obj2.description = description;
        obj = obj2;
      }
    } else {
      obj = {};
    }
    const obj3 = { schema: this, typeName: obj6.ZodEffects, effect: { type: "transform", transform } };
    const merged = Object.assign(obj);
    const tmp2 = new tmp(obj3);
    return tmp2;
  }
};
items1[23] = {
  key: "default",
  value: function _default(fn) {
    let errorMap;
    let invalid_type_error;
    let obj;
    let closure_0 = fn;
    if (typeof fn !== "function") {
      fn = () => closure_0;
    }
    const _def = this._def;
    invalid_type_error = undefined;
    let required_error;
    const tmp = _module2Result31;
    if (_def) {
      ({ errorMap, invalid_type_error } = _def);
      required_error = _def.required_error;
      const description = _def.description;
      if (errorMap) {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error = new Error("Can't use \"invalid_type_error\" or \"required_error\" in conjunction with custom error map.");
        throw error;
      }
      const obj2 = { errorMap: null, description: null };
      if (errorMap) {
        obj2.errorMap = errorMap;
        obj2.description = description;
        obj = obj2;
      } else {
        obj2.errorMap = function errorMap(code, defaultError) {
          let obj;
          defaultError = message.message;
          if ("invalid_enum_value" === code.code) {
            if (null == defaultError) {
              defaultError = defaultError.defaultError;
            }
            obj = { message: defaultError };
            const obj2 = { message: defaultError };
          } else if (undefined === defaultError.data) {
            let defaultError3 = defaultError;
            if (null == defaultError) {
              defaultError3 = required_error;
            }
            if (null === defaultError3) {
              defaultError3 = defaultError.defaultError;
            }
            obj = { message: defaultError3 };
            const obj3 = { message: defaultError3 };
          } else if ("invalid_type" !== code.code) {
            obj = { message: defaultError.defaultError };
            const obj4 = { message: defaultError.defaultError };
          } else {
            let defaultError2 = defaultError;
            if (null == defaultError) {
              defaultError2 = invalid_type_error;
            }
            if (null === defaultError2) {
              defaultError2 = defaultError.defaultError;
            }
            obj = { message: defaultError2 };
          }
          return obj;
        };
        obj2.description = description;
        obj = obj2;
      }
    } else {
      obj = {};
    }
    const obj3 = { innerType: this, defaultValue: fn, typeName: obj6.ZodDefault };
    const merged = Object.assign(obj);
    const tmp2 = new tmp(obj3);
    return tmp2;
  }
};
items1[24] = {
  key: "brand",
  value: function brand() {
    let errorMap;
    let invalid_type_error;
    let obj3;
    const _def = this._def;
    invalid_type_error = undefined;
    let required_error;
    const obj = { typeName: obj6.ZodBranded, type: this };
    const tmp = _module2Result34;
    if (_def) {
      ({ errorMap, invalid_type_error } = _def);
      required_error = _def.required_error;
      const description = _def.description;
      if (errorMap) {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error = new Error("Can't use \"invalid_type_error\" or \"required_error\" in conjunction with custom error map.");
        throw error;
      }
      const obj2 = { errorMap: null, description: null };
      if (errorMap) {
        obj2.errorMap = errorMap;
        obj2.description = description;
        obj3 = obj2;
      } else {
        obj2.errorMap = function errorMap(code, defaultError) {
          let obj;
          defaultError = message.message;
          if ("invalid_enum_value" === code.code) {
            if (null == defaultError) {
              defaultError = defaultError.defaultError;
            }
            obj = { message: defaultError };
            const obj2 = { message: defaultError };
          } else if (undefined === defaultError.data) {
            let defaultError3 = defaultError;
            if (null == defaultError) {
              defaultError3 = required_error;
            }
            if (null === defaultError3) {
              defaultError3 = defaultError.defaultError;
            }
            obj = { message: defaultError3 };
            const obj3 = { message: defaultError3 };
          } else if ("invalid_type" !== code.code) {
            obj = { message: defaultError.defaultError };
            const obj4 = { message: defaultError.defaultError };
          } else {
            let defaultError2 = defaultError;
            if (null == defaultError) {
              defaultError2 = invalid_type_error;
            }
            if (null === defaultError2) {
              defaultError2 = defaultError.defaultError;
            }
            obj = { message: defaultError2 };
          }
          return obj;
        };
        obj2.description = description;
        obj3 = obj2;
      }
    } else {
      obj3 = {};
    }
    const merged = Object.assign(obj3);
    const tmp2 = new tmp(obj);
    return tmp2;
  }
};
items1[25] = {
  key: "catch",
  value: function _catch(fn) {
    let errorMap;
    let invalid_type_error;
    let obj;
    let closure_0 = fn;
    if (typeof fn !== "function") {
      fn = () => closure_0;
    }
    const _def = this._def;
    invalid_type_error = undefined;
    let required_error;
    const tmp = _module2Result32;
    if (_def) {
      ({ errorMap, invalid_type_error } = _def);
      required_error = _def.required_error;
      const description = _def.description;
      if (errorMap) {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error = new Error("Can't use \"invalid_type_error\" or \"required_error\" in conjunction with custom error map.");
        throw error;
      }
      const obj2 = { errorMap: null, description: null };
      if (errorMap) {
        obj2.errorMap = errorMap;
        obj2.description = description;
        obj = obj2;
      } else {
        obj2.errorMap = function errorMap(code, defaultError) {
          let obj;
          defaultError = message.message;
          if ("invalid_enum_value" === code.code) {
            if (null == defaultError) {
              defaultError = defaultError.defaultError;
            }
            obj = { message: defaultError };
            const obj2 = { message: defaultError };
          } else if (undefined === defaultError.data) {
            let defaultError3 = defaultError;
            if (null == defaultError) {
              defaultError3 = required_error;
            }
            if (null === defaultError3) {
              defaultError3 = defaultError.defaultError;
            }
            obj = { message: defaultError3 };
            const obj3 = { message: defaultError3 };
          } else if ("invalid_type" !== code.code) {
            obj = { message: defaultError.defaultError };
            const obj4 = { message: defaultError.defaultError };
          } else {
            let defaultError2 = defaultError;
            if (null == defaultError) {
              defaultError2 = invalid_type_error;
            }
            if (null === defaultError2) {
              defaultError2 = defaultError.defaultError;
            }
            obj = { message: defaultError2 };
          }
          return obj;
        };
        obj2.description = description;
        obj = obj2;
      }
    } else {
      obj = {};
    }
    const obj3 = { innerType: this, catchValue: fn, typeName: obj6.ZodCatch };
    const merged = Object.assign(obj);
    const tmp2 = new tmp(obj3);
    return tmp2;
  }
};
items1[26] = {
  key: "describe",
  value: function describe(description) {
    const constructor = this.constructor;
    const obj = { description };
    const merged = Object.assign(this._def);
    const constructor1 = new constructor(obj);
    return constructor1;
  }
};
items1[27] = {
  key: "pipe",
  value: function pipe(arg0) {
    return _module2Result35.create(this, arg0);
  }
};
items1[28] = {
  key: "readonly",
  value: function readonly() {
    return _module2Result36.create(this);
  }
};
items1[29] = {
  key: "isOptional",
  value: function isOptional() {
    return this.safeParse(undefined).success;
  }
};
items1[30] = {
  key: "isNullable",
  value: function isNullable() {
    return this.safeParse(null).success;
  }
};
const _module2Result = _createClass(ZodType, items1);
const re17 = /^c[^\s-]{8,}$/i;
const re18 = /^[0-9a-z]+$/;
const re19 = /^[0-9A-HJKMNP-TV-Z]{26}$/i;
const re20 = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
const re21 = /^[a-z0-9_-]{21}$/i;
const re22 = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
const re23 = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
const re24 = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
const re25 = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
const re26 = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/;
const re27 = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
const re28 = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
const re29 = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
const re30 = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/;
let c31 = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))";
let regExp = new RegExp("^" + "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))" + "$");
class ZodString {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, ZodString);
    const obj = _getPrototypeOf(ZodString);
    const tmp2 = _getPrototypeOf;
    const tmp3 = c2;
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return tmp3(self, constructResult);
  }
}
_inherits(ZodString, _module2Result);
let entry2 = {
  key: "_parse",
  value: function _parse(data) {
    let _getOrReturnCtxResult3;
    let obj20;
    let obj22;
    let obj24;
    const self = this;
    if (this._def.coerce) {
      const _String = String;
      data.data = String(data.data);
    }
    const _getTypeResult = self._getType(data);
    if (_getTypeResult !== _mod15898.ZodParsedType.string) {
      const _getOrReturnCtxResult = self._getOrReturnCtx(data);
      const obj2 = { code: require("module_15897").ZodIssueCode.invalid_type, expected: _mod15898.ZodParsedType.string, received: _getOrReturnCtxResult.parsedType };
      const addIssueToContext25 = tmp3(15899).addIssueToContext;
      addIssueToContext25(_getOrReturnCtxResult, obj2);
      return DIRTY.INVALID;
    } else {
      const self7 = this;
      const self8 = this;
      const iter2 = new DIRTY.ParseStatus();
      const checks = self._def.checks;
      const iter3 = checks[Symbol.iterator]();
      const nextResult = iter3.next();
      if (iter3 === undefined) {
        return { status: iter2.value, value: data.data };
      } else {
        const iter = nextResult;
        if ("min" === nextResult.kind) {
          if (data.data.length < iter.value) {
            const _getOrReturnCtxResult1 = self._getOrReturnCtx(data, _getOrReturnCtxResult3);
            _getOrReturnCtxResult3 = _getOrReturnCtxResult1;
            const obj4 = { code: require("module_15897").ZodIssueCode.too_small, minimum: null, type: "string", inclusive: true, exact: false, message: null };
            const addIssueToContext24 = DIRTY.addIssueToContext;
            ({ value: obj30.minimum, message: obj30.message } = iter);
            addIssueToContext24(_getOrReturnCtxResult1, obj4);
            iter2.dirty();
          }
        } else if ("max" === iter.kind) {
          if (data.data.length > iter.value) {
            const _getOrReturnCtxResult2 = self._getOrReturnCtx(data, _getOrReturnCtxResult3);
            _getOrReturnCtxResult3 = _getOrReturnCtxResult2;
            const obj5 = { code: require("module_15897").ZodIssueCode.too_big, maximum: null, type: "string", inclusive: true, exact: false, message: null };
            const addIssueToContext26 = DIRTY.addIssueToContext;
            ({ value: obj33.maximum, message: obj33.message } = iter);
            addIssueToContext26(_getOrReturnCtxResult2, obj5);
            iter2.dirty();
          }
        } else if ("length" === iter.kind) {
          let tmp242 = data.data.length > iter.value;
          if (!tmp242) {
            tmp242 = tmp244;
          }
          if (tmp242) {
            _getOrReturnCtxResult3 = self._getOrReturnCtx(data, _getOrReturnCtxResult3);
            const tmp246 = tmp242;
            if (tmp246) {
              obj6 = { code: require("module_15897").ZodIssueCode.too_big, maximum: null, type: "string", inclusive: true, exact: true, message: null };
              const addIssueToContext23 = DIRTY.addIssueToContext;
              ({ value: obj29.maximum, message: obj29.message } = iter);
              addIssueToContext23(_getOrReturnCtxResult3, obj6);
            } else {
              const tmp247 = data.data.length < iter.value;
              if (tmp247) {
                const obj7 = { code: require("module_15897").ZodIssueCode.too_small, minimum: null, type: "string", inclusive: true, exact: true, message: null };
                const addIssueToContext22 = DIRTY.addIssueToContext;
                ({ value: obj28.minimum, message: obj28.message } = iter);
                addIssueToContext22(_getOrReturnCtxResult3, obj7);
              }
            }
            iter2.dirty();
          }
        } else if ("email" === iter.kind) {
          if (!re24.test(data.data)) {
            const _getOrReturnCtxResult4 = self._getOrReturnCtx(data, _getOrReturnCtxResult3);
            _getOrReturnCtxResult3 = _getOrReturnCtxResult4;
            const obj8 = { validation: "email", code: require("module_15897").ZodIssueCode.invalid_string, message: iter.message };
            const addIssueToContext21 = DIRTY.addIssueToContext;
            addIssueToContext21(_getOrReturnCtxResult4, obj8);
            iter2.dirty();
          }
        } else if ("emoji" === iter.kind) {
          let obj25 = regExp;
          if (!obj25) {
            const _RegExp2 = RegExp;
            const self5 = this;
            const self6 = this;
            regExp = new RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u");
            obj25 = regExp;
          }
          if (!obj25.test(data.data)) {
            const _getOrReturnCtxResult5 = self._getOrReturnCtx(data, _getOrReturnCtxResult3);
            _getOrReturnCtxResult3 = _getOrReturnCtxResult5;
            const obj9 = { validation: "emoji", code: require("module_15897").ZodIssueCode.invalid_string, message: iter.message };
            const addIssueToContext20 = DIRTY.addIssueToContext;
            addIssueToContext20(_getOrReturnCtxResult5, obj9);
            iter2.dirty();
          }
        } else if ("uuid" === iter.kind) {
          if (!re20.test(data.data)) {
            const _getOrReturnCtxResult6 = self._getOrReturnCtx(data, _getOrReturnCtxResult3);
            _getOrReturnCtxResult3 = _getOrReturnCtxResult6;
            const obj11 = { validation: "uuid", code: require("module_15897").ZodIssueCode.invalid_string, message: iter.message };
            const addIssueToContext19 = DIRTY.addIssueToContext;
            addIssueToContext19(_getOrReturnCtxResult6, obj11);
            iter2.dirty();
          }
        } else if ("nanoid" === iter.kind) {
          if (!re21.test(data.data)) {
            const _getOrReturnCtxResult7 = self._getOrReturnCtx(data, _getOrReturnCtxResult3);
            _getOrReturnCtxResult3 = _getOrReturnCtxResult7;
            const obj12 = { validation: "nanoid", code: require("module_15897").ZodIssueCode.invalid_string, message: iter.message };
            const addIssueToContext18 = DIRTY.addIssueToContext;
            addIssueToContext18(_getOrReturnCtxResult7, obj12);
            iter2.dirty();
          }
        } else if ("cuid" === iter.kind) {
          if (!re17.test(data.data)) {
            const _getOrReturnCtxResult8 = self._getOrReturnCtx(data, _getOrReturnCtxResult3);
            _getOrReturnCtxResult3 = _getOrReturnCtxResult8;
            const obj13 = { validation: "cuid", code: require("module_15897").ZodIssueCode.invalid_string, message: iter.message };
            const addIssueToContext17 = DIRTY.addIssueToContext;
            addIssueToContext17(_getOrReturnCtxResult8, obj13);
            iter2.dirty();
          }
        } else if ("cuid2" === iter.kind) {
          if (!re18.test(data.data)) {
            const _getOrReturnCtxResult9 = self._getOrReturnCtx(data, _getOrReturnCtxResult3);
            _getOrReturnCtxResult3 = _getOrReturnCtxResult9;
            const obj14 = { validation: "cuid2", code: require("module_15897").ZodIssueCode.invalid_string, message: iter.message };
            const addIssueToContext16 = DIRTY.addIssueToContext;
            addIssueToContext16(_getOrReturnCtxResult9, obj14);
            iter2.dirty();
          }
        } else if ("ulid" === iter.kind) {
          if (!re19.test(data.data)) {
            const _getOrReturnCtxResult10 = self._getOrReturnCtx(data, _getOrReturnCtxResult3);
            _getOrReturnCtxResult3 = _getOrReturnCtxResult10;
            const obj15 = { validation: "ulid", code: require("module_15897").ZodIssueCode.invalid_string, message: iter.message };
            const addIssueToContext15 = DIRTY.addIssueToContext;
            addIssueToContext15(_getOrReturnCtxResult10, obj15);
            iter2.dirty();
          }
        } else if ("url" === iter.kind) {
          try {
            const _URL = URL;
            const self4 = this;
            const uRL = new URL(data.data);
          } catch (err) {
            const _getOrReturnCtxResult11 = self._getOrReturnCtx(data, _getOrReturnCtxResult3);
            _getOrReturnCtxResult3 = _getOrReturnCtxResult11;
            const obj16 = { validation: "url", code: require("module_15897").ZodIssueCode.invalid_string, message: iter.message };
            const addIssueToContext14 = DIRTY.addIssueToContext;
            addIssueToContext14(_getOrReturnCtxResult11, obj16);
            iter2.dirty();
          }
        } else if ("regex" === iter.kind) {
          iter.regex.lastIndex = 0;
          const regex = iter.regex;
          if (!regex.test(data.data)) {
            const _getOrReturnCtxResult12 = self._getOrReturnCtx(data, _getOrReturnCtxResult3);
            _getOrReturnCtxResult3 = _getOrReturnCtxResult12;
            const obj18 = { validation: "regex", code: require("module_15897").ZodIssueCode.invalid_string, message: iter.message };
            const addIssueToContext13 = DIRTY.addIssueToContext;
            addIssueToContext13(_getOrReturnCtxResult12, obj18);
            iter2.dirty();
          }
        } else if ("trim" === iter.kind) {
          const str3 = data.data;
          data.data = str3.trim();
        } else if ("includes" === iter.kind) {
          const data4 = data.data;
          if (!data4.includes(iter.value, iter.position)) {
            const _getOrReturnCtxResult13 = self._getOrReturnCtx(data, _getOrReturnCtxResult3);
            _getOrReturnCtxResult3 = _getOrReturnCtxResult13;
            const obj19 = { code: require("module_15897").ZodIssueCode.invalid_string, validation: obj20, message: iter.message };
            const addIssueToContext12 = DIRTY.addIssueToContext;
            obj20 = { includes: null, position: null };
            ({ value: obj17.includes, position: obj17.position } = iter);
            addIssueToContext12(_getOrReturnCtxResult13, obj19);
            iter2.dirty();
          }
        } else if ("toLowerCase" === iter.kind) {
          const str2 = data.data;
          data.data = str2.toLowerCase();
        } else if ("toUpperCase" === iter.kind) {
          const str = data.data;
          data.data = str.toUpperCase();
        } else if ("startsWith" === iter.kind) {
          const data3 = data.data;
          if (!data3.startsWith(iter.value)) {
            const _getOrReturnCtxResult14 = self._getOrReturnCtx(data, _getOrReturnCtxResult3);
            _getOrReturnCtxResult3 = _getOrReturnCtxResult14;
            const obj21 = { code: require("module_15897").ZodIssueCode.invalid_string, validation: obj22, message: iter.message };
            const addIssueToContext11 = DIRTY.addIssueToContext;
            obj22 = { startsWith: iter.value };
            addIssueToContext11(_getOrReturnCtxResult14, obj21);
            iter2.dirty();
          }
        } else if ("endsWith" === iter.kind) {
          const data2 = data.data;
          if (!data2.endsWith(iter.value)) {
            const _getOrReturnCtxResult15 = self._getOrReturnCtx(data, _getOrReturnCtxResult3);
            _getOrReturnCtxResult3 = _getOrReturnCtxResult15;
            const obj23 = { code: require("module_15897").ZodIssueCode.invalid_string, validation: obj24, message: iter.message };
            const addIssueToContext10 = DIRTY.addIssueToContext;
            obj24 = { endsWith: iter.value };
            addIssueToContext10(_getOrReturnCtxResult15, obj23);
            iter2.dirty();
          }
        } else if ("datetime" === iter.kind) {
          const obj10 = datetimeRegex(iter);
          if (!obj10.test(data.data)) {
            const _getOrReturnCtxResult16 = self._getOrReturnCtx(data, _getOrReturnCtxResult3);
            _getOrReturnCtxResult3 = _getOrReturnCtxResult16;
            const obj26 = { code: require("module_15897").ZodIssueCode.invalid_string, validation: "datetime", message: iter.message };
            const addIssueToContext9 = DIRTY.addIssueToContext;
            addIssueToContext9(_getOrReturnCtxResult16, obj26);
            iter2.dirty();
          }
        } else if ("date" === iter.kind) {
          if (!regExp.test(data.data)) {
            const _getOrReturnCtxResult17 = self._getOrReturnCtx(data, _getOrReturnCtxResult3);
            _getOrReturnCtxResult3 = _getOrReturnCtxResult17;
            const obj27 = { code: require("module_15897").ZodIssueCode.invalid_string, validation: "date", message: iter.message };
            const addIssueToContext8 = DIRTY.addIssueToContext;
            addIssueToContext8(_getOrReturnCtxResult17, obj27);
            iter2.dirty();
          }
        } else if ("time" === iter.kind) {
          const _RegExp = RegExp;
          const _HermesInternal = HermesInternal;
          const self2 = this;
          const self3 = this;
          const regExp1 = new RegExp("^" + timeRegexSource(iter) + "$");
          if (!regExp1.test(data.data)) {
            const _getOrReturnCtxResult18 = self._getOrReturnCtx(data, _getOrReturnCtxResult3);
            _getOrReturnCtxResult3 = _getOrReturnCtxResult18;
            const obj31 = { code: require("module_15897").ZodIssueCode.invalid_string, validation: "time", message: iter.message };
            const addIssueToContext7 = DIRTY.addIssueToContext;
            addIssueToContext7(_getOrReturnCtxResult18, obj31);
            iter2.dirty();
          }
        } else if ("duration" === iter.kind) {
          if (!re23.test(data.data)) {
            const _getOrReturnCtxResult19 = self._getOrReturnCtx(data, _getOrReturnCtxResult3);
            _getOrReturnCtxResult3 = _getOrReturnCtxResult19;
            const obj32 = { validation: "duration", code: require("module_15897").ZodIssueCode.invalid_string, message: iter.message };
            const addIssueToContext6 = DIRTY.addIssueToContext;
            addIssueToContext6(_getOrReturnCtxResult19, obj32);
            iter2.dirty();
          }
        } else if ("ip" === iter.kind) {
          data = data.data;
          const version = iter.version;
          let tmp61 = "v4" !== version;
          const tmp60 = version;
          if (tmp61) {
            tmp61 = version;
          }
          if (!tmp61) {
            tmp61 = !re25.test(data);
          }
          if (tmp61) {
            tmp61 = "v6" !== tmp60 && version || !re27.test(data);
            const tmp65 = "v6" !== tmp60 && version || !re27.test(data);
          }
          if (tmp61) {
            const _getOrReturnCtxResult20 = self._getOrReturnCtx(data, _getOrReturnCtxResult3);
            _getOrReturnCtxResult3 = _getOrReturnCtxResult20;
            const obj62 = { validation: "ip", code: require("module_15897").ZodIssueCode.invalid_string, message: iter.message };
            const addIssueToContext5 = DIRTY.addIssueToContext;
            addIssueToContext5(_getOrReturnCtxResult20, obj62);
            iter2.dirty();
          }
        } else if ("jwt" === iter.kind) {
          if (!isValidJWT(data.data, iter.alg)) {
            const _getOrReturnCtxResult21 = self._getOrReturnCtx(data, _getOrReturnCtxResult3);
            _getOrReturnCtxResult3 = _getOrReturnCtxResult21;
            const obj63 = { validation: "jwt", code: require("module_15897").ZodIssueCode.invalid_string, message: iter.message };
            const addIssueToContext4 = DIRTY.addIssueToContext;
            addIssueToContext4(_getOrReturnCtxResult21, obj63);
            iter2.dirty();
          }
        } else if ("cidr" === iter.kind) {
          if (!isValidCidr(data.data, iter.version)) {
            const _getOrReturnCtxResult22 = self._getOrReturnCtx(data, _getOrReturnCtxResult3);
            _getOrReturnCtxResult3 = _getOrReturnCtxResult22;
            const obj64 = { validation: "cidr", code: require("module_15897").ZodIssueCode.invalid_string, message: iter.message };
            const addIssueToContext3 = DIRTY.addIssueToContext;
            addIssueToContext3(_getOrReturnCtxResult22, obj64);
            iter2.dirty();
          }
        } else if ("base64" === iter.kind) {
          if (!re29.test(data.data)) {
            const _getOrReturnCtxResult23 = self._getOrReturnCtx(data, _getOrReturnCtxResult3);
            _getOrReturnCtxResult3 = _getOrReturnCtxResult23;
            const obj65 = { validation: "base64", code: require("module_15897").ZodIssueCode.invalid_string, message: iter.message };
            const addIssueToContext2 = DIRTY.addIssueToContext;
            addIssueToContext2(_getOrReturnCtxResult23, obj65);
            iter2.dirty();
          }
        } else if ("base64url" === iter.kind) {
          if (!re30.test(data.data)) {
            const _getOrReturnCtxResult24 = self._getOrReturnCtx(data, _getOrReturnCtxResult3);
            _getOrReturnCtxResult3 = _getOrReturnCtxResult24;
            const obj = { validation: "base64url", code: require("module_15897").ZodIssueCode.invalid_string, message: iter.message };
            const addIssueToContext = DIRTY.addIssueToContext;
            addIssueToContext(_getOrReturnCtxResult24, obj);
            iter2.dirty();
          }
        } else {
          const util = _mod15898.util;
          util.assertNever(iter);
        }
      }
    }
  }
};
let items2 = [
  entry2,
  {
    key: "_regex",
    value: function _regex(arg0, validation, arg2) {
      let closure_0 = arg0;
      const refinement = this.refinement;
      const obj = { validation, code: require("module_15897").ZodIssueCode.invalid_string };
      const errorUtil = errorUtil2.errorUtil;
      const merged = Object.assign(errorUtil.errToObj(arg2));
      return refinement((arg0) => regex.test(arg0), obj);
    }
  },
  {
    key: "_addCheck",
    value: function _addCheck(arg0) {
      let items;
      const obj = { checks: items };
      const merged = Object.assign(this._def);
      items = [];
      items[HermesBuiltin.arraySpread(items, this._def.checks, 0)] = arg0;
      const tmp3 = ZodString(obj);
      return tmp3;
    }
  },
  {
    key: "email",
    value: function email(arg0) {
      const _addCheck = this._addCheck;
      const obj = { kind: "email" };
      const errorUtil = errorUtil2.errorUtil;
      const merged = Object.assign(errorUtil.errToObj(arg0));
      return _addCheck(obj);
    }
  },
  {
    key: "url",
    value: function url(arg0) {
      const _addCheck = this._addCheck;
      const obj = { kind: "url" };
      const errorUtil = errorUtil2.errorUtil;
      const merged = Object.assign(errorUtil.errToObj(arg0));
      return _addCheck(obj);
    }
  },
  {
    key: "emoji",
    value: function emoji(arg0) {
      const _addCheck = this._addCheck;
      const obj = { kind: "emoji" };
      const errorUtil = errorUtil2.errorUtil;
      const merged = Object.assign(errorUtil.errToObj(arg0));
      return _addCheck(obj);
    }
  },
  {
    key: "uuid",
    value: function uuid(arg0) {
      const _addCheck = this._addCheck;
      const obj = { kind: "uuid" };
      const errorUtil = errorUtil2.errorUtil;
      const merged = Object.assign(errorUtil.errToObj(arg0));
      return _addCheck(obj);
    }
  },
  {
    key: "nanoid",
    value: function nanoid(arg0) {
      const _addCheck = this._addCheck;
      const obj = { kind: "nanoid" };
      const errorUtil = errorUtil2.errorUtil;
      const merged = Object.assign(errorUtil.errToObj(arg0));
      return _addCheck(obj);
    }
  },
  {
    key: "cuid",
    value: function cuid(arg0) {
      const _addCheck = this._addCheck;
      const obj = { kind: "cuid" };
      const errorUtil = errorUtil2.errorUtil;
      const merged = Object.assign(errorUtil.errToObj(arg0));
      return _addCheck(obj);
    }
  },
  {
    key: "cuid2",
    value: function cuid2(arg0) {
      const _addCheck = this._addCheck;
      const obj = { kind: "cuid2" };
      const errorUtil = errorUtil2.errorUtil;
      const merged = Object.assign(errorUtil.errToObj(arg0));
      return _addCheck(obj);
    }
  },
  {
    key: "ulid",
    value: function ulid(arg0) {
      const _addCheck = this._addCheck;
      const obj = { kind: "ulid" };
      const errorUtil = errorUtil2.errorUtil;
      const merged = Object.assign(errorUtil.errToObj(arg0));
      return _addCheck(obj);
    }
  },
  {
    key: "base64",
    value: function base64(arg0) {
      const _addCheck = this._addCheck;
      const obj = { kind: "base64" };
      const errorUtil = errorUtil2.errorUtil;
      const merged = Object.assign(errorUtil.errToObj(arg0));
      return _addCheck(obj);
    }
  },
  {
    key: "base64url",
    value: function base64url(arg0) {
      const _addCheck = this._addCheck;
      const obj = { kind: "base64url" };
      const errorUtil = errorUtil2.errorUtil;
      const merged = Object.assign(errorUtil.errToObj(arg0));
      return _addCheck(obj);
    }
  },
  {
    key: "jwt",
    value: function jwt(arg0) {
      const _addCheck = this._addCheck;
      const obj = { kind: "jwt" };
      const errorUtil = errorUtil2.errorUtil;
      const merged = Object.assign(errorUtil.errToObj(arg0));
      return _addCheck(obj);
    }
  },
  {
    key: "ip",
    value: function ip(arg0) {
      const _addCheck = this._addCheck;
      const obj = { kind: "ip" };
      const errorUtil = errorUtil2.errorUtil;
      const merged = Object.assign(errorUtil.errToObj(arg0));
      return _addCheck(obj);
    }
  },
  {
    key: "cidr",
    value: function cidr(arg0) {
      const _addCheck = this._addCheck;
      const obj = { kind: "cidr" };
      const errorUtil = errorUtil2.errorUtil;
      const merged = Object.assign(errorUtil.errToObj(arg0));
      return _addCheck(obj);
    }
  },
  {
    key: "datetime",
    value: function datetime(message) {
      let _addCheckResult;
      let local;
      let offset;
      const self = this;
      if (typeof message === "string") {
        const obj2 = { kind: "datetime", precision: null, offset: false, local: false, message };
        _addCheckResult = self._addCheck(obj2);
      } else {
        let precision;
        const _addCheck = self._addCheck;
        if (null != message) {
          precision = message.precision;
        }
        let tmp2 = null;
        if (undefined !== precision) {
          let precision1;
          if (null != message) {
            precision1 = message.precision;
          }
          tmp2 = precision1;
        }
        const obj = { kind: "datetime", precision: tmp2, offset: null !== offset && undefined !== offset && offset, local: null !== local && undefined !== local && local };
        offset = undefined;
        if (null != message) {
          offset = message.offset;
        }
        local = undefined;
        if (null != message) {
          local = message.local;
        }
        const errorUtil = errorUtil2.errorUtil;
        message = undefined;
        const errToObj = errorUtil.errToObj;
        if (null != message) {
          message = message.message;
        }
        const merged = Object.assign(errToObj(message));
        _addCheckResult = _addCheck(obj);
      }
      return _addCheckResult;
    }
  },
  {
    key: "date",
    value: function date(message) {
      const obj = { kind: "date", message };
      return this._addCheck(obj);
    }
  },
  {
    key: "time",
    value: function time(message) {
      let _addCheckResult;
      const self = this;
      if (typeof message === "string") {
        const obj2 = { kind: "time", precision: null, message };
        _addCheckResult = self._addCheck(obj2);
      } else {
        let precision;
        const _addCheck = self._addCheck;
        if (null != message) {
          precision = message.precision;
        }
        let tmp2 = null;
        if (undefined !== precision) {
          let precision1;
          if (null != message) {
            precision1 = message.precision;
          }
          tmp2 = precision1;
        }
        const obj = { kind: "time", precision: tmp2 };
        const errorUtil = errorUtil2.errorUtil;
        message = undefined;
        const errToObj = errorUtil.errToObj;
        if (null != message) {
          message = message.message;
        }
        const merged = Object.assign(errToObj(message));
        _addCheckResult = _addCheck(obj);
      }
      return _addCheckResult;
    }
  },
  {
    key: "duration",
    value: function duration(arg0) {
      const _addCheck = this._addCheck;
      const obj = { kind: "duration" };
      const errorUtil = errorUtil2.errorUtil;
      const merged = Object.assign(errorUtil.errToObj(arg0));
      return _addCheck(obj);
    }
  },
  {
    key: "regex",
    value: function regex(regex, arg1) {
      const _addCheck = this._addCheck;
      const obj = { kind: "regex", regex };
      const errorUtil = errorUtil2.errorUtil;
      const merged = Object.assign(errorUtil.errToObj(arg1));
      return _addCheck(obj);
    }
  },
  {
    key: "includes",
    value: function includes(value, position) {
      const obj = { kind: "includes", value, position };
      position = undefined;
      const _addCheck = this._addCheck;
      if (null != position) {
        position = position.position;
      }
      const errorUtil = errorUtil2.errorUtil;
      let message;
      const errToObj = errorUtil.errToObj;
      if (null != position) {
        message = position.message;
      }
      const merged = Object.assign(errToObj(message));
      return _addCheck(obj);
    }
  },
  {
    key: "startsWith",
    value: function startsWith(value, arg1) {
      const _addCheck = this._addCheck;
      const obj = { kind: "startsWith", value };
      const errorUtil = errorUtil2.errorUtil;
      const merged = Object.assign(errorUtil.errToObj(arg1));
      return _addCheck(obj);
    }
  },
  {
    key: "endsWith",
    value: function endsWith(value, arg1) {
      const _addCheck = this._addCheck;
      const obj = { kind: "endsWith", value };
      const errorUtil = errorUtil2.errorUtil;
      const merged = Object.assign(errorUtil.errToObj(arg1));
      return _addCheck(obj);
    }
  },
  {
    key: "min",
    value: function min(value, arg1) {
      const _addCheck = this._addCheck;
      const obj = { kind: "min", value };
      const errorUtil = errorUtil2.errorUtil;
      const merged = Object.assign(errorUtil.errToObj(arg1));
      return _addCheck(obj);
    }
  },
  {
    key: "max",
    value: function max(value, arg1) {
      const _addCheck = this._addCheck;
      const obj = { kind: "max", value };
      const errorUtil = errorUtil2.errorUtil;
      const merged = Object.assign(errorUtil.errToObj(arg1));
      return _addCheck(obj);
    }
  },
  {
    key: "length",
    value: function length(value, arg1) {
      const _addCheck = this._addCheck;
      const obj = { kind: "length", value };
      const errorUtil = errorUtil2.errorUtil;
      const merged = Object.assign(errorUtil.errToObj(arg1));
      return _addCheck(obj);
    }
  },
  {
    key: "nonempty",
    value: function nonempty(arg0) {
      const min = this.min;
      const errorUtil = errorUtil2.errorUtil;
      return min(1, errorUtil.errToObj(arg0));
    }
  },
  {
    key: "trim",
    value: function trim() {
      let items;
      const obj = { checks: items };
      const merged = Object.assign(this._def);
      items = [];
      items[HermesBuiltin.arraySpread(items, this._def.checks, 0)] = { kind: "trim" };
      const tmp3 = ZodString(obj);
      return tmp3;
    }
  },
  {
    key: "toLowerCase",
    value: function toLowerCase() {
      let items;
      const obj = { checks: items };
      const merged = Object.assign(this._def);
      items = [];
      items[HermesBuiltin.arraySpread(items, this._def.checks, 0)] = { kind: "toLowerCase" };
      const tmp3 = ZodString(obj);
      return tmp3;
    }
  },
  {
    key: "toUpperCase",
    value: function toUpperCase() {
      let items;
      const obj = { checks: items };
      const merged = Object.assign(this._def);
      items = [];
      items[HermesBuiltin.arraySpread(items, this._def.checks, 0)] = { kind: "toUpperCase" };
      const tmp3 = ZodString(obj);
      return tmp3;
    }
  },
  {
    key: "isDatetime",
    get() {
      const checks = this._def.checks;
      return checks.find((kind) => "datetime" === kind.kind);
    }
  },
  {
    key: "isDate",
    get() {
      const checks = this._def.checks;
      return checks.find((kind) => "date" === kind.kind);
    }
  },
  {
    key: "isTime",
    get() {
      const checks = this._def.checks;
      return checks.find((kind) => "time" === kind.kind);
    }
  },
  {
    key: "isDuration",
    get() {
      const checks = this._def.checks;
      return checks.find((kind) => "duration" === kind.kind);
    }
  },
  {
    key: "isEmail",
    get() {
      const checks = this._def.checks;
      return checks.find((kind) => "email" === kind.kind);
    }
  },
  {
    key: "isURL",
    get() {
      const checks = this._def.checks;
      return checks.find((kind) => "url" === kind.kind);
    }
  },
  {
    key: "isEmoji",
    get() {
      const checks = this._def.checks;
      return checks.find((kind) => "emoji" === kind.kind);
    }
  },
  {
    key: "isUUID",
    get() {
      const checks = this._def.checks;
      return checks.find((kind) => "uuid" === kind.kind);
    }
  },
  {
    key: "isNANOID",
    get() {
      const checks = this._def.checks;
      return checks.find((kind) => "nanoid" === kind.kind);
    }
  },
  {
    key: "isCUID",
    get() {
      const checks = this._def.checks;
      return checks.find((kind) => "cuid" === kind.kind);
    }
  },
  {
    key: "isCUID2",
    get() {
      const checks = this._def.checks;
      return checks.find((kind) => "cuid2" === kind.kind);
    }
  },
  {
    key: "isULID",
    get() {
      const checks = this._def.checks;
      return checks.find((kind) => "ulid" === kind.kind);
    }
  },
  {
    key: "isIP",
    get() {
      const checks = this._def.checks;
      return checks.find((kind) => "ip" === kind.kind);
    }
  },
  {
    key: "isCIDR",
    get() {
      const checks = this._def.checks;
      return checks.find((kind) => "cidr" === kind.kind);
    }
  },
  {
    key: "isBase64",
    get() {
      const checks = this._def.checks;
      return checks.find((kind) => "base64" === kind.kind);
    }
  },
  {
    key: "isBase64url",
    get() {
      const checks = this._def.checks;
      return checks.find((kind) => "base64url" === kind.kind);
    }
  },
  {
    key: "minLength",
    get() {
      let value = null;
      const iter = this._def.checks[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let iter2 = nextResult;
        let tmp3 = "min" === nextResult.kind;
        if (tmp3) {
          let tmp5 = null === value;
          if (!tmp5) {
            tmp5 = iter2.value > value;
          }
          tmp3 = tmp5;
        }
        if (tmp3) {
          value = iter2.value;
        }
        continue;
      }
      return value;
    }
  },
  {
    key: "maxLength",
    get() {
      let value = null;
      const iter = this._def.checks[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let iter2 = nextResult;
        let tmp3 = "max" === nextResult.kind;
        if (tmp3) {
          let tmp5 = null === value;
          if (!tmp5) {
            tmp5 = iter2.value < value;
          }
          tmp3 = tmp5;
        }
        if (tmp3) {
          value = iter2.value;
        }
        continue;
      }
      return value;
    }
  }
];
const _module2Result1 = _createClass(ZodString, items2);
_module2Result1.create = function(coerce) {
  let errorMap;
  let invalid_type_error;
  let obj3;
  const obj = { checks: [], typeName: obj6.ZodString, coerce: null !== coerce && undefined !== coerce && coerce };
  coerce = undefined;
  const tmp = _module2Result1;
  if (null != coerce) {
    coerce = coerce.coerce;
  }
  let closure_0 = coerce;
  if (closure_0) {
    ({ errorMap, invalid_type_error } = coerce);
    const required_error = coerce.required_error;
    const description = coerce.description;
    if (errorMap) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("Can't use \"invalid_type_error\" or \"required_error\" in conjunction with custom error map.");
      throw error;
    }
    const obj2 = { errorMap: null, description: null };
    if (errorMap) {
      obj2.errorMap = errorMap;
      obj2.description = description;
      obj3 = obj2;
    } else {
      obj2.errorMap = function errorMap(code, defaultError) {
        let obj;
        defaultError = message.message;
        if ("invalid_enum_value" === code.code) {
          if (null == defaultError) {
            defaultError = defaultError.defaultError;
          }
          obj = { message: defaultError };
          const obj2 = { message: defaultError };
        } else if (undefined === defaultError.data) {
          let defaultError3 = defaultError;
          if (null == defaultError) {
            defaultError3 = required_error;
          }
          if (null === defaultError3) {
            defaultError3 = defaultError.defaultError;
          }
          obj = { message: defaultError3 };
          const obj3 = { message: defaultError3 };
        } else if ("invalid_type" !== code.code) {
          obj = { message: defaultError.defaultError };
          const obj4 = { message: defaultError.defaultError };
        } else {
          let defaultError2 = defaultError;
          if (null == defaultError) {
            defaultError2 = invalid_type_error;
          }
          if (null === defaultError2) {
            defaultError2 = defaultError.defaultError;
          }
          obj = { message: defaultError2 };
        }
        return obj;
      };
      obj2.description = description;
      obj3 = obj2;
    }
  } else {
    obj3 = {};
  }
  const merged = Object.assign(obj3);
  const tmp2 = new tmp(obj);
  return tmp2;
};
class ZodNumber {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, ZodNumber);
    const obj = _getPrototypeOf(ZodNumber);
    const tmp2 = _getPrototypeOf;
    const tmp3 = c2;
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    const tmp3Result = tmp3(self, constructResult);
    ({ gte: tmp9.min, lte: tmp9.max, multipleOf: tmp9.step } = tmp3Result);
    return tmp3Result;
  }
}
_inherits(ZodNumber, _module2Result);
const entry3 = {
  key: "_parse",
  value: function _parse(data) {
    let tmp18;
    const self = this;
    if (this._def.coerce) {
      const _Number = Number;
      data.data = Number(data.data);
    }
    const _getTypeResult = self._getType(data);
    if (_getTypeResult !== _mod15898.ZodParsedType.number) {
      const _getOrReturnCtxResult = self._getOrReturnCtx(data);
      const obj5 = { code: require("module_15897").ZodIssueCode.invalid_type, expected: _mod15898.ZodParsedType.number, received: _getOrReturnCtxResult.parsedType };
      const addIssueToContext5 = tmp3(15899).addIssueToContext;
      addIssueToContext5(_getOrReturnCtxResult, obj5);
      return DIRTY.INVALID;
    } else {
      const self2 = this;
      const self3 = this;
      const iter2 = new DIRTY.ParseStatus();
      const checks = self._def.checks;
      const iter3 = checks[Symbol.iterator]();
      const nextResult = iter3.next();
      while (iter3 !== undefined) {
        let iter = nextResult;
        if ("int" === nextResult.kind) {
          let tmp58 = require;
          let util2 = _mod15898.util;
          if (!util2.isInteger(data.data)) {
            let _getOrReturnCtxResult1 = self._getOrReturnCtx(data, tmp18);
            tmp18 = _getOrReturnCtxResult1;
            obj6 = { code: tmp58(15897).ZodIssueCode.invalid_type, expected: "integer", received: "float", message: iter.message };
            let addIssueToContext4 = tmp58(15899).addIssueToContext;
            let addIssueToContext4Result = addIssueToContext4(_getOrReturnCtxResult1, obj6);
            let dirtyResult = iter2.dirty();
          }
        } else if ("min" === iter.kind) {
          let data2 = data.data;
          let value2 = iter.value;
          if (iter.inclusive ? data2 < value2 : data2 <= value2) {
            let _getOrReturnCtxResult2 = self._getOrReturnCtx(data, tmp18);
            tmp18 = _getOrReturnCtxResult2;
            let obj7 = { code: require("module_15897").ZodIssueCode.too_small, minimum: null, type: "number", inclusive: null, exact: false, message: null };
            let addIssueToContext3 = DIRTY.addIssueToContext;
            ({ value: obj4.minimum, inclusive: obj4.inclusive, message: obj4.message } = iter);
            let addIssueToContext3Result = addIssueToContext3(_getOrReturnCtxResult2, obj7);
            let dirtyResult1 = iter2.dirty();
          }
        } else if ("max" === iter.kind) {
          data = data.data;
          let value = iter.value;
          if (iter.inclusive ? data > value : data >= value) {
            let _getOrReturnCtxResult3 = self._getOrReturnCtx(data, tmp18);
            tmp18 = _getOrReturnCtxResult3;
            let obj14 = { code: require("module_15897").ZodIssueCode.too_big, maximum: null, type: "number", inclusive: null, exact: false, message: null };
            let addIssueToContext2 = DIRTY.addIssueToContext;
            ({ value: obj3.maximum, inclusive: obj3.inclusive, message: obj3.message } = iter);
            let addIssueToContext2Result = addIssueToContext2(_getOrReturnCtxResult3, obj14);
            let dirtyResult2 = iter2.dirty();
          }
        } else if ("multipleOf" === iter.kind) {
          let str = data.data;
          let obj2 = str;
          let str2 = iter.value;
          let str3 = str.toString();
          let arr = str3.split(".")[1] || "";
          let length = arr.length;
          let str4 = str2.toString();
          let arr2 = str4.split(".")[1] || "";
          let length2 = arr2.length;
          let tmp30 = length > length2 ? length : length2;
          let _parseInt = parseInt;
          let str5 = obj2.toFixed(tmp30);
          let _parseInt2 = parseInt;
          let parsed = parseInt(str5.replace(".", ""));
          let str6 = str2.toFixed(tmp30);
          let _Math = Math;
          let result = parsed % parseInt(str6.replace(".", ""));
          if (0 != result / Math.pow(10, tmp30)) {
            let _getOrReturnCtxResult4 = self._getOrReturnCtx(data, tmp18);
            tmp18 = _getOrReturnCtxResult4;
            let obj15 = { code: require("module_15897").ZodIssueCode.not_multiple_of, multipleOf: null, message: null };
            let addIssueToContext6 = DIRTY.addIssueToContext;
            ({ value: obj8.multipleOf, message: obj8.message } = iter);
            let addIssueToContext6Result = addIssueToContext6(_getOrReturnCtxResult4, obj15);
            let dirtyResult3 = iter2.dirty();
          }
        } else if ("finite" === iter.kind) {
          let _Number2 = Number;
          if (!Number.isFinite(data.data)) {
            let _getOrReturnCtxResult5 = self._getOrReturnCtx(data, tmp18);
            tmp18 = _getOrReturnCtxResult5;
            let obj = { code: require("module_15897").ZodIssueCode.not_finite, message: iter.message };
            let addIssueToContext = DIRTY.addIssueToContext;
            let addIssueToContextResult = addIssueToContext(_getOrReturnCtxResult5, obj);
            let dirtyResult4 = iter2.dirty();
          }
        } else {
          let util = _mod15898.util;
          let assertNeverResult = util.assertNever(iter);
        }
        continue;
      }
      return { status: iter2.value, value: data.data };
    }
  }
};
let items3 = [
  entry3,
  {
    key: "gte",
    value: function gte(arg0, arg1) {
      const setLimit = this.setLimit;
      const str = errorUtil2.errorUtil;
      return setLimit("min", arg0, true, str.toString(arg1));
    }
  },
  {
    key: "gt",
    value: function gt(arg0, arg1) {
      const setLimit = this.setLimit;
      const str = errorUtil2.errorUtil;
      return setLimit("min", arg0, false, str.toString(arg1));
    }
  },
  {
    key: "lte",
    value: function lte(arg0, arg1) {
      const setLimit = this.setLimit;
      const str = errorUtil2.errorUtil;
      return setLimit("max", arg0, true, str.toString(arg1));
    }
  },
  {
    key: "lt",
    value: function lt(arg0, arg1) {
      const setLimit = this.setLimit;
      const str = errorUtil2.errorUtil;
      return setLimit("max", arg0, false, str.toString(arg1));
    }
  },
  {
    key: "setLimit",
    value: function setLimit(kind, value, inclusive, arg3) {
      let items;
      let str;
      const obj = { checks: items };
      const merged = Object.assign(this._def);
      items = [...this._def.checks];
      const obj2 = { kind, value, inclusive, message: str.toString(arg3) };
      items[tmp2] = obj2;
      str = errorUtil2.errorUtil;
      const tmp3 = ZodNumber(obj);
      return tmp3;
    }
  },
  {
    key: "_addCheck",
    value: function _addCheck(arg0) {
      let items;
      const obj = { checks: items };
      const merged = Object.assign(this._def);
      items = [];
      items[HermesBuiltin.arraySpread(items, this._def.checks, 0)] = arg0;
      const tmp3 = ZodNumber(obj);
      return tmp3;
    }
  },
  {
    key: "int",
    value: function int(arg0) {
      let str;
      const _addCheck = this._addCheck;
      const obj = { kind: "int", message: str.toString(arg0) };
      str = errorUtil2.errorUtil;
      return _addCheck(obj);
    }
  },
  {
    key: "positive",
    value: function positive(arg0) {
      let str;
      const _addCheck = this._addCheck;
      const obj = { kind: "min", value: 0, inclusive: false, message: str.toString(arg0) };
      str = errorUtil2.errorUtil;
      return _addCheck(obj);
    }
  },
  {
    key: "negative",
    value: function negative(arg0) {
      let str;
      const _addCheck = this._addCheck;
      const obj = { kind: "max", value: 0, inclusive: false, message: str.toString(arg0) };
      str = errorUtil2.errorUtil;
      return _addCheck(obj);
    }
  },
  {
    key: "nonpositive",
    value: function nonpositive(arg0) {
      let str;
      const _addCheck = this._addCheck;
      const obj = { kind: "max", value: 0, inclusive: true, message: str.toString(arg0) };
      str = errorUtil2.errorUtil;
      return _addCheck(obj);
    }
  },
  {
    key: "nonnegative",
    value: function nonnegative(arg0) {
      let str;
      const _addCheck = this._addCheck;
      const obj = { kind: "min", value: 0, inclusive: true, message: str.toString(arg0) };
      str = errorUtil2.errorUtil;
      return _addCheck(obj);
    }
  },
  {
    key: "multipleOf",
    value: function multipleOf(value, arg1) {
      let str;
      const _addCheck = this._addCheck;
      const obj = { kind: "multipleOf", value, message: str.toString(arg1) };
      str = errorUtil2.errorUtil;
      return _addCheck(obj);
    }
  },
  {
    key: "finite",
    value: function finite(arg0) {
      let str;
      const _addCheck = this._addCheck;
      const obj = { kind: "finite", message: str.toString(arg0) };
      str = errorUtil2.errorUtil;
      return _addCheck(obj);
    }
  },
  {
    key: "safe",
    value: function safe(arg0) {
      let str;
      let str2;
      const obj = { kind: "min", inclusive: true, value: Number.MIN_SAFE_INTEGER, message: str.toString(arg0) };
      const _addCheck = this._addCheck;
      str = errorUtil2.errorUtil;
      const obj2 = { kind: "max", inclusive: true, value: Number.MAX_SAFE_INTEGER, message: str2.toString(arg0) };
      const _addCheck2 = _addCheck(obj)._addCheck;
      _addCheck(obj);
      str2 = errorUtil2.errorUtil;
      return _addCheck2(obj2);
    }
  },
  {
    key: "minValue",
    get() {
      let value = null;
      const iter = this._def.checks[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let iter2 = nextResult;
        let tmp3 = "min" === nextResult.kind;
        if (tmp3) {
          let tmp5 = null === value;
          if (!tmp5) {
            tmp5 = iter2.value > value;
          }
          tmp3 = tmp5;
        }
        if (tmp3) {
          value = iter2.value;
        }
        continue;
      }
      return value;
    }
  },
  {
    key: "maxValue",
    get() {
      let value = null;
      const iter = this._def.checks[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let iter2 = nextResult;
        let tmp3 = "max" === nextResult.kind;
        if (tmp3) {
          let tmp5 = null === value;
          if (!tmp5) {
            tmp5 = iter2.value < value;
          }
          tmp3 = tmp5;
        }
        if (tmp3) {
          value = iter2.value;
        }
        continue;
      }
      return value;
    }
  },
  {
    key: "isInt",
    get() {
      const checks = this._def.checks;
      return checks.find((kind) => {
        let tmp = "int" === kind.kind;
        if (!tmp) {
          let isIntegerResult = "multipleOf" === kind.kind;
          if (isIntegerResult) {
            const util = require("module_15898").util;
            isIntegerResult = util.isInteger(kind.value);
          }
          tmp = isIntegerResult;
        }
        return tmp;
      });
    }
  },
  {
    key: "isFinite",
    get() {
      let value2 = null;
      let value = null;
      const iter = this._def.checks[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let iter2 = nextResult;
        if ("finite" !== nextResult.kind) {
          if ("int" !== iter2.kind) {
            if ("multipleOf" !== iter2.kind) {
              if ("min" === iter2.kind) {
                let tmp13 = null === value;
                if (!tmp13) {
                  tmp13 = iter2.value > value;
                }
                if (tmp13) {
                  value = iter2.value;
                }
              } else {
                let tmp6 = "max" === iter2.kind;
                if (tmp6) {
                  let tmp8 = null === value2;
                  if (!tmp8) {
                    tmp8 = iter2.value < value2;
                  }
                  tmp6 = tmp8;
                }
                if (tmp6) {
                  value2 = iter2.value;
                }
              }
              continue;
            }
          }
        }
        iter.return();
        let flag = true;
        return true;
      }
      let isFiniteResult = Number.isFinite(value);
      if (isFiniteResult) {
        const _Number = Number;
        isFiniteResult = Number.isFinite(value2);
      }
      return isFiniteResult;
    }
  }
];
const _module2Result2 = _createClass(ZodNumber, items3);
_module2Result2.create = function(coerce) {
  let errorMap;
  let flag;
  let invalid_type_error;
  let obj3;
  const obj = { checks: [], typeName: obj6.ZodNumber, coerce: flag };
  flag = undefined;
  const tmp = _module2Result2;
  if (null != coerce) {
    flag = coerce.coerce;
  }
  if (!flag) {
    flag = false;
  }
  let closure_0 = coerce;
  if (closure_0) {
    ({ errorMap, invalid_type_error } = coerce);
    const required_error = coerce.required_error;
    const description = coerce.description;
    if (errorMap) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("Can't use \"invalid_type_error\" or \"required_error\" in conjunction with custom error map.");
      throw error;
    }
    const obj2 = { errorMap: null, description: null };
    if (errorMap) {
      obj2.errorMap = errorMap;
      obj2.description = description;
      obj3 = obj2;
    } else {
      obj2.errorMap = function errorMap(code, defaultError) {
        let obj;
        defaultError = message.message;
        if ("invalid_enum_value" === code.code) {
          if (null == defaultError) {
            defaultError = defaultError.defaultError;
          }
          obj = { message: defaultError };
          const obj2 = { message: defaultError };
        } else if (undefined === defaultError.data) {
          let defaultError3 = defaultError;
          if (null == defaultError) {
            defaultError3 = required_error;
          }
          if (null === defaultError3) {
            defaultError3 = defaultError.defaultError;
          }
          obj = { message: defaultError3 };
          const obj3 = { message: defaultError3 };
        } else if ("invalid_type" !== code.code) {
          obj = { message: defaultError.defaultError };
          const obj4 = { message: defaultError.defaultError };
        } else {
          let defaultError2 = defaultError;
          if (null == defaultError) {
            defaultError2 = invalid_type_error;
          }
          if (null === defaultError2) {
            defaultError2 = defaultError.defaultError;
          }
          obj = { message: defaultError2 };
        }
        return obj;
      };
      obj2.description = description;
      obj3 = obj2;
    }
  } else {
    obj3 = {};
  }
  const merged = Object.assign(obj3);
  const tmp2 = new tmp(obj);
  return tmp2;
};
class ZodBigInt {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, ZodBigInt);
    const obj = _getPrototypeOf(ZodBigInt);
    const tmp2 = _getPrototypeOf;
    const tmp3 = c2;
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    const tmp3Result = tmp3(self, constructResult);
    ({ gte: tmp9.min, lte: tmp9.max } = tmp3Result);
    return tmp3Result;
  }
}
_inherits(ZodBigInt, _module2Result);
const entry4 = {
  key: "_parse",
  value: function _parse(data) {
    let tmp22;
    const self = this;
    if (this._def.coerce) {
      try {
        const _BigInt = BigInt;
        data.data = BigInt(data.data);
      } catch (err) {
        return self._getInvalidInput(data);
      }
    }
    const _getTypeResult = self._getType(data);
    if (_getTypeResult !== _mod15898.ZodParsedType.bigint) {
      return self._getInvalidInput(data);
    } else {
      const self2 = this;
      const self3 = this;
      const iter2 = new DIRTY.ParseStatus();
      const checks = self._def.checks;
      const iter3 = checks[Symbol.iterator]();
      const nextResult = iter3.next();
      while (iter3 !== undefined) {
        let iter = nextResult;
        if ("min" === nextResult.kind) {
          let data2 = data.data;
          let value2 = iter.value;
          if (iter.inclusive ? data2 < value2 : data2 <= value2) {
            let _getOrReturnCtxResult = self._getOrReturnCtx(data, tmp22);
            tmp22 = _getOrReturnCtxResult;
            let obj3 = { code: require("module_15897").ZodIssueCode.too_small, type: "bigint", minimum: null, inclusive: null, message: null };
            let addIssueToContext2 = DIRTY.addIssueToContext;
            ({ value: obj2.minimum, inclusive: obj2.inclusive, message: obj2.message } = iter);
            let addIssueToContext2Result = addIssueToContext2(_getOrReturnCtxResult, obj3);
            let dirtyResult = iter2.dirty();
          }
        } else if ("max" === iter.kind) {
          data = data.data;
          let value = iter.value;
          if (iter.inclusive ? data > value : data >= value) {
            let _getOrReturnCtxResult1 = self._getOrReturnCtx(data, tmp22);
            tmp22 = _getOrReturnCtxResult1;
            let obj = { code: require("module_15897").ZodIssueCode.too_big, type: "bigint", maximum: null, inclusive: null, message: null };
            let addIssueToContext = DIRTY.addIssueToContext;
            ({ value: obj.maximum, inclusive: obj.inclusive, message: obj.message } = iter);
            let addIssueToContextResult = addIssueToContext(_getOrReturnCtxResult1, obj);
            let dirtyResult1 = iter2.dirty();
          }
        } else if ("multipleOf" === iter.kind) {
          let _BigInt2 = BigInt;
          let result = data.data % iter.value;
          if (result !== BigInt(0)) {
            let _getOrReturnCtxResult2 = self._getOrReturnCtx(data, tmp22);
            tmp22 = _getOrReturnCtxResult2;
            let obj7 = { code: require("module_15897").ZodIssueCode.not_multiple_of, multipleOf: null, message: null };
            let addIssueToContext3 = DIRTY.addIssueToContext;
            ({ value: obj4.multipleOf, message: obj4.message } = iter);
            let addIssueToContext3Result = addIssueToContext3(_getOrReturnCtxResult2, obj7);
            let dirtyResult2 = iter2.dirty();
          }
        } else {
          let util = _mod15898.util;
          let assertNeverResult = util.assertNever(iter);
        }
        continue;
      }
      return { status: iter2.value, value: data.data };
    }
  }
};
let items4 = [
  entry4,
  {
    key: "_getInvalidInput",
    value: function _getInvalidInput(data) {
      const _getOrReturnCtxResult = this._getOrReturnCtx(data);
      const obj = { code: require("module_15897").ZodIssueCode.invalid_type, expected: _mod15898.ZodParsedType.bigint, received: _getOrReturnCtxResult.parsedType };
      const addIssueToContext = DIRTY.addIssueToContext;
      addIssueToContext(_getOrReturnCtxResult, obj);
      return DIRTY.INVALID;
    }
  },
  {
    key: "gte",
    value: function gte(arg0, arg1) {
      const setLimit = this.setLimit;
      const str = errorUtil2.errorUtil;
      return setLimit("min", arg0, true, str.toString(arg1));
    }
  },
  {
    key: "gt",
    value: function gt(arg0, arg1) {
      const setLimit = this.setLimit;
      const str = errorUtil2.errorUtil;
      return setLimit("min", arg0, false, str.toString(arg1));
    }
  },
  {
    key: "lte",
    value: function lte(arg0, arg1) {
      const setLimit = this.setLimit;
      const str = errorUtil2.errorUtil;
      return setLimit("max", arg0, true, str.toString(arg1));
    }
  },
  {
    key: "lt",
    value: function lt(arg0, arg1) {
      const setLimit = this.setLimit;
      const str = errorUtil2.errorUtil;
      return setLimit("max", arg0, false, str.toString(arg1));
    }
  },
  {
    key: "setLimit",
    value: function setLimit(kind, value, inclusive, arg3) {
      let items;
      let str;
      const obj = { checks: items };
      const merged = Object.assign(this._def);
      items = [...this._def.checks];
      const obj2 = { kind, value, inclusive, message: str.toString(arg3) };
      items[tmp2] = obj2;
      str = errorUtil2.errorUtil;
      const tmp3 = ZodBigInt(obj);
      return tmp3;
    }
  },
  {
    key: "_addCheck",
    value: function _addCheck(arg0) {
      let items;
      const obj = { checks: items };
      const merged = Object.assign(this._def);
      items = [];
      items[HermesBuiltin.arraySpread(items, this._def.checks, 0)] = arg0;
      const tmp3 = ZodBigInt(obj);
      return tmp3;
    }
  },
  {
    key: "positive",
    value: function positive(arg0) {
      let str;
      const _addCheck = this._addCheck;
      const obj = { kind: "min", value: BigInt(0), inclusive: false, message: str.toString(arg0) };
      str = errorUtil2.errorUtil;
      return _addCheck(obj);
    }
  },
  {
    key: "negative",
    value: function negative(arg0) {
      let str;
      const _addCheck = this._addCheck;
      const obj = { kind: "max", value: BigInt(0), inclusive: false, message: str.toString(arg0) };
      str = errorUtil2.errorUtil;
      return _addCheck(obj);
    }
  },
  {
    key: "nonpositive",
    value: function nonpositive(arg0) {
      let str;
      const _addCheck = this._addCheck;
      const obj = { kind: "max", value: BigInt(0), inclusive: true, message: str.toString(arg0) };
      str = errorUtil2.errorUtil;
      return _addCheck(obj);
    }
  },
  {
    key: "nonnegative",
    value: function nonnegative(arg0) {
      let str;
      const _addCheck = this._addCheck;
      const obj = { kind: "min", value: BigInt(0), inclusive: true, message: str.toString(arg0) };
      str = errorUtil2.errorUtil;
      return _addCheck(obj);
    }
  },
  {
    key: "multipleOf",
    value: function multipleOf(value, arg1) {
      let str;
      const _addCheck = this._addCheck;
      const obj = { kind: "multipleOf", value, message: str.toString(arg1) };
      str = errorUtil2.errorUtil;
      return _addCheck(obj);
    }
  },
  {
    key: "minValue",
    get() {
      let value = null;
      const iter = this._def.checks[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let iter2 = nextResult;
        let tmp3 = "min" === nextResult.kind;
        if (tmp3) {
          let tmp5 = null === value;
          if (!tmp5) {
            tmp5 = iter2.value > value;
          }
          tmp3 = tmp5;
        }
        if (tmp3) {
          value = iter2.value;
        }
        continue;
      }
      return value;
    }
  },
  {
    key: "maxValue",
    get() {
      let value = null;
      const iter = this._def.checks[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let iter2 = nextResult;
        let tmp3 = "max" === nextResult.kind;
        if (tmp3) {
          let tmp5 = null === value;
          if (!tmp5) {
            tmp5 = iter2.value < value;
          }
          tmp3 = tmp5;
        }
        if (tmp3) {
          value = iter2.value;
        }
        continue;
      }
      return value;
    }
  }
];
const _module2Result3 = _createClass(ZodBigInt, items4);
_module2Result3.create = function(coerce) {
  let errorMap;
  let invalid_type_error;
  let obj3;
  const obj = { checks: [], typeName: obj6.ZodBigInt, coerce: null !== coerce && undefined !== coerce && coerce };
  coerce = undefined;
  const tmp = _module2Result3;
  if (null != coerce) {
    coerce = coerce.coerce;
  }
  let closure_0 = coerce;
  if (closure_0) {
    ({ errorMap, invalid_type_error } = coerce);
    const required_error = coerce.required_error;
    const description = coerce.description;
    if (errorMap) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("Can't use \"invalid_type_error\" or \"required_error\" in conjunction with custom error map.");
      throw error;
    }
    const obj2 = { errorMap: null, description: null };
    if (errorMap) {
      obj2.errorMap = errorMap;
      obj2.description = description;
      obj3 = obj2;
    } else {
      obj2.errorMap = function errorMap(code, defaultError) {
        let obj;
        defaultError = message.message;
        if ("invalid_enum_value" === code.code) {
          if (null == defaultError) {
            defaultError = defaultError.defaultError;
          }
          obj = { message: defaultError };
          const obj2 = { message: defaultError };
        } else if (undefined === defaultError.data) {
          let defaultError3 = defaultError;
          if (null == defaultError) {
            defaultError3 = required_error;
          }
          if (null === defaultError3) {
            defaultError3 = defaultError.defaultError;
          }
          obj = { message: defaultError3 };
          const obj3 = { message: defaultError3 };
        } else if ("invalid_type" !== code.code) {
          obj = { message: defaultError.defaultError };
          const obj4 = { message: defaultError.defaultError };
        } else {
          let defaultError2 = defaultError;
          if (null == defaultError) {
            defaultError2 = invalid_type_error;
          }
          if (null === defaultError2) {
            defaultError2 = defaultError.defaultError;
          }
          obj = { message: defaultError2 };
        }
        return obj;
      };
      obj2.description = description;
      obj3 = obj2;
    }
  } else {
    obj3 = {};
  }
  const merged = Object.assign(obj3);
  const tmp2 = new tmp(obj);
  return tmp2;
};
class ZodBoolean {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, ZodBoolean);
    const obj = _getPrototypeOf(ZodBoolean);
    const tmp2 = _getPrototypeOf;
    const tmp3 = c2;
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return tmp3(self, constructResult);
  }
}
_inherits(ZodBoolean, _module2Result);
const entry5 = {
  key: "_parse",
  value: function _parse(data) {
    const self = this;
    if (this._def.coerce) {
      const _Boolean = Boolean;
      data.data = Boolean(data.data);
    }
    const _getTypeResult = self._getType(data);
    if (_getTypeResult !== _mod15898.ZodParsedType.boolean) {
      const _getOrReturnCtxResult = self._getOrReturnCtx(data);
      const obj = { code: require("module_15897").ZodIssueCode.invalid_type, expected: _mod15898.ZodParsedType.boolean, received: _getOrReturnCtxResult.parsedType };
      const addIssueToContext = tmp3(15899).addIssueToContext;
      addIssueToContext(_getOrReturnCtxResult, obj);
      return DIRTY.INVALID;
    } else {
      return DIRTY.OK(data.data);
    }
  }
};
const items5 = [entry5];
const _module2Result4 = _createClass(ZodBoolean, items5);
_module2Result4.create = function(coerce) {
  let errorMap;
  let flag;
  let invalid_type_error;
  let obj3;
  const obj = { typeName: obj6.ZodBoolean, coerce: flag };
  flag = undefined;
  const tmp = _module2Result4;
  if (null != coerce) {
    flag = coerce.coerce;
  }
  if (!flag) {
    flag = false;
  }
  let closure_0 = coerce;
  if (closure_0) {
    ({ errorMap, invalid_type_error } = coerce);
    const required_error = coerce.required_error;
    const description = coerce.description;
    if (errorMap) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("Can't use \"invalid_type_error\" or \"required_error\" in conjunction with custom error map.");
      throw error;
    }
    const obj2 = { errorMap: null, description: null };
    if (errorMap) {
      obj2.errorMap = errorMap;
      obj2.description = description;
      obj3 = obj2;
    } else {
      obj2.errorMap = function errorMap(code, defaultError) {
        let obj;
        defaultError = message.message;
        if ("invalid_enum_value" === code.code) {
          if (null == defaultError) {
            defaultError = defaultError.defaultError;
          }
          obj = { message: defaultError };
          const obj2 = { message: defaultError };
        } else if (undefined === defaultError.data) {
          let defaultError3 = defaultError;
          if (null == defaultError) {
            defaultError3 = required_error;
          }
          if (null === defaultError3) {
            defaultError3 = defaultError.defaultError;
          }
          obj = { message: defaultError3 };
          const obj3 = { message: defaultError3 };
        } else if ("invalid_type" !== code.code) {
          obj = { message: defaultError.defaultError };
          const obj4 = { message: defaultError.defaultError };
        } else {
          let defaultError2 = defaultError;
          if (null == defaultError) {
            defaultError2 = invalid_type_error;
          }
          if (null === defaultError2) {
            defaultError2 = defaultError.defaultError;
          }
          obj = { message: defaultError2 };
        }
        return obj;
      };
      obj2.description = description;
      obj3 = obj2;
    }
  } else {
    obj3 = {};
  }
  const merged = Object.assign(obj3);
  const tmp2 = new tmp(obj);
  return tmp2;
};
class ZodDate {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, ZodDate);
    const obj = _getPrototypeOf(ZodDate);
    const tmp2 = _getPrototypeOf;
    const tmp3 = c2;
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return tmp3(self, constructResult);
  }
}
_inherits(ZodDate, _module2Result);
const entry6 = {
  key: "_parse",
  value: function _parse(data) {
    let date1;
    let tmp12;
    const self = this;
    if (this._def.coerce) {
      const _Date = Date;
      const self2 = this;
      const self3 = this;
      data.data = new Date(data.data);
      const date = new Date(data.data);
    }
    const _getTypeResult = self._getType(data);
    if (_getTypeResult !== _mod15898.ZodParsedType.date) {
      const _getOrReturnCtxResult = self._getOrReturnCtx(data);
      const obj2 = { code: require("module_15897").ZodIssueCode.invalid_type, expected: _mod15898.ZodParsedType.date, received: _getOrReturnCtxResult.parsedType };
      const addIssueToContext3 = tmp5(15899).addIssueToContext;
      addIssueToContext3(_getOrReturnCtxResult, obj2);
      return DIRTY.INVALID;
    } else {
      const _isNaN = isNaN;
      const data4 = data.data;
      if (isNaN(data4.getTime())) {
        const obj3 = { code: require("module_15897").ZodIssueCode.invalid_date };
        const _getOrReturnCtxResult1 = self._getOrReturnCtx(data);
        const addIssueToContext2 = tmp6(15899).addIssueToContext;
        addIssueToContext2(_getOrReturnCtxResult1, obj3);
        return DIRTY.INVALID;
      } else {
        const self4 = this;
        const self5 = this;
        const iter = new DIRTY.ParseStatus();
        const checks = self._def.checks;
        const iter2 = checks[Symbol.iterator]();
        const nextResult = iter2.next();
        while (iter2 !== undefined) {
          let iter3 = nextResult;
          if ("min" === nextResult.kind) {
            let data2 = data.data;
            if (data2.getTime() < iter3.value) {
              let _getOrReturnCtxResult2 = self._getOrReturnCtx(data, tmp12);
              tmp12 = _getOrReturnCtxResult2;
              let obj = { code: require("module_15897").ZodIssueCode.too_small, message: null, inclusive: true, exact: false, minimum: null, type: "date" };
              let addIssueToContext = DIRTY.addIssueToContext;
              ({ message: obj.message, value: obj.minimum } = iter3);
              let addIssueToContextResult = addIssueToContext(_getOrReturnCtxResult2, obj);
              let dirtyResult = iter.dirty();
            }
          } else if ("max" === iter3.kind) {
            data = data.data;
            if (data.getTime() > iter3.value) {
              let _getOrReturnCtxResult3 = self._getOrReturnCtx(data, tmp12);
              tmp12 = _getOrReturnCtxResult3;
              let obj4 = { code: require("module_15897").ZodIssueCode.too_big, message: null, inclusive: true, exact: false, maximum: null, type: "date" };
              let addIssueToContext4 = DIRTY.addIssueToContext;
              ({ message: obj5.message, value: obj5.maximum } = iter3);
              let addIssueToContext4Result = addIssueToContext4(_getOrReturnCtxResult3, obj4);
              let dirtyResult1 = iter.dirty();
            }
          } else {
            let util = _mod15898.util;
            let assertNeverResult = util.assertNever(iter3);
          }
          continue;
        }
        const _Date2 = Date;
        const data3 = data.data;
        const self6 = this;
        const self7 = this;
        const obj9 = { status: iter.value, value: date1 };
        date1 = new Date(data3.getTime());
        return obj9;
      }
    }
  }
};
const items6 = [
  entry6,
  {
    key: "_addCheck",
    value: function _addCheck(arg0) {
      let items;
      const obj = { checks: items };
      const merged = Object.assign(this._def);
      items = [];
      items[HermesBuiltin.arraySpread(items, this._def.checks, 0)] = arg0;
      const tmp3 = ZodDate(obj);
      return tmp3;
    }
  },
  {
    key: "min",
    value: function min(getTime, arg1) {
      let str;
      const _addCheck = this._addCheck;
      const obj = { kind: "min", value: getTime.getTime(), message: str.toString(arg1) };
      str = errorUtil2.errorUtil;
      return _addCheck(obj);
    }
  },
  {
    key: "max",
    value: function max(getTime, arg1) {
      let str;
      const _addCheck = this._addCheck;
      const obj = { kind: "max", value: getTime.getTime(), message: str.toString(arg1) };
      str = errorUtil2.errorUtil;
      return _addCheck(obj);
    }
  },
  {
    key: "minDate",
    get() {
      let value = null;
      const iter = this._def.checks[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let iter2 = nextResult;
        let tmp3 = "min" === nextResult.kind;
        if (tmp3) {
          let tmp5 = null === value;
          if (!tmp5) {
            tmp5 = iter2.value > value;
          }
          tmp3 = tmp5;
        }
        if (tmp3) {
          value = iter2.value;
        }
        continue;
      }
      let date = null;
      if (null != value) {
        const _Date = Date;
        const self = this;
        const self2 = this;
        date = new Date(value);
      }
      return date;
    }
  },
  {
    key: "maxDate",
    get() {
      let value = null;
      const iter = this._def.checks[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let iter2 = nextResult;
        let tmp3 = "max" === nextResult.kind;
        if (tmp3) {
          let tmp5 = null === value;
          if (!tmp5) {
            tmp5 = iter2.value < value;
          }
          tmp3 = tmp5;
        }
        if (tmp3) {
          value = iter2.value;
        }
        continue;
      }
      let date = null;
      if (null != value) {
        const _Date = Date;
        const self = this;
        const self2 = this;
        date = new Date(value);
      }
      return date;
    }
  }
];
const _module2Result5 = _createClass(ZodDate, items6);
_module2Result5.create = function(coerce) {
  let errorMap;
  let flag;
  let invalid_type_error;
  let obj3;
  const obj = { checks: [], coerce: flag, typeName: obj6.ZodDate };
  flag = undefined;
  const tmp = _module2Result5;
  if (null != coerce) {
    flag = coerce.coerce;
  }
  if (!flag) {
    flag = false;
  }
  let closure_0 = coerce;
  invalid_type_error = undefined;
  let required_error;
  if (coerce) {
    ({ errorMap, invalid_type_error } = coerce);
    required_error = coerce.required_error;
    const description = coerce.description;
    if (errorMap) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("Can't use \"invalid_type_error\" or \"required_error\" in conjunction with custom error map.");
      throw error;
    }
    const obj2 = { errorMap: null, description: null };
    if (errorMap) {
      obj2.errorMap = errorMap;
      obj2.description = description;
      obj3 = obj2;
    } else {
      obj2.errorMap = function errorMap(code, defaultError) {
        let obj;
        defaultError = message.message;
        if ("invalid_enum_value" === code.code) {
          if (null == defaultError) {
            defaultError = defaultError.defaultError;
          }
          obj = { message: defaultError };
          const obj2 = { message: defaultError };
        } else if (undefined === defaultError.data) {
          let defaultError3 = defaultError;
          if (null == defaultError) {
            defaultError3 = required_error;
          }
          if (null === defaultError3) {
            defaultError3 = defaultError.defaultError;
          }
          obj = { message: defaultError3 };
          const obj3 = { message: defaultError3 };
        } else if ("invalid_type" !== code.code) {
          obj = { message: defaultError.defaultError };
          const obj4 = { message: defaultError.defaultError };
        } else {
          let defaultError2 = defaultError;
          if (null == defaultError) {
            defaultError2 = invalid_type_error;
          }
          if (null === defaultError2) {
            defaultError2 = defaultError.defaultError;
          }
          obj = { message: defaultError2 };
        }
        return obj;
      };
      obj2.description = description;
      obj3 = obj2;
    }
  } else {
    obj3 = {};
  }
  const merged = Object.assign(obj3);
  const tmp2 = new tmp(obj);
  return tmp2;
};
class ZodSymbol {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, ZodSymbol);
    const obj = _getPrototypeOf(ZodSymbol);
    const tmp2 = _getPrototypeOf;
    const tmp3 = c2;
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return tmp3(self, constructResult);
  }
}
_inherits(ZodSymbol, _module2Result);
const entry7 = {
  key: "_parse",
  value: function _parse(data) {
    const self = this;
    const _getTypeResult = this._getType(data);
    if (_getTypeResult !== _mod15898.ZodParsedType.symbol) {
      const _getOrReturnCtxResult = self._getOrReturnCtx(data);
      const obj = { code: require("module_15897").ZodIssueCode.invalid_type, expected: _mod15898.ZodParsedType.symbol, received: _getOrReturnCtxResult.parsedType };
      const addIssueToContext = tmp2(15899).addIssueToContext;
      addIssueToContext(_getOrReturnCtxResult, obj);
      return DIRTY.INVALID;
    } else {
      return DIRTY.OK(data.data);
    }
  }
};
const items7 = [entry7];
const _module2Result6 = _createClass(ZodSymbol, items7);
_module2Result6.create = function(required_error) {
  let errorMap;
  let invalid_type_error;
  let obj3;
  let closure_0 = required_error;
  invalid_type_error = undefined;
  required_error = undefined;
  const obj = { typeName: obj6.ZodSymbol };
  const tmp = _module2Result6;
  if (required_error) {
    ({ errorMap, invalid_type_error } = required_error);
    required_error = required_error.required_error;
    const description = required_error.description;
    if (errorMap) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("Can't use \"invalid_type_error\" or \"required_error\" in conjunction with custom error map.");
      throw error;
    }
    const obj2 = { errorMap: null, description: null };
    if (errorMap) {
      obj2.errorMap = errorMap;
      obj2.description = description;
      obj3 = obj2;
    } else {
      obj2.errorMap = function errorMap(code, defaultError) {
        let obj;
        defaultError = message.message;
        if ("invalid_enum_value" === code.code) {
          if (null == defaultError) {
            defaultError = defaultError.defaultError;
          }
          obj = { message: defaultError };
          const obj2 = { message: defaultError };
        } else if (undefined === defaultError.data) {
          let defaultError3 = defaultError;
          if (null == defaultError) {
            defaultError3 = required_error;
          }
          if (null === defaultError3) {
            defaultError3 = defaultError.defaultError;
          }
          obj = { message: defaultError3 };
          const obj3 = { message: defaultError3 };
        } else if ("invalid_type" !== code.code) {
          obj = { message: defaultError.defaultError };
          const obj4 = { message: defaultError.defaultError };
        } else {
          let defaultError2 = defaultError;
          if (null == defaultError) {
            defaultError2 = invalid_type_error;
          }
          if (null === defaultError2) {
            defaultError2 = defaultError.defaultError;
          }
          obj = { message: defaultError2 };
        }
        return obj;
      };
      obj2.description = description;
      obj3 = obj2;
    }
  } else {
    obj3 = {};
  }
  const merged = Object.assign(obj3);
  const tmp2 = new tmp(obj);
  return tmp2;
};
class ZodUndefined {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, ZodUndefined);
    const obj = _getPrototypeOf(ZodUndefined);
    const tmp2 = _getPrototypeOf;
    const tmp3 = c2;
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return tmp3(self, constructResult);
  }
}
_inherits(ZodUndefined, _module2Result);
const entry8 = {
  key: "_parse",
  value: function _parse(data) {
    const self = this;
    const _getTypeResult = this._getType(data);
    if (_getTypeResult !== _mod15898.ZodParsedType.undefined) {
      const _getOrReturnCtxResult = self._getOrReturnCtx(data);
      const obj = { code: require("module_15897").ZodIssueCode.invalid_type, expected: _mod15898.ZodParsedType.undefined, received: _getOrReturnCtxResult.parsedType };
      const addIssueToContext = tmp2(15899).addIssueToContext;
      addIssueToContext(_getOrReturnCtxResult, obj);
      return DIRTY.INVALID;
    } else {
      return DIRTY.OK(data.data);
    }
  }
};
const items8 = [entry8];
const _module2Result7 = _createClass(ZodUndefined, items8);
_module2Result7.create = function(required_error) {
  let errorMap;
  let invalid_type_error;
  let obj3;
  let closure_0 = required_error;
  invalid_type_error = undefined;
  required_error = undefined;
  const obj = { typeName: obj6.ZodUndefined };
  const tmp = _module2Result7;
  if (required_error) {
    ({ errorMap, invalid_type_error } = required_error);
    required_error = required_error.required_error;
    const description = required_error.description;
    if (errorMap) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("Can't use \"invalid_type_error\" or \"required_error\" in conjunction with custom error map.");
      throw error;
    }
    const obj2 = { errorMap: null, description: null };
    if (errorMap) {
      obj2.errorMap = errorMap;
      obj2.description = description;
      obj3 = obj2;
    } else {
      obj2.errorMap = function errorMap(code, defaultError) {
        let obj;
        defaultError = message.message;
        if ("invalid_enum_value" === code.code) {
          if (null == defaultError) {
            defaultError = defaultError.defaultError;
          }
          obj = { message: defaultError };
          const obj2 = { message: defaultError };
        } else if (undefined === defaultError.data) {
          let defaultError3 = defaultError;
          if (null == defaultError) {
            defaultError3 = required_error;
          }
          if (null === defaultError3) {
            defaultError3 = defaultError.defaultError;
          }
          obj = { message: defaultError3 };
          const obj3 = { message: defaultError3 };
        } else if ("invalid_type" !== code.code) {
          obj = { message: defaultError.defaultError };
          const obj4 = { message: defaultError.defaultError };
        } else {
          let defaultError2 = defaultError;
          if (null == defaultError) {
            defaultError2 = invalid_type_error;
          }
          if (null === defaultError2) {
            defaultError2 = defaultError.defaultError;
          }
          obj = { message: defaultError2 };
        }
        return obj;
      };
      obj2.description = description;
      obj3 = obj2;
    }
  } else {
    obj3 = {};
  }
  const merged = Object.assign(obj3);
  const tmp2 = new tmp(obj);
  return tmp2;
};
class ZodNull {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, ZodNull);
    const obj = _getPrototypeOf(ZodNull);
    const tmp2 = _getPrototypeOf;
    const tmp3 = c2;
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return tmp3(self, constructResult);
  }
}
_inherits(ZodNull, _module2Result);
const entry9 = {
  key: "_parse",
  value: function _parse(data) {
    const self = this;
    const _getTypeResult = this._getType(data);
    if (_getTypeResult !== _mod15898.ZodParsedType.null) {
      const _getOrReturnCtxResult = self._getOrReturnCtx(data);
      const obj = { code: require("module_15897").ZodIssueCode.invalid_type, expected: _mod15898.ZodParsedType.null, received: _getOrReturnCtxResult.parsedType };
      const addIssueToContext = tmp2(15899).addIssueToContext;
      addIssueToContext(_getOrReturnCtxResult, obj);
      return DIRTY.INVALID;
    } else {
      return DIRTY.OK(data.data);
    }
  }
};
const items9 = [entry9];
const _module2Result8 = _createClass(ZodNull, items9);
_module2Result8.create = function(required_error) {
  let errorMap;
  let invalid_type_error;
  let obj3;
  let closure_0 = required_error;
  invalid_type_error = undefined;
  required_error = undefined;
  const obj = { typeName: obj6.ZodNull };
  const tmp = _module2Result8;
  if (required_error) {
    ({ errorMap, invalid_type_error } = required_error);
    required_error = required_error.required_error;
    const description = required_error.description;
    if (errorMap) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("Can't use \"invalid_type_error\" or \"required_error\" in conjunction with custom error map.");
      throw error;
    }
    const obj2 = { errorMap: null, description: null };
    if (errorMap) {
      obj2.errorMap = errorMap;
      obj2.description = description;
      obj3 = obj2;
    } else {
      obj2.errorMap = function errorMap(code, defaultError) {
        let obj;
        defaultError = message.message;
        if ("invalid_enum_value" === code.code) {
          if (null == defaultError) {
            defaultError = defaultError.defaultError;
          }
          obj = { message: defaultError };
          const obj2 = { message: defaultError };
        } else if (undefined === defaultError.data) {
          let defaultError3 = defaultError;
          if (null == defaultError) {
            defaultError3 = required_error;
          }
          if (null === defaultError3) {
            defaultError3 = defaultError.defaultError;
          }
          obj = { message: defaultError3 };
          const obj3 = { message: defaultError3 };
        } else if ("invalid_type" !== code.code) {
          obj = { message: defaultError.defaultError };
          const obj4 = { message: defaultError.defaultError };
        } else {
          let defaultError2 = defaultError;
          if (null == defaultError) {
            defaultError2 = invalid_type_error;
          }
          if (null === defaultError2) {
            defaultError2 = defaultError.defaultError;
          }
          obj = { message: defaultError2 };
        }
        return obj;
      };
      obj2.description = description;
      obj3 = obj2;
    }
  } else {
    obj3 = {};
  }
  const merged = Object.assign(obj3);
  const tmp2 = new tmp(obj);
  return tmp2;
};
class ZodAny {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, ZodAny);
    const obj = _getPrototypeOf(ZodAny);
    const tmp2 = _getPrototypeOf;
    const tmp3 = c2;
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    const tmp3Result = tmp3(self, constructResult);
    tmp3Result._any = true;
    return tmp3Result;
  }
}
_inherits(ZodAny, _module2Result);
const entry10 = {
  key: "_parse",
  value: function _parse(data) {
    return DIRTY.OK(data.data);
  }
};
const items10 = [entry10];
const _module2Result9 = _createClass(ZodAny, items10);
_module2Result9.create = function(required_error) {
  let errorMap;
  let invalid_type_error;
  let obj3;
  let closure_0 = required_error;
  invalid_type_error = undefined;
  required_error = undefined;
  const obj = { typeName: obj6.ZodAny };
  const tmp = _module2Result9;
  if (required_error) {
    ({ errorMap, invalid_type_error } = required_error);
    required_error = required_error.required_error;
    const description = required_error.description;
    if (errorMap) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("Can't use \"invalid_type_error\" or \"required_error\" in conjunction with custom error map.");
      throw error;
    }
    const obj2 = { errorMap: null, description: null };
    if (errorMap) {
      obj2.errorMap = errorMap;
      obj2.description = description;
      obj3 = obj2;
    } else {
      obj2.errorMap = function errorMap(code, defaultError) {
        let obj;
        defaultError = message.message;
        if ("invalid_enum_value" === code.code) {
          if (null == defaultError) {
            defaultError = defaultError.defaultError;
          }
          obj = { message: defaultError };
          const obj2 = { message: defaultError };
        } else if (undefined === defaultError.data) {
          let defaultError3 = defaultError;
          if (null == defaultError) {
            defaultError3 = required_error;
          }
          if (null === defaultError3) {
            defaultError3 = defaultError.defaultError;
          }
          obj = { message: defaultError3 };
          const obj3 = { message: defaultError3 };
        } else if ("invalid_type" !== code.code) {
          obj = { message: defaultError.defaultError };
          const obj4 = { message: defaultError.defaultError };
        } else {
          let defaultError2 = defaultError;
          if (null == defaultError) {
            defaultError2 = invalid_type_error;
          }
          if (null === defaultError2) {
            defaultError2 = defaultError.defaultError;
          }
          obj = { message: defaultError2 };
        }
        return obj;
      };
      obj2.description = description;
      obj3 = obj2;
    }
  } else {
    obj3 = {};
  }
  const merged = Object.assign(obj3);
  const tmp2 = new tmp(obj);
  return tmp2;
};
class ZodUnknown {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, ZodUnknown);
    const obj = _getPrototypeOf(ZodUnknown);
    const tmp2 = _getPrototypeOf;
    const tmp3 = c2;
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    const tmp3Result = tmp3(self, constructResult);
    tmp3Result._unknown = true;
    return tmp3Result;
  }
}
_inherits(ZodUnknown, _module2Result);
const entry11 = {
  key: "_parse",
  value: function _parse(data) {
    return DIRTY.OK(data.data);
  }
};
const items11 = [entry11];
const _module2Result10 = _createClass(ZodUnknown, items11);
_module2Result10.create = function(required_error) {
  let errorMap;
  let invalid_type_error;
  let obj3;
  let closure_0 = required_error;
  invalid_type_error = undefined;
  required_error = undefined;
  const obj = { typeName: obj6.ZodUnknown };
  const tmp = _module2Result10;
  if (required_error) {
    ({ errorMap, invalid_type_error } = required_error);
    required_error = required_error.required_error;
    const description = required_error.description;
    if (errorMap) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("Can't use \"invalid_type_error\" or \"required_error\" in conjunction with custom error map.");
      throw error;
    }
    const obj2 = { errorMap: null, description: null };
    if (errorMap) {
      obj2.errorMap = errorMap;
      obj2.description = description;
      obj3 = obj2;
    } else {
      obj2.errorMap = function errorMap(code, defaultError) {
        let obj;
        defaultError = message.message;
        if ("invalid_enum_value" === code.code) {
          if (null == defaultError) {
            defaultError = defaultError.defaultError;
          }
          obj = { message: defaultError };
          const obj2 = { message: defaultError };
        } else if (undefined === defaultError.data) {
          let defaultError3 = defaultError;
          if (null == defaultError) {
            defaultError3 = required_error;
          }
          if (null === defaultError3) {
            defaultError3 = defaultError.defaultError;
          }
          obj = { message: defaultError3 };
          const obj3 = { message: defaultError3 };
        } else if ("invalid_type" !== code.code) {
          obj = { message: defaultError.defaultError };
          const obj4 = { message: defaultError.defaultError };
        } else {
          let defaultError2 = defaultError;
          if (null == defaultError) {
            defaultError2 = invalid_type_error;
          }
          if (null === defaultError2) {
            defaultError2 = defaultError.defaultError;
          }
          obj = { message: defaultError2 };
        }
        return obj;
      };
      obj2.description = description;
      obj3 = obj2;
    }
  } else {
    obj3 = {};
  }
  const merged = Object.assign(obj3);
  const tmp2 = new tmp(obj);
  return tmp2;
};
class ZodNever {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, ZodNever);
    const obj = _getPrototypeOf(ZodNever);
    const tmp2 = _getPrototypeOf;
    const tmp3 = c2;
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return tmp3(self, constructResult);
  }
}
_inherits(ZodNever, _module2Result);
const entry12 = {
  key: "_parse",
  value: function _parse(parent) {
    const _getOrReturnCtxResult = this._getOrReturnCtx(parent);
    const obj = { code: require("module_15897").ZodIssueCode.invalid_type, expected: _mod15898.ZodParsedType.never, received: _getOrReturnCtxResult.parsedType };
    const addIssueToContext = DIRTY.addIssueToContext;
    addIssueToContext(_getOrReturnCtxResult, obj);
    return DIRTY.INVALID;
  }
};
const items12 = [entry12];
const _module2Result11 = _createClass(ZodNever, items12);
_module2Result11.create = function(required_error) {
  let errorMap;
  let invalid_type_error;
  let obj3;
  let closure_0 = required_error;
  invalid_type_error = undefined;
  required_error = undefined;
  const obj = { typeName: obj6.ZodNever };
  const tmp = _module2Result11;
  if (required_error) {
    ({ errorMap, invalid_type_error } = required_error);
    required_error = required_error.required_error;
    const description = required_error.description;
    if (errorMap) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("Can't use \"invalid_type_error\" or \"required_error\" in conjunction with custom error map.");
      throw error;
    }
    const obj2 = { errorMap: null, description: null };
    if (errorMap) {
      obj2.errorMap = errorMap;
      obj2.description = description;
      obj3 = obj2;
    } else {
      obj2.errorMap = function errorMap(code, defaultError) {
        let obj;
        defaultError = message.message;
        if ("invalid_enum_value" === code.code) {
          if (null == defaultError) {
            defaultError = defaultError.defaultError;
          }
          obj = { message: defaultError };
          const obj2 = { message: defaultError };
        } else if (undefined === defaultError.data) {
          let defaultError3 = defaultError;
          if (null == defaultError) {
            defaultError3 = required_error;
          }
          if (null === defaultError3) {
            defaultError3 = defaultError.defaultError;
          }
          obj = { message: defaultError3 };
          const obj3 = { message: defaultError3 };
        } else if ("invalid_type" !== code.code) {
          obj = { message: defaultError.defaultError };
          const obj4 = { message: defaultError.defaultError };
        } else {
          let defaultError2 = defaultError;
          if (null == defaultError) {
            defaultError2 = invalid_type_error;
          }
          if (null === defaultError2) {
            defaultError2 = defaultError.defaultError;
          }
          obj = { message: defaultError2 };
        }
        return obj;
      };
      obj2.description = description;
      obj3 = obj2;
    }
  } else {
    obj3 = {};
  }
  const merged = Object.assign(obj3);
  const tmp2 = new tmp(obj);
  return tmp2;
};
class ZodVoid {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, ZodVoid);
    const obj = _getPrototypeOf(ZodVoid);
    const tmp2 = _getPrototypeOf;
    const tmp3 = c2;
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return tmp3(self, constructResult);
  }
}
_inherits(ZodVoid, _module2Result);
const entry13 = {
  key: "_parse",
  value: function _parse(data) {
    const self = this;
    const _getTypeResult = this._getType(data);
    if (_getTypeResult !== _mod15898.ZodParsedType.undefined) {
      const _getOrReturnCtxResult = self._getOrReturnCtx(data);
      const obj = { code: require("module_15897").ZodIssueCode.invalid_type, expected: _mod15898.ZodParsedType.void, received: _getOrReturnCtxResult.parsedType };
      const addIssueToContext = tmp2(15899).addIssueToContext;
      addIssueToContext(_getOrReturnCtxResult, obj);
      return DIRTY.INVALID;
    } else {
      return DIRTY.OK(data.data);
    }
  }
};
const items13 = [entry13];
const _module2Result12 = _createClass(ZodVoid, items13);
_module2Result12.create = function(required_error) {
  let errorMap;
  let invalid_type_error;
  let obj3;
  let closure_0 = required_error;
  invalid_type_error = undefined;
  required_error = undefined;
  const obj = { typeName: obj6.ZodVoid };
  const tmp = _module2Result12;
  if (required_error) {
    ({ errorMap, invalid_type_error } = required_error);
    required_error = required_error.required_error;
    const description = required_error.description;
    if (errorMap) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("Can't use \"invalid_type_error\" or \"required_error\" in conjunction with custom error map.");
      throw error;
    }
    const obj2 = { errorMap: null, description: null };
    if (errorMap) {
      obj2.errorMap = errorMap;
      obj2.description = description;
      obj3 = obj2;
    } else {
      obj2.errorMap = function errorMap(code, defaultError) {
        let obj;
        defaultError = message.message;
        if ("invalid_enum_value" === code.code) {
          if (null == defaultError) {
            defaultError = defaultError.defaultError;
          }
          obj = { message: defaultError };
          const obj2 = { message: defaultError };
        } else if (undefined === defaultError.data) {
          let defaultError3 = defaultError;
          if (null == defaultError) {
            defaultError3 = required_error;
          }
          if (null === defaultError3) {
            defaultError3 = defaultError.defaultError;
          }
          obj = { message: defaultError3 };
          const obj3 = { message: defaultError3 };
        } else if ("invalid_type" !== code.code) {
          obj = { message: defaultError.defaultError };
          const obj4 = { message: defaultError.defaultError };
        } else {
          let defaultError2 = defaultError;
          if (null == defaultError) {
            defaultError2 = invalid_type_error;
          }
          if (null === defaultError2) {
            defaultError2 = defaultError.defaultError;
          }
          obj = { message: defaultError2 };
        }
        return obj;
      };
      obj2.description = description;
      obj3 = obj2;
    }
  } else {
    obj3 = {};
  }
  const merged = Object.assign(obj3);
  const tmp2 = new tmp(obj);
  return tmp2;
};
class ZodArray {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, ZodArray);
    const obj = _getPrototypeOf(ZodArray);
    const tmp2 = _getPrototypeOf;
    const tmp3 = c2;
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return tmp3(self, constructResult);
  }
}
_inherits(ZodArray, _module2Result);
const entry14 = {
  key: "_parse",
  value: function _parse(common) {
    let value;
    let value2;
    const _processInputParamsResult = this._processInputParams(common);
    const ctx = _processInputParamsResult.ctx;
    const status = _processInputParamsResult.status;
    const _def = this._def;
    if (ctx.parsedType !== ctx(status[9]).ZodParsedType.array) {
      const obj2 = { code: ctx(status[8]).ZodIssueCode.invalid_type, expected: ctx(status[9]).ZodParsedType.array, received: ctx.parsedType };
      const addIssueToContext4 = tmp3(tmp4[7]).addIssueToContext;
      addIssueToContext4(ctx, obj2);
      return ctx(status[7]).INVALID;
    } else {
      if (null !== _def.exactLength) {
        const tmp5 = ctx.data.length > _def.exactLength.value || ctx.data.length < _def.exactLength.value;
        if (tmp5) {
          const addIssueToContext = tmp3(tmp4[7]).addIssueToContext;
          const ZodIssueCode = tmp3(tmp4[8]).ZodIssueCode;
          const obj = { code: ctx.data.length > _def.exactLength.value ? ZodIssueCode.too_big : ZodIssueCode.too_small, minimum: value, maximum: value2, type: "array", inclusive: true, exact: true, message: _def.exactLength.message };
          value = undefined;
          if (ctx.data.length < _def.exactLength.value) {
            value = _def.exactLength.value;
          }
          value2 = undefined;
          if (ctx.data.length > _def.exactLength.value) {
            value2 = _def.exactLength.value;
          }
          addIssueToContext(ctx, obj);
          status.dirty();
        }
      }
      const tmp10 = null !== _def.minLength && ctx.data.length < _def.minLength.value;
      if (tmp10) {
        const obj3 = { code: ctx(status[8]).ZodIssueCode.too_small, minimum: _def.minLength.value, type: "array", inclusive: true, exact: false, message: _def.minLength.message };
        const addIssueToContext2 = tmp3(tmp4[7]).addIssueToContext;
        addIssueToContext2(ctx, obj3);
        status.dirty();
      }
      const tmp13 = null !== _def.maxLength && ctx.data.length > _def.maxLength.value;
      if (tmp13) {
        const obj4 = { code: ctx(status[8]).ZodIssueCode.too_big, maximum: _def.maxLength.value, type: "array", inclusive: true, exact: false, message: _def.maxLength.message };
        const addIssueToContext3 = tmp3(tmp4[7]).addIssueToContext;
        addIssueToContext3(ctx, obj4);
        status.dirty();
      }
      if (ctx.common.async) {
        const items = [];
        HermesBuiltin.arraySpread(items, ctx.data, 0);
        const allResult = all(items.map((item, index) => {
          const type = _def.type;
          const _parseAsync = type._parseAsync;
          const tmp = new closure_12(ctx, item, ctx.path, index);
          return _parseAsync(tmp);
        }));
        return allResult.then((result) => {
          const ParseStatus = DIRTY.ParseStatus;
          return ParseStatus.mergeArray(status, result);
        });
      } else {
        const items1 = [];
        HermesBuiltin.arraySpread(items1, ctx.data, 0);
        const mapped = items1.map((item, index) => {
          const type = _def.type;
          const _parseSync = type._parseSync;
          const tmp = new closure_12(ctx, item, ctx.path, index);
          return _parseSync(tmp);
        });
        let ParseStatus = tmp3(tmp4[7]).ParseStatus;
        return ParseStatus.mergeArray(status, mapped);
      }
    }
  }
};
const items14 = [
  entry14,
  {
    key: "element",
    get() {
      return this._def.type;
    }
  },
  {
    key: "min",
    value: function min(value, arg1) {
      let obj2;
      let str;
      const obj = { minLength: obj2 };
      const merged = Object.assign(this._def);
      obj2 = { value, message: str.toString(arg1) };
      str = errorUtil2.errorUtil;
      const tmp2 = ZodArray(obj);
      return tmp2;
    }
  },
  {
    key: "max",
    value: function max(value, arg1) {
      let obj2;
      let str;
      const obj = { maxLength: obj2 };
      const merged = Object.assign(this._def);
      obj2 = { value, message: str.toString(arg1) };
      str = errorUtil2.errorUtil;
      const tmp2 = ZodArray(obj);
      return tmp2;
    }
  },
  {
    key: "length",
    value: function length(value, arg1) {
      let obj2;
      let str;
      const obj = { exactLength: obj2 };
      const merged = Object.assign(this._def);
      obj2 = { value, message: str.toString(arg1) };
      str = errorUtil2.errorUtil;
      const tmp2 = ZodArray(obj);
      return tmp2;
    }
  },
  {
    key: "nonempty",
    value: function nonempty(arg0) {
      return this.min(1, arg0);
    }
  }
];
const _module2Result13 = _createClass(ZodArray, items14);
_module2Result13.create = function(type, required_error) {
  let errorMap;
  let invalid_type_error;
  let obj3;
  let closure_0 = required_error;
  invalid_type_error = undefined;
  required_error = undefined;
  const obj = { type, minLength: null, maxLength: null, exactLength: null, typeName: obj6.ZodArray };
  const tmp = _module2Result13;
  if (required_error) {
    ({ errorMap, invalid_type_error } = required_error);
    required_error = required_error.required_error;
    const description = required_error.description;
    if (errorMap) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("Can't use \"invalid_type_error\" or \"required_error\" in conjunction with custom error map.");
      throw error;
    }
    const obj2 = { errorMap: null, description: null };
    if (errorMap) {
      obj2.errorMap = errorMap;
      obj2.description = description;
      obj3 = obj2;
    } else {
      obj2.errorMap = function errorMap(code, defaultError) {
        let obj;
        defaultError = message.message;
        if ("invalid_enum_value" === code.code) {
          if (null == defaultError) {
            defaultError = defaultError.defaultError;
          }
          obj = { message: defaultError };
          const obj2 = { message: defaultError };
        } else if (undefined === defaultError.data) {
          let defaultError3 = defaultError;
          if (null == defaultError) {
            defaultError3 = required_error;
          }
          if (null === defaultError3) {
            defaultError3 = defaultError.defaultError;
          }
          obj = { message: defaultError3 };
          const obj3 = { message: defaultError3 };
        } else if ("invalid_type" !== code.code) {
          obj = { message: defaultError.defaultError };
          const obj4 = { message: defaultError.defaultError };
        } else {
          let defaultError2 = defaultError;
          if (null == defaultError) {
            defaultError2 = invalid_type_error;
          }
          if (null === defaultError2) {
            defaultError2 = defaultError.defaultError;
          }
          obj = { message: defaultError2 };
        }
        return obj;
      };
      obj2.description = description;
      obj3 = obj2;
    }
  } else {
    obj3 = {};
  }
  const merged = Object.assign(obj3);
  const tmp2 = new tmp(obj);
  return tmp2;
};
class ZodObject {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, ZodObject);
    const obj = _getPrototypeOf(ZodObject);
    const tmp2 = _getPrototypeOf;
    const tmp3 = c2;
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    const tmp3Result = tmp3(self, constructResult);
    tmp3Result._cached = null;
    ({ passthrough: tmp9.nonstrict, extend: tmp9.augment } = tmp3Result);
    return tmp3Result;
  }
}
_inherits(ZodObject, _module2Result);
const entry15 = {
  key: "_getCached",
  value: function _getCached() {
    const self = this;
    if (null !== this._cached) {
      return self._cached;
    } else {
      const _def = self._def;
      const shapeResult = _def.shape();
      const util = _mod15898.util;
      const obj = { shape: shapeResult, keys: util.objectKeys(shapeResult) };
      self._cached = obj;
      return obj;
    }
  }
};
const items15 = [
  entry15,
  {
    key: "_parse",
    value: function _parse(data) {
      let items1;
      let status;
      const self = this;
      const tmp3 = items1;
      const _getTypeResult = this._getType(data);
      if (_getTypeResult !== status(items1[9]).ZodParsedType.object) {
        const _getOrReturnCtxResult = self._getOrReturnCtx(data);
        let obj = { code: tmp2(tmp3[8]).ZodIssueCode.invalid_type, expected: tmp2(tmp3[9]).ZodParsedType.object, received: _getOrReturnCtxResult.parsedType };
        const addIssueToContext = tmp2(tmp3[7]).addIssueToContext;
        addIssueToContext(_getOrReturnCtxResult, obj);
        return status(tmp3[7]).INVALID;
      } else {
        let nextPromise1;
        const _processInputParamsResult = self._processInputParams(data);
        status = _processInputParamsResult.status;
        const ctx = _processInputParamsResult.ctx;
        const _getCachedResult = self._getCached();
        const keys = _getCachedResult.keys;
        const items = [];
        const shape = _getCachedResult.shape;
        if (!(self._def.catchall instanceof _module2Result11)) {
          for (const key10016 in ctx.data) {
            if (keys.includes(key10016)) {
              continue;
            } else {
              let arr = items.push(key10016);
              continue;
            }
            continue;
          }
        }
        items1 = [];
        let tmp5 = keys;
        let tmp6 = keys;
        for (const item10023 of keys) {
          let tmp7 = shape[item10023];
          let entry = { key: obj2, value: _parse(tmp11), alwaysSet: item10023 in ctx.data };
          let obj2 = { status: "valid", value: item10023 };
          let tmp8 = closure_12;
          let self2 = this;
          let self3 = this;
          let tmp9 = ctx;
          let push = items1.push;
          let _parse = tmp7._parse;
          let tmp11 = new closure_12(ctx, ctx.data[item10023], ctx.path, item10023);
          let tmp12 = tmp11;
          let arr2 = push(entry);
          continue;
        }
        let tmp14 = _module2Result11;
        const _def = self._def;
        if (self._def.catchall instanceof _module2Result11) {
          const unknownKeys = _def.unknownKeys;
          if ("passthrough" === unknownKeys) {
            let tmp23 = items;
            for (const item10083 of items) {
              let entry1 = { key: obj3, value: obj4 };
              let obj3 = { status: "valid", value: item10083 };
              let obj4 = { status: "valid", value: ctx.data[item10083] };
              let arr5 = items1.push(entry1);
              continue;
            }
          } else if ("strict" === unknownKeys) {
            let num = 0;
            if (items.length > 0) {
              let obj5 = { code: status(items1[8]).ZodIssueCode.unrecognized_keys, keys: items };
              const addIssueToContext2 = status(items1[7]).addIssueToContext;
              addIssueToContext2(ctx, obj5);
              status.dirty();
            }
          } else if ("strip" !== unknownKeys) {
            const _Error = Error;
            const self6 = this;
            const self7 = this;
            const error = new Error("Internal ZodObject error: invalid unknownKeys value.");
            throw error;
          }
        } else {
          const catchall = _def.catchall;
          let tmp15 = items;
          let tmp16 = items;
          for (const item10054 of items) {
            let entry2 = { key: obj6, value: _parse2(tmp20), alwaysSet: item10054 in ctx.data };
            obj6 = { status: "valid", value: item10054 };
            let tmp17 = closure_12;
            let self4 = this;
            let self5 = this;
            let tmp18 = ctx;
            let tmp19 = item10054;
            let push2 = items1.push;
            let _parse2 = catchall._parse;
            let tmp20 = new closure_12(ctx, ctx.data[item10054], ctx.path, item10054);
            let tmp21 = tmp20;
            let push2Result = push2(entry2);
            continue;
          }
        }
        if (ctx.common.async) {
          const resolved = Promise.resolve();
          const nextPromise = resolved.then(_asyncToGenerator(async (arg0, value) => {
            if (c6 === 2) {
              c6 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp3 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                const obj = { value, done: true };
                return obj;
              } else {
                return { value: "HermesInternal", done: "HermesInternal" };
              }
            } else {
              while (true) {
                let key;
                let value2;
                c6 = 2;
                let tmp4 = c3;
                if (0 === c3) {
                  if (arg0 === 1) {
                    c6 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c6 = 3;
                    let obj2 = { value, done: true };
                    return obj2;
                  } else {
                    items1 = undefined;
                    key = undefined;
                    value2 = undefined;
                    value = [];
                    let closure_1 = items1;
                    value = items1[Symbol.iterator]();
                  }
                } else if (1 === tmp4) {
                  let c5 = 0;
                  value.return();
                  throw _slicedToArray;
                } else if (2 === tmp4) {
                  if (arg0 === 1) {
                    c6 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c5 = 0;
                    value.return();
                    c6 = 3;
                    let obj3 = { value, done: true };
                    return obj3;
                  } else {
                    key = value;
                    c3 = 3;
                    c6 = 1;
                    let obj4 = { value: items1.value, done: false };
                    return obj4;
                  }
                } else if (arg0 === 1) {
                  c6 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c5 = 0;
                  value.return();
                  c6 = 3;
                  let obj5 = { value, done: true };
                  return obj5;
                } else {
                  value2 = value;
                  let entry = { key, value: value2, alwaysSet: items1.alwaysSet };
                  let arr = value.push(entry);
                  c5 = 0;
                }
                if (value === undefined) {
                  c6 = 3;
                  obj6 = { value, done: true };
                  return obj6;
                } else {
                  c5 = 1;
                  items1 = tmp20;
                  c3 = 2;
                  c6 = 1;
                  let obj7 = { value: items1.key, done: false };
                  return obj7;
                }
              }
            }
          }));
          nextPromise1 = nextPromise.then((result) => {
            const ParseStatus = DIRTY.ParseStatus;
            return ParseStatus.mergeObjectSync(status, result);
          });
        } else {
          let tmp27 = items1;
          let ParseStatus = status(items1[7]).ParseStatus;
          nextPromise1 = ParseStatus.mergeObjectSync(status, items1);
        }
        return nextPromise1;
      }
    }
  },
  {
    key: "shape",
    get() {
      const _def = this._def;
      return _def.shape();
    }
  },
  {
    key: "strict",
    value: function strict(arg0) {
      let obj3;
      const self = this;
      let closure_0 = arg0;
      const errToObj = errorUtil2.errorUtil.errToObj;
      let obj = { unknownKeys: "strict" };
      const merged = Object.assign(this._def);
      const tmp = ZodObject;
      if (undefined !== arg0) {
        let obj2 = {
          errorMap(code, defaultError) {
              let obj;
              const _def = self._def;
              const errorMap = _def.errorMap;
              let message1;
              if (null !== errorMap) {
                if (undefined !== errorMap) {
                  message1 = errorMap.call(_def, code, defaultError).message;
                }
              }
              if (null === message1) {
                message1 = defaultError.defaultError;
              }
              if ("unrecognized_keys" === code.code) {
                const errorUtil = ZodObject(closure_2_1[10]).errorUtil;
                const message = errorUtil.errToObj(closure_0).message;
                let tmp5 = message1;
                if (null !== message) {
                  tmp5 = message1;
                  if (undefined !== message) {
                    tmp5 = message;
                  }
                }
                obj = { message: tmp5 };
                const obj2 = { message: tmp5 };
              } else {
                obj = { message: message1 };
              }
              return obj;
            }
        };
        obj3 = obj2;
      } else {
        obj3 = {};
      }
      const merged1 = Object.assign(obj3);
      const tmpResult = tmp(obj);
      return tmpResult;
    }
  },
  {
    key: "strip",
    value: function strip() {
      const obj = { unknownKeys: "strip" };
      const merged = Object.assign(this._def);
      const tmp2 = ZodObject(obj);
      return tmp2;
    }
  },
  {
    key: "passthrough",
    value: function passthrough() {
      const obj = { unknownKeys: "passthrough" };
      const merged = Object.assign(this._def);
      const tmp2 = ZodObject(obj);
      return tmp2;
    }
  },
  {
    key: "extend",
    value: function extend(arg0) {
      const self = this;
      let closure_0 = arg0;
      let obj = {
        shape() {
          const _def = self._def;
          const obj = {};
          const merged = Object.assign(_def.shape());
          const merged1 = Object.assign(closure_0);
          return obj;
        }
      };
      let merged = Object.assign(this._def);
      const tmp2 = ZodObject(obj);
      return tmp2;
    }
  },
  {
    key: "merge",
    value: function merge(_def) {
      const self = this;
      let closure_0 = _def;
      let obj = {
        unknownKeys: _def._def.unknownKeys,
        catchall: _def._def.catchall,
        shape() {
          _def = self._def;
          const obj = {};
          const merged = Object.assign(_def.shape());
          const _def2 = _def._def;
          const merged1 = Object.assign(_def2.shape());
          return obj;
        },
        typeName: obj6.ZodObject
      };
      const tmp = ZodObject(obj);
      return tmp;
    }
  },
  {
    key: "setKey",
    value: function setKey(arg0, arg1) {
      const obj = { [arg0]: arg1 };
      return this.augment(obj);
    }
  },
  {
    key: "catchall",
    value: function catchall(catchall) {
      const obj = { catchall };
      const merged = Object.assign(this._def);
      const tmp2 = ZodObject(obj);
      return tmp2;
    }
  },
  {
    key: "pick",
    value: function pick(arg0) {
      const self = this;
      let closure_1 = arg0;
      let closure_0 = {};
      const util = _mod15898.util;
      const objectKeysResult = util.objectKeys(arg0);
      const item = objectKeysResult.forEach((item) => {
        const tmp = closure_1[item] && self.shape[item];
        if (tmp) {
          closure_0[item] = self.shape[item];
        }
      });
      const obj = {
        shape() {
          return closure_0;
        }
      };
      const merged = Object.assign(this._def);
      const tmp3 = ZodObject(obj);
      return tmp3;
    }
  },
  {
    key: "omit",
    value: function omit(arg0) {
      const self = this;
      let closure_1 = arg0;
      let closure_0 = {};
      const util = _mod15898.util;
      const objectKeysResult = util.objectKeys(this.shape);
      const item = objectKeysResult.forEach((item) => {
        if (!closure_1[item]) {
          closure_0[item] = self.shape[item];
        }
      });
      const obj = {
        shape() {
          return closure_0;
        }
      };
      const merged = Object.assign(this._def);
      const tmp3 = ZodObject(obj);
      return tmp3;
    }
  },
  {
    key: "deepPartial",
    value: function deepPartial() {
      return deepPartialify(this);
    }
  },
  {
    key: "partial",
    value: function partial(arg0) {
      const self = this;
      let closure_1 = arg0;
      let closure_0 = {};
      const util = _mod15898.util;
      const objectKeysResult = util.objectKeys(this.shape);
      const item = objectKeysResult.forEach((item) => {
        if (closure_1) {
          if (!closure_1[item]) {
            closure_0[item] = self.shape[item];
          }
        }
        closure_0[item] = self.shape[item].optional();
      });
      const obj = {
        shape() {
          return closure_0;
        }
      };
      const merged = Object.assign(this._def);
      const tmp3 = ZodObject(obj);
      return tmp3;
    }
  },
  {
    key: "required",
    value: function required(arg0) {
      const self = this;
      let closure_1 = arg0;
      let closure_0 = {};
      const util = _mod15898.util;
      const objectKeysResult = util.objectKeys(this.shape);
      const item = objectKeysResult.forEach((item) => {
        let tmp7;
        if (closure_1) {
          if (!closure_1[item]) {
            closure_0[item] = self.shape[item];
          }
        }
        let tmp4 = tmp3;
        let tmp5 = tmp3;
        if (self.shape[item] instanceof closure_2_65) {
          do {
            let innerType = tmp4._def.innerType;
            tmp4 = innerType;
            tmp5 = innerType;
            tmp7 = innerType instanceof closure_2_65;
          } while (tmp7);
        }
        closure_0[item] = tmp5;
      });
      const obj = {
        shape() {
          return closure_0;
        }
      };
      const merged = Object.assign(this._def);
      const tmp3 = ZodObject(obj);
      return tmp3;
    }
  },
  {
    key: "keyof",
    value: function keyof() {
      const util = _mod15898.util;
      let c0;
      let c1;
      let c2;
      const obj = { values: util.objectKeys(this.shape), typeName: obj6.ZodEnum };
      const merged = Object.assign({});
      const tmp2 = new _module2Result25(obj);
      return tmp2;
    }
  }
];
const _module2Result14 = _createClass(ZodObject, items15);
_module2Result14.create = function(arg0, required_error) {
  let errorMap;
  let invalid_type_error;
  let obj3;
  let closure_0 = required_error;
  invalid_type_error = undefined;
  required_error = undefined;
  const obj = {
    shape() {
      return closure_0;
    },
    unknownKeys: "strip",
    catchall: _module2Result11.create(),
    typeName: obj6.ZodObject
  };
  const tmp = _module2Result14;
  if (required_error) {
    ({ errorMap, invalid_type_error } = required_error);
    required_error = required_error.required_error;
    const description = required_error.description;
    if (errorMap) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("Can't use \"invalid_type_error\" or \"required_error\" in conjunction with custom error map.");
      throw error;
    }
    const obj2 = { errorMap: null, description: null };
    if (errorMap) {
      obj2.errorMap = errorMap;
      obj2.description = description;
      obj3 = obj2;
    } else {
      obj2.errorMap = function errorMap(code, defaultError) {
        let obj;
        defaultError = message.message;
        if ("invalid_enum_value" === code.code) {
          if (null == defaultError) {
            defaultError = defaultError.defaultError;
          }
          obj = { message: defaultError };
          const obj2 = { message: defaultError };
        } else if (undefined === defaultError.data) {
          let defaultError3 = defaultError;
          if (null == defaultError) {
            defaultError3 = required_error;
          }
          if (null === defaultError3) {
            defaultError3 = defaultError.defaultError;
          }
          obj = { message: defaultError3 };
          const obj3 = { message: defaultError3 };
        } else if ("invalid_type" !== code.code) {
          obj = { message: defaultError.defaultError };
          const obj4 = { message: defaultError.defaultError };
        } else {
          let defaultError2 = defaultError;
          if (null == defaultError) {
            defaultError2 = invalid_type_error;
          }
          if (null === defaultError2) {
            defaultError2 = defaultError.defaultError;
          }
          obj = { message: defaultError2 };
        }
        return obj;
      };
      obj2.description = description;
      obj3 = obj2;
    }
  } else {
    obj3 = {};
  }
  const merged = Object.assign(obj3);
  const tmp2 = new tmp(obj);
  return tmp2;
};
_module2Result14.strictCreate = function(arg0, required_error) {
  let errorMap;
  let invalid_type_error;
  let obj3;
  let closure_0 = required_error;
  invalid_type_error = undefined;
  required_error = undefined;
  const obj = {
    shape() {
      return closure_0;
    },
    unknownKeys: "strict",
    catchall: _module2Result11.create(),
    typeName: obj6.ZodObject
  };
  const tmp = _module2Result14;
  if (required_error) {
    ({ errorMap, invalid_type_error } = required_error);
    required_error = required_error.required_error;
    const description = required_error.description;
    if (errorMap) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("Can't use \"invalid_type_error\" or \"required_error\" in conjunction with custom error map.");
      throw error;
    }
    const obj2 = { errorMap: null, description: null };
    if (errorMap) {
      obj2.errorMap = errorMap;
      obj2.description = description;
      obj3 = obj2;
    } else {
      obj2.errorMap = function errorMap(code, defaultError) {
        let obj;
        defaultError = message.message;
        if ("invalid_enum_value" === code.code) {
          if (null == defaultError) {
            defaultError = defaultError.defaultError;
          }
          obj = { message: defaultError };
          const obj2 = { message: defaultError };
        } else if (undefined === defaultError.data) {
          let defaultError3 = defaultError;
          if (null == defaultError) {
            defaultError3 = required_error;
          }
          if (null === defaultError3) {
            defaultError3 = defaultError.defaultError;
          }
          obj = { message: defaultError3 };
          const obj3 = { message: defaultError3 };
        } else if ("invalid_type" !== code.code) {
          obj = { message: defaultError.defaultError };
          const obj4 = { message: defaultError.defaultError };
        } else {
          let defaultError2 = defaultError;
          if (null == defaultError) {
            defaultError2 = invalid_type_error;
          }
          if (null === defaultError2) {
            defaultError2 = defaultError.defaultError;
          }
          obj = { message: defaultError2 };
        }
        return obj;
      };
      obj2.description = description;
      obj3 = obj2;
    }
  } else {
    obj3 = {};
  }
  const merged = Object.assign(obj3);
  const tmp2 = new tmp(obj);
  return tmp2;
};
_module2Result14.lazycreate = function(shape, required_error) {
  let errorMap;
  let invalid_type_error;
  let obj3;
  let closure_0 = required_error;
  invalid_type_error = undefined;
  required_error = undefined;
  const obj = { shape, unknownKeys: "strip", catchall: _module2Result11.create(), typeName: obj6.ZodObject };
  const tmp = _module2Result14;
  if (required_error) {
    ({ errorMap, invalid_type_error } = required_error);
    required_error = required_error.required_error;
    const description = required_error.description;
    if (errorMap) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("Can't use \"invalid_type_error\" or \"required_error\" in conjunction with custom error map.");
      throw error;
    }
    const obj2 = { errorMap: null, description: null };
    if (errorMap) {
      obj2.errorMap = errorMap;
      obj2.description = description;
      obj3 = obj2;
    } else {
      obj2.errorMap = function errorMap(code, defaultError) {
        let obj;
        defaultError = message.message;
        if ("invalid_enum_value" === code.code) {
          if (null == defaultError) {
            defaultError = defaultError.defaultError;
          }
          obj = { message: defaultError };
          const obj2 = { message: defaultError };
        } else if (undefined === defaultError.data) {
          let defaultError3 = defaultError;
          if (null == defaultError) {
            defaultError3 = required_error;
          }
          if (null === defaultError3) {
            defaultError3 = defaultError.defaultError;
          }
          obj = { message: defaultError3 };
          const obj3 = { message: defaultError3 };
        } else if ("invalid_type" !== code.code) {
          obj = { message: defaultError.defaultError };
          const obj4 = { message: defaultError.defaultError };
        } else {
          let defaultError2 = defaultError;
          if (null == defaultError) {
            defaultError2 = invalid_type_error;
          }
          if (null === defaultError2) {
            defaultError2 = defaultError.defaultError;
          }
          obj = { message: defaultError2 };
        }
        return obj;
      };
      obj2.description = description;
      obj3 = obj2;
    }
  } else {
    obj3 = {};
  }
  const merged = Object.assign(obj3);
  const tmp2 = new tmp(obj);
  return tmp2;
};
class ZodUnion {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, ZodUnion);
    const obj = _getPrototypeOf(ZodUnion);
    const tmp2 = _getPrototypeOf;
    const tmp3 = c2;
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return tmp3(self, constructResult);
  }
}
_inherits(ZodUnion, _module2Result);
const entry16 = {
  key: "_parse",
  value: function _parse(common) {
    let obj2;
    const ctx = this._processInputParams(common).ctx;
    const options = this._def.options;
    if (ctx.common.async) {
      const allPromises = Promise.all(options.map((() => {
        let closure_0 = _asyncToGenerator(async (arg0) => {
          let c3;
          let c4;
          let closure_2;
          let obj5;
          closure_0 = arg0;
          const obj4 = { common: obj5, parent: null };
          const merged = Object.assign(closure_0);
          obj5 = { issues: [] };
          const merged1 = Object.assign(closure_0.common);
          const value = { result: await closure_0._parseAsync(obj6), ctx: obj4 };
          obj6 = { data: null, path: null, parent: obj4 };
          ({ data: obj8.data, path: obj8.path } = closure_0);
          return value;
        });
        return function(arg0) {
          return closure_0(...arguments);
        };
      })()));
      return allPromises.then(function handleResults(arr) {
        const iter = arr[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          if ("valid" === nextResult.result.status) {
            let result = nextResult.result;
            iter.return();
            return result;
          }
        }
        const iter2 = arr[Symbol.iterator]();
        const nextResult1 = iter2.next();
        while (iter2 !== undefined) {
          if ("dirty" === nextResult1.result.status) {
            let issues = ctx.common.issues;
            let push = issues.push;
            let items = [];
            let arraySpreadResult = HermesBuiltin.arraySpread(items, nextResult1.ctx.common.issues, 0);
            let applyResult = HermesBuiltin.apply(push, items, issues);
            let result2 = nextResult1.result;
            iter2.return();
            return result2;
          }
        }
        const mapped = arr.map((ctx) => {
          const zodError = new ctx(closure_1_1[8]).ZodError(ctx.ctx.common.issues);
          return zodError;
        });
        const obj = { code: require("module_15897").ZodIssueCode.invalid_union, unionErrors: mapped };
        const addIssueToContext = DIRTY.addIssueToContext;
        addIssueToContext(ctx, obj);
        return DIRTY.INVALID;
      });
    } else {
      let tmp2;
      let items = [];
      let tmp3 = options;
      let iter = options[Symbol.iterator]();
      let tmp4 = null;
      let nextResult = iter.next();
      let tmp6 = iter;
      while (iter !== undefined) {
        let obj = { common: obj2, parent: null };
        let tmp7 = obj;
        let tmp8 = ctx;
        let merged = Object.assign(ctx);
        obj2 = { issues: [] };
        let tmp10 = obj2;
        let merged1 = Object.assign(ctx.common);
        let tmp12 = obj;
        let obj3 = { data: null, path: null, parent: obj };
        ({ data: obj4.data, path: obj4.path } = ctx);
        let _parseSyncResult = nextResult._parseSync(obj3);
        let tmp14 = _parseSyncResult;
        if ("valid" === _parseSyncResult.status) {
          iter.return();
          return _parseSyncResult;
        } else {
          let tmp16 = "dirty" !== tmp14.status || tmp2;
          if (!tmp16) {
            let obj5 = { result: tmp14, ctx: tmp12 };
            tmp2 = obj5;
          }
          if (tmp12.common.issues.length) {
            let arr = items.push(tmp12.common.issues);
          }
          continue;
        }
      }
      const tmp23 = tmp2;
      if (tmp23) {
        let issues = ctx.common.issues;
        let push = issues.push;
        const items1 = [];
        let num = 0;
        let arraySpreadResult = HermesBuiltin.arraySpread(items1, tmp2.ctx.common.issues, 0);
        let applyResult = HermesBuiltin.apply(push, items1, issues);
        return tmp2.result;
      } else {
        let mapped = items.map((item) => {
          const zodError = new ctx(dependencyMap[8]).ZodError(item);
          return zodError;
        });
        obj6 = { code: ctx(15897).ZodIssueCode.invalid_union, unionErrors: mapped };
        let addIssueToContext = ctx(15899).addIssueToContext;
        addIssueToContext(ctx, obj6);
        return ctx(15899).INVALID;
      }
    }
  }
};
const items16 = [
  entry16,
  {
    key: "options",
    get() {
      return this._def.options;
    }
  }
];
const _module2Result15 = _createClass(ZodUnion, items16);
_module2Result15.create = function(options, required_error) {
  let errorMap;
  let invalid_type_error;
  let obj3;
  let closure_0 = required_error;
  invalid_type_error = undefined;
  required_error = undefined;
  const obj = { options, typeName: obj6.ZodUnion };
  const tmp = _module2Result15;
  if (required_error) {
    ({ errorMap, invalid_type_error } = required_error);
    required_error = required_error.required_error;
    const description = required_error.description;
    if (errorMap) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("Can't use \"invalid_type_error\" or \"required_error\" in conjunction with custom error map.");
      throw error;
    }
    const obj2 = { errorMap: null, description: null };
    if (errorMap) {
      obj2.errorMap = errorMap;
      obj2.description = description;
      obj3 = obj2;
    } else {
      obj2.errorMap = function errorMap(code, defaultError) {
        let obj;
        defaultError = message.message;
        if ("invalid_enum_value" === code.code) {
          if (null == defaultError) {
            defaultError = defaultError.defaultError;
          }
          obj = { message: defaultError };
          const obj2 = { message: defaultError };
        } else if (undefined === defaultError.data) {
          let defaultError3 = defaultError;
          if (null == defaultError) {
            defaultError3 = required_error;
          }
          if (null === defaultError3) {
            defaultError3 = defaultError.defaultError;
          }
          obj = { message: defaultError3 };
          const obj3 = { message: defaultError3 };
        } else if ("invalid_type" !== code.code) {
          obj = { message: defaultError.defaultError };
          const obj4 = { message: defaultError.defaultError };
        } else {
          let defaultError2 = defaultError;
          if (null == defaultError) {
            defaultError2 = invalid_type_error;
          }
          if (null === defaultError2) {
            defaultError2 = defaultError.defaultError;
          }
          obj = { message: defaultError2 };
        }
        return obj;
      };
      obj2.description = description;
      obj3 = obj2;
    }
  } else {
    obj3 = {};
  }
  const merged = Object.assign(obj3);
  const tmp2 = new tmp(obj);
  return tmp2;
};
function getDiscriminator(innerType) {
  let options;
  if (innerType instanceof _module2Result23) {
    options = getDiscriminator(innerType.schema);
  } else if (innerType instanceof _module2Result28) {
    options = getDiscriminator(innerType.innerType());
  } else if (innerType instanceof _module2Result24) {
    const items = [innerType.value];
    options = items;
  } else if (innerType instanceof _module2Result25) {
    options = innerType.options;
  } else if (innerType instanceof _module2Result26) {
    const util = _mod15898.util;
    options = util.objectValues(innerType.enum);
  } else if (innerType instanceof _module2Result31) {
    options = getDiscriminator(innerType._def.innerType);
  } else if (innerType instanceof _module2Result7) {
    const items1 = [undefined];
    options = items1;
  } else if (innerType instanceof _module2Result8) {
    options = [null];
  } else if (innerType instanceof _module2Result29) {
    const items2 = [undefined];
    HermesBuiltin.arraySpread(items2, getDiscriminator(innerType.unwrap()), 1);
    options = items2;
  } else if (innerType instanceof _module2Result30) {
    const items3 = [null];
    HermesBuiltin.arraySpread(items3, getDiscriminator(innerType.unwrap()), 1);
    options = items3;
  } else {
    if (!(innerType instanceof _module2Result34)) {
      if (!(innerType instanceof _module2Result36)) {
        if (innerType instanceof _module2Result32) {
          options = getDiscriminator(innerType._def.innerType);
        } else {
          options = [];
        }
      }
    }
    options = getDiscriminator(innerType.unwrap());
  }
  return options;
}
class ZodDiscriminatedUnion {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, ZodDiscriminatedUnion);
    const obj = _getPrototypeOf(ZodDiscriminatedUnion);
    const tmp2 = _getPrototypeOf;
    const tmp3 = c2;
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return tmp3(self, constructResult);
  }
}
_inherits(ZodDiscriminatedUnion, _module2Result);
const entry17 = {
  key: "_parse",
  value: function _parse(common) {
    let discriminator;
    let items;
    let optionsMap;
    let optionsMap2;
    const self = this;
    const ctx = this._processInputParams(common).ctx;
    if (ctx.parsedType !== _mod15898.ZodParsedType.object) {
      const obj4 = { code: require("module_15897").ZodIssueCode.invalid_type, expected: _mod15898.ZodParsedType.object, received: ctx.parsedType };
      const addIssueToContext2 = tmp(15899).addIssueToContext;
      addIssueToContext2(ctx, obj4);
      return DIRTY.INVALID;
    } else {
      let INVALID;
      ({ discriminator, optionsMap: optionsMap2 } = self);
      const value = optionsMap2.get(ctx.data[discriminator]);
      if (value) {
        let _parseAsyncResult;
        if (ctx.common.async) {
          const obj5 = { data: null, path: null, parent: ctx };
          ({ data: obj3.data, path: obj3.path } = ctx);
          _parseAsyncResult = value._parseAsync(obj5);
        } else {
          const obj8 = { data: null, path: null, parent: ctx };
          ({ data: obj2.data, path: obj2.path } = ctx);
          _parseAsyncResult = value._parseSync(obj8);
        }
        INVALID = _parseAsyncResult;
      } else {
        const obj = { code: require("module_15897").ZodIssueCode.invalid_union_discriminator, options: Array.from(optionsMap.keys()), path: items };
        const addIssueToContext = tmp(15899).addIssueToContext;
        const _Array = Array;
        optionsMap = self.optionsMap;
        items = [discriminator];
        addIssueToContext(ctx, obj);
        INVALID = tmp(15899).INVALID;
      }
      return INVALID;
    }
  }
};
const items17 = [
  entry17,
  {
    key: "discriminator",
    get() {
      return this._def.discriminator;
    }
  },
  {
    key: "options",
    get() {
      return this._def.options;
    }
  },
  {
    key: "optionsMap",
    get() {
      return this._def.optionsMap;
    }
  }
];
const entry18 = {
  key: "create",
  value: function create(discriminator, options, required_error) {
    map = new Map();
    const iter = options[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp2 = nextResult;
      let arr = getDiscriminator(nextResult.shape[discriminator]);
      if (arr.length) {
        for (const item10039 of arr) {
          let tmp9 = item10039;
          if (map.has(item10039)) {
            let _Error2 = Error;
            let _String = String;
            let _String2 = String;
            let StringResult = String(discriminator);
            let _HermesInternal2 = HermesInternal;
            let str3 = " has duplicate value ";
            let str4 = "Discriminator property ";
            let self3 = this;
            let self4 = this;
            let error = new Error("Discriminator property " + StringResult + " has duplicate value " + String(tmp9));
            throw error;
          } else {
            let result = map.set(tmp9, tmp2);
            continue;
          }
        }
        continue;
      } else {
        let _Error = Error;
        let _HermesInternal = HermesInternal;
        let str = "` could not be extracted from all schema options";
        let str2 = "A discriminator value for key `";
        let self = this;
        let self2 = this;
        let error1 = new Error("A discriminator value for key `" + discriminator + "` could not be extracted from all schema options");
        throw error1;
      }
    }
    const obj = { typeName: obj6.ZodDiscriminatedUnion, discriminator, options, optionsMap: map };
    const merged = Object.assign(processCreateParams(required_error));
    const tmp18 = ZodDiscriminatedUnion(obj);
    return tmp18;
  }
};
const items18 = [entry18];
const _module2Result16 = _createClass(ZodDiscriminatedUnion, items17, items18);
class ZodIntersection {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, ZodIntersection);
    const obj = _getPrototypeOf(ZodIntersection);
    const tmp2 = _getPrototypeOf;
    const tmp3 = c2;
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return tmp3(self, constructResult);
  }
}
_inherits(ZodIntersection, _module2Result);
const entry19 = {
  key: "_parse",
  value: function _parse(common) {
    let ctx;
    let nextPromise;
    let require;
    const self = this;
    ({ status: require, ctx } = this._processInputParams(common));
    function handleParsed(_parseSyncResult, right) {
      if (!DIRTY.isAborted(_parseSyncResult)) {
        if (!DIRTY.isAborted(right)) {
          let INVALID;
          const tmp5 = mergeValues(_parseSyncResult.value, right.value);
          const valid = tmp5.valid;
          const tmpResult = DIRTY;
          if (valid) {
            const tmp8 = tmpResult.isDirty(_parseSyncResult) || DIRTY.isDirty(right);
            if (tmp8) {
              _require.dirty();
            }
            INVALID = { status: _require.value, value: tmp5.data };
            const obj = { status: _require.value, value: tmp5.data };
          } else {
            const addIssueToContext = tmpResult.addIssueToContext;
            const obj2 = { code: require("module_15897").ZodIssueCode.invalid_intersection_types };
            addIssueToContext(ctx, obj2);
            INVALID = tmp(15899).INVALID;
          }
          return INVALID;
        }
      }
      return DIRTY.INVALID;
    }
    this._processInputParams(common);
    if (ctx.common.async) {
      const left2 = self._def.left;
      const obj7 = { data: null, path: null, parent: ctx };
      ({ data: obj3.data, path: obj3.path } = ctx);
      const items = [left2._parseAsync(obj7), ];
      const right2 = self._def.right;
      const obj8 = { data: null, path: null, parent: ctx };
      ({ data: obj4.data, path: obj4.path } = ctx);
      items[1] = right2._parseAsync(obj8);
      const allResult = all(items);
      nextPromise = allResult.then((result) => {
        let tmp;
        let tmp2;
        [tmp, tmp2] = result;
        return handleParsed(tmp, tmp2);
      });
    } else {
      const left = self._def.left;
      let obj = { data: null, path: null, parent: ctx };
      ({ data: obj.data, path: obj.path } = ctx);
      const right = self._def.right;
      const obj9 = { data: null, path: null, parent: ctx };
      ({ data: obj2.data, path: obj2.path } = ctx);
      const _parseSyncResult = left._parseSync(obj);
      nextPromise = handleParsed(_parseSyncResult, right._parseSync(obj9));
    }
    return nextPromise;
  }
};
const items19 = [entry19];
const _module2Result17 = _createClass(ZodIntersection, items19);
_module2Result17.create = function(left, right, required_error) {
  let errorMap;
  let invalid_type_error;
  let obj2;
  const rect = { left, right, typeName: obj6.ZodIntersection };
  let closure_0 = required_error;
  invalid_type_error = undefined;
  required_error = undefined;
  const tmp = _module2Result17;
  if (required_error) {
    ({ errorMap, invalid_type_error } = required_error);
    required_error = required_error.required_error;
    const description = required_error.description;
    if (errorMap) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("Can't use \"invalid_type_error\" or \"required_error\" in conjunction with custom error map.");
      throw error;
    }
    const obj = { errorMap: null, description: null };
    if (errorMap) {
      obj.errorMap = errorMap;
      obj.description = description;
      obj2 = obj;
    } else {
      obj.errorMap = function errorMap(code, defaultError) {
        let obj;
        defaultError = message.message;
        if ("invalid_enum_value" === code.code) {
          if (null == defaultError) {
            defaultError = defaultError.defaultError;
          }
          obj = { message: defaultError };
          const obj2 = { message: defaultError };
        } else if (undefined === defaultError.data) {
          let defaultError3 = defaultError;
          if (null == defaultError) {
            defaultError3 = required_error;
          }
          if (null === defaultError3) {
            defaultError3 = defaultError.defaultError;
          }
          obj = { message: defaultError3 };
          const obj3 = { message: defaultError3 };
        } else if ("invalid_type" !== code.code) {
          obj = { message: defaultError.defaultError };
          const obj4 = { message: defaultError.defaultError };
        } else {
          let defaultError2 = defaultError;
          if (null == defaultError) {
            defaultError2 = invalid_type_error;
          }
          if (null === defaultError2) {
            defaultError2 = defaultError.defaultError;
          }
          obj = { message: defaultError2 };
        }
        return obj;
      };
      obj.description = description;
      obj2 = obj;
    }
  } else {
    obj2 = {};
  }
  const merged = Object.assign(obj2);
  const tmp2 = new tmp(rect);
  return tmp2;
};
class ZodTuple {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, ZodTuple);
    const obj = _getPrototypeOf(ZodTuple);
    const tmp2 = _getPrototypeOf;
    const tmp3 = c2;
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return tmp3(self, constructResult);
  }
}
_inherits(ZodTuple, _module2Result);
const entry20 = {
  key: "_parse",
  value: function _parse(common) {
    let self = this;
    const _processInputParamsResult = this._processInputParams(common);
    const status = _processInputParamsResult.status;
    const ctx = _processInputParamsResult.ctx;
    if (ctx.parsedType !== ctx(status[9]).ZodParsedType.array) {
      const obj2 = { code: ctx(status[8]).ZodIssueCode.invalid_type, expected: ctx(status[9]).ZodParsedType.array, received: ctx.parsedType };
      const addIssueToContext3 = tmp3(tmp4[7]).addIssueToContext;
      addIssueToContext3(ctx, obj2);
      return ctx(status[7]).INVALID;
    } else if (ctx.data.length < self._def.items.length) {
      const obj3 = { code: ctx(status[8]).ZodIssueCode.too_small, minimum: self._def.items.length, inclusive: true, exact: false, type: "array" };
      const addIssueToContext2 = tmp3(tmp4[7]).addIssueToContext;
      addIssueToContext2(ctx, obj3);
      return ctx(status[7]).INVALID;
    } else {
      let nextPromise;
      const tmp5 = !self._def.rest && ctx.data.length > self._def.items.length;
      if (tmp5) {
        const obj = { code: ctx(status[8]).ZodIssueCode.too_big, maximum: self._def.items.length, inclusive: true, exact: false, type: "array" };
        const addIssueToContext = tmp3(tmp4[7]).addIssueToContext;
        addIssueToContext(ctx, obj);
        status.dirty();
      }
      const items = [];
      let tmp8 = items;
      HermesBuiltin.arraySpread(items, ctx.data, 0);
      const mapped = items.map(function(item, index) {
        let _parseResult = null;
        if (self._def.items[index] || self._def.rest) {
          self = this;
          const self2 = this;
          const _parse = tmp._parse;
          const tmp8 = new closure_12(ctx, item, ctx.path, index);
          _parseResult = _parse(tmp8);
        }
        return _parseResult;
      });
      const found = mapped.filter((item) => item);
      if (ctx.common.async) {
        const allPromises = Promise.all(found);
        nextPromise = allPromises.then((result) => {
          const ParseStatus = DIRTY.ParseStatus;
          return ParseStatus.mergeArray(status, result);
        });
      } else {
        let ParseStatus = tmp3(tmp4[7]).ParseStatus;
        nextPromise = ParseStatus.mergeArray(status, found);
      }
      return nextPromise;
    }
  }
};
const items20 = [
  entry20,
  {
    key: "items",
    get() {
      return this._def.items;
    }
  },
  {
    key: "rest",
    value: function rest(rest) {
      const obj = { rest };
      const merged = Object.assign(this._def);
      const tmp2 = ZodTuple(obj);
      return tmp2;
    }
  }
];
const _module2Result18 = _createClass(ZodTuple, items20);
_module2Result18.create = function(items, required_error) {
  let errorMap;
  let invalid_type_error;
  if (Array.isArray(items)) {
    let obj3;
    let closure_0 = required_error;
    invalid_type_error = undefined;
    required_error = undefined;
    const obj = { items, typeName: obj6.ZodTuple, rest: null };
    const tmp4 = _module2Result18;
    if (required_error) {
      ({ errorMap, invalid_type_error } = required_error);
      required_error = required_error.required_error;
      const description = required_error.description;
      if (errorMap) {
        const _Error2 = Error;
        const self5 = this;
        const self6 = this;
        const error = new Error("Can't use \"invalid_type_error\" or \"required_error\" in conjunction with custom error map.");
        throw error;
      }
      const obj2 = { errorMap: null, description: null };
      if (errorMap) {
        obj2.errorMap = errorMap;
        obj2.description = description;
        obj3 = obj2;
      } else {
        obj2.errorMap = function errorMap(code, defaultError) {
          let obj;
          defaultError = message.message;
          if ("invalid_enum_value" === code.code) {
            if (null == defaultError) {
              defaultError = defaultError.defaultError;
            }
            obj = { message: defaultError };
            const obj2 = { message: defaultError };
          } else if (undefined === defaultError.data) {
            let defaultError3 = defaultError;
            if (null == defaultError) {
              defaultError3 = required_error;
            }
            if (null === defaultError3) {
              defaultError3 = defaultError.defaultError;
            }
            obj = { message: defaultError3 };
            const obj3 = { message: defaultError3 };
          } else if ("invalid_type" !== code.code) {
            obj = { message: defaultError.defaultError };
            const obj4 = { message: defaultError.defaultError };
          } else {
            let defaultError2 = defaultError;
            if (null == defaultError) {
              defaultError2 = invalid_type_error;
            }
            if (null === defaultError2) {
              defaultError2 = defaultError.defaultError;
            }
            obj = { message: defaultError2 };
          }
          return obj;
        };
        obj2.description = description;
        obj3 = obj2;
      }
    } else {
      obj3 = {};
    }
    const merged = Object.assign(obj3);
    const self3 = this;
    const self4 = this;
    const tmp42 = new tmp4(obj);
    return tmp42;
  } else {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error1 = new Error("You must pass an array of schemas to z.tuple([ ... ])");
    throw error1;
  }
};
class ZodRecord {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, ZodRecord);
    const obj = _getPrototypeOf(ZodRecord);
    const tmp2 = _getPrototypeOf;
    const tmp3 = c2;
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return tmp3(self, constructResult);
  }
}
_inherits(ZodRecord, _module2Result);
let obj3 = {
  key: "keySchema",
  get() {
    return this._def.keyType;
  }
};
const items21 = [
  obj3,
  {
    key: "valueSchema",
    get() {
      return this._def.valueType;
    }
  },
  {
    key: "_parse",
    value: function _parse(common) {
      let ctx;
      let status;
      const self = this;
      ({ status, ctx } = this._processInputParams(common));
      this._processInputParams(common);
      if (ctx.parsedType !== _mod15898.ZodParsedType.object) {
        const obj = { code: require("module_15897").ZodIssueCode.invalid_type, expected: _mod15898.ZodParsedType.object, received: ctx.parsedType };
        const addIssueToContext = tmp2(15899).addIssueToContext;
        addIssueToContext(ctx, obj);
        return DIRTY.INVALID;
      } else {
        let mergeObjectAsyncResult;
        const items = [];
        const keyType = self._def.keyType;
        const valueType = self._def.valueType;
        for (const key10014 in ctx.data) {
          let entry = { key: _parse(tmp13), value: _parse2(tmp17), alwaysSet: key10014 in ctx.data };
          let self2 = this;
          let self3 = this;
          let push = items.push;
          let _parse = keyType._parse;
          let tmp13 = new closure_12(ctx, key10014, ctx.path, key10014);
          let self4 = this;
          let self5 = this;
          let _parse2 = valueType._parse;
          let tmp17 = new closure_12(ctx, ctx.data[key10014], ctx.path, key10014);
          let arr = push(entry);
          continue;
        }
        const async = ctx.common.async;
        const ParseStatus = DIRTY.ParseStatus;
        if (async) {
          mergeObjectAsyncResult = ParseStatus.mergeObjectAsync(status, items);
        } else {
          mergeObjectAsyncResult = ParseStatus.mergeObjectSync(status, items);
        }
        return mergeObjectAsyncResult;
      }
    }
  },
  {
    key: "element",
    get() {
      return this._def.valueType;
    }
  }
];
const entry21 = {
  key: "create",
  value: function create(keyType, valueType, required_error) {
    let errorMap;
    let errorMap2;
    let invalid_type_error;
    let invalid_type_error2;
    let tmp7;
    const obj = { keyType: null, valueType: null, typeName: null };
    const tmp = ZodRecord;
    if (valueType instanceof _module2Result) {
      let obj3;
      obj.keyType = keyType;
      obj.valueType = valueType;
      obj.typeName = obj6.ZodRecord;
      let closure_0 = required_error;
      invalid_type_error2 = undefined;
      let required_error2;
      if (required_error) {
        ({ errorMap: errorMap2, invalid_type_error: invalid_type_error2 } = required_error);
        required_error2 = required_error.required_error;
        const description2 = required_error.description;
        if (errorMap2) {
          const _Error2 = Error;
          const self3 = this;
          const self4 = this;
          const error = new Error("Can't use \"invalid_type_error\" or \"required_error\" in conjunction with custom error map.");
          throw error;
        }
        const obj2 = { errorMap: null, description: null };
        if (errorMap2) {
          obj2.errorMap = errorMap2;
          obj2.description = description2;
          obj3 = obj2;
        } else {
          obj2.errorMap = function errorMap(code, defaultError) {
            let obj;
            defaultError = message.message;
            if ("invalid_enum_value" === code.code) {
              if (null == defaultError) {
                defaultError = defaultError.defaultError;
              }
              obj = { message: defaultError };
              const obj2 = { message: defaultError };
            } else if (undefined === defaultError.data) {
              let defaultError3 = defaultError;
              if (null == defaultError) {
                defaultError3 = required_error;
              }
              if (null === defaultError3) {
                defaultError3 = defaultError.defaultError;
              }
              obj = { message: defaultError3 };
              const obj3 = { message: defaultError3 };
            } else if ("invalid_type" !== code.code) {
              obj = { message: defaultError.defaultError };
              const obj4 = { message: defaultError.defaultError };
            } else {
              let defaultError2 = defaultError;
              if (null == defaultError) {
                defaultError2 = invalid_type_error;
              }
              if (null === defaultError2) {
                defaultError2 = defaultError.defaultError;
              }
              obj = { message: defaultError2 };
            }
            return obj;
          };
          obj2.description = description2;
          obj3 = obj2;
        }
      } else {
        obj3 = {};
      }
      const merged = Object.assign(obj3);
      tmp7 = obj;
    } else {
      let obj5;
      obj.keyType = _module2Result1.create();
      obj.valueType = keyType;
      obj.typeName = obj6.ZodRecord;
      closure_0 = valueType;
      invalid_type_error = undefined;
      required_error = undefined;
      if (valueType) {
        ({ errorMap, invalid_type_error } = valueType);
        required_error = valueType.required_error;
        const description = valueType.description;
        if (errorMap) {
          const _Error = Error;
          const self = this;
          const self2 = this;
          const error1 = new Error("Can't use \"invalid_type_error\" or \"required_error\" in conjunction with custom error map.");
          throw error1;
        }
        const obj4 = { errorMap: null, description: null };
        if (errorMap) {
          obj4.errorMap = errorMap;
          obj4.description = description;
          obj5 = obj4;
        } else {
          obj4.errorMap = function errorMap(code, defaultError) {
            let obj;
            defaultError = message.message;
            if ("invalid_enum_value" === code.code) {
              if (null == defaultError) {
                defaultError = defaultError.defaultError;
              }
              obj = { message: defaultError };
              const obj2 = { message: defaultError };
            } else if (undefined === defaultError.data) {
              let defaultError3 = defaultError;
              if (null == defaultError) {
                defaultError3 = required_error;
              }
              if (null === defaultError3) {
                defaultError3 = defaultError.defaultError;
              }
              obj = { message: defaultError3 };
              const obj3 = { message: defaultError3 };
            } else if ("invalid_type" !== code.code) {
              obj = { message: defaultError.defaultError };
              const obj4 = { message: defaultError.defaultError };
            } else {
              let defaultError2 = defaultError;
              if (null == defaultError) {
                defaultError2 = invalid_type_error;
              }
              if (null === defaultError2) {
                defaultError2 = defaultError.defaultError;
              }
              obj = { message: defaultError2 };
            }
            return obj;
          };
          obj4.description = description;
          obj5 = obj4;
        }
      } else {
        obj5 = {};
      }
      const merged1 = Object.assign(obj5);
      tmp7 = obj;
    }
    const tmpResult = tmp(tmp7);
    return tmpResult;
  }
};
const items22 = [entry21];
const _module2Result19 = _createClass(ZodRecord, items21, items22);
class ZodMap {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, ZodMap);
    const obj = _getPrototypeOf(ZodMap);
    const tmp2 = _getPrototypeOf;
    const tmp3 = c2;
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return tmp3(self, constructResult);
  }
}
_inherits(ZodMap, _module2Result);
let obj4 = {
  key: "keySchema",
  get() {
    return this._def.keyType;
  }
};
const items23 = [
  obj4,
  {
    key: "valueSchema",
    get() {
      return this._def.valueType;
    }
  },
  {
    key: "_parse",
    value: function _parse(common) {
      let iter;
      const self = this;
      const _processInputParamsResult = this._processInputParams(common);
      let ctx = _processInputParamsResult.ctx;
      let tmp3 = iter;
      let tmp4 = ctx;
      if (ctx.parsedType !== _processInputParamsResult.status(ctx[9]).ZodParsedType.map) {
        let obj2 = { code: tmp3(tmp4[8]).ZodIssueCode.invalid_type, expected: tmp3(tmp4[9]).ZodParsedType.map, received: ctx.parsedType };
        const addIssueToContext = tmp3(tmp4[7]).addIssueToContext;
        addIssueToContext(ctx, obj2);
        return tmp3(tmp4[7]).INVALID;
      } else {
        let keyType = self._def.keyType;
        const valueType = self._def.valueType;
        const data = ctx.data;
        let items = [];
        let num = 0;
        let tmp23 = items;
        HermesBuiltin.arraySpread(items, data.entries(), 0);
        const mapped = items.map((item, index) => {
          let _parse;
          let _parse2;
          let tmp;
          let tmp2;
          let tmp3;
          let tmp4;
          [tmp, tmp2] = item;
          const entry = { key: _parse(tmp3), value: _parse2(tmp4) };
          const items = [index, "key"];
          _parse = keyType._parse;
          const items1 = [index, "value"];
          _parse2 = valueType._parse;
          tmp3 = new closure_12(ctx, tmp, ctx.path, items);
          tmp4 = new closure_12(ctx, tmp2, ctx.path, items1);
          return entry;
        });
        let tmp26 = globalThis;
        const _Map = Map;
        const self2 = this;
        const self3 = this;
        const async = ctx.common.async;
        map = new Map();
        let tmp27 = map;
        if (async) {
          const resolved = Promise.resolve();
          let tmp21 = map;
          return resolved.then(map(function*(arg0, value) {
            let closure_0;
            let closure_1;
            let closure_2;
            if (c7 === 2) {
              c7 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp3 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                const obj2 = { value, done: true };
                return obj2;
              } else {
                return { value: "HermesInternal", done: "HermesInternal" };
              }
            } else {
              while (true) {
                c7 = 2;
                let tmp4 = c6;
                if (0 === c6) {
                  if (arg0 === 1) {
                    c7 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c7 = 3;
                    let obj3 = { value, done: true };
                    return obj3;
                  } else {
                    let closure_3 = tmp;
                    keyType = undefined;
                    ctx = mapped;
                    iter = mapped[Symbol.iterator]();
                  }
                } else if (1 === tmp4) {
                  let c5 = 0;
                  iter.return();
                  throw closure_1_4;
                } else if (2 === tmp4) {
                  if (arg0 === 1) {
                    c7 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c5 = 0;
                    iter.return();
                    c7 = 3;
                    let obj4 = { value, done: true };
                    return obj4;
                  } else {
                    ctx = value;
                    c6 = 3;
                    c7 = 1;
                    let obj5 = { value: iter.value, done: false };
                    return obj5;
                  }
                } else if (arg0 === 1) {
                  c7 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c5 = 0;
                  iter.return();
                  c7 = 3;
                  obj6 = { value, done: true };
                  return obj6;
                } else {
                  keyType = value;
                  if ("aborted" !== ctx.status) {
                    if ("aborted" !== keyType.status) {
                      let tmp7 = "dirty" !== ctx.status;
                      if (tmp7) {
                        tmp7 = "dirty" !== keyType.status;
                      }
                      if (!tmp7) {
                        let dirtyResult = closure_131_0.dirty();
                      }
                      let result = closure_131_5.set(ctx.value, keyType.value);
                      c5 = 0;
                    }
                  }
                  c5 = 0;
                  let INVALID = iter(ctx[7]).INVALID;
                  iter.return();
                  c7 = 3;
                  let obj = { value: INVALID, done: true };
                  return obj;
                }
                if (iter === undefined) {
                  let obj7 = { status: closure_131_0.value, value: closure_131_5 };
                  c7 = 3;
                  let obj8 = { value: obj7, done: true };
                  return obj8;
                } else {
                  c5 = 1;
                  iter = tmp32;
                  c6 = 2;
                  c7 = 1;
                  let obj9 = { value: iter.key, done: false };
                  return obj9;
                }
              }
            }
          }));
        } else {
          let tmp5 = mapped;
          const iter2 = mapped[Symbol.iterator]();
          let tmp6 = mapped;
          const iter3 = iter2.next();
          let tmp7 = iter2;
          while (iter2 !== undefined) {
            let key = iter3.key;
            let iter4 = key;
            let iter5 = iter3.value;
            if ("aborted" !== key.status) {
              let tmp8 = iter5;
              if ("aborted" !== iter5.status) {
                let tmp9 = key;
                let tmp10 = "dirty" !== iter4.status;
                if (tmp10) {
                  let tmp11 = iter5;
                  tmp10 = "dirty" !== iter5.status;
                }
                if (!tmp10) {
                  let dirtyResult = iter.dirty();
                }
                let tmp13 = key;
                let tmp14 = iter5;
                let result = map.set(iter4.value, iter5.value);
                continue;
              }
            }
            let tmp16 = iter;
            let tmp17 = iter;
            let tmp19 = ctx;
            let tmp20 = iter2;
            let INVALID = iter(ctx[7]).INVALID;
            iter2.return();
            return INVALID;
          }
          let obj = { status: iter.value, value: map };
          return obj;
        }
      }
    }
  }
];
const _module2Result20 = _createClass(ZodMap, items23);
_module2Result20.create = function(keyType, valueType, required_error) {
  let errorMap;
  let invalid_type_error;
  let obj3;
  let closure_0 = required_error;
  invalid_type_error = undefined;
  required_error = undefined;
  const obj = { valueType, keyType, typeName: obj6.ZodMap };
  const tmp = _module2Result20;
  if (required_error) {
    ({ errorMap, invalid_type_error } = required_error);
    required_error = required_error.required_error;
    const description = required_error.description;
    if (errorMap) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("Can't use \"invalid_type_error\" or \"required_error\" in conjunction with custom error map.");
      throw error;
    }
    const obj2 = { errorMap: null, description: null };
    if (errorMap) {
      obj2.errorMap = errorMap;
      obj2.description = description;
      obj3 = obj2;
    } else {
      obj2.errorMap = function errorMap(code, defaultError) {
        let obj;
        defaultError = message.message;
        if ("invalid_enum_value" === code.code) {
          if (null == defaultError) {
            defaultError = defaultError.defaultError;
          }
          obj = { message: defaultError };
          const obj2 = { message: defaultError };
        } else if (undefined === defaultError.data) {
          let defaultError3 = defaultError;
          if (null == defaultError) {
            defaultError3 = required_error;
          }
          if (null === defaultError3) {
            defaultError3 = defaultError.defaultError;
          }
          obj = { message: defaultError3 };
          const obj3 = { message: defaultError3 };
        } else if ("invalid_type" !== code.code) {
          obj = { message: defaultError.defaultError };
          const obj4 = { message: defaultError.defaultError };
        } else {
          let defaultError2 = defaultError;
          if (null == defaultError) {
            defaultError2 = invalid_type_error;
          }
          if (null === defaultError2) {
            defaultError2 = defaultError.defaultError;
          }
          obj = { message: defaultError2 };
        }
        return obj;
      };
      obj2.description = description;
      obj3 = obj2;
    }
  } else {
    obj3 = {};
  }
  const merged = Object.assign(obj3);
  const tmp2 = new tmp(obj);
  return tmp2;
};
class ZodSet {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, ZodSet);
    const obj = _getPrototypeOf(ZodSet);
    const tmp2 = _getPrototypeOf;
    const tmp3 = c2;
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return tmp3(self, constructResult);
  }
}
_inherits(ZodSet, _module2Result);
const entry22 = {
  key: "_parse",
  value: function _parse(common) {
    const self = this;
    function finalizeSet(mapped) {
      set = new Set();
      const iter = mapped[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let iter2 = nextResult;
        if ("aborted" === nextResult.status) {
          let INVALID = DIRTY.INVALID;
          iter.return();
          return INVALID;
        } else {
          if ("dirty" === iter2.status) {
            let dirtyResult = status.dirty();
          }
          let addResult = set.add(iter2.value);
          continue;
        }
      }
      return { status: status.value, value: set };
    }
    const _processInputParamsResult = this._processInputParams(common);
    const status = _processInputParamsResult.status;
    const ctx = _processInputParamsResult.ctx;
    let tmp3 = status;
    if (ctx.parsedType !== status(ctx[9]).ZodParsedType.set) {
      const obj2 = { code: tmp3(ctx[8]).ZodIssueCode.invalid_type, expected: tmp3(ctx[9]).ZodParsedType.set, received: ctx.parsedType };
      const addIssueToContext3 = tmp3(tmp4[7]).addIssueToContext;
      addIssueToContext3(ctx, obj2);
      return tmp3(ctx[7]).INVALID;
    } else {
      let nextPromise;
      const _def = self._def;
      let tmp5 = null !== _def.minSize && ctx.data.size < _def.minSize.value;
      if (tmp5) {
        const obj = { code: tmp3(ctx[8]).ZodIssueCode.too_small, minimum: _def.minSize.value, type: "set", inclusive: true, exact: false, message: _def.minSize.message };
        const addIssueToContext = tmp3(tmp4[7]).addIssueToContext;
        addIssueToContext(ctx, obj);
        let dirtyResult = status.dirty();
      }
      let tmp8 = null !== _def.maxSize && ctx.data.size > _def.maxSize.value;
      if (tmp8) {
        const obj3 = { code: tmp3(ctx[8]).ZodIssueCode.too_big, maximum: _def.maxSize.value, type: "set", inclusive: true, exact: false, message: _def.maxSize.message };
        const addIssueToContext2 = tmp3(tmp4[7]).addIssueToContext;
        addIssueToContext2(ctx, obj3);
        status.dirty();
      }
      const valueType = self._def.valueType;
      const data = ctx.data;
      const items = [];
      HermesBuiltin.arraySpread(items, data.values(), 0);
      const mapped = items.map((item, index) => {
        const _parse = valueType._parse;
        const tmp = new closure_12(ctx, item, ctx.path, index);
        return _parse(tmp);
      });
      if (ctx.common.async) {
        const allPromises = Promise.all(mapped);
        nextPromise = allPromises.then((result) => finalizeSet(result));
      } else {
        nextPromise = finalizeSet(mapped);
      }
      return nextPromise;
    }
  }
};
const items24 = [
  entry22,
  {
    key: "min",
    value: function min(value, arg1) {
      let obj2;
      let str;
      const obj = { minSize: obj2 };
      const merged = Object.assign(this._def);
      obj2 = { value, message: str.toString(arg1) };
      str = errorUtil2.errorUtil;
      const tmp2 = ZodSet(obj);
      return tmp2;
    }
  },
  {
    key: "max",
    value: function max(value, arg1) {
      let obj2;
      let str;
      const obj = { maxSize: obj2 };
      const merged = Object.assign(this._def);
      obj2 = { value, message: str.toString(arg1) };
      str = errorUtil2.errorUtil;
      const tmp2 = ZodSet(obj);
      return tmp2;
    }
  },
  {
    key: "size",
    value: function size(arg0, arg1) {
      const minResult = this.min(arg0, arg1);
      return minResult.max(arg0, arg1);
    }
  },
  {
    key: "nonempty",
    value: function nonempty(arg0) {
      return this.min(1, arg0);
    }
  }
];
const _module2Result21 = _createClass(ZodSet, items24);
_module2Result21.create = function(valueType, required_error) {
  let errorMap;
  let invalid_type_error;
  let obj3;
  let closure_0 = required_error;
  invalid_type_error = undefined;
  required_error = undefined;
  const obj = { valueType, minSize: null, maxSize: null, typeName: obj6.ZodSet };
  const tmp = _module2Result21;
  if (required_error) {
    ({ errorMap, invalid_type_error } = required_error);
    required_error = required_error.required_error;
    const description = required_error.description;
    if (errorMap) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("Can't use \"invalid_type_error\" or \"required_error\" in conjunction with custom error map.");
      throw error;
    }
    const obj2 = { errorMap: null, description: null };
    if (errorMap) {
      obj2.errorMap = errorMap;
      obj2.description = description;
      obj3 = obj2;
    } else {
      obj2.errorMap = function errorMap(code, defaultError) {
        let obj;
        defaultError = message.message;
        if ("invalid_enum_value" === code.code) {
          if (null == defaultError) {
            defaultError = defaultError.defaultError;
          }
          obj = { message: defaultError };
          const obj2 = { message: defaultError };
        } else if (undefined === defaultError.data) {
          let defaultError3 = defaultError;
          if (null == defaultError) {
            defaultError3 = required_error;
          }
          if (null === defaultError3) {
            defaultError3 = defaultError.defaultError;
          }
          obj = { message: defaultError3 };
          const obj3 = { message: defaultError3 };
        } else if ("invalid_type" !== code.code) {
          obj = { message: defaultError.defaultError };
          const obj4 = { message: defaultError.defaultError };
        } else {
          let defaultError2 = defaultError;
          if (null == defaultError) {
            defaultError2 = invalid_type_error;
          }
          if (null === defaultError2) {
            defaultError2 = defaultError.defaultError;
          }
          obj = { message: defaultError2 };
        }
        return obj;
      };
      obj2.description = description;
      obj3 = obj2;
    }
  } else {
    obj3 = {};
  }
  const merged = Object.assign(obj3);
  const tmp2 = new tmp(obj);
  return tmp2;
};
class ZodFunction {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, ZodFunction);
    const obj = _getPrototypeOf(ZodFunction);
    const tmp2 = _getPrototypeOf;
    const tmp3 = c2;
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    const tmp3Result = tmp3(self, constructResult);
    tmp3Result.validate = tmp3Result.implement;
    return tmp3Result;
  }
}
_inherits(ZodFunction, _module2Result);
const entry23 = {
  key: "_parse",
  value: function _parse(common) {
    let obj2;
    const f140334 = (item) => item;
    const f140335 = (item) => item;
    let self = this;
    const ctx = this._processInputParams(common).ctx;
    let tmp = ctx;
    let tmp2 = obj2;
    if (ctx.parsedType !== ctx(obj2[9]).ZodParsedType.function) {
      let obj = { code: tmp(tmp2[8]).ZodIssueCode.invalid_type, expected: tmp(tmp2[9]).ZodParsedType.function, received: ctx.parsedType };
      const addIssueToContext = tmp(tmp2[7]).addIssueToContext;
      addIssueToContext(ctx, obj);
      return tmp(tmp2[7]).INVALID;
    } else {
      obj2 = { errorMap: ctx.common.contextualErrorMap };
      let data = ctx.data;
      if (self._def.returns instanceof _module2Result27) {
        const tmp3 = _asyncToGenerator;
        return tmp(tmp2[7]).OK(_asyncToGenerator(async function() {
          let closure_3;
          self = this;
          let closure_1 = [...arguments];
          let c5 = 0;
          let c6 = 0;
          const iter = (async function(arg0, value) {
            let parseAsyncResult;
            let parseAsyncResult1;
            if (c6 === 2) {
              c6 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp3 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                obj2 = { value, done: true };
                return obj2;
              } else {
                return { value: "HermesInternal", done: "HermesInternal" };
              }
            } else {
              try {
                let data2;
                c6 = 2;
                if (0 === c5) {
                  if (arg0 === 1) {
                    c6 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c6 = 3;
                    return { value, done: true };
                  } else {
                    closure_4 = self;
                    data = closure_1;
                    let zodError;
                    closure_2 = undefined;
                    data2 = undefined;
                    c5 = 1;
                    c6 = 1;
                    return { value: "flexDirection", done: true };
                  }
                } else if (1 === c5) {
                  if (arg0 === 1) {
                    c6 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c6 = 3;
                    return { value, done: true };
                  } else {
                    self = this;
                    const self2 = this;
                    zodError = new self(closure_1[8]).ZodError([]);
                    const args = closure_131_3._def.args;
                    c5 = 2;
                    c6 = 1;
                    const obj5 = {
                      value: parseAsyncResult.catch((error) => {
                                let items;
                                const addIssue = closure_1_1.addIssue;
                                const obj = { data, path: self.path, errorMaps: items.filter(f140334), issueData: { code: data(closure_1_1[8]).ZodIssueCode.invalid_arguments, argumentsError: error } };
                                items = [self.common.contextualErrorMap, self.schemaErrorMap, , ];
                                const makeIssue = data(closure_1_1[7]).makeIssue;
                                items[2] = data(closure_1_1[11]).getErrorMap();
                                items[3] = data(closure_1_1[11]).defaultErrorMap;
                                ({ code: data(closure_1_1[8]).ZodIssueCode.invalid_arguments, argumentsError: error });
                                addIssue(makeIssue(obj));
                                throw closure_1_1;
                              }),
                      done: false
                    };
                    parseAsyncResult = args.parseAsync(data, closure_131_1);
                    return obj5;
                  }
                } else if (2 === c5) {
                  if (arg0 === 1) {
                    c6 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c6 = 3;
                    return { value, done: true };
                  } else {
                    closure_2 = value;
                    const _Reflect = Reflect;
                    c5 = 3;
                    c6 = 1;
                    const obj7 = { value: Reflect.apply(closure_131_2, closure_4, closure_2), done: false };
                    return obj7;
                  }
                } else if (3 === c5) {
                  if (arg0 === 1) {
                    c6 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c6 = 3;
                    return { value, done: true };
                  } else {
                    data2 = value;
                    const type = closure_131_3._def.returns._def.type;
                    c5 = 4;
                    c6 = 1;
                    const obj9 = {
                      value: parseAsyncResult1.catch((error) => {
                                let items;
                                const addIssue = closure_1_1.addIssue;
                                const obj = { data: data2, path: self.path, errorMaps: items.filter(f140335), issueData: { code: data(closure_1_1[8]).ZodIssueCode.invalid_return_type, returnTypeError: error } };
                                items = [self.common.contextualErrorMap, self.schemaErrorMap, , ];
                                const makeIssue = data(closure_1_1[7]).makeIssue;
                                items[2] = data(closure_1_1[11]).getErrorMap();
                                items[3] = data(closure_1_1[11]).defaultErrorMap;
                                ({ code: data(closure_1_1[8]).ZodIssueCode.invalid_return_type, returnTypeError: error });
                                addIssue(makeIssue(obj));
                                throw closure_1_1;
                              }),
                      done: false
                    };
                    parseAsyncResult1 = type.parseAsync(data2, closure_131_1);
                    return obj9;
                  }
                } else if (arg0 === 1) {
                  c6 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c6 = 3;
                  return { value, done: true };
                } else {
                  c6 = 3;
                  let obj = { value, done: true };
                  return obj;
                }
              } catch (tmp18) {
                c6 = 3;
                throw tmp18;
              }
            }
          })();
          iter.next();
          return iter;
        }));
      } else {
        return tmp(tmp2[7]).OK(function() {
          let items1;
          let items3;
          let obj3;
          let obj4;
          const items = [...arguments];
          const args = self._def.args;
          const safeParseResult = args.safeParse(items, obj2);
          const tmp = self;
          const tmp2 = obj2;
          if (safeParseResult.success) {
            const self3 = this;
            const _Reflect = Reflect;
            const applyResult = Reflect.apply(data, this, safeParseResult.data);
            const returns = tmp._def.returns;
            const safeParseResult1 = returns.safeParse(applyResult, tmp2);
            if (safeParseResult1.success) {
              return safeParseResult1.data;
            } else {
              const ZodError2 = require("module_15897").ZodError;
              const error2 = safeParseResult1.error;
              obj2 = { data: applyResult, path: ctx.path, errorMaps: items1.filter(f140335), issueData: obj3 };
              items1 = [ctx.common.contextualErrorMap, ctx.schemaErrorMap, , ];
              const makeIssue2 = DIRTY.makeIssue;
              items1[2] = defaultErrorMap.getErrorMap();
              items1[3] = defaultErrorMap.defaultErrorMap;
              obj3 = { code: require("module_15897").ZodIssueCode.invalid_return_type, returnTypeError: error2 };
              const items2 = [makeIssue2(obj2)];
              const self4 = this;
              const self5 = this;
              const zodError2 = new ZodError2(items2);
              throw zodError2;
            }
          } else {
            const ZodError = require("module_15897").ZodError;
            const error = safeParseResult.error;
            const obj = { data: items, path: ctx.path, errorMaps: items3.filter(f140334), issueData: obj4 };
            items3 = [ctx.common.contextualErrorMap, ctx.schemaErrorMap, , ];
            const makeIssue = DIRTY.makeIssue;
            items3[2] = defaultErrorMap.getErrorMap();
            items3[3] = defaultErrorMap.defaultErrorMap;
            obj4 = { code: require("module_15897").ZodIssueCode.invalid_arguments, argumentsError: error };
            const items4 = [makeIssue(obj)];
            self = this;
            const self2 = this;
            const zodError = new ZodError(items4);
            throw zodError;
          }
        });
      }
    }
  }
};
const items25 = [
  entry23,
  {
    key: "parameters",
    value: function parameters() {
      return this._def.args;
    }
  },
  {
    key: "returnType",
    value: function returnType() {
      return this._def.returns;
    }
  },
  {
    key: "args",
    value: function args() {
      let obj2;
      const items = [...arguments];
      const obj = { args: obj2.rest(_module2Result10.create()) };
      const merged = Object.assign(this._def);
      obj2 = _module2Result18.create(items);
      const tmp2 = ZodFunction(obj);
      return tmp2;
    }
  },
  {
    key: "returns",
    value: function returns(returns) {
      const obj = { returns };
      const merged = Object.assign(this._def);
      const tmp2 = ZodFunction(obj);
      return tmp2;
    }
  },
  {
    key: "implement",
    value: function implement(value) {
      return this.parse(value);
    }
  },
  {
    key: "strictImplement",
    value: function strictImplement(arg0) {
      return this.parse(arg0);
    }
  }
];
const entry24 = {
  key: "create",
  value: function create(arg0, arg1, required_error) {
    let errorMap;
    let invalid_type_error;
    let obj8;
    let restResult = arg0;
    const tmp2 = ZodFunction;
    if (!arg0) {
      let obj = _module2Result18.create([]);
      restResult = obj.rest(_module2Result10.create());
    }
    let obj3 = arg1;
    let obj2 = { args: restResult, returns: obj3, typeName: obj6.ZodFunction };
    if (!arg1) {
      obj3 = _module2Result10.create();
    }
    let closure_0 = required_error;
    invalid_type_error = undefined;
    required_error = undefined;
    if (required_error) {
      ({ errorMap, invalid_type_error } = required_error);
      required_error = required_error.required_error;
      const description = required_error.description;
      if (errorMap) {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error = new Error("Can't use \"invalid_type_error\" or \"required_error\" in conjunction with custom error map.");
        throw error;
      }
      let obj4 = { errorMap: null, description: null };
      if (errorMap) {
        obj4.errorMap = errorMap;
        obj4.description = description;
        obj8 = obj4;
      } else {
        obj4.errorMap = function errorMap(code, defaultError) {
          let obj;
          defaultError = message.message;
          if ("invalid_enum_value" === code.code) {
            if (null == defaultError) {
              defaultError = defaultError.defaultError;
            }
            obj = { message: defaultError };
            const obj2 = { message: defaultError };
          } else if (undefined === defaultError.data) {
            let defaultError3 = defaultError;
            if (null == defaultError) {
              defaultError3 = required_error;
            }
            if (null === defaultError3) {
              defaultError3 = defaultError.defaultError;
            }
            obj = { message: defaultError3 };
            const obj3 = { message: defaultError3 };
          } else if ("invalid_type" !== code.code) {
            obj = { message: defaultError.defaultError };
            const obj4 = { message: defaultError.defaultError };
          } else {
            let defaultError2 = defaultError;
            if (null == defaultError) {
              defaultError2 = invalid_type_error;
            }
            if (null === defaultError2) {
              defaultError2 = defaultError.defaultError;
            }
            obj = { message: defaultError2 };
          }
          return obj;
        };
        obj4.description = description;
        obj8 = obj4;
      }
    } else {
      obj8 = {};
    }
    const merged = Object.assign(obj8);
    const tmp2Result = tmp2(obj2);
    return tmp2Result;
  }
};
const items26 = [entry24];
const _module2Result22 = _createClass(ZodFunction, items25, items26);
class ZodLazy {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, ZodLazy);
    const obj = _getPrototypeOf(ZodLazy);
    const tmp2 = _getPrototypeOf;
    const tmp3 = c2;
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return tmp3(self, constructResult);
  }
}
_inherits(ZodLazy, _module2Result);
let obj5 = {
  key: "schema",
  get() {
    const _def = this._def;
    return _def.getter();
  }
};
const items27 = [
  obj5,
  {
    key: "_parse",
    value: function _parse(common) {
      const ctx = this._processInputParams(common).ctx;
      const _def = this._def;
      const getterResult = _def.getter();
      const obj = { data: ctx.data, path: ctx.path, parent: ctx };
      return getterResult._parse(obj);
    }
  }
];
const _module2Result23 = _createClass(ZodLazy, items27);
_module2Result23.create = function(getter, required_error) {
  let errorMap;
  let invalid_type_error;
  let obj3;
  let closure_0 = required_error;
  invalid_type_error = undefined;
  required_error = undefined;
  const obj = { getter, typeName: obj6.ZodLazy };
  const tmp = _module2Result23;
  if (required_error) {
    ({ errorMap, invalid_type_error } = required_error);
    required_error = required_error.required_error;
    const description = required_error.description;
    if (errorMap) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("Can't use \"invalid_type_error\" or \"required_error\" in conjunction with custom error map.");
      throw error;
    }
    const obj2 = { errorMap: null, description: null };
    if (errorMap) {
      obj2.errorMap = errorMap;
      obj2.description = description;
      obj3 = obj2;
    } else {
      obj2.errorMap = function errorMap(code, defaultError) {
        let obj;
        defaultError = message.message;
        if ("invalid_enum_value" === code.code) {
          if (null == defaultError) {
            defaultError = defaultError.defaultError;
          }
          obj = { message: defaultError };
          const obj2 = { message: defaultError };
        } else if (undefined === defaultError.data) {
          let defaultError3 = defaultError;
          if (null == defaultError) {
            defaultError3 = required_error;
          }
          if (null === defaultError3) {
            defaultError3 = defaultError.defaultError;
          }
          obj = { message: defaultError3 };
          const obj3 = { message: defaultError3 };
        } else if ("invalid_type" !== code.code) {
          obj = { message: defaultError.defaultError };
          const obj4 = { message: defaultError.defaultError };
        } else {
          let defaultError2 = defaultError;
          if (null == defaultError) {
            defaultError2 = invalid_type_error;
          }
          if (null === defaultError2) {
            defaultError2 = defaultError.defaultError;
          }
          obj = { message: defaultError2 };
        }
        return obj;
      };
      obj2.description = description;
      obj3 = obj2;
    }
  } else {
    obj3 = {};
  }
  const merged = Object.assign(obj3);
  const tmp2 = new tmp(obj);
  return tmp2;
};
class ZodLiteral {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, ZodLiteral);
    const obj = _getPrototypeOf(ZodLiteral);
    const tmp2 = _getPrototypeOf;
    const tmp3 = c2;
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return tmp3(self, constructResult);
  }
}
_inherits(ZodLiteral, _module2Result);
const entry25 = {
  key: "_parse",
  value: function _parse(data) {
    const self = this;
    if (data.data !== this._def.value) {
      const _getOrReturnCtxResult = self._getOrReturnCtx(data);
      const obj2 = { received: _getOrReturnCtxResult.data, code: require("module_15897").ZodIssueCode.invalid_literal, expected: self._def.value };
      const addIssueToContext = DIRTY.addIssueToContext;
      addIssueToContext(_getOrReturnCtxResult, obj2);
      return DIRTY.INVALID;
    } else {
      return { status: "valid", value: data.data };
    }
  }
};
const items28 = [
  entry25,
  {
    key: "value",
    get() {
      return this._def.value;
    }
  }
];
const _module2Result24 = _createClass(ZodLiteral, items28);
_module2Result24.create = function(value, required_error) {
  let errorMap;
  let invalid_type_error;
  let obj3;
  let closure_0 = required_error;
  invalid_type_error = undefined;
  required_error = undefined;
  const obj = { value, typeName: obj6.ZodLiteral };
  const tmp = _module2Result24;
  if (required_error) {
    ({ errorMap, invalid_type_error } = required_error);
    required_error = required_error.required_error;
    const description = required_error.description;
    if (errorMap) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("Can't use \"invalid_type_error\" or \"required_error\" in conjunction with custom error map.");
      throw error;
    }
    const obj2 = { errorMap: null, description: null };
    if (errorMap) {
      obj2.errorMap = errorMap;
      obj2.description = description;
      obj3 = obj2;
    } else {
      obj2.errorMap = function errorMap(code, defaultError) {
        let obj;
        defaultError = message.message;
        if ("invalid_enum_value" === code.code) {
          if (null == defaultError) {
            defaultError = defaultError.defaultError;
          }
          obj = { message: defaultError };
          const obj2 = { message: defaultError };
        } else if (undefined === defaultError.data) {
          let defaultError3 = defaultError;
          if (null == defaultError) {
            defaultError3 = required_error;
          }
          if (null === defaultError3) {
            defaultError3 = defaultError.defaultError;
          }
          obj = { message: defaultError3 };
          const obj3 = { message: defaultError3 };
        } else if ("invalid_type" !== code.code) {
          obj = { message: defaultError.defaultError };
          const obj4 = { message: defaultError.defaultError };
        } else {
          let defaultError2 = defaultError;
          if (null == defaultError) {
            defaultError2 = invalid_type_error;
          }
          if (null === defaultError2) {
            defaultError2 = defaultError.defaultError;
          }
          obj = { message: defaultError2 };
        }
        return obj;
      };
      obj2.description = description;
      obj3 = obj2;
    }
  } else {
    obj3 = {};
  }
  const merged = Object.assign(obj3);
  const tmp2 = new tmp(obj);
  return tmp2;
};
class ZodEnum {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, ZodEnum);
    const obj = _getPrototypeOf(ZodEnum);
    const tmp2 = _getPrototypeOf;
    const tmp3 = c2;
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    const tmp3Result = tmp3(self, constructResult);
    const result = weakMap.set(tmp3Result, undefined);
    return tmp3Result;
  }
}
_inherits(ZodEnum, _module2Result);
const entry26 = {
  key: "_parse",
  value: function _parse(data) {
    let util;
    const self = this;
    if (typeof data.data !== "string") {
      const _getOrReturnCtxResult = self._getOrReturnCtx(data);
      const values2 = self._def.values;
      const obj = { expected: util.joinValues(values2), received: _getOrReturnCtxResult.parsedType, code: require("module_15897").ZodIssueCode.invalid_type };
      const addIssueToContext2 = DIRTY.addIssueToContext;
      util = _mod15898.util;
      addIssueToContext2(_getOrReturnCtxResult, obj);
      return DIRTY.INVALID;
    } else {
      const tmp18 = closure_10;
      if (!closure_10(self, weakMap, "f")) {
        const _Set = Set;
        const self2 = this;
        const self3 = this;
        set = new Set(self._def.values);
        closure_11(self, weakMap, set, "f");
      }
      const tmp18Result = tmp18(self, weakMap, "f");
      if (tmp18Result.has(data.data)) {
        return DIRTY.OK(data.data);
      } else {
        const _getOrReturnCtxResult1 = self._getOrReturnCtx(data);
        const values = self._def.values;
        const obj2 = { received: _getOrReturnCtxResult1.data, code: require("module_15897").ZodIssueCode.invalid_enum_value, options: values };
        const addIssueToContext = DIRTY.addIssueToContext;
        addIssueToContext(_getOrReturnCtxResult1, obj2);
        return DIRTY.INVALID;
      }
    }
  }
};
const items29 = [
  entry26,
  {
    key: "options",
    get() {
      return this._def.values;
    }
  },
  {
    key: "enum",
    get() {
      const obj = {};
      const values = this._def.values;
      for (const item10008 of values) {
        obj[item10008] = item10008;
        continue;
      }
      return obj;
    }
  },
  {
    key: "Values",
    get() {
      const obj = {};
      const values = this._def.values;
      for (const item10008 of values) {
        obj[item10008] = item10008;
        continue;
      }
      return obj;
    }
  },
  {
    key: "Enum",
    get() {
      const obj = {};
      const values = this._def.values;
      for (const item10008 of values) {
        obj[item10008] = item10008;
        continue;
      }
      return obj;
    }
  },
  {
    key: "extract",
    value: function extract(arg0) {
      const self = this;
      let _def = arg1;
      if (arg1 === undefined) {
        _def = self._def;
      }
      create = ZodEnum.create;
      const obj = {};
      const merged = Object.assign(self._def);
      const merged1 = Object.assign(_def);
      return create(arg0, obj);
    }
  },
  {
    key: "exclude",
    value: function exclude(arg0) {
      const self = this;
      let closure_0 = arg0;
      let _def = arg1;
      if (arg1 === undefined) {
        _def = self._def;
      }
      const options = self.options;
      create = ZodEnum.create;
      const obj = {};
      const found = options.filter((item) => !closure_0.includes(item));
      const merged = Object.assign(self._def);
      const merged1 = Object.assign(_def);
      return create(found, obj);
    }
  }
];
const _module2Result25 = _createClass(ZodEnum, items29);
const weakMap = new WeakMap();
_module2Result25.create = createZodEnum;
class ZodNativeEnum {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, ZodNativeEnum);
    const obj = _getPrototypeOf(ZodNativeEnum);
    const tmp2 = _getPrototypeOf;
    const tmp3 = c2;
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    const tmp3Result = tmp3(self, constructResult);
    const result = weakMap1.set(tmp3Result, undefined);
    return tmp3Result;
  }
}
_inherits(ZodNativeEnum, _module2Result);
const entry27 = {
  key: "_parse",
  value: function _parse(data) {
    let objectValuesResult;
    let objectValuesResult2;
    let util5;
    const self = this;
    const util = _mod15898.util;
    const validEnumValues = util.getValidEnumValues(this._def.values);
    const _getOrReturnCtxResult = this._getOrReturnCtx(data);
    if (_getOrReturnCtxResult.parsedType !== _mod15898.ZodParsedType.string) {
      if (_getOrReturnCtxResult.parsedType !== _mod15898.ZodParsedType.number) {
        const util4 = tmp(15898).util;
        const obj = { expected: util5.joinValues(objectValuesResult), received: _getOrReturnCtxResult.parsedType, code: require("module_15897").ZodIssueCode.invalid_type };
        objectValuesResult = util4.objectValues(validEnumValues);
        const addIssueToContext2 = tmp(15899).addIssueToContext;
        util5 = tmp(15898).util;
        addIssueToContext2(_getOrReturnCtxResult, obj);
        return DIRTY.INVALID;
      }
    }
    const tmp5 = closure_10;
    if (!closure_10(self, weakMap1, "f")) {
      const _Set = Set;
      const util2 = tmp(15898).util;
      const self2 = this;
      const self3 = this;
      set = new Set(util2.getValidEnumValues(self._def.values));
      closure_11(self, weakMap1, set, "f");
    }
    const tmp5Result = tmp5(self, weakMap1, "f");
    if (tmp5Result.has(data.data)) {
      return DIRTY.OK(data.data);
    } else {
      const util3 = tmp(15898).util;
      const obj2 = { received: _getOrReturnCtxResult.data, code: require("module_15897").ZodIssueCode.invalid_enum_value, options: objectValuesResult2 };
      objectValuesResult2 = util3.objectValues(validEnumValues);
      const addIssueToContext = tmp(15899).addIssueToContext;
      addIssueToContext(_getOrReturnCtxResult, obj2);
      return DIRTY.INVALID;
    }
  }
};
const items30 = [
  entry27,
  {
    key: "enum",
    get() {
      return this._def.values;
    }
  }
];
const _module2Result26 = _createClass(ZodNativeEnum, items30);
const weakMap1 = new WeakMap();
_module2Result26.create = function(values, required_error) {
  let errorMap;
  let invalid_type_error;
  let obj3;
  let closure_0 = required_error;
  invalid_type_error = undefined;
  required_error = undefined;
  const obj = { values, typeName: obj6.ZodNativeEnum };
  const tmp = _module2Result26;
  if (required_error) {
    ({ errorMap, invalid_type_error } = required_error);
    required_error = required_error.required_error;
    const description = required_error.description;
    if (errorMap) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("Can't use \"invalid_type_error\" or \"required_error\" in conjunction with custom error map.");
      throw error;
    }
    const obj2 = { errorMap: null, description: null };
    if (errorMap) {
      obj2.errorMap = errorMap;
      obj2.description = description;
      obj3 = obj2;
    } else {
      obj2.errorMap = function errorMap(code, defaultError) {
        let obj;
        defaultError = message.message;
        if ("invalid_enum_value" === code.code) {
          if (null == defaultError) {
            defaultError = defaultError.defaultError;
          }
          obj = { message: defaultError };
          const obj2 = { message: defaultError };
        } else if (undefined === defaultError.data) {
          let defaultError3 = defaultError;
          if (null == defaultError) {
            defaultError3 = required_error;
          }
          if (null === defaultError3) {
            defaultError3 = defaultError.defaultError;
          }
          obj = { message: defaultError3 };
          const obj3 = { message: defaultError3 };
        } else if ("invalid_type" !== code.code) {
          obj = { message: defaultError.defaultError };
          const obj4 = { message: defaultError.defaultError };
        } else {
          let defaultError2 = defaultError;
          if (null == defaultError) {
            defaultError2 = invalid_type_error;
          }
          if (null === defaultError2) {
            defaultError2 = defaultError.defaultError;
          }
          obj = { message: defaultError2 };
        }
        return obj;
      };
      obj2.description = description;
      obj3 = obj2;
    }
  } else {
    obj3 = {};
  }
  const merged = Object.assign(obj3);
  const tmp2 = new tmp(obj);
  return tmp2;
};
class ZodPromise {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, ZodPromise);
    const obj = _getPrototypeOf(ZodPromise);
    const tmp2 = _getPrototypeOf;
    const tmp3 = c2;
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return tmp3(self, constructResult);
  }
}
_inherits(ZodPromise, _module2Result);
const entry28 = {
  key: "unwrap",
  value: function unwrap() {
    return this._def.type;
  }
};
const items31 = [
  entry28,
  {
    key: "_parse",
    value: function _parse(common) {
      let data;
      const self = this;
      const ctx = this._processInputParams(common).ctx;
      if (ctx.parsedType !== _mod15898.ZodParsedType.promise) {
        if (false === ctx.common.async) {
          let obj = { code: require("module_15897").ZodIssueCode.invalid_type, expected: _mod15898.ZodParsedType.promise, received: ctx.parsedType };
          const addIssueToContext = tmp(15899).addIssueToContext;
          addIssueToContext(ctx, obj);
          return DIRTY.INVALID;
        }
      }
      if (ctx.parsedType === _mod15898.ZodParsedType.promise) {
        data = ctx.data;
      } else {
        data = Promise.resolve(ctx.data);
      }
      return DIRTY.OK(data.then((result) => {
        const type = self._def.type;
        const obj = { path: ctx.path, errorMap: ctx.common.contextualErrorMap };
        return type.parseAsync(result, obj);
      }));
    }
  }
];
const _module2Result27 = _createClass(ZodPromise, items31);
_module2Result27.create = function(type, required_error) {
  let errorMap;
  let invalid_type_error;
  let obj3;
  let closure_0 = required_error;
  invalid_type_error = undefined;
  required_error = undefined;
  const obj = { type, typeName: obj6.ZodPromise };
  const tmp = _module2Result27;
  if (required_error) {
    ({ errorMap, invalid_type_error } = required_error);
    required_error = required_error.required_error;
    const description = required_error.description;
    if (errorMap) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("Can't use \"invalid_type_error\" or \"required_error\" in conjunction with custom error map.");
      throw error;
    }
    const obj2 = { errorMap: null, description: null };
    if (errorMap) {
      obj2.errorMap = errorMap;
      obj2.description = description;
      obj3 = obj2;
    } else {
      obj2.errorMap = function errorMap(code, defaultError) {
        let obj;
        defaultError = message.message;
        if ("invalid_enum_value" === code.code) {
          if (null == defaultError) {
            defaultError = defaultError.defaultError;
          }
          obj = { message: defaultError };
          const obj2 = { message: defaultError };
        } else if (undefined === defaultError.data) {
          let defaultError3 = defaultError;
          if (null == defaultError) {
            defaultError3 = required_error;
          }
          if (null === defaultError3) {
            defaultError3 = defaultError.defaultError;
          }
          obj = { message: defaultError3 };
          const obj3 = { message: defaultError3 };
        } else if ("invalid_type" !== code.code) {
          obj = { message: defaultError.defaultError };
          const obj4 = { message: defaultError.defaultError };
        } else {
          let defaultError2 = defaultError;
          if (null == defaultError) {
            defaultError2 = invalid_type_error;
          }
          if (null === defaultError2) {
            defaultError2 = defaultError.defaultError;
          }
          obj = { message: defaultError2 };
        }
        return obj;
      };
      obj2.description = description;
      obj3 = obj2;
    }
  } else {
    obj3 = {};
  }
  const merged = Object.assign(obj3);
  const tmp2 = new tmp(obj);
  return tmp2;
};
class ZodEffects {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, ZodEffects);
    const obj = _getPrototypeOf(ZodEffects);
    const tmp2 = _getPrototypeOf;
    const tmp3 = c2;
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return tmp3(self, constructResult);
  }
}
_inherits(ZodEffects, _module2Result);
const entry29 = {
  key: "innerType",
  value: function innerType() {
    return this._def.schema;
  }
};
const items32 = [
  entry29,
  {
    key: "sourceType",
    value: function sourceType() {
      let schema;
      const self = this;
      if (this._def.schema._def.typeName === obj6.ZodEffects) {
        const schema2 = self._def.schema;
        schema = schema2.sourceType();
      } else {
        schema = self._def.schema;
      }
      return schema;
    }
  },
  {
    key: "_parse",
    value: function _parse(common) {
      let addIssue;
      let executeRefinement;
      let obj2;
      let self = this;
      const _processInputParamsResult = this._processInputParams(common);
      const iter = _processInputParamsResult.status;
      const ctx = _processInputParamsResult.ctx;
      const obj = this._def.effect || null;
      obj2 = { addIssue: addIssue.bind(obj2) };
      Object.defineProperty(obj2, "path", { get: () => ctx.path, set: undefined });
      addIssue = obj2.addIssue;
      if ("preprocess" === obj.type) {
        const transformResult = obj.transform(ctx.data, obj2);
        if (ctx.common.async) {
          let resolved = Promise.resolve(transformResult);
          const then = resolved.then;
          let closure_0 = executeRefinement(function*(arg0) {
            let INVALID;
            let c3;
            let c4;
            let closure_1;
            closure_0 = arg0;
            const parent = 0;
            if ("aborted" === tmp.value) {
              return closure_0(iter[7]).INVALID;
            }
            const schema = closure_0._def.schema;
            const obj5 = { data: tmp28, path: parent.path, parent };
            closure_0 = yield schema._parseAsync(obj5);
            if ("aborted" === closure_0.status) {
              INVALID = closure_0(iter[7]).INVALID;
            } else {
              if ("dirty" !== closure_0.status) {
                if ("dirty" !== tmp.value) {
                  INVALID = closure_0;
                }
              }
              INVALID = closure_0(iter[7]).DIRTY(closure_0.value);
            }
            return INVALID;
          });
          return then(function(arg0) {
            return closure_0(...arguments);
          });
        } else if ("aborted" === iter.value) {
          return self(iter[7]).INVALID;
        } else {
          let INVALID;
          const schema5 = self._def.schema;
          let obj5 = { data: transformResult, path: ctx.path, parent: ctx };
          const iter4 = schema5._parseSync(obj5);
          if ("aborted" === iter4.status) {
            INVALID = self(iter[7]).INVALID;
          } else if ("dirty" === iter4.status) {
            INVALID = self(iter[7]).DIRTY(iter4.value);
          } else {
            INVALID = iter4;
          }
          return INVALID;
        }
      } else if ("refinement" === obj.type) {
        executeRefinement = function executeRefinement(arg0) {

        };
        if (false === ctx.common.async) {
          let INVALID1;
          const schema4 = self._def.schema;
          const obj8 = { data: null, path: null, parent: ctx };
          ({ data: obj7.data, path: obj7.path } = ctx);
          const iter3 = schema4._parseSync(obj8);
          if ("aborted" === iter3.status) {
            INVALID1 = self(iter[7]).INVALID;
          } else {
            if ("dirty" === iter3.status) {
              iter.dirty();
            }
            let refinementResult = obj.refinement(iter3.value, obj2);
            if (ctx.common.async) {
              let resolveResult = _Promise2.resolve(refinementResult);
            } else if (refinementResult instanceof Promise) {
              const _Error2 = Error;
              const self4 = this;
              const self5 = this;
              let error = new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
              throw error;
            }
            INVALID1 = { status: iter.value, value: iter3.value };
          }
          return INVALID1;
        } else {
          const schema3 = self._def.schema;
          const obj9 = { data: null, path: null, parent: ctx };
          ({ data: obj6.data, path: obj6.path } = ctx);
          const _parseAsyncResult = schema3._parseAsync(obj9);
          return _parseAsyncResult.then(function(status) {
            let INVALID;
            if ("aborted" === status.status) {
              INVALID = self(iter[7]).INVALID;
            } else {
              if ("dirty" === status.status) {
                iter.dirty();
              }
              let resolveResult = status.value;
              if (typeof executeRefinement === "function") {
                const refinementResult = obj.refinement(resolveResult, obj2);
                if (ctx.common.async) {
                  resolveResult = _Promise.resolve(refinementResult);
                } else if (refinementResult instanceof Promise) {
                  const _Error = Error;
                  self = this;
                  const self2 = this;
                  const error = new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
                  throw error;
                }
                INVALID = resolveResult.then(() => ({ status: iter.value, value: status.value }));
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            }
            return INVALID;
          });
        }
      } else if ("transform" === obj.type) {
        if (false === ctx.common.async) {
          const schema2 = self._def.schema;
          const obj16 = { data: null, path: null, parent: ctx };
          ({ data: obj4.data, path: obj4.path } = ctx);
          const iter2 = schema2._parseSync(obj16);
          if (self(iter[7]).isValid(iter2)) {
            const transformResult1 = obj.transform(iter2.value, obj2);
            const _Promise = Promise;
            if (transformResult1 instanceof Promise) {
              let _Error = Error;
              let self2 = this;
              const self3 = this;
              const error1 = new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
              throw error1;
            } else {
              return { status: iter.value, value: transformResult1 };
            }
          } else {
            return iter2;
          }
        } else {
          let schema = self._def.schema;
          const obj18 = { data: null, path: null, parent: ctx };
          ({ data: obj3.data, path: obj3.path } = ctx);
          const _parseAsyncResult1 = schema._parseAsync(obj18);
          return _parseAsyncResult1.then((value) => {
            let nextPromise = value;
            if (DIRTY.isValid(value)) {
              const resolved = Promise.resolve(obj.transform(value.value, obj2));
              nextPromise = resolved.then((value) => ({ status: value.value, value }));
            }
            return nextPromise;
          });
        }
      } else {
        const util = self(iter[9]).util;
        util.assertNever(obj);
      }
    }
  }
];
const _module2Result28 = _createClass(ZodEffects, items32);
_module2Result28.create = function(schema, effect, required_error) {
  let errorMap;
  let invalid_type_error;
  let obj3;
  let closure_0 = required_error;
  invalid_type_error = undefined;
  required_error = undefined;
  const obj = { schema, typeName: obj6.ZodEffects, effect };
  const tmp = _module2Result28;
  if (required_error) {
    ({ errorMap, invalid_type_error } = required_error);
    required_error = required_error.required_error;
    const description = required_error.description;
    if (errorMap) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("Can't use \"invalid_type_error\" or \"required_error\" in conjunction with custom error map.");
      throw error;
    }
    const obj2 = { errorMap: null, description: null };
    if (errorMap) {
      obj2.errorMap = errorMap;
      obj2.description = description;
      obj3 = obj2;
    } else {
      obj2.errorMap = function errorMap(code, defaultError) {
        let obj;
        defaultError = message.message;
        if ("invalid_enum_value" === code.code) {
          if (null == defaultError) {
            defaultError = defaultError.defaultError;
          }
          obj = { message: defaultError };
          const obj2 = { message: defaultError };
        } else if (undefined === defaultError.data) {
          let defaultError3 = defaultError;
          if (null == defaultError) {
            defaultError3 = required_error;
          }
          if (null === defaultError3) {
            defaultError3 = defaultError.defaultError;
          }
          obj = { message: defaultError3 };
          const obj3 = { message: defaultError3 };
        } else if ("invalid_type" !== code.code) {
          obj = { message: defaultError.defaultError };
          const obj4 = { message: defaultError.defaultError };
        } else {
          let defaultError2 = defaultError;
          if (null == defaultError) {
            defaultError2 = invalid_type_error;
          }
          if (null === defaultError2) {
            defaultError2 = defaultError.defaultError;
          }
          obj = { message: defaultError2 };
        }
        return obj;
      };
      obj2.description = description;
      obj3 = obj2;
    }
  } else {
    obj3 = {};
  }
  const merged = Object.assign(obj3);
  const tmp2 = new tmp(obj);
  return tmp2;
};
_module2Result28.createWithPreprocess = function(transform, schema, required_error) {
  let errorMap;
  let invalid_type_error;
  let obj2;
  let obj4;
  const obj = { schema, effect: obj2, typeName: obj6.ZodEffects };
  let closure_0 = required_error;
  invalid_type_error = undefined;
  required_error = undefined;
  obj2 = { type: "preprocess", transform };
  const tmp = _module2Result28;
  if (required_error) {
    ({ errorMap, invalid_type_error } = required_error);
    required_error = required_error.required_error;
    const description = required_error.description;
    if (errorMap) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("Can't use \"invalid_type_error\" or \"required_error\" in conjunction with custom error map.");
      throw error;
    }
    const obj3 = { errorMap: null, description: null };
    if (errorMap) {
      obj3.errorMap = errorMap;
      obj3.description = description;
      obj4 = obj3;
    } else {
      obj3.errorMap = function errorMap(code, defaultError) {
        let obj;
        defaultError = message.message;
        if ("invalid_enum_value" === code.code) {
          if (null == defaultError) {
            defaultError = defaultError.defaultError;
          }
          obj = { message: defaultError };
          const obj2 = { message: defaultError };
        } else if (undefined === defaultError.data) {
          let defaultError3 = defaultError;
          if (null == defaultError) {
            defaultError3 = required_error;
          }
          if (null === defaultError3) {
            defaultError3 = defaultError.defaultError;
          }
          obj = { message: defaultError3 };
          const obj3 = { message: defaultError3 };
        } else if ("invalid_type" !== code.code) {
          obj = { message: defaultError.defaultError };
          const obj4 = { message: defaultError.defaultError };
        } else {
          let defaultError2 = defaultError;
          if (null == defaultError) {
            defaultError2 = invalid_type_error;
          }
          if (null === defaultError2) {
            defaultError2 = defaultError.defaultError;
          }
          obj = { message: defaultError2 };
        }
        return obj;
      };
      obj3.description = description;
      obj4 = obj3;
    }
  } else {
    obj4 = {};
  }
  const merged = Object.assign(obj4);
  const tmp2 = new tmp(obj);
  return tmp2;
};
class ZodOptional {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, ZodOptional);
    const obj = _getPrototypeOf(ZodOptional);
    const tmp2 = _getPrototypeOf;
    const tmp3 = c2;
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return tmp3(self, constructResult);
  }
}
_inherits(ZodOptional, _module2Result);
const entry30 = {
  key: "_parse",
  value: function _parse(data) {
    let OKResult;
    const _getTypeResult = this._getType(data);
    if (_getTypeResult === _mod15898.ZodParsedType.undefined) {
      OKResult = DIRTY.OK(undefined);
    } else {
      const innerType = this._def.innerType;
      OKResult = innerType._parse(data);
    }
    return OKResult;
  }
};
const items33 = [
  entry30,
  {
    key: "unwrap",
    value: function unwrap() {
      return this._def.innerType;
    }
  }
];
const _module2Result29 = _createClass(ZodOptional, items33);
_module2Result29.create = function(innerType, required_error) {
  let errorMap;
  let invalid_type_error;
  let obj3;
  let closure_0 = required_error;
  invalid_type_error = undefined;
  required_error = undefined;
  const obj = { innerType, typeName: obj6.ZodOptional };
  const tmp = _module2Result29;
  if (required_error) {
    ({ errorMap, invalid_type_error } = required_error);
    required_error = required_error.required_error;
    const description = required_error.description;
    if (errorMap) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("Can't use \"invalid_type_error\" or \"required_error\" in conjunction with custom error map.");
      throw error;
    }
    const obj2 = { errorMap: null, description: null };
    if (errorMap) {
      obj2.errorMap = errorMap;
      obj2.description = description;
      obj3 = obj2;
    } else {
      obj2.errorMap = function errorMap(code, defaultError) {
        let obj;
        defaultError = message.message;
        if ("invalid_enum_value" === code.code) {
          if (null == defaultError) {
            defaultError = defaultError.defaultError;
          }
          obj = { message: defaultError };
          const obj2 = { message: defaultError };
        } else if (undefined === defaultError.data) {
          let defaultError3 = defaultError;
          if (null == defaultError) {
            defaultError3 = required_error;
          }
          if (null === defaultError3) {
            defaultError3 = defaultError.defaultError;
          }
          obj = { message: defaultError3 };
          const obj3 = { message: defaultError3 };
        } else if ("invalid_type" !== code.code) {
          obj = { message: defaultError.defaultError };
          const obj4 = { message: defaultError.defaultError };
        } else {
          let defaultError2 = defaultError;
          if (null == defaultError) {
            defaultError2 = invalid_type_error;
          }
          if (null === defaultError2) {
            defaultError2 = defaultError.defaultError;
          }
          obj = { message: defaultError2 };
        }
        return obj;
      };
      obj2.description = description;
      obj3 = obj2;
    }
  } else {
    obj3 = {};
  }
  const merged = Object.assign(obj3);
  const tmp2 = new tmp(obj);
  return tmp2;
};
class ZodNullable {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, ZodNullable);
    const obj = _getPrototypeOf(ZodNullable);
    const tmp2 = _getPrototypeOf;
    const tmp3 = c2;
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return tmp3(self, constructResult);
  }
}
_inherits(ZodNullable, _module2Result);
const entry31 = {
  key: "_parse",
  value: function _parse(data) {
    let OKResult;
    const _getTypeResult = this._getType(data);
    if (_getTypeResult === _mod15898.ZodParsedType.null) {
      OKResult = DIRTY.OK(null);
    } else {
      const innerType = this._def.innerType;
      OKResult = innerType._parse(data);
    }
    return OKResult;
  }
};
const items34 = [
  entry31,
  {
    key: "unwrap",
    value: function unwrap() {
      return this._def.innerType;
    }
  }
];
const _module2Result30 = _createClass(ZodNullable, items34);
_module2Result30.create = function(innerType, required_error) {
  let errorMap;
  let invalid_type_error;
  let obj3;
  let closure_0 = required_error;
  invalid_type_error = undefined;
  required_error = undefined;
  const obj = { innerType, typeName: obj6.ZodNullable };
  const tmp = _module2Result30;
  if (required_error) {
    ({ errorMap, invalid_type_error } = required_error);
    required_error = required_error.required_error;
    const description = required_error.description;
    if (errorMap) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("Can't use \"invalid_type_error\" or \"required_error\" in conjunction with custom error map.");
      throw error;
    }
    const obj2 = { errorMap: null, description: null };
    if (errorMap) {
      obj2.errorMap = errorMap;
      obj2.description = description;
      obj3 = obj2;
    } else {
      obj2.errorMap = function errorMap(code, defaultError) {
        let obj;
        defaultError = message.message;
        if ("invalid_enum_value" === code.code) {
          if (null == defaultError) {
            defaultError = defaultError.defaultError;
          }
          obj = { message: defaultError };
          const obj2 = { message: defaultError };
        } else if (undefined === defaultError.data) {
          let defaultError3 = defaultError;
          if (null == defaultError) {
            defaultError3 = required_error;
          }
          if (null === defaultError3) {
            defaultError3 = defaultError.defaultError;
          }
          obj = { message: defaultError3 };
          const obj3 = { message: defaultError3 };
        } else if ("invalid_type" !== code.code) {
          obj = { message: defaultError.defaultError };
          const obj4 = { message: defaultError.defaultError };
        } else {
          let defaultError2 = defaultError;
          if (null == defaultError) {
            defaultError2 = invalid_type_error;
          }
          if (null === defaultError2) {
            defaultError2 = defaultError.defaultError;
          }
          obj = { message: defaultError2 };
        }
        return obj;
      };
      obj2.description = description;
      obj3 = obj2;
    }
  } else {
    obj3 = {};
  }
  const merged = Object.assign(obj3);
  const tmp2 = new tmp(obj);
  return tmp2;
};
class ZodDefault {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, ZodDefault);
    const obj = _getPrototypeOf(ZodDefault);
    const tmp2 = _getPrototypeOf;
    const tmp3 = c2;
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return tmp3(self, constructResult);
  }
}
_inherits(ZodDefault, _module2Result);
const entry32 = {
  key: "_parse",
  value: function _parse(common) {
    const self = this;
    const ctx = this._processInputParams(common).ctx;
    let data = ctx.data;
    if (ctx.parsedType === _mod15898.ZodParsedType.undefined) {
      const _def = self._def;
      data = _def.defaultValue();
    }
    const innerType = self._def.innerType;
    const obj = { data, path: ctx.path, parent: ctx };
    return innerType._parse(obj);
  }
};
const items35 = [
  entry32,
  {
    key: "removeDefault",
    value: function removeDefault() {
      return this._def.innerType;
    }
  }
];
const _module2Result31 = _createClass(ZodDefault, items35);
_module2Result31.create = function(innerType, defaultValue) {
  let errorMap;
  let invalid_type_error;
  let obj3;
  let closure_0 = defaultValue;
  const obj = { innerType, typeName: obj6.ZodDefault, defaultValue: typeof defaultValue.default === "function" ? defaultValue.default : (() => closure_0.default) };
  const tmp = _module2Result31;
  if (defaultValue) {
    ({ errorMap, invalid_type_error } = defaultValue);
    const required_error = defaultValue.required_error;
    const description = defaultValue.description;
    if (errorMap) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("Can't use \"invalid_type_error\" or \"required_error\" in conjunction with custom error map.");
      throw error;
    }
    const obj2 = { errorMap: null, description: null };
    if (errorMap) {
      obj2.errorMap = errorMap;
      obj2.description = description;
      obj3 = obj2;
    } else {
      obj2.errorMap = function errorMap(code, defaultError) {
        let obj;
        defaultError = message.message;
        if ("invalid_enum_value" === code.code) {
          if (null == defaultError) {
            defaultError = defaultError.defaultError;
          }
          obj = { message: defaultError };
          const obj2 = { message: defaultError };
        } else if (undefined === defaultError.data) {
          let defaultError3 = defaultError;
          if (null == defaultError) {
            defaultError3 = required_error;
          }
          if (null === defaultError3) {
            defaultError3 = defaultError.defaultError;
          }
          obj = { message: defaultError3 };
          const obj3 = { message: defaultError3 };
        } else if ("invalid_type" !== code.code) {
          obj = { message: defaultError.defaultError };
          const obj4 = { message: defaultError.defaultError };
        } else {
          let defaultError2 = defaultError;
          if (null == defaultError) {
            defaultError2 = invalid_type_error;
          }
          if (null === defaultError2) {
            defaultError2 = defaultError.defaultError;
          }
          obj = { message: defaultError2 };
        }
        return obj;
      };
      obj2.description = description;
      obj3 = obj2;
    }
  } else {
    obj3 = {};
  }
  const merged = Object.assign(obj3);
  const tmp2 = new tmp(obj);
  return tmp2;
};
class ZodCatch {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, ZodCatch);
    const obj = _getPrototypeOf(ZodCatch);
    const tmp2 = _getPrototypeOf;
    const tmp3 = c2;
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return tmp3(self, constructResult);
  }
}
_inherits(ZodCatch, _module2Result);
const entry33 = {
  key: "_parse",
  value: function _parse(common) {
    let nextPromise;
    let obj2;
    let obj4;
    const self = this;
    const ctx = this._processInputParams(common).ctx;
    let obj = { common: obj2 };
    const merged = Object.assign(ctx);
    obj2 = { issues: [] };
    const merged1 = Object.assign(ctx.common);
    const innerType = this._def.innerType;
    const _parse = innerType._parse;
    const obj3 = { data: obj.data, path: obj.path, parent: obj4 };
    obj4 = {};
    const merged2 = Object.assign(obj);
    const _parseResult = _parse(obj3);
    if (obj(self[7]).isAsync(_parseResult)) {
      nextPromise = _parseResult.then((status) => {
        let common;
        let value;
        if ("valid" === status.status) {
          value = status.value;
        } else {
          const _def = self._def;
          obj = { input: obj.data };
          const catchValue = _def.catchValue;
          Object.defineProperty(obj, "error", {
            get: () => {
                const zodError = new obj(self[8]).ZodError(common.common.issues);
                return zodError;
              },
            set: undefined
          });
          value = catchValue(obj);
        }
        return { status: "valid", value };
      });
    } else {
      let catchValueResult;
      if ("valid" === _parseResult.status) {
        catchValueResult = _parseResult.value;
      } else {
        let _def = this._def;
        const obj5 = { input: obj.data };
        let catchValue = _def.catchValue;
        Object.defineProperty(obj5, "error", {
          get: () => {
                const zodError = new require("module_15897").ZodError(obj.common.issues);
                return zodError;
              },
          set: undefined
        });
        catchValueResult = catchValue(obj5);
      }
      nextPromise = { status: "valid", value: catchValueResult };
    }
    return nextPromise;
  }
};
const items36 = [
  entry33,
  {
    key: "removeCatch",
    value: function removeCatch() {
      return this._def.innerType;
    }
  }
];
const _module2Result32 = _createClass(ZodCatch, items36);
_module2Result32.create = function(innerType, catchValue) {
  let errorMap;
  let invalid_type_error;
  let obj3;
  let closure_0 = catchValue;
  const obj = { innerType, typeName: obj6.ZodCatch, catchValue: typeof catchValue.catch === "function" ? catchValue.catch : (() => _catch.catch) };
  const tmp = _module2Result32;
  if (catchValue) {
    ({ errorMap, invalid_type_error } = catchValue);
    const required_error = catchValue.required_error;
    const description = catchValue.description;
    if (errorMap) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("Can't use \"invalid_type_error\" or \"required_error\" in conjunction with custom error map.");
      throw error;
    }
    const obj2 = { errorMap: null, description: null };
    if (errorMap) {
      obj2.errorMap = errorMap;
      obj2.description = description;
      obj3 = obj2;
    } else {
      obj2.errorMap = function errorMap(code, defaultError) {
        let obj;
        defaultError = message.message;
        if ("invalid_enum_value" === code.code) {
          if (null == defaultError) {
            defaultError = defaultError.defaultError;
          }
          obj = { message: defaultError };
          const obj2 = { message: defaultError };
        } else if (undefined === defaultError.data) {
          let defaultError3 = defaultError;
          if (null == defaultError) {
            defaultError3 = required_error;
          }
          if (null === defaultError3) {
            defaultError3 = defaultError.defaultError;
          }
          obj = { message: defaultError3 };
          const obj3 = { message: defaultError3 };
        } else if ("invalid_type" !== code.code) {
          obj = { message: defaultError.defaultError };
          const obj4 = { message: defaultError.defaultError };
        } else {
          let defaultError2 = defaultError;
          if (null == defaultError) {
            defaultError2 = invalid_type_error;
          }
          if (null === defaultError2) {
            defaultError2 = defaultError.defaultError;
          }
          obj = { message: defaultError2 };
        }
        return obj;
      };
      obj2.description = description;
      obj3 = obj2;
    }
  } else {
    obj3 = {};
  }
  const merged = Object.assign(obj3);
  const tmp2 = new tmp(obj);
  return tmp2;
};
class ZodNaN {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, ZodNaN);
    const obj = _getPrototypeOf(ZodNaN);
    const tmp2 = _getPrototypeOf;
    const tmp3 = c2;
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return tmp3(self, constructResult);
  }
}
_inherits(ZodNaN, _module2Result);
const entry34 = {
  key: "_parse",
  value: function _parse(data) {
    const self = this;
    const _getTypeResult = this._getType(data);
    if (_getTypeResult !== _mod15898.ZodParsedType.nan) {
      const _getOrReturnCtxResult = self._getOrReturnCtx(data);
      const obj2 = { code: require("module_15897").ZodIssueCode.invalid_type, expected: _mod15898.ZodParsedType.nan, received: _getOrReturnCtxResult.parsedType };
      const addIssueToContext = tmp2(15899).addIssueToContext;
      addIssueToContext(_getOrReturnCtxResult, obj2);
      return DIRTY.INVALID;
    } else {
      return { status: "valid", value: data.data };
    }
  }
};
const items37 = [entry34];
const _module2Result33 = _createClass(ZodNaN, items37);
_module2Result33.create = function(required_error) {
  let errorMap;
  let invalid_type_error;
  let obj3;
  let closure_0 = required_error;
  invalid_type_error = undefined;
  required_error = undefined;
  const obj = { typeName: obj6.ZodNaN };
  const tmp = _module2Result33;
  if (required_error) {
    ({ errorMap, invalid_type_error } = required_error);
    required_error = required_error.required_error;
    const description = required_error.description;
    if (errorMap) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("Can't use \"invalid_type_error\" or \"required_error\" in conjunction with custom error map.");
      throw error;
    }
    const obj2 = { errorMap: null, description: null };
    if (errorMap) {
      obj2.errorMap = errorMap;
      obj2.description = description;
      obj3 = obj2;
    } else {
      obj2.errorMap = function errorMap(code, defaultError) {
        let obj;
        defaultError = message.message;
        if ("invalid_enum_value" === code.code) {
          if (null == defaultError) {
            defaultError = defaultError.defaultError;
          }
          obj = { message: defaultError };
          const obj2 = { message: defaultError };
        } else if (undefined === defaultError.data) {
          let defaultError3 = defaultError;
          if (null == defaultError) {
            defaultError3 = required_error;
          }
          if (null === defaultError3) {
            defaultError3 = defaultError.defaultError;
          }
          obj = { message: defaultError3 };
          const obj3 = { message: defaultError3 };
        } else if ("invalid_type" !== code.code) {
          obj = { message: defaultError.defaultError };
          const obj4 = { message: defaultError.defaultError };
        } else {
          let defaultError2 = defaultError;
          if (null == defaultError) {
            defaultError2 = invalid_type_error;
          }
          if (null === defaultError2) {
            defaultError2 = defaultError.defaultError;
          }
          obj = { message: defaultError2 };
        }
        return obj;
      };
      obj2.description = description;
      obj3 = obj2;
    }
  } else {
    obj3 = {};
  }
  const merged = Object.assign(obj3);
  const tmp2 = new tmp(obj);
  return tmp2;
};
class ZodBranded {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, ZodBranded);
    const obj = _getPrototypeOf(ZodBranded);
    const tmp2 = _getPrototypeOf;
    const tmp3 = c2;
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return tmp3(self, constructResult);
  }
}
_inherits(ZodBranded, _module2Result);
const entry35 = {
  key: "_parse",
  value: function _parse(common) {
    const ctx = this._processInputParams(common).ctx;
    const type = this._def.type;
    const obj = { data: ctx.data, path: ctx.path, parent: ctx };
    return type._parse(obj);
  }
};
const items38 = [
  entry35,
  {
    key: "unwrap",
    value: function unwrap() {
      return this._def.type;
    }
  }
];
const _module2Result34 = _createClass(ZodBranded, items38);
class ZodPipeline {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, ZodPipeline);
    const obj = _getPrototypeOf(ZodPipeline);
    const tmp2 = _getPrototypeOf;
    const tmp3 = c2;
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return tmp3(self, constructResult);
  }
}
_inherits(ZodPipeline, _module2Result);
const entry36 = {
  key: "_parse",
  value: function _parse(common) {
    function handleAsync() {
      return closure_0(...arguments);
    }
    const self = this;
    const _processInputParamsResult = this._processInputParams(common);
    const status = _processInputParamsResult.status;
    const ctx = _processInputParamsResult.ctx;
    if (ctx.common.async) {
      let closure_0 = _asyncToGenerator(async () => {
        let INVALID;
        let c3;
        let closure_1;
        let tmp;
        const _in = tmp._def.in;
        const obj4 = { data: parent.data, path: parent.path, parent };
        tmp = await _in._parseAsync(obj4);
        if ("aborted" === tmp.status) {
          INVALID = tmp(status[7]).INVALID;
        } else if ("dirty" === tmp.status) {
          tmp4.dirty();
          INVALID = tmp(status[7]).DIRTY(tmp.value);
        } else {
          const out = tmp._def.out;
          const obj = { data: tmp.value, path: parent.path, parent };
          INVALID = out._parseAsync(obj);
        }
        return INVALID;
      });
      return handleAsync();
    } else {
      let INVALID;
      let _in = self._def.in;
      let obj = { data: null, path: null, parent: ctx };
      ({ data: obj.data, path: obj.path } = ctx);
      const iter = _in._parseSync(obj);
      if ("aborted" === iter.status) {
        const tmp4 = status;
        INVALID = self(status[7]).INVALID;
      } else if ("dirty" === iter.status) {
        status.dirty();
        const obj2 = { status: "dirty", value: iter.value };
        INVALID = obj2;
      } else {
        let out = self._def.out;
        const obj3 = { data: iter.value, path: ctx.path, parent: ctx };
        INVALID = out._parseSync(obj3);
      }
      return INVALID;
    }
  }
};
const items39 = [entry36];
const entry37 = {
  key: "create",
  value: function create(_in, out) {
    const obj = { in: _in, out, typeName: obj6.ZodPipeline };
    const tmp = ZodPipeline(obj);
    return tmp;
  }
};
const items40 = [entry37];
const _module2Result35 = _createClass(ZodPipeline, items39, items40);
class ZodReadonly {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, ZodReadonly);
    const obj = _getPrototypeOf(ZodReadonly);
    const tmp2 = _getPrototypeOf;
    const tmp3 = c2;
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return tmp3(self, constructResult);
  }
}
_inherits(ZodReadonly, _module2Result);
const entry38 = {
  key: "_parse",
  value: function _parse(arg0) {
    let nextPromise;
    const innerType = this._def.innerType;
    const _parseResult = innerType._parse(arg0);
    function freeze(dependencyMap) {

    }
    const tmp = freeze;
    if (freeze(15899).isAsync(_parseResult)) {
      nextPromise = _parseResult.then((value) => {
        if (typeof freeze === "function") {
          if (DIRTY.isValid(value)) {
            const _Object = Object;
            value.value = Object.freeze(value.value);
          }
          return value;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      });
    } else {
      nextPromise = _parseResult;
      if (tmp(15899).isValid(_parseResult)) {
        let _Object = Object;
        _parseResult.value = Object.freeze(_parseResult.value);
        nextPromise = _parseResult;
      }
    }
    return nextPromise;
  }
};
const items41 = [
  entry38,
  {
    key: "unwrap",
    value: function unwrap() {
      return this._def.innerType;
    }
  }
];
const _module2Result36 = _createClass(ZodReadonly, items41);
_module2Result36.create = function(innerType, required_error) {
  let errorMap;
  let invalid_type_error;
  let obj3;
  let closure_0 = required_error;
  invalid_type_error = undefined;
  required_error = undefined;
  const obj = { innerType, typeName: obj6.ZodReadonly };
  const tmp = _module2Result36;
  if (required_error) {
    ({ errorMap, invalid_type_error } = required_error);
    required_error = required_error.required_error;
    const description = required_error.description;
    if (errorMap) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("Can't use \"invalid_type_error\" or \"required_error\" in conjunction with custom error map.");
      throw error;
    }
    const obj2 = { errorMap: null, description: null };
    if (errorMap) {
      obj2.errorMap = errorMap;
      obj2.description = description;
      obj3 = obj2;
    } else {
      obj2.errorMap = function errorMap(code, defaultError) {
        let obj;
        defaultError = message.message;
        if ("invalid_enum_value" === code.code) {
          if (null == defaultError) {
            defaultError = defaultError.defaultError;
          }
          obj = { message: defaultError };
          const obj2 = { message: defaultError };
        } else if (undefined === defaultError.data) {
          let defaultError3 = defaultError;
          if (null == defaultError) {
            defaultError3 = required_error;
          }
          if (null === defaultError3) {
            defaultError3 = defaultError.defaultError;
          }
          obj = { message: defaultError3 };
          const obj3 = { message: defaultError3 };
        } else if ("invalid_type" !== code.code) {
          obj = { message: defaultError.defaultError };
          const obj4 = { message: defaultError.defaultError };
        } else {
          let defaultError2 = defaultError;
          if (null == defaultError) {
            defaultError2 = invalid_type_error;
          }
          if (null === defaultError2) {
            defaultError2 = defaultError.defaultError;
          }
          obj = { message: defaultError2 };
        }
        return obj;
      };
      obj2.description = description;
      obj3 = obj2;
    }
  } else {
    obj3 = {};
  }
  const merged = Object.assign(obj3);
  const tmp2 = new tmp(obj);
  return tmp2;
};
let obj6 = { ZodString: "ZodString", ZodNumber: "ZodNumber", ZodNaN: "ZodNaN", ZodBigInt: "ZodBigInt", ZodBoolean: "ZodBoolean", ZodDate: "ZodDate", ZodSymbol: "ZodSymbol", ZodUndefined: "ZodUndefined", ZodNull: "ZodNull", ZodAny: "ZodAny", ZodUnknown: "ZodUnknown", ZodNever: "ZodNever", ZodVoid: "ZodVoid", ZodArray: "ZodArray", ZodObject: "ZodObject", ZodUnion: "ZodUnion", ZodDiscriminatedUnion: "ZodDiscriminatedUnion", ZodIntersection: "ZodIntersection", ZodTuple: "ZodTuple", ZodRecord: "ZodRecord", ZodMap: "ZodMap", ZodSet: "ZodSet", ZodFunction: "ZodFunction", ZodLazy: "ZodLazy", ZodLiteral: "ZodLiteral", ZodEnum: "ZodEnum", ZodEffects: "ZodEffects", ZodNativeEnum: "ZodNativeEnum", ZodOptional: "ZodOptional", ZodNullable: "ZodNullable", ZodDefault: "ZodDefault", ZodCatch: "ZodCatch", ZodPromise: "ZodPromise", ZodBranded: "ZodBranded", ZodPipeline: "ZodPipeline", ZodReadonly: "ZodReadonly" };
let create = _module2Result1.create;
const create2 = _module2Result2.create;
const create3 = _module2Result4.create;
({ create: exports.object, strictCreate: exports.strictObject } = _module2Result14);
const create4 = _module2Result28.create;
const ZodType_export = _module2Result;
const ZodString_export = _module2Result1;
const ZodNumber_export = _module2Result2;
const ZodBigInt_export = _module2Result3;
const ZodBoolean_export = _module2Result4;
const ZodDate_export = _module2Result5;
const ZodSymbol_export = _module2Result6;
const ZodUndefined_export = _module2Result7;
const ZodNull_export = _module2Result8;
const ZodAny_export = _module2Result9;
const ZodUnknown_export = _module2Result10;
const ZodNever_export = _module2Result11;
const ZodVoid_export = _module2Result12;
const ZodArray_export = _module2Result13;
const ZodObject_export = _module2Result14;
const ZodUnion_export = _module2Result15;
const ZodDiscriminatedUnion_export = _module2Result16;
const ZodIntersection_export = _module2Result17;
const ZodTuple_export = _module2Result18;
const ZodRecord_export = _module2Result19;
const ZodMap_export = _module2Result20;
const ZodSet_export = _module2Result21;
const ZodFunction_export = _module2Result22;
const ZodLazy_export = _module2Result23;
const ZodLiteral_export = _module2Result24;
const ZodEnum_export = _module2Result25;
const ZodNativeEnum_export = _module2Result26;
const ZodPromise_export = _module2Result27;
const ZodEffects_export = _module2Result28;
const ZodOptional_export = _module2Result29;
const ZodNullable_export = _module2Result30;
const ZodDefault_export = _module2Result31;
const ZodCatch_export = _module2Result32;
const ZodNaN_export = _module2Result33;
const ZodBranded_export = _module2Result34;
const ZodPipeline_export = _module2Result35;
const ZodReadonly_export = _module2Result36;
const date_export = _module2Result5.create;
const array_export = _module2Result13.create;
const promise_export = _module2Result27.create;
const optional_export = _module2Result29.create;
const nullable_export = _module2Result30.create;

export { ZodType_export as ZodType };
export const Schema = _module2Result;
export const ZodSchema = _module2Result;
export { datetimeRegex };
export { ZodString_export as ZodString };
export { ZodNumber_export as ZodNumber };
export { ZodBigInt_export as ZodBigInt };
export { ZodBoolean_export as ZodBoolean };
export { ZodDate_export as ZodDate };
export { ZodSymbol_export as ZodSymbol };
export { ZodUndefined_export as ZodUndefined };
export { ZodNull_export as ZodNull };
export { ZodAny_export as ZodAny };
export { ZodUnknown_export as ZodUnknown };
export { ZodNever_export as ZodNever };
export { ZodVoid_export as ZodVoid };
export { ZodArray_export as ZodArray };
export { ZodObject_export as ZodObject };
export { ZodUnion_export as ZodUnion };
export { ZodDiscriminatedUnion_export as ZodDiscriminatedUnion };
export { ZodIntersection_export as ZodIntersection };
export { ZodTuple_export as ZodTuple };
export { ZodRecord_export as ZodRecord };
export { ZodMap_export as ZodMap };
export { ZodSet_export as ZodSet };
export { ZodFunction_export as ZodFunction };
export { ZodLazy_export as ZodLazy };
export { ZodLiteral_export as ZodLiteral };
export { ZodEnum_export as ZodEnum };
export { ZodNativeEnum_export as ZodNativeEnum };
export { ZodPromise_export as ZodPromise };
export { ZodEffects_export as ZodEffects };
export const ZodTransformer = _module2Result28;
export { ZodOptional_export as ZodOptional };
export { ZodNullable_export as ZodNullable };
export { ZodDefault_export as ZodDefault };
export { ZodCatch_export as ZodCatch };
export { ZodNaN_export as ZodNaN };
export const BRAND = Symbol("zod_brand");
export { ZodBranded_export as ZodBranded };
export { ZodPipeline_export as ZodPipeline };
export { ZodReadonly_export as ZodReadonly };
export { custom };
export const late = { object: _module2Result14.lazycreate };
export const ZodFirstPartyTypeKind = obj6;
const instanceof_export = (name) => {
  let closure_0 = name;
  let obj = arg1;
  if (arg1 === undefined) {
    let obj2 = { message: "Input not instance of " + name.name };
    let tmp = globalThis;
    const _HermesInternal = HermesInternal;
    obj = obj2;
  }
  const f110757 = (arg0) => arg0 instanceof f110757;
  if (obj === undefined) {
    obj = {};
  }
  let c2;
  let obj3 = _module2Result9.create();
  return obj3.superRefine((arg0, addIssue) => {
    let closure_0 = arg0;
    const promise = closure_0(arg0);
    if (promise instanceof Promise) {
      return promise.then((result) => {
        const tmp = result;
        if (!tmp) {
          let tmp2Result;
          if (typeof message === "function") {
            tmp2Result = tmp2(tmp3);
          } else {
            tmp2Result = tmp2;
            if (typeof message === "string") {
              tmp2Result = { message };
              const obj2 = { message };
            }
          }
          let tmp5 = tmp2Result;
          if (typeof tmp2Result === "string") {
            tmp5 = { message: tmp2Result };
            const obj3 = { message: tmp2Result };
          }
          const fatal = tmp5.fatal ?? c2;
          message = { code: "custom", fatal: null === fatal || undefined === fatal || fatal };
          addIssue = addIssue.addIssue;
          const merged = Object.assign(tmp5);
          addIssue(message);
        }
      });
    } else if (!promise) {
      let tmpResult;
      let tmp = addIssue;
      if (typeof addIssue === "function") {
        tmpResult = tmp(arg0);
      } else {
        tmpResult = tmp;
        if (typeof tmp === "string") {
          let obj2 = { message: tmp };
          tmpResult = obj2;
        }
      }
      let tmp3 = tmpResult;
      if (typeof tmpResult === "string") {
        let obj3 = { message: tmpResult };
        tmp3 = obj3;
      }
      let fatal = tmp3.fatal ?? c2;
      let tmp5 = null === fatal || undefined === fatal || fatal;
      const obj = { code: "custom", fatal: tmp5 };
      addIssue = addIssue.addIssue;
      let merged = Object.assign(tmp3);
      addIssue(obj);
    }
  });
};
export { instanceof_export as instanceof };
export const string = create;
export const number = create2;
export const nan = _module2Result33.create;
export const bigint = _module2Result3.create;
export const boolean = create3;
export { date_export as date };
export const symbol = _module2Result6.create;
const undefined_export = _module2Result7.create;
export { undefined_export as undefined };
const null_export = _module2Result8.create;
export { null_export as null };
export const any = _module2Result9.create;
export const unknown = _module2Result10.create;
export const never = _module2Result11.create;
const void_export = _module2Result12.create;
export { void_export as void };
export { array_export as array };
export const union = _module2Result15.create;
export const discriminatedUnion = _module2Result16.create;
export const intersection = _module2Result17.create;
export const tuple = _module2Result18.create;
export const record = _module2Result19.create;
export const map = _module2Result20.create;
export const set = _module2Result21.create;
const function_export = _module2Result22.create;
export { function_export as function };
export const lazy = _module2Result23.create;
export const literal = _module2Result24.create;
const enum_export = _module2Result25.create;
export { enum_export as enum };
export const nativeEnum = _module2Result26.create;
export { promise_export as promise };
export const effect = create4;
export const transformer = create4;
export { optional_export as optional };
export { nullable_export as nullable };
export const preprocess = _module2Result28.createWithPreprocess;
export const pipeline = _module2Result35.create;
export const ostring = () => {
  const obj = create();
  return obj.optional();
};
export const onumber = () => {
  const obj = create2();
  return obj.optional();
};
export const oboolean = () => {
  const obj = create3();
  return obj.optional();
};
export const coerce = {
  string(arg0) {
    create = _module2Result1.create;
    const obj = { coerce: true };
    const merged = Object.assign(arg0);
    return create(obj);
  },
  number(arg0) {
    create = _module2Result2.create;
    const obj = { coerce: true };
    const merged = Object.assign(arg0);
    return create(obj);
  },
  boolean(arg0) {
    create = _module2Result4.create;
    const obj = { coerce: true };
    const merged = Object.assign(arg0);
    return create(obj);
  },
  bigint(arg0) {
    create = _module2Result3.create;
    const obj = { coerce: true };
    const merged = Object.assign(arg0);
    return create(obj);
  },
  date(arg0) {
    create = _module2Result5.create;
    const obj = { coerce: true };
    const merged = Object.assign(arg0);
    return create(obj);
  }
};
export const NEVER = DIRTY.INVALID;
