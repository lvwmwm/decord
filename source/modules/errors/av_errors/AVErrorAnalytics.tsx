// Module ID: 16593
// Function ID: 129349
// Name: getOutboundVideoStats
// Dependencies: [57, 4215, 4199, 4220, 1348, 4177, 4202, 4223, 1906, 4216, 653, 4191, 8896, 4194, 4300, 22, 6983, 10608, 6916, 4124, 675, 2]
// Exports: sendAVErrorAnalyticsEvent

// Module 16593 (getOutboundVideoStats)
import _slicedToArray from "_slicedToArray";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { getSystemAnalyticsInfo } from "getSystemAnalyticsInfo";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import { AnalyticEvents } from "ME";
import DesktopSources from "DesktopSources";

let closure_14;
let closure_15;
const require = arg1;
function getOutboundVideoStats(arg0) {
  const connectionStats = store.getConnectionStats(arg0);
  let tmp2 = null;
  if (null != connectionStats) {
    const outbound = connectionStats.stats.rtp.outbound;
    const found = outbound.find((type) => "video" === type.type);
    let tmp4 = null;
    if (null != found) {
      tmp4 = found;
    }
    tmp2 = tmp4;
  }
  return tmp2;
}
function getInboundVideoStats(arg0, arg1) {
  if (null == arg1) {
    return null;
  } else {
    const connectionStats = store.getConnectionStats(arg0);
    if (null == connectionStats) {
      return null;
    } else {
      let tmp4 = null;
      if (null != connectionStats.stats.rtp.inbound[arg1]) {
        const found = arr.find((type) => "video" === type.type);
        let tmp6 = null;
        if (null != found) {
          tmp6 = found;
        }
        tmp4 = tmp6;
      }
      return tmp4;
    }
  }
}
function getVideoStats(encodeStreamKeyResult) {
  if (encodeStreamKeyResult) {
    let tmp3 = getOutboundVideoStats(arg1);
  } else {
    tmp3 = getInboundVideoStats(arg1, arg2);
  }
  return tmp3;
}
function getLatestOutboundBitrateEstimate(arg0) {
  const connectionStats = store.getConnectionStats(arg0);
  let prop;
  if (null != connectionStats) {
    prop = connectionStats.stats.transport.outboundBitrateEstimate;
  }
  let tmp3 = null;
  if (null != prop) {
    tmp3 = prop;
  }
  return tmp3;
}
function getLatestInboundBitrateEstimate(arg0) {
  const connectionStats = store.getConnectionStats(arg0);
  let prop;
  if (null != connectionStats) {
    prop = connectionStats.stats.transport.inboundBitrateEstimate;
  }
  let tmp3 = null;
  if (null != prop) {
    tmp3 = prop;
  }
  return tmp3;
}
function getCurrentScreenshareCaptureMethod(arg0) {
  const connectionStats = store.getConnectionStats(arg0);
  const lastConnectionStats = store.getLastConnectionStats(arg0);
  if (null != connectionStats) {
    if (null != lastConnectionStats) {
      const obj = {};
      const items = ["videohookFrames", "hybridDxgiFrames", "hybridGdiFrames", "hybridVideohookFrames", "hybridGraphicsCaptureFrames", "hybridGdiBitBltFrames", "hybridGdiPrintWindowFrames", "quartzFrames", "screenCaptureKitFrames"];
      for (let num3 = 0; num3 < items.length; num3 = num3 + 1) {
        let tmp3 = items[num3];
        let screenshare = lastConnectionStats.stats.screenshare;
        let tmp4;
        if (null != screenshare) {
          tmp4 = screenshare[tmp3];
        }
        let num = 0;
        if (null != tmp4) {
          num = tmp4;
        }
        let screenshare2 = connectionStats.stats.screenshare;
        let tmp5;
        if (null != screenshare2) {
          tmp5 = screenshare2[tmp3];
        }
        let num2 = 0;
        if (null != tmp5) {
          num2 = tmp5;
        }
        obj[tmp3] = num2 - num;
      }
      const _Object = Object;
      const entries = Object.entries(obj);
      let num4 = -1;
      let tmp7 = null;
      let num7 = 0;
      let num8 = -1;
      let tmp8 = null;
      if (0 < entries.length) {
        do {
          let tmp9 = callback;
          let tmp10 = callback(entries[num7], 2);
          let tmp12 = tmp10[1];
          if (tmp12 > num4) {
            num4 = tmp12;
            tmp7 = tmp11;
          }
          num7 = num7 + 1;
          num8 = num4;
          tmp8 = tmp7;
        } while (num7 < entries.length);
      }
      let tmp13 = null;
      if (num8 > 0) {
        tmp13 = tmp8;
      }
      return tmp13;
    }
  }
  return null;
}
({ MediaEngineContextTypes: closure_14, SIMULCAST_HQ_QUALITY: closure_15 } = DesktopSources);
const result = require("getSystemAnalyticsInfo").fileFinishedImporting("modules/errors/av_errors/AVErrorAnalytics.tsx");

