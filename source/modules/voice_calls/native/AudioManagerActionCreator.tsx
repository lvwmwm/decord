// Module ID: 9222
// Function ID: 9223
// Name: setAudioOutputDevice
// Dependencies: [709, 2]
// Exports: setAudioOutputDevice

// Module 9222 (setAudioOutputDevice)
const result = require("set").fileFinishedImporting("modules/voice_calls/native/AudioManagerActionCreator.tsx");

export const setAudioOutputDevice = function setAudioOutputDevice(device) {
  let obj = importDefault(709);
  obj = { type: "NATIVE_AUDIO_SET_OUTPUT_DEVICE", device };
  obj.dispatch(obj);
};
