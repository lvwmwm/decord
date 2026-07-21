// Module ID: 14798
// Function ID: 111557
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: useFirstGloballyViewbleGuildChannelId

// Module 14798 (_createForOfIteratorHelperLoose)
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
let closure_3 = importDefault(dependencyMap[0]);
const Permissions = arg1(dependencyMap[1]).Permissions;
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/permissions/useFirstGloballyViewbleGuildChannelId.tsx");

export const useFirstGloballyViewbleGuildChannelId = function useFirstGloballyViewbleGuildChannelId(guildId) {
  const arg1 = guildId;
  const items = [closure_3];
  const items1 = [guildId];
  return arg1(dependencyMap[2]).useStateFromStores(items, () => {
    if (null != arg0) {
      const selectableChannels = selectableChannels.getSelectableChannels(arg0);
      const tmp5 = callback2(selectableChannels);
      const iter = tmp5();
      let iter2 = iter;
      if (!iter.done) {
        const channel = iter2.value.channel;
        while (!obj.canEveryone(constants.VIEW_CHANNEL, channel)) {
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