export const sendAVErrorAnalyticsEvent = function sendAVErrorAnalyticsEvent(error, context) {
  let closure_22;
  let closure_23;
  let closure_24;
  let closure_25;
  let getCurrentScreenshareCaptureMethod;
  let getLatestInboundBitrateEstimate;
  const _require = error;
  errorInfo = _require(errorInfo[12]).getErrorInfo(error);
  let voiceChannelId = videoEncoder.getVoiceChannelId();
  let channelId;
  if ("channelId" in context) {
    channelId = context.channelId;
  }
  let fn = null;
  if (null != channelId) {
    voiceChannelId = channelId;
  }
  let tmp4 = null;
  if (fn != voiceChannelId) {
    tmp4 = voiceChannelId;
  }
  let _slicedToArray = tmp4;
  const channel = errorMessage.getChannel(tmp4);
  let streamKey;
  if ("streamKey" in context) {
    streamKey = context.streamKey;
  }
  let mediaContext;
  if ("mediaContext" in context) {
    mediaContext = context.mediaContext;
  }
  let underlyingError;
  if ("underlyingError" in context) {
    underlyingError = context.underlyingError;
  }
  errorMessage = undefined;
  if ("errorMessage" in context) {
    errorMessage = context.errorMessage;
  }
  let mediaSessionId;
  if ("mediaSessionId" in context) {
    mediaSessionId = context.mediaSessionId;
  }
  let rtcConnectionId;
  if ("rtcConnectionId" in context) {
    rtcConnectionId = context.rtcConnectionId;
  }
  let videoCodec;
  if ("videoCodec" in context) {
    videoCodec = context.videoCodec;
  }
  videoEncoder = undefined;
  if ("videoEncoder" in context) {
    videoEncoder = context.videoEncoder;
  }
  let videoDecoder;
  if ("videoDecoder" in context) {
    videoDecoder = context.videoDecoder;
  }
  let prop;
  if ("audioCaptureSampleRateMismatchPercent" in context) {
    prop = context.audioCaptureSampleRateMismatchPercent;
  }
  let audioInputDeviceName;
  if ("audioInputDeviceName" in context) {
    audioInputDeviceName = context.audioInputDeviceName;
  }
  let prop1;
  if ("audioOutputDeviceName" in context) {
    prop1 = context.audioOutputDeviceName;
  }
  let videoDeviceName;
  if ("videoDeviceName" in context) {
    videoDeviceName = context.videoDeviceName;
  }
  let userId;
  if ("userId" in context) {
    userId = context.userId;
  }
  let decodeStreamKeyResult = null;
  if (fn != streamKey) {
    decodeStreamKeyResult = _require(errorInfo[13]).decodeStreamKey(streamKey);
    const obj2 = _require(errorInfo[13]);
  }
  const getInboundVideoStats = decodeStreamKeyResult;
  let rTCConnection = null;
  if (fn != streamKey) {
    rTCConnection = videoDecoder.getRTCConnection(streamKey);
  }
  let rTCConnection1 = rTCConnection;
  if (fn == streamKey) {
    rTCConnection1 = rtcConnectionId.getRTCConnection();
  }
  let tmp25 = null;
  if (fn != streamKey) {
    let streamApplication;
    if (fn != rTCConnection) {
      let analyticsContext = rTCConnection.analyticsContext;
      if (fn != analyticsContext) {
        streamApplication = analyticsContext.streamApplication;
      }
    }
    tmp25 = streamApplication;
  }
  const state = underlyingError.getState();
  ({ resolution: getLatestInboundBitrateEstimate, fps: getCurrentScreenshareCaptureMethod } = state);
  let obj = _require(errorInfo[12]);
  const runningGameAnalytics = _require(errorInfo[14]).getRunningGameAnalytics(tmp25);
  ({ gameName: closure_22, gameId: closure_23, exe: closure_24, distributor: closure_25 } = runningGameAnalytics);
  const isErrorOutbound = errorInfo.isErrorOutbound;
  if (fn == mediaContext) {
    mediaContext = audioInputDeviceName.DEFAULT;
  }
  if (fn != decodeStreamKeyResult) {
    userId = decodeStreamKeyResult.ownerId;
  }
  if (fn != rTCConnection) {
    let voiceParticipantType;
    if (fn != rTCConnection) {
      voiceParticipantType = rTCConnection.getVoiceParticipantType();
    }
    let str = voiceParticipantType;
  } else {
    str = "receiver";
    if (isErrorOutbound) {
      str = "sender";
    }
  }
  let mediaEngineConnectionId;
  if (fn != rTCConnection1) {
    mediaEngineConnectionId = rTCConnection1.getMediaEngineConnectionId();
  }
  let tmp32 = null;
  if (fn != mediaEngineConnectionId) {
    tmp32 = mediaEngineConnectionId;
  }
  let closure_30 = tmp32;
  if (fn != streamKey) {
    if (fn != decodeStreamKeyResult) {
      let getOutboundStats = fn == rTCConnection1;
      if (isErrorOutbound) {
        let found;
        if (!getOutboundStats) {
          getOutboundStats = rTCConnection1.getOutboundStats;
          rTCConnection1 = getOutboundStats();
          fn = fn == rTCConnection1;
          if (!fn) {
            fn = (quality) => quality.quality === prop1;
            found = rTCConnection1.find(fn);
          }
        }
        let inboundStats = found;
      } else if (!getOutboundStats) {
        inboundStats = rTCConnection1.getInboundStats(decodeStreamKeyResult.ownerId);
      }
    }
  }
  if (isErrorOutbound) {
    let outboundStats;
    if (fn != rTCConnection1) {
      outboundStats = rTCConnection1.getOutboundStats();
    }
    if (fn == outboundStats) {
      outboundStats = [];
    }
    const maxByResult = importDefault(errorInfo[15]).maxBy(outboundStats, (num_frames) => num_frames.num_frames);
    let tmp38 = null;
    if (fn != maxByResult) {
      tmp38 = maxByResult;
    }
    let tmp33 = tmp38;
    let obj4 = importDefault(errorInfo[15]);
  } else {
    tmp33 = null;
    if (fn != userId) {
      let inboundStats1;
      if (fn != rTCConnection1) {
        inboundStats1 = rTCConnection1.getInboundStats(userId);
      }
      tmp33 = inboundStats1;
    }
  }
  importDefault = tmp33;
  const obj3 = _require(errorInfo[14]);
  mediaContext().then((cpu_brand) => {
    const obj = { error_name: error.valueOf(), error_code: errorInfo.errorCode, error_severity: errorInfo.severity, error_category: errorInfo.category };
    cpu_brand = null;
    if (null != underlyingError) {
      cpu_brand = underlyingError;
    }
    obj.underlying_error = cpu_brand;
    let tmp2 = null;
    if (null != errorMessage) {
      tmp2 = errorMessage;
    }
    obj.error_message = tmp2;
    let guild_id;
    if (null != _isNativeReflectConstruct) {
      guild_id = _isNativeReflectConstruct.guild_id;
    }
    let tmp5 = null;
    if (null != guild_id) {
      tmp5 = guild_id;
    }
    obj.guild_id = tmp5;
    let tmp6 = null;
    if (null != _slicedToArray) {
      tmp6 = _slicedToArray;
    }
    obj.channel_id = tmp6;
    let type;
    if (null != _isNativeReflectConstruct) {
      type = _isNativeReflectConstruct.type;
    }
    let tmp9 = null;
    if (null != type) {
      tmp9 = type;
    }
    obj.channel_type = tmp9;
    let tmp10 = null;
    if (null != rtcConnectionId) {
      tmp10 = rtcConnectionId;
    }
    obj.rtc_connection_id = tmp10;
    if (null == mediaSessionId) {
      mediaSessionId = rtcConnectionId.getMediaSessionId();
    }
    let tmp13 = null;
    if (null != mediaSessionId) {
      tmp13 = mediaSessionId;
    }
    obj.media_session_id = tmp13;
    let parentMediaSessionId;
    if (null != rTCConnection) {
      parentMediaSessionId = rTCConnection.parentMediaSessionId;
    }
    let tmp16 = null;
    if (null != parentMediaSessionId) {
      tmp16 = parentMediaSessionId;
    }
    obj.parent_media_session_id = tmp16;
    let tmp17 = null;
    if (null != mediaContext) {
      tmp17 = mediaContext;
    }
    obj.context = tmp17;
    rTCConnection = rtcConnectionId.getRTCConnection();
    let voiceVersion;
    if (null != rTCConnection) {
      voiceVersion = rTCConnection.getVoiceVersion();
    }
    let tmp19 = null;
    if (null != voiceVersion) {
      tmp19 = voiceVersion;
    }
    obj.voice_backend_version = tmp19;
    const rTCConnection1 = rtcConnectionId.getRTCConnection();
    let rtcWorkerVersion;
    if (null != rTCConnection1) {
      rtcWorkerVersion = rTCConnection1.getRtcWorkerVersion();
    }
    let tmp21 = null;
    if (null != rtcWorkerVersion) {
      tmp21 = rtcWorkerVersion;
    }
    obj.rtc_worker_backend_version = tmp21;
    const region = videoCodec.getRegion(rtcConnectionId.getHostname());
    let tmp23 = null;
    if (null != region) {
      tmp23 = region;
    }
    obj.guild_region = tmp23;
    const hostname = rtcConnectionId.getHostname();
    let tmp25 = null;
    if (null != hostname) {
      tmp25 = hostname;
    }
    obj.hostname = tmp25;
    let durationSeconds;
    if (null != rTCConnection1) {
      durationSeconds = rTCConnection1.getDurationSeconds();
    }
    let tmp28 = null;
    if (null != durationSeconds) {
      tmp28 = durationSeconds;
    }
    obj.duration = tmp28;
    let tmp29 = null;
    if (null != str) {
      tmp29 = str;
    }
    obj.participant_type = tmp29;
    let num_frames;
    if (null != tmp33) {
      num_frames = tmp33.num_frames;
    }
    let num = 0;
    if (null != num_frames) {
      num = num_frames;
    }
    obj.num_frames = num;
    let num_packets;
    if (null != tmp33) {
      num_packets = tmp33.num_packets;
    }
    let num2 = 0;
    if (null != num_packets) {
      num2 = num_packets;
    }
    obj.num_packets = num2;
    let num_bytes;
    if (null != tmp33) {
      num_bytes = tmp33.num_bytes;
    }
    let num3 = 0;
    if (null != num_bytes) {
      num3 = num_bytes;
    }
    obj.num_bytes = num3;
    tmp33 = rTCConnection(isErrorOutbound, closure_30, userId);
    let packetsLost;
    if (null != tmp33) {
      packetsLost = tmp33.packetsLost;
    }
    let num4 = 0;
    if (null != packetsLost) {
      num4 = packetsLost;
    }
    obj.num_packets_lost = num4;
    if (null != videoCodec) {
      let parseCodecTypeResult = videoCodec;
    } else {
      const tmp41 = rTCConnection(isErrorOutbound, closure_30, userId);
      let name;
      if (null != tmp41) {
        name = tmp41.codec.name;
      }
      parseCodecTypeResult = error(errorInfo[16]).parseCodecType(name);
      const obj4 = error(errorInfo[16]);
    }
    let tmp44 = null;
    if (null != parseCodecTypeResult) {
      tmp44 = parseCodecTypeResult;
    }
    obj.video_codec = tmp44;
    if (null != videoEncoder) {
      let parseEncoderResult = videoEncoder;
    } else {
      const tmp49 = videoDeviceName(closure_30);
      let prop;
      if (null != tmp49) {
        prop = tmp49.encoderImplementationName;
      }
      parseEncoderResult = error(errorInfo[16]).parseEncoder(prop);
      const obj5 = error(errorInfo[16]);
    }
    let tmp52 = null;
    if (null != parseEncoderResult) {
      tmp52 = parseEncoderResult;
    }
    obj.video_encoder = tmp52;
    if (null != videoDecoder) {
      let parseDecoderResult = videoDecoder;
    } else {
      const tmp58 = decodeStreamKeyResult(closure_30, userId);
      let prop1;
      if (null != tmp58) {
        prop1 = tmp58.decoderImplementationName;
      }
      parseDecoderResult = error(errorInfo[16]).parseDecoder(prop1);
      const obj6 = error(errorInfo[16]);
    }
    let tmp61 = null;
    if (null != parseDecoderResult) {
      tmp61 = parseDecoderResult;
    }
    obj.video_decoder = tmp61;
    let tmp62 = null;
    if (null != prop) {
      tmp62 = prop;
    }
    obj.audio_capture_sample_rate_mismatch_percent = tmp62;
    const WindowVisibilityVideoManager = error(errorInfo[17]).WindowVisibilityVideoManager;
    obj.incoming_video_stopped_for_occlusion = !WindowVisibilityVideoManager.isIncomingVideoEnabled();
    const tmp63 = rTCConnection(isErrorOutbound, closure_30, userId);
    let bitrate;
    if (null != tmp63) {
      bitrate = tmp63.bitrate;
    }
    let tmp65 = null;
    if (null != bitrate) {
      tmp65 = bitrate;
    }
    obj.bitrate = tmp65;
    let tmp66 = null;
    if (isErrorOutbound) {
      const tmp69 = videoDeviceName(closure_30);
      let bitrateTarget;
      if (null != tmp69) {
        bitrateTarget = tmp69.bitrateTarget;
      }
      tmp66 = null;
      if (null != bitrateTarget) {
        tmp66 = bitrateTarget;
      }
    }
    obj.target_bitrate = tmp66;
    if (isErrorOutbound) {
      const tmp78 = videoDeviceName(tmp71);
      let frameRateEncode;
      if (null != tmp78) {
        frameRateEncode = tmp78.frameRateEncode;
      }
      let tmp80 = null;
      if (null != frameRateEncode) {
        tmp80 = frameRateEncode;
      }
      let tmp76 = tmp80;
    } else {
      const tmp74 = decodeStreamKeyResult(tmp71, tmp72);
      let frameRateDecode;
      if (null != tmp74) {
        frameRateDecode = tmp74.frameRateDecode;
      }
      tmp76 = null;
      if (null != frameRateDecode) {
        tmp76 = frameRateDecode;
      }
    }
    let tmp81 = null;
    if (null != tmp76) {
      tmp81 = tmp76;
    }
    obj.fps = tmp81;
    let tmp82 = null;
    if (mediaContext === audioInputDeviceName.STREAM) {
      tmp82 = null;
      if (isErrorOutbound) {
        tmp82 = closure_21;
      }
    }
    obj.target_fps = tmp82;
    let ownerId;
    if (null != decodeStreamKeyResult) {
      ownerId = decodeStreamKeyResult.ownerId;
    }
    let tmp86 = null;
    if (null != ownerId) {
      tmp86 = ownerId;
    }
    obj.sender_user_id = tmp86;
    let region1;
    if (null != rTCConnection) {
      region1 = rTCConnection.getRegion();
    }
    let tmp89 = null;
    if (null != region1) {
      tmp89 = region1;
    }
    obj.stream_region = tmp89;
    let tmp90 = null;
    if (isErrorOutbound) {
      let streamSourceType;
      if (null != rTCConnection) {
        const analyticsContext = rTCConnection.analyticsContext;
        if (null != analyticsContext) {
          streamSourceType = analyticsContext.streamSourceType;
        }
      }
      tmp90 = null;
      if (null != streamSourceType) {
        tmp90 = streamSourceType;
      }
    }
    obj.stream_source_type = tmp90;
    let numViewers;
    if (null != rTCConnection) {
      const analyticsContext2 = rTCConnection.analyticsContext;
      if (null != analyticsContext2) {
        numViewers = analyticsContext2.numViewers;
      }
    }
    let tmp96 = null;
    if (null != numViewers) {
      tmp96 = numViewers;
    }
    obj.num_stream_viewers = tmp96;
    let tmp97 = null;
    if (isErrorOutbound) {
      tmp97 = null;
      if (null != closure_20) {
        tmp97 = closure_20;
      }
    }
    obj.video_input_resolution_height = tmp97;
    let tmp99 = null;
    if (isErrorOutbound) {
      cpu_brand = closure_21;
      tmp99 = null;
      if (null != closure_21) {
        tmp99 = closure_21;
      }
    }
    obj.video_input_frame_rate = tmp99;
    obj.screenshare_capture_method = outer1_21(closure_30);
    cpu_brand = null;
    if (null != closure_22) {
      cpu_brand = closure_22;
    }
    obj.share_application_name = cpu_brand;
    cpu_brand = null;
    if (null != closure_23) {
      cpu_brand = closure_23;
    }
    obj.share_application_id = cpu_brand;
    cpu_brand = null;
    if (null != closure_24) {
      cpu_brand = closure_24;
    }
    obj.share_application_executable = cpu_brand;
    cpu_brand = null;
    if (null != closure_25) {
      cpu_brand = closure_25;
    }
    obj.share_application_distributor = cpu_brand;
    cpu_brand = undefined;
    if (null != cpu_brand) {
      cpu_brand = cpu_brand.cpu_brand;
    }
    cpu_brand = null;
    obj.cpu_brand = cpu_brand;
    cpu_brand = undefined;
    if (null != cpu_brand) {
      cpu_brand = cpu_brand.cpu_vendor;
    }
    cpu_brand = null;
    obj.cpu_vendor = cpu_brand;
    cpu_brand = undefined;
    if (null != cpu_brand) {
      cpu_brand = cpu_brand.cpu_memory;
    }
    cpu_brand = null;
    obj.cpu_memory = cpu_brand;
    cpu_brand = undefined;
    if (null != cpu_brand) {
      cpu_brand = cpu_brand.gpu_brand;
    }
    cpu_brand = null;
    obj.gpu_brand = cpu_brand;
    cpu_brand = undefined;
    if (null != cpu_brand) {
      cpu_brand = cpu_brand.gpu_count;
    }
    cpu_brand = null;
    obj.gpu_count = cpu_brand;
    cpu_brand = undefined;
    if (null != cpu_brand) {
      cpu_brand = cpu_brand.gpu_memory;
    }
    cpu_brand = null;
    obj.gpu_memory = cpu_brand;
    cpu_brand = undefined;
    if (null != cpu_brand) {
      cpu_brand = cpu_brand.gpu_device_vendor_id;
    }
    cpu_brand = null;
    obj.gpu_device_vendor_id = cpu_brand;
    cpu_brand = undefined;
    if (null != cpu_brand) {
      cpu_brand = cpu_brand.gpu_device_device_id;
    }
    cpu_brand = null;
    obj.gpu_device_device_id = cpu_brand;
    cpu_brand = undefined;
    if (null != cpu_brand) {
      cpu_brand = cpu_brand.gpu_device_sub_sys_id;
    }
    cpu_brand = null;
    obj.gpu_device_sub_sys_id = cpu_brand;
    cpu_brand = undefined;
    if (null != cpu_brand) {
      cpu_brand = cpu_brand.gpu_device_revision;
    }
    cpu_brand = null;
    obj.gpu_device_revision = cpu_brand;
    cpu_brand = undefined;
    if (null != cpu_brand) {
      cpu_brand = cpu_brand.gpu_driver_version;
    }
    cpu_brand = null;
    obj.gpu_driver_version = cpu_brand;
    cpu_brand = tmp33(errorInfo[18]).getCurrentCPUUsagePercent();
    cpu_brand = null;
    obj.cpu_usage = cpu_brand;
    const obj7 = tmp33(errorInfo[18]);
    cpu_brand = tmp33(errorInfo[18]).getCurrentMemoryUsageKB();
    cpu_brand = null;
    obj.memory_usage = cpu_brand;
    obj.outbound_bitrate_estimate = rTCConnection1(closure_30);
    obj.inbound_bitrate_estimate = outer1_20(closure_30);
    obj.hardware_enabled = mediaSessionId.getHardwareEncoding();
    if (null != audioInputDeviceName) {
      name = audioInputDeviceName;
    } else {
      cpu_brand = mediaSessionId;
      cpu_brand = mediaSessionId.getInputDevices();
      cpu_brand = cpu_brand[mediaSessionId.getInputDeviceId(mediaSessionId)];
      if (null != cpu_brand) {
        name = cpu_brand.name;
      }
    }
    obj.audio_input_device_name = name;
    if (null != prop1) {
      let name2 = prop1;
    } else {
      cpu_brand = mediaSessionId;
      cpu_brand = mediaSessionId.getOutputDevices();
      cpu_brand = cpu_brand[mediaSessionId.getOutputDeviceId(mediaSessionId)];
      if (null != cpu_brand) {
        name2 = cpu_brand.name;
      }
    }
    obj.audio_output_device_name = name2;
    if (null != videoDeviceName) {
      let name3 = videoDeviceName;
    } else {
      cpu_brand = mediaSessionId;
      cpu_brand = mediaSessionId.getVideoDevices();
      cpu_brand = cpu_brand[mediaSessionId.getVideoDeviceId(mediaSessionId)];
      if (null != cpu_brand) {
        name3 = cpu_brand.name;
      }
    }
    obj.video_device_name = name3;
    const mediaEngine = mediaSessionId.getMediaEngine();
    obj.audio_subsystem = mediaEngine.getAudioSubsystem();
    obj.automatic_audio_subsystem = mediaSessionId.getSettings().automaticAudioSubsystem;
    const mediaEngine1 = mediaSessionId.getMediaEngine();
    obj.audio_layer = mediaEngine1.getAudioLayer();
    obj.audio_input_mode = mediaSessionId.getSettings().mode;
    obj.automatic_audio_input_sensitivity_enabled = mediaSessionId.getSettings().modeOptions.autoThreshold;
    obj.audio_input_sensitivity = mediaSessionId.getSettings().modeOptions.threshold;
    obj.echo_cancellation_enabled = mediaSessionId.getEchoCancellation();
    obj.noise_suppression_enabled = mediaSessionId.getNoiseSuppression();
    obj.noise_cancellation_enabled = mediaSessionId.getNoiseCancellation();
    obj.automatic_gain_control_enabled = mediaSessionId.getAutomaticGainControl();
    obj.sidechain_compression_enabled = mediaSessionId.getSidechainCompression();
    obj.input_volume = mediaSessionId.getInputVolume();
    obj.output_volume = mediaSessionId.getOutputVolume();
    obj.audio_input_device_count = Object.keys(mediaSessionId.getInputDevices()).length;
    obj.audio_output_device_count = Object.keys(mediaSessionId.getOutputDevices()).length;
    const obj8 = tmp33(errorInfo[18]);
    obj.app_hardware_acceleration_enabled = tmp33(errorInfo[19]).getAppHardwareAccelerationEnabled();
    cpu_brand = mediaSessionId.getInputDeviceOSMuted();
    cpu_brand = null;
    obj.input_device_os_muted = cpu_brand;
    cpu_brand = mediaSessionId.getInputDeviceOSVolume();
    cpu_brand = null;
    obj.input_device_os_volume = cpu_brand;
    const obj11 = tmp33(errorInfo[19]);
    cpu_brand = tmp33(errorInfo[20]).track(prop.AV_ERROR_REPORTED, obj);
  });
};
