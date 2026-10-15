// Module ID: 14255
// Function ID: 14256
// Name: VoiceActionSheetManager
// Dependencies: [2012, 5172, 2002, 584, 7698, 2]

// Module 14255 (VoiceActionSheetManager)
import DispatcherDefault from "Dispatcher" /* 584 */;
import MediaEngineStore from "MediaEngineStore" /* 2012 */;
import VoiceStateStore from "VoiceStateStore" /* 5172 */;
import LifecycleManager from "LifecycleManager" /* 2002 */;
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
