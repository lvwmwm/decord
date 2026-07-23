// Module ID: 4178
// Function ID: 35839
// Dependencies: [4179, 4180, 2]

// Module 4178
import assertInjected from "assertInjected";

assertInjected.inject({
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
    return require(4180) /* base64Decode */.default;
  },
  getOpenH264LibraryPath() {

  }
});
const result = require("set").fileFinishedImporting("lib/injectMediaEngine.native.tsx");
