// Module ID: 16906
// Function ID: 16907
// Name: useVoicePanelParticipants
// Dependencies: [32, 19, 4852, 502, 2045, 4859, 4855, 4860, 11755, 1074, 16861, 504, 15868, 11754, 11757, 2]
// Exports: default, useChunkedParticipants

// Module 16906 (useVoicePanelParticipants)
import Constants from "Constants" /* 1074 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4852 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4859 */;
import VoiceStateStore from "VoiceStateStore" /* 4855 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 4860 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11755 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault, map, set;

let closure_12;
let unpackModuleId;
function getMemoizedParticipant(item10013, get) {
  const combined = "" + item10013.type + "-" + item10013.id;
  let value = get.get(combined);
  if (null == value) {
    const result = get.set(combined, item10013);
    value = item10013;
  }
  return value;
}
let react = react_mod;
({ VoicePanelCardItemType: unpackModuleId, VoicePanelCTACard: closure_12 } = VoicePanelConstants);
const RTCConnectionStates = Constants.RTCConnectionStates;
let closure_14 = [];
let result = size.fileFinishedImporting("modules/voice_panel/native/hooks/useVoicePanelParticipants.tsx");

export default function useVoicePanelCards(arg0, arg1) {
  let closure_0;
  let closure_1;
  let closure_4;
  let desyncedChannelParticipants;
  let items2;
  let items3;
  let obj5;
  let state;
  let stateFromStores;
  _require = arg0;
  importDefault = arg1;
  const id = stateFromStores.getId();
  const channel = desyncedChannelParticipants.getChannel(arg0);
  let flag;
  if (channel != null) {
    flag = channel.isDM();
  }
  if (flag == null) {
    flag = false;
  }
  let tmp2 = require("useIsConnectedToVoiceChannel")(arg0);
  react = tmp2;
  const first = flag(react.useState(() => {
    map = new Map();
    return map;
  }), 1)[0];
  let items = [first];
  const effect = react.useEffect(() => () => first.clear(), items);
  let obj2 = require("get initialized");
  let items1 = [RTCConnectionStore];
  stateFromStores = obj2.useStateFromStores(items1, () => state.getState() === constants2.RTC_CONNECTED);
  let obj3 = require("RTCConnectionDesyncHooks");
  desyncedChannelParticipants = obj3.useDesyncedChannelParticipants(arg0);
  let obj = {
    items: obj5.useStateFromStoresArray(items2, () => {
      let tmp;
      const tmp2 = closure_4;
      if (tmp2) {
        let voiceParticipantsHidden = ChannelRTCStore.getVoiceParticipantsHidden(closure_0);
        const items = [];
        const filteredParticipants = ChannelRTCStore.getFilteredParticipants(closure_0);
        for (const item10024 of filteredParticipants) {
          let arr = items.push(item10024);
          continue;
        }
        if (!voiceParticipantsHidden) {
          if (null != desyncedChannelParticipants) {
            for (const item10034 of tmp13) {
              let arr2 = items.push(item10034);
              continue;
            }
          }
        }
        let items1 = [];
        const tmp19 = items[Symbol.iterator]();
        while (tmp19 !== undefined) {
          let obj = { type: unpackModuleId.PARTICIPANT, id: tmp21.id };
          let tmp26 = getMemoizedParticipant(obj, first);
          let tmp27 = flag;
          if (tmp27) {
            if (tmp26.id === id) {
              tmp = tmp26;
              continue;
            }
          }
          let arr3 = items1.push(tmp26);
        }
        if (null != tmp) {
          items1.push(tmp);
        }
        const tmp35 = flag && stateFromStores && 1 === items1.length;
        if (tmp35) {
          let obj2 = { type: unpackModuleId.CTA, id: constants.CALLER_DISCONNECTED };
          items1.push(getMemoizedParticipant(obj2, first));
        }
        if (voiceParticipantsHidden) {
          voiceParticipantsHidden = 0 === items.length;
        }
        if (voiceParticipantsHidden) {
          const obj3 = { type: unpackModuleId.CTA, id: constants.NO_VIDEO_PARTICIPANTS };
          items1.push(getMemoizedParticipant(obj3, first));
        }
        if (items1.length <= 0) {
          items1 = closure_14;
        }
        return items1;
      } else {
        const voiceStatesForChannelAlt = SortedVoiceStateStore.getVoiceStatesForChannelAlt(closure_0, closure_1);
        let mapped = voiceStatesForChannelAlt.map((id) => {
          const obj = { type: constants.PARTICIPANT, id: id.user.id };
          const combined = "" + obj.type + "-" + obj.id;
          let value = first.get(combined);
          const obj2 = first;
          if (null == value) {
            const result = obj2.set(combined, obj);
            value = obj;
          }
          return value;
        });
        if (mapped.length <= 0) {
          mapped = closure_14;
        }
        return mapped;
      }
    }, items3),
    isConnected: tmp2
  };
  items2 = [first, SortedVoiceStateStore];
  items3 = [tmp2, desyncedChannelParticipants, arg0, arg1, first, flag, id, stateFromStores];
  obj5 = require("get initialized");
  return obj;
};
export const useChunkedParticipants = function useChunkedParticipants(channelId, arg1) {
  let closure_1;
  let managerSubscription;
  _require = channelId;
  importDefault = arg1;
  const id = AuthenticationStore.getId();
  const layoutManager = managerSubscription.useContext(require("VoicePanelStateContext")).layoutManager;
  let obj = require("VoicePanelCardLayoutManager");
  managerSubscription = obj.useManagerSubscription(layoutManager);
  const first = layoutManager(managerSubscription.useState(() => {
    map = new Map();
    return map;
  }), 1)[0];
  let items = [first];
  const effect = managerSubscription.useEffect(() => () => first.clear(), items);
  let items1 = [VoiceStateStore, first];
  const items2 = [channelId, first, layoutManager, arg1, managerSubscription, id];
  const obj2 = require("get initialized");
  return obj2.useStateFromStoresArray(items1, function() {
    let chunk;
    if (managerSubscription < 0) {
      return closure_14;
    } else {
      let items = [];
      if (VoiceStateStore.isInChannel(channelId, id)) {
        const _Set = Set;
        const self = this;
        const self2 = this;
        set = new Set((() => {
          let end;
          const items = [];
          let start = closure_1_1.start;
          if (start <= closure_1_1.end) {
            do {
              let push = items.push;
              let _Array = Array;
              let items1 = [];
              let arraySpreadResult = HermesBuiltin.arraySpread(items1, Array.from(chunk.getChunk(start)), 0);
              let applyResult = HermesBuiltin.apply(push, items1, items);
              start = start + 1;
              end = closure_1_1.end;
            } while (start <= end);
          }
          return items;
        })());
        let tmp3 = set;
        for (const item10013 of set) {
          let tmp5 = getMemoizedParticipant;
          let tmp6 = first;
          let arr = items.push(getMemoizedParticipant(item10013, first));
          continue;
        }
        let tmp9 = channelId;
        const tmp10 = ChannelRTCStore.getVoiceParticipantsHidden(channelId) && 0 === items.length;
        if (tmp10) {
          const obj = { type: unpackModuleId.CTA, id: constants.NO_VIDEO_PARTICIPANTS };
          items.push(getMemoizedParticipant(obj, first));
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
