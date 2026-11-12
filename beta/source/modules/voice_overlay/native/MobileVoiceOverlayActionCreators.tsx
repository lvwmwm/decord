// Module ID: 12152
// Function ID: 12153
// Name: MobileVoiceOverlayActionCreators
// Dependencies: [572, 2]

// Module 12152 (MobileVoiceOverlayActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

let obj = {
  setEnabled(enabled) {
    const obj = DispatcherDefault;
    const obj2 = { type: "MOBILE_VOICE_OVERLAY_STATE_CHANGED", enabled };
    obj.dispatch(obj2);
  }
};
const result = size.fileFinishedImporting("modules/voice_overlay/native/MobileVoiceOverlayActionCreators.tsx");

export default obj;
