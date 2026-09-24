// Module ID: 10284
// Function ID: 10285
// Name: MobileVoiceOverlayActionCreators
// Dependencies: [577, 2]

// Module 10284 (MobileVoiceOverlayActionCreators)
import DispatcherDefault from "Dispatcher" /* 577 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/voice_overlay/native/MobileVoiceOverlayActionCreators.tsx");

export default {
  setEnabled(enabled) {
    DispatcherDefault.dispatch({ type: "MOBILE_VOICE_OVERLAY_STATE_CHANGED", enabled });
  }
};
