// Module ID: 4174
// Function ID: 35807
// Dependencies: []

// Module 4174
const _module = require(dependencyMap[0]);
_module.inject({
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
    return require(dependencyMap[1]).default;
  },
  getOpenH264LibraryPath() {

  }
});
const _module1 = require(dependencyMap[2]);
const result = _module1.fileFinishedImporting("lib/injectMediaEngine.native.tsx");
