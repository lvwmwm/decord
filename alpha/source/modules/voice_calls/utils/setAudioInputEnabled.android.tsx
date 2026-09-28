// Module ID: 17101
// Function ID: 17102
// Name: setAudioInputEnabled
// Dependencies: [1998, 2]
// Exports: default

// Module 17101 (setAudioInputEnabled)
import NativeMediaEngineModuleDefault from "NativeMediaEngineModule" /* 1998 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/voice_calls/utils/setAudioInputEnabled.android.tsx");

export default function setAudioInputEnabled(arg0) {
  NativeMediaEngineModuleDefault.setAudioInputEnabled(arg0);
};
