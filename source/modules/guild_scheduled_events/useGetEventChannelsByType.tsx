// Module ID: 8444
// Function ID: 67079
// Name: _createForOfIteratorHelperLoose
// Dependencies: [1353, 1907, 3758, 8445, 566, 8446, 2]
// Exports: useCanCreateEventInStageChannel, useCanCreateEventInVoiceChannel, useGetEventChannelsByType

// Module 8444 (_createForOfIteratorHelperLoose)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import { GUILD_VOCAL_CHANNELS_KEY } from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import VIEW_CHANNEL from "VIEW_CHANNEL";

let closure_6;
let closure_7;
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
function getEventChannelsByType(id, channelTypeFromEntity) {
  let iter;
  let obj;
  let tmp = arg2;
  if (arg2 === undefined) {
    const items = [closure_3];
    tmp = items;
  }
  [obj] = tmp;
  if (null == channelTypeFromEntity) {
    return [];
  } else {
    const items1 = [];
    const tmp13 = _createForOfIteratorHelperLoose(obj.getChannels(id)[GUILD_VOCAL_CHANNELS_KEY]);
    let iter2 = tmp13();
    if (!iter2.done) {
      do {
        let channel = iter2.value.channel;
        let tmp3 = require;
        let tmp4 = dependencyMap;
        let obj2 = require(8446) /* canManageResource */;
        let manageResourcePermissions = obj2.getManageResourcePermissions(channel);
        let tmp6 = manageResourcePermissions.canCreateGuildEvent || manageResourcePermissions.canManageAllEvents;
        if (channel.type === channelTypeFromEntity) {
          let tmp7 = channel.isGuildVoice() && tmp6;
          if (!tmp7) {
            let tmp8 = channel.isGuildStageVoice() && tmp6;
            tmp7 = tmp8;
          }
          if (tmp7) {
            let arr = items1.push(channel);
          }
        }
        iter = tmp13();
        iter2 = iter;
      } while (!iter.done);
    }
    return items1;
  }
}
({ CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS: closure_6, CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS: closure_7 } = VIEW_CHANNEL);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_scheduled_events/useGetEventChannelsByType.tsx");

export const useCanCreateEventInStageChannel = function useCanCreateEventInStageChannel(isGuildStageVoice) {
  const _require = isGuildStageVoice;
  const items = [closure_5];
  const items1 = [isGuildStageVoice];
  const stateFromStores = _require(566).useStateFromStores(items, () => outer1_5.can(outer1_7, closure_0), items1);
  const obj = _require(566);
  const items2 = [_isNativeReflectConstruct];
  const stateFromStores1 = _require(566).useStateFromStores(items2, () => outer1_2.getStageInstanceByChannel(isGuildStageVoice.id));
  let tmp3 = isGuildStageVoice.isGuildStageVoice() && stateFromStores;
  if (tmp3) {
    tmp3 = null == stateFromStores1;
  }
  return tmp3;
};
export const useCanCreateEventInVoiceChannel = function useCanCreateEventInVoiceChannel(isGuildVoice) {
  const _require = isGuildVoice;
  const items = [closure_5];
  const items1 = [isGuildVoice];
  const stateFromStores = _require(566).useStateFromStores(items, () => outer1_5.can(outer1_6, closure_0), items1);
  const obj = _require(566);
  return isGuildVoice.isGuildVoice() && stateFromStores;
};
export { getEventChannelsByType };
export const useGetEventChannelsByType = function useGetEventChannelsByType(id, channelType) {
  const _require = id;
  const dependencyMap = channelType;
  let items = [closure_3];
  const items1 = [id, channelType];
  return _require(566).useStateFromStoresArray(items, () => {
    const items = [outer1_3];
    return outer1_10(closure_0, closure_1, items);
  }, items1);
};
