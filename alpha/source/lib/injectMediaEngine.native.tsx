// Module ID: 2133
// Function ID: 2134
// Name: injectMediaEngine
// Dependencies: [2134, 2135, 2]

// Module 2133 (injectMediaEngine)
import inject from "inject" /* 2134 */;
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
