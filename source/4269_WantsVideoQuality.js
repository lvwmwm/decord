// Module ID: 4269
// Function ID: 37330
// Name: WantsVideoQuality
// Dependencies: [3238002704, 33554448, 1946157056, 4147, 4293]

// Module 4269 (WantsVideoQuality)
import hasSubgameInfoChanged from "hasSubgameInfoChanged";

let VideoQualityMode;
const importDefaultResult = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
({ defaultVideoQualityOptions: closure_4, MediaEngineContextTypes: closure_5, VideoQualityMode, VIDEO_QUALITY_FRAMERATE: closure_6, BIT_FLOOR_PER_PIXEL: closure_7 } = arg1(dependencyMap[2]));
class WantsVideoQuality {
  constructor(arg0) {
    self = this;
    tmp = closure_3(this, WantsVideoQuality);
    if (null == global.capture) {
      if (null == global.encode) {
        tmp10 = globalThis;
        _Error = Error;
        prototype3 = Error.prototype;
        tmp11 = new.target;
        str = "Invalid arguments.";
        tmp12 = new.target;
        error = new Error("Invalid arguments.");
        tmp14 = error;
        throw error;
      }
    }
    tmp2 = undefined;
    if (null != global.capture) {
      tmp3 = f37332;
      prototype = f37332.prototype;
      tmp4 = new.target;
      tmp5 = new.target;
      tmp2 = new f37332(global.capture);
    }
    self.capture = tmp2;
    tmp6 = undefined;
    if (null != global.encode) {
      tmp7 = f37332;
      prototype2 = f37332.prototype;
      tmp8 = new.target;
      tmp9 = new.target;
      tmp6 = new f37332(global.encode);
    }
    self.encode = tmp6;
    ({ bitrateMin: self.bitrateMin, bitrateMax: self.bitrateMax, bitrateTarget: self.bitrateTarget, localWant: self.localWant } = global);
    return;
  }
}
const frozen = Object.freeze({ [VideoQualityMode.AUTO]: {}, [VideoQualityMode.FULL]: { encode: { aze: -1455969993, azj: 43945025 } } });
const importDefaultResultResult = importDefaultResult(WantsVideoQuality);
const tmp6 = () => {
  class VideoQuality {
    constructor(arg0) {
      tmp = closure_3(this, VideoQuality);
      ({ width: this.width, height: this.height, framerate: this.framerate } = arg0);
      this.pixelCount = arg0.width * arg0.height;
      return;
    }
  }
  const arg1 = VideoQuality;
  let obj = {
    key: "equals",
    value(width, width2) {
      let tmp = null == width && null == width2;
      if (!tmp) {
        let tmp2 = null != width && null != width2;
        if (tmp2) {
          tmp2 = width.width === width2.width && width.height === width2.height && width.framerate === width2.framerate;
          const tmp3 = width.width === width2.width && width.height === width2.height && width.framerate === width2.framerate;
        }
        tmp = tmp2;
      }
      return tmp;
    }
  };
  const items = [obj, ];
  obj = {
    key: "extend",
    value(width, width2) {
      if (null == width) {
        return width2;
      } else if (null == width2) {
        return width;
      } else {
        width = undefined;
        if (null != width2) {
          width = width2.width;
        }
        if (null == width) {
          let width1;
          if (null != width) {
            width1 = width.width;
          }
          width = width1;
        }
        let num = 0;
        if (null != width) {
          num = width;
        }
        let height;
        if (null != width2) {
          height = width2.height;
        }
        if (null == height) {
          let height1;
          if (null != width) {
            height1 = width.height;
          }
          height = height1;
        }
        let num2 = 0;
        if (null != height) {
          num2 = height;
        }
        const obj = { width: num, height: num2 };
        let framerate;
        if (null != width2) {
          framerate = width2.framerate;
        }
        if (null == framerate) {
          let framerate1;
          if (null != width) {
            framerate1 = width.framerate;
          }
          framerate = framerate1;
        }
        obj.framerate = framerate;
        obj.pixelCount = num * num2;
        return obj;
      }
    }
  };
  items[1] = obj;
  return importDefaultResult(VideoQuality, null, items);
}();
const tmp3 = arg1(dependencyMap[2]);
const result = hasSubgameInfoChanged.fileFinishedImporting("../discord_common/js/packages/media-engine/VideoQualityManager.tsx");

