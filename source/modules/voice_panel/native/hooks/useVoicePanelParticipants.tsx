// Module ID: 15648
// Function ID: 119478
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: default, useChunkedParticipants

// Module 15648 (_createForOfIteratorHelperLoose)
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
function getMemoizedParticipant(type, get) {
  const combined = "" + type.type + "-" + type.id;
  let value = get.get(combined);
  if (null == value) {
    const result = get.set(combined, type);
    value = type;
  }
  return value;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
({ VoicePanelCardItemType: closure_11, VoicePanelCTACard: closure_12 } = arg1(dependencyMap[8]));
const RTCConnectionStates = arg1(dependencyMap[9]).RTCConnectionStates;
let closure_14 = [];
const tmp2 = arg1(dependencyMap[8]);
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/voice_panel/native/hooks/useVoicePanelParticipants.tsx");

export default function useVoicePanelCards(channelId) {
  const arg1 = channelId;
  const importDefault = arg1;
  const id = store.getId();
  const dependencyMap = id;
  let channel = channel.getChannel(channelId);
  let isDMResult;
  if (null != channel) {
    isDMResult = channel.isDM();
  }
  const callback = tmp3;
  const tmp4 = importDefault(dependencyMap[10])(channelId);
  const React = tmp4;
  const first = callback(React.useState(() => new Map()), 1)[0];
  let closure_5 = first;
  const items = [first];
  const effect = React.useEffect(() => () => closure_5.clear(), items);
  const items1 = [closure_8];
  const stateFromStores = arg1(dependencyMap[11]).useStateFromStores(items1, () => state.getState() === constants3.RTC_CONNECTED);
  const store = stateFromStores;
  const obj2 = arg1(dependencyMap[11]);
  const desyncedChannelParticipants = arg1(dependencyMap[12]).useDesyncedChannelParticipants(channelId);
  channel = desyncedChannelParticipants;
  const obj = {};
  const obj3 = arg1(dependencyMap[12]);
  const items2 = [closure_5, closure_10];
  const items3 = [tmp4, desyncedChannelParticipants, channelId, arg1, first, null != isDMResult && isDMResult, id, stateFromStores];
  obj.items = arg1(dependencyMap[11]).useStateFromStoresArray(items2, () => {
    let done;
    let length;
    if (tmp4) {
      let voiceParticipantsHidden = first.getVoiceParticipantsHidden(arg0);
      const items = [];
      const filteredParticipants = first.getFilteredParticipants(arg0);
      let num3 = 0;
      if (0 < filteredParticipants.length) {
        do {
          let arr = items.push(filteredParticipants[num3]);
          num3 = num3 + 1;
          length = filteredParticipants.length;
        } while (num3 < length);
      }
      if (!voiceParticipantsHidden) {
        if (null != desyncedChannelParticipants) {
          const tmp12 = callback(desyncedChannelParticipants);
          let iter = tmp12();
          if (!iter.done) {
            do {
              arr = items.push(iter.value);
              let iter2 = tmp12();
              iter = iter2;
              done = iter2.done;
            } while (!done);
          }
        }
      }
      let items1 = [];
      let items2 = items;
      if (null == items) {
        items2 = [];
      }
      let num4 = 0;
      let tmp16;
      if (0 < items2.length) {
        do {
          let tmp17 = closure_17;
          let obj = {};
          let tmp18 = closure_11;
          obj.type = closure_11.PARTICIPANT;
          obj.id = items2[num4].id;
          let tmp19 = closure_5;
          let tmp20 = closure_17(obj, closure_5);
          let tmp21 = closure_3;
          if (!closure_3) {
            let arr1 = items1.push(tmp20);
            let tmp23 = tmp15;
          } else {
            let tmp22 = closure_2;
            tmp23 = tmp20;
          }
          num4 = num4 + 1;
          let tmp15 = tmp23;
          tmp16 = tmp23;
        } while (num4 < items2.length);
      }
      if (null != tmp16) {
        items1.push(tmp16);
      }
      let tmp26 = tmp3;
      if (tmp3) {
        tmp26 = stateFromStores;
      }
      if (tmp26) {
        tmp26 = 1 === items1.length;
      }
      if (tmp26) {
        obj = { type: constants.CTA, id: constants2.CALLER_DISCONNECTED };
        items1.push(callback2(obj, first));
      }
      if (voiceParticipantsHidden) {
        voiceParticipantsHidden = 0 === items.length;
      }
      if (voiceParticipantsHidden) {
        obj = { type: constants.CTA, id: constants2.NO_VIDEO_PARTICIPANTS };
        items1.push(callback2(obj, first));
      }
      if (items1.length <= 0) {
        items1 = closure_14;
      }
      return items1;
    } else {
      const voiceStatesForChannelAlt = voiceStatesForChannelAlt.getVoiceStatesForChannelAlt(arg0, arg1);
      let mapped = voiceStatesForChannelAlt.map((id) => callback({ type: constants.PARTICIPANT, id: id.user.id }, closure_5));
      if (mapped.length <= 0) {
        mapped = closure_14;
      }
      return mapped;
    }
  }, items3);
  obj.isConnected = tmp4;
  return obj;
};
export const useChunkedParticipants = function useChunkedParticipants(channelId, arg1) {
  arg1 = channelId;
  const importDefault = arg1;
  const id = store.getId();
  const dependencyMap = id;
  const layoutManager = React.useContext(importDefault(dependencyMap[13])).layoutManager;
  const callback = layoutManager;
  const managerSubscription = arg1(dependencyMap[14]).useManagerSubscription(layoutManager);
  const React = managerSubscription;
  const first = callback(React.useState(() => new Map()), 1)[0];
  let closure_5 = first;
  const items = [first];
  const effect = React.useEffect(() => () => closure_5.clear(), items);
  const obj = arg1(dependencyMap[14]);
  const items1 = [closure_9, closure_5];
  const items2 = [channelId, first, layoutManager, arg1, managerSubscription, id];
  return arg1(dependencyMap[11]).useStateFromStoresArray(items1, (arg0, self) => {
    let done;
    let end;
    if (managerSubscription < 0) {
      return closure_14;
    } else {
      let items = [];
      if (inChannel.isInChannel(arg0, id)) {
        let _Set = Set;
        const items1 = [];
        let start = self.start;
        if (start <= self.end) {
          do {
            let tmp4 = closure_3;
            let push = items1.push;
            let _Array = Array;
            let items2 = [];
            let tmp5 = items2;
            let num = 0;
            let arraySpreadResult = HermesBuiltin.arraySpread(Array.from(closure_3.getChunk(start)), 0);
            let tmp7 = push;
            let tmp8 = items2;
            let tmp9 = items1;
            let applyResult = HermesBuiltin.apply(items2, items1);
            start = start + 1;
            let tmp11 = closure_1;
            end = closure_1.end;
          } while (start <= end);
        }
        const prototype = _Set.prototype;
        _Set = new _Set(items1);
        const tmpResult = closure_15(_Set);
        let iter = tmpResult();
        if (!iter.done) {
          do {
            let tmp18 = closure_17;
            let tmp19 = closure_5;
            let arr = items.push(closure_17(iter.value, closure_5));
            let iter2 = tmpResult();
            iter = iter2;
            done = iter2.done;
          } while (!done);
        }
        if (tmp23) {
          const obj = { type: constants.CTA, id: constants2.NO_VIDEO_PARTICIPANTS };
          items.push(callback(obj, first));
        }
        if (items.length <= 0) {
          items = closure_14;
        }
        return items;
      } else {
        return items;
      }
    }
  }, items2);
};
