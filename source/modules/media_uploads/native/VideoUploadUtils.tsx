// Module ID: 4697
// Function ID: 40914
// Name: calculateTargetDimensions
// Dependencies: [6, 7, 1280, 3, 2]
// Exports: calculateOptimalBitrate, canSkipVideoTranscode, logEncoderSettings, logSourceMetadata, shouldUseHEVC

// Module 4697 (calculateTargetDimensions)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";
import { VideoCompressionQuality } from "_isNativeReflectConstruct";
import importDefaultResult from "timestamp";

function calculateTargetDimensions(videoMetadata, targetResolution) {
  const result = videoMetadata.width / videoMetadata.height;
  if (videoMetadata.width > videoMetadata.height) {
    const _Math3 = Math;
    const bound = Math.min(targetResolution, videoMetadata.height);
    const _Math4 = Math;
    let rounded = Math.round(bound * result);
    let rounded1 = bound;
  } else {
    const _Math = Math;
    const bound1 = Math.min(targetResolution, videoMetadata.width);
    const _Math2 = Math;
    rounded = bound1;
    rounded1 = Math.round(bound1 / result);
  }
  const obj = {};
  let sum = rounded;
  if (rounded % 2 !== 0) {
    sum = rounded + 1;
  }
  obj.width = sum;
  let sum1 = rounded1;
  if (rounded1 % 2 !== 0) {
    sum1 = rounded1 + 1;
  }
  obj.height = sum1;
  return obj;
}
importDefaultResult = new importDefaultResult("VideoUploadUtils.tsx");
let tmp4 = (() => {
  class VideoQualityTarget {
    constructor(arg0, arg1, arg2) {
      tmp = outer1_1(this, VideoQualityTarget);
      this.value = arg0;
      this.targetResolution = arg1;
      this.targetBitrate = arg2;
      return;
    }
  }
  const items = [
    {
      key: "toString",
      value() {
        return this.value;
      }
    }
  ];
  return callback(VideoQualityTarget, items);
})();
let closure_0 = tmp4;
tmp4 = new tmp4("very_low", 360, 800000);
tmp4.VERY_LOW = tmp4;
tmp4 = new tmp4("low", 360, 1200000);
tmp4.LOW = tmp4;
tmp4.MEDIUM = new tmp4("medium", 480, 1800000);
const tmp41 = new tmp4("medium", 480, 1800000);
tmp4.HIGH = new tmp4("high", 720, 2250000);
const tmp42 = new tmp4("high", 720, 2250000);
tmp4.VERY_HIGH = new tmp4("very_high", 1080, 7000000);
tmp4.fromCompressionQuality = (arg0) => {
  if (VideoCompressionQuality.VERY_LOW === arg0) {
    let VERY_HIGH = tmp4.VERY_LOW;
  } else if (VideoCompressionQuality.LOW === arg0) {
    VERY_HIGH = tmp4.LOW;
  } else if (VideoCompressionQuality.MEDIUM === arg0) {
    VERY_HIGH = tmp4.MEDIUM;
  } else if (VideoCompressionQuality.HIGH === arg0) {
    VERY_HIGH = tmp4.HIGH;
  } else if (VideoCompressionQuality.VERY_HIGH === arg0) {
    VERY_HIGH = tmp4.VERY_HIGH;
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("Unknown compression quality: " + arg0);
    throw error;
  }
  return VERY_HIGH;
};
let obj = { bitrateFloor: 300000, createHDR: false, frameRate: 30, keyFrameIntervalSeconds: 2, rotationDegrees: 0, skipVideoTranscode: false, targetBitrate: tmp4.MEDIUM.targetBitrate, targetHeight: 480, targetWidth: 640, useHEVC: false, videoQuality: tmp4.MEDIUM, hevcIsSupported: false, useTranscodedVideoForMovSources: true, transmuxLivePhotos: true, progressUpdateGranularity: 10 };
const tmp43 = new tmp4("very_high", 1080, 7000000);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/media_uploads/native/VideoUploadUtils.tsx");

