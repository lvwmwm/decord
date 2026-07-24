// Module ID: 11189
// Function ID: 87017
// Name: _createForOfIteratorHelperLoose
// Dependencies: [31, 7370, 566, 11190, 11191, 11192, 2]
// Exports: default

// Module 11189 (_createForOfIteratorHelperLoose)
import result from "result";
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
const result = require("initialize").fileFinishedImporting("modules/activities/useActivityShelfItems.tsx");

export default function useActivityShelfItems(enableFilter) {
  let flag = enableFilter.enableFilter;
  if (flag === undefined) {
    flag = false;
  }
  let filter;
  let dependencyMap;
  let developerActivityShelfItems;
  let items = [_isNativeReflectConstruct];
  filter = flag(566).useStateFromStoresObject(items, () => ({ filter: outer1_4.getFilter() })).filter;
  const obj = flag(566);
  const activityShelfData = flag(11190).useActivityShelfData(enableFilter.guildId);
  let tmp2 = filter(11191)(activityShelfData);
  dependencyMap = tmp2;
  const obj2 = flag(11190);
  developerActivityShelfItems = flag(11192).useDeveloperActivityShelfItems();
  const items1 = [developerActivityShelfItems, flag, filter, tmp2];
  return developerActivityShelfItems.useMemo(() => {
    let iter2;
    function shouldKeepShelfItem(value) {
      let tmp = !outer1_0;
      if (!tmp) {
        let hasItem = "" === outer1_1;
        if (!hasItem) {
          const formatted = value.application.name.toLowerCase();
          hasItem = formatted.includes(outer1_1.toLowerCase());
          const str2 = value.application.name;
        }
        tmp = hasItem;
      }
      return tmp;
    }
    const items = [...developerActivityShelfItems];
    const found = items.filter(shouldKeepShelfItem);
    let tmp = outer1_5(c2);
    let iter = tmp();
    if (!iter.done) {
      do {
        let value = iter.value;
        let tmp2 = !set.has(value.application.id) && shouldKeepShelfItem(value);
        if (tmp2) {
          let arr = found.push(value);
        }
        iter2 = tmp();
        iter = iter2;
      } while (!iter2.done);
    }
    return found;
  }, items1);
};
