// Module ID: 13312
// Function ID: 13313
// Name: VoiceActionSheetManager
// Dependencies: [1999, 4856, 1989, 585, 5044, 2]

// Module 13312 (VoiceActionSheetManager)
import DispatcherDefault from "Dispatcher" /* 585 */;
import MediaEngineStore from "MediaEngineStore" /* 1999 */;
import VoiceStateStore from "VoiceStateStore" /* 4856 */;
import LifecycleManager from "LifecycleManager" /* 1989 */;
import size from "module_2" /* 2 */;

class VoiceActionSheetManager extends LifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    applyArgumentsResult.channel = null;
    applyArgumentsResult.handleOpenChannelCallModal = function handleOpenChannelCallModal() {
      let obj = require;
      const channel = require.channel;
      if (null != channel) {
        let obj2 = DispatcherDefault;
        obj2.wait(() => {
          const obj = closure_2_0(closure_2_2[4]);
          const result = obj.dismissVoiceChannelScreens(channel);
          const obj2 = closure_2_0(closure_2_2[4]);
          obj2.openChannelCallModal(channel);
        });
        obj.terminate();
      }
    };
    return applyArgumentsResult;
  }
  _initialize(channel) {
    this.channel = channel;
    VoiceStateStore.addChangeListener(this.handleOpenChannelCallModal);
    MediaEngineStore.addChangeListener(this.handleOpenChannelCallModal);
  }
  _terminate() {
    VoiceStateStore.removeChangeListener(this.handleOpenChannelCallModal);
    MediaEngineStore.removeChangeListener(this.handleOpenChannelCallModal);
  }
}
const prototype = VoiceActionSheetManager.prototype;
const voiceActionSheetManager = new VoiceActionSheetManager();
let result = size.fileFinishedImporting("modules/voice_calls/native/VoiceActionSheetManager.tsx");

export default voiceActionSheetManager;
