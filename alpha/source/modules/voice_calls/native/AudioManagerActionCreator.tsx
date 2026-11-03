// Module ID: 9359
// Function ID: 9360
// Name: AudioManagerActionCreator
// Dependencies: [572, 2]
// Exports: setAudioOutputDevice

// Module 9359 (AudioManagerActionCreator)
import DispatcherDefault from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/voice_calls/native/AudioManagerActionCreator.tsx");

export function setAudioOutputDevice(device) {
  const obj = DispatcherDefault;
  const obj2 = { type: "NATIVE_AUDIO_SET_OUTPUT_DEVICE", device };
  obj.dispatch(obj2);
}
