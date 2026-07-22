// Module ID: 9909
// Function ID: 76665
// Name: _createForOfIteratorHelperLoose
// Dependencies: [0, 0, 0, 0, 0, 0, 0]
// Exports: default

// Module 9909 (_createForOfIteratorHelperLoose)
import __exportStarResult1 from "__exportStarResult1";
import closure_4 from "__exportStarResult1";
import closure_5 from "__exportStarResult1";

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
function getKeys() {
  const savedMessages = store.getSavedMessages();
  return savedMessages.map((saveData) => saveData.saveData);
}
const result = require("__exportStarResult1").fileFinishedImporting("modules/saved_messages/useSavedMessagesForPage.tsx");

export default function useSavedMessagesForPage() {
  const tmp = callback2(React.useState(getKeys), 2);
  const callback = tmp[0];
  const importDefault = tmp[1];
  let closure_2 = React.useRef(store.getIsStale());
  const effect = React.useEffect(() => {
    function handleChange() {
      const lastChanged = store.getLastChanged();
      if (closure_0 !== lastChanged) {
        closure_0 = lastChanged;
        if (ref.current) {
          if (!store.getIsStale()) {
            ref.current = false;
            handleChange(callback());
          }
        }
        handleChange((arg0) => {
          let done;
          let iter2;
          const items = [...arg0];
          const savedMessages = savedMessages.getSavedMessages();
          const map = new Map(savedMessages.map((saveData) => {
            const items = [saveData.saveData.messageId, saveData];
            return items;
          }));
          const tmp = callback(arg0);
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
          const tmp4 = callback(map.values());
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
    let closure_1 = handleChange;
    const lastChanged = closure_5.getLastChanged();
    closure_5.addChangeListener(handleChange);
    return () => {
      store.removeChangeListener(handleChange);
    };
  }, []);
  importDefault(closure_2[3])();
  const items = [store];
  return callback(closure_2[4]).useStateFromStoresArray(items, () => {
    const mapped = lib.map((channelId) => savedMessage.getSavedMessage(channelId.channelId, channelId.messageId));
    return mapped.filter(lib(closure_2[5]).isNotNullish);
  });
};
