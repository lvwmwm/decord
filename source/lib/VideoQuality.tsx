// Module ID: 12631
// Function ID: 97165
// Name: _createForOfIteratorHelperLoose
// Dependencies: []

// Module 12631 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function round(arg0) {
  let num = arg1;
  if (arg1 === undefined) {
    num = 0;
  }
  if (null != arg0) {
    const _Math = Math;
    num = Math.round(arg0);
  }
  return num;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const obj = { FpsUpdate: "fps-update" };
const tmp2 = (arg0) => {
  class VideoQuality {
    constructor(arg0) {
      TimeStampProducer = arg1;
      self = this;
      if (arg1 === undefined) {
        tmp = VideoQuality;
        tmp2 = closure_2;
        num = 5;
        TimeStampProducer = VideoQuality(closure_2[5]).TimeStampProducer;
      }
      VideoQuality = undefined;
      tmp3 = closure_3(self, VideoQuality);
      obj = closure_6(VideoQuality);
      tmp4 = closure_5;
      if (closure_11()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_6;
        constructResult = Reflect.construct(obj, [], closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, undefined);
      }
      tmp4Result = tmp4(self, constructResult);
      VideoQuality = tmp4Result;
      tmp4Result.connection = arg0;
      tmp4Result.timestampProducer = TimeStampProducer;
      tmp9 = closure_1(closure_2[6]);
      tmp9 = new tmp9();
      tmp4Result.networkQuality = tmp9;
      tmp4Result.pausedCount = 0;
      tmp4Result.simulcastQualityChanges = 0;
      tmp4Result.cameraToggles = 0;
      tmp4Result.callUserIdsCount = 0;
      tmp4Result.numWindowOcclusionChanges = 0;
      tmp4Result.outboundStats = {};
      tmp4Result.inboundStats = {};
      tmp4Result.symmetricCodecUpdates = 0;
      tmp4Result.asymmetricCodecUpdates = 0;
      set = new Set();
      tmp4Result.statCollectionPausedUsers = set;
      tmp4Result.sampleStats = (arg0) => {
        if (null != arg0) {
          const timestampProducer = tmp4Result.timestampProducer;
          const nowResult = timestampProducer.now();
          const networkQuality = tmp4Result.networkQuality;
          const result = networkQuality.incrementNetworkStats(nowResult);
          const result1 = tmp4Result.updateSystemResourceStats();
          const result2 = tmp4Result.updateVideoEffectStats(arg0);
          if (null != arg0) {
            const connection = tmp4Result.connection;
            tmp4Result.receivedStats(nowResult, arg0, connection.getStreamParameters());
          }
        }
      };
      durationEnabled = new VideoQuality(closure_2[5]).DurationEnabled(false, TimeStampProducer);
      tmp4Result.paused = durationEnabled;
      durationEnabled1 = new VideoQuality(closure_2[5]).DurationEnabled(false, TimeStampProducer);
      tmp4Result.zeroReceivers = durationEnabled1;
      durationEnabled2 = new VideoQuality(closure_2[5]).DurationEnabled(false, TimeStampProducer);
      tmp4Result.videoStopped = durationEnabled2;
      durationEnabled3 = new VideoQuality(closure_2[5]).DurationEnabled(false, TimeStampProducer);
      tmp4Result.videoEffectDuration = durationEnabled3;
      durationEnabled4 = new VideoQuality(closure_2[5]).DurationEnabled(false, TimeStampProducer);
      tmp4Result.hqSimulcastStreamEncoded = durationEnabled4;
      durationEnabled5 = new VideoQuality(closure_2[5]).DurationEnabled(false, TimeStampProducer);
      tmp4Result.lqSimulcastStreamEncoded = durationEnabled5;
      durationEnabled6 = new VideoQuality(closure_2[5]).DurationEnabled(false, TimeStampProducer);
      tmp4Result.bothSimulcastStreamsEncoded = durationEnabled6;
      durationEnabled7 = new VideoQuality(closure_2[5]).DurationEnabled(false, TimeStampProducer);
      tmp4Result.hqSimulcastStreamWatched = durationEnabled7;
      durationEnabled8 = new VideoQuality(closure_2[5]).DurationEnabled(false, TimeStampProducer);
      tmp4Result.lqSimulcastStreamWatched = durationEnabled8;
      durationEnabled9 = new VideoQuality(closure_2[5]).DurationEnabled(false, TimeStampProducer);
      tmp4Result.hqSimulcastStreamEligible = durationEnabled9;
      durationEnabled10 = new VideoQuality(closure_2[5]).DurationEnabled(false, TimeStampProducer);
      tmp4Result.lqSimulcastStreamEligible = durationEnabled10;
      durationEnabled11 = new VideoQuality(closure_2[5]).DurationEnabled(false, TimeStampProducer);
      tmp4Result.windowOccluded = durationEnabled11;
      durationEnabled12 = new VideoQuality(closure_2[5]).DurationEnabled(false, TimeStampProducer);
      tmp4Result.videoStoppedForOcclusion = durationEnabled12;
      durationEnabled13 = new VideoQuality(closure_2[5]).DurationEnabled(false, TimeStampProducer);
      tmp4Result.bandwidthLimitedFramerate = durationEnabled13;
      durationEnabled14 = new VideoQuality(closure_2[5]).DurationEnabled(false, TimeStampProducer);
      tmp4Result.bandwidthLimitedResolution = durationEnabled14;
      durationEnabled15 = new VideoQuality(closure_2[5]).DurationEnabled(false, TimeStampProducer);
      tmp4Result.cameraDuration = durationEnabled15;
      durationEnabled16 = new VideoQuality(closure_2[5]).DurationEnabled(false, TimeStampProducer);
      tmp4Result.cameraOpportunityDuration = durationEnabled16;
      durationEnabled17 = new VideoQuality(closure_2[5]).DurationEnabled(false, TimeStampProducer);
      tmp4Result.cameraSendDuration = durationEnabled17;
      histogram = new VideoQuality(closure_2[7]).Histogram();
      tmp4Result.videoEntropy = histogram;
      return tmp4Result;
    }
  }
  const arg1 = VideoQuality;
  callback2(VideoQuality, arg0);
  let obj = {
    key: "addUserToStatsCollectionPausedSet",
    value(arg0) {
      const statCollectionPausedUsers = this.statCollectionPausedUsers;
      statCollectionPausedUsers.add(arg0);
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "removeUserFromStatsCollectionPausedSet",
    value(arg0) {
      const statCollectionPausedUsers = this.statCollectionPausedUsers;
      statCollectionPausedUsers.delete(arg0);
    }
  };
  items[1] = obj;
  obj = {
    key: "start",
    value() {
      const timestampProducer = this.timestampProducer;
      this.streamStart = timestampProducer.now();
      const connection = this.connection;
      connection.on(VideoQuality(closure_2[8]).BaseConnectionEvent.Stats, this.sampleStats);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "setOutboundSsrc",
    value(arg0) {
      const self = this;
      if (null == this.outboundStats[arg0]) {
        const OutboundStats = VideoQuality(closure_2[9]).OutboundStats;
        const prototype = OutboundStats.prototype;
        const outboundStats = new OutboundStats(self.timestampProducer);
        self.outboundStats[arg0] = outboundStats;
      }
    }
  };
  items[4] = {
    key: "getOrCreateInboundStats",
    value(arg0) {
      const self = this;
      if (null == this.inboundStats[arg0]) {
        const InboundStats = VideoQuality(closure_2[9]).InboundStats;
        const prototype = InboundStats.prototype;
        const inboundStats = new InboundStats(self.timestampProducer);
        self.inboundStats[arg0] = inboundStats;
      }
      return self.inboundStats[arg0];
    }
  };
  items[5] = {
    key: "updateCallUserIdsCount",
    value(callUserIdsCount) {
      this.callUserIdsCount = callUserIdsCount;
    }
  };
  items[6] = {
    key: "setInboundUser",
    value(arg0, arg1) {
      const orCreateInboundStats = this.getOrCreateInboundStats(arg0);
      orCreateInboundStats.setVideoStopped(0 === arg1, VideoQuality(closure_2[9]).VideoStoppedReasons.SenderStopped);
    }
  };
  items[7] = {
    key: "setUserVideoDisabled",
    value(arg0, arg1) {
      const orCreateInboundStats = this.getOrCreateInboundStats(arg0);
      orCreateInboundStats.setVideoStopped(arg1, VideoQuality(closure_2[9]).VideoStoppedReasons.ClientSideDisableVideo);
      let tmp2 = !arg1;
      if (tmp2) {
        tmp2 = orCreateInboundStats.statsWindow.length > 0;
      }
      if (tmp2) {
        tmp2 = 0 === orCreateInboundStats.statsWindow[0].packets;
      }
      if (tmp2) {
        const timestampProducer = this.timestampProducer;
        orCreateInboundStats.startTime = timestampProducer.now();
      }
    }
  };
  items[8] = {
    key: "setOcclusionIncomingVideoEnabled",
    value(arg0) {
      this.videoStoppedForOcclusion.value = !arg0;
    }
  };
  items[9] = {
    key: "setWindowOcclusionState",
    value(value) {
      const self = this;
      if (value !== this.windowOccluded.value) {
        self.numWindowOcclusionChanges = self.numWindowOcclusionChanges + 1;
      }
      self.windowOccluded.value = value;
    }
  };
  items[10] = {
    key: "pause",
    value() {
      const self = this;
      if (!this.paused.value) {
        self.pausedCount = self.pausedCount + 1;
      }
      const item = callback(closure_2[10]).forEach(self.outboundStats, (arg0) => {
        arg0.statsWindow = [];
      });
      const arr = callback(closure_2[10]);
      const item1 = callback(closure_2[10]).forEach(self.inboundStats, (arg0) => {
        arg0.statsWindow = [];
      });
      self.updateSendState({ paused: true });
    }
  };
  items[11] = {
    key: "resume",
    value() {
      this.updateSendState({ paused: false });
    }
  };
  items[12] = {
    key: "stop",
    value() {
      const connection = this.connection;
      connection.off(VideoQuality(closure_2[8]).BaseConnectionEvent.Stats, this.sampleStats);
      const timestampProducer = this.timestampProducer;
      this.streamEnd = timestampProducer.now();
      this.removeAllListeners();
    }
  };
  items[13] = {
    key: "setViewedSimulcastQuality",
    value(value) {
      const self = this;
      let tmp = value !== this.hqSimulcastStreamWatched.value;
      if (tmp) {
        const hqSimulcastStreamWatched = self.hqSimulcastStreamWatched;
        let tmp2 = hqSimulcastStreamWatched.totalDuration() > 0;
        if (!tmp2) {
          const lqSimulcastStreamWatched = self.lqSimulcastStreamWatched;
          tmp2 = lqSimulcastStreamWatched.totalDuration() > 0;
        }
        tmp = tmp2;
      }
      if (tmp) {
        self.simulcastQualityChanges = self.simulcastQualityChanges + 1;
      }
      self.hqSimulcastStreamWatched.value = value;
      self.lqSimulcastStreamWatched.value = !value;
    }
  };
  items[14] = {
    key: "setEligibleSimulcastQuality",
    value(value) {
      this.hqSimulcastStreamEligible.value = value;
      this.lqSimulcastStreamEligible.value = !value;
    }
  };
  items[15] = {
    key: "getNetworkStats",
    value() {
      const networkQuality = this.networkQuality;
      return networkQuality.getStats();
    }
  };
  items[16] = {
    key: "getEncoderUsageStats",
    value() {
      const self = this;
      const map = new Map();
      for (const key10011 in this.outboundStats) {
        let tmp5 = key10011;
        let _Map = Map;
        let tmp6 = new.target;
        let tmp7 = new.target;
        let map1 = new Map();
        let tmp8 = map1;
        let tmp9 = closure_9;
        let obj3 = self.outboundStats[key10011];
        let tmp10 = closure_9(obj3.getCodecsUsed());
        let iter2 = tmp10();
        if (iter2.done) {
          continue;
        } else {
          let str = iter2.value;
          let formatted = str.toUpperCase();
          let tmp2 = closure_12;
          let result = map1.set(formatted, closure_12(self.outboundStats[key10011].codecBuckets[formatted]));
          let _parseInt = parseInt;
          let result1 = map.set(parseInt(key10011), map1);
          let iter = tmp10();
          iter2 = iter;
        }
        continue;
      }
      return map;
    }
  };
  items[17] = {
    key: "getDecoderUsageStats",
    value() {
      const self = this;
      const map = new Map();
      for (const key10011 in this.inboundStats) {
        let tmp5 = key10011;
        let _Map = Map;
        let tmp6 = new.target;
        let tmp7 = new.target;
        let map1 = new Map();
        let tmp8 = map1;
        let tmp9 = closure_9;
        let obj3 = self.inboundStats[key10011];
        let tmp10 = closure_9(obj3.getCodecsUsed());
        let iter2 = tmp10();
        if (iter2.done) {
          continue;
        } else {
          let str = iter2.value;
          let formatted = str.toUpperCase();
          let tmp2 = closure_12;
          let result = map1.set(formatted, closure_12(self.inboundStats[key10011].codecBuckets[formatted]));
          let result1 = map.set(key10011, map1);
          let iter = tmp10();
          iter2 = iter;
        }
        continue;
      }
      return map;
    }
  };
  items[18] = {
    key: "getCodecUsageStats",
    value(arg0, arg1) {
      const self = this;
      const tmp = this.asymmetricCodecUpdates > this.symmetricCodecUpdates;
      let map = new Map();
      if ("sender" !== arg0) {
        if ("streamer" !== arg0) {
          const decoderUsageStats = self.getDecoderUsageStats();
          let value = map;
          if (decoderUsageStats.has(arg1)) {
            value = decoderUsageStats.get(arg1);
          }
          let obj = { codec_asymmetric_session: tmp };
          value = value.get(VideoQuality(closure_2[9]).CodecTypes.H264);
          let num2 = 0;
          if (null != value) {
            num2 = value;
          }
          obj.codec_h264_decode_duration_sec = num2;
          const value1 = value.get(VideoQuality(closure_2[9]).CodecTypes.H265);
          let num3 = 0;
          if (null != value1) {
            num3 = value1;
          }
          obj.codec_h265_decode_duration_sec = num3;
          const value2 = value.get(VideoQuality(closure_2[9]).CodecTypes.VP8);
          let num4 = 0;
          if (null != value2) {
            num4 = value2;
          }
          obj.codec_vp8_decode_duration_sec = num4;
          const value3 = value.get(VideoQuality(closure_2[9]).CodecTypes.VP9);
          let num5 = 0;
          if (null != value3) {
            num5 = value3;
          }
          obj.codec_vp9_decode_duration_sec = num5;
          const value4 = value.get(VideoQuality(closure_2[9]).CodecTypes.AV1);
          let num6 = 0;
          if (null != value4) {
            num6 = value4;
          }
          obj.codec_av1_decode_duration_sec = num6;
          const value5 = value.get(VideoQuality(closure_2[9]).CodecTypes.UNKNOWN);
          let num7 = 0;
          if (null != value5) {
            num7 = value5;
          }
          obj.codec_unknown_decode_duration_sec = num7;
          return obj;
        }
      }
      const encoderUsageStats = self.getEncoderUsageStats();
      if (encoderUsageStats.size > 0) {
        const items = [];
        HermesBuiltin.arraySpread(encoderUsageStats.keys(), 0);
        map = encoderUsageStats.get(items.sort()[0]);
      }
      obj = { codec_asymmetric_session: tmp };
      const value6 = map.get(VideoQuality(closure_2[9]).CodecTypes.H264);
      let num9 = 0;
      if (null != value6) {
        num9 = value6;
      }
      obj.codec_h264_encode_duration_sec = num9;
      const value7 = map.get(VideoQuality(closure_2[9]).CodecTypes.H265);
      let num10 = 0;
      if (null != value7) {
        num10 = value7;
      }
      obj.codec_h265_encode_duration_sec = num10;
      const value8 = map.get(VideoQuality(closure_2[9]).CodecTypes.VP8);
      let num11 = 0;
      if (null != value8) {
        num11 = value8;
      }
      obj.codec_vp8_encode_duration_sec = num11;
      const value9 = map.get(VideoQuality(closure_2[9]).CodecTypes.VP9);
      let num12 = 0;
      if (null != value9) {
        num12 = value9;
      }
      obj.codec_vp9_encode_duration_sec = num12;
      const value10 = map.get(VideoQuality(closure_2[9]).CodecTypes.AV1);
      let num13 = 0;
      if (null != value10) {
        num13 = value10;
      }
      obj.codec_av1_encode_duration_sec = num13;
      const value11 = map.get(VideoQuality(closure_2[9]).CodecTypes.UNKNOWN);
      let num14 = 0;
      if (null != value11) {
        num14 = value11;
      }
      obj.codec_unknown_encode_duration_sec = num14;
      return obj;
    }
  };
  items[19] = {
    key: "getCameraDurationStats",
    value() {
      const cameraDuration = this.cameraDuration;
      const cameraOpportunityDuration = this.cameraOpportunityDuration;
      const cameraSendDuration = this.cameraSendDuration;
      return { camera_enabled_duration: Math.round(cameraDuration.totalDurationSeconds()), camera_send_opportunity_duration: Math.round(cameraOpportunityDuration.totalDurationSeconds()), camera_send_duration: Math.round(cameraSendDuration.totalDurationSeconds()), num_camera_on_toggles: this.cameraToggles };
    }
  };
  items[20] = {
    key: "getOutboundStats",
    value() {
      const VideoQuality = this;
      const items = [];
      const item = items(closure_2[10]).forEach(this.outboundStats, (vmafHistogram) => {
        const self = arg1;
        const connection = self.connection;
        let streamParameters;
        if (null != connection) {
          streamParameters = connection.getStreamParameters();
        }
        if (streamParameters.length > 1) {
          const item = streamParameters.forEach((ssrc) => {
            if (parseInt(arg1) === ssrc.ssrc) {
              const quality = ssrc.quality;
              let num = 50;
              if (null != quality) {
                num = quality;
              }
            }
          });
        }
        const items = ["locomotive", "bus", "car", "tram", "trolley", "trolleybus"];
        const items1 = ["google.protobuf.Timestamp", "google.protobuf.DoubleValue", "google.protobuf.FloatValue", "arrows_clockwise", -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003065641165576845, 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000188703258491505, -0.000000000000000000000000000000000000000000000000032412492445407077];
        vmafHistogram = vmafHistogram.vmafHistogram;
        const report = vmafHistogram.getReport(items);
        const psnrHistogram = vmafHistogram.psnrHistogram;
        const report1 = psnrHistogram.getReport(items);
        const targetBitrateHistogram = vmafHistogram.targetBitrateHistogram;
        const report2 = targetBitrateHistogram.getReport(items1);
        const outboundBandwidthSurplus = vmafHistogram.outboundBandwidthSurplus;
        const report3 = outboundBandwidthSurplus.getReport(items1);
        const videoEntropy = self.videoEntropy;
        const report4 = videoEntropy.getReport(items1);
        const result = vmafHistogram.aggregationDuration / 1000;
        let obj = self(closure_2[11]);
        if (!obj.isWeb()) {
          if (!obj2.isIOS()) {
            if (!obj3.isAndroid()) {
              let framesCodec = vmafHistogram.aggregatedProperties.screenshareFramesUnique;
            }
            obj = {};
            const merged = Object.assign(self.getStats(vmafHistogram));
            let num2 = 0;
            if (result > 0) {
              const targetFrames = vmafHistogram.targetFrames;
              let num3 = 0;
              if (null != targetFrames) {
                num3 = targetFrames;
              }
              num2 = Math.round(num3 / result);
            }
            obj["target_fps"] = num2;
            const connection2 = self.connection;
            let context;
            if (null != connection2) {
              context = connection2.context;
            }
            let result1 = null;
            if (context === self(closure_2[8]).MediaEngineContextTypes.STREAM) {
              result1 = null;
              if (tmp17) {
                result1 = framesCodec / result;
              }
            }
            obj["unique_captured_fps"] = result1;
            let num5 = 0;
            if (result > 0) {
              const targetBytesNetwork = vmafHistogram.targetBytesNetwork;
              let num6 = 0;
              if (null != targetBytesNetwork) {
                num6 = targetBytesNetwork;
              }
              num5 = Math.round(8 * num6 / result);
            }
            obj["target_bitrate_network"] = num5;
            let tmp25 = null;
            if (report2.count > 0) {
              tmp25 = report2.percentiles[1];
            }
            obj["target_bitrate_network_percentile1"] = tmp25;
            let tmp26 = null;
            if (report2.count > 0) {
              tmp26 = report2.percentiles[5];
            }
            obj["target_bitrate_network_percentile5"] = tmp26;
            let tmp27 = null;
            if (report2.count > 0) {
              tmp27 = report2.percentiles[10];
            }
            obj["target_bitrate_network_percentile10"] = tmp27;
            let tmp28 = null;
            if (report2.count > 0) {
              tmp28 = report2.percentiles[25];
            }
            obj["target_bitrate_network_percentile25"] = tmp28;
            let tmp29 = null;
            if (report2.count > 0) {
              tmp29 = report2.percentiles[50];
            }
            obj["target_bitrate_network_percentile50"] = tmp29;
            let tmp30 = null;
            if (report2.count > 0) {
              tmp30 = report2.percentiles[75];
            }
            obj["target_bitrate_network_percentile75"] = tmp30;
            let tmp31 = null;
            if (report2.count > 0) {
              tmp31 = report2.percentiles[99];
            }
            obj["target_bitrate_network_percentile99"] = tmp31;
            let num13 = 0;
            if (result > 0) {
              const targetBytesMax = vmafHistogram.targetBytesMax;
              let num14 = 0;
              if (null != targetBytesMax) {
                num14 = targetBytesMax;
              }
              num13 = Math.round(8 * num14 / result);
            }
            obj["target_bitrate_max"] = num13;
            let num15 = 0;
            if (result > 0) {
              const outboundBytesAvailable = vmafHistogram.outboundBytesAvailable;
              let num16 = 0;
              if (null != outboundBytesAvailable) {
                num16 = outboundBytesAvailable;
              }
              num15 = Math.round(8 * num16 / result);
            }
            obj["outbound_bandwidth_estimate"] = num15;
            let tmp34 = null;
            if (report3.count > 0) {
              tmp34 = report3.percentiles[1];
            }
            obj["outbound_bandwidth_surplus_percentile1"] = tmp34;
            let tmp35 = null;
            if (report3.count > 0) {
              tmp35 = report3.percentiles[5];
            }
            obj["outbound_bandwidth_surplus_percentile5"] = tmp35;
            let tmp36 = null;
            if (report3.count > 0) {
              tmp36 = report3.percentiles[10];
            }
            obj["outbound_bandwidth_surplus_percentile10"] = tmp36;
            let tmp37 = null;
            if (report3.count > 0) {
              tmp37 = report3.percentiles[25];
            }
            obj["outbound_bandwidth_surplus_percentile25"] = tmp37;
            let tmp38 = null;
            if (report3.count > 0) {
              tmp38 = report3.percentiles[50];
            }
            obj["outbound_bandwidth_surplus_percentile50"] = tmp38;
            let tmp39 = null;
            if (report3.count > 0) {
              tmp39 = report3.percentiles[75];
            }
            obj["outbound_bandwidth_surplus_percentile75"] = tmp39;
            let tmp40 = null;
            if (report3.count > 0) {
              tmp40 = report3.percentiles[99];
            }
            obj["outbound_bandwidth_surplus_percentile99"] = tmp40;
            obj["duration_encoder_nvidia_cuda"] = callback(vmafHistogram.encoderBuckets[closure_0(undefined, closure_2[9]).Encoders.NVIDIA_CUDA]);
            obj["duration_encoder_nvidia_direct3d"] = callback(vmafHistogram.encoderBuckets[closure_0(undefined, closure_2[9]).Encoders.NVIDIA_DIRECT_3D]);
            obj["duration_encoder_nvidia_vulkan"] = callback(vmafHistogram.encoderBuckets[closure_0(undefined, closure_2[9]).Encoders.NVIDIA_VULKAN]);
            obj["duration_encoder_openh264"] = callback(vmafHistogram.encoderBuckets[closure_0(undefined, closure_2[9]).Encoders.OPENH264]);
            obj["duration_encoder_videotoolbox"] = callback(vmafHistogram.encoderBuckets[closure_0(undefined, closure_2[9]).Encoders.VIDEOTOOLBOX]);
            obj["duration_encoder_amd_direct3d"] = callback(vmafHistogram.encoderBuckets[closure_0(undefined, closure_2[9]).Encoders.AMD_DIRECT_3D]);
            obj["duration_encoder_amd_vaapi"] = callback(vmafHistogram.encoderBuckets[closure_0(undefined, closure_2[9]).Encoders.AMD_VAAPI]);
            obj["duration_encoder_intel"] = callback(vmafHistogram.encoderBuckets[closure_0(undefined, closure_2[9]).Encoders.INTEL]);
            obj["duration_encoder_intel_direct3d"] = callback(vmafHistogram.encoderBuckets[closure_0(undefined, closure_2[9]).Encoders.INTEL_DIRECT_3D]);
            obj["duration_encoder_intel_vaapi"] = callback(vmafHistogram.encoderBuckets[closure_0(undefined, closure_2[9]).Encoders.INTEL_VAAPI]);
            obj["duration_encoder_vp8_libvpx"] = callback(vmafHistogram.encoderBuckets[closure_0(undefined, closure_2[9]).Encoders.VP8_LIBVPX]);
            obj["duration_encoder_uncategorized"] = callback(vmafHistogram.encoderBuckets[closure_0(undefined, closure_2[9]).Encoders.UNCATEGORIZED]);
            obj["duration_encoder_wmf_chrome"] = callback(vmafHistogram.encoderBuckets[closure_0(undefined, closure_2[9]).Encoders.WMF_CHROME]);
            obj["duration_encoder_unknown"] = callback(vmafHistogram.encoderBuckets[closure_0(undefined, closure_2[9]).Encoders.UNKNOWN]);
            obj["quality"] = items;
            obj["average_encode_time_ms"] = vmafHistogram.averageEncodeTime;
            let result2 = null;
            if (vmafHistogram.vmafScoreNum > 0) {
              result2 = vmafHistogram.vmafScoreSum / vmafHistogram.vmafScoreNum;
            }
            obj["average_encoder_vmaf_score"] = result2;
            let tmp46 = null;
            if (report.count > 0) {
              tmp46 = report.percentiles[1];
            }
            obj["encoder_vmaf_score_percentile1"] = tmp46;
            let tmp47 = null;
            if (report.count > 0) {
              tmp47 = report.percentiles[5];
            }
            obj["encoder_vmaf_score_percentile5"] = tmp47;
            let tmp48 = null;
            if (report.count > 0) {
              tmp48 = report.percentiles[10];
            }
            obj["encoder_vmaf_score_percentile10"] = tmp48;
            let tmp49 = null;
            if (report.count > 0) {
              tmp49 = report.percentiles[25];
            }
            obj["encoder_vmaf_score_percentile25"] = tmp49;
            let tmp50 = null;
            if (report.count > 0) {
              tmp50 = report.percentiles[50];
            }
            obj["encoder_vmaf_score_percentile50"] = tmp50;
            let tmp51 = null;
            if (report.count > 0) {
              tmp51 = report.percentiles[75];
            }
            obj["encoder_vmaf_score_percentile75"] = tmp51;
            let result3 = null;
            if (vmafHistogram.psnrDbNum > 0) {
              result3 = vmafHistogram.psnrDbSum / vmafHistogram.psnrDbNum;
            }
            obj["average_encoder_psnr_db"] = result3;
            let tmp53 = null;
            if (report1.count > 0) {
              tmp53 = report1.percentiles[1];
            }
            obj["encoder_psnr_db_percentile1"] = tmp53;
            let tmp54 = null;
            if (report1.count > 0) {
              tmp54 = report1.percentiles[5];
            }
            obj["encoder_psnr_db_percentile5"] = tmp54;
            let tmp55 = null;
            if (report1.count > 0) {
              tmp55 = report1.percentiles[10];
            }
            obj["encoder_psnr_db_percentile10"] = tmp55;
            let tmp56 = null;
            if (report1.count > 0) {
              tmp56 = report1.percentiles[25];
            }
            obj["encoder_psnr_db_percentile25"] = tmp56;
            let tmp57 = null;
            if (report1.count > 0) {
              tmp57 = report1.percentiles[50];
            }
            obj["encoder_psnr_db_percentile50"] = tmp57;
            let tmp58 = null;
            if (report1.count > 0) {
              tmp58 = report1.percentiles[75];
            }
            obj["encoder_psnr_db_percentile75"] = tmp58;
            let result4 = null;
            if (vmafHistogram.outboundSinkWantNum > 0) {
              result4 = vmafHistogram.outboundSinkWantSum / vmafHistogram.outboundSinkWantNum;
            }
            obj["average_outbound_want"] = result4;
            obj["frames_dropped_rate_limiter"] = vmafHistogram.framesDroppedRateLimiter;
            obj["frames_dropped_encoder_queue"] = vmafHistogram.framesDroppedEncoderQueue;
            obj["frames_dropped_congestion_window"] = vmafHistogram.framesDroppedCongestionWindow;
            obj["frames_dropped_encoder"] = vmafHistogram.framesDroppedEncoder;
            const hqSimulcastStreamEncoded = self.hqSimulcastStreamEncoded;
            obj["duration_hq_simulcast_stream_encoded"] = callback(hqSimulcastStreamEncoded.totalDurationSeconds());
            const lqSimulcastStreamEncoded = self.lqSimulcastStreamEncoded;
            obj["duration_lq_simulcast_stream_encoded"] = callback(lqSimulcastStreamEncoded.totalDurationSeconds());
            const bothSimulcastStreamsEncoded = self.bothSimulcastStreamsEncoded;
            obj["duration_both_simulcast_streams_encoded"] = callback(bothSimulcastStreamsEncoded.totalDurationSeconds());
            const bandwidthLimitedFramerate = self.bandwidthLimitedFramerate;
            obj["duration_fps_bandwidth_limited"] = callback(bandwidthLimitedFramerate.totalDurationSeconds());
            const bandwidthLimitedResolution = self.bandwidthLimitedResolution;
            obj["duration_resolution_bandwidth_limited"] = callback(bandwidthLimitedResolution.totalDurationSeconds());
            let tmp62 = null;
            if (report4.count > 0) {
              tmp62 = report4.percentiles[1];
            }
            obj["video_entropy_percentile1"] = tmp62;
            let tmp63 = null;
            if (report4.count > 0) {
              tmp63 = report4.percentiles[5];
            }
            obj["video_entropy_percentile5"] = tmp63;
            let tmp64 = null;
            if (report4.count > 0) {
              tmp64 = report4.percentiles[10];
            }
            obj["video_entropy_percentile10"] = tmp64;
            let tmp65 = null;
            if (report4.count > 0) {
              tmp65 = report4.percentiles[25];
            }
            obj["video_entropy_percentile25"] = tmp65;
            let tmp66 = null;
            if (report4.count > 0) {
              tmp66 = report4.percentiles[50];
            }
            obj["video_entropy_percentile50"] = tmp66;
            let tmp67 = null;
            if (report4.count > 0) {
              tmp67 = report4.percentiles[75];
            }
            obj["video_entropy_percentile75"] = tmp67;
            let tmp68 = null;
            if (report4.count > 0) {
              tmp68 = report4.percentiles[99];
            }
            obj["video_entropy_percentile99"] = tmp68;
            obj["duration_encoder_exynos"] = callback(vmafHistogram.encoderBuckets[closure_0(undefined, closure_2[9]).Encoders.EXYNOS]);
            obj["duration_encoder_qualcomm"] = callback(vmafHistogram.encoderBuckets[closure_0(undefined, closure_2[9]).Encoders.QUALCOMM]);
            obj["duration_encoder_mediatek"] = callback(vmafHistogram.encoderBuckets[closure_0(undefined, closure_2[9]).Encoders.MEDIATEK]);
            obj["duration_encoder_wmf_sw"] = callback(vmafHistogram.encoderBuckets[closure_0(undefined, closure_2[9]).Encoders.WMF_SW]);
            obj["duration_encoder_wmf_hw"] = callback(vmafHistogram.encoderBuckets[closure_0(undefined, closure_2[9]).Encoders.WMF_HW]);
            obj["duration_encoder_wmf_direct3d"] = callback(vmafHistogram.encoderBuckets[closure_0(undefined, closure_2[9]).Encoders.WMF_DIRECT_3D]);
            items.push(obj);
          }
          const obj2 = self(closure_2[11]);
        }
        framesCodec = vmafHistogram.aggregatedProperties.framesCodec;
      });
      return items;
    }
  };
  items[21] = {
    key: "getInboundStats",
    value(arg0) {
      return this.getStats(this.inboundStats[arg0]);
    }
  };
  items[22] = {
    key: "destroyUser",
    value(arg0) {
      delete r1[r0];
    }
  };
  items[23] = {
    key: "getInboundParticipants",
    value() {
      return callback(closure_2[12]).keys(this.inboundStats);
    }
  };
  items[24] = {
    key: "updateSendState",
    value(paused) {
      const self = this;
      if (null != paused.paused) {
        self.paused.value = paused.paused;
      }
      if (null != paused.receivers) {
        self.zeroReceivers.value = 0 === paused.receivers;
      }
      self.videoStopped.value = self.paused.value || self.zeroReceivers.value;
      if ((self.paused.value || self.zeroReceivers.value) !== self.videoStopped.value) {
        const item = callback(closure_2[10]).forEach(self.outboundStats, (arg0) => {
          const items = [];
          arg0.statsWindow = items;
          return items;
        });
        const arr = callback(closure_2[10]);
      }
    }
  };
  items[25] = {
    key: "getStats",
    value(aggregationDuration) {
      let bytes;
      let cryptorAttempts;
      let cryptorDuration;
      let cryptorFailureCount;
      let cryptorInvalidNonceCount;
      let cryptorMissingKeyCount;
      let cryptorSuccessCount;
      let framesCodec;
      let framesCodecError;
      let framesDropped;
      let framesNetwork;
      let freezeCount;
      let keyframes;
      let nackCount;
      let packets;
      let packetsLost;
      let passthroughCount;
      let pauseCount;
      let paused;
      let pliCount;
      let qpSum;
      let qualityDecodeErrors;
      let qualityDecoderReboots;
      let qualityFrameDrops;
      let qualityScoreErrors;
      let qualitySizeMismatches;
      let totalDecodeTime;
      let totalFramesDuration;
      let totalFreezesDuration;
      let totalPausesDuration;
      let windowOccluded;
      const self = this;
      if (null == aggregationDuration) {
        return null;
      } else {
        const _Number = Number;
        const NumberResult = Number(self.streamStart);
        if (null != self.streamEnd) {
          let diff = self.streamEnd - NumberResult;
        } else {
          const timestampProducer = self.timestampProducer;
          diff = timestampProducer.now() - NumberResult;
        }
        const _Math = Math;
        const result = Math.max(aggregationDuration.aggregationDuration, 0) / 1000;
        const items = ["locomotive", "bus", "car", "tram", "trolley", "trolleybus"];
        const fpsHistogram = aggregationDuration.fpsHistogram;
        const report = fpsHistogram.getReport(items);
        const bitrateHistogram = aggregationDuration.bitrateHistogram;
        const report1 = bitrateHistogram.getReport(["google.protobuf.Timestamp", "google.protobuf.DoubleValue", "google.protobuf.FloatValue", "arrows_clockwise", -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003065641165576845, 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000188703258491505, -0.000000000000000000000000000000000000000000000000032412492445407077]);
        const resolutionHistogram = aggregationDuration.resolutionHistogram;
        const report2 = resolutionHistogram.getReport(items);
        const inboundBitrateEstimateHistogram = aggregationDuration.inboundBitrateEstimateHistogram;
        const report3 = inboundBitrateEstimateHistogram.getReport(["google.protobuf.Timestamp", "google.protobuf.DoubleValue", "google.protobuf.FloatValue", "arrows_clockwise", -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003065641165576845, 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000188703258491505, -0.000000000000000000000000000000000000000000000000032412492445407077]);
        const localWantHistogram = aggregationDuration.localWantHistogram;
        const report4 = localWantHistogram.getReport([]);
        const systemResources = aggregationDuration.systemResources;
        const stats = systemResources.getStats();
        let obj = {};
        const _Math2 = Math;
        obj.duration = Math.floor(diff / 1000);
        obj.duration_aggregation = callback5(result);
        const videoStoppedDuration = aggregationDuration.videoStoppedDuration;
        obj.duration_stopped_receiving = callback5(videoStoppedDuration.asSeconds());
        obj.duration_stream_under_8mbps = callback5(aggregationDuration.bitrateBuckets[8000000]);
        obj.duration_stream_under_7mbps = callback5(aggregationDuration.bitrateBuckets[7000000]);
        obj.duration_stream_under_6mbps = callback5(aggregationDuration.bitrateBuckets[6000000]);
        obj.duration_stream_under_5mbps = callback5(aggregationDuration.bitrateBuckets[5000000]);
        obj.duration_stream_under_4mbps = callback5(aggregationDuration.bitrateBuckets[4000000]);
        obj.duration_stream_under_3mbps = callback5(aggregationDuration.bitrateBuckets[3000000]);
        obj.duration_stream_under_2mbps = callback5(aggregationDuration.bitrateBuckets[2000000]);
        obj.duration_stream_under_1_5mbps = callback5(aggregationDuration.bitrateBuckets[1500000]);
        obj.duration_stream_under_1mbps = callback5(aggregationDuration.bitrateBuckets[1000000]);
        obj.duration_stream_under_0_5mbps = callback5(aggregationDuration.bitrateBuckets[500000]);
        obj.duration_stream_at_0mbps = callback5(aggregationDuration.bitrateBuckets[0]);
        obj.duration_fps_under_60 = callback5(aggregationDuration.fpsBuckets[60]);
        obj.duration_fps_under_55 = callback5(aggregationDuration.fpsBuckets[55]);
        obj.duration_fps_under_50 = callback5(aggregationDuration.fpsBuckets[50]);
        obj.duration_fps_under_45 = callback5(aggregationDuration.fpsBuckets[45]);
        obj.duration_fps_under_40 = callback5(aggregationDuration.fpsBuckets[40]);
        obj.duration_fps_under_35 = callback5(aggregationDuration.fpsBuckets[35]);
        obj.duration_fps_under_30 = callback5(aggregationDuration.fpsBuckets[30]);
        obj.duration_fps_under_25 = callback5(aggregationDuration.fpsBuckets[25]);
        obj.duration_fps_under_20 = callback5(aggregationDuration.fpsBuckets[20]);
        obj.duration_fps_under_15 = callback5(aggregationDuration.fpsBuckets[15]);
        obj.duration_fps_under_10 = callback5(aggregationDuration.fpsBuckets[10]);
        obj.duration_fps_under_5 = callback5(aggregationDuration.fpsBuckets[5]);
        obj.duration_fps_at_0 = callback5(aggregationDuration.fpsBuckets[0]);
        let num25 = 0;
        if (aggregationDuration.intervalTotal > 0) {
          const _Math3 = Math;
          num25 = Math.round(aggregationDuration.resolutionTotal / aggregationDuration.intervalTotal);
        }
        obj.avg_resolution = num25;
        let num26 = 0;
        if (aggregationDuration.intervalTotal > 0) {
          const _Math4 = Math;
          num26 = Math.round(aggregationDuration.minorResolutionTotal / aggregationDuration.intervalTotal);
        }
        obj.avg_minor_resolution = num26;
        let num27 = 0;
        if (aggregationDuration.intervalTotal > 0) {
          const _Math5 = Math;
          num27 = Math.round(aggregationDuration.majorResolutionTotal / aggregationDuration.intervalTotal);
        }
        obj.avg_major_resolution = num27;
        const minWidth = aggregationDuration.minWidth;
        let tmp10 = null;
        if (null != minWidth) {
          tmp10 = minWidth;
        }
        obj.min_resolution_width = tmp10;
        const minHeight = aggregationDuration.minHeight;
        let tmp11 = null;
        if (null != minHeight) {
          tmp11 = minHeight;
        }
        obj.min_resolution_height = tmp11;
        obj.duration_resolution_under_720 = callback5(aggregationDuration.resolutionBuckets[720]);
        obj.duration_resolution_under_480 = callback5(aggregationDuration.resolutionBuckets[480]);
        obj.duration_resolution_under_360 = callback5(aggregationDuration.resolutionBuckets[360]);
        ({ pausedCount: obj.num_pauses, paused } = self);
        obj.duration_paused = callback5(paused.totalDuration() / 1000);
        const zeroReceivers = self.zeroReceivers;
        obj.duration_zero_receivers = callback5(zeroReceivers.totalDuration() / 1000);
        const videoStopped = self.videoStopped;
        obj.duration_video_stopped = callback5(videoStopped.totalDuration() / 1000);
        const hqSimulcastStreamWatched = self.hqSimulcastStreamWatched;
        obj.duration_hq_simulcast_stream_watched = callback5(hqSimulcastStreamWatched.totalDurationSeconds());
        const lqSimulcastStreamWatched = self.lqSimulcastStreamWatched;
        obj.duration_lq_simulcast_stream_watched = callback5(lqSimulcastStreamWatched.totalDurationSeconds());
        const hqSimulcastStreamEligible = self.hqSimulcastStreamEligible;
        obj.duration_hq_simulcast_stream_eligible = callback5(hqSimulcastStreamEligible.totalDurationSeconds());
        const lqSimulcastStreamEligible = self.lqSimulcastStreamEligible;
        obj.duration_lq_simulcast_stream_eligible = callback5(lqSimulcastStreamEligible.totalDurationSeconds());
        ({ simulcastQualityChanges: obj.num_quality_changes, windowOccluded } = self);
        obj.duration_window_occluded = callback5(windowOccluded.totalDurationSeconds());
        const videoStoppedForOcclusion = self.videoStoppedForOcclusion;
        obj.duration_incoming_video_stopped_for_occlusion = callback5(videoStoppedForOcclusion.totalDurationSeconds());
        obj.num_window_occlusion_changes = self.numWindowOcclusionChanges;
        obj.fps_percentile1 = report.percentiles[1];
        obj.fps_percentile5 = report.percentiles[5];
        obj.fps_percentile10 = report.percentiles[10];
        obj.fps_percentile25 = report.percentiles[25];
        obj.fps_percentile50 = report.percentiles[50];
        obj.fps_percentile75 = report.percentiles[75];
        obj.bitrate_percentile1 = report1.percentiles[1];
        obj.bitrate_percentile5 = report1.percentiles[5];
        obj.bitrate_percentile10 = report1.percentiles[10];
        obj.bitrate_percentile25 = report1.percentiles[25];
        obj.bitrate_percentile50 = report1.percentiles[50];
        obj.bitrate_percentile75 = report1.percentiles[75];
        obj.bitrate_percentile99 = report1.percentiles[99];
        obj.resolution_percentile1 = report2.percentiles[1];
        obj.resolution_percentile5 = report2.percentiles[5];
        obj.resolution_percentile10 = report2.percentiles[10];
        obj.resolution_percentile25 = report2.percentiles[25];
        obj.resolution_percentile50 = report2.percentiles[50];
        obj.resolution_percentile75 = report2.percentiles[75];
        obj.inbound_bitrate_estimate_percentile1 = report3.percentiles[1];
        obj.inbound_bitrate_estimate_percentile5 = report3.percentiles[5];
        obj.inbound_bitrate_estimate_percentile10 = report3.percentiles[10];
        obj.inbound_bitrate_estimate_percentile25 = report3.percentiles[25];
        obj.inbound_bitrate_estimate_percentile50 = report3.percentiles[50];
        obj.inbound_bitrate_estimate_percentile75 = report3.percentiles[75];
        obj.inbound_bitrate_estimate_percentile99 = report3.percentiles[99];
        obj.local_want_percentile1 = report4.percentiles[1];
        obj.local_want_percentile5 = report4.percentiles[5];
        obj.local_want_percentile10 = report4.percentiles[10];
        obj.local_want_percentile25 = report4.percentiles[25];
        obj.local_want_percentile50 = report4.percentiles[50];
        obj.local_want_percentile75 = report4.percentiles[75];
        obj.local_want_percentile90 = report4.percentiles[90];
        obj.local_want_percentile95 = report4.percentiles[95];
        obj.average_local_want = report4.mean;
        const videoEffectDuration = self.videoEffectDuration;
        obj.duration_video_effect = callback5(videoEffectDuration.totalDuration() / 1000);
        obj.cryptor_max_attempts = aggregationDuration.cryptorMaxAttempts;
        obj.duration_decoder_ffmpeg = callback5(aggregationDuration.decoderBuckets[closure_0(undefined, closure_2[9]).Decoders.FFMPEG]);
        obj.duration_decoder_dav1d = callback5(aggregationDuration.decoderBuckets[closure_0(undefined, closure_2[9]).Decoders.DAV1D]);
        obj.duration_decoder_vp8_libvpx = callback5(aggregationDuration.decoderBuckets[closure_0(undefined, closure_2[9]).Decoders.VP8_LIBVPX]);
        obj.duration_decoder_electron = callback5(aggregationDuration.decoderBuckets[closure_0(undefined, closure_2[9]).Decoders.ELECTRON]);
        obj.duration_decoder_videotoolbox = callback5(aggregationDuration.decoderBuckets[closure_0(undefined, closure_2[9]).Decoders.VIDEOTOOLBOX]);
        obj.duration_decoder_uncategorized = callback5(aggregationDuration.decoderBuckets[closure_0(undefined, closure_2[9]).Decoders.UNCATEGORIZED]);
        obj.duration_decoder_unknown = callback5(aggregationDuration.decoderBuckets[closure_0(undefined, closure_2[9]).Decoders.UNKNOWN]);
        obj.duration_decoder_exynos = callback5(aggregationDuration.decoderBuckets[closure_0(undefined, closure_2[9]).Decoders.EXYNOS]);
        obj.duration_decoder_webrtc = callback5(aggregationDuration.decoderBuckets[closure_0(undefined, closure_2[9]).Decoders.WEBRTC]);
        obj.duration_decoder_qualcomm = callback5(aggregationDuration.decoderBuckets[closure_0(undefined, closure_2[9]).Decoders.QUALCOMM]);
        obj.duration_decoder_mediatek = callback5(aggregationDuration.decoderBuckets[closure_0(undefined, closure_2[9]).Decoders.MEDIATEK]);
        obj.duration_decoder_d3d11videodecoder = callback5(aggregationDuration.decoderBuckets[closure_0(undefined, closure_2[9]).Decoders.D3D11VIDEODECODER]);
        obj.duration_decoder_android = callback5(aggregationDuration.decoderBuckets[closure_0(undefined, closure_2[9]).Decoders.ANDROID]);
        const merged = Object.assign(stats);
        const aggregatedProperties = aggregationDuration.aggregatedProperties;
        ({ bytes, framesCodec, freezeCount, totalFreezesDuration, totalFramesDuration, cryptorFailureCount } = aggregatedProperties);
        let num37 = 0;
        ({ framesDropped, framesCodecError, framesNetwork, packets, packetsLost, nackCount, pliCount, qpSum, pauseCount, totalPausesDuration, totalDecodeTime, keyframes, passthroughCount, cryptorSuccessCount, cryptorDuration, cryptorAttempts, cryptorMissingKeyCount, cryptorInvalidNonceCount, qualityDecodeErrors, qualityDecoderReboots, qualityScoreErrors, qualityFrameDrops, qualitySizeMismatches } = aggregatedProperties);
        if (null != cryptorFailureCount) {
          num37 = cryptorFailureCount;
        }
        const cryptorFailureBeforeSuccessCount = aggregationDuration.cryptorFailureBeforeSuccessCount;
        let num38 = 0;
        if (null != cryptorFailureBeforeSuccessCount) {
          num38 = cryptorFailureBeforeSuccessCount;
        }
        const diff1 = num37 - num38;
        if (aggregationDuration instanceof VideoQuality(closure_2[9]).OutboundStats) {
          obj.sender_freeze_count = freezeCount;
          obj.sender_total_freezes_duration = totalFreezesDuration;
          obj.sender_total_frames_duration = totalFramesDuration;
          obj.consecutive_static_color_frames_max = aggregationDuration.consecutiveStaticColorFramesMax;
        } else {
          obj.receiver_freeze_count = freezeCount;
          obj.receiver_total_freezes_duration = totalFreezesDuration;
          obj.receiver_total_frames_duration = totalFramesDuration;
          obj.receiver_pause_count = pauseCount;
          obj.receiver_total_pauses_duration = totalPausesDuration;
          obj.total_decode_time_ms = totalDecodeTime;
        }
        obj = {};
        const merged1 = Object.assign(obj);
        let num39 = 0;
        if (result > 0) {
          let num40 = 0;
          if (null != bytes) {
            num40 = bytes;
          }
          num39 = Math.round(8 * num40 / result);
        }
        obj["avg_bitrate"] = num39;
        let num42 = 0;
        if (result > 0) {
          let num43 = 0;
          if (null != framesCodec) {
            num43 = framesCodec;
          }
          num42 = Math.round(num43 / result);
        }
        obj["avg_fps"] = num42;
        obj["num_bytes"] = bytes;
        obj["num_packets_lost"] = packetsLost;
        obj["num_packets"] = packets;
        obj["num_frames"] = framesNetwork;
        obj["num_frames_codec_error"] = framesCodecError;
        obj["time_to_first_frame_ms"] = aggregationDuration.timeToFirstFrame;
        obj["num_frames_dropped"] = framesDropped;
        obj["num_nacks"] = nackCount;
        obj["num_plis"] = pliCount;
        obj["qp_sum"] = qpSum;
        obj["num_keyframes"] = keyframes;
        obj["cryptor_passthrough_count"] = passthroughCount;
        obj["cryptor_success_count"] = cryptorSuccessCount;
        obj["cryptor_failure_count"] = cryptorFailureCount;
        obj["cryptor_duration"] = cryptorDuration;
        obj["cryptor_attempts"] = cryptorAttempts;
        obj["cryptor_missing_key_count"] = cryptorMissingKeyCount;
        obj["cryptor_invalid_nonce_count"] = cryptorInvalidNonceCount;
        obj["cryptor_failure_after_success_count"] = diff1;
        obj["encoder_quality_decode_errors"] = qualityDecodeErrors;
        obj["encoder_quality_decoder_reboots"] = qualityDecoderReboots;
        obj["encoder_quality_score_errors"] = qualityScoreErrors;
        obj["encoder_quality_frame_drops"] = qualityFrameDrops;
        obj["encoder_quality_size_mismatches"] = qualitySizeMismatches;
        return obj;
      }
    }
  };
  items[26] = {
    key: "receivedStats",
    value(arg0, transport, arr) {
      const self = this;
      const VideoQuality = this;
      transport = transport.transport;
      let obj = VideoQuality(transport[11]);
      let num = 1;
      if (!obj.isWeb()) {
        const receiverReports = transport.receiverReports;
        let length;
        if (null != receiverReports) {
          length = receiverReports.length;
        }
        let num2 = 0;
        if (null != length) {
          num2 = length;
        }
        num = num2;
      }
      const set = new Set();
      const set1 = new Set();
      obj = { receivers: num };
      self.updateSendState(obj);
      let tmp6 = self.connection.context === VideoQuality(transport[8]).MediaEngineContextTypes.DEFAULT;
      if (tmp6) {
        tmp6 = null != transport.camera;
      }
      self.cameraDuration.value = tmp6;
      let tmp8 = self.connection.context === VideoQuality(transport[8]).MediaEngineContextTypes.DEFAULT;
      if (tmp8) {
        tmp8 = null != transport.camera;
      }
      if (tmp8) {
        tmp8 = self.callUserIdsCount > 1;
      }
      self.cameraOpportunityDuration.value = tmp8;
      let tmp10 = self.connection.context === VideoQuality(transport[8]).MediaEngineContextTypes.DEFAULT;
      if (tmp10) {
        tmp10 = null != transport.camera;
      }
      if (tmp10) {
        tmp10 = num > 0;
      }
      self.cameraSendDuration.value = tmp10;
      if (tmp12) {
        self.cameraToggles = self.cameraToggles + 1;
      }
      let closure_7 = arg0(transport[10]).max(arr.map((quality) => quality.quality));
      const outbound = transport.rtp.outbound;
      const first = outbound.filter((type) => {
        let tmp = "video" === type.type;
        if (tmp) {
          let videoEntropy;
          if (null != type) {
            videoEntropy = type.videoEntropy;
          }
          tmp = null != videoEntropy;
        }
        return tmp;
      })[0];
      let videoEntropy;
      if (null != first) {
        videoEntropy = first.videoEntropy;
      }
      const outbound1 = transport.rtp.outbound;
      const found = outbound1.filter((type) => "video" === type.type);
      const item = found.forEach((ssrc) => {
        if (null != ssrc) {
          ssrc = ssrc.ssrc;
          const self = ssrc;
          let obj = self.outboundStats[ssrc];
          if (null == obj) {
            const OutboundStats = self(arg1[9]).OutboundStats;
            const prototype = OutboundStats.prototype;
            const outboundStats = new OutboundStats(self.timestampProducer);
            self.outboundStats[ssrc] = outboundStats;
            obj = outboundStats;
          }
          let tmp8 = null == obj.timeToFirstFrame;
          if (tmp8) {
            let tmp9 = ssrc.framesEncoded > 0;
            if (!tmp9) {
              const frameRateInput = ssrc.frameRateInput;
              let num3 = 0;
              if (null != frameRateInput) {
                num3 = frameRateInput;
              }
              tmp9 = num3 > 0;
            }
            tmp8 = tmp9;
          }
          if (tmp8) {
            const _Math = Math;
            obj.timeToFirstFrame = Math.max(0, ssrc - obj.startTime);
          }
          let tmp13 = null != videoEntropy;
          if (tmp13) {
            tmp13 = videoEntropy >= 0;
          }
          if (tmp13) {
            const videoEntropy = self.videoEntropy;
            videoEntropy.addSample(videoEntropy);
          }
          const found = arg2.find((ssrc) => ssrc.ssrc === ssrc);
          let flag = true;
          if (self.connection.context === self(arg1[8]).MediaEngineContextTypes.STREAM) {
            const connection = self.connection;
            const remoteVideoSinkWants = connection.getRemoteVideoSinkWants(ssrc);
            let tmp25 = null != remoteVideoSinkWants;
            if (tmp25) {
              tmp25 = 0 !== remoteVideoSinkWants;
            }
            if (!tmp25) {
              let quality;
              if (null != found) {
                quality = found.quality;
              }
              tmp25 = quality !== closure_7;
            }
            let remoteVideoSinkWants1 = remoteVideoSinkWants;
            if (!tmp25) {
              const connection2 = self.connection;
              remoteVideoSinkWants1 = connection2.getRemoteVideoSinkWants("any");
            }
            let num9 = 0;
            if (null != remoteVideoSinkWants1) {
              num9 = remoteVideoSinkWants1;
            }
            flag = num9 > 0;
          }
          if ((self.videoStopped.value || !flag) !== obj.isVideoStopped) {
            obj.setVideoStopped(tmp31, self(arg1[9]).VideoStoppedReasons.SenderStopped);
          }
          if (!(self.videoStopped.value || !flag)) {
            const RawVideoStats = self(arg1[9]).RawVideoStats;
            const parseOutboundStatsResult = RawVideoStats.parseOutboundStats(ssrc, ssrc);
            if (self.connection.context === self(arg1[8]).MediaEngineContextTypes.STREAM) {
              let hybridGraphicsCaptureFramesUnique = arg1.screenshare;
              if (null == hybridGraphicsCaptureFramesUnique) {
                parseOutboundStatsResult.screenshareFramesUnique = parseOutboundStatsResult.framesCodec;
              } else {
                if (null == hybridGraphicsCaptureFramesUnique.hybridDxgiFramesUnique) {
                  if (null == hybridGraphicsCaptureFramesUnique.hybridGdiBitBltFramesUnique) {
                    if (null == hybridGraphicsCaptureFramesUnique.hybridGdiPrintWindowFramesUnique) {
                      if (null == hybridGraphicsCaptureFramesUnique.hybridVideohookFramesUnique) {
                        if (null == hybridGraphicsCaptureFramesUnique.hybridGraphicsCaptureFramesUnique) {
                          const screenshareFrames = hybridGraphicsCaptureFramesUnique.screenshareFrames;
                          let num12 = 0;
                          if (null != screenshareFrames) {
                            num12 = screenshareFrames;
                          }
                          const videohookFrames = hybridGraphicsCaptureFramesUnique.videohookFrames;
                          let num13 = 0;
                          if (null != videohookFrames) {
                            num13 = videohookFrames;
                          }
                          const quartzFrames = hybridGraphicsCaptureFramesUnique.quartzFrames;
                          let num14 = 0;
                          const sum = num12 + num13;
                          if (null != quartzFrames) {
                            num14 = quartzFrames;
                          }
                          const screenCaptureKitFrames = hybridGraphicsCaptureFramesUnique.screenCaptureKitFrames;
                          let num15 = 0;
                          const sum1 = sum + num14;
                          if (null != screenCaptureKitFrames) {
                            num15 = screenCaptureKitFrames;
                          }
                          const x11Frames = hybridGraphicsCaptureFramesUnique.x11Frames;
                          let num16 = 0;
                          const sum2 = sum1 + num15;
                          if (null != x11Frames) {
                            num16 = x11Frames;
                          }
                          const pipewireFrames = hybridGraphicsCaptureFramesUnique.pipewireFrames;
                          let num17 = 0;
                          const sum3 = sum2 + num16;
                          if (null != pipewireFrames) {
                            num17 = pipewireFrames;
                          }
                          let sum4 = sum3 + num17;
                        }
                      }
                    }
                  }
                }
                const hybridDxgiFramesUnique = hybridGraphicsCaptureFramesUnique.hybridDxgiFramesUnique;
                let num18 = 0;
                if (null != hybridDxgiFramesUnique) {
                  num18 = hybridDxgiFramesUnique;
                }
                const hybridGdiBitBltFramesUnique = hybridGraphicsCaptureFramesUnique.hybridGdiBitBltFramesUnique;
                let num19 = 0;
                if (null != hybridGdiBitBltFramesUnique) {
                  num19 = hybridGdiBitBltFramesUnique;
                }
                const hybridGdiPrintWindowFramesUnique = hybridGraphicsCaptureFramesUnique.hybridGdiPrintWindowFramesUnique;
                let num20 = 0;
                const sum5 = num18 + num19;
                if (null != hybridGdiPrintWindowFramesUnique) {
                  num20 = hybridGdiPrintWindowFramesUnique;
                }
                const hybridVideohookFramesUnique = hybridGraphicsCaptureFramesUnique.hybridVideohookFramesUnique;
                let num21 = 0;
                const sum6 = sum5 + num20;
                if (null != hybridVideohookFramesUnique) {
                  num21 = hybridVideohookFramesUnique;
                }
                hybridGraphicsCaptureFramesUnique = hybridGraphicsCaptureFramesUnique.hybridGraphicsCaptureFramesUnique;
                let num22 = 0;
                const sum7 = sum6 + num21;
                if (null != hybridGraphicsCaptureFramesUnique) {
                  num22 = hybridGraphicsCaptureFramesUnique;
                }
                sum4 = sum7 + num22;
              }
            }
            const result = obj.appendAndIncrementStats(parseOutboundStatsResult);
            let tmp50 = null != ssrc.minResolutionWidth;
            if (tmp50) {
              tmp50 = ssrc.minResolutionWidth > 0;
            }
            if (tmp50) {
              tmp50 = null == obj.minWidth || ssrc.minResolutionWidth < obj.minWidth;
              const tmp51 = null == obj.minWidth || ssrc.minResolutionWidth < obj.minWidth;
            }
            if (tmp50) {
              obj.minWidth = ssrc.minResolutionWidth;
            }
            let tmp52 = null != ssrc.minResolutionHeight;
            if (tmp52) {
              tmp52 = ssrc.minResolutionHeight > 0;
            }
            if (tmp52) {
              tmp52 = null == obj.minHeight || ssrc.minResolutionHeight < obj.minHeight;
              const tmp53 = null == obj.minHeight || ssrc.minResolutionHeight < obj.minHeight;
            }
            if (tmp52) {
              obj.minHeight = ssrc.minResolutionHeight;
            }
            if (obj.encoderCodec !== self(arg1[9]).CodecTypes.UNKNOWN) {
              set.add(obj.encoderCodec);
            }
            let maxBitrate;
            if (null != found) {
              maxBitrate = found.maxBitrate;
            }
            let maxFrameRate;
            if (null != found) {
              maxFrameRate = found.maxFrameRate;
            }
            let bitrateTarget = ssrc.bitrateTarget;
            if (null == bitrateTarget) {
              const availableOutgoingBitrate = transport.availableOutgoingBitrate;
              let num25 = 0;
              if (null != availableOutgoingBitrate) {
                num25 = availableOutgoingBitrate;
              }
              let num26 = 0;
              if (null != maxBitrate) {
                num26 = maxBitrate;
              }
              bitrateTarget = Math.min(num25, num26);
            }
            obj.appendTargetRates(maxFrameRate, bitrateTarget, maxBitrate, transport.availableOutgoingBitrate);
            const averageEncodeTime = ssrc.averageEncodeTime;
            let num27 = 0;
            if (null != averageEncodeTime) {
              num27 = averageEncodeTime;
            }
            obj.averageEncodeTime = num27;
            const framesDroppedRateLimiter = ssrc.framesDroppedRateLimiter;
            let tmp68 = null;
            if (null != framesDroppedRateLimiter) {
              tmp68 = framesDroppedRateLimiter;
            }
            obj.framesDroppedRateLimiter = tmp68;
            const framesDroppedEncoderQueue = ssrc.framesDroppedEncoderQueue;
            let tmp69 = null;
            if (null != framesDroppedEncoderQueue) {
              tmp69 = framesDroppedEncoderQueue;
            }
            obj.framesDroppedEncoderQueue = tmp69;
            const framesDroppedCongestionWindow = ssrc.framesDroppedCongestionWindow;
            let tmp70 = null;
            if (null != framesDroppedCongestionWindow) {
              tmp70 = framesDroppedCongestionWindow;
            }
            obj.framesDroppedCongestionWindow = tmp70;
            const framesDroppedEncoder = ssrc.framesDroppedEncoder;
            let tmp71 = null;
            if (null != framesDroppedEncoder) {
              tmp71 = framesDroppedEncoder;
            }
            obj.framesDroppedEncoder = tmp71;
            const hqSimulcastStreamEncoded = ssrc.hqSimulcastStreamEncoded;
            let tmp73 = null != hqSimulcastStreamEncoded;
            if (tmp73) {
              tmp73 = hqSimulcastStreamEncoded;
            }
            self.hqSimulcastStreamEncoded.value = tmp73;
            const lqSimulcastStreamEncoded = ssrc.lqSimulcastStreamEncoded;
            let tmp75 = null != lqSimulcastStreamEncoded;
            if (tmp75) {
              tmp75 = lqSimulcastStreamEncoded;
            }
            self.lqSimulcastStreamEncoded.value = tmp75;
            let value = self.hqSimulcastStreamEncoded.value;
            if (value) {
              value = self.lqSimulcastStreamEncoded.value;
            }
            self.bothSimulcastStreamsEncoded.value = value;
            const bandwidthLimitedResolution = ssrc.bandwidthLimitedResolution;
            let tmp79 = null != bandwidthLimitedResolution;
            if (tmp79) {
              tmp79 = bandwidthLimitedResolution;
            }
            self.bandwidthLimitedResolution.value = tmp79;
            const bandwidthLimitedFrameRate = ssrc.bandwidthLimitedFrameRate;
            let tmp81 = null != bandwidthLimitedFrameRate;
            if (tmp81) {
              tmp81 = bandwidthLimitedFrameRate;
            }
            self.bandwidthLimitedFramerate.value = tmp81;
          }
        }
      });
      if (!self.paused.value) {
        const item1 = arg0(transport[10]).forEach(transport.rtp.inbound, (arr) => {
          const found = arr.find((type) => "video" === type.type);
          if (null != found) {
            let obj = self.inboundStats[arg1];
            if (null == obj) {
              const InboundStats = self(arg1[9]).InboundStats;
              const prototype = InboundStats.prototype;
              const inboundStats = new InboundStats(self.timestampProducer);
              self.inboundStats[arg1] = inboundStats;
              obj = inboundStats;
            }
            const RawVideoStats = self(arg1[9]).RawVideoStats;
            const parseInboundStatsResult = RawVideoStats.parseInboundStats(found, arr);
            const statCollectionPausedUsers = self.statCollectionPausedUsers;
            if (!statCollectionPausedUsers.has(arg1)) {
              const result = obj.appendAndIncrementStats(parseInboundStatsResult);
              obj.appendTransportStats(transport);
            }
            let tmp17 = null != found.minResolutionWidth;
            if (tmp17) {
              tmp17 = found.minResolutionWidth > 0;
            }
            if (tmp17) {
              tmp17 = null == obj.minWidth || found.minResolutionWidth < obj.minWidth;
              const tmp18 = null == obj.minWidth || found.minResolutionWidth < obj.minWidth;
            }
            if (tmp17) {
              obj.minWidth = found.minResolutionWidth;
            }
            let tmp19 = null != found.minResolutionHeight;
            if (tmp19) {
              tmp19 = found.minResolutionHeight > 0;
            }
            if (tmp19) {
              tmp19 = null == obj.minHeight || found.minResolutionHeight < obj.minHeight;
              const tmp20 = null == obj.minHeight || found.minResolutionHeight < obj.minHeight;
            }
            if (tmp19) {
              obj.minHeight = found.minResolutionHeight;
            }
            if (parseInboundStatsResult.packets > 0) {
              self.emit(videoEntropy.FpsUpdate, arg1, parseInboundStatsResult.framesCodec, parseInboundStatsResult.timestamp);
            }
            if (obj.decoderCodec !== self(arg1[9]).CodecTypes.UNKNOWN) {
              set1.add(obj.decoderCodec);
            }
            if (tmp30) {
              obj.timeToFirstFrame = arr - obj.startTime;
            }
            const tmp30 = null == obj.timeToFirstFrame && found.framesDecoded > 0;
          }
        });
        const arr5 = arg0(transport[10]);
      }
      if (tmp19) {
        if (obj4.areSetsEqual(set, set1)) {
          self.symmetricCodecUpdates = self.symmetricCodecUpdates + 1;
        } else {
          self.asymmetricCodecUpdates = self.asymmetricCodecUpdates + 1;
        }
        const obj4 = VideoQuality(transport[13]);
      }
    }
  };
  items[27] = {
    key: "updateSystemResourceStats",
    value() {
      const self = this;
      for (const key10003 in this.outboundStats) {
        let tmp = key10003;
        let obj = self.outboundStats[key10003];
        let addSystemResourcesResult = obj.addSystemResources();
      }
      for (const key10006 in self.inboundStats) {
        let tmp3 = key10006;
        let obj2 = self.inboundStats[key10006];
        let addSystemResourcesResult1 = obj2.addSystemResources();
      }
    }
  };
  items[28] = {
    key: "updateVideoEffectStats",
    value(rtp) {
      let found;
      if (null != rtp) {
        const outbound = rtp.rtp.outbound;
        found = outbound.find((type) => "video" === type.type);
      }
      let type;
      if (null != found) {
        type = found.type;
      }
      this.videoEffectDuration.value = "video" === type && null != found.filter;
    }
  };
  return callback(VideoQuality, items);
}(importDefault(dependencyMap[14]));
const result = arg1(dependencyMap[15]).fileFinishedImporting("lib/VideoQuality.tsx");

export const VideoQualityEvent = obj;
export const VideoQuality = tmp2;