export const VIDEO_QUALITY_MODES_TO_OVERWRITES = frozen;
export const WantsVideoQuality = importDefaultResultResult;
export const VideoQuality = tmp6;
export const VideoQualityManager = () => {
  class VideoQualityManager {
    constructor(arg0, arg1) {
      tmp = arg2;
      self = this;
      if (arg2 === undefined) {
        tmp = closure_4;
      }
      tmp2 = closure_3(self, VideoQualityManager);
      self.contextType = arg0;
      self.connection = arg1;
      self.options = tmp;
      self.isMuted = false;
      self.isStreamContext = self.contextType === closure_5.STREAM;
      mediaSinkWantsLadder = new VideoQualityManager(closure_1[3]).MediaSinkWantsLadder(tmp);
      self.ladder = mediaSinkWantsLadder;
      self.goliveMaxQuality = self.getDefaultGoliveQuality();
      self.lastGoLivePixelCount = {};
      return;
    }
  }
  const arg1 = VideoQualityManager;
  let obj = {
    key: "getQuality",
    value(arg0) {
      const self = this;
      const connection = this.connection;
      const localWant = connection.getLocalWant(arg0);
      let num = 0;
      if (null != arg0) {
        const connection2 = self.connection;
        const remoteVideoSinkPixelCount = connection2.getRemoteVideoSinkPixelCount(arg0);
        let tmp3 = remoteVideoSinkPixelCount;
        if (null != self.lastGoLivePixelCount[arg0]) {
          tmp3 = remoteVideoSinkPixelCount;
          if (self.lastGoLivePixelCount[arg0] > 0) {
            const result = remoteVideoSinkPixelCount / self.lastGoLivePixelCount[arg0];
            let tmp5 = remoteVideoSinkPixelCount;
            if (result <= 1.05) {
              tmp5 = remoteVideoSinkPixelCount;
              if (result >= 0.95) {
                tmp5 = self.lastGoLivePixelCount[arg0];
              }
            }
            tmp3 = tmp5;
          }
        }
        self.lastGoLivePixelCount[arg0] = tmp3;
        num = tmp3;
      }
      if (self.isStreamContext) {
        let goliveQuality = self.getGoliveQuality(localWant, num);
      } else {
        goliveQuality = self.getVideoQuality(localWant);
      }
      let tmp11 = goliveQuality;
      if (null != self.qualityOverwrite) {
        tmp11 = closure_8;
        const obj = { encode: closure_9.extend(goliveQuality.encode, self.qualityOverwrite.encode), capture: closure_9.extend(goliveQuality.capture, self.qualityOverwrite.capture) };
        let bitrateMin = self.qualityOverwrite.bitrateMin;
        if (null == bitrateMin) {
          bitrateMin = goliveQuality.bitrateMin;
        }
        obj.bitrateMin = bitrateMin;
        let bitrateMax = self.qualityOverwrite.bitrateMax;
        if (null == bitrateMax) {
          bitrateMax = goliveQuality.bitrateMax;
        }
        obj.bitrateMax = bitrateMax;
        let bitrateTarget = self.qualityOverwrite.bitrateTarget;
        if (null == bitrateTarget) {
          bitrateTarget = goliveQuality.bitrateTarget;
        }
        obj.bitrateTarget = bitrateTarget;
        obj.localWant = goliveQuality.localWant;
        const prototype = tmp11.prototype;
        tmp11 = new tmp11(obj);
      }
      return tmp11;
    }
  };
  const items = [obj, , , , , , , ];
  obj = {
    key: "applyQualityConstraints",
    value(constraints) {
      const quality = this.getQuality(arg1);
      if (null != quality.capture) {
        constraints.encodingVideoWidth = quality.capture.width;
        constraints.encodingVideoHeight = quality.capture.height;
        constraints.encodingVideoFrameRate = quality.capture.framerate;
        constraints.captureVideoFrameRate = quality.capture.framerate;
      }
      if (null != quality.encode) {
        constraints.remoteSinkWantsMaxFramerate = quality.encode.framerate;
        constraints.remoteSinkWantsPixelCount = quality.encode.pixelCount;
      }
      if (null != quality.bitrateTarget) {
        constraints.encodingVideoBitRate = quality.bitrateTarget;
      } else {
        constraints.encodingVideoBitRate = quality.bitrateMax;
      }
      ({ bitrateMin: constraints.encodingVideoMinBitRate, bitrateMax: constraints.encodingVideoMaxBitRate } = quality);
      if (tmp2) {
        const _Math = Math;
        constraints.encodingVideoBitRate = Math.min(constraints.encodingVideoBitRate, constraints.encodingVideoMaxBitRate);
      }
      return { quality, constraints };
    }
  };
  items[1] = obj;
  obj = {
    key: "setQualityOverwrite",
    value(qualityOverwrite) {
      this.qualityOverwrite = qualityOverwrite;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "setGoliveQuality",
    value(capture) {
      const self = this;
      let tmp = closure_8;
      const obj = { capture: closure_9.extend(this.goliveMaxQuality.capture, capture.capture), encode: closure_9.extend(this.goliveMaxQuality.encode, capture.encode) };
      let bitrateMin = capture.bitrateMin;
      if (null == bitrateMin) {
        bitrateMin = self.goliveMaxQuality.bitrateMin;
      }
      obj.bitrateMin = bitrateMin;
      let bitrateMax = capture.bitrateMax;
      if (null == bitrateMax) {
        bitrateMax = self.goliveMaxQuality.bitrateMax;
      }
      obj.bitrateMax = bitrateMax;
      let bitrateTarget = capture.bitrateTarget;
      if (null == bitrateTarget) {
        bitrateTarget = self.goliveMaxQuality.bitrateTarget;
      }
      obj.bitrateTarget = bitrateTarget;
      obj.localWant = self.goliveMaxQuality.localWant;
      tmp = new tmp(obj);
      self.goliveMaxQuality = tmp;
    }
  };
  items[4] = {
    key: "getVideoQuality",
    value(localWant) {
      const self = this;
      const ladder = this.ladder;
      const resolution = ladder.getResolution(localWant);
      let obj = {};
      obj = {};
      const result = this.options.videoBitrate.min * resolution.budgetPortion;
      const result1 = this.options.videoBitrate.max * resolution.budgetPortion;
      const merged = Object.assign(resolution);
      obj["framerate"] = this.isMuted ? resolution.mutedFramerate : resolution.framerate;
      obj.encode = obj;
      obj.capture = { width: self.options.videoCapture.width, height: self.options.videoCapture.height, framerate: self.options.videoCapture.framerate };
      obj.bitrateMin = Math.max(result, self.options.videoBitrateFloor);
      obj.bitrateMax = Math.max(result1, self.options.videoBitrateFloor);
      obj.localWant = localWant;
      return new closure_8(obj);
    }
  };
  items[5] = {
    key: "scaleLinearly",
    value(arg0, arg1, arg2) {
      let num = 0;
      if (0 !== arg1) {
        num = arg0 * arg2 / arg1;
      }
      return num;
    }
  };
  items[6] = {
    key: "getGoliveQuality",
    value(localWant) {
      const self = this;
      const encode = this.goliveMaxQuality.encode;
      let pixelCount;
      if (null != encode) {
        pixelCount = encode.pixelCount;
      }
      if (undefined !== pixelCount) {
        if (arg1 < self.goliveMaxQuality.encode.pixelCount) {
          if (arg1 > 0) {
            const _Math7 = Math;
            const bound = Math.min(closure_7 * self.goliveMaxQuality.encode.pixelCount * self.goliveMaxQuality.encode.framerate, self.goliveMaxQuality.bitrateMax);
            let scaleLinearlyResult2;
            const scaleLinearlyResult = self.scaleLinearly(arg1, self.goliveMaxQuality.encode.pixelCount, self.goliveMaxQuality.bitrateMin);
            if (null != self.goliveMaxQuality.bitrateTarget) {
              scaleLinearlyResult2 = self.scaleLinearly(arg1, self.goliveMaxQuality.encode.pixelCount, self.goliveMaxQuality.bitrateTarget);
            }
            let tmp3 = closure_8;
            const obj = { encode: self.goliveMaxQuality.encode, capture: self.goliveMaxQuality.capture };
            const _Math = Math;
            const _Math2 = Math;
            obj.bitrateMin = Math.max(Math.ceil(scaleLinearlyResult), self.options.videoBitrateFloor);
            const _Math3 = Math;
            const _Math4 = Math;
            obj.bitrateMax = Math.max(Math.ceil(self.scaleLinearly(arg1, self.goliveMaxQuality.encode.pixelCount, self.goliveMaxQuality.bitrateMax)), bound);
            let bound1;
            if (null != scaleLinearlyResult2) {
              const _Math5 = Math;
              const _Math6 = Math;
              bound1 = Math.max(Math.ceil(scaleLinearlyResult2), self.options.videoBitrateFloor);
            }
            obj.bitrateTarget = bound1;
            obj.localWant = localWant;
            const prototype = tmp3.prototype;
            tmp3 = new tmp3(obj);
            return tmp3;
          }
        }
      }
      return self.goliveMaxQuality;
    }
  };
  items[7] = {
    key: "getDefaultGoliveQuality",
    value() {
      let obj = { capture: obj, encode: obj, bitrateMin: this.options.desktopBitrate.min, bitrateMax: this.options.desktopBitrate.max, bitrateTarget: this.options.desktopBitrate.target };
      obj = { aze: -1455969993, azj: 43945025, framerate: closure_6 };
      obj = { 965001003: -1455969993, -1446364470: 43945025, -498144293: -1506586368, -1782280419: 7793, framerate: closure_6 };
      return new closure_8(obj);
    }
  };
  return importDefaultResult(VideoQualityManager, items);
}();
