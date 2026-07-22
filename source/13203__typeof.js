// Module ID: 13203
// Function ID: 99975
// Name: _typeof
// Dependencies: []

// Module 13203 (_typeof)
function _typeof(arg0) {
  if ("function" === typeof Symbol) {
    const _Symbol = Symbol;
    if ("symbol" === typeof Symbol.iterator) {
      let fn = (arg0) => typeof arg0;
    }
    const _typeof = fn;
    return fn(arg0);
  }
  fn = (arg0) => {
    if (arg0) {
      const _Symbol = Symbol;
      if ("function" === typeof Symbol) {
        const _Symbol2 = Symbol;
        if (arg0.constructor === Symbol) {
          const _Symbol3 = Symbol;
          let str2 = "symbol";
        }
        return str2;
      }
    }
    str2 = typeof arg0;
  };
}
function _defineProperties(arg0, arg1) {
  let num = 0;
  if (0 < arg1.length) {
    while (true) {
      let tmp = arg1[num];
      tmp.enumerable = tmp.enumerable || false;
      tmp.configurable = true;
      if ("value" in tmp) {
        tmp.writable = true;
      }
      let key = tmp.key;
      let StringResult = key;
      if ("object" === typeof key) {
        StringResult = key;
        if (null !== key) {
          let _Symbol = Symbol;
          let obj = key[Symbol.toPrimitive];
          if (undefined !== obj) {
            let callResult = obj.call(key, "string");
            StringResult = callResult;
            if ("object" === typeof callResult) {
              break;
            }
          } else {
            let _String = String;
            StringResult = String(key);
          }
        }
      }
      let StringResult1 = StringResult;
      if ("symbol" !== typeof StringResult) {
        let _String2 = String;
        StringResult1 = String(StringResult);
      }
      let definePropertyResult = Object.defineProperty(arg0, StringResult1, tmp);
      num = num + 1;
    }
    const _TypeError = TypeError;
    const typeError = new TypeError("@@toPrimitive must return a primitive value.");
    throw typeError;
  }
}
function _classPrivateFieldGet(arg0, has) {
  const iter = _classExtractFieldDescriptor(arg0, has, "get");
  if (iter.get) {
    const get = iter.get;
    let callResult = get.call(arg0);
  } else {
    callResult = iter.value;
  }
  return callResult;
}
function _classPrivateFieldSet(arg0, has, value) {
  const tmp = _classExtractFieldDescriptor(arg0, has, "set");
  if (tmp.set) {
    tmp.set.call(arg0, value);
    const set = tmp.set;
  } else if (tmp.writable) {
    tmp.value = value;
  } else {
    const _TypeError = TypeError;
    const typeError = new TypeError("attempted to set read only private field");
    throw typeError;
  }
  return value;
}
function _classExtractFieldDescriptor(arg0, has, get) {
  if (has.has(arg0)) {
    return has.get(arg0);
  } else {
    const _TypeError = TypeError;
    const typeError = new TypeError("attempted to " + get + " private field on non-instance");
    throw typeError;
  }
}
function _classPrivateFieldInitSpec(arg0, has) {
  if (has.has(arg0)) {
    const _TypeError = TypeError;
    const typeError = new TypeError("Cannot initialize the same private elements twice on an object");
    throw typeError;
  } else {
    const result = has.set(arg0, arg2);
  }
}
function toNumber(arg0) {
  const tmp = _typeof(arg0);
  if ("number" === tmp) {
    return arg0;
  } else if ("bigint" === tmp) {
    const _TypeError = TypeError;
    const typeError = new TypeError("Cannot convert a BigInt value to a number");
    throw typeError;
  } else {
    const _Number = Number;
    return Number(arg0);
  }
}
function canonicalizeLocaleList(arg0) {
  let str4;
  if (arg0) {
    const _Array = Array;
    let arr = arg0;
    if (!Array.isArray(arg0)) {
      const items = [arg0];
      arr = items;
    }
    const obj = {};
    let num2 = 0;
    if (0 < arr.length) {
      while (true) {
        let tmp3 = arr[num2];
        let tmp4 = tmp3;
        if (tmp3) {
          let tmp5 = _typeof;
          tmp4 = "object" === _typeof(tmp3);
        }
        str4 = tmp3;
        if (tmp4) {
          let _String = String;
          str4 = String(tmp3);
        }
        if ("string" !== typeof str4) {
          break;
        } else {
          let parts = str4.split("-");
          if (parts.every((arg0) => /[a-z0-9]+/i.test(arg0))) {
            let str7 = parts[0];
            let formatted = str7.toLowerCase();
            let tmp11 = { "Bool(true)": "/assets/modules/video_calls/native/images", "Bool(true)": 24, "Bool(true)": 24 }[formatted];
            let tmp12 = formatted;
            if (null !== tmp11) {
              tmp12 = formatted;
              if (undefined !== tmp11) {
                tmp12 = tmp11;
              }
            }
            parts[0] = tmp12;
            obj[parts.join("-")] = true;
            num2 = num2 + 1;
          } else {
            let _JSON = JSON;
            let str5 = "The locale ";
            let concat = "The locale ".concat;
            let str6 = " is not a structurally valid BCP 47 language tag.";
            let _RangeError = RangeError;
            let tmp6 = new.target;
            let tmp7 = new.target;
            let rangeError = new RangeError("The locale ".concat(JSON.stringify(str4), " is not a structurally valid BCP 47 language tag."));
            let tmp9 = rangeError;
            throw rangeError;
          }
        }
      }
      const concat2 = "Locales should be strings, ".concat;
      const _JSON2 = JSON;
      const _TypeError = TypeError;
      const typeError = new TypeError("Locales should be strings, ".concat(JSON.stringify(str4), " isn't."));
      throw typeError;
    }
    const _Object = Object;
    return Object.keys(obj);
  } else {
    return [];
  }
}

