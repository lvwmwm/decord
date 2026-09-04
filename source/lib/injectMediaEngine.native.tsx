// Module ID: 4533
// Function ID: 4534
// Dependencies: [4534, 4535, 2]

// Module 4533
import set from "set" /* 2 */;
import inject from "inject" /* 4534 */;

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
    return require(4535) /* logger */.default;
  },
  getOpenH264LibraryPath() {

  }
});
const result = set.fileFinishedImporting("lib/injectMediaEngine.native.tsx");
