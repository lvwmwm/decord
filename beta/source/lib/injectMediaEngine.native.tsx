// Module ID: 1997
// Function ID: 1998
// Name: injectMediaEngine
// Dependencies: [1998, 1999, 2]

// Module 1997 (injectMediaEngine)
import inject from "inject" /* 1998 */;
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
