// Module ID: 4352
// Function ID: 4353
// Dependencies: [4353, 4354, 2]

// Module 4352
import inject from "inject";

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
    return require(4354) /* logger */.default;
  },
  getOpenH264LibraryPath() {

  }
});
const result = require("set").fileFinishedImporting("lib/injectMediaEngine.native.tsx");
