// Module ID: 14074
// Function ID: 14075
// Name: VoiceActionSheetManager
// Dependencies: [1996, 4809, 1986, 577, 4997, 2]

// Module 14074 (VoiceActionSheetManager)
import DispatcherDefault from "Dispatcher" /* 577 */;
import MediaEngineStore from "MediaEngineStore" /* 1996 */;
import VoiceStateStore from "VoiceStateStore" /* 4809 */;
import LifecycleManager from "LifecycleManager" /* 1986 */;

let require = fn;
class VoiceActionSheetManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.channel = null;
    applyArgumentsResult.handleOpenChannelCallModal = function handleOpenChannelCallModal() {
      const channel = applyArgumentsResult.channel;
      if (null != channel) {
        DispatcherDefault.wait(() => {
          const result = applyArgumentsResult(4997).dismissVoiceChannelScreens(channel);
          const obj = applyArgumentsResult(4997);
          applyArgumentsResult(4997).openChannelCallModal(channel);
        });
        applyArgumentsResult.terminate();
      }
    };
    return applyArgumentsResult;
  }
}
const prototype = VoiceActionSheetManager.prototype;
prototype["_initialize"] = function _initialize(channel) {
  this.channel = channel;
  VoiceStateStore.addChangeListener(this.handleOpenChannelCallModal);
  MediaEngineStore.addChangeListener(this.handleOpenChannelCallModal);
};
prototype["_terminate"] = function _terminate() {
  VoiceStateStore.removeChangeListener(this.handleOpenChannelCallModal);
  MediaEngineStore.removeChangeListener(this.handleOpenChannelCallModal);
};
const voiceActionSheetManager = new VoiceActionSheetManager();
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_calls/native/VoiceActionSheetManager.tsx");

export default voiceActionSheetManager;
