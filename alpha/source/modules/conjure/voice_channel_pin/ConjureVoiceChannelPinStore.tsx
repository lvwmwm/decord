// Module ID: 10828
// Function ID: 10829
// Name: ConjureVoiceChannelPinStore
// Dependencies: [504, 584, 2]

// Module 10828 (ConjureVoiceChannelPinStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

const map = new Map();
const Store = get_initializedDefault.Store;
class ConjureVoiceChannelPinStore extends Store {
  getOutcome(arg0) {
    let value = map.get(arg0);
    if (value == null) {
      value = null;
    }
    return value;
  }
}
const prototype = ConjureVoiceChannelPinStore.prototype;
let obj = {
  LOGOUT: function handleLogout() {
    const obj = map;
    if (0 === map.size) {
      return false;
    } else {
      obj.clear();
    }
  },
  CONJURE_PROJECT_PUBLISH_STATUS_UPDATE: function handlePublishStatusUpdate(arg0) {
    let projectId;
    let voiceChannelPin;
    ({ projectId, voiceChannelPin } = arg0);
    let tmp = null != voiceChannelPin;
    if (tmp) {
      const value = map.get(projectId);
      let status;
      const obj = map;
      if (value != null) {
        status = value.status;
      }
      let tmp4 = status === voiceChannelPin.status;
      if (tmp4) {
        tmp4 = "pinned" !== value.status || "pinned" !== voiceChannelPin.status || value.channelId === voiceChannelPin.channelId;
      }
      let flag = !tmp4;
      if (flag) {
        const result = obj.set(projectId, voiceChannelPin);
        flag = true;
      }
      tmp = flag;
    }
    return tmp;
  },
  CONJURE_VOICE_CHANNEL_PIN_RESOLVED: function handleResolved(arg0) {
    let outcome;
    let projectId;
    ({ projectId, outcome } = arg0);
    const value = map.get(projectId);
    let status;
    const obj = map;
    if (value != null) {
      status = value.status;
    }
    let tmp3 = status === outcome.status;
    if (tmp3) {
      tmp3 = "pinned" !== value.status || "pinned" !== outcome.status || value.channelId === outcome.channelId;
    }
    let flag = !tmp3;
    if (flag) {
      const result = obj.set(projectId, outcome);
      flag = true;
    }
    return flag;
  }
};
const conjureVoiceChannelPinStore = new ConjureVoiceChannelPinStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/conjure/voice_channel_pin/ConjureVoiceChannelPinStore.tsx");

export default conjureVoiceChannelPinStore;