export const VideoQualityTarget = tmp4;
export const DEFAULT_VIDEO_ENCODING_CONFIG = obj;
export { calculateTargetDimensions };
export const canSkipVideoTranscode = function canSkipVideoTranscode(result, videoMetadata, fileSize, arg3) {
  if (null != fileSize) {
    if (null != arg3) {
      if (fileSize > arg3) {
        return false;
      }
    }
  }
  const size = calculateTargetDimensions(videoMetadata, result.targetResolution);
  const rounded = Math.round(videoMetadata.width);
  let tmp4 = !tmp3;
  if (rounded <= size.width && tmp2 <= size.height) {
    tmp4 = videoMetadata.bitRate > result.targetBitrate;
  }
  if (!tmp4) {
    tmp4 = null == videoMetadata.format;
  }
  if (!tmp4) {
    tmp4 = null === videoMetadata.format.match(/(avc1|hvc1|video\/(avc|hevc))/i);
    const str = videoMetadata.format;
  }
  return !tmp4;
};
export const logSourceMetadata = function logSourceMetadata(format) {
  let str = "unknown";
  if (null != format.format) {
    format = { hvc1: "hvc1 (HEVC)", avc1: "avc1 (H.264)" }[format.format];
    if (null == format) {
      format = format.format;
    }
    str = format;
  }
  importDefaultResult.info("Video Source Metadata:");
  importDefaultResult.info("- Codec: " + str);
  importDefaultResult.info("- Dimensions: " + format.width + "x" + format.height);
  importDefaultResult.info("- Bitrate: " + format.bitRate + " bps");
  importDefaultResult.info("- Frame Rate: " + format.frameRate + " fps");
  let str2 = "No";
  if (format.isHDRContent) {
    str2 = "Yes";
  }
  importDefaultResult.info(`- HDR: ${str2}`);
  importDefaultResult.info("- Rotation Degrees: " + format.rotationDegrees);
  importDefaultResult.info("- Profile: " + format.sourceProfile);
  importDefaultResult.info("- Level: " + format.sourceLevel);
  importDefaultResult.info("- Duration: " + format.durationMs + " ms");
};
export const logEncoderSettings = function logEncoderSettings(videoQuality) {
  importDefaultResult.info("Encoder Video Quality Settings:");
  let str = videoQuality.videoQuality;
  str = undefined;
  if (null != str) {
    str = str.toString();
  }
  importDefaultResult.info("- Compression Quality: " + str);
  videoQuality = videoQuality.videoQuality;
  let targetResolution;
  if (null != videoQuality) {
    targetResolution = videoQuality.targetResolution;
  }
  importDefaultResult.info("- Compression Quality Target Resolution: " + targetResolution + "p");
  const videoQuality2 = videoQuality.videoQuality;
  let targetBitrate;
  if (null != videoQuality2) {
    targetBitrate = videoQuality2.targetBitrate;
  }
  importDefaultResult.info("- Compression Quality Max Bitrate: " + targetBitrate + " bps");
  importDefaultResult.info("Encoder Video Transcoding Settings:");
  const info = importDefaultResult.info;
  if (videoQuality.skipVideoTranscode) {
    info("- Skip Video Transcode: Yes");
  } else {
    let str2 = "avc1 (H.264)";
    if (videoQuality.useHEVC) {
      str2 = "hvc1 (HEVC)";
    }
    info(`- Codec: ${str2}`);
    const _HermesInternal = HermesInternal;
    importDefaultResult.info("- Dimensions: " + videoQuality.targetWidth + "x" + videoQuality.targetHeight);
    const _HermesInternal2 = HermesInternal;
    importDefaultResult.info("- Bitrate: " + videoQuality.targetBitrate + " bps");
    const _HermesInternal3 = HermesInternal;
    importDefaultResult.info("- Frame Rate: " + videoQuality.frameRate + " fps");
    const _HermesInternal4 = HermesInternal;
    importDefaultResult.info("- Key Frame Interval: " + videoQuality.keyFrameIntervalSeconds + " seconds");
    let str11 = "No";
    let str12 = "No";
    if (videoQuality.createHDR) {
      str12 = "Yes";
    }
    importDefaultResult.info(`- Create HDR: ${str12}`);
    const _HermesInternal5 = HermesInternal;
    importDefaultResult.info("- Rotation Degrees: " + videoQuality.rotationDegrees);
    if (videoQuality.hevcIsSupported) {
      str11 = "Yes";
    }
    importDefaultResult.info(`- HEVC Supported: ${str11}`);
    const _HermesInternal6 = HermesInternal;
    importDefaultResult.info("- Progress Update Granularity: " + videoQuality.progressUpdateGranularity);
  }
};
export const calculateOptimalBitrate = function calculateOptimalBitrate(videoMetadata, result, bitrateFloor) {
  return Math.min(Math.max(videoMetadata.bitRate, bitrateFloor), result.targetBitrate);
};
export const shouldUseHEVC = function shouldUseHEVC(rotationDegrees) {
  let tmp = arg3;
  let tmp2 = !arg1;
  if (!tmp2) {
    tmp2 = !arg2;
  }
  let tmp4 = !tmp2;
  if (!tmp2) {
    if (tmp) {
      tmp = 0 !== rotationDegrees.rotationDegrees;
    }
    if (tmp) {
      tmp = !arg4;
    }
    tmp4 = !tmp;
  }
  return tmp4;
};
