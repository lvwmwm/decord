// Module ID: 14956
// Function ID: 14957
// Name: modules/SimpleMuxWrapper
// Dependencies: [4, 14957, 14958, 14959, 2]

// Module 14956 (modules/SimpleMuxWrapper)
import logger_Logger from "logger/Logger" /* 4 */;
import SessionManager2 from "SessionManager" /* 14957 */;
import MuxIntegration2 from "MuxIntegration" /* 14958 */;
import _modDef14959 from "module_14959" /* 14959 */;
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
      const obj2 = _modDef14959;
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
        if (typeof _modDef14959.destroyMonitor === "function") {
          const tmpResult = tmp(14959);
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
        if (typeof _modDef14959.destroyMonitor === "function") {
          const tmpResult = tmp(14959);
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
