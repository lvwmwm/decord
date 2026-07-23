// Module ID: 11483
// Function ID: 89429
// Name: _createForOfIteratorHelperLoose
// Dependencies: [4349, 566, 2]
// Exports: useLongestChannelMessageBeforeReply

// Module 11483 (_createForOfIteratorHelperLoose)
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
const result = require("set").fileFinishedImporting("modules/messages/useLongestChannelMessageBeforeReply.tsx");

export const useLongestChannelMessageBeforeReply = function useLongestChannelMessageBeforeReply(id, recipientId) {
  const _require = id;
  const dependencyMap = recipientId;
  const items = [_isNativeReflectConstruct];
  const items1 = [id, recipientId];
  return _require(566).useStateFromStores(items, () => {
    if (null != closure_1) {
      const messages = outer1_2.getMessages(closure_0);
      const findOldestResult = messages.findOldest((author) => author.author.id === outer1_1);
      if (null != findOldestResult) {
        const tmp5 = outer1_3(messages.toArray());
        let iter = tmp5();
        let tmp6 = findOldestResult;
        let tmp7 = findOldestResult;
        if (!iter.done) {
          const value = iter.value;
          tmp7 = tmp6;
          while (value.author.id === closure_1) {
            let length;
            if (null != tmp6) {
              length = tmp6.content.length;
            }
            if (value.content.length > length) {
              tmp6 = value;
            }
            let iter2 = tmp5();
            iter = iter2;
            tmp7 = tmp6;
            if (iter2.done) {
              break;
            }
          }
        }
        return tmp7;
      }
    }
  }, items1);
};
