// Module ID: 15719
// Function ID: 121233
// Name: useIsConnectedToVoiceChannel
// Dependencies: [1194, 4202, 4146, 653, 566, 2]
// Exports: default

// Module 15719 (useIsConnectedToVoiceChannel)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import { RTCConnectionStates } from "ME";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/voice_panel/native/hooks/useIsConnectedToVoiceChannel.tsx");

export default function useIsConnectedToVoiceChannel(arg0) {
  const _require = arg0;
  const items = [closure_3, closure_4, _isNativeReflectConstruct];
  return _require(566).useStateFromStores(items, () => {
    const channelId = outer1_3.getChannelId();
    let tmp2 = channelId;
    if (null != closure_0) {
      tmp2 = closure_0;
    }
    if (tmp2 !== channelId) {
      return false;
    } else if (outer1_4.isInChannel(tmp2, outer1_2.getId())) {
      return true;
    } else {
      const state = outer1_3.getState();
      if (outer1_5.DISCONNECTED !== state) {
        if (outer1_5.NO_ROUTE !== state) {
          return true;
        }
      }
      return false;
    }
  });
};
