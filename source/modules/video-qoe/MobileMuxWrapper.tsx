// Module ID: 13907
// Function ID: 105699
// Name: logger
// Dependencies: []

// Module 13907 (logger)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const logger = new arg1(dependencyMap[2]).Logger("MobileMuxWrapper");
const tmp3 = () => {
  class MobileMuxWrapper {
    constructor(arg0) {
      tmp = closure_2(this, MobileMuxWrapper);
      this.muxIntegration = null;
      this.seekingEmitted = false;
      this.seekTimeout = null;
      this.config = arg0;
      return;
    }
  }
  const arg1 = MobileMuxWrapper;
  let obj = {
    key: "initialize",
    value() {
      const mobileCustomMuxIntegration = new MobileMuxWrapper(closure_1[3]).MobileCustomMuxIntegration(this.config);
      this.muxIntegration = mobileCustomMuxIntegration;
      const muxIntegration = this.muxIntegration;
      muxIntegration.initialize();
      closure_4.info("MobileMuxWrapper initialized successfully");
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "updatePlayheadTime",
    value(arg0) {
      const muxIntegration = this.muxIntegration;
      if (null != muxIntegration) {
        muxIntegration.updatePlayheadTime(arg0);
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "updateVideoDimensions",
    value(arg0, arg1) {
      const muxIntegration = this.muxIntegration;
      if (null != muxIntegration) {
        const result = muxIntegration.updateVideoDimensions(arg0, arg1);
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "updateVideoSourceDimensions",
    value(arg0, arg1) {
      const muxIntegration = this.muxIntegration;
      if (null != muxIntegration) {
        const result = muxIntegration.updateVideoSourceDimensions(arg0, arg1);
      }
    }
  };
  items[4] = {
    key: "updateVideoSource",
    value(arg0, arg1, arg2) {
      const muxIntegration = this.muxIntegration;
      if (null != muxIntegration) {
        muxIntegration.updateVideoSource(arg0, arg1, arg2);
      }
    }
  };
  items[5] = {
    key: "updatePlayerState",
    value(arg0, arg1) {
      const muxIntegration = this.muxIntegration;
      if (null != muxIntegration) {
        muxIntegration.updatePlayerState(arg0, arg1);
      }
    }
  };
  items[6] = {
    key: "onLoadStart",
    value() {
      const muxIntegration = this.muxIntegration;
      if (null != muxIntegration) {
        muxIntegration.emitLoadStart();
      }
    }
  };
  items[7] = {
    key: "onLoad",
    value(arg0) {
      const muxIntegration = this.muxIntegration;
      if (null != muxIntegration) {
        muxIntegration.emitLoad(arg0);
      }
    }
  };
  items[8] = {
    key: "onPlay",
    value() {
      const muxIntegration = this.muxIntegration;
      if (null != muxIntegration) {
        muxIntegration.emitPlay();
      }
    }
  };
  items[9] = {
    key: "onPause",
    value() {
      const muxIntegration = this.muxIntegration;
      if (null != muxIntegration) {
        muxIntegration.emitPause();
      }
    }
  };
  items[10] = {
    key: "onPlaying",
    value() {
      const muxIntegration = this.muxIntegration;
      if (null != muxIntegration) {
        muxIntegration.emitPlaying();
      }
    }
  };
  items[11] = {
    key: "onCanPlay",
    value() {
      const muxIntegration = this.muxIntegration;
      if (null != muxIntegration) {
        muxIntegration.emitCanPlay();
      }
    }
  };
  items[12] = {
    key: "onSeek",
    value() {
      const self = this;
      if (null != this.muxIntegration) {
        if (!self.seekingEmitted) {
          const muxIntegration = self.muxIntegration;
          muxIntegration.emitSeeking();
          self.seekingEmitted = true;
        }
        if (null != self.seekTimeout) {
          const _clearTimeout = clearTimeout;
          clearTimeout(self.seekTimeout);
        }
        const _setTimeout = setTimeout;
        self.seekTimeout = setTimeout(() => {
          const muxIntegration = self.muxIntegration;
          if (null != muxIntegration) {
            muxIntegration.emitSeeked();
          }
          self.seekingEmitted = false;
          self.seekTimeout = null;
        }, 100);
      }
    }
  };
  items[13] = {
    key: "onEnd",
    value() {
      const muxIntegration = this.muxIntegration;
      if (null != muxIntegration) {
        muxIntegration.emitEnded();
      }
      const muxIntegration2 = this.muxIntegration;
      if (null != muxIntegration2) {
        muxIntegration2.destroy();
      }
    }
  };
  items[14] = {
    key: "onError",
    value(arg0) {
      const muxIntegration = this.muxIntegration;
      if (null != muxIntegration) {
        muxIntegration.emitError(arg0);
      }
    }
  };
  items[15] = {
    key: "onProgress",
    value(arg0) {
      this.updatePlayheadTime(arg0);
      const muxIntegration = this.muxIntegration;
      if (null != muxIntegration) {
        muxIntegration.emitTimeUpdate();
      }
    }
  };
  items[16] = {
    key: "onBuffer",
    value(arg0) {
      const self = this;
      if (!arg0) {
        const muxIntegration = self.muxIntegration;
        if (null != muxIntegration) {
          muxIntegration.emitCanPlay();
        }
        const muxIntegration2 = self.muxIntegration;
        if (tmp3) {
          const muxIntegration3 = self.muxIntegration;
          if (null != muxIntegration3) {
            muxIntegration3.emitPlaying();
          }
        }
        const tmp3 = null != muxIntegration2 && muxIntegration2.hasPlayStarted();
      }
    }
  };
  items[17] = {
    key: "onReadyForDisplay",
    value() {
      const self = this;
      const muxIntegration = this.muxIntegration;
      if (null != muxIntegration) {
        muxIntegration.emitPlayerReady();
      }
      const muxIntegration2 = self.muxIntegration;
      if (tmp2) {
        const muxIntegration3 = self.muxIntegration;
        if (null != muxIntegration3) {
          muxIntegration3.emitPlaying();
        }
      }
    }
  };
  items[18] = {
    key: "onVideoTrackChange",
    value(arg0, arr) {
      const size = arr.find((trackId) => trackId.trackId === trackId);
      if (null != size) {
        const self = this;
        const muxIntegration = this.muxIntegration;
        if (null != muxIntegration) {
          muxIntegration.emitRenditionChange(size.width, size.height, size.bitrate);
        }
      }
    }
  };
  items[19] = {
    key: "destroy",
    value() {
      const self = this;
      if (null != this.seekTimeout) {
        const _clearTimeout = clearTimeout;
        clearTimeout(self.seekTimeout);
        self.seekTimeout = null;
      }
      const muxIntegration = self.muxIntegration;
      if (null != muxIntegration) {
        muxIntegration.destroy();
      }
      self.muxIntegration = null;
    }
  };
  items[20] = {
    key: "getSessionId",
    value() {
      const muxIntegration = this.muxIntegration;
      let sessionId;
      if (null != muxIntegration) {
        sessionId = muxIntegration.getSessionId();
      }
      let tmp2 = null;
      if (null != sessionId) {
        tmp2 = sessionId;
      }
      return tmp2;
    }
  };
  items[21] = {
    key: "isInitialized",
    value() {
      return null != this.muxIntegration;
    }
  };
  return callback(MobileMuxWrapper, items);
}();
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/video-qoe/MobileMuxWrapper.tsx");

export const MobileMuxWrapper = tmp3;
