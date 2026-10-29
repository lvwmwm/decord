// Module ID: 2013
// Function ID: 2014
// Name: injectMediaEngine
// Dependencies: [2014, 2015, 2]

// Module 2013 (injectMediaEngine)
import inject from "inject" /* 2014 */;
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
