// Module ID: 12041
// Function ID: 12042
// Name: ChannelCallModalManager
// Dependencies: [1385, 5835, 2120, 8041, 2]

// Module 12041 (ChannelCallModalManager)
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 8041 */;
import UserStore from "UserStore" /* 1385 */;
import VoiceStateStore from "VoiceStateStore" /* 5835 */;
import LifecycleManager from "LifecycleManager" /* 2120 */;
import size from "module_2" /* 2 */;

class ChannelCallModalManager extends LifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    applyArgumentsResult.inVoiceChannel = false;
    applyArgumentsResult.handleCloseModal = function handleCloseModal() {
      const channel = require.channel;
      const currentUser = UserStore.getCurrentUser();
      const isInChannelResult = null != channel && null != currentUser && VoiceStateStore.isInChannel(channel.id, currentUser.id);
      const tmp4 = null != channel && require.inVoiceChannel && require.inVoiceChannel !== isInChannelResult;
      if (tmp4) {
        const obj2 = PrivateChannelCallUtils;
        const result = obj2.dismissVoiceChannelScreens(channel);
        require.terminate();
      }
      require.inVoiceChannel = isInChannelResult;
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
