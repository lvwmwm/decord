// Module ID: 12070
// Function ID: 93947
// Name: _lt
// Dependencies: [65, 12015, 12069, 12014, 12013]

// Module 12070 (_lt)
import _toConsumableArray from "_toConsumableArray";

const self = this;
function _lt(value, message) {
  const ZodCheckLessThan = new closure_3.$ZodCheckLessThan(Object.assign({ check: "less_than" }, closure_6.normalizeParams(message), { value, inclusive: false }));
  return ZodCheckLessThan;
}
function _lte(value, message) {
  const ZodCheckLessThan = new closure_3.$ZodCheckLessThan(Object.assign({ check: "less_than" }, closure_6.normalizeParams(message), { value, inclusive: true }));
  return ZodCheckLessThan;
}
function _gt(value, message) {
  const ZodCheckGreaterThan = new closure_3.$ZodCheckGreaterThan(Object.assign({ check: "greater_than" }, closure_6.normalizeParams(message), { value, inclusive: false }));
  return ZodCheckGreaterThan;
}
function _gte(value, message) {
  const ZodCheckGreaterThan = new closure_3.$ZodCheckGreaterThan(Object.assign({ check: "greater_than" }, closure_6.normalizeParams(message), { value, inclusive: true }));
  return ZodCheckGreaterThan;
}
function _overwrite(tx) {
  const ZodCheckOverwrite = new closure_3.$ZodCheckOverwrite({ check: "overwrite", tx });
  return ZodCheckOverwrite;
}
function _check(check, message) {
  const ZodCheck = new closure_3.$ZodCheck(Object.assign({ check: "custom" }, closure_6.normalizeParams(message)));
  ZodCheck._zod.check = check;
  return ZodCheck;
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
    exports.TimePrecision = undefined;
    exports._string = function _string(ZodString, message) {
      return new ZodString(Object.assign({ type: "string" }, closure_6.normalizeParams(message)));
    };
    exports._coercedString = function _coercedString(ZodString, message) {
      return new ZodString(Object.assign({ type: "string", coerce: true }, closure_6.normalizeParams(message)));
    };
    exports._email = function _email(ZodEmail, message) {
      return new ZodEmail(Object.assign({ type: "string", format: "email", check: "string_format", abort: false }, closure_6.normalizeParams(message)));
    };
    exports._guid = function _guid(ZodGUID, message) {
      return new ZodGUID(Object.assign({ type: "string", format: "guid", check: "string_format", abort: false }, closure_6.normalizeParams(message)));
    };
    exports._uuid = function _uuid(ZodUUID, message) {
      return new ZodUUID(Object.assign({ type: "string", format: "uuid", check: "string_format", abort: false }, closure_6.normalizeParams(message)));
    };
    exports._uuidv4 = function _uuidv4(ZodUUID, message) {
      return new ZodUUID(Object.assign({ type: "string", format: "uuid", check: "string_format", abort: false, version: "v4" }, closure_6.normalizeParams(message)));
    };
    exports._uuidv6 = function _uuidv6(ZodUUID, message) {
      return new ZodUUID(Object.assign({ type: "string", format: "uuid", check: "string_format", abort: false, version: "v6" }, closure_6.normalizeParams(message)));
    };
    exports._uuidv7 = function _uuidv7(ZodUUID, message) {
      return new ZodUUID(Object.assign({ type: "string", format: "uuid", check: "string_format", abort: false, version: "v7" }, closure_6.normalizeParams(message)));
    };
    exports._url = function _url(ZodURL, LinkIcon) {
      return new ZodURL(Object.assign({ type: "string", format: "url", check: "string_format", abort: false }, closure_6.normalizeParams(LinkIcon)));
    };
    exports._emoji = function _emoji(ZodEmoji, message) {
      return new ZodEmoji(Object.assign({ type: "string", format: "emoji", check: "string_format", abort: false }, closure_6.normalizeParams(message)));
    };
    exports._nanoid = function _nanoid(ZodNanoID, message) {
      return new ZodNanoID(Object.assign({ type: "string", format: "nanoid", check: "string_format", abort: false }, closure_6.normalizeParams(message)));
    };
    exports._cuid = function _cuid(ZodCUID, message) {
      return new ZodCUID(Object.assign({ type: "string", format: "cuid", check: "string_format", abort: false }, closure_6.normalizeParams(message)));
    };
    exports._cuid2 = function _cuid2(ZodCUID2, message) {
      return new ZodCUID2(Object.assign({ type: "string", format: "cuid2", check: "string_format", abort: false }, closure_6.normalizeParams(message)));
    };
    exports._ulid = function _ulid(ZodULID, message) {
      return new ZodULID(Object.assign({ type: "string", format: "ulid", check: "string_format", abort: false }, closure_6.normalizeParams(message)));
    };
    exports._xid = function _xid(ZodXID, message) {
      return new ZodXID(Object.assign({ type: "string", format: "xid", check: "string_format", abort: false }, closure_6.normalizeParams(message)));
    };
    exports._ksuid = function _ksuid(ZodKSUID, message) {
      return new ZodKSUID(Object.assign({ type: "string", format: "ksuid", check: "string_format", abort: false }, closure_6.normalizeParams(message)));
    };
    exports._ipv4 = function _ipv4(ZodIPv4, message) {
      return new ZodIPv4(Object.assign({ type: "string", format: "ipv4", check: "string_format", abort: false }, closure_6.normalizeParams(message)));
    };
    exports._ipv6 = function _ipv6(ZodIPv6, message) {
      return new ZodIPv6(Object.assign({ type: "string", format: "ipv6", check: "string_format", abort: false }, closure_6.normalizeParams(message)));
    };
    exports._mac = function _mac(ZodMAC, message) {
      return new ZodMAC(Object.assign({ type: "string", format: "mac", check: "string_format", abort: false }, closure_6.normalizeParams(message)));
    };
    exports._cidrv4 = function _cidrv4(ZodCIDRv4, message) {
      return new ZodCIDRv4(Object.assign({ type: "string", format: "cidrv4", check: "string_format", abort: false }, closure_6.normalizeParams(message)));
    };
    exports._cidrv6 = function _cidrv6(ZodCIDRv6, message) {
      return new ZodCIDRv6(Object.assign({ type: "string", format: "cidrv6", check: "string_format", abort: false }, closure_6.normalizeParams(message)));
    };
    exports._base64 = function _base64(ZodBase64, message) {
      return new ZodBase64(Object.assign({ type: "string", format: "base64", check: "string_format", abort: false }, closure_6.normalizeParams(message)));
    };
    exports._base64url = function _base64url(ZodBase64URL, message) {
      return new ZodBase64URL(Object.assign({ type: "string", format: "base64url", check: "string_format", abort: false }, closure_6.normalizeParams(message)));
    };
    exports._e164 = function _e164(ZodE164, message) {
      return new ZodE164(Object.assign({ type: "string", format: "e164", check: "string_format", abort: false }, closure_6.normalizeParams(message)));
    };
    exports._jwt = function _jwt(ZodJWT, message) {
      return new ZodJWT(Object.assign({ type: "string", format: "jwt", check: "string_format", abort: false }, closure_6.normalizeParams(message)));
    };
    exports._isoDateTime = function _isoDateTime(ZodISODateTime, message) {
      return new ZodISODateTime(Object.assign({ type: "string", format: "datetime", check: "string_format", offset: false, local: false, precision: null }, closure_6.normalizeParams(message)));
    };
    exports._isoDate = function _isoDate(ZodISODate, message) {
      return new ZodISODate(Object.assign({ type: "string", format: "date", check: "string_format" }, closure_6.normalizeParams(message)));
    };
    exports._isoTime = function _isoTime(ZodISOTime, message) {
      return new ZodISOTime(Object.assign({ type: "string", format: "time", check: "string_format", precision: null }, closure_6.normalizeParams(message)));
    };
    exports._isoDuration = function _isoDuration(ZodISODuration, message) {
      return new ZodISODuration(Object.assign({ type: "string", format: "duration", check: "string_format" }, closure_6.normalizeParams(message)));
    };
    exports._number = function _number(ZodNumber, message) {
      return new ZodNumber(Object.assign({ type: "number", checks: [] }, closure_6.normalizeParams(message)));
    };
    exports._coercedNumber = function _coercedNumber(ZodNumber, message) {
      const obj = { type: "number", coerce: true, checks: [] };
      return new ZodNumber(Object.assign(obj, closure_6.normalizeParams(message)));
    };
    exports._int = function _int(ZodNumberFormat, message) {
      return new ZodNumberFormat(Object.assign({ type: "number", check: "number_format", abort: false, format: "safeint" }, closure_6.normalizeParams(message)));
    };
    exports._float32 = function _float32(ZodNumberFormat, message) {
      return new ZodNumberFormat(Object.assign({ type: "number", check: "number_format", abort: false, format: "float32" }, closure_6.normalizeParams(message)));
    };
    exports._float64 = function _float64(ZodNumberFormat, message) {
      return new ZodNumberFormat(Object.assign({ type: "number", check: "number_format", abort: false, format: "float64" }, closure_6.normalizeParams(message)));
    };
    exports._int32 = function _int32(ZodNumberFormat, message) {
      return new ZodNumberFormat(Object.assign({ type: "number", check: "number_format", abort: false, format: "int32" }, closure_6.normalizeParams(message)));
    };
    exports._uint32 = function _uint32(ZodNumberFormat, message) {
      return new ZodNumberFormat(Object.assign({ type: "number", check: "number_format", abort: false, format: "uint32" }, closure_6.normalizeParams(message)));
    };
    exports._boolean = function _boolean(ZodBoolean, message) {
      return new ZodBoolean(Object.assign({ type: "boolean" }, closure_6.normalizeParams(message)));
    };
    exports._coercedBoolean = function _coercedBoolean(ZodBoolean, message) {
      return new ZodBoolean(Object.assign({ type: "boolean", coerce: true }, closure_6.normalizeParams(message)));
    };
    exports._bigint = function _bigint(ZodBigInt, message) {
      return new ZodBigInt(Object.assign({ type: "bigint" }, closure_6.normalizeParams(message)));
    };
    exports._coercedBigint = function _coercedBigint(ZodBigInt, message) {
      return new ZodBigInt(Object.assign({ type: "bigint", coerce: true }, closure_6.normalizeParams(message)));
    };
    exports._int64 = function _int64(ZodBigIntFormat, message) {
      return new ZodBigIntFormat(Object.assign({ type: "bigint", check: "bigint_format", abort: false, format: "int64" }, closure_6.normalizeParams(message)));
    };
    exports._uint64 = function _uint64(ZodBigIntFormat, message) {
      return new ZodBigIntFormat(Object.assign({ type: "bigint", check: "bigint_format", abort: false, format: "uint64" }, closure_6.normalizeParams(message)));
    };
    exports._symbol = function _symbol(ZodSymbol, message) {
      return new ZodSymbol(Object.assign({ type: "symbol" }, closure_6.normalizeParams(message)));
    };
    exports._undefined = function _undefined(arg0, message) {
      return new arg0(Object.assign({ type: "undefined" }, closure_6.normalizeParams(message)));
    };
    exports._null = function _null(arg0, message) {
      return new arg0(Object.assign({ type: "null" }, closure_6.normalizeParams(message)));
    };
    exports._any = function _any(ZodAny) {
      return new ZodAny({ type: "any" });
    };
    exports._unknown = function _unknown(ZodUnknown) {
      return new ZodUnknown({ type: "unknown" });
    };
    exports._never = function _never(ZodNever, message) {
      return new ZodNever(Object.assign({ type: "never" }, closure_6.normalizeParams(message)));
    };
    exports._void = function _void(arg0, message) {
      return new arg0(Object.assign({ type: "void" }, closure_6.normalizeParams(message)));
    };
    exports._date = function _date(ZodDate, message) {
      return new ZodDate(Object.assign({ type: "date" }, closure_6.normalizeParams(message)));
    };
    exports._coercedDate = function _coercedDate(ZodDate, message) {
      return new ZodDate(Object.assign({ type: "date", coerce: true }, closure_6.normalizeParams(message)));
    };
    exports._nan = function _nan(ZodNaN, message) {
      return new ZodNaN(Object.assign({ type: "nan" }, closure_6.normalizeParams(message)));
    };
    exports._lt = _lt;
    exports._lte = _lte;
    exports._max = _lte;
    exports._lte = _lte;
    exports._max = _lte;
    exports._gt = _gt;
    exports._gte = _gte;
    exports._min = _gte;
    exports._gte = _gte;
    exports._min = _gte;
    exports._positive = function _positive(message) {
      return _gt(0, message);
    };
    exports._negative = function _negative(message) {
      return _lt(0, message);
    };
    exports._nonpositive = function _nonpositive(message) {
      return _lte(0, message);
    };
    exports._nonnegative = function _nonnegative(message) {
      return _gte(0, message);
    };
    exports._multipleOf = function _multipleOf(value, message) {
      const ZodCheckMultipleOf = new closure_3.$ZodCheckMultipleOf(Object.assign({ check: "multiple_of" }, closure_6.normalizeParams(message), { value }));
      return ZodCheckMultipleOf;
    };
    exports._maxSize = function _maxSize(maximum, message) {
      const ZodCheckMaxSize = new closure_3.$ZodCheckMaxSize(Object.assign({ check: "max_size" }, closure_6.normalizeParams(message), { maximum }));
      return ZodCheckMaxSize;
    };
    exports._minSize = function _minSize(minimum, message) {
      const ZodCheckMinSize = new closure_3.$ZodCheckMinSize(Object.assign({ check: "min_size" }, closure_6.normalizeParams(message), { minimum }));
      return ZodCheckMinSize;
    };
    exports._size = function _size(size, message) {
      const ZodCheckSizeEquals = new closure_3.$ZodCheckSizeEquals(Object.assign({ check: "size_equals" }, closure_6.normalizeParams(message), { size }));
      return ZodCheckSizeEquals;
    };
    exports._maxLength = function _maxLength(maximum, message) {
      const ZodCheckMaxLength = new closure_3.$ZodCheckMaxLength(Object.assign({ check: "max_length" }, closure_6.normalizeParams(message), { maximum }));
      return ZodCheckMaxLength;
    };
    exports._minLength = function _minLength(minimum, message) {
      const ZodCheckMinLength = new closure_3.$ZodCheckMinLength(Object.assign({ check: "min_length" }, closure_6.normalizeParams(message), { minimum }));
      return ZodCheckMinLength;
    };
    exports._length = function _length(length, message) {
      const ZodCheckLengthEquals = new closure_3.$ZodCheckLengthEquals(Object.assign({ check: "length_equals" }, closure_6.normalizeParams(message), { length }));
      return ZodCheckLengthEquals;
    };
    exports._regex = function _regex(pattern, message) {
      const ZodCheckRegex = new closure_3.$ZodCheckRegex(Object.assign({ check: "string_format", format: "regex" }, closure_6.normalizeParams(message), { pattern }));
      return ZodCheckRegex;
    };
    exports._lowercase = function _lowercase(message) {
      const ZodCheckLowerCase = new closure_3.$ZodCheckLowerCase(Object.assign({ check: "string_format", format: "lowercase" }, closure_6.normalizeParams(message)));
      return ZodCheckLowerCase;
    };
    exports._uppercase = function _uppercase(message) {
      const ZodCheckUpperCase = new closure_3.$ZodCheckUpperCase(Object.assign({ check: "string_format", format: "uppercase" }, closure_6.normalizeParams(message)));
      return ZodCheckUpperCase;
    };
    exports._includes = function _includes(includes, message) {
      const ZodCheckIncludes = new closure_3.$ZodCheckIncludes(Object.assign({ check: "string_format", format: "includes" }, closure_6.normalizeParams(message), { includes }));
      return ZodCheckIncludes;
    };
    exports._startsWith = function _startsWith(prefix, message) {
      const ZodCheckStartsWith = new closure_3.$ZodCheckStartsWith(Object.assign({ check: "string_format", format: "starts_with" }, closure_6.normalizeParams(message), { prefix }));
      return ZodCheckStartsWith;
    };
    exports._endsWith = function _endsWith(suffix, message) {
      const ZodCheckEndsWith = new closure_3.$ZodCheckEndsWith(Object.assign({ check: "string_format", format: "ends_with" }, closure_6.normalizeParams(message), { suffix }));
      return ZodCheckEndsWith;
    };
    exports._property = function _property(property, schema, message) {
      const ZodCheckProperty = new closure_3.$ZodCheckProperty(Object.assign({ check: "property", property, schema }, closure_6.normalizeParams(message)));
      return ZodCheckProperty;
    };
    exports._mime = function _mime(mime, message) {
      const ZodCheckMimeType = new closure_3.$ZodCheckMimeType(Object.assign({ check: "mime_type", mime }, closure_6.normalizeParams(message)));
      return ZodCheckMimeType;
    };
    exports._overwrite = _overwrite;
    exports._normalize = function _normalize(arg0) {
      let closure_0 = arg0;
      return _overwrite((str) => str.normalize(closure_0));
    };
    exports._trim = function _trim() {
      return _overwrite((str) => str.trim());
    };
    exports._toLowerCase = function _toLowerCase() {
      return _overwrite((str) => str.toLowerCase());
    };
    exports._toUpperCase = function _toUpperCase() {
      return _overwrite((str) => str.toUpperCase());
    };
    exports._slugify = function _slugify() {
      return _overwrite((arg0) => outer1_6.slugify(arg0));
    };
    exports._array = function _array(ZodArray, element, message) {
      return new ZodArray(Object.assign({ type: "array", element }, closure_6.normalizeParams(message)));
    };
    exports._union = function _union(arg0, options, message) {
      return new arg0(Object.assign({ type: "union", options }, closure_6.normalizeParams(message)));
    };
    exports._xor = function _xor(arg0, options, message) {
      const obj = { type: "union", options, inclusive: false };
      return new arg0(Object.assign(obj, closure_6.normalizeParams(message)));
    };
    exports._discriminatedUnion = function _discriminatedUnion(arg0, discriminator, options, message) {
      return new arg0(Object.assign({ type: "union", options, discriminator }, closure_6.normalizeParams(message)));
    };
    exports._intersection = function _intersection(arg0, left, right) {
      return new arg0({ type: "intersection", left, right });
    };
    exports._tuple = function _tuple(arg0, items, arg2, message) {
      let tmp2 = arg2;
      if (arg2 instanceof ZodType.$ZodType) {
        tmp2 = message;
      }
      let tmp3 = null;
      if (arg2 instanceof ZodType.$ZodType) {
        tmp3 = arg2;
      }
      const obj = { type: "tuple", items, rest: tmp3 };
      return new arg0(Object.assign(obj, closure_6.normalizeParams(tmp2)));
    };
    exports._record = function _record(arg0, keyType, valueType, message) {
      return new arg0(Object.assign({ type: "record", keyType, valueType }, closure_6.normalizeParams(message)));
    };
    exports._map = function _map(arg0, keyType, valueType, message) {
      return new arg0(Object.assign({ type: "map", keyType, valueType }, closure_6.normalizeParams(message)));
    };
    exports._set = function _set(arg0, valueType, message) {
      return new arg0(Object.assign({ type: "set", valueType }, closure_6.normalizeParams(message)));
    };
    exports._enum = function _enum(arg0, arr, message) {
      let fromEntriesResult = arr;
      if (Array.isArray(arr)) {
        const _Object = Object;
        fromEntriesResult = Object.fromEntries(arr.map((arg0) => {
          const items = [arg0, arg0];
          return items;
        }));
      }
      const obj = { type: "enum", entries: fromEntriesResult };
      return new arg0(Object.assign(obj, closure_6.normalizeParams(message)));
    };
    exports._nativeEnum = function _nativeEnum(arg0, entries, message) {
      return new arg0(Object.assign({ type: "enum", entries }, closure_6.normalizeParams(message)));
    };
    exports._literal = function _literal(arg0, arg1, message) {
      const obj = { type: "literal" };
      let tmp = arg1;
      if (!Array.isArray(arg1)) {
        const items = [arg1];
        tmp = items;
      }
      obj.values = tmp;
      return new arg0(Object.assign(obj, closure_6.normalizeParams(message)));
    };
    exports._file = function _file(ZodFile, message) {
      return new ZodFile(Object.assign({ type: "file" }, closure_6.normalizeParams(message)));
    };
    exports._transform = function _transform(arg0, transform) {
      return new arg0({ type: "transform", transform });
    };
    exports._optional = function _optional(arg0, innerType) {
      return new arg0({ type: "optional", innerType });
    };
    exports._nullable = function _nullable(arg0, innerType) {
      return new arg0({ type: "nullable", innerType });
    };
    exports._default = function _default(arg0, innerType) {
      let closure_0 = arg2;
      const obj = { type: "default", innerType };
      Object.defineProperty(obj, "defaultValue", {
        get: () => {
          if ("function" === typeof callback) {
            let shallowCloneResult = callback();
          } else {
            shallowCloneResult = outer1_6.shallowClone(callback);
          }
          return shallowCloneResult;
        },
        set: undefined
      });
      return new arg0(obj);
    };
    exports._nonoptional = function _nonoptional(arg0, innerType, message) {
      return new arg0(Object.assign({ type: "nonoptional", innerType }, closure_6.normalizeParams(message)));
    };
    exports._success = function _success(arg0, innerType) {
      return new arg0({ type: "success", innerType });
    };
    exports._catch = function _catch(arg0, innerType) {
      let fn = arg2;
      let closure_0 = arg2;
      const obj = { type: "catch", innerType };
      if ("function" !== typeof arg2) {
        fn = () => closure_0;
      }
      obj.catchValue = fn;
      return new arg0(obj);
    };
    exports._pipe = function _pipe(arg0, arg1, out) {
      return new arg0({ type: "pipe", in: arg1, out });
    };
    exports._readonly = function _readonly(arg0, innerType) {
      return new arg0({ type: "readonly", innerType });
    };
    exports._templateLiteral = function _templateLiteral(arg0, parts, message) {
      return new arg0(Object.assign({ type: "template_literal", parts }, closure_6.normalizeParams(message)));
    };
    exports._lazy = function _lazy(arg0, getter) {
      return new arg0({ type: "lazy", getter });
    };
    exports._promise = function _promise(arg0, innerType) {
      return new arg0({ type: "promise", innerType });
    };
    exports._custom = function _custom(ZodCustom, fn, message) {
      const normalizeParamsResult = closure_6.normalizeParams(message);
      if (null == normalizeParamsResult.abort) {
        normalizeParamsResult.abort = true;
      }
      const obj = { type: "custom", check: "custom", fn };
      return new ZodCustom(Object.assign(obj, normalizeParamsResult));
    };
    exports._refine = function _refine(ZodCustom, fn, message) {
      const obj = { type: "custom", check: "custom", fn };
      return new ZodCustom(Object.assign(obj, closure_6.normalizeParams(message)));
    };
    exports._superRefine = function _superRefine(arg0) {
      let closure_0 = arg0;
      const tmp = _check((value) => {
        const callback = value;
        value.addIssue = (fatal) => {
          if ("string" === typeof fatal) {
            const issues = value.issues;
            issues.push(outer2_6.issue(fatal, value.value, outer1_1._zod.def));
          } else {
            if (fatal.fatal) {
              fatal.continue = false;
            }
            if (null == fatal.code) {
              fatal.code = "custom";
            }
            if (null == fatal.input) {
              fatal.input = value.value;
            }
            if (null == fatal.inst) {
              fatal.inst = outer1_1;
            }
            if (null == fatal.continue) {
              fatal.continue = !outer1_1._zod.def.abort;
            }
            const issues1 = value.issues;
            issues1.push(outer2_6.issue(fatal));
          }
        };
        return callback(value.value, value);
      });
      const self2 = tmp;
      return tmp;
    };
    exports._check = _check;
    exports.describe = function describe(arg0) {
      let closure_0 = arg0;
      const ZodCheck = new closure_3.$ZodCheck({ check: "describe" });
      const items = [
        (arg0) => {
          const globalRegistry = outer1_4.globalRegistry;
          let obj = globalRegistry.get(arg0);
          if (null == obj) {
            obj = {};
          }
          const globalRegistry2 = outer1_4.globalRegistry;
          obj = { description: closure_0 };
          globalRegistry2.add(arg0, Object.assign({}, obj, obj));
        }
      ];
      ZodCheck._zod.onattach = items;
      ZodCheck._zod.check = () => {

      };
      return ZodCheck;
    };
    exports.meta = function meta(arg0) {
      let closure_0 = arg0;
      const ZodCheck = new closure_3.$ZodCheck({ check: "meta" });
      const items = [
        (arg0) => {
          const globalRegistry = outer1_4.globalRegistry;
          let obj = globalRegistry.get(arg0);
          if (null == obj) {
            obj = {};
          }
          const globalRegistry2 = outer1_4.globalRegistry;
          globalRegistry2.add(arg0, Object.assign({}, obj, closure_0));
        }
      ];
      ZodCheck._zod.onattach = items;
      ZodCheck._zod.check = () => {

      };
      return ZodCheck;
    };
    exports._stringbool = function _stringbool(Codec, message) {
      const normalizeParamsResult = closure_6.normalizeParams(message);
      const _toConsumableArray = normalizeParamsResult;
      let truthy = normalizeParamsResult.truthy;
      if (null == truthy) {
        truthy = ["true", "1", "yes", "on", "y", "enabled"];
      }
      let mapped = truthy;
      let falsy = normalizeParamsResult.falsy;
      if (null == falsy) {
        falsy = ["false", "0", "no", "off", "n", "disabled"];
      }
      let mapped1 = falsy;
      let tmp2 = truthy;
      let tmp3 = falsy;
      if ("sensitive" !== normalizeParamsResult.case) {
        mapped = truthy.map((str) => {
          let formatted = str;
          if ("string" === typeof str) {
            formatted = str.toLowerCase();
          }
          return formatted;
        });
        mapped1 = falsy.map((str) => {
          let formatted = str;
          if ("string" === typeof str) {
            formatted = str.toLowerCase();
          }
          return formatted;
        });
        tmp2 = mapped;
        tmp3 = mapped1;
      }
      const set = new Set(tmp2);
      const set1 = new Set(tmp3);
      let $ZodCodec = Codec.Codec;
      if (null == $ZodCodec) {
        $ZodCodec = ZodCodec.$ZodCodec;
      }
      let $ZodBoolean = Codec.Boolean;
      if (null == $ZodBoolean) {
        $ZodBoolean = ZodCodec.$ZodBoolean;
      }
      let $ZodString = Codec.String;
      if (null == $ZodString) {
        $ZodString = ZodCodec.$ZodString;
      }
      let obj = { type: "string", error: normalizeParamsResult.error };
      const ZodString = new $ZodString(obj);
      obj = { type: "boolean", error: normalizeParamsResult.error };
      const ZodBoolean = new $ZodBoolean(obj);
      obj = {
        type: "pipe",
        in: ZodString,
        out: ZodBoolean,
        transform(str, issues) {
          let formatted = str;
          if ("sensitive" !== normalizeParamsResult.case) {
            formatted = str.toLowerCase();
          }
          const tmp2 = !set.has(formatted);
          let tmp3 = !tmp2;
          if (tmp2) {
            let obj = !set1.has(formatted);
            if (obj) {
              issues = issues.issues;
              obj = { code: "invalid_value", expected: "stringbool" };
              const items = [];
              obj.values = items.concat(normalizeParamsResult(set), normalizeParamsResult(set1));
              obj.input = issues.value;
              obj.inst = ZodCodec;
              obj.continue = false;
              issues.push(obj);
              obj = {};
              const tmp7 = normalizeParamsResult(set);
            }
            tmp3 = obj;
          }
          return tmp3;
        },
        reverseTransform(value, issues) {
          if (true === value) {
            let tmp2 = mapped[0] || "true";
            const tmp4 = mapped[0] || "true";
          } else {
            tmp2 = mapped1[0] || "false";
          }
          return tmp2;
        },
        error: normalizeParamsResult.error
      };
      ZodCodec = new $ZodCodec(obj);
      return ZodCodec;
    };
    exports._stringFormat = function _stringFormat(ZodCustomStringFormat, combined, hex, enc) {
      let closure_0 = hex;
      if (arguments.length > 3) {
        if (undefined !== arguments[3]) {
          let obj = arguments[3];
        }
        const normalizeParamsResult = closure_6.normalizeParams(obj);
        const _Object = Object;
        const normalizeParamsResult1 = closure_6.normalizeParams(obj);
        obj = { check: "string_format", type: "string", format: combined };
        let fn = hex;
        if ("function" !== typeof hex) {
          fn = (arg0) => hex.test(arg0);
        }
        obj.fn = fn;
        const merged = Object.assign({}, normalizeParamsResult1, obj, normalizeParamsResult);
        const _RegExp = RegExp;
        if (hex instanceof RegExp) {
          merged.pattern = hex;
        }
        const prototype = ZodCustomStringFormat.prototype;
        const tmp15 = new ZodCustomStringFormat(merged);
        return tmp15;
      }
      obj = {};
    };
    let closure_3 = fn(require("module_12015"));
    let closure_4 = fn(require("registry"));
    let closure_5 = fn(require("isValidBase64"));
    let closure_6 = fn(require("cached"));
    exports.TimePrecision = { Any: null, Minute: -1, Second: 0, Millisecond: 3, Microsecond: 6 };
  } else {
    const _Object2 = Object;
  }
} else {
  let _Object = Object;
}
