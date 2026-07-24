// Module ID: 8903
// Function ID: 70153
// Name: setAudioOutputDevice
// Dependencies: [686, 2]
// Exports: setAudioOutputDevice

// Module 8903 (setAudioOutputDevice)
const result = require("set").fileFinishedImporting("modules/voice_calls/native/AudioManagerActionCreator.tsx");

export const setAudioOutputDevice = function setAudioOutputDevice(deviceId) {
  let obj = importDefault(686);
  obj = { type: "NATIVE_AUDIO_SET_OUTPUT_DEVICE", device: deviceId };
  obj.dispatch(obj);
};
