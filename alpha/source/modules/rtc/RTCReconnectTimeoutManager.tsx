// Module ID: 19545
// Function ID: 19546
// Name: RTCReconnectTimeoutManager
// Dependencies: [5759, 7281, 6700, 2]

// Module 19545 (RTCReconnectTimeoutManager)
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 6700 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5759 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7281 */;
import size from "module_2" /* 2 */;

class RTCReconnectTimeoutManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.actions = { VOICE_STATE_UPDATES: applyArgumentsResult.handleVoiceStateUpdates };
    return applyArgumentsResult;
  }
  handleVoiceStateUpdates() {
    if (RTCConnectionStore.didReconnectTimeOut()) {
      const obj = SelectedChannelActionCreatorsDefault;
      obj.disconnect();
    }
  }
}
const prototype = RTCReconnectTimeoutManager.prototype;
const rTCReconnectTimeoutManager = new RTCReconnectTimeoutManager();
const result = size.fileFinishedImporting("modules/rtc/RTCReconnectTimeoutManager.tsx");

export default rTCReconnectTimeoutManager;
