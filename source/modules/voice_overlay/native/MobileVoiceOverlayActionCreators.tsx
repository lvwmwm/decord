// Module ID: 10750
// Function ID: 83625
// Name: dispatcher
// Dependencies: [686, 2]

// Module 10750 (dispatcher)
const result = require("set").fileFinishedImporting("modules/voice_overlay/native/MobileVoiceOverlayActionCreators.tsx");

export default {
  setEnabled(enabled) {
    let obj = importDefault(686);
    obj = { type: "MOBILE_VOICE_OVERLAY_STATE_CHANGED", enabled };
    obj.dispatch(obj);
  }
};
