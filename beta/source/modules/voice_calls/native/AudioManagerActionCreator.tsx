// Module ID: 9915
// Function ID: 9916
// Name: AudioManagerActionCreator
// Dependencies: [577, 2]
// Exports: setAudioOutputDevice

// Module 9915 (AudioManagerActionCreator)
import DispatcherDefault from "Dispatcher" /* 577 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/voice_calls/native/AudioManagerActionCreator.tsx");

export const setAudioOutputDevice = function setAudioOutputDevice(device) {
  DispatcherDefault.dispatch({ type: "NATIVE_AUDIO_SET_OUTPUT_DEVICE", device });
};
