// Module ID: 8849
// Function ID: 69840
// Name: validateUniqueErrorCodes
// Dependencies: []
// Exports: getErrorInfo, reportAVError

// Module 8849 (validateUniqueErrorCodes)
let closure_2 = ["gradientTransform"];
let closure_3 = importDefault(dependencyMap[0]);
let importDefaultResult = importDefault(dependencyMap[1]);
importDefaultResult = new importDefaultResult("AVError");
let obj = { STREAM_FAILED_TO_START: "stream-failed-to-start", NO_INPUT_DEVICES: "no-input-devices", NO_AUDIO_INPUT_DETECTED: "no-audio-input-detected", DEBUG_LOG_UPLOAD_FAILED: "debug-log-upload-failed", STREAM_VIEW_LOW_FPS: "stream-view-low-fps", STREAM_VIEW_HIGH_PACKET_LOSS: "stream-view-high-packet-loss", STREAM_SEND_LOW_FPS: "stream-send-low-encode-fps", STREAM_SEND_HIGH_PACKET_LOSS: "stream-send-high-packet-loss", STREAM_BAD_NETWORK_QUALITY: "stream-send-network-quality", STREAM_SOUNDSHARE_FAILED: "stream-soundshare-failed", NOISE_CANCELLER_ERROR: "noise-canceller-error", SCREENSHARE_OS_NOT_SUPPORTED: "screenshare-min-os-requirement", STREAM_RECONNECTING: "stream-reconnecting", VIDEO_DECODE_ERROR: "video-decode-error", VIDEO_ENCODE_ERROR: "video-encode-error", STREAM_FULL: "stream-full", AUDIO_CAPTURE_SAMPLE_RATE_MISMATCH: "audio-capture-sample-rate-mismatch", VIDEO_STREAM_SENDER_READY_TIMEOUT: "video-stream-sender-ready-timeout", VIDEO_STREAM_RECEIVER_READY_TIMEOUT: "video-stream-receiver-ready-timeout", VIDEO_STREAM_SENDER_READY_TIMEOUT_NO_STREAM: "video-stream-sender-ready-timeout-no-stream", VIDEO_STREAM_RECEIVER_READY_TIMEOUT_NO_STREAM: "video-stream-receiver-ready-timeout-no-stream", CAMERA_SEND_LOW_FPS: "camera-send-low-encode-fps", SCREENSHARE_OS_ERROR: "screenshare-os-error", VIDEO_BACKGROUND_UNAVAILABLE: "video-background-unavailable" };
obj = { Audio: "audio", Video: "video", Devices: "devices", Debug: "debug" };
obj = { Critical: "critical", Warning: "warning", Info: "info" };
let closure_5 = { [obj.STREAM_SOUNDSHARE_FAILED]: { errorCode: 1001, severity: obj.Warning, category: obj.Audio, isErrorOutbound: true }, [obj.NOISE_CANCELLER_ERROR]: { errorCode: 1002, severity: obj.Warning, category: obj.Audio, isErrorOutbound: true }, [obj.AUDIO_CAPTURE_SAMPLE_RATE_MISMATCH]: { errorCode: 1003, severity: obj.Warning, category: obj.Audio, isErrorOutbound: true }, [obj.STREAM_FAILED_TO_START]: { errorCode: 2001, severity: obj.Critical, category: obj.Video, isErrorOutbound: true }, [obj.STREAM_VIEW_LOW_FPS]: { errorCode: 2002, severity: obj.Warning, category: obj.Video, isErrorOutbound: false }, [obj.STREAM_VIEW_HIGH_PACKET_LOSS]: { errorCode: 2003, severity: obj.Warning, category: obj.Video, isErrorOutbound: false }, [obj.STREAM_SEND_HIGH_PACKET_LOSS]: { errorCode: 2004, severity: obj.Warning, category: obj.Video, isErrorOutbound: true }, [obj.STREAM_SEND_LOW_FPS]: { errorCode: 2005, severity: obj.Warning, category: obj.Video, isErrorOutbound: true }, [obj.STREAM_BAD_NETWORK_QUALITY]: { errorCode: 2006, severity: obj.Warning, category: obj.Video, isErrorOutbound: true }, [obj.STREAM_RECONNECTING]: { errorCode: 2007, severity: obj.Warning, category: obj.Video, isErrorOutbound: false }, [obj.VIDEO_DECODE_ERROR]: { errorCode: 2008, severity: obj.Warning, category: obj.Video, isErrorOutbound: false }, [obj.VIDEO_ENCODE_ERROR]: { errorCode: 2009, severity: obj.Warning, category: obj.Video, isErrorOutbound: true }, [obj.STREAM_FULL]: { errorCode: 2010, severity: obj.Critical, category: obj.Video, isErrorOutbound: false }, [obj.VIDEO_STREAM_SENDER_READY_TIMEOUT]: { errorCode: 2011, severity: obj.Critical, category: obj.Video, isErrorOutbound: true }, [obj.VIDEO_STREAM_RECEIVER_READY_TIMEOUT]: { errorCode: 2012, severity: obj.Critical, category: obj.Video, isErrorOutbound: false }, [obj.CAMERA_SEND_LOW_FPS]: { errorCode: 2013, severity: obj.Warning, category: obj.Video, isErrorOutbound: true }, [obj.VIDEO_STREAM_SENDER_READY_TIMEOUT_NO_STREAM]: { errorCode: 2014, severity: obj.Critical, category: obj.Video, isErrorOutbound: true }, [obj.VIDEO_STREAM_RECEIVER_READY_TIMEOUT_NO_STREAM]: { errorCode: 2015, severity: obj.Critical, category: obj.Video, isErrorOutbound: false }, [obj.VIDEO_BACKGROUND_UNAVAILABLE]: { errorCode: 2016, severity: obj.Warning, category: obj.Video, isErrorOutbound: true }, [obj.NO_INPUT_DEVICES]: { errorCode: 3001, severity: obj.Critical, category: obj.Devices, isErrorOutbound: true }, [obj.NO_AUDIO_INPUT_DETECTED]: { errorCode: 3002, severity: obj.Critical, category: obj.Devices, isErrorOutbound: true }, [obj.SCREENSHARE_OS_NOT_SUPPORTED]: { errorCode: 3003, severity: obj.Critical, category: obj.Devices, isErrorOutbound: true }, [obj.SCREENSHARE_OS_ERROR]: { errorCode: 3004, severity: obj.Critical, category: obj.Devices, isErrorOutbound: true }, [obj.DEBUG_LOG_UPLOAD_FAILED]: { errorCode: 4001, severity: obj.Info, category: obj.Debug, isErrorOutbound: true } };
function validateUniqueErrorCodes() {
  const values = Object.values(closure_5);
  const mapped = values.map((errorCode) => errorCode.errorCode);
  const importDefault = mapped;
  if (mapped.length !== set.size) {
    let closure_1 = mapped.filter((arg0, arg1) => mapped.indexOf(arg0) !== arg1);
    const _Object = Object;
    const entries = Object.entries(closure_5);
    const found = entries.filter((arg0) => {
      let tmp;
      [, tmp] = arg0;
      return closure_1.includes(tmp.errorCode);
    });
    const mapped1 = found.map((arg0) => {
      let tmp;
      let tmp2;
      [tmp, tmp2] = arg0;
      return "" + tmp + ": " + tmp2.errorCode;
    });
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("Duplicate AV error codes found:\n" + mapped1.join("\n"));
    throw error;
  }
  const set = new Set(mapped);
}();
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/errors/av_errors/AVError.tsx");

