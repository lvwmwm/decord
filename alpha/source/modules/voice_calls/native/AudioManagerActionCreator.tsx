// Module ID: 10016
// Function ID: 10017
// Name: AudioManagerActionCreator
// Dependencies: [573, 2]
// Exports: setAudioOutputDevice

// Module 10016 (AudioManagerActionCreator)
import DispatcherDefault from "Dispatcher" /* 573 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/voice_calls/native/AudioManagerActionCreator.tsx");

export const setAudioOutputDevice = function setAudioOutputDevice(device) {
  DispatcherDefault.dispatch({ type: "NATIVE_AUDIO_SET_OUTPUT_DEVICE", device });
};
