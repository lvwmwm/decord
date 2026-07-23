// Module ID: 9917
// Function ID: 76708
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 31, 9532, 9533, 9918, 566, 1327, 2]
// Exports: default

// Module 9917 (_createForOfIteratorHelperLoose)
import _slicedToArray from "_slicedToArray";
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
function getSavedMessagesForType(arg0) {
  if (require(9533) /* savedMessageDataToClient */.SavedMessageSortTypes.BOOKMARK === arg0) {
    return store.getMessageBookmarks();
  } else if (require(9533) /* savedMessageDataToClient */.SavedMessageSortTypes.REMINDER === arg0) {
    return store.getMessageReminders();
  } else {
    return store.getSavedMessages();
  }
}
function getKeys(arg0) {
  return getSavedMessagesForType(arg0).map((saveData) => saveData.saveData);
}
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/saved_messages/useSavedMessagesForPage.tsx");

export default function useSavedMessagesForPage() {
  let ALL = arg0;
  if (arg0 === undefined) {
    ALL = ALL(9533).SavedMessageSortTypes.ALL;
  }
  let importDefault;
  let dependencyMap;
  let callback;
  const tmp3 = callback(React.useState(() => outer1_9(ALL)), 2);
  importDefault = tmp3[0];
  dependencyMap = tmp3[1];
  callback = React.useRef(store.getIsStale());
  let items = [ALL];
  const effect = React.useEffect(() => {
    function handleChange() {
      const lastChanged = outer2_5.getLastChanged();
      if (lastChanged !== lastChanged) {
        if (outer1_3.current) {
          if (!outer2_5.getIsStale()) {
            outer1_3.current = false;
            outer1_2(outer2_9(closure_0));
          }
        }
        outer1_2((arg0) => {
          let done;
          let iter2;
          let items = [...arg0];
          const map = new Map(outer3_8(closure_0).map((saveData) => {
            const items = [saveData.saveData.messageId, saveData];
            return items;
          }));
          const tmp = outer3_6(arg0);
          let iter = tmp();
          if (!iter.done) {
            do {
              let value = iter.value;
              if (map.has(value.messageId)) {
                let deleteResult = map.delete(value.messageId);
              } else {
                let spliceResult = items.splice(items.indexOf(value), 1);
              }
              iter2 = tmp();
              iter = iter2;
            } while (!iter2.done);
          }
          const tmp4 = outer3_6(map.values());
          let iter3 = tmp4();
          if (!iter3.done) {
            do {
              let arr = items.push(iter3.value.saveData);
              let iter4 = tmp4();
              iter3 = iter4;
              done = iter4.done;
            } while (!done);
          }
          return items;
        });
      }
    }
    let lastChanged = outer1_5.getLastChanged();
    outer1_5.addChangeListener(handleChange);
    return () => {
      outer2_5.removeChangeListener(handleChange);
    };
  }, items);
  importDefault(9918)();
  const items1 = [store];
  return ALL(566).useStateFromStoresArray(items1, () => {
    const mapped = closure_1.map((channelId) => outer2_5.getSavedMessage(channelId.channelId, channelId.messageId));
    return mapped.filter(ALL(table[6]).isNotNullish);
  });
};
