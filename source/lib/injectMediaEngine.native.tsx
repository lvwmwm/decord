// Module ID: 4350
// Function ID: 4351
// Dependencies: [4351, 4352, 2]

// Module 4350
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
    return require(4352) /* logger */.default;
  },
  getOpenH264LibraryPath() {

  }
});
const result = require("set").fileFinishedImporting("lib/injectMediaEngine.native.tsx");
