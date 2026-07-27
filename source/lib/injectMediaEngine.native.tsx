// Module ID: 4179
// Function ID: 35852
// Dependencies: [4180, 4181, 2]

// Module 4179
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
    return require(4181) /* base64Decode */.default;
  },
  getOpenH264LibraryPath() {

  }
});
const result = require("set").fileFinishedImporting("lib/injectMediaEngine.native.tsx");
