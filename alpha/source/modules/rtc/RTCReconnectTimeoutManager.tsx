// Module ID: 18860
// Function ID: 18861
// Name: RTCReconnectTimeoutManager
// Dependencies: [5700, 7199, 6619, 2]

// Module 18860 (RTCReconnectTimeoutManager)
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 6619 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5700 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7199 */;
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
