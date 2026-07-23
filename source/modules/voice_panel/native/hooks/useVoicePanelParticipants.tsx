// Module ID: 15765
// Function ID: 121651
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 31, 4143, 1194, 1348, 4202, 4146, 4203, 10015, 653, 15719, 566, 15058, 10014, 10017, 2]
// Exports: default, useChunkedParticipants

// Module 15765 (_createForOfIteratorHelperLoose)
import _slicedToArray from "_slicedToArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import VoicePanelModes from "VoicePanelModes";
import { RTCConnectionStates } from "ME";

let closure_11;
let closure_12;
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
function getMemoizedParticipant(type, get) {
  const combined = "" + type.type + "-" + type.id;
  let value = get.get(combined);
  if (null == value) {
    const result = get.set(combined, type);
    value = type;
  }
  return value;
}
({ VoicePanelCardItemType: closure_11, VoicePanelCTACard: closure_12 } = VoicePanelModes);
let closure_14 = [];
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/voice_panel/native/hooks/useVoicePanelParticipants.tsx");

export default function useVoicePanelCards(channelId) {
  const _require = channelId;
  const importDefault = arg1;
  const id = stateFromStores.getId();
  const channel = desyncedChannelParticipants.getChannel(channelId);
  let isDMResult;
  if (null != channel) {
    isDMResult = channel.isDM();
  }
  const callback = tmp3;
  const tmp4 = importDefault(id[10])(channelId);
  const React = tmp4;
  const first = callback(React.useState(() => new Map()), 1)[0];
  let items = [first];
  const effect = React.useEffect(() => () => outer1_5.clear(), items);
  let items1 = [closure_8];
  stateFromStores = _require(id[11]).useStateFromStores(items1, () => outer1_8.getState() === outer1_13.RTC_CONNECTED);
  const obj2 = _require(id[11]);
  desyncedChannelParticipants = _require(id[12]).useDesyncedChannelParticipants(channelId);
  let obj = {};
  const obj3 = _require(id[12]);
  let items2 = [first, closure_10];
  const items3 = [tmp4, desyncedChannelParticipants, channelId, arg1, first, null != isDMResult && isDMResult, id, stateFromStores];
  obj.items = _require(id[11]).useStateFromStoresArray(items2, () => {
    let done;
    let length;
    if (result) {
      let voiceParticipantsHidden = first.getVoiceParticipantsHidden(closure_0);
      const items = [];
      const filteredParticipants = first.getFilteredParticipants(closure_0);
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
          const tmp12 = outer1_15(desyncedChannelParticipants);
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
          let tmp17 = outer1_17;
          let obj = {};
          let tmp18 = outer1_11;
          obj.type = outer1_11.PARTICIPANT;
          obj.id = items2[num4].id;
          let tmp19 = first;
          let tmp20 = outer1_17(obj, first);
          let tmp21 = _slicedToArray;
          if (!_slicedToArray) {
            let arr1 = items1.push(tmp20);
            let tmp23 = tmp15;
          } else {
            let tmp22 = id;
            tmp23 = tmp20;
          }
          num4 = num4 + 1;
          tmp15 = tmp23;
          tmp16 = tmp23;
        } while (num4 < items2.length);
      }
      if (null != tmp16) {
        items1.push(tmp16);
      }
      let tmp26 = _slicedToArray;
      if (_slicedToArray) {
        tmp26 = stateFromStores;
      }
      if (tmp26) {
        tmp26 = 1 === items1.length;
      }
      if (tmp26) {
        obj = { type: outer1_11.CTA, id: outer1_12.CALLER_DISCONNECTED };
        items1.push(outer1_17(obj, first));
      }
      if (voiceParticipantsHidden) {
        voiceParticipantsHidden = 0 === items.length;
      }
      if (voiceParticipantsHidden) {
        obj = { type: outer1_11.CTA, id: outer1_12.NO_VIDEO_PARTICIPANTS };
        items1.push(outer1_17(obj, first));
      }
      if (items1.length <= 0) {
        items1 = outer1_14;
      }
      return items1;
    } else {
      const voiceStatesForChannelAlt = outer1_10.getVoiceStatesForChannelAlt(closure_0, closure_1);
      let mapped = voiceStatesForChannelAlt.map((id) => outer2_17({ type: outer2_11.PARTICIPANT, id: id.user.id }, outer1_5));
      if (mapped.length <= 0) {
        mapped = outer1_14;
      }
      return mapped;
    }
  }, items3);
  obj.isConnected = tmp4;
  return obj;
};
export const useChunkedParticipants = function useChunkedParticipants(channelId, arg1) {
  const _require = channelId;
  const importDefault = arg1;
  id = id.getId();
  const layoutManager = managerSubscription.useContext(importDefault(id[13])).layoutManager;
  managerSubscription = _require(id[14]).useManagerSubscription(layoutManager);
  const first = layoutManager(managerSubscription.useState(() => new Map()), 1)[0];
  let items = [first];
  const effect = managerSubscription.useEffect(() => () => outer1_5.clear(), items);
  let obj = _require(id[14]);
  let items1 = [closure_9, first];
  let items2 = [channelId, first, layoutManager, arg1, managerSubscription, id];
  return _require(id[11]).useStateFromStoresArray(items1, () => {
    let done;
    let end;
    if (managerSubscription < 0) {
      return outer1_14;
    } else {
      let items = [];
      if (outer1_9.isInChannel(closure_0, id)) {
        let _Set = Set;
        const items1 = [];
        let start = closure_1.start;
        if (start <= closure_1.end) {
          do {
            let tmp4 = layoutManager;
            let push = items1.push;
            let _Array = Array;
            let items2 = [];
            let tmp5 = items2;
            let num = 0;
            let arraySpreadResult = HermesBuiltin.arraySpread(Array.from(layoutManager.getChunk(start)), 0);
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
        const tmpResult = outer1_15(_Set);
        let iter = tmpResult();
        if (!iter.done) {
          do {
            let tmp18 = outer1_17;
            let tmp19 = first;
            let arr = items.push(outer1_17(iter.value, first));
            let iter2 = tmpResult();
            iter = iter2;
            done = iter2.done;
          } while (!done);
        }
        if (tmp23) {
          const obj = { type: outer1_11.CTA, id: outer1_12.NO_VIDEO_PARTICIPANTS };
          items.push(outer1_17(obj, first));
        }
        if (items.length <= 0) {
          items = outer1_14;
        }
        return items;
      } else {
        return items;
      }
    }
  }, items2);
};
