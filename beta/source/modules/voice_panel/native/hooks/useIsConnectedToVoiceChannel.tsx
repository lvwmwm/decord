// Module ID: 16861
// Function ID: 16862
// Name: useIsConnectedToVoiceChannel
// Dependencies: [502, 4859, 4855, 1074, 504, 2]
// Exports: default

// Module 16861 (useIsConnectedToVoiceChannel)
import Constants from "Constants" /* 1074 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4859 */;
import VoiceStateStore from "VoiceStateStore" /* 4855 */;
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
