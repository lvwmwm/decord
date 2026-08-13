// Module ID: 10832
// Function ID: 10833
// Name: dispatcher
// Dependencies: [709, 2]

// Module 10832 (dispatcher)
const result = require("set").fileFinishedImporting("modules/voice_overlay/native/MobileVoiceOverlayActionCreators.tsx");

export default {
  setEnabled(enabled) {
    let obj = importDefault(709);
    obj = { type: "MOBILE_VOICE_OVERLAY_STATE_CHANGED", enabled };
    obj.dispatch(obj);
  }
};
