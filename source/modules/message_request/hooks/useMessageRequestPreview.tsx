// Module ID: 11628
// Function ID: 90271
// Name: _createForOfIteratorHelperLoose
// Dependencies: [5, 4349, 4142, 11629, 653, 566, 22, 507, 686, 2]
// Exports: useMessageRequestPreview

// Module 11628 (_createForOfIteratorHelperLoose)
import initialize from "initialize";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import { Endpoints } from "ME";
import set from "_isNativeReflectConstruct";

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
function loadMessageRequestData() {
  return _loadMessageRequestData(...arguments);
}
function _loadMessageRequestData() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function loadMessageRequestDataHelper() {
  return _loadMessageRequestDataHelper(...arguments);
}
function _loadMessageRequestDataHelper() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
let set = new Set();
let c9 = null;
const result = set.fileFinishedImporting("modules/message_request/hooks/useMessageRequestPreview.tsx");

export const useMessageRequestPreview = function useMessageRequestPreview(channel, arg1) {
  let error;
  let loaded;
  let message;
  let obj = arg1;
  const id = channel.id;
  if (arg1 === undefined) {
    obj = {};
  }
  let flag = obj.enabled;
  if (flag === undefined) {
    flag = true;
  }
  const items = [closure_6, _isNativeReflectConstruct, closure_5];
  const items1 = [id];
  const stateFromStoresObject = id(566).useStateFromStoresObject(items, () => {
    const lastMessageIdResult = outer1_5.lastMessageId(id);
    const messageRequestPreview = outer1_6.getMessageRequestPreview(id);
    if (null == messageRequestPreview.message) {
      if (null != lastMessageIdResult) {
        const message = outer1_4.getMessage(id, lastMessageIdResult);
        if (null != message) {
          const obj = { loaded: true, error: false, message };
          return obj;
        }
      }
    }
    return messageRequestPreview;
  }, items1);
  ({ loaded, message, error } = stateFromStoresObject);
  const obj2 = id(566);
  const items2 = [closure_6];
  const items3 = [id];
  const stateFromStores = id(566).useStateFromStores(items2, () => outer1_6.shouldLoadMessageRequestPreview(id), items3);
  if (flag) {
    flag = !loaded;
  }
  if (flag) {
    flag = null == message;
  }
  if (flag) {
    flag = stateFromStores;
  }
  if (flag) {
    set.add(id);
    if (null == timeout) {
      const _setTimeout = setTimeout;
      timeout = setTimeout(loadMessageRequestData, 0);
    }
  }
  return { loaded, error, message };
};
