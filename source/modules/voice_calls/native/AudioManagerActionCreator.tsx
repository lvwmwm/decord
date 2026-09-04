// Module ID: 9046
// Function ID: 9047
// Name: setAudioOutputDevice
// Dependencies: [706, 2]
// Exports: setAudioOutputDevice

// Module 9046 (setAudioOutputDevice)
import set from "set" /* 2 */;
import dispatcherDefault from "dispatcher" /* 706 */;

const result = set.fileFinishedImporting("modules/voice_calls/native/AudioManagerActionCreator.tsx");

export const setAudioOutputDevice = function setAudioOutputDevice(device) {
  let obj = dispatcherDefault;
  obj = { type: "NATIVE_AUDIO_SET_OUTPUT_DEVICE", device };
  obj.dispatch(obj);
};
