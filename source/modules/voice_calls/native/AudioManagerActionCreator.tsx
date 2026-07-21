// Module ID: 8856
// Function ID: 69873
// Name: setAudioOutputDevice
// Dependencies: []
// Exports: setAudioOutputDevice

// Module 8856 (setAudioOutputDevice)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/voice_calls/native/AudioManagerActionCreator.tsx");

export const setAudioOutputDevice = function setAudioOutputDevice(deviceId) {
  let obj = importDefault(dependencyMap[0]);
  obj = { type: "NATIVE_AUDIO_SET_OUTPUT_DEVICE", device: deviceId };
  obj.dispatch(obj);
};
