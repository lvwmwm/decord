// Module ID: 14672
// Function ID: 14673
// Name: MobileMuxWrapper
// Dependencies: [4, 14673, 2]

// Module 14672 (MobileMuxWrapper)
import logger_Logger from "logger/Logger" /* 4 */;
import MobileCustomMuxIntegration from "MobileCustomMuxIntegration" /* 14673 */;
import size_mod from "module_2" /* 2 */;

const logger = new logger_Logger.Logger("MobileMuxWrapper");
let size = size_mod;
let result = size.fileFinishedImporting("modules/video-qoe/MobileMuxWrapper.tsx");
class MobileMuxWrapper {
  constructor(config) {
    const merged = Object.assign({ muxIntegration: null, seekingEmitted: false, seekTimeout: null });
    merged.config = config;
    return merged;
  }
  initialize() {
    const self = this;
    try {
      const self2 = this;
      const self3 = this;
      const mobileCustomMuxIntegration = new MobileCustomMuxIntegration.MobileCustomMuxIntegration(self.config);
      self.muxIntegration = mobileCustomMuxIntegration;
      const muxIntegration = self.muxIntegration;
      muxIntegration.initialize();
      logger.info("MobileMuxWrapper initialized successfully");
    } catch (tmp8) {
      logger.error("Error initializing MobileMuxWrapper", tmp8);
      self.muxIntegration = null;
    }
  }
  updatePlayheadTime(arg0) {
    const muxIntegration = this.muxIntegration;
    if (muxIntegration != null) {
      muxIntegration.updatePlayheadTime(arg0);
    }
  }
  updateVideoDimensions(arg0, arg1) {
    const muxIntegration = this.muxIntegration;
    if (muxIntegration != null) {
      const result = muxIntegration.updateVideoDimensions(arg0, arg1);
    }
  }
  updateVideoSourceDimensions(arg0, arg1) {
    const muxIntegration = this.muxIntegration;
    if (muxIntegration != null) {
      const result = muxIntegration.updateVideoSourceDimensions(arg0, arg1);
    }
  }
  updateVideoSource(arg0, arg1, arg2) {
    const muxIntegration = this.muxIntegration;
    if (muxIntegration != null) {
      muxIntegration.updateVideoSource(arg0, arg1, arg2);
    }
  }
  updatePlayerState(arg0, arg1) {
    const muxIntegration = this.muxIntegration;
    if (muxIntegration != null) {
      muxIntegration.updatePlayerState(arg0, arg1);
    }
  }
  onLoadStart() {
    const muxIntegration = this.muxIntegration;
    if (muxIntegration != null) {
      muxIntegration.emitLoadStart();
    }
  }
  onLoad(arg0) {
    const muxIntegration = this.muxIntegration;
    if (muxIntegration != null) {
      muxIntegration.emitLoad(arg0);
    }
  }
  onPlay() {
    const muxIntegration = this.muxIntegration;
    if (muxIntegration != null) {
      muxIntegration.emitPlay();
    }
  }
  onPause() {
    const muxIntegration = this.muxIntegration;
    if (muxIntegration != null) {
      muxIntegration.emitPause();
    }
  }
  onPlaying() {
    const muxIntegration = this.muxIntegration;
    if (muxIntegration != null) {
      muxIntegration.emitPlaying();
    }
  }
  onCanPlay() {
    const muxIntegration = this.muxIntegration;
    if (muxIntegration != null) {
      muxIntegration.emitCanPlay();
    }
  }
  onSeek() {
    const self = this;
    if (null != this.muxIntegration) {
      if (!self.seekingEmitted) {
        let muxIntegration = self.muxIntegration;
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
        if (muxIntegration != null) {
          muxIntegration.emitSeeked();
        }
        self.seekingEmitted = false;
        self.seekTimeout = null;
      }, 100);
    }
  }
  onEnd() {
    const muxIntegration = this.muxIntegration;
    if (muxIntegration != null) {
      muxIntegration.emitEnded();
    }
    const muxIntegration2 = this.muxIntegration;
    if (muxIntegration2 != null) {
      muxIntegration2.destroy();
    }
  }
  onError(arg0) {
    const muxIntegration = this.muxIntegration;
    if (muxIntegration != null) {
      muxIntegration.emitError(arg0);
    }
  }
  onProgress(arg0) {
    this.updatePlayheadTime(arg0);
    const muxIntegration = this.muxIntegration;
    if (muxIntegration != null) {
      muxIntegration.emitTimeUpdate();
    }
  }
  onBuffer(nativeEvent) {
    const tmp = nativeEvent;
    if (!tmp) {
      const self = this;
      const muxIntegration = this.muxIntegration;
      if (muxIntegration != null) {
        muxIntegration.emitCanPlay();
      }
      const muxIntegration2 = self.muxIntegration;
      let hasPlayStartedResult;
      if (muxIntegration2 != null) {
        hasPlayStartedResult = muxIntegration2.hasPlayStarted();
      }
      if (hasPlayStartedResult) {
        const muxIntegration3 = self.muxIntegration;
        if (muxIntegration3 != null) {
          muxIntegration3.emitPlaying();
        }
      }
    }
  }
  onReadyForDisplay() {
    const self = this;
    const muxIntegration = this.muxIntegration;
    if (muxIntegration != null) {
      muxIntegration.emitPlayerReady();
    }
    const muxIntegration2 = self.muxIntegration;
    let hasPlayStartedResult;
    if (muxIntegration2 != null) {
      hasPlayStartedResult = muxIntegration2.hasPlayStarted();
    }
    if (hasPlayStartedResult) {
      const muxIntegration3 = self.muxIntegration;
      if (muxIntegration3 != null) {
        muxIntegration3.emitPlaying();
      }
    }
  }
  onVideoTrackChange(selectedVideoTrackId, videoTracks) {
    let closure_0 = selectedVideoTrackId;
    size = videoTracks.find((trackId) => trackId.trackId === selectedVideoTrackId);
    if (null != size) {
      const self = this;
      const muxIntegration = this.muxIntegration;
      if (muxIntegration != null) {
        muxIntegration.emitRenditionChange(size.width, size.height, size.bitrate);
      }
    }
  }
  destroy() {
    try {
      const self = this;
      if (null != this.seekTimeout) {
        const _clearTimeout = clearTimeout;
        clearTimeout(self.seekTimeout);
        self.seekTimeout = null;
      }
      const muxIntegration = self.muxIntegration;
      if (muxIntegration != null) {
        muxIntegration.destroy();
      }
      self.muxIntegration = null;
    } catch (tmp5) {
      logger.error("Error destroying MobileMuxWrapper", tmp5);
    }
  }
  getSessionId() {
    const muxIntegration = this.muxIntegration;
    let sessionId;
    if (muxIntegration != null) {
      sessionId = muxIntegration.getSessionId();
    }
    if (sessionId == null) {
      sessionId = null;
    }
    return sessionId;
  }
  isInitialized() {
    return null != this.muxIntegration;
  }
}
const prototype = MobileMuxWrapper.prototype;

export { MobileMuxWrapper };
