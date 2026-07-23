// Module ID: 13505
// Function ID: 103945
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 6960, 13506, 13508, 566, 2]
// Exports: default, updateSortOrder

// Module 13505 (_createForOfIteratorHelperLoose)
import _slicedToArray from "_slicedToArray";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
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
    let c1 = 0;
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
function getSortedDevToolsScreens(arg0) {
  let sortedScreenKeys = arg0;
  if (arg0 === undefined) {
    sortedScreenKeys = _isNativeReflectConstruct.sortedScreenKeys;
  }
  const entries = Object.entries(sortedScreenKeys(13506).DevToolsScreens);
  const found = entries.filter((arg0) => {
    let obj;
    [, obj] = arg0;
    let predicateResult = tmp2;
    if (null != obj.predicate) {
      predicateResult = obj.predicate();
    }
    return predicateResult;
  });
  return found.sort((arg0, arg1) => {
    let tmp;
    let tmp2;
    [tmp] = arg0;
    [tmp2] = arg1;
    const index = sortedScreenKeys.indexOf(tmp);
    const index1 = sortedScreenKeys.indexOf(tmp2);
    let num = -1;
    if (-1 !== index) {
      let num3 = 1;
      if (!tmp5) {
        if (num !== index1) {
          num = index - index1;
        }
        num3 = num;
      }
      let num2 = num3;
    } else {
      num2 = 0;
    }
    return num2;
  });
}
let result = require("DevToolsScreens").fileFinishedImporting("modules/devtools/native/useSortedDevToolsScreens.tsx");

export default function useSortedDevToolsScreens() {
  const items = [_isNativeReflectConstruct];
  return getSortedDevToolsScreens(require(566) /* initialize */.useStateFromStores(items, () => outer1_3.sortedScreenKeys));
};
export const updateSortOrder = function updateSortOrder(closure_0, down) {
  let iter2;
  const items = [..._isNativeReflectConstruct.sortedScreenKeys];
  const tmp = _createForOfIteratorHelperLoose(getSortedDevToolsScreens());
  let iter = tmp();
  if (!iter.done) {
    do {
      let tmp2 = callback;
      let first = callback(iter.value, 1)[0];
      if (!items.includes(first)) {
        let arr = items.push(first);
      }
      iter2 = tmp();
      iter = iter2;
    } while (!iter2.done);
  }
  const index = items.indexOf(closure_0);
  if ("up" === down) {
    items[index] = items[index - 1];
    items[index - 1] = items[index];
  } else if ("down" === down) {
    items[index] = items[index + 1];
    items[index + 1] = items[index];
  }
  const result = require(13508) /* updateDevToolsSettings */.updateDevToolsSettings({ sortedScreenKeys: items });
};
