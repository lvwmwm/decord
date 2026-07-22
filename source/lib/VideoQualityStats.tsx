// Module ID: 6979
// Function ID: 55773
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 6979 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function parseEncoder(key10013) {
  if (null == key10013) {
    return obj.UNKNOWN;
  } else {
    const _Object = Object;
    const keys = Object.keys(closure_16);
    let num = 0;
    if (0 < keys.length) {
      const formatted = key10013.toLowerCase();
      while (!formatted.includes(keys[num])) {
        num = num + 1;
      }
      return closure_16[keys[num]];
    }
    return obj.UNCATEGORIZED;
  }
}
function parseDecoder(prop1) {
  if (null == prop1) {
    return obj.UNKNOWN;
  } else {
    const _Object = Object;
    const keys = Object.keys(closure_17);
    let num = 0;
    if (0 < keys.length) {
      const formatted = prop1.toLowerCase();
      while (!formatted.includes(keys[num])) {
        num = num + 1;
      }
      return closure_17[keys[num]];
    }
    return obj.UNCATEGORIZED;
  }
}
function parseCodecType(name) {
  if (null == name) {
    let AV1 = obj.UNKNOWN;
  } else {
    const formatted = name.toUpperCase();
    if ("H264" === formatted) {
      AV1 = obj.H264;
    } else if ("H265" === formatted) {
      AV1 = obj.H265;
    } else if ("VP8" === formatted) {
      AV1 = obj.VP8;
    } else if ("VP9" === formatted) {
      AV1 = obj.VP9;
    } else {
      if ("AV1" !== formatted) {
        if ("AV1X" !== formatted) {
          AV1 = obj.UNKNOWN;
        }
      }
      AV1 = obj.AV1;
    }
  }
  return AV1;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = [-5069146887281651000000000000000000000000000000000000000000000000000000000000000000, 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000061521245768139, -0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000031370271294886884, -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000039003749655745725, 4432828622934684000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000037835475242167895, 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000061520669613126, 80298912977866030000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000009387430135, 1739628723789689800000000000000000000000000000000000000000000000000000000000000000000000000, 0.014687500000000075];
let closure_10 = [];
let closure_11 = [];
let closure_12 = ["GiftTrollIllocon", "FILE_TYPES_REQUIRED_ADDITIONAL_CHECK", "Ip", "GUILD_DIRECTORY_SEARCH", "GiftTrollIllocon", "FILE_TYPES_REQUIRED_ADDITIONAL_CHECK", "Ip", "GuildSettingsRoleEditSections", "isArray", "getPremiumTypeFromRawValue", "emptyStateImageContainer", "CustomEvent", "PREMIUM_6_MONTH_GUILD", "COLLECTIBLES_SHOP_WIDE_BANNER", null, null, null, null, "CustomEvent", "PREMIUM_6_MONTH_GUILD", "COLLECTIBLES_SHOP_WIDE_BANNER", "GuildSettingsRoleEditSections", "isArray", "GAME_CLAIM", true, true, true, true, true, true];
let obj = { H264: "H264", H265: "H265", VP8: "VP8", VP9: "VP9", AV1: "AV1", UNKNOWN: "UNKNOWN" };
obj = { NVIDIA_CUDA: "nvidia_cuda", NVIDIA_DIRECT_3D: "nvidia_direct_3d", NVIDIA_VULKAN: "nvidia_vulkan", OPENH264: "openh264", VIDEOTOOLBOX: "videotoolbox", AMD_DIRECT_3D: "amd_direct_3d", AMD_VAAPI: "amd_vaapi", INTEL: "intel", INTEL_DIRECT_3D: "intel_direct_3d", INTEL_VAAPI: "intel_vaapi", VP8_LIBVPX: "vp8_libvpx", EXYNOS: "exynos", QUALCOMM: "qualcomm", MEDIATEK: "mediatek", WMF_SW: "wmf_sw", WMF_HW: "wmf_hw", WMF_DIRECT_3D: "wmf_direct_3d", WMF_DIRECT_3D_INTEL: "wmf_direct_3d_intel", WMF_DIRECT_3D_NVIDIA: "wmf_direct_3d_nvidia", WMF_DIRECT_3D_AMD: "wmf_direct_3d_amd", WMF_CHROME: "wmf_chrome", UNCATEGORIZED: "uncategorized", UNKNOWN: "unknown" };
obj = { VIDEOTOOLBOX: "videotoolbox", VP8_LIBVPX: "vp8_libvpx", ELECTRON: "electron", FFMPEG: "ffmpeg", DAV1D: "dav1d", WEBRTC: "WebRTC", EXYNOS: "exynos", QUALCOMM: "qualcomm", MEDIATEK: "mediatek", UNCATEGORIZED: "uncategorized", D3D11VIDEODECODER: "d3d11videodecoder", ANDROID: "android", UNKNOWN: "unknown" };
let closure_16 = Object.freeze({ mediafoundation direct3d intel: obj.WMF_DIRECT_3D_INTEL, mediafoundation direct3d nvidia: obj.WMF_DIRECT_3D_NVIDIA, mediafoundation direct3d amd: obj.WMF_DIRECT_3D_AMD, mediafoundationvideoencodeaccelerator: obj.WMF_CHROME, nvidia: cuda: obj.NVIDIA_CUDA, nvidia: direct3d: obj.NVIDIA_DIRECT_3D, nvidia: vulkan: obj.NVIDIA_VULKAN, amd: direct3d: obj.AMD_DIRECT_3D, amd: vaapi: obj.AMD_VAAPI, intel: direct3d: obj.INTEL_DIRECT_3D, intel: vaapi: obj.INTEL_VAAPI, intel: obj.INTEL, videotoolbox: obj.VIDEOTOOLBOX, openh264: obj.OPENH264, libvpx: obj.VP8_LIBVPX, c2.exynos: obj.EXYNOS, omx.exynos: obj.EXYNOS, c2.qti: obj.QUALCOMM, omx.qcom: obj.QUALCOMM, c2.mtk: obj.MEDIATEK, omx.mtk: obj.MEDIATEK, mediafoundation sw: obj.WMF_SW, mediafoundation hw: obj.WMF_HW, mediafoundation direct3d: obj.WMF_DIRECT_3D });
let closure_17 = Object.freeze({ videotoolbox: obj.VIDEOTOOLBOX, libvpx: obj.VP8_LIBVPX, electron: obj.ELECTRON, ffmpeg: obj.FFMPEG, dav1d: obj.DAV1D, webrtc: obj.WEBRTC, c2.exynos: obj.EXYNOS, omx.exynos: obj.EXYNOS, c2.qti: obj.QUALCOMM, omx.qcom: obj.QUALCOMM, c2.mtk: obj.MEDIATEK, omx.mtk: obj.MEDIATEK, d3d11videodecoder: obj.D3D11VIDEODECODER, c2.android: obj.ANDROID, omx.google: obj.ANDROID });
const obj3 = { None: 0, [0]: "None", ClientSideDisableVideo: 1, [1]: "ClientSideDisableVideo", SenderStopped: 2, [2]: "SenderStopped" };
const tmp3 = () => {
  class InboundStats {
    constructor(arg0) {
      InboundStats = this;
      tmp = closure_7(this, InboundStats);
      values = Object.values(closure_15);
      this.decoderBuckets = Object.fromEntries(values.map((arg0) => {
        const items = [arg0, 0];
        return items;
      }));
      this.codecBuckets = { "Bool(false)": "Text", "Bool(false)": "resizeMode", "Bool(false)": "from", "Bool(false)": "Array", "Bool(false)": "isArray", "Bool(false)": "braintreemasterpasslanding" };
      this.statsWindow = [];
      histogram = new InboundStats(closure_2[6]).Histogram();
      this.fpsHistogram = histogram;
      histogram1 = new InboundStats(closure_2[6]).Histogram();
      this.bitrateHistogram = histogram1;
      histogram2 = new InboundStats(closure_2[6]).Histogram();
      this.inboundBitrateEstimateHistogram = histogram2;
      histogram3 = new InboundStats(closure_2[6]).Histogram();
      this.resolutionHistogram = histogram3;
      histogram4 = new InboundStats(closure_2[6]).Histogram();
      this.localWantHistogram = histogram4;
      tmp7 = closure_1(closure_2[7]);
      tmp7 = new tmp7();
      this.systemResources = tmp7;
      this.decoderCodec = closure_13.UNKNOWN;
      this.aggregatedProperties = { "Bool(true)": 4209, "Bool(true)": 29440, "Bool(true)": 196608, "Bool(true)": 131072, "Bool(true)": 1212219392, 0: 1358955034, 9223372036854775807: -968757770, 9223372036854775807: 1895826111, 9223372036854775807: 1, 9223372036854775807: 29953, 0: 0, 0: 59047936, 9223372036854775807: 0, -9223372036854775808: 0, -9223372036854775808: 7536640, 0: 16777216, 0: 50331648, 9223372036854775807: 1090519040, 0: 70156, 9223372036854775807: 369, -9223372036854775808: 7667968, 0: 0, 9223372036854775807: -1728053248, 0: 335544323, 0: 0, 0: 1929379840, 0: 0, 0: 2, 0: 4, 0: 25997889 };
      this.aggregationDuration = 0;
      this.bitrateBuckets = {};
      this.fpsBuckets = {};
      this.resolutionBuckets = {};
      this.resolutionTotal = 0;
      this.minorResolutionTotal = 0;
      this.majorResolutionTotal = 0;
      this.intervalTotal = 0;
      this.cryptorMaxAttempts = 0;
      this.minWidth = null;
      this.minHeight = null;
      this.maxConsecutiveStaticColorFrames = 0;
      this.videoStoppedReason = closure_18.None;
      this.startTime = arg0.now();
      stopWatch = new InboundStats(closure_2[8]).StopWatch(arg0);
      this.videoStoppedWatch = stopWatch;
      item = closure_9.forEach((arg0) => {
        self.bitrateBuckets[arg0] = 0;
      });
      item1 = closure_10.forEach((arg0) => {
        self.fpsBuckets[arg0] = 0;
      });
      item2 = closure_11.forEach((arg0) => {
        self.resolutionBuckets[arg0] = 0;
      });
      return;
    }
  }
  const arg1 = InboundStats;
  let obj = {
    key: "isVideoStopped",
    get() {
      return this.videoStoppedReason !== closure_18.None;
    }
  };
  const items = [obj, , , , , , , ];
  obj = {
    key: "videoStoppedDuration",
    get() {
      const videoStoppedWatch = this.videoStoppedWatch;
      return videoStoppedWatch.elapsed();
    }
  };
  items[1] = obj;
  obj = {
    key: "collectAggregationStats",
    value(timestamp, timestamp2) {
      const self = this;
      let num = 0;
      if (0 < length.length) {
        do {
          let tmp = arr[num];
          let tmp2 = timestamp[tmp];
          if (null !== tmp2) {
            let tmp3 = timestamp2[tmp];
            let num2 = 0;
            if (null != tmp3) {
              num2 = tmp3;
            }
            let aggregatedProperties = self.aggregatedProperties;
            let diff = tmp2;
            if (num2 <= tmp2) {
              diff = tmp2 - num2;
            }
            aggregatedProperties[tmp] = aggregatedProperties[tmp] + diff;
            let tmp5 = tmp3;
            let tmp6 = num2;
          }
          num = num + 1;
        } while (num < arr.length);
      }
      self.aggregationDuration = self.aggregationDuration + (timestamp.timestamp - timestamp2.timestamp);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "setVideoStopped",
    value(arg0, arg1) {
      const self = this;
      const videoStoppedReason = this.videoStoppedReason;
      if (arg0) {
        self.videoStoppedReason = videoStoppedReason | arg1;
        const videoStoppedWatch2 = self.videoStoppedWatch;
        videoStoppedWatch2.start();
      } else {
        self.videoStoppedReason = videoStoppedReason & ~arg1;
        if (self.videoStoppedReason === closure_18.None) {
          const statsWindow = self.statsWindow;
          statsWindow.splice(0);
          const videoStoppedWatch = self.videoStoppedWatch;
          videoStoppedWatch.stop();
        }
      }
    }
  };
  items[4] = {
    key: "appendAndIncrementStats",
    value(cryptorSuccessCount) {
      let bytes;
      let bytes2;
      let codecType;
      let decoder;
      let encoder;
      let framesCodec;
      let framesCodec2;
      let localWant;
      let resolution;
      let timestamp;
      let timestamp2;
      const self = this;
      const InboundStats = this;
      if (!this.isVideoStopped) {
        const statsWindow = self.statsWindow;
        statsWindow.push(cryptorSuccessCount);
        if (self.statsWindow.length >= 2) {
          const result = self.collectAggregationStats(tmp13, tmp14);
          if (null == self.cryptorFailureBeforeSuccessCount) {
            if (cryptorSuccessCount.cryptorSuccessCount > 0) {
              const cryptorFailureCount = self.aggregatedProperties.cryptorFailureCount;
              let num3 = 0;
              if (null != cryptorFailureCount) {
                num3 = cryptorFailureCount;
              }
              self.cryptorFailureBeforeSuccessCount = num3;
            }
          }
          ({ timestamp, resolution } = self.statsWindow[self.statsWindow.length - 1]);
          ({ encoder, decoder, codecType } = self.statsWindow[self.statsWindow.length - 1]);
          const result1 = (timestamp - tmp14.timestamp) / 1000;
          self.intervalTotal = self.intervalTotal + result1;
          self.resolutionTotal = self.resolutionTotal + resolution * result1;
          self.minorResolutionTotal = self.minorResolutionTotal + self.statsWindow[self.statsWindow.length - 1].minorResolution * result1;
          self.majorResolutionTotal = self.majorResolutionTotal + self.statsWindow[self.statsWindow.length - 1].majorResolution * result1;
          const _Math = Math;
          ({ bytes, framesCodec, localWant } = self.statsWindow[self.statsWindow.length - 1]);
          self.cryptorMaxAttempts = Math.max(self.cryptorMaxAttempts, self.statsWindow[self.statsWindow.length - 1].cryptorMaxAttempts);
          if (null != encoder) {
            if (null != codecType) {
              if ("encoderBuckets" in self) {
                const encoderBuckets = self.encoderBuckets;
                encoderBuckets[encoder] = encoderBuckets[encoder] + result1;
                const codecBuckets = self.codecBuckets;
                codecBuckets[codecType] = codecBuckets[codecType] + result1;
                let tmp4 = null != tmp13.codecType;
                if (tmp4) {
                  tmp4 = tmp13.codecType !== constants.UNKNOWN;
                }
                if (tmp4) {
                  self.encoderCodec = tmp13.codecType;
                }
                let tmp6 = null != cryptorSuccessCount.vmafScore;
                if (tmp6) {
                  tmp6 = cryptorSuccessCount.vmafScore >= 0;
                }
                if (tmp6) {
                  self.vmafScoreNum = self.vmafScoreNum + 1;
                  self.vmafScoreSum = self.vmafScoreSum + cryptorSuccessCount.vmafScore;
                  const vmafHistogram = self.vmafHistogram;
                  vmafHistogram.addSample(cryptorSuccessCount.vmafScore);
                }
                let tmp8 = null != cryptorSuccessCount.psnrDb;
                if (tmp8) {
                  tmp8 = cryptorSuccessCount.psnrDb >= 0;
                }
                if (tmp8) {
                  self.psnrDbNum = self.psnrDbNum + 1;
                  self.psnrDbSum = self.psnrDbSum + cryptorSuccessCount.psnrDb;
                  const psnrHistogram = self.psnrHistogram;
                  psnrHistogram.addSample(cryptorSuccessCount.psnrDb);
                }
                let tmp10 = null != cryptorSuccessCount.outboundSinkWant;
                if (tmp10) {
                  tmp10 = 0 !== cryptorSuccessCount.outboundSinkWant;
                }
                if (tmp10) {
                  self.outboundSinkWantNum = self.outboundSinkWantNum + 1;
                  self.outboundSinkWantSum = self.outboundSinkWantSum + cryptorSuccessCount.outboundSinkWant;
                }
                const _Math2 = Math;
                self.consecutiveStaticColorFramesMax = Math.max(self.consecutiveStaticColorFramesMax, cryptorSuccessCount.consecutiveStaticColorFrames);
              }
            }
          }
          if (null != decoder) {
            if (null != codecType) {
              if ("decoderBuckets" in self) {
                const decoderBuckets = self.decoderBuckets;
                decoderBuckets[decoder] = decoderBuckets[decoder] + result1;
                const codecBuckets2 = self.codecBuckets;
                codecBuckets2[codecType] = codecBuckets2[codecType] + result1;
                let tmp11 = null != tmp13.codecType;
                if (tmp11) {
                  tmp11 = tmp13.codecType !== constants.UNKNOWN;
                }
                if (tmp11) {
                  self.decoderCodec = tmp13.codecType;
                }
              }
            }
          }
          if (self.statsWindow.length >= 6) {
            ({ bytes: bytes2, framesCodec: framesCodec2, timestamp: timestamp2 } = self.statsWindow[self.statsWindow.length - 3]);
            const item = closure_11.forEach((arg0) => {
              if (resolution <= arg0) {
                const resolutionBuckets = self.resolutionBuckets;
                resolutionBuckets[arg0] = resolutionBuckets[arg0] + result1;
              }
            });
            const result2 = (timestamp - timestamp2) / 1000;
            const result3 = 8 * (bytes - bytes2) / result2;
            const result4 = (framesCodec - framesCodec2) / result2;
            const item1 = closure_9.forEach((arg0) => {
              if (result3 <= arg0) {
                const bitrateBuckets = self.bitrateBuckets;
                bitrateBuckets[arg0] = bitrateBuckets[arg0] + result1;
              }
            });
            const item2 = closure_10.forEach((arg0) => {
              if (result4 <= arg0) {
                const fpsBuckets = self.fpsBuckets;
                fpsBuckets[arg0] = fpsBuckets[arg0] + result1;
              }
            });
            const resolutionHistogram = self.resolutionHistogram;
            resolutionHistogram.addSample(resolution);
            const bitrateHistogram = self.bitrateHistogram;
            bitrateHistogram.addSample(result3);
            const fpsHistogram = self.fpsHistogram;
            fpsHistogram.addSample(result4);
            const localWantHistogram = self.localWantHistogram;
            localWantHistogram.addSample(localWant);
            const statsWindow1 = self.statsWindow;
            statsWindow1.shift();
          }
        }
      }
    }
  };
  items[5] = {
    key: "addSystemResources",
    value() {
      const systemResources = this.systemResources;
      systemResources.takeSample();
    }
  };
  items[6] = {
    key: "appendTransportStats",
    value(inboundBitrateEstimate) {
      if (null != inboundBitrateEstimate.inboundBitrateEstimate) {
        const self = this;
        const inboundBitrateEstimateHistogram = this.inboundBitrateEstimateHistogram;
        inboundBitrateEstimateHistogram.addSample(inboundBitrateEstimate.inboundBitrateEstimate);
      }
    }
  };
  items[7] = {
    key: "getCodecsUsed",
    value() {
      const set = new Set();
      const entries = Object.entries(this.codecBuckets);
      for (let num = 0; num < entries.length; num = num + 1) {
        let tmp = callback2;
        let tmp2 = callback2(entries[num], 2);
        if (tmp2[1] > 0) {
          let addResult = set.add(tmp3);
        }
      }
      return set;
    }
  };
  return callback2(InboundStats, items);
}();
const obj1 = { mediafoundation direct3d intel: obj.WMF_DIRECT_3D_INTEL, mediafoundation direct3d nvidia: obj.WMF_DIRECT_3D_NVIDIA, mediafoundation direct3d amd: obj.WMF_DIRECT_3D_AMD, mediafoundationvideoencodeaccelerator: obj.WMF_CHROME, nvidia: cuda: obj.NVIDIA_CUDA, nvidia: direct3d: obj.NVIDIA_DIRECT_3D, nvidia: vulkan: obj.NVIDIA_VULKAN, amd: direct3d: obj.AMD_DIRECT_3D, amd: vaapi: obj.AMD_VAAPI, intel: direct3d: obj.INTEL_DIRECT_3D, intel: vaapi: obj.INTEL_VAAPI, intel: obj.INTEL, videotoolbox: obj.VIDEOTOOLBOX, openh264: obj.OPENH264, libvpx: obj.VP8_LIBVPX, c2.exynos: obj.EXYNOS, omx.exynos: obj.EXYNOS, c2.qti: obj.QUALCOMM, omx.qcom: obj.QUALCOMM, c2.mtk: obj.MEDIATEK, omx.mtk: obj.MEDIATEK, mediafoundation sw: obj.WMF_SW, mediafoundation hw: obj.WMF_HW, mediafoundation direct3d: obj.WMF_DIRECT_3D };
const obj2 = { videotoolbox: obj.VIDEOTOOLBOX, libvpx: obj.VP8_LIBVPX, electron: obj.ELECTRON, ffmpeg: obj.FFMPEG, dav1d: obj.DAV1D, webrtc: obj.WEBRTC, c2.exynos: obj.EXYNOS, omx.exynos: obj.EXYNOS, c2.qti: obj.QUALCOMM, omx.qcom: obj.QUALCOMM, c2.mtk: obj.MEDIATEK, omx.mtk: obj.MEDIATEK, d3d11videodecoder: obj.D3D11VIDEODECODER, c2.android: obj.ANDROID, omx.google: obj.ANDROID };
const tmp2 = () => {
  class RawVideoStats {
    constructor() {
      tmp = closure_7(this, RawVideoStats);
      this.bytes = 0;
      this.framesCodec = 0;
      this.framesCodecError = null;
      this.framesNetwork = 0;
      this.resolution = 0;
      this.minorResolution = 0;
      this.majorResolution = 0;
      this.timestamp = 0;
      this.packets = 0;
      this.packetsLost = 0;
      this.framesDropped = 0;
      this.nackCount = 0;
      this.pliCount = 0;
      this.encoder = null;
      this.decoder = null;
      this.codecType = null;
      this.qpSum = 0;
      this.freezeCount = 0;
      this.pauseCount = 0;
      this.totalFreezesDuration = 0;
      this.totalPausesDuration = 0;
      this.totalFramesDuration = 0;
      this.totalDecodeTime = 0;
      this.vmafScore = null;
      this.psnrDb = null;
      this.outboundSinkWant = null;
      this.keyframes = null;
      this.framesDroppedRateLimiter = null;
      this.framesDroppedEncoderQueue = null;
      this.framesDroppedCongestionWindow = null;
      this.framesDroppedEncoder = null;
      this.passthroughCount = 0;
      this.cryptorSuccessCount = 0;
      this.cryptorFailureCount = 0;
      this.cryptorDuration = 0;
      this.cryptorAttempts = 0;
      this.cryptorMaxAttempts = 0;
      this.cryptorMissingKeyCount = 0;
      this.cryptorInvalidNonceCount = 0;
      this.qualityDecodeErrors = 0;
      this.qualityDecoderReboots = 0;
      this.qualityScoreErrors = 0;
      this.qualityFrameDrops = 0;
      this.qualitySizeMismatches = 0;
      this.localWant = 0;
      this.consecutiveStaticColorFrames = 0;
      this.screenshareFramesUnique = 0;
      return;
    }
  }
  const arg1 = RawVideoStats;
  let obj = {
    key: "parseInboundStats",
    value(resolution, timestamp) {
      let framesDecodeErrors;
      let totalDecodeTime;
      const tmp = new RawVideoStats();
      if (null != resolution) {
        ({ bytesReceived: tmp.bytes, framesDecoded: tmp.framesCodec, framesDecodeErrors } = resolution);
        let tmp2 = null;
        if (null != framesDecodeErrors) {
          tmp2 = framesDecodeErrors;
        }
        tmp.framesCodecError = tmp2;
        ({ framesReceived: tmp.framesNetwork, packetsReceived: tmp.packets, packetsLost: tmp.packetsLost, framesDropped: tmp.framesDropped } = resolution);
        let num2 = 0;
        if (null != resolution.resolution) {
          num2 = resolution.resolution.height;
        }
        tmp.resolution = num2;
        let num3 = 0;
        if (null != resolution.resolution) {
          const _Math = Math;
          num3 = Math.min(resolution.resolution.height, resolution.resolution.width);
        }
        tmp.minorResolution = num3;
        let num4 = 0;
        if (null != resolution.resolution) {
          const _Math2 = Math;
          num4 = Math.max(resolution.resolution.height, resolution.resolution.width);
        }
        tmp.majorResolution = num4;
        tmp.timestamp = timestamp;
        ({ nackCount: tmp.nackCount, pliCount: tmp.pliCount } = resolution);
        tmp.decoder = callback3(resolution.decoderImplementationName);
        tmp.codecType = callback4(resolution.codec.name);
        tmp.qpSum = 0;
        ({ freezeCount: tmp.freezeCount, pauseCount: tmp.pauseCount, totalFreezesDuration: tmp.totalFreezesDuration, totalPausesDuration: tmp.totalPausesDuration, totalFramesDuration: tmp.totalFramesDuration, totalDecodeTime } = resolution);
        let num5 = 0;
        if (null != totalDecodeTime) {
          num5 = totalDecodeTime;
        }
        tmp.totalDecodeTime = num5;
        const keyFramesDecoded = resolution.keyFramesDecoded;
        let tmp8 = null;
        if (null != keyFramesDecoded) {
          tmp8 = keyFramesDecoded;
        }
        tmp.keyframes = tmp8;
        const passthroughCount = resolution.passthroughCount;
        let num6 = 0;
        if (null != passthroughCount) {
          num6 = passthroughCount;
        }
        tmp.passthroughCount = num6;
        const decryptSuccessCount = resolution.decryptSuccessCount;
        let num7 = 0;
        if (null != decryptSuccessCount) {
          num7 = decryptSuccessCount;
        }
        tmp.cryptorSuccessCount = num7;
        const decryptFailureCount = resolution.decryptFailureCount;
        let num8 = 0;
        if (null != decryptFailureCount) {
          num8 = decryptFailureCount;
        }
        tmp.cryptorFailureCount = num8;
        const decryptDuration = resolution.decryptDuration;
        let num9 = 0;
        if (null != decryptDuration) {
          num9 = decryptDuration;
        }
        tmp.cryptorDuration = num9;
        const decryptAttempts = resolution.decryptAttempts;
        let num10 = 0;
        if (null != decryptAttempts) {
          num10 = decryptAttempts;
        }
        tmp.cryptorAttempts = num10;
        const decryptMissingKeyCount = resolution.decryptMissingKeyCount;
        let num11 = 0;
        if (null != decryptMissingKeyCount) {
          num11 = decryptMissingKeyCount;
        }
        tmp.cryptorMissingKeyCount = num11;
        const decryptInvalidNonceCount = resolution.decryptInvalidNonceCount;
        let num12 = 0;
        if (null != decryptInvalidNonceCount) {
          num12 = decryptInvalidNonceCount;
        }
        tmp.cryptorInvalidNonceCount = num12;
        const sinkWantLocalAsInt = resolution.sinkWantLocalAsInt;
        let num13 = 0;
        if (null != sinkWantLocalAsInt) {
          num13 = sinkWantLocalAsInt;
        }
        tmp.localWant = num13;
      }
      return tmp;
    }
  };
  const items = [obj, ];
  obj = {
    key: "parseOutboundStats",
    value(framesSent, timestamp) {
      let freezeCount;
      let packetsLost;
      let tmp = new RawVideoStats();
      if (null != framesSent) {
        const obj = {};
        ({ bytesSent: obj.bytes, framesEncoded: obj.framesCodec } = framesSent);
        obj.framesCodecError = null;
        framesSent = framesSent.framesSent;
        let num = 0;
        if (null != framesSent) {
          num = framesSent;
        }
        obj.framesNetwork = num;
        ({ packetsSent: obj.packets, packetsLost } = framesSent);
        let num2 = 0;
        if (null != packetsLost) {
          num2 = packetsLost;
        }
        obj.packetsLost = num2;
        obj.framesDropped = 0;
        let num3 = 0;
        if (null != framesSent.resolution) {
          num3 = framesSent.resolution.height;
        }
        obj.resolution = num3;
        let num4 = 0;
        if (null != framesSent.resolution) {
          const _Math = Math;
          num4 = Math.min(framesSent.resolution.height, framesSent.resolution.width);
        }
        obj.minorResolution = num4;
        let num5 = 0;
        if (null != framesSent.resolution) {
          const _Math2 = Math;
          num5 = Math.max(framesSent.resolution.height, framesSent.resolution.width);
        }
        obj.majorResolution = num5;
        obj.timestamp = timestamp;
        obj.encoder = callback2(framesSent.encoderImplementationName);
        obj.decoder = null;
        obj.codecType = callback4(framesSent.codec.name);
        ({ nackCount: obj.nackCount, pliCount: obj.pliCount, qpSum: obj.qpSum, freezeCount } = framesSent);
        let num6 = 0;
        if (null != freezeCount) {
          num6 = freezeCount;
        }
        obj.freezeCount = num6;
        obj.pauseCount = 0;
        const totalFreezesDuration = framesSent.totalFreezesDuration;
        let num7 = 0;
        if (null != totalFreezesDuration) {
          num7 = totalFreezesDuration;
        }
        obj.totalFreezesDuration = num7;
        obj.totalPausesDuration = 0;
        const totalFramesDuration = framesSent.totalFramesDuration;
        let num8 = 0;
        if (null != totalFramesDuration) {
          num8 = totalFramesDuration;
        }
        obj.totalFramesDuration = num8;
        obj.totalDecodeTime = 0;
        const sinkWantAsInt = framesSent.sinkWantAsInt;
        let tmp7 = null;
        if (null != sinkWantAsInt) {
          tmp7 = sinkWantAsInt;
        }
        obj.outboundSinkWant = tmp7;
        const encoderQualityVmaf = framesSent.encoderQualityVmaf;
        let tmp8 = null;
        if (null != encoderQualityVmaf) {
          tmp8 = encoderQualityVmaf;
        }
        obj.vmafScore = tmp8;
        const qualityDecodeErrors = framesSent.qualityDecodeErrors;
        let num9 = 0;
        if (null != qualityDecodeErrors) {
          num9 = qualityDecodeErrors;
        }
        obj.qualityDecodeErrors = num9;
        const qualityDecoderReboots = framesSent.qualityDecoderReboots;
        let num10 = 0;
        if (null != qualityDecoderReboots) {
          num10 = qualityDecoderReboots;
        }
        obj.qualityDecoderReboots = num10;
        const qualityScoreErrors = framesSent.qualityScoreErrors;
        let num11 = 0;
        if (null != qualityScoreErrors) {
          num11 = qualityScoreErrors;
        }
        obj.qualityScoreErrors = num11;
        const qualityFrameDrops = framesSent.qualityFrameDrops;
        let num12 = 0;
        if (null != qualityFrameDrops) {
          num12 = qualityFrameDrops;
        }
        obj.qualityFrameDrops = num12;
        const qualitySizeMismatches = framesSent.qualitySizeMismatches;
        let num13 = 0;
        if (null != qualitySizeMismatches) {
          num13 = qualitySizeMismatches;
        }
        obj.qualitySizeMismatches = num13;
        const encoderQualityPsnr = framesSent.encoderQualityPsnr;
        let tmp9 = null;
        if (null != encoderQualityPsnr) {
          tmp9 = encoderQualityPsnr;
        }
        obj.psnrDb = tmp9;
        const keyFramesEncoded = framesSent.keyFramesEncoded;
        let tmp10 = null;
        if (null != keyFramesEncoded) {
          tmp10 = keyFramesEncoded;
        }
        obj.keyframes = tmp10;
        const framesDroppedRateLimiter = framesSent.framesDroppedRateLimiter;
        let tmp11 = null;
        if (null != framesDroppedRateLimiter) {
          tmp11 = framesDroppedRateLimiter;
        }
        obj.framesDroppedRateLimiter = tmp11;
        const framesDroppedEncoderQueue = framesSent.framesDroppedEncoderQueue;
        let tmp12 = null;
        if (null != framesDroppedEncoderQueue) {
          tmp12 = framesDroppedEncoderQueue;
        }
        obj.framesDroppedEncoderQueue = tmp12;
        const framesDroppedCongestionWindow = framesSent.framesDroppedCongestionWindow;
        let tmp13 = null;
        if (null != framesDroppedCongestionWindow) {
          tmp13 = framesDroppedCongestionWindow;
        }
        obj.framesDroppedCongestionWindow = tmp13;
        const framesDroppedEncoder = framesSent.framesDroppedEncoder;
        let tmp14 = null;
        if (null != framesDroppedEncoder) {
          tmp14 = framesDroppedEncoder;
        }
        obj.framesDroppedEncoder = tmp14;
        const passthroughCount = framesSent.passthroughCount;
        let num14 = 0;
        if (null != passthroughCount) {
          num14 = passthroughCount;
        }
        obj.passthroughCount = num14;
        const encryptSuccessCount = framesSent.encryptSuccessCount;
        let num15 = 0;
        if (null != encryptSuccessCount) {
          num15 = encryptSuccessCount;
        }
        obj.cryptorSuccessCount = num15;
        const encryptFailureCount = framesSent.encryptFailureCount;
        let num16 = 0;
        if (null != encryptFailureCount) {
          num16 = encryptFailureCount;
        }
        obj.cryptorFailureCount = num16;
        const encryptDuration = framesSent.encryptDuration;
        let num17 = 0;
        if (null != encryptDuration) {
          num17 = encryptDuration;
        }
        obj.cryptorDuration = num17;
        const encryptAttempts = framesSent.encryptAttempts;
        let num18 = 0;
        if (null != encryptAttempts) {
          num18 = encryptAttempts;
        }
        obj.cryptorAttempts = num18;
        const encryptMaxAttempts = framesSent.encryptMaxAttempts;
        let num19 = 0;
        if (null != encryptMaxAttempts) {
          num19 = encryptMaxAttempts;
        }
        obj.cryptorMaxAttempts = num19;
        const encryptMissingKeyCount = framesSent.encryptMissingKeyCount;
        let num20 = 0;
        if (null != encryptMissingKeyCount) {
          num20 = encryptMissingKeyCount;
        }
        obj.cryptorMissingKeyCount = num20;
        obj.cryptorInvalidNonceCount = 0;
        obj.localWant = 0;
        const consecutiveStaticColorFrames = framesSent.consecutiveStaticColorFrames;
        let num21 = 0;
        if (null != consecutiveStaticColorFrames) {
          num21 = consecutiveStaticColorFrames;
        }
        obj.consecutiveStaticColorFrames = num21;
        obj.screenshareFramesUnique = 0;
        tmp = obj;
      }
      return tmp;
    }
  };
  items[1] = obj;
  return callback2(RawVideoStats, null, items);
}();
const tmp4 = (arg0) => {
  class OutboundStats {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_7(this, OutboundStats);
      items1 = [...items];
      obj = closure_4(OutboundStats);
      tmp2 = closure_3;
      if (closure_19()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_4;
        constructResult = Reflect.construct(obj, items1, closure_4(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      values = Object.values(closure_14);
      tmp2Result.encoderBuckets = Object.fromEntries(values.map((arg0) => {
        const items = [arg0, 0];
        return items;
      }));
      tmp2Result.encoderCodec = closure_13.UNKNOWN;
      tmp2Result.targetFrames = 0;
      tmp2Result.targetBytesMax = 0;
      tmp2Result.targetBytesNetwork = 0;
      histogram = new OutboundStats(closure_2[6]).Histogram();
      tmp2Result.targetBitrateHistogram = histogram;
      tmp2Result.outboundBytesAvailable = 0;
      histogram1 = new OutboundStats(closure_2[6]).Histogram();
      tmp2Result.outboundBandwidthSurplus = histogram1;
      tmp2Result.averageEncodeTime = 0;
      tmp2Result.vmafScoreSum = 0;
      tmp2Result.vmafScoreNum = 0;
      histogram2 = new OutboundStats(closure_2[6]).Histogram();
      tmp2Result.vmafHistogram = histogram2;
      tmp2Result.psnrDbSum = 0;
      tmp2Result.psnrDbNum = 0;
      histogram3 = new OutboundStats(closure_2[6]).Histogram();
      tmp2Result.psnrHistogram = histogram3;
      tmp2Result.qualityDecodeErrors = 0;
      tmp2Result.qualityDecoderReboots = 0;
      tmp2Result.qualityScoreErrors = 0;
      tmp2Result.qualityFrameDrops = 0;
      tmp2Result.qualitySizeMismatches = 0;
      tmp2Result.outboundSinkWantSum = 0;
      tmp2Result.outboundSinkWantNum = 0;
      tmp2Result.framesDroppedRateLimiter = null;
      tmp2Result.framesDroppedEncoderQueue = null;
      tmp2Result.framesDroppedCongestionWindow = null;
      tmp2Result.framesDroppedEncoder = null;
      tmp2Result.consecutiveStaticColorFramesMax = 0;
      return tmp2Result;
    }
  }
  const arg1 = OutboundStats;
  callback(OutboundStats, arg0);
  const items = [
    {
      key: "appendTargetRates",
      value(arg0, arg1, arg2, arg3) {
        const self = this;
        if (this.statsWindow.length >= 2) {
          let num = 0;
          if (null != arg0) {
            num = arg0;
          }
          let num2 = 0;
          if (null != arg1) {
            num2 = arg1;
          }
          let num3 = 0;
          if (null != arg2) {
            num3 = arg2;
          }
          let num4 = 0;
          if (null != arg3) {
            num4 = arg3;
          }
          const result = (self.statsWindow[self.statsWindow.length - 1].timestamp - self.statsWindow[self.statsWindow.length - 2].timestamp) / 1000;
          self.targetFrames = self.targetFrames + num * result;
          self.targetBytesNetwork = self.targetBytesNetwork + num2 / 8 * result;
          self.targetBytesMax = self.targetBytesMax + num3 / 8 * result;
          self.outboundBytesAvailable = self.outboundBytesAvailable + num4 / 8 * result;
          const targetBitrateHistogram = self.targetBitrateHistogram;
          targetBitrateHistogram.addSample(num2);
          const outboundBandwidthSurplus = self.outboundBandwidthSurplus;
          outboundBandwidthSurplus.addSample(num4 - num2);
        }
      }
    }
  ];
  return callback2(OutboundStats, items);
}(tmp3);
const result = arg1(dependencyMap[9]).fileFinishedImporting("lib/VideoQualityStats.tsx");

export const CodecTypes = obj;
export const Encoders = obj;
export const Decoders = obj;
export const VideoStoppedReasons = obj3;
export { parseEncoder };
export { parseDecoder };
export { parseCodecType };
export const RawVideoStats = tmp2;
export const InboundStats = tmp3;
export const OutboundStats = tmp4;
