// Module ID: 17500
// Function ID: 17501
// Name: useIsConnectedToVoiceChannel
// Dependencies: [502, 5108, 5111, 1085, 558, 576, 504, 2]

// Module 17500 (useIsConnectedToVoiceChannel)
import Constants from "Constants" /* 1085 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5108 */;
import VoiceStateStore from "VoiceStateStore" /* 5111 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const RTCConnectionStates = Constants.RTCConnectionStates;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsConnectedToVoiceChannel(arg0) {
  let closure_0;
  let first;
  let tmp8;
  _require = arg0;
  let tmp2 = dependencyMap;
  let obj = require("react");
  const cResult = obj.c(3);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [RTCConnectionStore, VoiceStateStore, AuthenticationStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function l() {
      const channelId = RTCConnectionStore.getChannelId();
      let tmp2 = closure_0;
      const obj = RTCConnectionStore;
      if (closure_0 == null) {
        tmp2 = channelId;
      }
      if (tmp2 !== channelId) {
        return false;
      } else if (VoiceStateStore.isInChannel(tmp2, AuthenticationStore.getId())) {
        return true;
      } else {
        const state = obj.getState();
        if (RTCConnectionStates.DISCONNECTED !== state) {
          if (RTCConnectionStates.NO_ROUTE !== state) {
            return true;
          }
        }
        return false;
      }
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp8 = fn;
  } else {
    tmp8 = cResult[2];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStores(first, tmp8);
}) : (function useIsConnectedToVoiceChannel(arg0) {
  let closure_0;
  _require = arg0;
  let obj = require("get initialized");
  const items = [RTCConnectionStore, VoiceStateStore, AuthenticationStore];
  return obj.useStateFromStores(items, () => {
    const channelId = RTCConnectionStore.getChannelId();
    let tmp2 = closure_0;
    const obj = RTCConnectionStore;
    if (closure_0 == null) {
      tmp2 = channelId;
    }
    if (tmp2 !== channelId) {
      return false;
    } else if (VoiceStateStore.isInChannel(tmp2, AuthenticationStore.getId())) {
      return true;
    } else {
      const state = obj.getState();
      if (RTCConnectionStates.DISCONNECTED !== state) {
        if (RTCConnectionStates.NO_ROUTE !== state) {
          return true;
        }
      }
      return false;
    }
  });
});
const result = size.fileFinishedImporting("modules/voice_panel/native/hooks/useIsConnectedToVoiceChannel.tsx");

export default tmp2;
