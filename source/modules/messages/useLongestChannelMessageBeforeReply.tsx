// Module ID: 11472
// Function ID: 89366
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: useLongestChannelMessageBeforeReply

// Module 11472 (_createForOfIteratorHelperLoose)
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
let closure_2 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/messages/useLongestChannelMessageBeforeReply.tsx");

export const useLongestChannelMessageBeforeReply = function useLongestChannelMessageBeforeReply(id, recipientId) {
  recipientId = id;
  const dependencyMap = recipientId;
  const items = [closure_2];
  const items1 = [id, recipientId];
  return recipientId(dependencyMap[1]).useStateFromStores(items, () => {
    if (null != arg1) {
      const messages = messages.getMessages(arg0);
      const findOldestResult = messages.findOldest((author) => author.author.id === closure_1);
      if (null != findOldestResult) {
        const tmp5 = callback(messages.toArray());
        let iter = tmp5();
        let tmp6 = findOldestResult;
        let tmp7 = findOldestResult;
        if (!iter.done) {
          const value = iter.value;
          tmp7 = tmp6;
          while (value.author.id === arg1) {
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
