// Module ID: 10704
// Function ID: 83337
// Dependencies: []

// Module 10704
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/voice_overlay/native/MobileVoiceOverlayActionCreators.tsx");

export default {
  setEnabled(enabled) {
    let obj = importDefault(dependencyMap[0]);
    obj = { type: "MOBILE_VOICE_OVERLAY_STATE_CHANGED", enabled };
    obj.dispatch(obj);
  }
};
