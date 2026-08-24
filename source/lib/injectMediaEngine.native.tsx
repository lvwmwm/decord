// Module ID: 4502
// Function ID: 4503
// Dependencies: [4503, 4504, 2]

// Module 4502
import set from "set" /* 2 */;
import inject from "inject" /* 4503 */;

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
    return require(4504) /* logger */.default;
  },
  getOpenH264LibraryPath() {

  }
});
const result = set.fileFinishedImporting("lib/injectMediaEngine.native.tsx");
