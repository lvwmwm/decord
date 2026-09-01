// Module ID: 4530
// Function ID: 4531
// Dependencies: [4531, 4532, 2]

// Module 4530
import set from "set" /* 2 */;
import inject from "inject" /* 4531 */;

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
    return require(4532) /* logger */.default;
  },
  getOpenH264LibraryPath() {

  }
});
const result = set.fileFinishedImporting("lib/injectMediaEngine.native.tsx");
