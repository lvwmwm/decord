// Module ID: 19648
// Function ID: 19649
// Name: RTCReconnectTimeoutManager
// Dependencies: [5654, 7484, 6529, 2]

// Module 19648 (RTCReconnectTimeoutManager)
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 6529 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5654 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7484 */;
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
