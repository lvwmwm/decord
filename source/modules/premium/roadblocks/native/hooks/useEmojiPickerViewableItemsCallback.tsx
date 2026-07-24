// Module ID: 9414
// Function ID: 73359
// Name: _createForOfIteratorHelperLoose
// Dependencies: [31, 1849, 566, 3776, 22, 2]
// Exports: default

// Module 9414 (_createForOfIteratorHelperLoose)
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
const result = require("initialize").fileFinishedImporting("modules/premium/roadblocks/native/hooks/useEmojiPickerViewableItemsCallback.tsx");

export default function useEmojiPickerViewableItemsChanged(arg0) {
  const _require = arg0;
  let closure_1 = React.useRef(0);
  const items = [_isNativeReflectConstruct];
  stateFromStores = _require(stateFromStores[2]).useStateFromStores(items, () => {
    const currentUser = outer1_4.getCurrentUser();
    let tmp2 = !callback2(stateFromStores[3]).canUseEmojisEverywhere(currentUser);
    if (!tmp2) {
      tmp2 = !callback2(stateFromStores[3]).canUseAnimatedEmojis(currentUser);
      const obj2 = callback2(stateFromStores[3]);
    }
    return tmp2;
  });
  const items1 = [arg0, stateFromStores];
  return React.useMemo(() => {
    let fn;
    let obj = callback(stateFromStores[4]);
    callback = obj.debounce(() => {
      callback(outer1_1.current > 7);
    }, 200);
    obj = {};
    if (stateFromStores) {
      fn = (changed) => {
        let iter2;
        const tmp = outer2_5(changed.changed);
        let iter = tmp();
        if (!iter.done) {
          do {
            let value = iter.value;
            let item = value.item;
            let isSectionNitroLocked;
            let tmp2 = outer1_1;
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
            tmp2.current = Math.max(0, outer1_1.current + num);
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
