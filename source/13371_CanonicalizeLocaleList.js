// Module ID: 13371
// Function ID: 102478
// Name: CanonicalizeLocaleList
// Dependencies: [65, 164, 6, 7, 13372]

// Module 13371 (CanonicalizeLocaleList)
import _toConsumableArray from "_toConsumableArray";
import _construct from "_construct";
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

let require = arg1;
function CanonicalizeLocaleList(items) {
  return Intl.getCanonicalLocales(items);
}
function GetOption(arg0, arg1, arg2, arr) {
  if ("object" !== typeof arg0) {
    const _TypeError3 = TypeError;
    const typeError = new TypeError("Options must be an object");
    throw typeError;
  } else {
    let require = tmp23;
    if (undefined !== arg0[arg1]) {
      if ("boolean" !== arg2) {
        if ("string" !== arg2) {
          const _TypeError2 = TypeError;
          const typeError1 = new TypeError("invalid type");
          throw typeError1;
        }
      }
      let tmp2 = tmp23;
      if ("boolean" === arg2) {
        const _Boolean = Boolean;
        const BooleanResult = Boolean(tmp23);
        require = BooleanResult;
        tmp2 = BooleanResult;
      }
      let tmp5 = tmp2;
      if ("string" === arg2) {
        if ("symbol" === typeof tmp2) {
          const _TypeError = TypeError;
          throw TypeError("Cannot convert a Symbol value to a string");
        } else {
          const _String = String;
          const StringResult = String(tmp2);
          require = StringResult;
          tmp5 = StringResult;
        }
      }
      if (undefined !== arr) {
        if (!arr.filter((arg0) => arg0 == closure_0).length) {
          const _RangeError = RangeError;
          const _HermesInternal = HermesInternal;
          const rangeError = new RangeError("" + tmp5 + " is not within " + arr.join(", "));
          throw rangeError;
        }
      }
      return tmp5;
    } else {
      return arg4;
    }
  }
}
function memoize(arg0, cache) {
  return cache.strategy ? cache.strategy : strategyDefault(arg0, { cache: cache.cache || closure_8, serializer: cache.serializer || serializerDefault });
}
function monadic(call, get) {
  let tmp = null == arg3;
  if (!tmp) {
    tmp = "number" === typeof arg3;
  }
  if (!tmp) {
    tmp = "boolean" === typeof arg3;
  }
  let tmp2 = arg3;
  if (!tmp) {
    tmp2 = arg2(arg3);
  }
  let value = get.get(tmp2);
  if (undefined === value) {
    const self = this;
    const callResult = call.call(this, arg3);
    const result = get.set(tmp2, callResult);
    value = callResult;
  }
  return value;
}
function variadic(apply, get) {
  const callResult = slice.call(arguments, 3);
  const tmp2 = arg2(callResult);
  let value = get.get(tmp2);
  if (undefined === value) {
    const self = this;
    const applyResult = apply.apply(this, callResult);
    const result = get.set(tmp2, applyResult);
    value = applyResult;
  }
  return value;
}
function assemble(c101, iter, bind, queue, bindResult1) {
  return bind.bind(iter, c101, queue, bindResult1);
}
function strategyDefault(arg0, cache) {
  cache = cache.cache;
  return assemble(arg0, this, 1 === arg0.length ? monadic : variadic, cache.create(), cache.serializer);
}
function setInternalSlot(get) {
  if (!get.get(arg1)) {
    const _Object = Object;
    const result = get.set(arg1, Object.create(null));
  }
  get.get(arg1)[arg2] = arg3;
}
function getInternalSlot(get) {
  return (function getMultiInternalSlots(get, arg1, arg2) {
    const value = get.get(arg1);
    let closure_0 = value;
    if (value) {
      const length = arguments.length;
      let _Array = Array;
      let num2 = 0;
      if (length > 2) {
        num2 = length - 2;
      }
      const prototype2 = _Array.prototype;
      _Array = new _Array(num2);
      for (let num3 = 2; num3 < length; num3 = num3 + 1) {
        _Array[num3 - 2] = arguments[num3];
      }
      const _Object = Object;
      return _Array.reduce((arg0, arg1) => {
        arg0[arg1] = value[arg1];
        return arg0;
      }, Object.create(null));
    } else {
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("" + arg1 + " InternalSlot has not been initialized");
      throw typeError;
    }
  })(get, arg1, arg2)[arg2];
}
function isLiteralPart(type) {
  return "literal" === type.type;
}
function invariant(arg0, arg1) {
  if (arguments.length > 2) {
    if (undefined !== arguments[2]) {
      let _Error = arguments[2];
    }
    if (!arg0) {
      const prototype = _Error.prototype;
      _Error = new _Error(arg1);
      throw _Error;
    }
  }
  _Error = Error;
}
function SupportedLocales(arg0, arg1, arg2) {
  if (undefined !== arg2) {
    if (null == arg2) {
      const _TypeError = TypeError;
      const typeError = new TypeError("undefined/null cannot be converted to object");
      throw typeError;
    } else {
      const _Object = Object;
      tmp(Object(arg2), "localeMatcher", "string", ["lookup", "best fit"], "best fit");
    }
  }
  return require(13372) /* invariant */.LookupSupportedLocales(Array.from(arg0), arg1);
}
function validateInstance(arg0, arg1) {
  if (!(arg0 instanceof closure_9)) {
    const _TypeError = TypeError;
    const _String = String;
    const _HermesInternal = HermesInternal;
    const typeError = new TypeError("Method Intl.ListFormat.prototype." + arg1 + " called on incompatible receiver " + String(arg0));
    throw typeError;
  }
}
function stringListFromIterable(arg0) {
  if ("object" !== typeof arg0) {
    return [];
  } else {
    const items = [];
    const _Symbol = Symbol;
    const iter3 = arg0[Symbol.iterator]();
    const iter4 = iter3.next();
    let iter2 = iter4;
    if (!iter4.done) {
      while ("string" === typeof iter2.value) {
        let arr = items.push(iter2.value);
        let iter = iter3.next();
        iter2 = iter;
      }
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("Iterable yielded " + iter2.value + " which is not a string");
      throw typeError;
    }
    return items;
  }
}
function createPartsFromList(arg0, arg1, arg2) {
  if (0 === arg2.length) {
    return [];
  } else if (2 === length) {
    let obj = {};
    obj = { type: "element", value: arg2[0] };
    obj[0] = obj;
    const obj1 = { type: "element", value: arg2[1] };
    obj[1] = obj1;
    return deconstructPattern(getInternalSlot(arg0, arg1, "templatePair"), obj);
  } else {
    const obj2 = { type: "element", value: arg2[length - 1] };
    let diff = length - 2;
    let tmpResult = obj2;
    let tmp5 = obj2;
    if (diff >= 0) {
      do {
        let str = "templateStart";
        let tmp = deconstructPattern;
        let tmp2 = getInternalSlot;
        if (0 !== diff) {
          let str2 = "templateEnd";
          if (diff < length - 2) {
            str2 = "templateMiddle";
          }
          str = str2;
        }
        obj = {};
        let obj3 = { type: "element", value: arg2[diff] };
        obj[0] = obj3;
        obj[1] = tmpResult;
        tmpResult = tmp(tmp2(arg0, arg1, str), obj);
        diff = diff - 1;
        tmp5 = tmpResult;
      } while (diff >= 0);
    }
    return tmp5;
  }
}
function deconstructPattern(internalSlot, arg1) {
  const items = [];
  const index = internalSlot.indexOf("{");
  let num = 0;
  if (index < internalSlot.length) {
    let tmp3 = index;
    let num4 = 0;
    num = 0;
    if (index > -1) {
      while (true) {
        let tmp4 = invariant;
        let index1 = internalSlot.indexOf("}", tmp3);
        let _HermesInternal = HermesInternal;
        let tmp6 = index1 > tmp3;
        let tmp7 = invariant(tmp6, "Invalid pattern " + internalSlot);
        let tmp8 = tmp3;
        if (tmp3 > num4) {
          let obj = { type: "literal", value: internalSlot.substring(num4, tmp3) };
          let arr = items.push(obj);
        }
        obj = { type: internalSlot.substring(tmp3 + 1, index1), value: undefined };
        arr = items.push(obj);
        let sum = index1 + 1;
        let index2 = internalSlot.indexOf("{", sum);
        num = sum;
        if (index2 >= internalSlot.length) {
          break;
        } else {
          num4 = sum;
          num = sum;
          tmp3 = index2;
          if (index2 <= -1) {
            break;
          }
        }
      }
    }
  }
  if (num < internalSlot.length) {
    obj = { type: "literal", value: internalSlot.substring(num, length) };
    items.push(obj);
  }
  const items1 = [];
  const iter = items[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let type = nextResult.type;
    let tmp31 = isLiteralPart;
    let iter2 = nextResult;
    if (isLiteralPart(nextResult)) {
      let tmp28 = items1;
      let obj1 = { type: "literal" };
      let tmp29 = nextResult;
      obj1.value = iter2.value;
      let arr2 = items1.push(obj1);
    } else {
      let tmp15 = invariant;
      let tmp16 = type;
      let tmp17 = arg1;
      let _HermesInternal2 = HermesInternal;
      let tmp18 = type in arg1;
      let tmp19 = invariant(tmp18, "" + type + " is missing from placables");
      let tmp20 = arg1[type];
      let tmp21 = tmp20;
      let _Array = Array;
      let tmp22 = items1;
      let push = items1.push;
      if (Array.isArray(tmp20)) {
        let tmp25 = callback;
        let tmp26 = tmp20;
        let applyResult = push.apply(items1, callback(tmp21));
      } else {
        let tmp23 = tmp20;
        let arr3 = push(tmp21);
      }
    }
    continue;
  }
  return items1;
}
function serializerDefault() {
  return JSON.stringify(arguments);
}
let closure_7 = (() => {
  class ObjectWithoutPrototypeCache {
    constructor() {
      tmp = outer1_4(this, ObjectWithoutPrototypeCache);
      this.cache = Object.create(null);
      return;
    }
  }
  let obj = {
    key: "get",
    value: function get(arg0) {
      return this.cache[arg0];
    }
  };
  const items = [obj, ];
  obj = {
    key: "set",
    value: function set(arg0, arg1) {
      this.cache[arg0] = arg1;
    }
  };
  items[1] = obj;
  return callback3(ObjectWithoutPrototypeCache, items);
})();
let closure_8 = {
  create() {
    return new closure_7();
  }
};
let obj = {
  variadic: function strategyVariadic(arg0, cache) {
    cache = cache.cache;
    return assemble(arg0, this, variadic, cache.create(), cache.serializer);
  },
  monadic: function strategyMonadic(arg0, cache) {
    cache = cache.cache;
    return assemble(arg0, this, monadic, cache.create(), cache.serializer);
  }
};
obj = { strategy: obj.variadic };
memoize(() => {
  const length = arguments.length;
  const array = new Array(length);
  for (let num = 0; num < length; num = num + 1) {
    array[num] = arguments[num];
  }
  return callback2(Intl.NumberFormat, array);
}, obj);
obj = { strategy: obj.variadic };
memoize(() => {
  const length = arguments.length;
  const array = new Array(length);
  for (let num = 0; num < length; num = num + 1) {
    array[num] = arguments[num];
  }
  return callback2(Intl.PluralRules, array);
}, obj);
memoize(() => {
  const length = arguments.length;
  const array = new Array(length);
  for (let num = 0; num < length; num = num + 1) {
    array[num] = arguments[num];
  }
  return callback2(Intl.Locale, array);
}, { strategy: obj.variadic });
memoize(() => {
  const length = arguments.length;
  const array = new Array(length);
  for (let num = 0; num < length; num = num + 1) {
    array[num] = arguments[num];
  }
  return callback2(Intl.ListFormat, array);
}, { strategy: obj.variadic });
let tmp6 = (() => {
  class ListFormat {
    constructor(arg0, arg1) {
      obj1 = arg1;
      self = this;
      tmp2 = outer1_4(this, ListFormat);
      constructor = undefined;
      if (this) {
        tmp4 = ListFormat;
        if (self instanceof ListFormat) {
          constructor = self.constructor;
        }
      }
      if (constructor) {
        tmp10 = outer1_16;
        tmp11 = ListFormat;
        str2 = "initializedListFormat";
        flag = true;
        tmp12 = self;
        tmp13 = outer1_16(ListFormat.__INTERNAL_SLOT_MAP__, self, "initializedListFormat", true);
        tmp14 = outer1_10;
        tmp15 = arg0;
        tmp16 = outer1_10(arg0);
        tmp17 = globalThis;
        _Object = Object;
        tmp18 = null;
        obj = Object.create(null);
        if (undefined === obj1) {
          _Object2 = Object;
          obj1 = Object.create(null);
        } else {
          str3 = "object";
          if ("object" !== typeof obj1) {
            _TypeError2 = TypeError;
            prototype2 = TypeError.prototype;
            tmp20 = new.target;
            str4 = "Options must be an object";
            tmp21 = new.target;
            typeError = new TypeError("Options must be an object");
            tmp23 = typeError;
            throw typeError;
          }
        }
        tmp24 = outer1_11;
        str5 = "localeMatcher";
        str6 = "string";
        str7 = "best fit";
        tmp25 = obj1;
        str8 = "string";
        obj.localeMatcher = outer1_11(obj1, "localeMatcher", "string", ["best fit", "lookup"], "best fit");
        localeData = tmp11.localeData;
        tmp26 = ListFormat;
        tmp27 = outer1_1;
        num = 4;
        obj = ListFormat(outer1_1[4]);
        tmp28 = obj;
        tmp29 = tmp16;
        tmp30 = obj;
        tmp31 = localeData;
        ResolveLocaleResult = obj.ResolveLocale(tmp11.availableLocales, tmp16, obj, tmp11.relevantExtensionKeys, localeData, tmp11.getDefaultLocale);
        str9 = "locale";
        tmp33 = self;
        tmp10Result = tmp10(tmp11.__INTERNAL_SLOT_MAP__, self, "locale", ResolveLocaleResult.locale);
        str10 = "type";
        str11 = "conjunction";
        tmp35 = obj1;
        str12 = "type";
        str13 = "string";
        tmp36 = outer1_11(obj1, "type", "string", ["conjunction", "disjunction", "unit"], "conjunction");
        tmp37 = self;
        str14 = "type";
        tmp38 = tmp36;
        tmp10Result1 = tmp10(tmp11.__INTERNAL_SLOT_MAP__, self, "type", tmp36);
        str15 = "style";
        str16 = "long";
        tmp40 = obj1;
        str17 = "style";
        str18 = "string";
        tmp41 = outer1_11(obj1, "style", "string", ["long", "short", "narrow"], "long");
        tmp42 = self;
        str19 = "style";
        tmp43 = tmp41;
        tmp10Result2 = tmp10(tmp11.__INTERNAL_SLOT_MAP__, self, "style", tmp41);
        dataLocale = ResolveLocaleResult.dataLocale;
        tmp45 = localeData[dataLocale];
        tmp46 = outer1_19;
        _HermesInternal = HermesInternal;
        str20 = "Missing locale data for ";
        tmp47 = !tmp45;
        tmp48 = outer1_19(!tmp47, "Missing locale data for " + dataLocale);
        tmp49 = tmp45[tmp36][tmp41];
        str21 = "templatePair";
        tmp50 = self;
        tmp10Result3 = tmp10(tmp11.__INTERNAL_SLOT_MAP__, self, "templatePair", tmp49.pair);
        str22 = "templateStart";
        tmp52 = self;
        tmp10Result4 = tmp10(tmp11.__INTERNAL_SLOT_MAP__, self, "templateStart", tmp49.start);
        str23 = "templateMiddle";
        tmp54 = self;
        tmp10Result5 = tmp10(tmp11.__INTERNAL_SLOT_MAP__, self, "templateMiddle", tmp49.middle);
        str24 = "templateEnd";
        tmp56 = self;
        tmp10Result6 = tmp10(tmp11.__INTERNAL_SLOT_MAP__, self, "templateEnd", tmp49.end);
        return;
      } else {
        tmp5 = globalThis;
        _TypeError = TypeError;
        prototype = TypeError.prototype;
        tmp6 = new.target;
        str = "Intl.ListFormat must be called with 'new'";
        tmp7 = new.target;
        typeError1 = new TypeError("Intl.ListFormat must be called with 'new'");
        tmp9 = typeError1;
        throw typeError1;
      }
    }
  }
  let obj = {
    key: "format",
    value: function format(arg0) {
      outer1_21(this, "format");
      let str = "";
      const iter = outer1_23(ListFormat.__INTERNAL_SLOT_MAP__, this, outer1_22(arg0));
      if (Array.isArray(iter)) {
        for (const item10021 of iter) {
          let tmp3 = str;
          str = `${item10021.value}`;
          continue;
        }
        return str;
      } else {
        return iter.value;
      }
    }
  };
  let items = [obj, , ];
  obj = {
    key: "formatToParts",
    value: function formatToParts(arg0) {
      outer1_21(this, "format");
      const tmp2 = outer1_23(ListFormat.__INTERNAL_SLOT_MAP__, this, outer1_22(arg0));
      if (Array.isArray(tmp2)) {
        const items = [];
        for (const item10021 of tmp2) {
          let tmp4 = items;
          let _Object = Object;
          let arr = items.push(Object.assign({}, item10021));
          continue;
        }
        return items;
      } else {
        const items1 = [tmp2];
        return items1;
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "resolvedOptions",
    value: function resolvedOptions() {
      outer1_21(this, "resolvedOptions");
      return { locale: outer1_17(ListFormat.__INTERNAL_SLOT_MAP__, this, "locale"), type: outer1_17(ListFormat.__INTERNAL_SLOT_MAP__, this, "type"), style: outer1_17(ListFormat.__INTERNAL_SLOT_MAP__, this, "style") };
    }
  };
  items[2] = obj;
  let items1 = [
    {
      key: "supportedLocalesOf",
      value: function supportedLocalesOf(arg0, arg1) {
        return outer1_20(ListFormat.availableLocales, outer1_10(arg0), arg1);
      }
    },
    {
      key: "__addLocaleData",
      value: function __addLocaleData(item10117) {
        let data;
        let locale;
        const length = arguments.length;
        const array = new Array(length);
        for (let num = 0; num < length; num = num + 1) {
          array[num] = arguments[num];
        }
        for (const item10017 of array) {
          ({ data, locale } = item10017);
          let _Intl = Intl;
          let prototype = Locale.prototype;
          let tmp4 = new.target;
          let tmp5 = new.target;
          let tmp6 = locale;
          locale = new Locale(locale);
          let tmp7 = locale;
          let str = locale.minimize();
          str = str.toString();
          let tmp10 = ListFormat;
          ListFormat.localeData[str] = data;
          ListFormat.localeData[locale] = data;
          let availableLocales = ListFormat.availableLocales;
          let tmp9 = str;
          let addResult = availableLocales.add(str);
          let availableLocales2 = ListFormat.availableLocales;
          let addResult1 = availableLocales2.add(locale);
          if (!ListFormat.__defaultLocale) {
            let tmp2 = ListFormat;
            let tmp3 = str;
            ListFormat.__defaultLocale = tmp9;
          }
          continue;
        }
      }
    },
    {
      key: "getDefaultLocale",
      value: function getDefaultLocale() {
        return ListFormat.__defaultLocale;
      }
    }
  ];
  return callback3(ListFormat, items, items1);
})();
tmp6.localeData = {};
tmp6.availableLocales = new Set();
tmp6.__defaultLocale = "";
tmp6.relevantExtensionKeys = [];
tmp6.polyfilled = true;
const weakMap = new WeakMap();
tmp6.__INTERNAL_SLOT_MAP__ = weakMap;
tmp6.__ = undefined;
let closure_9 = tmp6;
if ("undefined" !== typeof Symbol) {
  let _Object = Object;
  let _Symbol = Symbol;
  Object.defineProperty(obj6.prototype, Symbol.toStringTag, { value: "Intl.ListFormat", writable: false, enumerable: false, configurable: true });
}
Object.defineProperty(tmp6.prototype.constructor, "length", { value: 0, writable: false, enumerable: false, configurable: true });
Object.defineProperty(tmp6.supportedLocalesOf, "length", { value: 1, writable: false, enumerable: false, configurable: true });
while (true) {
  let _Object2 = Object;
  let _Intl = Intl;
  let obj3 = { value: null, writable: true, enumerable: false, configurable: true };
  let tmp13 = tmp6;
  obj3.value = obj6;
  let str = "ListFormat";
  let definePropertyResult3 = Object.defineProperty(Intl, "ListFormat", obj3);
  let _globalThis = globalThis;
  if (!__FORMATJS_LISTFORMAT_DATA__) {
    break;
  } else {
    let tmp16 = __FORMATJS_LISTFORMAT_DATA__;
    let tmp17 = tmp15;
    for (const item10117 of __FORMATJS_LISTFORMAT_DATA__) {
      let tmp18 = tmp6;
      let __addLocaleDataResult = obj6.__addLocaleData(item10117);
      continue;
    }
    let _globalThis2 = globalThis;
    delete tmp.__FORMATJS_LISTFORMAT_DATA__;
    break;
  }
}
