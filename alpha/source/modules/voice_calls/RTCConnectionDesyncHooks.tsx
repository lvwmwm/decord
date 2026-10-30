// Module ID: 18241
// Function ID: 18242
// Name: RTCConnectionDesyncHooks
// Dependencies: [32, 19, 502, 15600, 5759, 5674, 1072, 12, 504, 6845, 18242, 2]
// Exports: useDesyncedChannelParticipants, useEnsureSyncedChannelParticipants, useEnsureSyncedChannelVoiceStates, useIsRTCDisconnectedUIVisible, useIsSelfDisconnectedUIVisible

// Module 18241 (RTCConnectionDesyncHooks)
import Constants from "Constants" /* 1072 */;
import VoiceConnectFeedbackExperimentDefault from "VoiceConnectFeedbackExperiment" /* 18242 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import RTCConnectionDesyncStore from "RTCConnectionDesyncStore" /* 15600 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5759 */;
import VoiceStateStore from "VoiceStateStore" /* 5674 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, desyncedParticipants, set;

const f113803 = () => {
  desyncedParticipants = null;
  if (closure_0 === channelId.getChannelId()) {
    desyncedParticipants = desyncedParticipants.getDesyncedParticipants();
  }
  return desyncedParticipants;
};
let _slicedToArray = _slicedToArray_mod;
const RTCConnectionStates = Constants.RTCConnectionStates;
const result = size.fileFinishedImporting("modules/voice_calls/RTCConnectionDesyncHooks.tsx");

export function useEnsureSyncedChannelVoiceStates(id, voiceStates) {
  let stateFromStores;
  _require = id;
  let closure_1 = voiceStates;
  let obj = require("get initialized");
  let items = [RTCConnectionDesyncStore, RTCConnectionStore];
  stateFromStores = obj.useStateFromStores(items, () => {
    let desyncedVoiceStates = null;
    if (id === RTCConnectionStore.getChannelId()) {
      desyncedVoiceStates = RTCConnectionDesyncStore.getDesyncedVoiceStates();
    }
    return desyncedVoiceStates;
  });
  const items1 = [stateFromStores, voiceStates];
  return react.useMemo(() => {
    function syncChannelVoiceStates(stateFromStores, arg1) {
      if (null != stateFromStores) {
        if (0 !== stateFromStores.length) {
          const items = [];
          const _Set = Set;
          const self = this;
          const self2 = this;
          set = new Set();
          const iter = arg1[Symbol.iterator]();
          const nextResult = iter.next();
          while (iter !== undefined) {
            let arr = items.push(nextResult);
            let addResult = set.add(nextResult.user.id);
            continue;
          }
          if (stateFromStores != null) {
            const item = stateFromStores.forEach((item) => {
              const splice = items.splice;
              const obj = id(stateFromStores[7]);
              splice(obj.sortedIndexBy(items, item, (comparator) => comparator.comparator), 0, item);
            });
          }
          return items;
        }
      }
      return arg1;
    }
    return syncChannelVoiceStates(stateFromStores, voiceStates);
  }, items1);
}
export function useDesyncedChannelParticipants(arg0) {
  let closure_0;
  _require = arg0;
  const items = [RTCConnectionDesyncStore, RTCConnectionStore];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, f113803);
}
export function useEnsureSyncedChannelParticipants(arg0, arg1) {
  let channelId;
  let closure_0;
  _require = arg0;
  let obj = require("get initialized");
  let items = [RTCConnectionDesyncStore, RTCConnectionStore];
  const stateFromStores = obj.useStateFromStores(items, f113803);
  const items1 = [stateFromStores, arg1];
  return react.useMemo(() => {
    let tmp3 = closure_0;
    if (null != stateFromStores) {
      tmp3 = tmp2;
      if (0 !== stateFromStores.length) {
        const items = [];
        HermesBuiltin.arraySpread(items, closure_0, 0);
        const item = arr.forEach((item) => {
          const splice = items.splice;
          let obj = closure_2_0(closure_2_2[7]);
          splice(obj.sortedIndexBy(items, item, (arg0) => {
            const obj = items(closure_1_2[9]);
            return obj.sortKey(arg0);
          }), 0, item);
        });
        tmp3 = items;
      }
    }
    return tmp3;
  }, items1);
}
export function useIsSelfDisconnectedUIVisible(arg0) {
  let closure_0;
  _require = arg0;
  const items = [AuthenticationStore];
  const obj = require("get initialized");
  let stateFromStores = obj.useStateFromStores(items, () => AuthenticationStore.getId() === closure_0);
  const obj2 = VoiceConnectFeedbackExperimentDefault;
  const showSelfConnectingUI = obj2.useConfig({ location: "useIsSelfDisconnectedUIVisible" }).showSelfConnectingUI;
  const items1 = [RTCConnectionStore];
  const obj3 = require("get initialized");
  const stateFromStores1 = obj3.useStateFromStores(items1, () => RTCConnectionStore.getState());
  const items2 = [RTCConnectionStore];
  const obj4 = require("get initialized");
  if (stateFromStores) {
    stateFromStores = obj4.useStateFromStores(items2, () => RTCConnectionStore.getWasEverRtcConnected());
  }
  if (stateFromStores) {
    stateFromStores = stateFromStores1 !== RTCConnectionStates.RTC_CONNECTED;
  }
  if (stateFromStores) {
    stateFromStores = showSelfConnectingUI;
  }
  return stateFromStores;
}
export function useIsRTCDisconnectedUIVisible(arg0, arg1) {
  let closure_0;
  let ref;
  let stateFromStores1;
  let stateFromStores3;
  let tmp4;
  let tmp6;
  _require = arg0;
  let closure_1 = arg1;
  const items = [AuthenticationStore];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => AuthenticationStore.getId() === closure_1);
  const items1 = [stateFromStores3];
  const obj2 = require("get initialized");
  stateFromStores1 = obj2.useStateFromStores(items1, () => stateFromStores3.getChannelId());
  _slicedToArray = react.useRef(null);
  const tmp3 = _slicedToArray(react.useState(false), 2);
  [tmp4, react] = tmp3;
  [tmp6, AuthenticationStore] = _slicedToArray(react.useState(false), 2);
  const items2 = [stateFromStores3, VoiceStateStore];
  const tmp5 = _slicedToArray(react.useState(false), 2);
  const obj3 = require("get initialized");
  const stateFromStores2 = obj3.useStateFromStores(items2, () => {
    const isUserConnectedResult = null != closure_1 && null != closure_0 && RTCConnectionStore.getChannelId() === closure_0 && null != VoiceStateStore.isInChannel(closure_0, tmp) && RTCConnectionStore.isUserConnected(tmp);
    return isUserConnectedResult;
  });
  const items3 = [stateFromStores3, VoiceStateStore];
  const obj4 = require("get initialized");
  stateFromStores3 = obj4.useStateFromStores(items3, () => {
    const tmp2 = null != closure_1 && null != closure_0 && RTCConnectionStore.getChannelId() === closure_0 && null != VoiceStateStore.isInChannel(closure_0, tmp) && !RTCConnectionStore.isUserConnected(tmp);
    return tmp2;
  });
  const items4 = [stateFromStores2];
  const effect = react.useEffect(() => {
    const tmp = stateFromStores2;
    if (tmp) {
      AuthenticationStore(true);
    }
  }, items4);
  const items5 = [arg0, stateFromStores1];
  const effect1 = react.useEffect(() => {
    if (stateFromStores1 !== closure_0) {
      AuthenticationStore(false);
    }
  }, items5);
  const items6 = [stateFromStores3];
  const effect2 = react.useEffect(() => {
    const tmp = stateFromStores3;
    if (tmp) {
      if (null == ref.current) {
        const _setTimeout = setTimeout;
        tmp2.current = setTimeout(() => {
          ref.current = null;
          closure_1_4(true);
        }, 250);
      }
      return () => {
        clearTimeout(ref.current);
        ref.current = null;
      };
    }
    clearTimeout(ref.current);
    ref.current = null;
    react(false);
  }, items6);
  return !stateFromStores && tmp6 && tmp4;
}
