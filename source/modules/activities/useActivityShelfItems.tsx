// Module ID: 11148
// Function ID: 86673
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: default

// Module 11148 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
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
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
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
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/activities/useActivityShelfItems.tsx");

export default function useActivityShelfItems(enableFilter) {
  let flag = enableFilter.enableFilter;
  if (flag === undefined) {
    flag = false;
  }
  const arg1 = flag;
  let importDefault;
  let dependencyMap;
  let React;
  const items = [closure_4];
  const filter = arg1(dependencyMap[2]).useStateFromStoresObject(items, () => ({ filter: filter.getFilter() })).filter;
  importDefault = filter;
  const obj = arg1(dependencyMap[2]);
  const activityShelfData = arg1(dependencyMap[3]).useActivityShelfData(enableFilter.guildId);
  const tmp2 = importDefault(dependencyMap[4])(activityShelfData);
  dependencyMap = tmp2;
  const obj2 = arg1(dependencyMap[3]);
  const developerActivityShelfItems = arg1(dependencyMap[5]).useDeveloperActivityShelfItems();
  React = developerActivityShelfItems;
  const items1 = [developerActivityShelfItems, flag, filter, tmp2];
  return React.useMemo(() => {
    let iter2;
    let tmp2;
    function shouldKeepShelfItem(value) {
      let tmp = !closure_0;
      if (!tmp) {
        let hasItem = "" === closure_1;
        if (!hasItem) {
          const formatted = value.application.name.toLowerCase();
          hasItem = formatted.includes(closure_1.toLowerCase());
          const str2 = value.application.name;
        }
        tmp = hasItem;
      }
      return tmp;
    }
    const items = [...closure_3];
    const found = items.filter(shouldKeepShelfItem);
    const tmp = callback(tmp2);
    let iter = tmp();
    if (!iter.done) {
      do {
        let value = iter.value;
        tmp2 = !set.has(value.application.id) && shouldKeepShelfItem(value);
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
