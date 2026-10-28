// Module ID: 18329
// Function ID: 18330
// Name: VoiceChannelAppStore
// Dependencies: [504, 584, 2]

// Module 18329 (VoiceChannelAppStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

const React = {};
const Store = get_initializedDefault.Store;
class VoiceChannelAppStore extends Store {
  isAppVisible(id, arg1) {
    let tmp = arg1;
    if (tmp) {
      let flag = arg1;
      if (arg1 === undefined) {
        flag = true;
      }
      let tmp4 = closure_0[id];
      if (tmp4 == null) {
        tmp4 = flag;
      }
      tmp = tmp4;
    }
    return tmp;
  }
}
const prototype = VoiceChannelAppStore.prototype;
VoiceChannelAppStore.displayName = "VoiceChannelAppStore";
const obj = {
  VOICE_CHANNEL_APP_SURFACE_TOGGLE: function handleToggle(channelId) {
    channelId = channelId.channelId;
    let flag = closure_0[channelId];
    const tmp = closure_0;
    if (flag == null) {
      flag = true;
    }
    tmp[channelId] = !flag;
  },
  VOICE_CHANNEL_APP_CLOSE: function handleClose(channelId) {
    channelId = channelId.channelId;
    if (false === closure_0[channelId]) {
      return false;
    } else {
      tmp[channelId] = false;
    }
  },
  VOICE_CHANNEL_SELECT: function handleVoiceChannelSelect(currentVoiceChannelId) {
    currentVoiceChannelId = currentVoiceChannelId.currentVoiceChannelId;
    let tmp = null != currentVoiceChannelId && currentVoiceChannelId !== currentVoiceChannelId.channelId;
    if (tmp) {
      if (undefined !== closure_0[currentVoiceChannelId]) {
        delete closure_0[currentVoiceChannelId];
      }
      tmp = tmp2;
    }
    return tmp;
  }
};
const voiceChannelAppStore = new VoiceChannelAppStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/voice_channel_apps/VoiceChannelAppStore.tsx");

export default voiceChannelAppStore;
