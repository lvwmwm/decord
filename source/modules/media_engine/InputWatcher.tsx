// Module ID: 12835
// Function ID: 99787
// Name: logger
// Dependencies: [57, 5, 6, 7, 4195, 4, 4015, 478, 12774, 3741, 5142, 686, 4227, 2]

// Module 12835 (logger)
import _slicedToArray from "_slicedToArray";
import log from "log";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import isWindows from "isWindows";
import { WINDOWS_SETTINGS_SOUND_DEVICE_DEEPLINK_SEMVER as closure_7 } from "StreamIssueReportReasons";

const require = arg1;
const logger = new require("StreamIssueReportReasons").Logger("InputWatcher");
const tmp3 = (() => {
  class InputWatcher {
    constructor(arg0, arg1) {
      self = this;
      self = this;
      tmp2 = outer1_5(this, self);
      this.mediaEngine = arg0;
      this.mediaEngineStore = arg1;
      timeout = new InputWatcher(outer1_2[6]).Timeout();
      this.stateChangeTimeout = timeout;
      this.inputDetected = undefined;
      this.lastUpdateTime = performance.now();
      // CreateGeneratorClosureLongIndex (0x67)
      this.fetchInputDeviceOSConfig = outer1_4(tmp);
      this.handleSilence = (arg0) => {
        const _self = arg0;
        const self = tmp2;
        const stateChangeTimeout = _self.stateChangeTimeout;
        let num = 5000;
        if (!arg0) {
          num = 1500;
        }
        // CreateGeneratorClosureLongIndex (0x67)
        stateChangeTimeout.start(num, outer2_4(tmp));
      };
      mediaEngine = this.mediaEngine;
      onResult = mediaEngine.on(InputWatcher(outer1_2[12]).MediaEngineEvent.Silence, this.handleSilence);
      return;
    }
  }
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
})();
const result = require("_classCallCheck").fileFinishedImporting("modules/media_engine/InputWatcher.tsx");

export default tmp3;