export const AVError = obj;
export const AVErrorCategory = obj;
export const AVErrorSeverity = obj;
export const AVUnderlyingError = { Unknown: "Unknown", UploadErrorGeneral: "UploadErrorCodes.GENERAL", UploadErrorNoFile: "UploadErrorCodes.NO_FILE", UploadErrorProgress: "UploadErrorCodes.PROGRESS", UploadErrorUpload: "UploadErrorCodes.UPLOAD", UploadErrorRead: "UploadErrorCodes.READ", KrispCpuOveruse: "NoiseCancellerError.CPU_OVERUSE", KrispFailed: "NoiseCancellerError.FAILED", KrispVadCpuOveruse: "NoiseCancellerError.VAD_CPU_OVERUSE", KrispInitError: "NoiseCancellerError.INIT_ERROR", KrispInitErrorNative: "NoiseCancellerError.INIT_ERROR_NATIVE", KrispInitErrorSse4NotSupported: "NoiseCancellerError.KRISP_INIT_ERROR_SSE4_NOT_SUPPORTED", KrispInitErrorAvx2NotSupported: "NoiseCancellerError.KRISP_INIT_ERROR_AVX2_NOT_SUPPORTED", KrispInitErrorUnsigned: "NoiseCancellerError.KRISP_INIT_ERROR_UNSIGNED", KrispInitErrorGlobalInit: "NoiseCancellerError.KRISP_INIT_ERROR_GLOBAL_INIT", KrispInitErrorWeight8k: "NoiseCancellerError.KRISP_INIT_ERROR_WEIGHT_8K", KrispInitErrorWeight16k: "NoiseCancellerError.KRISP_INIT_ERROR_WEIGHT_16K", KrispInitErrorWeight32k: "NoiseCancellerError.KRISP_INIT_ERROR_WEIGHT_32K", KrispInitErrorWeightVad: "NoiseCancellerError.KRISP_INIT_ERROR_WEIGHT_VAD", VideoBackgroundUnsupported: "VideoBackgroundError.UNSUPPORTED", VideoBackgroundInitFailed: "VideoBackgroundError.INIT_FAILED" };
export const reportAVError = function reportAVError(value) {
  const type = value.type;
  importDefaultResult.error("AV error reported: " + type + " " + JSON.stringify(callback(value, closure_2)));
  let obj = importDefault(dependencyMap[2]);
  obj = { type: "REPORT_AV_ERROR", error: type, errorCode: tmp2.errorCode, severity: tmp2.severity, category: tmp2.category, context: value };
  obj.dispatch(obj);
};
export const getErrorInfo = function getErrorInfo(avError) {
  return closure_5[avError];
};
