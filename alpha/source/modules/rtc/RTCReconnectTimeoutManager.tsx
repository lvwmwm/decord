// Module ID: 18517
// Function ID: 18518
// Name: RTCReconnectTimeoutManager
// Dependencies: [5169, 7028, 6105, 2]

// Module 18517 (RTCReconnectTimeoutManager)
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 6105 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5169 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7028 */;
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
