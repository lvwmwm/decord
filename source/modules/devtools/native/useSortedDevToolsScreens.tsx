// Module ID: 13382
// Function ID: 101734
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: default, updateSortOrder

// Module 13382 (_createForOfIteratorHelperLoose)
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
function getSortedDevToolsScreens(arg0) {
  let sortedScreenKeys = arg0;
  if (arg0 === undefined) {
    sortedScreenKeys = sortedScreenKeys.sortedScreenKeys;
  }
  const arg1 = sortedScreenKeys;
  const entries = Object.entries(arg1(dependencyMap[2]).DevToolsScreens);
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
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/devtools/native/useSortedDevToolsScreens.tsx");

export default function useSortedDevToolsScreens() {
  const items = [closure_3];
  return getSortedDevToolsScreens(arg1(dependencyMap[4]).useStateFromStores(items, () => sortedScreenKeys.sortedScreenKeys));
};
export const updateSortOrder = function updateSortOrder(closure_0, down) {
  let iter2;
  const items = [...closure_3.sortedScreenKeys];
  const tmp = _createForOfIteratorHelperLoose(getSortedDevToolsScreens());
  let iter = tmp();
  if (!iter.done) {
    do {
      let tmp2 = closure_2;
      let first = closure_2(iter.value, 1)[0];
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
  const result = down(dependencyMap[3]).updateDevToolsSettings({ sortedScreenKeys: items });
};
