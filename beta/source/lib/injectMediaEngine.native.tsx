// Module ID: 1993
// Function ID: 1994
// Name: injectMediaEngine
// Dependencies: [1994, 1995, 2]

// Module 1993 (injectMediaEngine)
import inject from "inject" /* 1994 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

inject.inject({
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
});
const result = size.fileFinishedImporting("lib/injectMediaEngine.native.tsx");
