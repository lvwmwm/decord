// Module ID: 12027
// Function ID: 92947
// Name: _createForOfIteratorHelperLoose
// Dependencies: [2]
// Exports: createCompactNumberFormat

// Module 12027 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    _arrayLikeToArray = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function exponentOf(absolute) {
  let tmp3;
  let tmp9;
  if (0 === absolute) {
    return 0;
  } else {
    const _Math = Math;
    const _Math2 = Math;
    const rounded = Math.floor(Math.log10(absolute));
    let tmp4 = rounded;
    let tmp5 = rounded;
    if (10 ** rounded > absolute) {
      do {
        let diff = tmp4 - 1;
        let num = 10;
        let tmp2 = diff;
        tmp4 = diff;
        tmp5 = diff;
        tmp3 = 10 ** diff;
      } while (tmp3 > absolute);
    }
    let tmp6 = tmp5;
    let tmp7 = tmp5;
    if (10 ** (tmp5 + 1) <= absolute) {
      do {
        let sum = tmp6 + 1;
        let num4 = 10;
        tmp6 = sum;
        tmp7 = sum;
        tmp9 = 10 ** (sum + 1);
      } while (tmp9 <= absolute);
    }
    return tmp7;
  }
}
function toAsciiDigits(arg0, get) {
  let iter3;
  const tmp = _createForOfIteratorHelperLoose(arg0);
  const iter = tmp();
  let iter2 = iter;
  let str = "";
  let str2 = "";
  if (!iter.done) {
    do {
      let value = iter2.value;
      value = get.get(value);
      str = str + value;
      iter3 = tmp();
      iter2 = iter3;
      str2 = str;
    } while (!iter3.done);
  }
  return str2;
}
let result = require("set").fileFinishedImporting("../discord_common/js/packages/application-widget-renderer/src/createCompactNumberFormat.tsx");

export const createCompactNumberFormat = function createCompactNumberFormat(stateFromStores) {
  function scaleForExponent(value, arg1) {
    value = map1.get(value);
    if (undefined === value) {
      const tmp13 = map(numberFormat1.formatToParts(10 ** value));
      const iter4 = tmp13();
      let iter3 = iter4;
      let str = "";
      let str2 = "";
      if (!iter4.done) {
        while (true) {
          let iter = iter3.value;
          if ("integer" !== iter.type) {
            if ("fraction" !== iter.type) {
              let text = str;
              if ("decimal" === iter.type) {
                text = `.`;
              }
            }
            let iter2 = tmp13();
            str = text;
            iter3 = iter2;
            str2 = text;
            if (iter2.done) {
              break;
            }
          }
          let tmp3 = scaleForExponent;
          text = str + scaleForExponent(iter.value, tmp11);
        }
      }
      const _Number = Number;
      const NumberResult = Number(str2);
      let num2 = 1;
      if (NumberResult > 0) {
        num2 = tmp9 / NumberResult;
      }
      const result = map1.set(value, num2);
      value = num2;
      tmp11 = map;
    }
    return value;
  }
  let obj = { useGrouping: false };
  const numberFormat = new Intl.NumberFormat(stateFromStores, obj);
  const map = new Map();
  let num = 0;
  do {
    let _String = String;
    let formatResult = numberFormat.format(num);
    let result = map.set(formatResult, String(num));
    num = num + 1;
  } while (num <= 9);
  const numberFormat1 = new Intl.NumberFormat(stateFromStores, { notation: "compact", compactDisplay: "short" });
  const map1 = new Map();
  obj = {
    format(arg0) {
      if (0 !== arg0) {
        const _Number2 = Number;
        if (Number.isFinite(arg0)) {
          const _Math = Math;
          const tmp2 = map1(Math.abs(arg0));
          let num2 = 1;
          if (tmp2 >= 0) {
            num2 = scaleForExponent(tmp2);
          }
          const result = arg0 / num2;
          const _Math2 = Math;
          const _Math3 = Math;
          const _Math4 = Math;
          const tmp6 = 10 ** -Math.max(Math.min(map1(Math.abs(result)) - 1, 0), -15);
          const _Math5 = Math;
          const result1 = Math.floor(result * tmp6) / tmp6 * num2;
          const _Number = Number;
          let tmp9 = arg0;
          if (Number.isFinite(result1)) {
            tmp9 = result1;
          }
          return numberFormat1.format(tmp9);
        }
      }
      return numberFormat1.format(arg0);
    }
  };
  return obj;
};
