// Module ID: 10416
// Function ID: 10417
// Name: MobileVoiceOverlayActionCreators
// Dependencies: [572, 2]

// Module 10416 (MobileVoiceOverlayActionCreators)
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
