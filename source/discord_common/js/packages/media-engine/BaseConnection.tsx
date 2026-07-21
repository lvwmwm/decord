// Module ID: 4276
// Function ID: 37408
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 4276 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
({ ConnectionStates: closure_9, DEFAULT_VOICE_BITRATE: closure_10, MediaTypes: closure_11, ResolutionTypes: closure_12, MediaEngineContextTypes: closure_13, VIDEO_QUALITY_FRAMERATE: closure_14, SIMULCAST_HQ_QUALITY: closure_15 } = arg1(dependencyMap[6]));
let closure_16 = 0;
const tmp2 = arg1(dependencyMap[6]);
const tmp3 = (arg0) => {
  class BaseConnection {
    constructor(arg0, arg1) {
      self = this;
      tmp = closure_4(this, BaseConnection);
      obj = closure_7(BaseConnection);
      tmp2 = closure_6;
      if (closure_17()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_7;
        constructResult = Reflect.construct(obj, [], closure_7(self).constructor);
      } else {
        constructResult = obj.apply(self, undefined);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp7 = +closure_16;
      closure_16 = tmp7 + 1;
      tmp2Result.mediaEngineConnectionId = `WebRTC-${tmp7}`;
      tmp2Result.destroyed = false;
      tmp2Result.audioSSRC = 0;
      tmp2Result.videoSSRC = 0;
      tmp2Result.selfDeaf = false;
      tmp2Result.selfMute = false;
      tmp2Result.localMutes = {};
      tmp2Result.disabledLocalVideos = {};
      tmp2Result.localVolumes = {};
      tmp2Result.isActiveOutputSinksEnabled = false;
      map = new Map();
      tmp2Result.activeOutputSinks = map;
      tmp2Result.videoSupported = false;
      tmp2Result.useElectronVideo = false;
      tmp2Result.spatialAudioEnabled = false;
      tmp2Result.voiceBitrate = closure_10;
      tmp2Result.remoteSinkWantsMaxFramerate = closure_14;
      set = new Set();
      tmp2Result.wantsPriority = set;
      tmp2Result.localSpeakingFlags = {};
      tmp2Result.videoReady = false;
      tmp2Result.videoStreamParameters = [];
      tmp2Result.remoteVideoSinkWants = { any: 100 };
      tmp2Result.localVideoSinkWants = { any: 100 };
      tmp2Result.connectionState = closure_9.CONNECTING;
      tmp2Result.onDesktopEncodingOptionsSet = () => {

      };
      set1 = new Set();
      tmp2Result.experimentFlags = set1;
      tmp2Result.calcMaxBitrateFunc = () => null;
      tmp2Result.context = arg0;
      tmp2Result.userId = arg1;
      videoQualityManager = new f37446(closure_2[7]).VideoQualityManager(arg0, tmp2Result);
      tmp2Result.videoQualityManager = videoQualityManager;
      _default = new f37446(closure_2[8]).default(tmp2Result, tmp2Result.videoQualityManager);
      tmp2Result.framerateReducer = _default;
      return tmp2Result;
    }
  }
  const importDefault = BaseConnection;
  callback3(BaseConnection, arg0);
  let obj = {
    key: "destroy",
    value() {
      this.destroyed = true;
      const framerateReducer = this.framerateReducer;
      framerateReducer.destroy();
      this.setConnectionState(constants.DISCONNECTED);
      this.emit(callback(closure_2[9]).BaseConnectionEvent.Destroy, this);
      this.removeAllListeners();
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "getLocalMute",
    value(arg0) {
      return this.localMutes[arg0] || false;
    }
  };
  items[1] = obj;
  obj = {
    key: "getLocalVideoDisabled",
    value(arg0) {
      const tmp = this.disabledLocalVideos[arg0];
      return null != tmp && tmp;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "setLocalVideoDisabled",
    value(arg0, arg1) {
      this.disabledLocalVideos[arg0] = arg1;
      this.emit(callback(closure_2[9]).BaseConnectionEvent.LocalVideoDisabled, arg0, arg1);
    }
  };
  items[4] = {
    key: "getHasActiveVideoOutputSink",
    value(arg0) {
      const activeOutputSinks = this.activeOutputSinks;
      let hasItem = activeOutputSinks.has(arg0);
      if (hasItem) {
        const activeOutputSinks2 = this.activeOutputSinks;
        hasItem = activeOutputSinks2.get(arg0).size > 0;
      }
      return hasItem;
    }
  };
  items[5] = {
    key: "setHasActiveVideoOutputSink",
    value(arg0, arg1, arg2) {
      const self = this;
      const activeOutputSinks = this.activeOutputSinks;
      const hasActiveVideoOutputSink = this.getHasActiveVideoOutputSink(arg0);
      let set = activeOutputSinks.get(arg0);
      if (null == set) {
        const _Set = Set;
        set = new Set();
      }
      if (arg1) {
        set.add(arg2);
      } else {
        set.delete(arg2);
      }
      const activeOutputSinks2 = self.activeOutputSinks;
      const result = activeOutputSinks2.set(arg0, set);
      const hasActiveVideoOutputSink1 = self.getHasActiveVideoOutputSink(arg0);
      self.isActiveOutputSinksEnabled = true;
      if (hasActiveVideoOutputSink !== hasActiveVideoOutputSink1) {
        self.emit(callback(closure_2[9]).BaseConnectionEvent.ActiveSinksChange, arg0, hasActiveVideoOutputSink1);
      }
    }
  };
  items[6] = {
    key: "getActiveOutputSinkTrackingEnabled",
    value() {
      return this.isActiveOutputSinksEnabled;
    }
  };
  items[7] = {
    key: "setUseElectronVideo",
    value(useElectronVideo) {
      this.useElectronVideo = useElectronVideo;
    }
  };
  items[8] = {
    key: "setClipRecordUser",
    value() {

    }
  };
  items[9] = {
    key: "setViewerSideClip",
    value() {

    }
  };
  items[10] = {
    key: "setRemoteAudioHistory",
    value() {

    }
  };
  items[11] = {
    key: "setClipsKeyFrameInterval",
    value() {

    }
  };
  items[12] = {
    key: "setQualityDecoupling",
    value() {

    }
  };
  items[13] = {
    key: "presentDesktopSourcePicker",
    value() {

    }
  };
  items[14] = {
    key: "getStreamParameters",
    value() {
      return BaseConnection(closure_2[10])(this.videoStreamParameters);
    }
  };
  items[15] = {
    key: "setExperimentFlag",
    value(arg0, arg1) {
      const experimentFlags = this.experimentFlags;
      if (arg1) {
        experimentFlags.add(arg0);
      } else {
        experimentFlags.delete(arg0);
      }
    }
  };
  items[16] = {
    key: "setConnectionState",
    value(connectionState) {
      const logger = this.logger;
      logger.info("Connection state change: " + this.connectionState + " => " + connectionState);
      this.connectionState = connectionState;
      this.emit(callback(closure_2[9]).BaseConnectionEvent.ConnectionStateChange, this.connectionState);
    }
  };
  items[17] = {
    key: "updateVideoQuality",
    value(arg0) {
      let bitrateTarget;
      let bitrateTarget2;
      let constraints;
      let constraints2;
      let quality;
      let quality2;
      const self = this;
      const videoStreamParameters = this.videoStreamParameters;
      let num = videoStreamParameters.findIndex((quality) => 100 === quality.quality);
      if (-1 === num) {
        num = 0;
      }
      const result = self.applyQualityConstraints({}, self.videoStreamParameters[num].ssrc);
      ({ quality, constraints } = result);
      const tmp2 = BaseConnection(closure_2[10])(self.videoStreamParameters);
      if (null != quality) {
        ({ bitrateMax: tmp2[num].maxBitrate, bitrateMin: tmp2[num].minBitrate, bitrateTarget } = quality);
        let num2 = 0;
        if (null != bitrateTarget) {
          num2 = bitrateTarget;
        }
        tmp2[num].targetBitrate = num2;
        if (null != quality.encode) {
          tmp2[num].maxPixelCount = quality.encode.pixelCount;
          tmp2[num].maxFrameRate = quality.encode.framerate;
        }
      }
      self.videoStreamParameters = tmp2;
      let tmp3 = quality;
      let tmp4 = constraints;
      let num3 = 0;
      let tmp6 = quality;
      let tmp7 = constraints;
      if (0 < self.videoStreamParameters.length) {
        do {
          let tmp8 = tmp3;
          let tmp9 = tmp4;
          let tmp10 = tmp5;
          if (num3 !== num) {
            let result1 = self.applyQualityConstraints({}, self.videoStreamParameters[num3].ssrc);
            ({ quality: quality2, constraints: constraints2 } = result1);
            if (null != quality2) {
              ({ bitrateMax: self.videoStreamParameters[num3].maxBitrate, bitrateMin: self.videoStreamParameters[num3].minBitrate, bitrateTarget: bitrateTarget2 } = quality2);
              let num4 = 0;
              if (null != bitrateTarget2) {
                num4 = bitrateTarget2;
              }
              self.videoStreamParameters[num3].targetBitrate = num4;
              let tmp5 = bitrateTarget2;
              if (null != quality2.encode) {
                self.videoStreamParameters[num3].maxPixelCount = quality2.encode.pixelCount;
                self.videoStreamParameters[num3].maxFrameRate = quality2.encode.framerate;
                tmp5 = bitrateTarget2;
              }
            }
            tmp8 = tmp3;
            tmp9 = tmp4;
            tmp10 = tmp5;
            let tmp11 = quality2;
            let tmp12 = constraints2;
            if (100 === self.videoStreamParameters[num3].quality) {
              tmp8 = quality2;
              tmp9 = constraints2;
              tmp10 = tmp5;
              let tmp13 = quality2;
              let tmp14 = constraints2;
            }
          }
          num3 = num3 + 1;
          tmp3 = tmp8;
          tmp4 = tmp9;
          tmp5 = tmp10;
          tmp6 = tmp8;
          tmp7 = tmp9;
        } while (num3 < self.videoStreamParameters.length);
      }
      tmp7.streamParameters = BaseConnection(closure_2[10])(self.videoStreamParameters);
      const prop = self.videoStreamParameters;
      const items = [
        ...prop.map((maxPixelCount) => {
          maxPixelCount = maxPixelCount.maxPixelCount;
          let num = 0;
          if (null != maxPixelCount) {
            num = maxPixelCount;
          }
          return num;
        })
      ];
      tmp7.remoteSinkWantsPixelCount = Math.max.apply(items);
      if (null != arg0) {
        let obj = BaseConnection(closure_2[11])(tmp7, arg0);
      } else {
        obj = {};
        const merged = Object.assign(tmp7);
      }
      const logger = self.logger;
      logger.verbose("updateVideoQuality: " + JSON.stringify(obj));
      const result2 = self.updateVideoQualityCore(obj, tmp6);
    }
  };
  items[18] = {
    key: "applyVideoQualityMode",
    value(arg0) {
      const self = this;
      if (this.context === constants2.DEFAULT) {
        const videoQualityManager = self.videoQualityManager;
        videoQualityManager.setQualityOverwrite(callback(closure_2[7]).VIDEO_QUALITY_MODES_TO_OVERWRITES[arg0]);
        self.updateVideoQuality();
      }
    }
  };
  items[19] = {
    key: "overwriteQualityForTesting",
    value(arg0) {
      const videoQualityManager = this.videoQualityManager;
      videoQualityManager.setQualityOverwrite(arg0);
      this.updateVideoQuality();
    }
  };
  items[20] = {
    key: "applyQualityConstraints",
    value() {
      let obj = arg0;
      if (arg0 === undefined) {
        obj = {};
      }
      const videoQualityManager = this.videoQualityManager;
      return videoQualityManager.applyQualityConstraints(obj, arg1);
    }
  };
  items[21] = {
    key: "initializeStreamParameters",
    value(arr) {
      let closure_0 = this;
      const found = arr.filter((type) => {
        let tmp = type.type === constants.VIDEO;
        if (!tmp) {
          tmp = type.type === constants.SCREEN;
        }
        if (tmp) {
          tmp = "string" === typeof type.rid;
        }
        return tmp;
      });
      this.videoStreamParameters = found.map((ssrc) => {
        const videoQualityManager = self.videoQualityManager;
        let quality = videoQualityManager.getQuality(ssrc.ssrc);
        let obj = { type: ssrc.type, active: ssrc.active, rid: ssrc.rid, ssrc: ssrc.ssrc, rtxSsrc: ssrc.rtxSsrc, quality: ssrc.quality };
        quality = ssrc.quality;
        let num = 100;
        if (null != quality) {
          num = quality;
        }
        if (num < 100) {
          let bitrateMax = quality.bitrateMax / 4;
        } else {
          bitrateMax = quality.bitrateMax;
        }
        obj.maxBitrate = bitrateMax;
        const capture = quality.capture;
        let framerate;
        if (null != capture) {
          framerate = capture.framerate;
        }
        obj.maxFrameRate = framerate;
        obj = { type: constants2.FIXED };
        const capture2 = quality.capture;
        let width;
        if (null != capture2) {
          width = capture2.width;
        }
        obj.width = width;
        const capture3 = quality.capture;
        let height;
        if (null != capture3) {
          height = capture3.height;
        }
        obj.height = height;
        obj.maxResolution = obj;
        return obj;
      });
    }
  };
  items[22] = {
    key: "getLocalWant",
    value(arg0) {
      let tmp = arg0;
      const self = this;
      let closure_0 = arg0;
      const videoStreamParameters = this.videoStreamParameters;
      let someResult = videoStreamParameters.some((ssrc) => {
        let tmp = ssrc.ssrc === ssrc;
        if (tmp) {
          tmp = ssrc.quality === closure_15;
        }
        return tmp;
      });
      if (!someResult) {
        someResult = undefined === tmp;
      }
      if (null == tmp) {
        const first = self.videoStreamParameters[0];
        let ssrc;
        if (null != first) {
          ssrc = first.ssrc;
        }
        tmp = ssrc;
      }
      let num2 = 0;
      if (null != tmp) {
        num2 = tmp;
      }
      if (null != self.remoteVideoSinkWants[num2]) {
        if (tmp6 > 0) {
          return tmp6;
        }
      }
      let any = self.remoteVideoSinkWants.any;
      if (null != any) {
        return any;
      }
      let num3 = 0;
      if (self.context === constants2.DEFAULT || someResult) {
        num3 = 100;
      }
      any = num3;
    }
  };
  items[23] = {
    key: "getRemoteVideoSinkWants",
    value(arg0) {
      return this.remoteVideoSinkWants[arg0];
    }
  };
  items[24] = {
    key: "getRemoteVideoSinkPixelCount",
    value(arg0) {
      let num = 0;
      if (undefined !== arg0) {
        const self = this;
        const pixelCounts = this.remoteVideoSinkWants.pixelCounts;
        let tmp2;
        if (null != pixelCounts) {
          tmp2 = pixelCounts[arg0];
        }
        let num2 = 0;
        if (null != tmp2) {
          num2 = tmp2;
        }
        num = num2;
      }
      return num;
    }
  };
  const obj23 = { key: "emitStats" };
  let closure_0 = callback(async function() {
    const self = this;
    const tmp = yield self.getStats();
    if (null != tmp) {
      self.emit(callback(closure_2[9]).BaseConnectionEvent.Stats, tmp);
    }
    return tmp;
  });
  obj23.value = function emitStats() {
    return callback(...arguments);
  };
  items[25] = obj23;
  items[26] = {
    key: "getSpatialAudioEnabled",
    value() {
      return this.context === constants2.DEFAULT && this.spatialAudioEnabled;
    }
  };
  items[27] = {
    key: "setSpatialAudioEnabled",
    value(spatialAudioEnabled) {
      this.spatialAudioEnabled = spatialAudioEnabled;
    }
  };
  items[28] = {
    key: "setCalcMaxBitrateFunc",
    value(calcMaxBitrateFunc) {
      this.calcMaxBitrateFunc = calcMaxBitrateFunc;
    }
  };
  return callback2(BaseConnection, items);
}(importDefault(dependencyMap[12]));
const result = arg1(dependencyMap[13]).fileFinishedImporting("../discord_common/js/packages/media-engine/BaseConnection.tsx");

export default tmp3;
export const BaseConnectionEvent = arg1(dependencyMap[9]).BaseConnectionEvent;
