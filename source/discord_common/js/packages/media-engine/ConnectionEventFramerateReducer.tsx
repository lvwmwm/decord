// Module ID: 4281
// Function ID: 37501
// Name: logger
// Dependencies: [6, 7, 4191, 4, 4227, 2]

// Module 4281 (logger)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";
import DesktopSources from "DesktopSources";

let closure_4;
let closure_5;
const require = arg1;
({ SpeakingFlags: closure_4, VIDEO_QUALITY_FRAMRATE_NOT_SPEAKING_TIMEOUT: closure_5 } = DesktopSources);
const logger = new require("getMediaEngineImpl").Logger("ConnectionEventFramerateReducer");
const tmp4 = (() => {
  class ConnectionEventFramerateReducer {
    constructor(arg0, arg1) {
      self = this;
      tmp = outer1_2(this, self);
      this.connection = arg0;
      this.sinkWants = arg1;
      this.handleSpeaking = (arg0, arg1) => {
        if (arg0 === self.connection.userId) {
          self.userSpeakingChange(arg1 === outer2_4.NONE);
        }
      };
      this.handleSelfMute = (isMuted) => {
        const connection = self.connection;
        if (!connection.hasDesktopSource()) {
          const result = self.destroyFramerateScaleFactorTimers();
          self.sinkWants.isMuted = isMuted;
          const result1 = self.updateRemoteWantsFramerate();
        }
      };
      enableNativeLoggerResult = outer1_6.enableNativeLogger(true);
      onResult = arg0.on(ConnectionEventFramerateReducer(outer1_1[4]).BaseConnectionEvent.Speaking, this.handleSpeaking);
      onResult1 = arg0.on(ConnectionEventFramerateReducer(outer1_1[4]).BaseConnectionEvent.Mute, this.handleSelfMute);
      initializeResult = this.initialize();
      return;
    }
  }
  let obj = {
    key: "initialize",
    value() {
      this.userSpeakingChange(true);
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "userSpeakingChange",
    value(arg0) {
      let self = this;
      self = this;
      const connection = this.connection;
      if (!connection.hasDesktopSource()) {
        let result = self.destroyFramerateScaleFactorTimers();
        if (arg0) {
          const _setTimeout = setTimeout;
          self.framerateReductionTimeout = setTimeout(() => {
            if (!self.connection.destroyed) {
              const _HermesInternal = HermesInternal;
              outer2_6.info("BaseConnection.userSpeakingChange: Reduced framerate after " + outer2_5 + " ms.");
              self.framerateReductionTimeout = undefined;
              self.sinkWants.isMuted = true;
              const result = self.updateRemoteWantsFramerate();
            }
          }, outer1_5);
        } else if (self.sinkWants.isMuted) {
          self.sinkWants.isMuted = false;
          const result1 = self.updateRemoteWantsFramerate();
        }
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "destroyFramerateScaleFactorTimers",
    value() {
      const self = this;
      if ("number" === typeof this.framerateReductionTimeout) {
        const _clearTimeout = clearTimeout;
        clearTimeout(self.framerateReductionTimeout);
        self.framerateReductionTimeout = undefined;
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "updateRemoteWantsFramerate",
    value() {
      const connection = this.connection;
      connection.updateVideoQuality(["remoteSinkWantsMaxFramerate"]);
    }
  };
  items[4] = {
    key: "destroy",
    value() {
      const result = this.destroyFramerateScaleFactorTimers();
    }
  };
  return callback(ConnectionEventFramerateReducer, items);
})();
let result = require("DesktopSources").fileFinishedImporting("../discord_common/js/packages/media-engine/ConnectionEventFramerateReducer.tsx");

export default tmp4;
