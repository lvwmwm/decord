// Module ID: 4303
// Function ID: 4304
// Dependencies: [4304, 4305, 2]

// Module 4303
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
    return require(4305) /* logger */.default;
  },
  getOpenH264LibraryPath() {

  }
});
const result = require("set").fileFinishedImporting("lib/injectMediaEngine.native.tsx");
