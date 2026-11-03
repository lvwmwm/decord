// Module ID: 2136
// Function ID: 2137
// Name: injectMediaEngine
// Dependencies: [2137, 2138, 2]

// Module 2136 (injectMediaEngine)
import inject from "inject" /* 2137 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const obj = {
  supported() {
    return true;
  },
  supportsFeature(arg0) {
    const voiceEngine = this.getVoiceEngine();
    return voiceEngine.supportsFeature(arg0);
  },
  setProcessPriority() {

  },
  getVoiceEngine() {
    return require("VoiceEngine").default;
  },
  getOpenH264LibraryPath() {

  }
};
inject.inject(obj);
const result = size.fileFinishedImporting("lib/injectMediaEngine.native.tsx");
