// Module ID: 8778
// Function ID: 8779
// Name: AudioManagerActionCreator
// Dependencies: [584, 2]
// Exports: setAudioOutputDevice

// Module 8778 (AudioManagerActionCreator)
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/voice_calls/native/AudioManagerActionCreator.tsx");

export const setAudioOutputDevice = function setAudioOutputDevice(device) {
  const obj = DispatcherDefault;
  const obj2 = { type: "NATIVE_AUDIO_SET_OUTPUT_DEVICE", device };
  obj.dispatch(obj2);
};
