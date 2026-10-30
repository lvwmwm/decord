// Module ID: 19095
// Function ID: 19096
// Name: useIsConnectedToVoiceChannel
// Dependencies: [502, 5759, 5674, 1072, 504, 2]
// Exports: default

// Module 19095 (useIsConnectedToVoiceChannel)
import Constants from "Constants" /* 1072 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5759 */;
import VoiceStateStore from "VoiceStateStore" /* 5674 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const RTCConnectionStates = Constants.RTCConnectionStates;
const result = size.fileFinishedImporting("modules/voice_panel/native/hooks/useIsConnectedToVoiceChannel.tsx");

export default function useIsConnectedToVoiceChannel(arg0) {
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
};
