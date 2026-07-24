// Module ID: 14084
// Function ID: 107825
// Name: logger
// Dependencies: [6, 7, 4, 14085, 14086, 14087, 2]

// Module 14084 (logger)
import set from "set";
import _defineProperties from "_defineProperties";

const require = arg1;
const logger = new require("MuxIntegration").Logger("SimpleMuxWrapper");
const tmp3 = (() => {
  class SimpleMuxWrapper {
    constructor(arg0) {
      tmp = outer1_3(this, SimpleMuxWrapper);
      this.isMonitoring = false;
      this.config = arg0;
      this.videoElement = arg0.videoElement;
      SessionManager = SimpleMuxWrapper(outer1_2[3]).SessionManager;
      this.sessionId = SessionManager.generateSessionId();
      this.hlsInstance = arg0.hlsInstance;
      return;
    }
  }
  let obj = {
    key: "initialize",
    value() {
      const self = this;
      const obj = { debug: null, disableCookies: true, respectDoNotTrack: true };
      const debug = this.config.debug;
      obj.debug = null != debug && debug;
      const MuxIntegration = SimpleMuxWrapper(outer1_2[4]).MuxIntegration;
      obj.data = MuxIntegration.mapDiscordToMuxMetadata(self.config, self.sessionId);
      if (null != self.hlsInstance) {
        tmp.hlsjs = self.hlsInstance;
        tmp.Hls = self.hlsInstance.constructor;
      }
      outer1_1(outer1_2[5]).monitor(self.videoElement, obj);
      self.isMonitoring = true;
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "endSession",
    value() {
      const self = this;
      if (this.isMonitoring) {
        if ("function" === typeof outer1_1(outer1_2[5]).destroyMonitor) {
          outer1_1(outer1_2[5]).destroyMonitor(self.videoElement);
          const obj = outer1_1(outer1_2[5]);
        }
        self.isMonitoring = false;
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "destroy",
    value() {
      const self = this;
      if (this.isMonitoring) {
        if ("function" === typeof outer1_1(outer1_2[5]).destroyMonitor) {
          outer1_1(outer1_2[5]).destroyMonitor(self.videoElement);
          const obj = outer1_1(outer1_2[5]);
        }
        self.isMonitoring = false;
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getSessionId",
    value() {
      return this.sessionId;
    }
  };
  return callback(SimpleMuxWrapper, items);
})();
const result = require("log").fileFinishedImporting("modules/video-qoe/SimpleMuxWrapper.tsx");

export const SimpleMuxWrapper = tmp3;
