// Module ID: 2012
// Function ID: 2013
// Name: injectMediaEngine
// Dependencies: [2013, 2014, 2]

// Module 2012 (injectMediaEngine)
import inject from "inject" /* 2013 */;
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
