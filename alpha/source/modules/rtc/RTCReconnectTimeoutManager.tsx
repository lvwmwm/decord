// Module ID: 17946
// Function ID: 17947
// Name: RTCReconnectTimeoutManager
// Dependencies: [5108, 6797, 5885, 2]

// Module 17946 (RTCReconnectTimeoutManager)
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 5885 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5108 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6797 */;
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
