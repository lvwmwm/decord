// Module ID: 10967
// Function ID: 10968
// Name: ChannelCallModalManager
// Dependencies: [1390, 5113, 2002, 7481, 2]

// Module 10967 (ChannelCallModalManager)
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 7481 */;
import UserStore from "UserStore" /* 1390 */;
import VoiceStateStore from "VoiceStateStore" /* 5113 */;
import LifecycleManager from "LifecycleManager" /* 2002 */;
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
