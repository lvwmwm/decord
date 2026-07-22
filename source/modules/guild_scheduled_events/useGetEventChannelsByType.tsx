// Module ID: 8394
// Function ID: 66814
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: useCanCreateEventInStageChannel, useCanCreateEventInVoiceChannel, useGetEventChannelsByType

// Module 8394 (_createForOfIteratorHelperLoose)
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
    const tmp13 = _createForOfIteratorHelperLoose(obj.getChannels(id)[closure_4]);
    let iter2 = tmp13();
    if (!iter2.done) {
      do {
        let channel = iter2.value.channel;
        let tmp3 = closure_0;
        let tmp4 = closure_1;
        let obj2 = closure_0(closure_1[5]);
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
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const GUILD_VOCAL_CHANNELS_KEY = arg1(dependencyMap[1]).GUILD_VOCAL_CHANNELS_KEY;
let closure_5 = importDefault(dependencyMap[2]);
({ CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS: closure_6, CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS: closure_7 } = arg1(dependencyMap[3]));
const tmp2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/guild_scheduled_events/useGetEventChannelsByType.tsx");

export const useCanCreateEventInStageChannel = function useCanCreateEventInStageChannel(isGuildStageVoice) {
  const arg1 = isGuildStageVoice;
  const items = [closure_5];
  const items1 = [isGuildStageVoice];
  const stateFromStores = arg1(dependencyMap[4]).useStateFromStores(items, () => closure_5.can(closure_7, arg0), items1);
  const obj = arg1(dependencyMap[4]);
  const items2 = [closure_2];
  const stateFromStores1 = arg1(dependencyMap[4]).useStateFromStores(items2, () => stageInstanceByChannel.getStageInstanceByChannel(arg0.id));
  let tmp3 = isGuildStageVoice.isGuildStageVoice() && stateFromStores;
  if (tmp3) {
    tmp3 = null == stateFromStores1;
  }
  return tmp3;
};
export const useCanCreateEventInVoiceChannel = function useCanCreateEventInVoiceChannel(isGuildVoice) {
  const arg1 = isGuildVoice;
  const items = [closure_5];
  const items1 = [isGuildVoice];
  const stateFromStores = arg1(dependencyMap[4]).useStateFromStores(items, () => closure_5.can(closure_6, arg0), items1);
  const obj = arg1(dependencyMap[4]);
  return isGuildVoice.isGuildVoice() && stateFromStores;
};
export { getEventChannelsByType };
export const useGetEventChannelsByType = function useGetEventChannelsByType(id, channelType) {
  channelType = id;
  const dependencyMap = channelType;
  const items = [closure_3];
  const items1 = [id, channelType];
  return channelType(dependencyMap[4]).useStateFromStoresArray(items, () => {
    const items = [closure_3];
    return callback(arg0, arg1, items);
  }, items1);
};
