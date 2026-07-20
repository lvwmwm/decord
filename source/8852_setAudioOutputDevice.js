// Module ID: 8852
// Function ID: 69861
// Name: setAudioOutputDevice
// Dependencies: []
// Exports: setAudioOutputDevice

// Module 8852 (setAudioOutputDevice)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/voice_calls/native/AudioManagerActionCreator.tsx");

export const setAudioOutputDevice = function setAudioOutputDevice(deviceId) {
  let obj = importDefault(dependencyMap[0]);
  obj = { type: "NATIVE_AUDIO_SET_OUTPUT_DEVICE", device: deviceId };
  obj.dispatch(obj);
};
