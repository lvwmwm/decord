// Module ID: 17102
// Function ID: 17103
// Name: modules/SimpleMuxWrapper
// Dependencies: [4, 17103, 17104, 17105, 2]

// Module 17102 (modules/SimpleMuxWrapper)
import logger_Logger from "logger/Logger" /* 4 */;
import SessionManager2 from "SessionManager" /* 17103 */;
import MuxIntegration2 from "MuxIntegration" /* 17104 */;
import _modDef17105 from "module_17105" /* 17105 */;
import size from "module_2" /* 2 */;

const logger = new logger_Logger.Logger("SimpleMuxWrapper");
const result = size.fileFinishedImporting("modules/video-qoe/SimpleMuxWrapper.tsx");
class SimpleMuxWrapper {
  constructor(config) {
    const merged = Object.assign({ isMonitoring: false });
    merged.config = config;
    merged.videoElement = config.videoElement;
    const SessionManager = SessionManager2.SessionManager;
    merged.sessionId = SessionManager.generateSessionId();
    merged.hlsInstance = config.hlsInstance;
    return merged;
  }
  initialize() {
    let MuxIntegration;
    const self = this;
    let flag = this.config.debug;
    if (flag == null) {
      flag = false;
    }
    const obj = { debug: flag, disableCookies: true, respectDoNotTrack: true, data: MuxIntegration.mapDiscordToMuxMetadata(self.config, self.sessionId) };
    MuxIntegration = MuxIntegration2.MuxIntegration;
    if (null != self.hlsInstance) {
      obj.hlsjs = self.hlsInstance;
      obj.Hls = self.hlsInstance.constructor;
    }
    try {
      const obj2 = _modDef17105;
      obj2.monitor(self.videoElement, obj);
      self.isMonitoring = true;
    } catch (tmp4) {
      logger.error("Error creating Mux monitor", tmp4);
      self.isMonitoring = false;
    }
  }
  endSession() {
    const self = this;
    if (this.isMonitoring) {
      try {
        const tmp = importDefault;
        if (typeof _modDef17105.destroyMonitor === "function") {
          const tmpResult = tmp(17105);
          tmpResult.destroyMonitor(self.videoElement);
        }
        self.isMonitoring = false;
      } catch (tmp3) {
        logger.error("Error ending Mux session", tmp3);
      }
    }
  }
  destroy() {
    const self = this;
    if (this.isMonitoring) {
      try {
        const tmp = importDefault;
        if (typeof _modDef17105.destroyMonitor === "function") {
          const tmpResult = tmp(17105);
          tmpResult.destroyMonitor(self.videoElement);
        }
        self.isMonitoring = false;
      } catch (tmp3) {
        logger.error("Error destroying Mux monitor", tmp3);
      }
    }
  }
  getSessionId() {
    return this.sessionId;
  }
}
const prototype = SimpleMuxWrapper.prototype;

export { SimpleMuxWrapper };
