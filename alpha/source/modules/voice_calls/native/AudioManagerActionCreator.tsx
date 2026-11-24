// Module ID: 8505
// Function ID: 8506
// Name: AudioManagerActionCreator
// Dependencies: [572, 2]
// Exports: setAudioOutputDevice

// Module 8505 (AudioManagerActionCreator)
import DispatcherDefault from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/voice_calls/native/AudioManagerActionCreator.tsx");

export function setAudioOutputDevice(device) {
  const obj = DispatcherDefault;
  const obj2 = { type: "NATIVE_AUDIO_SET_OUTPUT_DEVICE", device };
  obj.dispatch(obj2);
}
