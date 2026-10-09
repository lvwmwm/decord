// Module ID: 11046
// Function ID: 11047
// Name: MobileVoiceOverlayActionCreators
// Dependencies: [584, 2]

// Module 11046 (MobileVoiceOverlayActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
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
