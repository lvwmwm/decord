// Module ID: 4213
// Function ID: 35956
// Dependencies: [4214, 4215, 2]

// Module 4213
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
    return require(4215) /* base64Decode */.default;
  },
  getOpenH264LibraryPath() {

  }
});
const result = require("set").fileFinishedImporting("lib/injectMediaEngine.native.tsx");
