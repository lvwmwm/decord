// Module ID: 10096
// Function ID: 10097
// Name: dispatcher
// Dependencies: [706, 2]

// Module 10096 (dispatcher)
import set from "set" /* 2 */;
import dispatcherDefault from "dispatcher" /* 706 */;

const result = set.fileFinishedImporting("modules/voice_overlay/native/MobileVoiceOverlayActionCreators.tsx");

export default {
  setEnabled(enabled) {
    let obj = dispatcherDefault;
    obj = { type: "MOBILE_VOICE_OVERLAY_STATE_CHANGED", enabled };
    obj.dispatch(obj);
  }
};
