// Module ID: 12721
// Function ID: 97631
// Name: logger
// Dependencies: []

// Module 12721 (logger)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = arg1(dependencyMap[4]).WINDOWS_SETTINGS_SOUND_DEVICE_DEEPLINK_SEMVER;
const logger = new arg1(dependencyMap[5]).Logger("InputWatcher");
const tmp3 = () => {
  class InputWatcher {
    constructor(arg0, arg1) {
      InputWatcher = this;
      self = this;
      tmp2 = closure_5(this, InputWatcher);
      this.mediaEngine = arg0;
      this.mediaEngineStore = arg1;
      timeout = new InputWatcher(closure_2[6]).Timeout();
      this.stateChangeTimeout = timeout;
      this.inputDetected = undefined;
      this.lastUpdateTime = performance.now();
      // CreateGeneratorClosureLongIndex (0x67)
      this.fetchInputDeviceOSConfig = closure_4(tmp);
      this.handleSilence = (arg0) => {
        let self = arg0;
        self = tmp2;
        const stateChangeTimeout = self.stateChangeTimeout;
        let num = 5000;
        if (!arg0) {
          num = 1500;
        }
        // CreateGeneratorClosureLongIndex (0x67)
        stateChangeTimeout.start(num, callback(tmp));
      };
      mediaEngine = this.mediaEngine;
      onResult = mediaEngine.on(InputWatcher(closure_2[12]).MediaEngineEvent.Silence, this.handleSilence);
      return;
    }
  }
  const arg1 = InputWatcher;
  const items = [
    {
      key: "reset",
      value() {
        const self = this;
        const stateChangeTimeout = this.stateChangeTimeout;
        stateChangeTimeout.stop();
        if (null != this.inputDetected) {
          self.handleSilence(!self.inputDetected);
        }
        self.inputDetected = undefined;
      }
    }
  ];
  return callback(InputWatcher, items);
}();
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/media_engine/InputWatcher.tsx");

export default tmp3;
