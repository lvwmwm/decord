// Module ID: 13920
// Function ID: 105346
// Name: logger
// Dependencies: []

// Module 13920 (logger)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const logger = new arg1(dependencyMap[2]).Logger("SimpleMuxWrapper");
const tmp3 = () => {
  class SimpleMuxWrapper {
    constructor(arg0) {
      tmp = closure_3(this, SimpleMuxWrapper);
      this.isMonitoring = false;
      this.config = arg0;
      this.videoElement = arg0.videoElement;
      SessionManager = SimpleMuxWrapper(closure_2[3]).SessionManager;
      this.sessionId = SessionManager.generateSessionId();
      this.hlsInstance = arg0.hlsInstance;
      return;
    }
  }
  const arg1 = SimpleMuxWrapper;
  let obj = {
    key: "initialize",
    value() {
      const self = this;
      const obj = { CLEAR_COMMUNICATION_DISABLED_MODAL_NAME: null, STEP_3_CLICKED_EXTERNAL: null, onTapGameMention: null };
      const debug = this.config.debug;
      obj.debug = null != debug && debug;
      const MuxIntegration = SimpleMuxWrapper(closure_2[4]).MuxIntegration;
      obj.data = MuxIntegration.mapDiscordToMuxMetadata(self.config, self.sessionId);
      if (null != self.hlsInstance) {
        tmp.hlsjs = self.hlsInstance;
        tmp.Hls = self.hlsInstance.constructor;
      }
      callback(closure_2[5]).monitor(self.videoElement, obj);
      self.isMonitoring = true;
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "endSession",
    value() {
      const self = this;
      if (this.isMonitoring) {
        if ("function" === typeof callback(closure_2[5]).destroyMonitor) {
          callback(closure_2[5]).destroyMonitor(self.videoElement);
          const obj = callback(closure_2[5]);
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
        if ("function" === typeof callback(closure_2[5]).destroyMonitor) {
          callback(closure_2[5]).destroyMonitor(self.videoElement);
          const obj = callback(closure_2[5]);
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
}();
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/video-qoe/SimpleMuxWrapper.tsx");

export const SimpleMuxWrapper = tmp3;