export default function getPluralRules(arg0, arg1, arg2, arg3) {
  const canonicalizeLocaleList = arg0;
  const _typeof = arg1;
  const _defineProperties = arg2;
  const _classPrivateFieldGet = arg3;
  function findLocale(arg0) {
    let str = arg0;
    while (!arg1(str)) {
      str = str.replace(/-?[^-]*$/, "");
      if (str) {
        continue;
      } else {
        let tmp = null;
        return null;
      }
    }
    return str;
  }
  const weakMap = new WeakMap();
  const _classExtractFieldDescriptor = weakMap;
  const weakMap1 = new WeakMap();
  const _classPrivateFieldInitSpec = weakMap1;
  const weakMap2 = new WeakMap();
  const toNumber = weakMap2;
  const weakMap3 = new WeakMap();
  const weakMap4 = new WeakMap();
  const tmp6 = () => {
    class PluralRules {
      constructor() {
        self = this;
        if (arguments.length > 0) {
          if (undefined !== arguments[0]) {
            first = arguments[0];
          }
          num = 1;
          if (arguments.length > 1) {
            if (undefined !== arguments[1]) {
              obj = arguments[1];
            }
            tmp2 = PluralRules;
            if (self instanceof PluralRules) {
              tmp8 = closure_6;
              tmp9 = closure_5;
              obj = {};
              flag = true;
              obj.writable = true;
              obj.value = undefined;
              tmp10 = closure_6(self, closure_5, obj);
              obj1 = {};
              obj1.writable = true;
              obj1.value = undefined;
              tmp11 = closure_6;
              tmp12 = closure_6(self, closure_6, obj1);
              obj2 = {};
              obj2.writable = true;
              obj2.value = undefined;
              tmp13 = closure_7;
              tmp14 = closure_6(self, closure_7, obj2);
              obj3 = {};
              obj3.writable = true;
              obj3.value = undefined;
              tmp15 = closure_8;
              tmp16 = closure_6(self, closure_8, obj3);
              obj4 = {};
              obj4.writable = true;
              obj4.value = undefined;
              tmp17 = closure_9;
              tmp18 = closure_6(self, closure_9, obj4);
              tmp19 = closure_4;
              tmp20 = PluralRules;
              arr = PluralRules([]);
              num2 = 0;
              if (0 >= arr.length) {
                tmp23 = PluralRules;
                prototype2 = PluralRules.prototype;
                tmp24 = new.target;
                tmp25 = new.target;
                obj7 = new PluralRules();
                tmp26 = obj7;
                tmp27 = closure_4;
                tmp22 = closure_4(obj7.resolvedOptions().locale);
              } else {
                tmp21 = closure_4;
                tmp22 = closure_4(arr[num2]);
                while (!tmp22) {
                  num2 = num2 + 1;
                  break;
                }
              }
              tmp19Result = tmp19(self, tmp9, tmp22);
              tmp29 = closure_1;
              tmp30 = closure_3;
              tmp19Result1 = tmp19(self, tmp13, closure_1(closure_3(self, tmp9)));
              tmp32 = closure_3;
              tmp19Result2 = tmp19(self, tmp11, closure_3(closure_3(self, tmp9)));
              tmp34 = globalThis;
              _Object = Object;
              hasOwnProperty = Object.prototype.hasOwnProperty;
              str2 = "type";
              tmp35 = hasOwnProperty.call(obj, "type") && obj.type;
              str3 = "cardinal";
              str4 = "cardinal";
              if (tmp35) {
                str4 = tmp35;
                if ("cardinal" !== tmp35) {
                  str5 = "ordinal";
                  str4 = tmp35;
                  if ("ordinal" !== tmp35) {
                    _RangeError = RangeError;
                    _JSON = JSON;
                    str6 = "Not a valid plural type: ";
                    prototype3 = RangeError.prototype;
                    tmp36 = new.target;
                    tmp37 = new.target;
                    rangeError = new RangeError("Not a valid plural type: " + JSON.stringify(tmp35));
                    tmp39 = rangeError;
                    throw rangeError;
                  }
                }
              }
              tmp19Result3 = tmp19(self, tmp15, str4);
              tmp41 = PluralRules;
              prototype4 = PluralRules.prototype;
              tmp42 = new.target;
              str7 = "en";
              tmp43 = new.target;
              tmp44 = obj;
              tmp45 = new PluralRules("en", obj);
              tmp46 = tmp45;
              tmp19Result4 = tmp19(self, tmp17, tmp45);
              return;
            } else {
              tmp3 = globalThis;
              _TypeError = TypeError;
              prototype = TypeError.prototype;
              tmp4 = new.target;
              str = "Cannot call a class as a function";
              tmp5 = new.target;
              typeError = new TypeError("Cannot call a class as a function");
              tmp7 = typeError;
              throw typeError;
            }
          }
          obj = {};
        }
        return;
      }
    }
    const arg0 = PluralRules;
    let obj = {
      key: "resolvedOptions",
      value: function resolvedOptions() {
        let maximumFractionDigits;
        let maximumSignificantDigits;
        let minimumFractionDigits;
        let minimumIntegerDigits;
        let minimumSignificantDigits;
        let roundingPriority;
        const self = this;
        let obj = callback3(this, closure_9);
        const resolvedOptionsResult = obj.resolvedOptions();
        ({ minimumSignificantDigits, roundingPriority } = resolvedOptionsResult);
        obj = { locale: callback3(this, closure_5), type: callback3(this, closure_8), minimumIntegerDigits, minimumFractionDigits, maximumFractionDigits };
        ({ minimumIntegerDigits, minimumFractionDigits, maximumFractionDigits, maximumSignificantDigits } = resolvedOptionsResult);
        if ("number" === typeof minimumSignificantDigits) {
          obj.minimumSignificantDigits = minimumSignificantDigits;
          obj.maximumSignificantDigits = maximumSignificantDigits;
        }
        const tmp2 = callback3(self, closure_5);
        obj.pluralCategories = callback2(callback3(self, closure_5), "ordinal" === callback3(self, closure_8)).slice(0);
        if (!roundingPriority) {
          roundingPriority = "auto";
        }
        obj.roundingPriority = roundingPriority;
        return obj;
      }
    };
    const items = [obj, , ];
    obj = {
      key: "select",
      value: function select(arg0) {
        const self = this;
        if (this instanceof PluralRules) {
          let NumberResult = arg0;
          if ("number" !== typeof arg0) {
            const _Number = Number;
            NumberResult = Number(arg0);
          }
          const _isFinite = isFinite;
          if (isFinite(NumberResult)) {
            const _Math = Math;
            const obj = callback3(self, closure_9);
            const formatResult = callback3(self, closure_9).format(Math.abs(NumberResult));
            return callback3(self, closure_7).call(self, formatResult, "ordinal" === callback3(self, closure_8));
          } else {
            return "other";
          }
        } else {
          const _TypeError = TypeError;
          const concat = "select() called on incompatible ".concat;
          const typeError = new TypeError("select() called on incompatible ".concat(self));
          throw typeError;
        }
      }
    };
    items[1] = obj;
    obj = {
      key: "selectRange",
      value: function selectRange(arg0, arg1) {
        const self = this;
        if (this instanceof PluralRules) {
          if (undefined === arg0) {
            const _TypeError3 = TypeError;
            const typeError = new TypeError("start is undefined");
            throw typeError;
          } else if (undefined === arg1) {
            const _TypeError2 = TypeError;
            const typeError1 = new TypeError("end is undefined");
            throw typeError1;
          } else {
            const tmp28 = callback6(arg0);
            const tmp29 = callback6(arg1);
            const _isFinite2 = isFinite;
            if (isFinite(tmp28)) {
              const _isFinite = isFinite;
              if (isFinite(tmp29)) {
                const obj = callback3(self, closure_6);
                return obj.call(self, self.select(tmp28), self.select(tmp29));
              } else {
                const _RangeError2 = RangeError;
                const rangeError = new RangeError("end must be finite");
                throw rangeError;
              }
            } else {
              const _RangeError = RangeError;
              const rangeError1 = new RangeError("start must be finite");
              throw rangeError1;
            }
          }
        } else {
          const _TypeError = TypeError;
          const concat = "selectRange() called on incompatible ".concat;
          const typeError2 = new TypeError("selectRange() called on incompatible ".concat(self));
          throw typeError2;
        }
      }
    };
    items[2] = obj;
    const items1 = [
      {
        key: "supportedLocalesOf",
        value: function supportedLocalesOf(en) {
          return PluralRules(en).filter(closure_4);
        }
      }
    ];
    arg2(PluralRules.prototype, items);
    arg2(PluralRules, items1);
    Object.defineProperty(PluralRules, "prototype", { writable: false });
    return PluralRules;
  }();
  let toStringTag = "undefined" !== typeof Symbol;
  if (toStringTag) {
    const _Symbol = Symbol;
    toStringTag = Symbol.toStringTag;
  }
  if (toStringTag) {
    const _Object = Object;
    const _Symbol2 = Symbol;
    Object.defineProperty(tmp6.prototype, Symbol.toStringTag, {});
  }
  Object.defineProperty(tmp6, "prototype", { writable: false });
  return tmp6;
};
