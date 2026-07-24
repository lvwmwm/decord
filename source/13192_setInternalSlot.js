// Module ID: 13192
// Function ID: 101717
// Name: setInternalSlot
// Dependencies: [13193, 1257]
// Exports: createDataProperty, defineProperty, getInternalSlot, invariant, isLiteralPart, repeat, setMultiInternalSlots

// Module 13192 (setInternalSlot)
function setInternalSlot(get) {
  if (!get.get(arg1)) {
    const _Object = Object;
    const result = get.set(arg1, Object.create(null));
  }
  get.get(arg1)[arg2] = arg3;
}
function getMultiInternalSlots(get) {
  let length;
  const items = [];
  let num = 2;
  if (2 < arguments.length) {
    do {
      items[num - 2] = arguments[num];
      num = num + 1;
      length = arguments.length;
    } while (num < length);
  }
  const value = get.get(arg1);
  const require = value;
  if (value) {
    const _Object = Object;
    return items.reduce((arg0, arg1) => {
      arg0[arg1] = value[arg1];
      return arg0;
    }, Object.create(null));
  } else {
    const _TypeError = TypeError;
    const concat = "".concat;
    const typeError = new TypeError("".concat(arg1, " InternalSlot has not been initialized"));
    throw typeError;
  }
}
let obj = { strategy: require("monadic").strategies.variadic };
obj = { strategy: require("monadic").strategies.variadic };
obj = { strategy: require("monadic").strategies.variadic };
const obj1 = { strategy: require("monadic").strategies.variadic };
const obj2 = { strategy: require("monadic").strategies.variadic };

export const repeat = function repeat(str) {
  let length;
  if ("function" === typeof str.repeat) {
    return str.repeat(arg1);
  } else {
    const _Array = Array;
    const arr = new Array(arg1);
    let num = 0;
    if (0 < arr.length) {
      do {
        arr[num] = str;
        num = num + 1;
        length = arr.length;
      } while (num < length);
    }
    return arr.join("");
  }
};
export { setInternalSlot };
export const setMultiInternalSlots = function setMultiInternalSlots(arg0, arg1, arg2) {
  let length;
  const keys = Object.keys(arg2);
  let num = 0;
  if (0 < keys.length) {
    do {
      let tmp = keys[num];
      let tmp2 = setInternalSlot;
      let tmp3 = arg0;
      let tmp4 = arg1;
      let tmp5 = tmp;
      let tmp6 = setInternalSlot(arg0, arg1, tmp, arg2[tmp]);
      num = num + 1;
      length = keys.length;
    } while (num < length);
  }
};
export const getInternalSlot = function getInternalSlot(arg0, arg1, arg2) {
  return getMultiInternalSlots(arg0, arg1, arg2)[arg2];
};
export { getMultiInternalSlots };
export const isLiteralPart = function isLiteralPart(type) {
  return "literal" === type.type;
};
export const defineProperty = function defineProperty(arg0, arg1, value) {
  const obj = { configurable: true, enumerable: false, writable: true, value: value.value };
  Object.defineProperty(arg0, arg1, obj);
};
export const createDataProperty = function createDataProperty(arg0, direction, firstDay) {
  const obj = { configurable: true, enumerable: true, writable: true, value: firstDay };
  Object.defineProperty(arg0, direction, obj);
};
export const invariant = function invariant(arg0, arg1, arg2) {
  let _Error = arg2;
  if (undefined === arg2) {
    _Error = Error;
  }
  if (!arg0) {
    const prototype = _Error.prototype;
    _Error = new _Error(arg1);
    throw _Error;
  }
};
export const UNICODE_EXTENSION_SEQUENCE_REGEX = /-u(?:-[0-9a-z]{2,8})+/gi;
export const createMemoizedNumberFormat = require("monadic").memoize(() => {
  let length;
  const items = [];
  let num = 0;
  if (0 < arguments.length) {
    do {
      items[num] = arguments[num];
      num = num + 1;
      length = arguments.length;
    } while (num < length);
  }
  const bind = NumberFormat.bind;
  const items1 = [undefined];
  let applyResult = bind.apply(NumberFormat, require(1257) /* createExporter */.__spreadArray(items1, items, false));
  applyResult = new applyResult();
  return applyResult;
}, obj);
export const createMemoizedDateTimeFormat = require("monadic").memoize(() => {
  let length;
  const items = [];
  let num = 0;
  if (0 < arguments.length) {
    do {
      items[num] = arguments[num];
      num = num + 1;
      length = arguments.length;
    } while (num < length);
  }
  const bind = DateTimeFormat.bind;
  const items1 = [undefined];
  let applyResult = bind.apply(DateTimeFormat, require(1257) /* createExporter */.__spreadArray(items1, items, false));
  applyResult = new applyResult();
  return applyResult;
}, obj);
export const createMemoizedPluralRules = require("monadic").memoize(() => {
  let length;
  const items = [];
  let num = 0;
  if (0 < arguments.length) {
    do {
      items[num] = arguments[num];
      num = num + 1;
      length = arguments.length;
    } while (num < length);
  }
  const bind = PluralRules.bind;
  const items1 = [undefined];
  let applyResult = bind.apply(PluralRules, require(1257) /* createExporter */.__spreadArray(items1, items, false));
  applyResult = new applyResult();
  return applyResult;
}, obj);
export const createMemoizedLocale = require("monadic").memoize(() => {
  let length;
  const items = [];
  let num = 0;
  if (0 < arguments.length) {
    do {
      items[num] = arguments[num];
      num = num + 1;
      length = arguments.length;
    } while (num < length);
  }
  const bind = Locale.bind;
  const items1 = [undefined];
  let applyResult = bind.apply(Locale, require(1257) /* createExporter */.__spreadArray(items1, items, false));
  applyResult = new applyResult();
  return applyResult;
}, obj1);
export const createMemoizedListFormat = require("monadic").memoize(() => {
  let length;
  const items = [];
  let num = 0;
  if (0 < arguments.length) {
    do {
      items[num] = arguments[num];
      num = num + 1;
      length = arguments.length;
    } while (num < length);
  }
  const bind = ListFormat.bind;
  const items1 = [undefined];
  let applyResult = bind.apply(ListFormat, require(1257) /* createExporter */.__spreadArray(items1, items, false));
  applyResult = new applyResult();
  return applyResult;
}, obj2);
