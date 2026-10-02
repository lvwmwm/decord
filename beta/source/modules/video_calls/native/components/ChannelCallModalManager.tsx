// Module ID: 8932
// Function ID: 8933
// Name: ChannelCallModalManager
// Dependencies: [1378, 4856, 1989, 585, 5044, 2]

// Module 8932 (ChannelCallModalManager)
import DispatcherDefault from "Dispatcher" /* 585 */;
import UserStore from "UserStore" /* 1378 */;
import VoiceStateStore from "VoiceStateStore" /* 4856 */;
import LifecycleManager from "LifecycleManager" /* 1989 */;
import size from "module_2" /* 2 */;

class ChannelCallModalManager extends LifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    applyArgumentsResult.inVoiceChannel = false;
    applyArgumentsResult.handleCloseModal = function handleCloseModal() {
      let obj = require;
      const channel = require.channel;
      const currentUser = UserStore.getCurrentUser();
      const isInChannelResult = null != channel && null != currentUser && VoiceStateStore.isInChannel(channel.id, currentUser.id);
      const tmp4 = null != channel && obj.inVoiceChannel && obj.inVoiceChannel !== isInChannelResult;
      if (tmp4) {
        const obj2 = DispatcherDefault;
        obj2.wait(() => {
          const obj = closure_2_0(closure_2_2[4]);
          const result = obj.dismissVoiceChannelScreens(channel);
        });
        obj.terminate();
      }
      obj.inVoiceChannel = isInChannelResult;
    };
    return applyArgumentsResult;
  }
  _initialize(channel) {
    const self = this;
    this.channel = channel;
    const currentUser = UserStore.getCurrentUser();
    self.inVoiceChannel = null != channel && null != currentUser && VoiceStateStore.isInChannel(channel.id, currentUser.id);
    const isInChannelResult = null != channel && null != currentUser && VoiceStateStore.isInChannel(channel.id, currentUser.id);
    VoiceStateStore.addChangeListener(self.handleCloseModal);
  }
  _terminate() {
    VoiceStateStore.removeChangeListener(this.handleCloseModal);
  }
}
const prototype = ChannelCallModalManager.prototype;
const channelCallModalManager = new ChannelCallModalManager();
let result = size.fileFinishedImporting("modules/video_calls/native/components/ChannelCallModalManager.tsx");

export default channelCallModalManager;
