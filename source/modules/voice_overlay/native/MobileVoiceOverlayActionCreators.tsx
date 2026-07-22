// Module ID: 10711
// Function ID: 83384
// Dependencies: []

// Module 10711
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/voice_overlay/native/MobileVoiceOverlayActionCreators.tsx");

export default {
  setEnabled(enabled) {
    let obj = importDefault(dependencyMap[0]);
    obj = { type: "MOBILE_VOICE_OVERLAY_STATE_CHANGED", enabled };
    obj.dispatch(obj);
  }
};
