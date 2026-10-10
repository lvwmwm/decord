// Module ID: 15393
// Function ID: 15394
// Name: modules/SimpleMuxWrapper
// Dependencies: [4, 15394, 15395, 15396, 2]

// Module 15393 (modules/SimpleMuxWrapper)
import logger_Logger from "logger/Logger" /* 4 */;
import SessionManager2 from "SessionManager" /* 15394 */;
import MuxIntegration2 from "MuxIntegration" /* 15395 */;
import _modDef15396 from "module_15396" /* 15396 */;
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
      const obj2 = _modDef15396;
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
        if (typeof _modDef15396.destroyMonitor === "function") {
          const tmpResult = tmp(15396);
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
        if (typeof _modDef15396.destroyMonitor === "function") {
          const tmpResult = tmp(15396);
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
