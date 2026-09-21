// Module ID: 9740
// Function ID: 9741
// Name: ChannelCallModalManager
// Dependencies: [1376, 4777, 1986, 577, 4965, 2]

// Module 9740 (ChannelCallModalManager)
import DispatcherDefault from "Dispatcher" /* 577 */;
import UserStore from "UserStore" /* 1376 */;
import VoiceStateStore from "VoiceStateStore" /* 4777 */;
import LifecycleManager from "LifecycleManager" /* 1986 */;

let require = fn;
class ChannelCallModalManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.inVoiceChannel = false;
    applyArgumentsResult.handleCloseModal = function handleCloseModal() {
      const channel = applyArgumentsResult.channel;
      const currentUser = UserStore.getCurrentUser();
      let isInChannelResult = null != channel && null != currentUser;
      if (isInChannelResult) {
        isInChannelResult = VoiceStateStore.isInChannel(channel.id, currentUser.id);
      }
      if (tmp4) {
        DispatcherDefault.wait(() => {
          const result = applyArgumentsResult(dependencyMap[4]).dismissVoiceChannelScreens(channel);
        });
        obj.terminate();
      }
      applyArgumentsResult.inVoiceChannel = isInChannelResult;
    };
    return applyArgumentsResult;
  }
}
const prototype = ChannelCallModalManager.prototype;
prototype["_initialize"] = function _initialize(channel) {
  const self = this;
  this.channel = channel;
  const currentUser = UserStore.getCurrentUser();
  let isInChannelResult = null != channel && null != currentUser;
  if (isInChannelResult) {
    isInChannelResult = VoiceStateStore.isInChannel(channel.id, currentUser.id);
  }
  self.inVoiceChannel = isInChannelResult;
  VoiceStateStore.addChangeListener(self.handleCloseModal);
};
prototype["_terminate"] = function _terminate() {
  VoiceStateStore.removeChangeListener(this.handleCloseModal);
};
const channelCallModalManager = new ChannelCallModalManager();
const size = fn(2);
let result = size.fileFinishedImporting("modules/video_calls/native/components/ChannelCallModalManager.tsx");

export default channelCallModalManager;
