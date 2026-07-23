// Module ID: 8454
// Function ID: 67441
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 1907, 1838, 3758, 653, 566, 8402, 2]
// Exports: default

// Module 8454 (_createForOfIteratorHelperLoose)
import _slicedToArray from "_slicedToArray";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { GUILD_VOCAL_CHANNELS_KEY } from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_6 from "_isNativeReflectConstruct";
import { Permissions } from "ME";

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
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/guild_scheduled_events/useCanCreateAnEvent.tsx");

export default function useCanCreateAnEvent(arg0, arg1) {
  const _require = arg0;
  const dependencyMap = arg1;
  const items = [_createForOfIteratorHelperLoose, _isNativeReflectConstruct, closure_6];
  const items1 = [arg0, arg1];
  return _require(566).useStateFromStores(items, () => {
    const guild = outer1_5.getGuild(callback);
    if (!outer1_6.can(outer1_7.ADMINISTRATOR, guild)) {
      if (!outer1_6.can(outer1_7.CREATE_EVENTS, guild)) {
        const tmp8 = outer1_8(outer1_3.getChannels(callback)[outer1_4]);
        let iter = tmp8();
        if (!iter.done) {
          while (true) {
            let channel = iter.value.channel;
            let tmp10 = table;
            if (null == table) {
              let tmp12 = callback;
              let tmp13 = table;
              let obj = callback(table[6]);
              let tmp14 = outer1_2;
              let tmp15 = outer1_6;
              if (outer1_6.can(outer1_2(obj.attachChannelPermissions(channel), 1)[0], channel)) {
                break;
              }
            } else {
              let tmp11 = table;
            }
            let iter2 = tmp8();
            iter = iter2;
          }
          return true;
        }
        return false;
      }
    }
    return true;
  }, items1);
};
