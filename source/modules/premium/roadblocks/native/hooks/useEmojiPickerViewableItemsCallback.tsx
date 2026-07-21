// Module ID: 9370
// Function ID: 73096
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: default

// Module 9370 (_createForOfIteratorHelperLoose)
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
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/premium/roadblocks/native/hooks/useEmojiPickerViewableItemsCallback.tsx");

export default function useEmojiPickerViewableItemsChanged(arg0) {
  const arg1 = arg0;
  let closure_1 = React.useRef(0);
  const items = [closure_4];
  const stateFromStores = arg1(dependencyMap[2]).useStateFromStores(items, () => {
    const currentUser = currentUser.getCurrentUser();
    let tmp2 = !callback2(stateFromStores[3]).canUseEmojisEverywhere(currentUser);
    if (!tmp2) {
      tmp2 = !callback2(stateFromStores[3]).canUseAnimatedEmojis(currentUser);
      const obj2 = callback2(stateFromStores[3]);
    }
    return tmp2;
  });
  const dependencyMap = stateFromStores;
  const items1 = [arg0, stateFromStores];
  return React.useMemo(() => {
    let fn;
    let obj = callback(stateFromStores[4]);
    const callback = obj.debounce(() => {
      callback(ref.current > 7);
    }, 200);
    obj = {};
    if (stateFromStores) {
      fn = (changed) => {
        let iter2;
        const tmp = callback2(changed.changed);
        let iter = tmp();
        if (!iter.done) {
          do {
            let value = iter.value;
            let item = value.item;
            let isSectionNitroLocked;
            let tmp2 = closure_1;
            if (null != item) {
              isSectionNitroLocked = item.isSectionNitroLocked;
            }
            let num = 0;
            if (true === isSectionNitroLocked) {
              let num2 = -1;
              if (value.isViewable) {
                num2 = 1;
              }
              num = num2;
            }
            tmp2.current = Math.max(0, closure_1.current + num);
            iter2 = tmp();
            iter = iter2;
          } while (!iter2.done);
        }
        callback();
      };
    }
    obj.onViewableItemsChanged = fn;
    return obj;
  }, items1);
};
