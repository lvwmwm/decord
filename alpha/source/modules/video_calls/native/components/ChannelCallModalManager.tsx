// Module ID: 11807
// Function ID: 11808
// Name: ChannelCallModalManager
// Dependencies: [1384, 5674, 1997, 7931, 2]

// Module 11807 (ChannelCallModalManager)
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 7931 */;
import UserStore from "UserStore" /* 1384 */;
import VoiceStateStore from "VoiceStateStore" /* 5674 */;
import LifecycleManager from "LifecycleManager" /* 1997 */;
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
