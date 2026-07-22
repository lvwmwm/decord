// Module ID: 4294
// Function ID: 37522
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 4294 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function Video() {
  return null;
}
function Camera() {
  return null;
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
({ AudioSubsystems: closure_7, DISABLED_DEVICE_ID: closure_8, Features: closure_9, MediaEngineContextTypes: closure_10 } = arg1(dependencyMap[5]));
const tmp2 = arg1(dependencyMap[5]);
const tmp3 = (arg0) => {
  class MediaEngineDummy {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_2(this, MediaEngineDummy);
      items1 = [...items];
      obj = closure_5(MediaEngineDummy);
      tmp2 = closure_4;
      if (closure_11()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_5;
        constructResult = Reflect.construct(obj, items1, closure_5(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.Video = closure_12;
      tmp2Result.Camera = closure_13;
      return tmp2Result;
    }
  }
  const arg1 = MediaEngineDummy;
  callback2(MediaEngineDummy, arg0);
  let obj = {
    key: "destroy",
    value() {
      this.emit(MediaEngineDummy(closure_1[6]).MediaEngineEvent.Destroy);
      this.removeAllListeners();
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "interact",
    value() {

    }
  };
  items[1] = obj;
  obj = {
    key: "supported",
    value() {
      return false;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "supports",
    value(arg0) {
      return false;
    }
  };
  items[4] = {
    key: "connect",
    value() {
      const error = new Error("NOT_IMPLEMENTED");
      throw error;
    }
  };
  items[5] = {
    key: "eachConnection",
    value() {

    }
  };
  items[6] = {
    key: "enable",
    value() {
      return Promise.resolve();
    }
  };
  items[7] = {
    key: "setAudioMixerOptions",
    value() {

    }
  };
  items[8] = {
    key: "setInputVolume",
    value() {

    }
  };
  items[9] = {
    key: "setOutputVolume",
    value() {

    }
  };
  items[10] = {
    key: "getAudioInputDevices",
    value() {
      return Promise.resolve([]);
    }
  };
  items[11] = {
    key: "setAudioInputDevice",
    value() {

    }
  };
  items[12] = {
    key: "getAudioOutputDevices",
    value() {
      return Promise.resolve([]);
    }
  };
  items[13] = {
    key: "setAudioOutputDevice",
    value() {

    }
  };
  items[14] = {
    key: "getVideoInputDevices",
    value() {
      return Promise.resolve([]);
    }
  };
  items[15] = {
    key: "setVideoInputDevice",
    value() {

    }
  };
  items[16] = {
    key: "getVideoInputDeviceId",
    value() {
      return closure_8;
    }
  };
  items[17] = {
    key: "setAsyncVideoInputDeviceInit",
    value() {

    }
  };
  items[18] = {
    key: "getCodecCapabilities",
    value(arg0) {
      arg0("");
    }
  };
  items[19] = {
    key: "getCodecSurvey",
    value() {
      const error = new Error("getCodecSurvey is not implemented for MediaEngineDummy");
      return Promise.reject(error);
    }
  };
  items[20] = {
    key: "getAudioSubsystem",
    value() {
      return constants.STANDARD;
    }
  };
  items[21] = {
    key: "getAudioLayer",
    value() {
      return "";
    }
  };
  items[22] = {
    key: "setGoLiveSource",
    value() {

    }
  };
  items[23] = {
    key: "setClipsSource",
    value() {

    }
  };
  items[24] = {
    key: "setClipsQualitySettings",
    value() {
      return false;
    }
  };
  items[25] = {
    key: "setDesktopSource",
    value(arg0) {
      if (arg1 === undefined) {
        const DEFAULT = constants2.DEFAULT;
      }
    }
  };
  items[26] = {
    key: "setSoundshareSource",
    value() {

    }
  };
  items[27] = {
    key: "getDesktopSource",
    value() {
      const error = new Error("NO_STREAM");
      return Promise.reject(error);
    }
  };
  items[28] = {
    key: "getScreenPreviews",
    value() {
      const error = new Error("UNSUPPORTED");
      return Promise.reject(error);
    }
  };
  items[29] = {
    key: "getWindowPreviews",
    value() {
      const error = new Error("UNSUPPORTED");
      return Promise.reject(error);
    }
  };
  items[30] = {
    key: "getSingleWindowPreview",
    value() {
      const error = new Error("UNSUPPORTED");
      return Promise.reject(error);
    }
  };
  items[31] = {
    key: "setClipsModulePath",
    value() {

    }
  };
  items[32] = {
    key: "setClipsDataPath",
    value() {

    }
  };
  items[33] = {
    key: "setClipsV3Enabled",
    value() {

    }
  };
  items[34] = {
    key: "setClipsV3MLEnabled",
    value() {

    }
  };
  items[35] = {
    key: "setClipsRecordingEnabled",
    value() {

    }
  };
  items[36] = {
    key: "hasSetClipsRecordingEnabled",
    value() {
      return false;
    }
  };
  items[37] = {
    key: "setClipsUIActive",
    value() {

    }
  };
  items[38] = {
    key: "setClipBufferLength",
    value() {

    }
  };
  items[39] = {
    key: "getSystemSteadyClockNowMs",
    value() {
      return null;
    }
  };
  items[40] = {
    key: "saveClipEx",
    value() {
      const error = new Error("UNSUPPORTED");
      return Promise.reject(error);
    }
  };
  items[41] = {
    key: "updateClipMetadata",
    value() {
      const error = new Error("UNSUPPORTED");
      return Promise.reject(error);
    }
  };
  items[42] = {
    key: "exportClip",
    value() {
      const error = new Error("UNSUPPORTED");
      return Promise.reject(error);
    }
  };
  items[43] = {
    key: "hasExportClipToFile",
    value() {
      return false;
    }
  };
  items[44] = {
    key: "exportClipToFile",
    value() {
      const error = new Error("UNSUPPORTED");
      return Promise.reject(error);
    }
  };
  items[45] = {
    key: "setClipsPerfMonitoring",
    value() {
      const error = new Error("UNSUPPORTED");
      return Promise.reject(error);
    }
  };
  items[46] = {
    key: "saveScreenshot",
    value() {
      const error = new Error("UNSUPPORTED");
      return Promise.reject(error);
    }
  };
  items[47] = {
    key: "setAudioSubsystem",
    value() {

    }
  };
  items[48] = {
    key: "queueAudioSubsystem",
    value() {

    }
  };
  items[49] = {
    key: "setOffloadAdmControls",
    value() {

    }
  };
  items[50] = {
    key: "updateFieldTrial",
    value() {

    }
  };
  items[51] = {
    key: "getDebugLogging",
    value() {
      return false;
    }
  };
  items[52] = {
    key: "setDebugLogging",
    value() {

    }
  };
  items[53] = {
    key: "writeAudioDebugState",
    value() {
      const error = new Error("Audio debug state is not supported.");
      return Promise.reject(error);
    }
  };
  items[54] = {
    key: "setLoopback",
    value() {

    }
  };
  items[55] = {
    key: "getLoopback",
    value() {
      return false;
    }
  };
  items[56] = {
    key: "setExperimentFlag",
    value() {

    }
  };
  items[57] = {
    key: "startAecDump",
    value() {

    }
  };
  items[58] = {
    key: "stopAecDump",
    value() {

    }
  };
  items[59] = {
    key: "setAecDump",
    value() {

    }
  };
  items[60] = {
    key: "startRecordingRawSamples",
    value() {

    }
  };
  items[61] = {
    key: "stopRecordingRawSamples",
    value() {

    }
  };
  items[62] = {
    key: "processBatchAudioFiles",
    value() {

    }
  };
  items[63] = {
    key: "cancelBatchAudioProcessing",
    value() {

    }
  };
  items[64] = {
    key: "createReplayConnection",
    value() {
      const error = new Error("Connection replay is not supported.");
      throw error;
    }
  };
  items[65] = {
    key: "setOnVideoContainerResized",
    value() {

    }
  };
  items[66] = {
    key: "setMaxSyncDelayOverride",
    value() {

    }
  };
  items[67] = {
    key: "rankRtcRegions",
    value() {
      const error = new Error("RTC region latency test is not supported.");
      return Promise.reject(error);
    }
  };
  items[68] = {
    key: "applyMediaFilterSettings",
    value() {
      return Promise.resolve();
    }
  };
  items[69] = {
    key: "startLocalAudioRecording",
    value() {
      const error = new Error("startLocalAudioRecording is not supported.");
      return Promise.reject(error);
    }
  };
  items[70] = {
    key: "stopLocalAudioRecording",
    value() {

    }
  };
  items[71] = {
    key: "setHasFullbandPerformance",
    value() {

    }
  };
  items[72] = {
    key: "getSupportedSecureFramesProtocolVersion",
    value() {
      return 0;
    }
  };
  items[73] = {
    key: "getSupportedBandwidthEstimationExperiments",
    value(arg0) {
      arg0([]);
    }
  };
  items[74] = {
    key: "getMLSSigningKey",
    value() {
      const error = new Error("NOT_IMPLEMENTED");
      return Promise.reject(error);
    }
  };
  items[75] = {
    key: "setSidechainCompression",
    value() {

    }
  };
  items[76] = {
    key: "setSidechainCompressionStrength",
    value() {

    }
  };
  items[77] = {
    key: "getSystemMicrophoneMode",
    value() {
      return Promise.resolve("");
    }
  };
  items[78] = {
    key: "showSystemCaptureConfigurationUI",
    value() {

    }
  };
  items[79] = {
    key: "setNativeDesktopVideoSourcePickerActive",
    value() {

    }
  };
  items[80] = {
    key: "presentNativeScreenSharePicker",
    value() {

    }
  };
  items[81] = {
    key: "releaseNativeDesktopVideoSourcePickerStream",
    value() {

    }
  };
  items[82] = {
    key: "setMaybePreprocessMute",
    value() {

    }
  };
  items[83] = {
    key: "setAudioInputBypassSystemProcessing",
    value() {

    }
  };
  items[84] = {
    key: "fetchAsyncResources",
    value() {
      return Promise.resolve();
    }
  };
  items[85] = {
    key: "getDeviceOSVolume",
    value() {
      return Promise.resolve(undefined);
    }
  };
  items[86] = {
    key: "getDeviceOSMuted",
    value() {
      return Promise.resolve(undefined);
    }
  };
  items[87] = {
    key: "getDeviceAudioEffects",
    value() {
      const error = new Error("Device audio effect querying not supported");
      return Promise.reject(error);
    }
  };
  items[88] = {
    key: "getNoiseCancellationStats",
    value() {
      const error = new Error("Dummy noise cancellation stats not supported");
      return Promise.reject(error);
    }
  };
  items[89] = {
    key: "setNoiseCancellationEnableStats",
    value() {

    }
  };
  return callback(MediaEngineDummy, items);
}(importDefault(dependencyMap[7]));
const result = arg1(dependencyMap[8]).fileFinishedImporting("../discord_common/js/packages/media-engine/MediaEngineDummy.tsx");

export default tmp3;
