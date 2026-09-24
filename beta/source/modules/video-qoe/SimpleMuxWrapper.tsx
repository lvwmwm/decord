// Module ID: 15403
// Function ID: 15404
// Name: modules/SimpleMuxWrapper
// Dependencies: [4, 15404, 15405, 15406, 2]

// Module 15403 (modules/SimpleMuxWrapper)
import logger_Logger from "logger/Logger" /* 4 */;
import SessionManager2 from "SessionManager" /* 15404 */;
import MuxIntegration2 from "MuxIntegration" /* 15405 */;
import UDefault from "U" /* 15406 */;
import size from "module_2" /* 2 */;

const logger = new logger_Logger.Logger("SimpleMuxWrapper");
const result = size.fileFinishedImporting("modules/video-qoe/SimpleMuxWrapper.tsx");
class SimpleMuxWrapper {
  constructor(arg0) {
    merged = Object.assign({ isMonitoring: false });
    merged.config = global;
    merged.videoElement = global.videoElement;
    SessionManager = closure_0(closure_2[1]).SessionManager;
    merged.sessionId = SessionManager.generateSessionId();
    merged.hlsInstance = global.hlsInstance;
    return merged;
  }
}
const prototype = SimpleMuxWrapper.prototype;
prototype["initialize"] = function initialize() {
  const self = this;
  let flag = this.config.debug;
  if (flag == null) {
    flag = false;
  }
  const obj = { debug: flag, disableCookies: true, respectDoNotTrack: true, data: null };
  const MuxIntegration = MuxIntegration2.MuxIntegration;
  obj.data = MuxIntegration.mapDiscordToMuxMetadata(self.config, self.sessionId);
  if (null != self.hlsInstance) {
    obj.hlsjs = self.hlsInstance;
    obj.Hls = self.hlsInstance.constructor;
  }
  try {
    UDefault.monitor(self.videoElement, obj);
    self.isMonitoring = true;
  } catch (tmp5) {
    logger.error("Error creating Mux monitor", tmp5);
    tmp.isMonitoring = false;
  }
};
prototype["endSession"] = function endSession() {
  const self = this;
  if (this.isMonitoring) {
    try {
      if (typeof UDefault.destroyMonitor === "function") {
        tmp(15406).destroyMonitor(self.videoElement);
        const tmpResult = tmp(15406);
      }
      self.isMonitoring = false;
      tmp = importDefault;
    } catch (tmp3) {
      logger.error("Error ending Mux session", tmp3);
    }
  }
};
prototype["destroy"] = function destroy() {
  const self = this;
  if (this.isMonitoring) {
    try {
      if (typeof UDefault.destroyMonitor === "function") {
        tmp(15406).destroyMonitor(self.videoElement);
        const tmpResult = tmp(15406);
      }
      self.isMonitoring = false;
      tmp = importDefault;
    } catch (tmp3) {
      logger.error("Error destroying Mux monitor", tmp3);
    }
  }
};
prototype["getSessionId"] = function getSessionId() {
  return this.sessionId;
};

export { SimpleMuxWrapper };
