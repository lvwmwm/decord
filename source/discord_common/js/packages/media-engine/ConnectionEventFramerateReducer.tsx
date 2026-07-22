// Module ID: 4277
// Function ID: 37468
// Name: logger
// Dependencies: []

// Module 4277 (logger)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
({ SpeakingFlags: closure_4, VIDEO_QUALITY_FRAMRATE_NOT_SPEAKING_TIMEOUT: closure_5 } = arg1(dependencyMap[2]));
const logger = new arg1(dependencyMap[3]).Logger("ConnectionEventFramerateReducer");
const tmp2 = arg1(dependencyMap[2]);
const tmp4 = () => {
  class ConnectionEventFramerateReducer {
    constructor(arg0, arg1) {
      ConnectionEventFramerateReducer = this;
      tmp = closure_2(this, ConnectionEventFramerateReducer);
      this.connection = arg0;
      this.sinkWants = arg1;
      this.handleSpeaking = (arg0, arg1) => {
        if (arg0 === self.connection.userId) {
          self.userSpeakingChange(arg1 === constants.NONE);
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
      enableNativeLoggerResult = closure_6.enableNativeLogger(true);
      onResult = arg0.on(ConnectionEventFramerateReducer(closure_1[4]).BaseConnectionEvent.Speaking, this.handleSpeaking);
      onResult1 = arg0.on(ConnectionEventFramerateReducer(closure_1[4]).BaseConnectionEvent.Mute, this.handleSelfMute);
      initializeResult = this.initialize();
      return;
    }
  }
  const arg1 = ConnectionEventFramerateReducer;
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
      const self = this;
      const ConnectionEventFramerateReducer = this;
      const connection = this.connection;
      if (!connection.hasDesktopSource()) {
        const result = self.destroyFramerateScaleFactorTimers();
        if (arg0) {
          const _setTimeout = setTimeout;
          self.framerateReductionTimeout = setTimeout(() => {
            if (!self.connection.destroyed) {
              const _HermesInternal = HermesInternal;
              closure_6.info("BaseConnection.userSpeakingChange: Reduced framerate after " + closure_5 + " ms.");
              self.framerateReductionTimeout = undefined;
              self.sinkWants.isMuted = true;
              const result = self.updateRemoteWantsFramerate();
            }
          }, closure_5);
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
      connection.updateVideoQuality([]);
    }
  };
  items[4] = {
    key: "destroy",
    value() {
      const result = this.destroyFramerateScaleFactorTimers();
    }
  };
  return callback(ConnectionEventFramerateReducer, items);
}();
const result = arg1(dependencyMap[5]).fileFinishedImporting("../discord_common/js/packages/media-engine/ConnectionEventFramerateReducer.tsx");

export default tmp4;
