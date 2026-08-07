// Module ID: 10791
// Function ID: 10792
// Name: dispatcher
// Dependencies: [709, 2]

// Module 10791 (dispatcher)
const result = require("set").fileFinishedImporting("modules/voice_overlay/native/MobileVoiceOverlayActionCreators.tsx");

export default {
  setEnabled(enabled) {
    let obj = importDefault(709);
    obj = { type: "MOBILE_VOICE_OVERLAY_STATE_CHANGED", enabled };
    obj.dispatch(obj);
  }
};
