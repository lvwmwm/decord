// Module ID: 14972
// Function ID: 114123
// Name: _createForOfIteratorHelperLoose
// Dependencies: [1907, 482, 566, 3763, 2]
// Exports: useFirstGloballyViewbleGuildChannelId

// Module 14972 (_createForOfIteratorHelperLoose)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { Permissions } from "sum";

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
const result = require("initialize").fileFinishedImporting("modules/permissions/useFirstGloballyViewbleGuildChannelId.tsx");

export const useFirstGloballyViewbleGuildChannelId = function useFirstGloballyViewbleGuildChannelId(guildId) {
  const _require = guildId;
  const items = [_isNativeReflectConstruct];
  const items1 = [guildId];
  return _require(566).useStateFromStores(items, () => {
    if (null != closure_0) {
      const selectableChannels = outer1_3.getSelectableChannels(closure_0);
      const tmp5 = outer1_5(selectableChannels);
      const iter = tmp5();
      let iter2 = iter;
      if (!iter.done) {
        const channel = iter2.value.channel;
        while (!obj.canEveryone(outer1_4.VIEW_CHANNEL, channel)) {
          let iter3 = tmp5();
          iter2 = iter3;
        }
        return channel.id;
      }
      let id;
      if (null != selectableChannels) {
        const first = selectableChannels[0];
        if (null != first) {
          id = first.channel.id;
        }
      }
      return id;
    }
  }, items1);
};
