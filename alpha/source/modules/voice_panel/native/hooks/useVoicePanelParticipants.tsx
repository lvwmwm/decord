// Module ID: 19595
// Function ID: 19596
// Name: useVoicePanelParticipants
// Dependencies: [32, 19, 6901, 6815, 502, 4991, 5895, 5805, 5898, 11372, 1072, 11336, 19551, 504, 18659, 11371, 11374, 2]
// Exports: default, useChunkedParticipants

// Module 19595 (useVoicePanelParticipants)
import Constants from "Constants" /* 1072 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6901 */;
import StageChannelRoleStore from "StageChannelRoleStore" /* 6815 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 4991 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5895 */;
import VoiceStateStore from "VoiceStateStore" /* 5805 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 5898 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11372 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault, map, set, voiceParticipantsHidden;

let closure_12;
let map1;
function getMemoizedParticipant(item10013, get) {
  const combined = "" + item10013.type + "-" + item10013.id;
  let value = get.get(combined);
  if (null == value) {
    const result = get.set(combined, item10013);
    value = item10013;
  }
  return value;
}
({ VoicePanelCardItemType: closure_12, VoicePanelCTACard: map1 } = VoicePanelConstants);
const RTCConnectionStates = Constants.RTCConnectionStates;
let closure_15 = [];
let result = size.fileFinishedImporting("modules/voice_panel/native/hooks/useVoicePanelParticipants.tsx");

export default function useVoicePanelCards(arg0, arg1) {
  let closure_0;
  let closure_1;
  let desyncedChannelParticipants;
  let items2;
  let items3;
  let obj6;
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
  let obj2 = require("StageChannelUnifiedCallExperiment");
  const isStageUnifiedCall = obj2.useIsStageUnifiedCall(channel, "useVoicePanelCards");
  let tmp3 = require("useIsConnectedToVoiceChannel")(arg0);
  let closure_5 = tmp3;
  const first = flag(isStageUnifiedCall.useState(() => {
    map = new Map();
    return map;
  }), 1)[0];
  let items = [first];
  const effect = isStageUnifiedCall.useEffect(() => () => first.clear(), items);
  let obj3 = require("get initialized");
  let items1 = [RTCConnectionStore];
  stateFromStores = obj3.useStateFromStores(items1, () => state.getState() === constants2.RTC_CONNECTED);
  let obj4 = require("RTCConnectionDesyncHooks");
  desyncedChannelParticipants = obj4.useDesyncedChannelParticipants(arg0);
  let obj = {
    items: obj6.useStateFromStoresArray(items2, () => {
      let tmp2;
      const tmp3 = closure_5;
      if (tmp3) {
        let stageSpeakerParticipants;
        let obj = ChannelRTCStore;
        voiceParticipantsHidden = ChannelRTCStore.getVoiceParticipantsHidden(closure_0);
        const tmp11 = isStageUnifiedCall;
        if (tmp11) {
          stageSpeakerParticipants = obj.getStageSpeakerParticipants(tmp9);
        } else {
          stageSpeakerParticipants = obj.getFilteredParticipants(tmp9);
        }
        const items = [];
        HermesBuiltin.arraySpread(items, stageSpeakerParticipants, 0);
        if (!voiceParticipantsHidden) {
          if (null != desyncedChannelParticipants) {
            for (const item10038 of tmp18) {
              let tmp22 = item10038;
              let tmp23 = isStageUnifiedCall;
              if (tmp23) {
                tmp23 = !StageChannelRoleStore.isSpeaker(tmp22.user.id, closure_0);
              }
              if (!tmp23) {
                let arr = items.push(tmp22);
              }
              continue;
            }
          }
        }
        let items1 = [];
        for (const item10058 of items) {
          let obj2 = { type: constants.PARTICIPANT, id: item10058.id };
          let tmp35 = getMemoizedParticipant(obj2, first);
          let tmp36 = flag;
          if (tmp36) {
            if (tmp35.id === id) {
              tmp2 = tmp35;
              continue;
            }
          }
          let arr2 = items1.push(tmp35);
        }
        if (null != tmp2) {
          items1.push(tmp2);
        }
        const tmp44 = flag && stateFromStores && 1 === items1.length;
        if (tmp44) {
          const obj3 = { type: constants.CTA, id: map1.CALLER_DISCONNECTED };
          items1.push(getMemoizedParticipant(obj3, first));
        }
        const tmp50 = isStageUnifiedCall;
        if (tmp50) {
          if (0 === items.length) {
            const obj4 = { type: constants.CTA, id: map1.NO_STAGE_SPEAKERS };
            items1.push(getMemoizedParticipant(obj4, first));
          }
          if (items1.length <= 0) {
            items1 = closure_15;
          }
          return items1;
        }
        if (voiceParticipantsHidden) {
          voiceParticipantsHidden = 0 === items.length;
        }
        if (voiceParticipantsHidden) {
          const obj5 = { type: constants.CTA, id: map1.NO_VIDEO_PARTICIPANTS };
          items1.push(getMemoizedParticipant(obj5, first));
        }
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
          mapped = closure_15;
        }
        return mapped;
      }
    }, items3),
    isConnected: tmp3
  };
  items2 = [closure_5, SortedVoiceStateStore, first];
  items3 = [tmp3, desyncedChannelParticipants, arg0, arg1, first, flag, isStageUnifiedCall, id, stateFromStores];
  obj6 = require("get initialized");
  return obj;
};
export function useChunkedParticipants(channelId, arg1) {
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
      return closure_15;
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
          const obj = { type: constants.CTA, id: map1.NO_VIDEO_PARTICIPANTS };
          items.push(getMemoizedParticipant(obj, first));
        }
        if (items.length <= 0) {
          items = closure_15;
        }
        return items;
      } else {
        return items;
      }
    }
  }, items2);
}
