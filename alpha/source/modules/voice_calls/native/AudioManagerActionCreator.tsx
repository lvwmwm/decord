// Module ID: 9022
// Function ID: 9023
// Name: AudioManagerActionCreator
// Dependencies: [584, 2]
// Exports: setAudioOutputDevice

// Module 9022 (AudioManagerActionCreator)
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/voice_calls/native/AudioManagerActionCreator.tsx");

export const setAudioOutputDevice = function setAudioOutputDevice(device) {
  const obj = DispatcherDefault;
  const obj2 = { type: "NATIVE_AUDIO_SET_OUTPUT_DEVICE", device };
  obj.dispatch(obj2);
};
