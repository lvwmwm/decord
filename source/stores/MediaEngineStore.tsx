// Module ID: 4177
// Function ID: 35460
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 57, 5, 4178, 4183, 4044, 4150, 4199, 1316, 1194, 4200, 4201, 1348, 4202, 1849, 12758, 653, 4195, 4344, 12759, 662, 12760, 4191, 3, 664, 477, 4227, 4015, 4675, 12761, 12762, 12763, 10385, 12764, 22, 12745, 12765, 12766, 12767, 12768, 12769, 12770, 12771, 8857, 675, 686, 10725, 12772, 12773, 4953, 12774, 12819, 12820, 12821, 12822, 12823, 12824, 4190, 4306, 4124, 3741, 587, 12825, 10712, 5142, 12829, 12830, 1212, 4450, 12831, 12832, 12833, 44, 12757, 12756, 12834, 12740, 1184, 4188, 10233, 12835, 12836, 12837, 566, 2]

// Module 4177 (_isNativeReflectConstruct)
import asyncGeneratorStep from "asyncGeneratorStep";
import closure_5 from "module_4178";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import getWmfGpuEncode from "getWmfGpuEncode";
import _slicedToArray from "_slicedToArray";
import module_4178 from "module_4178";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import { getSystemAnalyticsInfo } from "getSystemAnalyticsInfo";
import closure_15 from "_isNativeReflectConstruct";
import closure_16 from "_isNativeReflectConstruct";
import closure_17 from "_isNativeReflectConstruct";
import closure_18 from "_isNativeReflectConstruct";
import closure_19 from "_isNativeReflectConstruct";
import closure_20 from "_isNativeReflectConstruct";
import closure_21 from "_isNativeReflectConstruct";
import closure_22 from "_isNativeReflectConstruct";
import ME from "ME";
import StreamIssueReportReasons from "StreamIssueReportReasons";
import NativePermissionStatus from "NativePermissionStatus";
import { DEFAULT_AUDIO_MIXER_SETTINGS as closure_39 } from "DEFAULT_ROOM_SIZE";
import MAX_FAVORITES from "MAX_FAVORITES";
import { InputProfile } from "InputProfile";
import DesktopSources from "DesktopSources";
import importDefaultResult from "_getPrototypeOf";
import getMediaEngineImpl from "getMediaEngineImpl";
import getMediaEngineImpl from "getMediaEngineImpl";
import importDefaultResult1 from "NativePermissionsRequestOptions";
import set from "_possibleConstructorReturn";

let DEFAULT_DEVICE_ID;
let DISABLED_DEVICE_ID;
let Features;
let InputModes;
let NativePermissionTypes;
let closure_23;
let closure_24;
let closure_26;
let closure_27;
let closure_28;
let closure_29;
let closure_30;
let closure_31;
let closure_32;
let closure_33;
let closure_34;
let closure_35;
let closure_36;
let closure_37;
let closure_40;
let closure_41;
let closure_43;
let closure_44;
let closure_45;
let closure_46;
let closure_48;
let closure_50;
let closure_54;
let closure_55;
let closure_56;
let closure_57;
let closure_58;
let closure_59;
let closure_60;
let closure_61;
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
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
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
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
function getDefaultSettings() {
  let obj = { mode: InputModes.VOICE_ACTIVITY, modeOptions: null, vadUseKrispSettingVersion: 0, ncUseKrispSettingVersion: 0, ncUseKrispjsSettingVersion: 0, mute: false, deaf: false, echoCancellation: true, noiseSuppression: false, automaticGainControl: true, noiseCancellation: true, bypassSystemInputProcessing: true, hardwareEnabledVersion: 0, silenceWarning: true, attenuation: 0, attenuateWhileSpeakingSelf: false, attenuateWhileSpeakingOthers: true };
  obj = { threshold: -60, autoThreshold: require(477) /* set */.isPlatformEmbedded || false, vadUseKrisp: true, vadKrispActivationThreshold: 0.5, vadLeading: 5, vadTrailing: 25, delay: 20, shortcut: [], updatedAt: undefined };
  obj.modeOptions = obj;
  obj.localMutes = {};
  obj.disabledLocalVideos = {};
  obj.videoToggleStateMap = {};
  obj.localVolumes = {};
  obj = {};
  const merged = Object.assign(closure_39);
  obj.audioMixerSettings = obj;
  obj.audioMixerSettingsVersion = 0;
  obj.localPans = {};
  obj.inputVolume = closure_45;
  obj.outputVolume = closure_45;
  obj.inputDeviceId = DEFAULT_DEVICE_ID;
  obj.outputDeviceId = DEFAULT_DEVICE_ID;
  obj.videoDeviceId = DEFAULT_DEVICE_ID;
  obj.qos = false;
  obj.qosMigrated = false;
  obj.videoHook = store3.supports(Features.VIDEO_HOOK);
  obj.experimentalSoundshare2 = null;
  obj.useSystemScreensharePicker = null;
  obj.h265Enabled = true;
  obj.vadThrehsoldMigrated = false;
  obj.aecDumpEnabled = false;
  obj.openH264Enabled = true;
  obj.sidechainCompression = true;
  obj.sidechainCompressionSettingVersion = 1;
  obj.sidechainCompressionStrength = 50;
  obj.automaticAudioSubsystem = true;
  obj.activeInputProfile = null;
  return obj;
}
function getHdrCaptureMode(location) {
  let obj = require(12761) /* HdrCaptureMode */;
  obj = { location };
  return obj.getGoLiveHdrConfig(obj).hdrCaptureMode;
}
async function _detectH265HardwareDecode() {
  if ("undefined" !== typeof window) {
    const _navigator3 = navigator;
    if ("undefined" !== typeof navigator) {
      const _navigator4 = navigator;
      if ("mediaCapabilities" in navigator) {
        const _navigator = navigator;
        if (null != navigator.mediaCapabilities) {
          const _navigator2 = navigator;
          const obj = { type: "file", video: { contentType: "video/mp4; codecs=\"hev1.1.6.L153.B0\"", width: 1920, height: 1080, bitrate: 2000000, framerate: 30 } };
          const tmp2 = yield mediaCapabilities.decodingInfo(obj);
          const supported = tmp2.supported;
          let powerEfficient = supported;
          if (supported) {
            powerEfficient = tmp2.powerEfficient;
          }
          return powerEfficient;
        }
      }
    }
  }
  return false;
}
function startH265HardwareDetection() {
  if (null != nextPromise) {
    let resolved = nextPromise;
  } else {
    const _window = window;
    if ("undefined" !== typeof window) {
      nextPromise = (function detectH265HardwareDecode() {
        return outer1_154(...arguments);
      })().then((arg0) => {
        const outer1_127 = arg0;
        return arg0;
      });
      resolved = nextPromise;
      const promise = (function detectH265HardwareDecode() {
        return outer1_154(...arguments);
      })();
    } else {
      resolved = Promise.resolve(false);
    }
  }
  return resolved;
}
function getStoredSettings(DEFAULT) {
  if (DEFAULT === undefined) {
    DEFAULT = MediaEngineContextTypes.DEFAULT;
  }
  let tmp2 = table[DEFAULT];
  if (null == tmp2) {
    const tmp4 = getDefaultSettings();
    table[DEFAULT] = tmp4;
    tmp2 = tmp4;
  }
  return tmp2;
}
function _getSettings0(context) {
  let DEFAULT = context;
  if (context === undefined) {
    DEFAULT = MediaEngineContextTypes.DEFAULT;
  }
  const tmp2 = getStoredSettings(DEFAULT);
  let CUSTOM = tmp2.activeInputProfile;
  if (null == CUSTOM) {
    CUSTOM = InputProfile.CUSTOM;
  }
  const tmp6 = isKrispAvailable() ? closure_145 : obj2;
  let obj = {};
  let modeOptions = tmp2.modeOptions;
  if (null == modeOptions) {
    modeOptions = {};
  }
  const merged = Object.assign(modeOptions);
  let modeOptions1 = tmp5.modeOptions;
  if (null == modeOptions1) {
    modeOptions1 = {};
  }
  const merged1 = Object.assign(modeOptions1);
  let modeOptions2 = tmp6.modeOptions;
  if (null == modeOptions2) {
    modeOptions2 = {};
  }
  const merged2 = Object.assign(modeOptions2);
  if (null == obj.vadDuringPreProcess) {
    obj = { location: "getSettings" };
    obj.vadDuringPreProcess = require(12762) /* getVADBeforeProcessingExperimentConfig */.getVADBeforeProcessingExperimentConfig(obj).enabled;
    const obj5 = require(12762) /* getVADBeforeProcessingExperimentConfig */;
  }
  if (null != obj.vadKrispActivationThreshold) {
    obj = {};
    const merged3 = Object.assign(tmp2);
    const merged4 = Object.assign(tmp5);
    const merged5 = Object.assign(tmp6);
    obj["modeOptions"] = obj;
    return obj;
  }
  const aGC2ExperimentConfig = require(12763) /* getAGC2ExperimentConfig */.getAGC2ExperimentConfig({ location: "getSettings" });
  if (null != aGC2ExperimentConfig.vadKrispActivationThreshold) {
    obj.vadKrispActivationThreshold = aGC2ExperimentConfig.vadKrispActivationThreshold;
  }
}
function setInputMode(SOFT_INPUT_ADJUST_RESIZE, arg1) {
  const tmp = _getSettings0(SOFT_INPUT_ADJUST_RESIZE.context);
  const mode = tmp.mode;
  if (SOFT_INPUT_ADJUST_RESIZE.context === MediaEngineContextTypes.DEFAULT) {
    let obj = require(10385) /* setPushToTalkState */;
    obj.setPushToTalkState(false, false);
  }
  let showPTTSpeakingIndicator = importDefault(12764).getConfig({ location: "setInputMode" }).showPTTSpeakingIndicator;
  if (showPTTSpeakingIndicator) {
    showPTTSpeakingIndicator = mode === InputModes.PUSH_TO_TALK;
  }
  obj = { vadThreshold: tmp.modeOptions.threshold };
  let autoThreshold = !tmp6;
  if (!showPTTSpeakingIndicator) {
    autoThreshold = tmp.modeOptions.autoThreshold;
  }
  obj.vadAutoThreshold = autoThreshold;
  let vadUseKrisp = !tmp7;
  if (!showPTTSpeakingIndicator) {
    vadUseKrisp = tmp.modeOptions.vadUseKrisp;
  }
  if (vadUseKrisp) {
    vadUseKrisp = isKrispAvailable();
  }
  obj.vadUseKrisp = vadUseKrisp;
  const vadKrispActivationThreshold = tmp.modeOptions.vadKrispActivationThreshold;
  let num2 = 0.5;
  if (null != vadKrispActivationThreshold) {
    num2 = vadKrispActivationThreshold;
  }
  obj.vadKrispActivationThreshold = num2;
  obj.vadLeading = tmp.modeOptions.vadLeading;
  obj.vadTrailing = tmp.modeOptions.vadTrailing;
  const vadDuringPreProcess = tmp.modeOptions.vadDuringPreProcess;
  obj.vadDuringPreProcess = null != vadDuringPreProcess && vadDuringPreProcess;
  obj.pttReleaseDelay = Math.round(tmp.modeOptions.delay);
  SOFT_INPUT_ADJUST_RESIZE.setInputMode(mode, obj);
}
function clampVolume(inputVolume) {
  let tmp;
  tmp = closure_45;
  return importDefault(22).clamp(inputVolume, 0, tmp);
}
function updateConnectionMuteDeaf(context) {
  const tmp = _getSettings0(context.context);
  context = context.context;
  if (MediaEngineContextTypes.DEFAULT === context) {
    let tmp4 = tmp2;
    if (!tmp2) {
      tmp4 = c95;
    }
    if (!tmp4) {
      tmp4 = c96;
    }
    if (!tmp4) {
      tmp4 = c97;
    }
    if (!tmp4) {
      tmp4 = !importDefault(4675).didHavePermission(NativePermissionTypes.AUDIO);
      const obj = importDefault(4675);
    }
    let flag = tmp4;
  } else {
    flag = true;
    if (MediaEngineContextTypes.STREAM !== context) {
      const context2 = context.context;
      flag = tmp2;
    }
  }
  context.setSelfMute(flag);
  context.setSelfDeaf(tmp.deaf);
  if (context.context === MediaEngineContextTypes.DEFAULT) {
    importDefault(12745).updateNativeMute();
    const obj2 = importDefault(12745);
  }
}
function updateVideo(c99, arg1) {
  let minCaptureHeight;
  let minCaptureWidth;
  let tmp = c99;
  let tmp2 = arg1;
  if (c99 === undefined) {
    tmp = c99;
  }
  if (tmp2 === undefined) {
    tmp2 = closure_79;
  }
  let desktopSource;
  if (null != closure_79) {
    desktopSource = tmp3.desktopSource;
  }
  let tmp5 = null != desktopSource;
  if (tmp5) {
    let id;
    if (null != tmp2) {
      desktopSource = tmp2.desktopSource;
      if (null != desktopSource) {
        id = desktopSource.id;
      }
    }
    tmp5 = tmp3.desktopSource.id !== id;
  }
  if (!tmp5) {
    let cameraSource;
    if (null != tmp3) {
      cameraSource = tmp3.cameraSource;
    }
    let tmp20 = null == cameraSource;
    if (!tmp20) {
      let videoDeviceGuid;
      if (null != tmp2) {
        cameraSource = tmp2.cameraSource;
        if (null != cameraSource) {
          videoDeviceGuid = cameraSource.videoDeviceGuid;
        }
      }
      let tmp22 = tmp3.cameraSource.videoDeviceGuid === videoDeviceGuid;
      if (tmp22) {
        let audioDeviceGuid;
        if (null != tmp2) {
          const cameraSource2 = tmp2.cameraSource;
          if (null != cameraSource2) {
            audioDeviceGuid = cameraSource2.audioDeviceGuid;
          }
        }
        tmp22 = tmp3.cameraSource.audioDeviceGuid === audioDeviceGuid;
      }
      tmp20 = tmp22;
    }
    if (!tmp20) {
      store3.setGoLiveSource(null, STREAM);
    }
    if (!c99) {
      if (!tmp) {
        closure_79 = tmp2;
        if (null != tmp2) {
          let obj = { resolution: tmp2.quality.resolution, frameRate: tmp2.quality.frameRate };
          if (null != tmp2.desktopSource) {
            const videoHook2 = _getSettings0().videoHook;
            const tmp82 = supportsWindowsGraphicsCapture();
            if (!tmp82) {
              let obj5 = require(477) /* set */;
              let isWindowsResult = obj5.isWindows();
              if (isWindowsResult) {
                isWindowsResult = 0 >= closure_31;
              }
              if (!isWindowsResult) {
                let tmp61 = !videoHook2;
                if (!tmp61) {
                  const DisableHookFramePacerExperiment = require(12768) /* apexExperiment */.DisableHookFramePacerExperiment;
                  obj = { location: "updateVideo" };
                  tmp61 = !DisableHookFramePacerExperiment.getConfig(obj).enabled;
                }
                let enabled2 = videoHook2;
                if (videoHook2) {
                  const VideoHookDX12Experiment = require(12769) /* apexExperiment */.VideoHookDX12Experiment;
                  let obj1 = { location: "updateVideo" };
                  enabled2 = VideoHookDX12Experiment.getConfig(obj1).enabled;
                }
                const UpscaleSmallCapturedFramesExperiment = require(12770) /* apexExperiment */.UpscaleSmallCapturedFramesExperiment;
                let obj2 = { location: "updateVideo" };
                const config = UpscaleSmallCapturedFramesExperiment.getConfig(obj2);
                let obj3 = {};
                let obj4 = { id: tmp2.desktopSource.id, soundshareId: tmp2.desktopSource.soundshareId, useVideoHook: videoHook2, useHookFramePacer: tmp61, useGraphicsCapture: tmp82, useGraphicsCaptureApiLevel: 0 };
                ({ minCaptureWidth, minCaptureHeight } = config);
                obj4.useCaptureDeviceForEncode = require(477) /* set */.isWindows();
                obj4.useLoopback = tmp20.getExperimentalSoundshare();
                obj4.useQuartzCapturer = true;
                obj4.allowScreenCaptureKit = supportsScreenCaptureKit();
                obj4.videoHookStaleFrameTimeoutMs = 500;
                obj4.graphicsCaptureStaleFrameTimeoutMs = closure_65;
                obj4.hdrCaptureMode = tmp79;
                const obj14 = require(477) /* set */;
                obj5 = { location: "updateVideo" };
                obj4.enableGlobalFramePoolLock = require(12771) /* getGlobalFramePoolLockExperimentConfig */.getGlobalFramePoolLockExperimentConfig(obj5).enabled;
                obj4.useGraphicsCaptureDirtyRegions = false;
                obj4.videoHookAllowDx12 = enabled2;
                obj4.minCaptureWidth = minCaptureWidth;
                obj4.minCaptureHeight = minCaptureHeight;
                obj3.desktopDescription = obj4;
                obj3.quality = obj;
                store3.setGoLiveSource(obj3, STREAM);
                const obj15 = require(12771) /* getGlobalFramePoolLockExperimentConfig */;
              } else if (true === c136) {
                const WGCDirtyRegionsExperiment = require(12766) /* apexExperiment */.WGCDirtyRegionsExperiment;
                const obj6 = { location: "updateVideo" };
                let enabled = WGCDirtyRegionsExperiment.getConfig(obj6).enabled;
              } else {
                const WGCDirtyRegionsAllExperiment = require(12767) /* apexExperiment */.WGCDirtyRegionsAllExperiment;
                const obj7 = { location: "updateVideo" };
                enabled = WGCDirtyRegionsAllExperiment.getConfig(obj7).enabled;
              }
            } else {
              obj3 = require(477) /* set */;
              let isWindowsResult1 = obj3.isWindows();
              if (isWindowsResult1) {
                obj4 = importDefault(12774);
                let release;
                if (null != importDefault(3741)) {
                  release = importDefault(3741).os.release;
                }
                isWindowsResult1 = obj4.satisfies(release, closure_32);
              }
            }
            tmp79 = getHdrCaptureMode("MediaEngineStore go live");
          }
          if (null != tmp2.cameraSource) {
            const obj8 = {};
            const obj9 = { videoDeviceGuid: tmp2.cameraSource.videoDeviceGuid };
            let str6 = "";
            if (false !== tmp2.cameraSource.sound) {
              str6 = tmp2.cameraSource.audioDeviceGuid;
            }
            obj9.audioDeviceGuid = str6;
            obj8.cameraDescription = obj9;
            obj8.quality = obj;
            store3.setGoLiveSource(obj8, STREAM);
          }
        }
      }
    }
    let videoDeviceId = _getSettings0().videoDeviceId;
    if (c99) {
      if (videoDeviceId === DEFAULT_DEVICE_ID) {
        if (videoDeviceId === DEFAULT_DEVICE_ID) {
          if (DISABLED_DEVICE_ID !== DISABLED_DEVICE_ID) {
            videoDeviceId = DISABLED_DEVICE_ID;
          }
          c99 = tmp;
          if (tmp) {
            let tmp35 = getDeviceId(getMediaEngineImpl, videoDeviceId);
          } else {
            tmp35 = DISABLED_DEVICE_ID;
          }
          DISABLED_DEVICE_ID = tmp35;
          store3.setVideoInputDevice(DISABLED_DEVICE_ID);
        }
      }
    }
  } else {
    if (null == tmp3.desktopSource.soundshareId) {
      let videoHook = null != tmp3.desktopSource.sourcePid;
      if (videoHook) {
        videoHook = _getSettings0().videoHook;
      }
      if (videoHook) {
        obj1 = importAll(12765);
        const result = obj1.cancelAttachToProcess(tmp3.desktopSource.sourcePid);
      }
      store3.setGoLiveSource(null, STREAM);
    } else {
      obj = require(477) /* set */;
    }
    obj2 = importAll(12765);
    const result1 = obj2.cancelAttachToProcess(tmp3.desktopSource.soundshareId);
  }
}
function noiseCancellerErrorToAVUnderlyingError(code) {
  if (NoiseCancellerError.KRISP_CPU_OVERUSE === code) {
    return require(8857) /* validateUniqueErrorCodes */.AVUnderlyingError.KrispCpuOveruse;
  } else if (NoiseCancellerError.KRISP_FAILED === code) {
    return require(8857) /* validateUniqueErrorCodes */.AVUnderlyingError.KrispFailed;
  } else if (NoiseCancellerError.KRISP_VAD_CPU_OVERUSE === code) {
    return require(8857) /* validateUniqueErrorCodes */.AVUnderlyingError.KrispVadCpuOveruse;
  } else if (NoiseCancellerError.KRISP_INIT_ERROR === code) {
    return require(8857) /* validateUniqueErrorCodes */.AVUnderlyingError.KrispInitError;
  } else if (NoiseCancellerError.KRISP_INIT_ERROR_NATIVE === code) {
    return require(8857) /* validateUniqueErrorCodes */.AVUnderlyingError.KrispInitErrorNative;
  } else if (NoiseCancellerError.KRISP_INIT_ERROR_SSE4_NOT_SUPPORTED === code) {
    return require(8857) /* validateUniqueErrorCodes */.AVUnderlyingError.KrispInitErrorSse4NotSupported;
  } else if (NoiseCancellerError.KRISP_INIT_ERROR_AVX2_NOT_SUPPORTED === code) {
    return require(8857) /* validateUniqueErrorCodes */.AVUnderlyingError.KrispInitErrorAvx2NotSupported;
  } else if (NoiseCancellerError.KRISP_INIT_ERROR_UNSIGNED === code) {
    return require(8857) /* validateUniqueErrorCodes */.AVUnderlyingError.KrispInitErrorUnsigned;
  } else if (NoiseCancellerError.KRISP_INIT_ERROR_GLOBAL_INIT === code) {
    return require(8857) /* validateUniqueErrorCodes */.AVUnderlyingError.KrispInitErrorGlobalInit;
  } else if (NoiseCancellerError.KRISP_INIT_ERROR_WEIGHT_8K === code) {
    return require(8857) /* validateUniqueErrorCodes */.AVUnderlyingError.KrispInitErrorWeight8k;
  } else if (NoiseCancellerError.KRISP_INIT_ERROR_WEIGHT_16K === code) {
    return require(8857) /* validateUniqueErrorCodes */.AVUnderlyingError.KrispInitErrorWeight16k;
  } else if (NoiseCancellerError.KRISP_INIT_ERROR_WEIGHT_32K === code) {
    return require(8857) /* validateUniqueErrorCodes */.AVUnderlyingError.KrispInitErrorWeight32k;
  } else if (NoiseCancellerError.KRISP_INIT_ERROR_WEIGHT_VAD === code) {
    return require(8857) /* validateUniqueErrorCodes */.AVUnderlyingError.KrispInitErrorWeightVad;
  }
}
function videoFilterErrorToAVUnderlyingError(code) {
  if (constants10.UNSUPPORTED === code) {
    return require(8857) /* validateUniqueErrorCodes */.AVUnderlyingError.VideoBackgroundUnsupported;
  } else if (constants10.INIT_FAILED === code) {
    return require(8857) /* validateUniqueErrorCodes */.AVUnderlyingError.VideoBackgroundInitFailed;
  }
}
function handleVoiceProcessingError(code) {
  importDefaultResult.warn("Voice processing error: " + code);
  let obj = require(8857) /* validateUniqueErrorCodes */;
  obj = { type: require(8857) /* validateUniqueErrorCodes */.AVError.NOISE_CANCELLER_ERROR, underlyingError: noiseCancellerErrorToAVUnderlyingError(code) };
  obj.reportAVError(obj);
  let obj2 = importDefault(675);
  obj = { noise_canceller_error: code };
  obj2.track(constants.VOICE_PROCESSING, obj);
  if (set3.has(code)) {
    let c115 = true;
  } else if (code === NoiseCancellerError.KRISP_VAD_CPU_OVERUSE) {
    const obj1 = { type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR", code };
    importDefault(686).dispatch(obj1);
    const obj7 = importDefault(686);
  } else {
    let c122 = true;
    obj2 = { type: "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR", code };
    importDefault(686).dispatch(obj2);
    const obj5 = importDefault(686);
  }
}
function handleVideoFilterError(code) {
  let str = "preview";
  let str2 = "preview";
  if (arg1 === constants11.LIVE) {
    str2 = "live";
  }
  importDefaultResult.warn("Video filter error: " + code + " (" + str2 + ")");
  if (arg1 === constants11.LIVE) {
    let obj = require(8857) /* validateUniqueErrorCodes */;
    obj = { type: require(8857) /* validateUniqueErrorCodes */.AVError.VIDEO_BACKGROUND_UNAVAILABLE, underlyingError: videoFilterErrorToAVUnderlyingError(code) };
    obj.reportAVError(obj);
  }
  obj = { type: "MEDIA_ENGINE_VIDEO_FILTER_ERROR", code };
  if (arg1 === constants11.LIVE) {
    str = "live";
  }
  obj.target = str;
  importDefault(686).dispatch(obj);
}
function getAutomaticGainControlConfig(disable) {
  let obj = { enabled: disable };
  obj = { location: "getAutomaticGainControlConfig", disable: !disable };
  const merged = Object.assign(require(12763) /* getAGC2ExperimentConfig */.getAGC2ExperimentConfig(obj).noiseCancellationConfig);
  return obj;
}
function setAutomaticGainControl(setAutomaticGainControl, disable) {
  const result = setAutomaticGainControl.setAutomaticGainControl(getAutomaticGainControlConfig(disable));
}
function setNoiseCancellation(setNoiseCancellation) {
  const tmpResult = importDefault(10725)(arg1, tmp20.getSystemMicrophoneMode());
  if (tmpResult !== arg1) {
    importDefaultResult.info("Falling back to system noise suppression.");
  }
  setNoiseCancellation.setNoiseCancellation(tmpResult);
  let obj = require(12763) /* getAGC2ExperimentConfig */;
  obj = { location: "setNoiseCancellation", disable: !tmpResult };
  const result = setNoiseCancellation.setNoiseCancellationDuringProcessing(obj.getAGC2ExperimentConfig(obj).noiseCancellationDuringProcessing);
}
function updateConnectionVoiceProcessing(setEchoCancellation) {
  const tmp = _getSettings0();
  const inputDeviceId = tmp.inputDeviceId;
  setEchoCancellation.setEchoCancellation(closure_18.hasEchoCancellation(inputDeviceId) || tmp.echoCancellation);
  const tmp2 = closure_18.hasEchoCancellation(inputDeviceId) || tmp.echoCancellation;
  setEchoCancellation.setNoiseSuppression(closure_18.hasNoiseSuppression(inputDeviceId) || tmp.noiseSuppression);
  const tmp4 = closure_18.hasNoiseSuppression(inputDeviceId) || tmp.noiseSuppression;
  const tmp6 = setAutomaticGainControl;
  tmp6(setEchoCancellation, closure_18.hasAutomaticGainControl(inputDeviceId) || tmp.automaticGainControl);
  setNoiseCancellation(setEchoCancellation, tmp.noiseCancellation);
  const result = setEchoCancellation.setSpatialAudioEnabled(computeSpatialAudioEnabled(tmp.audioMixerSettings));
  let obj = require(477) /* set */;
  let isWindowsResult = obj.isWindows();
  if (isWindowsResult) {
    let release;
    if (null != importDefault(3741)) {
      release = importDefault(3741).os.release;
    }
    isWindowsResult = importDefault(12774).satisfies(release, c147);
    const obj2 = importDefault(12774);
  }
  if (isWindowsResult) {
    if (setEchoCancellation.context === MediaEngineContextTypes.DEFAULT) {
      const obj4 = require(12772) /* getSystemwideEchoCancellationExperimentConfig */;
      obj = { location: "updateConnectionVoiceProcessing" };
      const systemwideEchoCancellationExperimentConfig = obj4.getSystemwideEchoCancellationExperimentConfig(obj);
      let tmp23 = isDeviceSystemEchoIncompatible(obj3[tmp20.getInputDeviceId(tmp20)]);
      if (!tmp23) {
        tmp23 = isDeviceSystemEchoIncompatible(obj4[tmp20.getOutputDeviceId(tmp20)]);
      }
      let str = "mix";
      if (!tmp23) {
        str = systemwideEchoCancellationExperimentConfig.echoReferenceMode;
      }
      setEchoCancellation.setEchoReferenceMode(str);
    }
  }
  obj3 = require(477) /* set */;
  if (obj3.isWeb()) {
    let num3 = -100;
    if (tmp.noiseCancellation) {
      num3 = -150;
    }
    setEchoCancellation.setSilenceThreshold(num3);
  }
}
function setupMediaEngine() {
  timeout.start(closure_67, () => {
    outer1_62.error("Device enumeration timed out");
    outer1_1(outer1_3[48]).track(outer1_23.DEVICE_ENUMERATION_TIMEOUT, {});
  });
  store3.on(require(4227) /* getMediaEngineImpl */.MediaEngineEvent.Connection, (setAttenuation) => {
    let length;
    let length2;
    let closure_0 = setAttenuation;
    let result2 = outer1_194();
    outer1_158(setAttenuation);
    outer1_160(setAttenuation);
    outer1_169(setAttenuation);
    const tmp5 = outer1_157();
    setAttenuation.setAttenuation(tmp5.attenuation, tmp5.attenuateWhileSpeakingSelf, tmp5.attenuateWhileSpeakingOthers);
    setAttenuation.setQoS(tmp5.qos);
    let obj = outer1_0(outer1_3[29]);
    if (obj.isWindows()) {
      setAttenuation.setExperimentFlag(outer1_50.H265_HARDWARE_ONLY, true);
      outer1_155().then((arg0) => {
        setAttenuation.setExperimentFlag(outer2_50.H265_HARDWARE_DECODE_AVAILABLE, arg0);
      });
      const promise = outer1_155();
    } else {
      if (obj2.isMac()) {
        setAttenuation.setExperimentFlag(outer1_50.H265_HARDWARE_DECODE_AVAILABLE, true);
      }
      obj2 = outer1_0(outer1_3[29]);
    }
    const obj3 = outer1_0(outer1_3[29]);
    if (tmp16) {
      setAttenuation.setExperimentFlag(outer1_50.USE_LIBOPENH264_DECODER, true);
    }
    tmp16 = outer1_0(outer1_3[29]).isLinux() && tmp5.openH264Enabled;
    if (obj4.getLowLatencyRateControlExperimentConfig({ location: "setupMediaEngine" }).enabled) {
      setAttenuation.setExperimentFlag(outer1_50.LOW_LATENCY_RATE_CONTROL, true);
    }
    setAttenuation.setExperimentFlag(outer1_50.RESET_DECODER_ON_ERRORS, true);
    setAttenuation.setExperimentFlag(outer1_50.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, true);
    obj4 = outer1_0(outer1_3[52]);
    if (obj5.getConfig({ location: "MediaEngineStore" }).swallowVolumeOnlySpeakingEvents) {
      setAttenuation.setExperimentFlag(outer1_50.SWALLOW_VOLUME_ONLY_SPEAKING_EVENTS, true);
    }
    const result = setAttenuation.setMinimumJitterBufferLevel(80);
    if (setAttenuation.context === outer1_52.STREAM) {
      const result1 = setAttenuation.setSoundshareDiscardRearChannels(outer1_186(outer1_92));
    }
    obj5 = outer1_1(outer1_3[53]);
    if (obj6.isWindows()) {
      setAttenuation.setExperimentFlag(outer1_50.SIGNAL_AV1_ENCODE, true);
      setAttenuation.setExperimentFlag(outer1_50.SIGNAL_AV1_DECODE, true);
      setAttenuation.setExperimentFlag(outer1_50.SIGNAL_AV1_HARDWARE_DECODE, true);
    } else {
      if (obj7.isMac()) {
        setAttenuation.setExperimentFlag(outer1_50.SIGNAL_AV1_DECODE, true);
        setAttenuation.setExperimentFlag(outer1_50.SIGNAL_AV1_HARDWARE_DECODE, true);
        let arch;
        if (null != window) {
          if (null != DiscordNative) {
            arch = DiscordNative.os.arch;
          }
        }
        let satisfiesResult = "arm64" === arch;
        if (satisfiesResult) {
          let release;
          if (null != window) {
            if (null != DiscordNative2) {
              release = DiscordNative2.os.release;
            }
          }
          satisfiesResult = outer1_1(outer1_3[54]).satisfies(release, outer1_44);
          const obj12 = outer1_1(outer1_3[54]);
        }
        setAttenuation.setExperimentFlag(outer1_50.H265_DISABLE_ENCODE, !satisfiesResult);
      } else {
        if (obj8.isLinux()) {
          let tmp33Result = tmp33(tmp34[55]);
          if (tmp33Result.getAV1EncodeExperimentLinuxConfig("MediaEngineStore").enabled) {
            setAttenuation.setExperimentFlag(outer1_50.SIGNAL_AV1_ENCODE, true);
          }
          setAttenuation.setExperimentFlag(outer1_50.SIGNAL_AV1_DECODE, true);
        } else {
          tmp33Result = tmp33(tmp34[29]);
          let isIOSResult = tmp33Result.isIOS();
          if (!isIOSResult) {
            isIOSResult = outer1_0(outer1_3[29]).isAndroid();
            const obj10 = outer1_0(outer1_3[29]);
          }
          if (isIOSResult) {
            setAttenuation.setExperimentFlag(outer1_50.SIGNAL_AV1_DECODE, true);
            setAttenuation.setExperimentFlag(outer1_50.SIGNAL_AV1_HARDWARE_DECODE, true);
          }
        }
        obj8 = outer1_0(outer1_3[29]);
      }
      obj7 = outer1_0(outer1_3[29]);
    }
    obj6 = outer1_0(outer1_3[29]);
    if (obj13.isWeb()) {
      obj = { location: "MediaEngineStore" };
      setAttenuation.setExperimentFlag(outer1_50.BROWSER_HEVC, outer1_1(outer1_3[56]).getConfig(obj).enabled);
      const obj14 = outer1_1(outer1_3[56]);
    }
    obj13 = outer1_0(outer1_3[29]);
    let enabled = outer1_0(outer1_3[29]).isWindows();
    if (enabled) {
      enabled = null != outer1_135;
      const obj17 = outer1_135;
    }
    if (enabled) {
      enabled = obj17.startsWith("AMD");
    }
    if (enabled) {
      enabled = outer1_0(outer1_3[57]).getWmfGpuEncode("MediaEngineStore").enabled;
      const obj18 = outer1_0(outer1_3[57]);
    }
    if (enabled) {
      setAttenuation.setExperimentFlag(outer1_50.WMF_GPU_ENCODE, true);
    }
    const obj16 = outer1_0(outer1_3[29]);
    let enabled2 = outer1_0(outer1_3[29]).isWindows();
    if (enabled2) {
      enabled2 = null != outer1_135;
      const obj20 = outer1_135;
    }
    if (enabled2) {
      enabled2 = obj20.startsWith("Intel");
    }
    if (enabled2) {
      enabled2 = true === outer1_136;
    }
    if (enabled2) {
      enabled2 = 1 === outer1_137;
    }
    if (enabled2) {
      enabled2 = outer1_0(outer1_3[58]).getWmfGpuEncodeIntel("MediaEngineStore").enabled;
      const obj21 = outer1_0(outer1_3[58]);
    }
    if (enabled2) {
      setAttenuation.setExperimentFlag(outer1_50.WMF_GPU_ENCODE, true);
      setAttenuation.setExperimentFlag(outer1_50.INTEL_GPU_DISABLE, true);
    }
    const obj19 = outer1_0(outer1_3[29]);
    let enabled3 = outer1_0(outer1_3[29]).isWindows();
    if (enabled3) {
      enabled3 = null != outer1_135;
      const obj23 = outer1_135;
    }
    if (enabled3) {
      enabled3 = obj23.startsWith("Intel");
    }
    if (enabled3) {
      enabled3 = true === outer1_136;
    }
    if (enabled3) {
      enabled3 = 1 === outer1_137;
    }
    if (enabled3) {
      enabled3 = outer1_0(outer1_3[59]).getWmfCpuEncodeIntel("MediaEngineStore").enabled;
      const obj24 = outer1_0(outer1_3[59]);
    }
    if (enabled3) {
      setAttenuation.setExperimentFlag(outer1_50.INTEL_GPU_DISABLE, true);
    }
    const obj22 = outer1_0(outer1_3[29]);
    let enabled4 = outer1_0(outer1_3[29]).isWindows();
    if (enabled4) {
      enabled4 = null != outer1_135;
      const obj26 = outer1_135;
    }
    if (enabled4) {
      enabled4 = obj26.startsWith("Qualcomm");
    }
    if (enabled4) {
      enabled4 = outer1_0(outer1_3[57]).getWmfGpuEncode("MediaEngineStore").enabled;
      const obj27 = outer1_0(outer1_3[57]);
    }
    if (enabled4) {
      setAttenuation.setExperimentFlag(outer1_50.WMF_GPU_ENCODE, true);
    }
    result2 = outer1_77.setHasFullbandPerformance(outer1_1(outer1_3[60])());
    result2 = setAttenuation.setRemoteAudioHistory(1000);
    if (outer1_1(outer1_3[61])(outer1_74)) {
      result2 = outer1_59;
      result2 = setAttenuation.setClipsKeyFrameInterval(outer1_59);
    }
    result2 = outer1_157(setAttenuation.context);
    result2 = setAttenuation.setPostponeDecodeLevel(100);
    const keys = Object.keys(result2.localMutes);
    for (let num10 = 0; num10 < keys.length; num10 = num10 + 1) {
      result2 = keys[num10];
      result2 = outer1_16;
      if (result2 !== outer1_16.getId()) {
        result2 = setAttenuation.setLocalMute(result2, result2.localMutes[result2]);
      }
    }
    const keys1 = Object.keys(result2.localVolumes);
    for (let num11 = 0; num11 < keys1.length; num11 = num11 + 1) {
      result2 = keys1[num11];
      result2 = outer1_16;
      if (result2 !== outer1_16.getId()) {
        result2 = setAttenuation.setLocalVolume(result2, result2.localVolumes[result2]);
      }
    }
    const keys2 = Object.keys(result2.localPans);
    let num12 = 0;
    if (0 < keys2.length) {
      do {
        result2 = keys2[num12];
        let rect = result2.localPans[result2];
        result2 = setAttenuation.setLocalPan(result2, rect.left, rect.right);
        num12 = num12 + 1;
        length = keys2.length;
      } while (num12 < length);
    }
    const keys3 = Object.keys(result2.disabledLocalVideos);
    let num13 = 0;
    if (0 < keys3.length) {
      do {
        result2 = keys3[num13];
        result2 = setAttenuation.setLocalVideoDisabled(result2, result2.disabledLocalVideos[result2]);
        num13 = num13 + 1;
        length2 = keys3.length;
      } while (num13 < length2);
    }
    result2 = setAttenuation.on(outer1_0(outer1_3[30]).BaseConnectionEvent.Speaking, (userId, speakingFlags, arg2, voiceDb) => {
      let obj = outer2_1(outer2_3[49]);
      obj = { type: "SPEAKING", context: setAttenuation.context, userId, speakingFlags, voiceDb };
      obj.dispatch(obj);
    });
    if (setAttenuation.context === outer1_52.DEFAULT) {
      const outer1_103 = false;
      result2 = outer1_0;
      result2 = outer1_3;
      result2 = setAttenuation.on(outer1_0(outer1_3[30]).BaseConnectionEvent.SpeakingWhileMuted, () => {
        const outer2_103 = true;
        if (!outer2_103) {
          outer2_74.emitChange();
        }
        outer2_104.start(outer2_66, () => {
          const outer3_103 = false;
          outer3_74.emitChange();
        });
      });
    }
    result2 = setAttenuation.on(outer1_0(outer1_3[30]).BaseConnectionEvent.DesktopSourceEnd, (endReason, errorCode) => {
      let obj = outer2_1(outer2_3[49]);
      obj = { type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE", settings: obj, endReason, errorCode };
      obj = { context: setAttenuation.context };
      obj.dispatch(obj);
    });
    result2 = setAttenuation.on(outer1_0(outer1_3[30]).BaseConnectionEvent.InteractionRequired, (required) => {
      let obj = outer2_1(outer2_3[49]);
      obj = { type: "MEDIA_ENGINE_INTERACTION_REQUIRED", required };
      obj.dispatch(obj);
    });
    result2 = setAttenuation.on(outer1_0(outer1_3[30]).BaseConnectionEvent.VideoHookInitialize, (backend, format, framebuffer_format, sample_count, success, reinitialization) => {
      let desktopSource;
      if (null != outer2_79) {
        desktopSource = outer2_79.desktopSource;
      }
      if (null != desktopSource) {
        let obj = outer2_1(outer2_3[48]);
        obj = { backend, format, framebuffer_format, sample_count, success, reinitialization };
        let desktopSource1;
        if (null != outer2_79) {
          desktopSource1 = outer2_79.desktopSource;
        }
        const merged = Object.assign(outer2_1(outer2_3[62])(desktopSource1));
        obj.track(outer2_23.VIDEOHOOK_INITIALIZED, obj);
        const tmp15 = outer2_1(outer2_3[62]);
      }
    });
    result2 = setAttenuation.on(outer1_0(outer1_3[30]).BaseConnectionEvent.NoiseCancellationError, outer1_164);
    result2 = setAttenuation.on(outer1_0(outer1_3[30]).BaseConnectionEvent.VoiceActivityDetectorError, outer1_164);
    result2 = setAttenuation.on(outer1_0(outer1_3[30]).BaseConnectionEvent.SdpError, (operation, error, type, sdp) => {
      let obj = outer2_1(outer2_3[48]);
      obj = { operation, error, type, sdp };
      obj.track(outer2_23.SDP_ERROR, obj);
    });
    result2 = setAttenuation.on(outer1_0(outer1_3[30]).BaseConnectionEvent.VideoState, (videoState) => {
      let obj = outer2_1(outer2_3[49]);
      obj = { type: "MEDIA_ENGINE_VIDEO_STATE_CHANGED", videoState, context: setAttenuation.context };
      obj.dispatch(obj);
    });
    result2 = setAttenuation.setBitRate(outer1_17.bitrate);
    result2 = setAttenuation.applyVideoQualityMode(outer1_22.mode);
    const obj25 = outer1_0(outer1_3[29]);
    result2 = outer1_0(outer1_3[29]).isWindows();
    if (result2) {
      result2 = outer1_77;
      result2 = outer1_51;
      result2 = outer1_77.supports(outer1_51.ASYNC_VIDEO_INPUT_DEVICE_INIT);
    }
    if (result2) {
      result2 = outer1_77;
      result2 = outer1_77.setAsyncVideoInputDeviceInit(true);
    }
  });
  store3.on(require(4227) /* getMediaEngineImpl */.MediaEngineEvent.DeviceChange, (inputDevices, outputDevices, videoDevices) => {
    outer1_94.stop();
    let obj = outer1_1(outer1_3[49]);
    obj = { type: "MEDIA_ENGINE_DEVICES", inputDevices, outputDevices, videoDevices };
    obj.dispatch(obj);
  });
  store3.on(require(4227) /* getMediaEngineImpl */.MediaEngineEvent.VolumeChange, (inputVolume, outputVolume) => {
    let obj = outer1_1(outer1_3[49]);
    obj = { type: "AUDIO_VOLUME_CHANGE", inputVolume, outputVolume };
    obj.dispatch(obj);
  });
  store3.on(require(4227) /* getMediaEngineImpl */.MediaEngineEvent.DesktopSourceEnd, (endReason, errorCode) => {
    let obj = outer1_1(outer1_3[49]);
    obj = { type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE", settings: null, endReason, errorCode };
    obj.dispatch(obj);
  });
  store3.on(require(4227) /* getMediaEngineImpl */.MediaEngineEvent.AudioPermission, (granted) => {
    const outer1_129 = true;
    let obj = outer1_1(outer1_3[49]);
    obj = { type: "MEDIA_ENGINE_PERMISSION", kind: "audio", granted };
    obj.dispatch(obj);
  });
  store3.on(require(4227) /* getMediaEngineImpl */.MediaEngineEvent.VideoPermission, (granted) => {
    let obj = outer1_1(outer1_3[49]);
    obj = { type: "MEDIA_ENGINE_PERMISSION", kind: "video", granted };
    obj.dispatch(obj);
  });
  store3.on(require(4227) /* getMediaEngineImpl */.MediaEngineEvent.WatchdogTimeout, callback4(async () => {
    if ("canary" === window.GLOBAL_ENV.RELEASE_CHANNEL) {
      let obj = outer2_1(outer2_3[63]);
      obj = {};
      obj = { message: "Voice Watchdog Timeout" };
      obj.message = obj;
      yield obj.submitLiveCrashReport(obj);
    }
    while (true) {
      let tmp6 = tmp;
      let tmp7 = null;
      let num2 = 200;
      let tmp5 = outer2_62;
      if (null == tmp) {
        break;
      } else {
        num2 = tmp;
        break;
      }
      let _HermesInternal = HermesInternal;
      let str2 = "Watchdog timeout, report submission status: ";
      let warnResult = outer2_62.warn("Watchdog timeout, report submission status: " + num2);
      let tmp9 = outer2_1;
      let tmp10 = outer2_3;
      let num3 = 64;
      let tmp11 = null != outer2_1(outer2_3[64]).processUtils.setCrashReason;
      let tmp12 = outer2_1;
      let tmp13 = outer2_3;
      let num4 = 48;
      let obj4 = outer2_1(outer2_3[48]);
      let tmp14 = outer2_23;
      let obj1 = { minidump_submission_error: tmp };
      let tmp15 = tmp11;
      obj1.will_restart = tmp11;
      let obj2 = {};
      let flag = true;
      obj2.flush = true;
      let tmp16 = yield obj4.track(outer2_23.VOICE_WATCHDOG_TIMEOUT, obj1, obj2);
      while (true) {
        if (!tmp11) {
          break;
        } else {
          let tmp17 = outer2_62;
          let str3 = "Relaunching app due to voice watchdog timeout";
          let infoResult = outer2_62.info("Relaunching app due to voice watchdog timeout");
          let tmp19 = outer2_1;
          let tmp20 = outer2_3;
          let processUtils = outer2_1(outer2_3[64]).processUtils;
          let str4 = "voice-watchdog-timeout";
          let tmp21 = yield processUtils.setCrashReason("voice-watchdog-timeout");
          let tmp22 = outer2_0;
          let tmp23 = outer2_3;
          let num5 = 65;
          let Storage = outer2_0(outer2_3[65]).Storage;
          let _Date = Date;
          let str5 = Date.now();
          let str6 = "discord_watchdog_restart_timestamp";
          let result = Storage.set("discord_watchdog_restart_timestamp", str5.toString());
          let tmp25 = outer2_1;
          let app = outer2_1(outer2_3[64]).app;
          let relaunchResult = app.relaunch();
          break;
        }
      }
    }
  }));
  store3.on(require(4227) /* getMediaEngineImpl */.MediaEngineEvent.VideoInputInitialized, (description) => {
    let obj = outer1_1(outer1_3[48]);
    obj = { device_name: description.description.name };
    let rounded = null;
    if (!description.initializationTimerExpired) {
      const _Math = Math;
      rounded = Math.round(description.timeToFirstFrame * outer1_1(outer1_3[28]).Millis.SECOND);
    }
    obj.time_to_first_frame_ms = rounded;
    ({ initializationTimerExpired: obj2.timed_out, entropy: obj2.activity } = description);
    obj.media_session_id = outer1_20.getMediaSessionId();
    obj.rtc_connection_id = outer1_20.getRTCConnectionId();
    obj.track(outer1_23.VIDEO_INPUT_INITIALIZED, obj);
  });
  store3.on(require(4227) /* getMediaEngineImpl */.MediaEngineEvent.AudioInputInitialized, (description) => {
    let obj = outer1_1(outer1_3[48]);
    obj = { device_name: description.description.name, time_to_initialized_ms: Math.round(description.timeToInitialized * outer1_1(outer1_3[28]).Millis.SECOND), rtc_connection_id: outer1_20.getRTCConnectionId() };
    obj.track(outer1_23.AUDIO_INPUT_INITIALIZED, obj);
  });
  store3.on(require(4227) /* getMediaEngineImpl */.MediaEngineEvent.ClipsRecordingRestartNeeded, () => {
    outer1_1(outer1_3[49]).dispatch({ type: "CLIPS_RESTART" });
  });
  store3.on(require(4227) /* getMediaEngineImpl */.MediaEngineEvent.ClipsInitFailure, (arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = outer1_87 < 3;
    outer1_87 = outer1_87 + 1;
    outer1_1(outer1_3[49]).wait(() => {
      let obj = outer2_1(outer2_3[49]);
      obj = { type: "CLIPS_INIT_FAILURE", errMsg: closure_0, applicationName: closure_1 };
      obj.dispatch(obj);
      if (closure_2) {
        obj = { type: "CLIPS_RESTART" };
        outer2_1(outer2_3[49]).dispatch(obj);
        const obj3 = outer2_1(outer2_3[49]);
      } else {
        const _HermesInternal = HermesInternal;
        outer2_62.warn("Clips init failure budget exhausted (" + outer2_87 + " consecutive unhealthy attempts); skipping auto-restart. A settings flip / game change / app restart will retry.");
      }
    });
  });
  store3.on(require(4227) /* getMediaEngineImpl */.MediaEngineEvent.ClipsRecordingHealthy, () => {
    if (0 !== outer1_87) {
      const _HermesInternal = HermesInternal;
      outer1_62.info("Clips bridge reported healthy; resetting restart budget (was " + outer1_87 + ").");
      outer1_87 = 0;
    }
  });
  store3.on(require(4227) /* getMediaEngineImpl */.MediaEngineEvent.ClipsRecordingReadyChanged, (arg0) => {
    if (outer1_88 !== arg0) {
      const _HermesInternal = HermesInternal;
      outer1_62.info("Clips recorder ready changed: " + arg0);
      outer1_88 = arg0;
    }
  });
  store3.on(require(4227) /* getMediaEngineImpl */.MediaEngineEvent.ClipsBridgeIdleShutdown, () => {
    outer1_62.info("Clips bridge idle shutdown");
  });
  store3.on(require(4227) /* getMediaEngineImpl */.MediaEngineEvent.ClipsRecordingEnded, (arg0, soundshareId) => {
    let id;
    if (null != outer1_80) {
      const desktopSource = outer1_80.desktopSource;
      if (null != desktopSource) {
        id = desktopSource.id;
      }
    }
    if (id === arg0) {
      let tmp2 = null != soundshareId;
      if (tmp2) {
        soundshareId = undefined;
        if (null != outer1_79) {
          const desktopSource2 = outer1_79.desktopSource;
          if (null != desktopSource2) {
            soundshareId = desktopSource2.soundshareId;
          }
        }
        tmp2 = soundshareId !== soundshareId;
      }
      if (tmp2) {
        const result = outer1_2(outer1_3[40]).cancelAttachToProcess(soundshareId);
        const obj = outer1_2(outer1_3[40]);
      }
      outer1_80 = null;
    }
  });
  store3.on(require(4227) /* getMediaEngineImpl */.MediaEngineEvent.NativeScreenSharePickerUpdate, (existing, content) => {
    let obj = outer1_1(outer1_3[49]);
    obj = { type: "NATIVE_SCREEN_SHARE_PICKER_UPDATE", existing, content };
    obj.dispatch(obj);
  });
  store3.on(require(4227) /* getMediaEngineImpl */.MediaEngineEvent.NativeScreenSharePickerCancel, (existing) => {
    let obj = outer1_1(outer1_3[49]);
    obj = { type: "NATIVE_SCREEN_SHARE_PICKER_CANCEL", existing };
    obj.dispatch(obj);
  });
  store3.on(require(4227) /* getMediaEngineImpl */.MediaEngineEvent.NativeScreenSharePickerError, (error) => {
    let obj = outer1_1(outer1_3[49]);
    obj = { type: "NATIVE_SCREEN_SHARE_PICKER_ERROR", error };
    obj.dispatch(obj);
  });
  store3.on(require(4227) /* getMediaEngineImpl */.MediaEngineEvent.AudioDeviceModuleError, (audio_device_module, code, device_name) => {
    let obj = outer1_1(outer1_3[48]);
    obj = { audio_device_module, code, device_name };
    obj.track(outer1_23.AUDIO_DEVICE_MODULE_ERROR, obj);
  });
  store3.on(require(4227) /* getMediaEngineImpl */.MediaEngineEvent.VideoCodecError, (mode) => {
    if ("encode" === mode.mode) {
      let VIDEO_DECODE_ERROR = outer1_0(outer1_3[47]).AVError.VIDEO_ENCODE_ERROR;
    } else {
      VIDEO_DECODE_ERROR = outer1_0(outer1_3[47]).AVError.VIDEO_DECODE_ERROR;
    }
    let obj = { videoCodec: mode.codecStandard, errorMessage: mode.message };
    if (VIDEO_DECODE_ERROR === outer1_0(outer1_3[47]).AVError.VIDEO_ENCODE_ERROR) {
      obj = { type: VIDEO_DECODE_ERROR };
      const merged = Object.assign(obj);
      obj["videoEncoder"] = mode.implName;
    } else {
      obj = { type: VIDEO_DECODE_ERROR };
      const merged1 = Object.assign(obj);
      obj["videoDecoder"] = mode.implName;
    }
    outer1_0(outer1_3[47]).reportAVError(obj);
  });
  store3.on(require(4227) /* getMediaEngineImpl */.MediaEngineEvent.ConnectionStats, (arr) => {
    let obj = outer1_1(outer1_3[49]);
    obj = {
      type: "MEDIA_ENGINE_CONNECTION_STATS",
      connectionStats: arr.map((connection) => {
        connection = connection.connection;
        const outer2_72 = tmp + 1;
        return { stats: connection.stats, mediaEngineConnectionId: connection.mediaEngineConnectionId, version: +outer2_72, context: connection.context };
      })
    };
    obj.dispatch(obj);
  });
  store3.on(require(4227) /* getMediaEngineImpl */.MediaEngineEvent.VoiceProcessingError, handleVoiceProcessingError);
  store3.on(require(4227) /* getMediaEngineImpl */.MediaEngineEvent.VideoFilterError, handleVideoFilterError);
  store3.on(require(4227) /* getMediaEngineImpl */.MediaEngineEvent.VoiceQueueMetrics, (arg0) => {
    const tmp = outer1_203(arg0);
    if (null !== tmp) {
      outer1_1(outer1_3[48]).track(outer1_23.VOICE_QUEUE_METRICS, tmp);
      const obj = outer1_1(outer1_3[48]);
    }
  });
  let result = store3.setOnVideoContainerResized((arg0, arg1, arg2) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    outer1_1(outer1_3[49]).wait(() => {
      let obj = outer2_1(outer2_3[49]);
      obj = { type: "VIDEO_SIZE_UPDATE", streamId: closure_0, dimensions: obj };
      obj = { width: closure_1, height: closure_2 };
      return obj.dispatch(obj);
    });
  });
  (function setGamescopeVaapiEnabled() {
    return outer1_195(...arguments);
  })();
  navigation.reset();
  getSystemAnalyticsInfo().then((arg0) => {
    let outer1_135;
    let outer1_136;
    let outer1_137;
    if (null != arg0) {
      ({ gpu_brand: outer1_135, has_intel_hybrid_igpu: outer1_136, gpu_count: outer1_137 } = arg0);
    }
  });
  store3.on(require(4227) /* getMediaEngineImpl */.MediaEngineEvent.SystemMicrophoneModeChange, (arg0) => {
    const outer1_133 = arg0;
    outer1_77.eachConnection(outer1_169);
    outer1_74.emitChange();
  });
}
function supportsWindowsGraphicsCapture() {
  let isWindowsResult = require(477) /* set */.isWindows();
  if (isWindowsResult) {
    let release;
    if (null != importDefault(3741)) {
      release = importDefault(3741).os.release;
    }
    isWindowsResult = importDefault(12774).satisfies(release, closure_34);
    const obj2 = importDefault(12774);
  }
  return isWindowsResult;
}
function supportsScreenCaptureKit() {
  let isMacResult = require(477) /* set */.isMac();
  if (isMacResult) {
    isMacResult = store3.supports(Features.SCREEN_CAPTURE_KIT);
  }
  if (isMacResult) {
    let release;
    if (null != importDefault(3741)) {
      release = importDefault(3741).os.release;
    }
    isMacResult = importDefault(12774).satisfies(release, closure_29);
    const obj2 = importDefault(12774);
  }
  return isMacResult;
}
function supportsAutomaticAudioSubsystem() {
  let isWindowsResult = require(477) /* set */.isWindows();
  if (isWindowsResult) {
    isWindowsResult = store3.supports(Features.AUTOMATIC_AUDIO_SUBSYSTEM);
  }
  if (isWindowsResult) {
    isWindowsResult = store3.supports(Features.AUDIO_SUBSYSTEM_DEFERRED_SWITCH);
  }
  return isWindowsResult;
}
function isReadyToMigrateToSingleAdmOffering() {
  return store3.supports(Features.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
}
function mergeSettings(arg0, context, persist) {
  let DEFAULT = context;
  let flag = persist;
  if (context === undefined) {
    DEFAULT = MediaEngineContextTypes.DEFAULT;
  }
  if (flag === undefined) {
    flag = true;
  }
  const tmp2 = getStoredSettings(DEFAULT);
  const merged = Object.assign(tmp2, arg0);
  if (flag) {
    const Storage = require(587) /* Storage */.Storage;
    const result = Storage.set(MediaEngineStore, closure_82);
  }
  return tmp2;
}
function applySettings() {
  const tmp = _getSettings0();
  setInputDevice(tmp.inputDeviceId);
  store3.setAudioOutputDevice(tmp.outputDeviceId);
  updateVideo();
  store3.setInputVolume(tmp.inputVolume);
  const setOutputVolume = store3.setOutputVolume;
  if (obj.getConfig({ location: "MediaEngineStore.applySettings" }).audioOutputPresent) {
    setOutputVolume(tmp.outputVolume);
  } else {
    setOutputVolume(closure_45);
  }
  store3.setAecDump(tmp.aecDumpEnabled);
  const result = store3.setSidechainCompression(tmp.sidechainCompression);
  const result1 = store3.setSidechainCompressionStrength(tmp.sidechainCompressionStrength);
  const result2 = store3.setAudioInputBypassSystemProcessing(tmp.bypassSystemInputProcessing);
  obj = importDefault(10712);
  if (obj2.isLinux()) {
    let tmp17 = null == importDefault(5142);
    if (!tmp17) {
      tmp17 = null == importDefault(5142).setOpenH264Enabled;
    }
    if (!tmp17) {
      importDefault(5142).setOpenH264Enabled(tmp.openH264Enabled);
      const obj3 = importDefault(5142);
    }
  }
  setAudioMixerOptions(tmp.audioMixerSettings);
}
function tryEnable() {
  if (!closure_84) {
    store3.enable().then(() => outer1_1(outer1_3[49]).dispatch({ type: "MEDIA_ENGINE_SET_AUDIO_ENABLED", enabled: true, unmute: false }));
    const enableResult = store3.enable();
  }
}
function makeDisabledDevice(name) {
  return { id: DEFAULT_DEVICE_ID, index: 0, name, disabled: true, guid: undefined, hardwareId: undefined, containerId: undefined };
}
function hasHardwareMatch(type, arr) {
  let closure_0 = type;
  return null != arr.find((containerId) => {
    let tmp = null != containerId.containerId;
    if (tmp) {
      tmp = containerId.containerId === type.containerId;
    }
    if (!tmp) {
      let tmp3 = null != containerId.hardwareId;
      if (tmp3) {
        tmp3 = containerId.hardwareId === type.hardwareId;
      }
      tmp = tmp3;
    }
    if (!tmp) {
      let tmp5 = null != containerId.originalId;
      if (tmp5) {
        tmp5 = containerId.originalId === type.originalId;
      }
      tmp = tmp5;
    }
    return tmp;
  });
}
function isDeviceSystemEchoIncompatible(windowsDeviceService) {
  windowsDeviceService = undefined;
  if (null != windowsDeviceService) {
    windowsDeviceService = windowsDeviceService.windowsDeviceService;
  }
  let tmp2 = "voicemodvad" === windowsDeviceService;
  if (!tmp2) {
    let hasItem;
    if (null != windowsDeviceService) {
      if (null != windowsDeviceService.name) {
        const formatted = str.toLowerCase();
        hasItem = formatted.includes("voicemod");
      }
    }
    tmp2 = true === hasItem;
  }
  return tmp2;
}
function inferDeviceFormFactor(type) {
  if ("videoinput" === type.type !== true) {
    if (hasHardwareMatch(type, tmp3) !== true) {
      const items = ["builtin", "displayport", "hdmi"];
      const macosTransportType = type.macosTransportType;
      let str2 = "";
      let str = "";
      if (null != macosTransportType) {
        str = macosTransportType;
      }
      if (items.includes(str) !== true) {
        let isMatch = null != type.hardwareId;
        if (isMatch) {
          isMatch = regex.test(type.hardwareId);
        }
        if (isMatch !== true) {
          const obj = importDefault(22)(type.hardwareId);
          if (obj.startsWith("BTHENUM") !== true) {
            const items1 = ["bluetooth", "bluetoothle"];
            const macosTransportType2 = type.macosTransportType;
            let tmp6 = str2;
            if (null != macosTransportType2) {
              tmp6 = macosTransportType2;
            }
            if (items1.includes(tmp6) !== true) {
              const items2 = ["airplay", "continuitycapturewireless"];
              const macosTransportType3 = type.macosTransportType;
              if (null != macosTransportType3) {
                str2 = macosTransportType3;
              }
              if (items2.includes(str2) === true) {
                return obj.AIRPLAY;
              } else {
                let tmp7 = "audioinput" === type.type;
                if (tmp7) {
                  tmp7 = hasHardwareMatch(type, tmp2);
                }
                if (tmp7 !== true) {
                  let tmp9 = "audiooutput" === type.type;
                  if (tmp9) {
                    tmp9 = hasHardwareMatch(type, tmp);
                  }
                }
                return obj.HEADSET;
              }
            }
          }
          return obj.BLUETOOTH;
        }
      }
      return obj.INTEGRATED;
    }
  }
  return obj.WEBCAM;
}
function convertDevices(videoDevices, arg1) {
  let closure_0 = videoDevices;
  const arr = videoDevices[{ audioinput: "inputDevices", audiooutput: "outputDevices", videoinput: "videoDevices" }[arg1.deviceType]];
  if (0 === arr.length) {
    const tmp5 = makeDisabledDevice(tmp);
    const obj = {};
    obj[tmp5.id] = tmp5;
    return obj;
  } else {
    const mapped = importDefault(22)(arr).map((id) => ({ id: id.id, index: id.index, name: id.name, disabled: false, facing: id.facing, guid: id.originalId, hardwareId: id.hardwareId, containerId: id.containerId, effects: id.effects, formFactor: outer1_181(id, closure_0), windowsDeviceService: id.windowsDeviceService }));
    const arr2 = importDefault(22)(arr);
    return mapped.keyBy("id").value();
  }
}
function getDeviceId(getMediaEngineImpl, id) {
  let firstResult = getMediaEngineImpl[id];
  if (null == firstResult) {
    firstResult = getMediaEngineImpl[DEFAULT_DEVICE_ID];
  }
  if (null == firstResult) {
    const values = importDefault(22)(getMediaEngineImpl).values();
    firstResult = values.first();
    const obj = importDefault(22)(getMediaEngineImpl);
  }
  if (null != firstResult) {
    id = firstResult.id;
  }
  return id;
}
function maybeProbeAudioEffects(inputDeviceId) {
  let obj = require(477) /* set */;
  if (obj.isWindows()) {
    obj = { location: "MediaEngineStore.setInputDevice" };
    if (obj2.getConfig(obj).probeAudioEffects) {
      let guid;
      if (null != obj3[inputDeviceId]) {
        guid = tmp4.guid;
      }
      if (null != guid) {
        importDefault(12830)(tmp4.guid, inputDeviceId, closure_77);
      }
    }
    obj2 = importDefault(12829);
  }
}
function setInputDevice(inputDeviceId) {
  store3.setAudioInputDevice(inputDeviceId);
  maybeProbeAudioEffects(inputDeviceId);
}
function hasHapticsOverAudioOutputDevices(closure_92) {
  const values = Object.values(closure_92);
  return values.some((name) => {
    const formatted = name.name.toLowerCase();
    return formatted.includes("dualsense");
  });
}
function setOutputDevices(videoDevices) {
  const obj = { deviceType: constants9.AUDIO_OUTPUT };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.defaultName = intl.string(require(1212) /* getSystemLocale */.t.xlUg0v);
  let closure_92 = convertDevices(videoDevices, obj);
  if (!obj2.isEqual(closure_92, closure_92)) {
    store3.setAudioOutputDevice(getDeviceId(closure_92, _getSettings0().outputDeviceId));
    store3.eachConnection(updateConnectionVoiceProcessing);
    const tmp13 = hasHapticsOverAudioOutputDevices(closure_92);
    if (tmp11 !== tmp13) {
      (function updateConnectionsDiscardRearChannels(arg0) {
        let closure_0 = arg0;
        outer1_77.eachConnection((context) => {
          if (context.context === outer2_52.STREAM) {
            const result = context.setSoundshareDiscardRearChannels(closure_0);
          }
        });
      })(tmp13);
    }
    tmp11 = hasHapticsOverAudioOutputDevices(closure_92);
  }
}
function applyRemoteSettings(arg0) {
  let length;
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  let audioContextSettings;
  let c2;
  audioContextSettings = settings.settings.audioContextSettings;
  if (null == audioContextSettings) {
    let obj = { user: {}, stream: {} };
    audioContextSettings = obj;
  }
  function _loop() {
    let done;
    let length;
    if (obj === outer1_40.USER) {
      let STREAM = outer1_52.DEFAULT;
    } else {
      STREAM = outer1_52.STREAM;
    }
    const audioContextSettings = STREAM === outer1_52.STREAM ? outer1_46 : outer1_45;
    obj = audioContextSettings[obj];
    if (null == obj) {
      obj = {};
    }
    const tmp3 = outer1_157(STREAM);
    const localMutes = tmp3.localMutes;
    const localVolumes = tmp3.localVolumes;
    function _loop2(closure_0, muted) {
      let closure_1 = muted;
      if (null != obj.getPendingAudioSettings(closure_0, closure_0)) {
        return 1;
      } else {
        if (muted.muted) {
          tmp4[closure_0] = true;
        } else {
          delete tmp3[tmp2];
        }
        if (muted.volume !== closure_1) {
          localVolumes[closure_0] = muted.volume;
        } else {
          delete tmp[tmp2];
        }
        outer2_77.eachConnection((setLocalVolume) => {
          setLocalVolume.setLocalVolume(closure_0, muted.volume);
          setLocalVolume.setLocalMute(closure_0, muted.muted);
        }, closure_0);
      }
      obj = flag(outer2_3[73]);
    }
    const entries = Object.entries(obj);
    let num = 0;
    if (0 < entries.length) {
      do {
        let tmp4 = outer1_9;
        let tmp5 = outer1_9(entries[num], 2);
        let _loop2Result = _loop2(tmp5[0], tmp5[1]);
        num = num + 1;
        length = entries.length;
      } while (num < length);
    }
    if (STREAM) {
      const _Set = Set;
      const _Object = Object;
      function _loop3(value) {
        let closure_0 = value;
        if (null != obj[value]) {
          return 1;
        } else {
          delete tmp[tmp2];
          delete tmp[tmp2];
          outer2_77.eachConnection((setLocalVolume) => {
            setLocalVolume.setLocalVolume(closure_0, outer1_1);
            setLocalVolume.setLocalMute(closure_0, false);
          }, closure_0);
        }
      }
      const items = [];
      const _Object2 = Object;
      let arraySpreadResult = HermesBuiltin.arraySpread(Object.keys(localMutes), 0);
      arraySpreadResult = HermesBuiltin.arraySpread(Object.keys(localVolumes), arraySpreadResult);
      const set = new Set(items);
      const tmp17 = outer1_150(set);
      let iter = tmp17();
      if (!iter.done) {
        do {
          let _loop3Result = _loop3(iter.value);
          let iter2 = tmp17();
          iter = iter2;
          done = iter2.done;
        } while (!done);
      }
    }
    outer1_175({ localMutes, localVolumes }, STREAM);
  }
  const keys = Object.keys(audioContextSettings);
  let num = 0;
  if (0 < keys.length) {
    do {
      c2 = keys[num];
      let _loopResult = _loop();
      num = num + 1;
      length = keys.length;
    } while (num < length);
  }
}
function maybeTryHookProcess(pidFromDesktopSource, sound) {
  let soundshareId;
  let soundshareSession;
  if (sound) {
    if (null != tmp20) {
      let audioPid = pidFromDesktopSource;
      if (!tmp20.getExperimentalSoundshare()) {
        audioPid = importDefault(4124).getAudioPid(pidFromDesktopSource);
        let obj2 = importDefault(4124);
      }
      let str2 = "";
      if (null != audioPid) {
        str2 = importDefault(4124).generateSessionFromPid(audioPid);
        const obj3 = importDefault(4124);
      }
      let obj = { soundshareId: audioPid, soundshareSession: str2 };
    } else {
      importDefaultResult.info("Error: trying to get soundshare id before MediaEngineStore is instantiated.");
      obj = { soundshareId: null, soundshareSession: "" };
    }
    ({ soundshareId, soundshareSession } = obj);
    if (null != soundshareId) {
      (function tryHookSoundshare(soundshareId, soundshareSession) {
        let closure_0 = soundshareId;
        let obj = outer1_0(outer1_3[29]);
        let isWindowsResult = obj.isWindows();
        if (isWindowsResult) {
          isWindowsResult = soundshareId > 1;
        }
        if (isWindowsResult) {
          obj = { soundshare_session: soundshareSession };
          const obj2 = outer1_2(outer1_3[40]);
          outer1_2(outer1_3[40]).attachToProcess(soundshareId, obj).then((arg0) => {
            let closure_0 = arg0;
            let result = null == arg0;
            if (!result) {
              result = outer2_13.shouldContinueWithoutElevatedProcessForPID(closure_0);
            }
            if (!result) {
              outer2_1(outer2_3[49]).wait(() => {
                let obj = outer3_1(outer3_3[49]);
                obj = { type: "MEDIA_ENGINE_SOUNDSHARE_FAILED", errorMessage: closure_0 };
                obj.dispatch(obj);
              });
              let obj = outer2_1(outer2_3[49]);
            }
          });
          const attachToProcessResult = outer1_2(outer1_3[40]).attachToProcess(soundshareId, obj);
        }
      })(soundshareId, soundshareSession);
      obj = { soundshareId, soundshareSession };
      return obj;
    }
  }
  let videoHook = null != pidFromDesktopSource;
  if (videoHook) {
    videoHook = _getSettings0().videoHook;
  }
  if (videoHook) {
    importAll(12765).attachToProcess(pidFromDesktopSource);
    const obj5 = importAll(12765);
  }
  return { soundshareId: null, soundshareSession: null };
}
function resetProbingState() {
  const DEFAULT = MediaEngineContextTypes.DEFAULT;
  const videoToggleStateMap = _getSettings0(DEFAULT).videoToggleStateMap;
  const entries = Object.entries(videoToggleStateMap);
  for (let num = 0; num < entries.length; num = num + 1) {
    let tmp3 = callback3;
    let tmp4 = callback3(entries[num], 2);
    let first = tmp4[0];
    let tmp6 = constants5;
    if (tmp4[1] === constants5.AUTO_PROBING) {
      delete tmp[tmp2];
    }
  }
  mergeSettings({ videoToggleStateMap }, DEFAULT, false);
}
function computeSpatialAudioEnabled(audioMixerSettings) {
  let supportsResult = true === audioMixerSettings.enabled && importDefault(12756).getConfig({ location: "MediaEngineStore" }).enabled;
  if (supportsResult) {
    supportsResult = store3.supports(Features.SPATIAL_AUDIO);
  }
  return supportsResult;
}
function setAudioMixerOptions(audioMixerSettings) {
  let closure_125 = computeSpatialAudioEnabled(audioMixerSettings);
  const obj = {};
  const merged = Object.assign(audioMixerSettings);
  obj["enabled"] = closure_125;
  store3.setAudioMixerOptions(obj);
}
function trackVoiceProcessing(location) {
  const tmp = _getSettings0();
  const audioSubsystem = store3.getAudioSubsystem();
  const audioLayer = store3.getAudioLayer();
  const tmp4 = obj3[getDeviceId(undefined, obj3, tmp.inputDeviceId)];
  let name;
  if (null != tmp4) {
    name = tmp4.name;
  }
  const tmp6 = importDefault(10725);
  let obj = importDefault(675);
  obj = { echo_cancellation: tmp.echoCancellation, noise_cancellation: tmp.noiseCancellation, noise_suppression: tmp.noiseSuppression, automatic_gain_control: tmp.automaticGainControl, location, bypass_system_input_processing: tmp.bypassSystemInputProcessing, audio_subsystem: audioSubsystem, audio_layer: audioLayer, input_device: name, effective_noise_cancellation: importDefault(10725)(tmp.noiseCancellation, tmp20.getSystemMicrophoneMode()) };
  obj.track(constants.VOICE_PROCESSING, obj);
}
function setLoopback() {
  const tmp = _getSettings0();
  const inputDeviceId = tmp.inputDeviceId;
  const tmp3 = closure_18.hasEchoCancellation(inputDeviceId) || tmp.echoCancellation;
  const tmp4 = closure_18.hasNoiseSuppression(inputDeviceId) || tmp.noiseSuppression;
  const tmp5 = getAutomaticGainControlConfig;
  const tmp6 = closure_18.hasAutomaticGainControl(inputDeviceId) || tmp.automaticGainControl;
  store3.setLoopback(set2.size > 0, { echoCancellation: tmp3, echoCancellationPreEcho: set2.size <= 0, noiseSuppression: tmp4, automaticGainControlConfig: tmp5(closure_18.hasAutomaticGainControl(inputDeviceId) || tmp.automaticGainControl), noiseCancellation: tmp.noiseCancellation });
}
async function _setGamescopeVaapiEnabled() {
  if (outer2_77.supports(outer2_51.VAAPI)) {
    const _window = window;
    let getSystemInfo;
    if (null != DiscordNative) {
      const processUtils = DiscordNative.processUtils;
      if (null != processUtils) {
        getSystemInfo = processUtils.getSystemInfo;
      }
    }
    if (null != getSystemInfo) {
      const _window2 = window;
      const electronGPUInfo = yield processUtils2.getSystemInfo().electronGPUInfo;
      let gpuDevice;
      if (null != electronGPUInfo) {
        gpuDevice = electronGPUInfo.gpuDevice;
      }
      if (null == gpuDevice) {
        gpuDevice = [];
      }
      if (gpuDevice.some((vendorId) => 4098 === vendorId.vendorId)) {
        const outer2_143 = true;
        const outer2_142 = outer2_77.supports(outer2_51.GAMESCOPE_CAPTURE);
      }
    }
  }
}
function isKrispAvailable() {
  return !c115;
}
async function _setupKrispNativeModule() {
  yield outer2_1(outer2_3[68]).ensureModule("discord_krisp");
  const obj = outer2_1(outer2_3[68]);
  const requireModuleResult = outer2_1(outer2_3[68]).requireModule("discord_krisp");
  const outer2_114 = true;
  let sdkVersion;
  if (null != requireModuleResult.getSdkVersion) {
    sdkVersion = obj3.getSdkVersion();
  }
  const outer2_116 = sdkVersion;
  let suppressionLevel;
  if (null != requireModuleResult.getSuppressionLevel) {
    suppressionLevel = obj3.getSuppressionLevel();
  }
  let num = 100;
  if (null != suppressionLevel) {
    num = suppressionLevel;
  }
  const outer2_117 = num;
  const obj2 = outer2_1(outer2_3[68]);
  if (obj4.isWindows()) {
    if (null != obj3.setMklZenOverrideEnabled) {
      const result = obj3.setMklZenOverrideEnabled(outer2_0(outer2_3[75]).getMklZenOverrideExperimentConfig("setupKrispNativeModule").enabled);
      const obj5 = outer2_0(outer2_3[75]);
    }
  }
  if (null != requireModuleResult.getNcModels) {
    const ncModels = obj3.getNcModels();
    ncModels.then((arg0) => {
      const outer3_119 = arg0;
      outer3_74.emitChange();
    });
  }
  outer2_74.emitChange();
  obj4 = outer2_0(outer2_3[29]);
  yield outer2_1(outer2_3[68]).ensureModule("discord_voice");
  const obj6 = outer2_1(outer2_3[68]);
  const requireModuleResult1 = outer2_1(outer2_3[68]).requireModule("discord_voice");
  if (null != requireModuleResult1.setupKrispPath) {
    requireModuleResult1.setupKrispPath();
  }
  const outer2_113 = false;
}
function maybeSetupKrispModule() {
  let obj = require(477) /* set */;
  let isWindowsResult = obj.isWindows();
  if (!isWindowsResult) {
    isWindowsResult = require(477) /* set */.isLinux();
    const obj2 = require(477) /* set */;
  }
  if (!isWindowsResult) {
    isWindowsResult = require(477) /* set */.isMac();
    const obj3 = require(477) /* set */;
  }
  if (isWindowsResult) {
    if (!c113) {
      if (!c114) {
        c113 = true;
        (function setupKrispNativeModule() {
          return outer1_197(...arguments);
        })();
      }
    }
  }
  if (obj4.isWeb()) {
    if (store3.supports(Features.NOISE_CANCELLATION)) {
      c114 = true;
      tmp20.emitChange();
    }
  }
  obj4 = require(477) /* set */;
  if (obj5.isWeb()) {
    obj = { noiseCancellation: false };
    mergeSettings(obj);
  }
}
async function _downloadOpenH() {
  const parsed = URL.parse(outer2_70);
  if (null === parsed) {
    outer2_62.log("OpenH264 URL ", tmp2, " is invalid");
  } else {
    const parts = tmp2.pathname.split("/");
    const replaced = parts[parts.length - 1].replace(".bz2", "");
    const obj4 = outer2_1(outer2_3[68]);
    outer2_62.log("OpenH264 is ready", yield obj4.downloadOpenH264(outer2_70, replaced, outer2_71, (arg0) => {
      outer3_62.log("OpenH264 download status", arg0);
    }));
    while (true) {
      let tmp6 = outer2_1;
      let tmp7 = outer2_3;
      let num = 48;
      let obj = outer2_1(outer2_3[48]);
      let tmp8 = outer2_23;
      obj = { success: flag, fetched_from_network: tmp5, error_message: "" };
      let trackResult = obj.track(outer2_23.VIDEO_OPENH264_DOWNLOADED, obj);
      if (!flag) {
        break;
      } else {
        let tmp10 = outer2_1;
        let tmp11 = outer2_3;
        let num2 = 68;
        let obj3 = outer2_1(outer2_3[68]);
        let tmp12 = replaced;
        let items = [replaced];
        let tmp13 = outer2_62;
        let str2 = "OpenH264 cleanup";
        let logResult2 = outer2_62.log("OpenH264 cleanup", yield obj3.cleanupUnusedOpenH264Files(items));
        break;
      }
    }
    const str5 = tmp2.pathname;
    const str7 = parts[parts.length - 1];
    const tmp26 = yield obj4.downloadOpenH264(outer2_70, replaced, outer2_71, (arg0) => {
      outer3_62.log("OpenH264 download status", arg0);
    });
  }
}
function maybeDownloadOpenH264(outer1_0, outer1_1, outer1_2, outer1_3) {
  if (obj.isLinux()) {
    (function downloadOpenH264() {
      return outer1_199(...arguments);
    })();
  }
}
function setAudioSubsystem(arg0) {
  if (arg0 === constants8.AUTOMATIC) {
    let obj = { automaticAudioSubsystem: true };
    mergeSettings(obj);
    interpretAutomaticAudioSubsystem();
  } else {
    obj = { automaticAudioSubsystem: false };
    mergeSettings(obj);
    store3.setAudioSubsystem(arg0);
  }
}
function interpretAutomaticAudioSubsystem() {
  store3.queueAudioSubsystem(constants8.EXPERIMENTAL);
}
function handleUserSettingsModal(section) {
  if (section.section === constants4.VOICE) {
    tryEnable();
  }
  return false;
}
function processQueueMetricsForAnalytics(taskMetrics) {
  let num2;
  if (null != taskMetrics.taskMetrics) {
    if (0 !== taskMetrics.taskMetrics.length) {
      if (1 === taskMetrics.taskMetrics.length) {
        return null;
      } else {
        const obj = { metrics_period_ms: null, total_tasks: 0, total_exec_time_ns: 0 };
        ({ periodMs: obj.metrics_period_ms, queueName: obj.queue_name, taskMetrics } = taskMetrics);
        obj.total_tasks = taskMetrics.reduce((arg0, count) => arg0 + count.count, 0);
        taskMetrics = taskMetrics.taskMetrics;
        obj.total_exec_time_ns = taskMetrics.reduce((arg0, totalExecTimeNs) => arg0 + totalExecTimeNs.totalExecTimeNs, 0);
        const items = [];
        HermesBuiltin.arraySpread(taskMetrics.taskMetrics, 0);
        const sorted = items.sort((longestExecTimeNs, longestExecTimeNs2) => longestExecTimeNs2.longestExecTimeNs - longestExecTimeNs.longestExecTimeNs);
        const items1 = [];
        HermesBuiltin.arraySpread(taskMetrics.taskMetrics, 0);
        const sorted1 = items1.sort((longestQueueTimeNs, longestQueueTimeNs2) => longestQueueTimeNs2.longestQueueTimeNs - longestQueueTimeNs.longestQueueTimeNs);
        let num = 0;
        do {
          if (num < sorted.length) {
            let tmp = sorted[num];
            let _HermesInternal = HermesInternal;
            obj["slow_task_" + num + "_name"] = tmp.name;
            let _HermesInternal2 = HermesInternal;
            obj["slow_task_" + num + "_longest_exec_time_ns"] = tmp.longestExecTimeNs;
          }
          num = num + 1;
          num2 = 0;
        } while (num < 3);
        do {
          if (num2 < sorted1.length) {
            let tmp2 = sorted1[num2];
            let _HermesInternal3 = HermesInternal;
            obj["delayed_task_" + num2 + "_name"] = tmp2.name;
            let _HermesInternal4 = HermesInternal;
            obj["delayed_task_" + num2 + "_longest_queue_time_ns"] = tmp2.longestQueueTimeNs;
          }
          num2 = num2 + 1;
        } while (num2 < 3);
        const _JSON = JSON;
        obj.full_task_report = JSON.stringify(sorted);
        return obj;
      }
    }
  }
  return null;
}
({ AnalyticEvents: closure_23, AppStates: closure_24, InputModes } = ME);
({ RTCConnectionStates: closure_26, UserSettingsSections: closure_27, VideoToggleState: closure_28 } = ME);
({ DARWIN_SCKIT_VERSION: closure_29, DARWIN_SCKIT_AUDIO_VERSION: closure_30, WINDOWS_GRAPHICS_CAPTURE_NEW_APIS_BUILD: closure_31, WINDOWS_GRAPHICS_CAPTURE_NEW_APIS_SEMVER: closure_32, WINDOWS_GRAPHICS_CAPTURE_BUILD: closure_33, WINDOWS_GRAPHICS_CAPTURE_SEMVER: closure_34, WINDOWS_SOUNDSHARE_HOOK_VERSION: closure_35, WINDOWS_SOUNDSHARE_NONHOOK_VERSION: closure_36 } = StreamIssueReportReasons);
({ NativePermissionStates: closure_37, NativePermissionTypes } = NativePermissionStatus);
({ ProtoAudioSettingsContextTypes: closure_40, UserSettingsTypes: closure_41 } = MAX_FAVORITES);
({ AudioSubsystems: closure_43, DARWIN_H265_VERSION: closure_44, DEFAULT_VOLUME: closure_45, DEFAULT_STREAM_VOLUME: closure_46, DEFAULT_DEVICE_ID } = DesktopSources);
({ DeviceTypes: closure_48, DISABLED_DEVICE_ID } = DesktopSources);
({ ExperimentFlags: closure_50, Features } = DesktopSources);
const MediaEngineContextTypes = DesktopSources.MediaEngineContextTypes;
const NoiseCancellerError = DesktopSources.NoiseCancellerError;
({ VideoFilterError: closure_54, VideoFilterTarget: closure_55, MediaTypes: closure_56, QUEUE_METRICS_INTERVAL_MS: closure_57, VideoToggleReason: closure_58, VIEWERSIDE_CLIP_KFI_MS: closure_59, SIMULCAST_HQ_QUALITY: closure_60, SIMULCAST_LQ_QUALITY: closure_61 } = DesktopSources);
importDefaultResult = new importDefaultResult("MediaEngineStore");
const MediaEngineStore = "MediaEngineStore";
let closure_64 = { left: 1, right: 1 };
let closure_65 = 5 * require("set").Millis.SECOND;
let closure_66 = 2 * require("set").Millis.SECOND;
let closure_67 = 30 * require("set").Millis.SECOND;
const MINUTE = require("set").Millis.MINUTE;
const deep_noise_suppression = "deep_noise_suppression";
let c70 = "https://ciscobinary.openh264.org/libopenh264-2.5.1-linux64.7.so.bz2";
let c71 = "d828a944d4d2bb64195ada89cf2cde9bc41733b1547d0788ef49fb8cb231b76f";
let c72 = 0;
let obj = { WEBCAM: "WEBCAM", INTEGRATED: "INTEGRATED", BLUETOOTH: "BLUETOOTH", AIRPLAY: "AIRPLAY", HEADSET: "HEADSET" };
obj = { modeOptions: { autoThreshold: true, vadUseKrisp: true }, echoCancellation: true, noiseSuppression: false, automaticGainControl: true, noiseCancellation: true, bypassSystemInputProcessing: true };
let obj1 = { mode: InputModes.VOICE_ACTIVITY, modeOptions: { threshold: -84, autoThreshold: false, vadUseKrisp: false }, echoCancellation: false, noiseSuppression: false, automaticGainControl: false, noiseCancellation: false, bypassSystemInputProcessing: true };
let closure_75 = { [InputProfile.CUSTOM]: {}, [InputProfile.VOICE_ISOLATION]: obj, [InputProfile.STUDIO]: obj1 };
let obj2 = { modeOptions: { vadUseKrisp: false }, noiseCancellation: false, noiseSuppression: true };
let result = getMediaEngineImpl.initializeMediaEngine(getMediaEngineImpl.determineMediaEngine());
importDefaultResult.enableNativeLogger(true);
let closure_82 = {};
let items = [MediaEngineContextTypes.DEFAULT];
let set = new Set(items);
let closure_84 = result.supports(Features.AUTO_ENABLE);
let c85 = false;
let STREAM = MediaEngineContextTypes.STREAM;
let c87 = 0;
let c88 = false;
let closure_89 = performance.now();
let c90 = null;
let obj3 = { [DEFAULT_DEVICE_ID]: makeDisabledDevice("No Input Devices") };
let obj4 = { [DEFAULT_DEVICE_ID]: makeDisabledDevice("No Output Devices") };
getMediaEngineImpl = { [DEFAULT_DEVICE_ID]: makeDisabledDevice("No Video Devices") };
const timeout = new require("_createForOfIteratorHelperLoose").Timeout();
let c95 = false;
let c96 = false;
let c97 = false;
let c98 = false;
let c99 = false;
let c102 = false;
let c103 = false;
const timeout1 = new require("_createForOfIteratorHelperLoose").Timeout();
let c105 = false;
let c106 = false;
let c107 = false;
let c108 = false;
const timeout2 = new require("_createForOfIteratorHelperLoose").Timeout();
let c110;
let c111;
let c112 = false;
let c113 = false;
let c114 = false;
let c115 = false;
let c116;
let c117;
let c118;
let closure_119 = [];
let c120 = false;
let c121 = null;
let c122 = false;
let c123 = false;
let c124 = false;
let c125 = false;
let closure_126 = {};
let c127 = null;
let c128 = null;
let c129 = false;
require("NativePermissionsRequestOptions").hasPermission(NativePermissionTypes.AUDIO, { showAuthorizationError: false });
require("NativePermissionsRequestOptions").hasPermission(NativePermissionTypes.CAMERA, { showAuthorizationError: false });
const set1 = new Set();
let c131 = true;
const set2 = new Set();
let c133;
let closure_134 = {};
let c135 = null;
let c136 = null;
let c137 = null;
let c138 = true;
let c139 = false;
const timeout3 = new require("_createForOfIteratorHelperLoose").Timeout();
let c141 = false;
let c142 = false;
let c143 = false;
let c144 = false;
let closure_145 = {};
let items1 = [, , , , , , , , , ];
({ KRISP_INIT_ERROR: arr2[0], KRISP_INIT_ERROR_NATIVE: arr2[1], KRISP_INIT_ERROR_SSE4_NOT_SUPPORTED: arr2[2], KRISP_INIT_ERROR_AVX2_NOT_SUPPORTED: arr2[3], KRISP_INIT_ERROR_UNSIGNED: arr2[4], KRISP_INIT_ERROR_GLOBAL_INIT: arr2[5], KRISP_INIT_ERROR_WEIGHT_8K: arr2[6], KRISP_INIT_ERROR_WEIGHT_16K: arr2[7], KRISP_INIT_ERROR_WEIGHT_32K: arr2[8], KRISP_INIT_ERROR_WEIGHT_VAD: arr2[9] } = NoiseCancellerError);
const set3 = new Set(items1);
let c147 = ">=10.0.15063";
const re148 = /^HDAUDIO\\(?:SUB)?FUNC_\d+&VEN_(?:8086|1002|10DE)/;
let tmp20 = ((Store) => {
  class MediaEngineStore {
    constructor() {
      self = this;
      tmp = outer1_4(this, MediaEngineStore);
      obj = outer1_7(MediaEngineStore);
      tmp2 = outer1_6;
      if (outer1_149()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_7;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_7(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(MediaEngineStore, Store);
  let obj = {
    key: "initialize",
    value: function initialize() {
      const self = this;
      if (outer1_81 == null) {
        let tmp3 = outer1_1(outer1_3[84]);
        const prototype = tmp3.prototype;
        tmp3 = new tmp3(outer1_77, self);
        outer1_81 = tmp3;
      }
      outer1_170();
      (function loadSettings() {
        const Storage = MediaEngineStore(outer2_3[65]).Storage;
        let value = Storage.get("audio");
        if (null != value) {
          const Storage2 = MediaEngineStore(outer2_3[65]).Storage;
          let obj = {};
          obj[outer2_52.DEFAULT] = value;
          const result = Storage2.set(outer2_63, obj);
          const Storage3 = MediaEngineStore(outer2_3[65]).Storage;
          Storage3.remove("audio");
        }
        const Storage4 = MediaEngineStore(outer2_3[65]).Storage;
        value = Storage4.get(outer2_63);
        if (null == value) {
          value = {};
        }
        const outer2_82 = value;
        outer2_1(outer2_3[38]).each(outer2_82, (modeOptions) => {
          let obj = outer3_1(outer3_3[38]);
          obj.defaultsDeep(modeOptions, outer3_152());
          let tmp2 = null != modeOptions.modeOptions;
          if (tmp2) {
            tmp2 = "string" === typeof modeOptions.modeOptions.shortcut;
          }
          if (tmp2) {
            modeOptions.modeOptions.shortcut = MediaEngineStore(outer3_3[66]).toCombo(modeOptions.modeOptions.shortcut);
            const obj2 = MediaEngineStore(outer3_3[66]);
          }
          let tmp5 = null != modeOptions.modeOptions;
          if (tmp5) {
            tmp5 = 4 !== modeOptions.vadUseKrispSettingVersion;
          }
          if (tmp5) {
            modeOptions.vadUseKrispSettingVersion = 4;
            modeOptions.modeOptions.vadUseKrisp = true;
          }
          if (!modeOptions.qosMigrated) {
            modeOptions.qosMigrated = true;
            modeOptions.qos = false;
          }
          if (!modeOptions.vadThrehsoldMigrated) {
            modeOptions.vadThrehsoldMigrated = true;
            modeOptions = modeOptions.modeOptions;
            let threshold;
            if (null != modeOptions) {
              threshold = modeOptions.threshold;
            }
            if (-40 === threshold) {
              modeOptions.modeOptions.threshold = -60;
            }
          }
          let supportsResult = outer3_77.supports(outer3_51.SIDECHAIN_COMPRESSION);
          if (supportsResult) {
            supportsResult = modeOptions.sidechainCompressionSettingVersion < 1;
          }
          if (supportsResult) {
            modeOptions.sidechainCompressionSettingVersion = 1;
            modeOptions.sidechainCompression = true;
          }
          if (modeOptions.audioMixerSettingsVersion < 3) {
            modeOptions.audioMixerSettingsVersion = 3;
            obj = {};
            const merged = Object.assign(outer3_39);
            modeOptions.audioMixerSettings = obj;
          }
          if (obj4.isWeb()) {
            if (1 !== modeOptions.ncUseKrispjsSettingVersion) {
              modeOptions.ncUseKrispjsSettingVersion = 1;
              modeOptions.noiseSuppression = false;
              modeOptions.noiseCancellation = true;
            }
          } else if (1 !== modeOptions.ncUseKrispSettingVersion) {
            modeOptions.ncUseKrispSettingVersion = 1;
            modeOptions.noiseSuppression = false;
            modeOptions.noiseCancellation = true;
          }
        });
        outer2_176();
      })();
      outer1_198();
      outer1_200();
      outer1_190();
      (function maybeStartPollQueueMetrics() {
        function pollMetrics() {
          return _pollMetrics(...arguments);
        }
        async function _pollMetrics() {
          const tmp = yield new Promise((arg0) => {
            let closure_0 = arg0;
            outer6_1(outer6_3[68]).pollQueueMetrics(() => { ... });
          });
          tmp.periodMs = outer5_57;
          const tmp2 = outer5_203(tmp);
          if (null !== tmp2) {
            outer5_1(outer5_3[48]).track(outer5_23.VOICE_QUEUE_METRICS, tmp2);
            const obj = outer5_1(outer5_3[48]);
          }
          const timerId = setTimeout(outer2_0, outer5_57);
        }
        if (obj.isDesktop()) {
          if (MediaEngineStore(outer2_3[29]).isPlatformEmbedded) {
            if (!outer2_144) {
              outer2_144 = true;
              const _setTimeout = setTimeout;
              let timerId = setTimeout(pollMetrics, outer2_57);
            }
          }
        }
      })();
      let obj = MediaEngineStore(outer1_3[29]);
      let isPlatformEmbedded = obj.isWindows();
      if (isPlatformEmbedded) {
        isPlatformEmbedded = MediaEngineStore(outer1_3[29]).isPlatformEmbedded;
      }
      if (isPlatformEmbedded) {
        (function checkH264MfDecodeAvailability() {
          if (null === outer2_90) {
            const codecSurvey = outer2_77.getCodecSurvey();
            const nextPromise = codecSurvey.then((arg0) => {
              const parsed = JSON.parse(arg0);
              if (null != parsed) {
                if (null != tmp2.available_video_decoders) {
                  const available_video_decoders = parsed.available_video_decoders;
                  const outer3_90 = available_video_decoders.some((arg0) => "MediaFoundation H.264" === arg0);
                }
              }
              const error = new Error("decoder survey is not available");
              throw error;
            });
            codecSurvey.then((arg0) => {
              const parsed = JSON.parse(arg0);
              if (null != parsed) {
                if (null != tmp2.available_video_decoders) {
                  const available_video_decoders = parsed.available_video_decoders;
                  const outer3_90 = available_video_decoders.some((arg0) => "MediaFoundation H.264" === arg0);
                }
              }
              const error = new Error("decoder survey is not available");
              throw error;
            }).catch((arg0) => {
              outer3_62.error("Failed to get codec survey", arg0);
              const outer3_90 = false;
            }).finally(() => {
              outer3_1(outer3_3[49]).dispatch({ type: "MEDIA_ENGINE_MF_AVAILABILITY_CHECKED" });
            });
            const catchPromise = codecSurvey.then((arg0) => {
              const parsed = JSON.parse(arg0);
              if (null != parsed) {
                if (null != tmp2.available_video_decoders) {
                  const available_video_decoders = parsed.available_video_decoders;
                  const outer3_90 = available_video_decoders.some((arg0) => "MediaFoundation H.264" === arg0);
                }
              }
              const error = new Error("decoder survey is not available");
              throw error;
            }).catch((arg0) => {
              outer3_62.error("Failed to get codec survey", arg0);
              const outer3_90 = false;
            });
          }
        })();
      }
      obj = { [outer1_51.VIDEO]: outer1_77.supports(outer1_51.VIDEO), [outer1_51.DESKTOP_CAPTURE]: outer1_77.supports(outer1_51.DESKTOP_CAPTURE), [outer1_51.HYBRID_VIDEO]: outer1_77.supports(outer1_51.HYBRID_VIDEO) };
      const outer1_134 = obj;
      self.waitFor(outer1_16, outer1_17, outer1_18, outer1_19, outer1_11, outer1_12, outer1_20, outer1_13, outer1_15, outer1_21, outer1_22);
    }
  };
  let items = [obj, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "supports",
    value: function supports(VIDEO) {
      return outer1_77.supports(VIDEO);
    }
  };
  items[1] = obj;
  obj = {
    key: "supportsInApp",
    value: function supportsInApp(VIDEO) {
      let supportsResult = outer1_134[VIDEO];
      if (!supportsResult) {
        supportsResult = outer1_77.supports(VIDEO);
      }
      return supportsResult;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "isSupported",
    value: function isSupported() {
      return outer1_77.supported();
    }
  };
  items[4] = {
    key: "isNoiseSuppressionSupported",
    value: function isNoiseSuppressionSupported() {
      return outer1_77.supports(outer1_51.NOISE_SUPPRESSION);
    }
  };
  items[5] = {
    key: "isNoiseCancellationSupported",
    value: function isNoiseCancellationSupported() {
      return outer1_196();
    }
  };
  items[6] = {
    key: "isNoiseCancellationError",
    value: function isNoiseCancellationError() {
      return outer1_122;
    }
  };
  items[7] = {
    key: "isAutomaticGainControlSupported",
    value: function isAutomaticGainControlSupported() {
      return outer1_77.supports(outer1_51.AUTOMATIC_GAIN_CONTROL);
    }
  };
  items[8] = {
    key: "shouldOfferManualSubsystemSelection",
    value: function shouldOfferManualSubsystemSelection() {
      let tmp = !outer1_174();
      if (tmp) {
        let supportsResult = outer1_77.supports(outer1_51.LEGACY_AUDIO_SUBSYSTEM);
        if (!supportsResult) {
          supportsResult = outer1_77.supports(outer1_51.EXPERIMENTAL_AUDIO_SUBSYSTEM);
        }
        tmp = supportsResult;
      }
      return tmp;
    }
  };
  items[9] = {
    key: "showBypassSystemInputProcessing",
    value: function showBypassSystemInputProcessing() {
      let supportsResult = outer1_77.supports(outer1_51.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
      if (supportsResult) {
        supportsResult = "experimental" === outer1_77.getAudioSubsystem();
      }
      return supportsResult;
    }
  };
  items[10] = {
    key: "isAdvancedVoiceActivitySupported",
    value: function isAdvancedVoiceActivitySupported() {
      return outer1_196();
    }
  };
  items[11] = {
    key: "isAecDumpSupported",
    value: function isAecDumpSupported() {
      return outer1_77.supports(outer1_51.AEC_DUMP);
    }
  };
  items[12] = {
    key: "isSimulcastSupported",
    value: function isSimulcastSupported() {
      let supportsResult = outer1_77.supports(outer1_51.VIDEO);
      if (supportsResult) {
        supportsResult = outer1_77.supports(outer1_51.SIMULCAST);
      }
      return supportsResult;
    }
  };
  items[13] = {
    key: "getAecDump",
    value: function getAecDump() {
      return outer1_157().aecDumpEnabled;
    }
  };
  items[14] = {
    key: "getMediaEngine",
    value: function getMediaEngine() {
      return outer1_77;
    }
  };
  items[15] = {
    key: "getVideoComponent",
    value: function getVideoComponent() {
      return outer1_77.Video;
    }
  };
  items[16] = {
    key: "getCameraComponent",
    value: function getCameraComponent() {
      return outer1_77.Camera;
    }
  };
  items[17] = {
    key: "getKrispSuppressionLevel",
    value: function getKrispSuppressionLevel() {
      let num = 100;
      if (null != outer1_117) {
        num = outer1_117;
      }
      return num;
    }
  };
  items[18] = {
    key: "getKrispEnableStats",
    value: function getKrispEnableStats() {
      return outer1_120;
    }
  };
  items[19] = {
    key: "isEnabled",
    value: function isEnabled() {
      return outer1_84;
    }
  };
  items[20] = {
    key: "isMute",
    value: function isMute() {
      return this.isSelfMute() || outer1_95;
    }
  };
  items[21] = {
    key: "isDeaf",
    value: function isDeaf() {
      return this.isSelfDeaf() || outer1_98;
    }
  };
  items[22] = {
    key: "isServerMute",
    value: function isServerMute() {
      return outer1_95;
    }
  };
  items[23] = {
    key: "isServerDeaf",
    value: function isServerDeaf() {
      return outer1_98;
    }
  };
  items[24] = {
    key: "getAudioMixerSettings",
    value: function getAudioMixerSettings() {
      return outer1_157().audioMixerSettings;
    }
  };
  items[25] = {
    key: "isSpatialAudioEnabled",
    value: function isSpatialAudioEnabled() {
      return true === this.getAudioMixerSettings().enabled;
    }
  };
  items[26] = {
    key: "isSpatialAudioActive",
    value: function isSpatialAudioActive() {
      return outer1_125;
    }
  };
  items[27] = {
    key: "hasContext",
    value: function hasContext(arg0) {
      return null != outer1_82[arg0];
    }
  };
  items[28] = {
    key: "isSelfMutedTemporarily",
    value: function isSelfMutedTemporarily(DEFAULT) {
      if (DEFAULT === undefined) {
        DEFAULT = outer1_52.DEFAULT;
      }
      return DEFAULT === outer1_52.DEFAULT && outer1_96;
    }
  };
  items[29] = {
    key: "isSelfMute",
    value: function isSelfMute(DEFAULT) {
      const self = this;
      if (DEFAULT === undefined) {
        DEFAULT = outer1_52.DEFAULT;
      }
      let mute = !self.isEnabled();
      if (!mute) {
        mute = outer1_157(DEFAULT).mute;
      }
      if (!mute) {
        mute = !outer1_1(outer1_3[32]).didHavePermission(outer1_38.AUDIO);
        const obj = outer1_1(outer1_3[32]);
      }
      if (!mute) {
        mute = self.isSelfDeaf(DEFAULT);
      }
      if (!mute) {
        mute = DEFAULT === outer1_52.DEFAULT && outer1_97;
        const tmp7 = DEFAULT === outer1_52.DEFAULT && outer1_97;
      }
      return mute;
    }
  };
  items[30] = {
    key: "shouldSkipMuteUnmuteSound",
    value: function shouldSkipMuteUnmuteSound() {
      return outer1_102;
    }
  };
  items[31] = {
    key: "notifyMuteUnmuteSoundWasSkipped",
    value: function notifyMuteUnmuteSoundWasSkipped() {
      const outer1_102 = false;
    }
  };
  items[32] = {
    key: "isHardwareMute",
    value: function isHardwareMute(inputDeviceId) {
      let DEFAULT = inputDeviceId;
      const self = this;
      if (inputDeviceId === undefined) {
        DEFAULT = outer1_52.DEFAULT;
      }
      let tmp2 = outer1_139;
      if (outer1_139) {
        tmp2 = "voice_isolation" !== self.getSystemMicrophoneMode();
      }
      if (tmp2) {
        tmp2 = outer1_157(DEFAULT).mode === outer1_25.VOICE_ACTIVITY;
      }
      let tmp5 = !self.isMute() && !self.isSelfMutedTemporarily(DEFAULT);
      if (tmp5) {
        tmp5 = outer1_18.isHardwareMute(self.getInputDeviceId()) || tmp2;
        const tmp7 = outer1_18.isHardwareMute(self.getInputDeviceId()) || tmp2;
      }
      return tmp5;
    }
  };
  items[33] = {
    key: "isHardwareMuteNoticeEnabled",
    value: function isHardwareMuteNoticeEnabled() {
      return outer1_138;
    }
  };
  items[34] = {
    key: "isSelfDeaf",
    value: function isSelfDeaf(DEFAULT) {
      const self = this;
      if (DEFAULT === undefined) {
        DEFAULT = outer1_52.DEFAULT;
      }
      let deaf = !self.isSupported();
      if (!deaf) {
        deaf = outer1_157(DEFAULT).deaf;
      }
      return deaf;
    }
  };
  items[35] = {
    key: "isVideoEnabled",
    value: function isVideoEnabled() {
      let tmp = outer1_99;
      if (outer1_99) {
        tmp = outer1_106;
      }
      return tmp;
    }
  };
  items[36] = {
    key: "isVideoAvailable",
    value: function isVideoAvailable() {
      const values = Object.values(outer1_93);
      return values.some((disabled) => !disabled.disabled);
    }
  };
  items[37] = {
    key: "hasVideoDevice",
    value: function hasVideoDevice() {
      return outer1_106;
    }
  };
  items[38] = {
    key: "isScreenSharing",
    value: function isScreenSharing() {
      let STREAM = arg0;
      if (arg0 === undefined) {
        STREAM = outer1_52.STREAM;
      }
      let tmp2 = outer1_86 === STREAM;
      if (tmp2) {
        tmp2 = null != outer1_79;
      }
      return tmp2;
    }
  };
  items[39] = {
    key: "isSoundSharing",
    value: function isSoundSharing(closure_0) {
      let STREAM = closure_0;
      if (closure_0 === undefined) {
        STREAM = outer1_52.STREAM;
      }
      let tmp2 = outer1_86 === STREAM;
      if (tmp2) {
        tmp2 = null != outer1_79;
      }
      if (tmp2) {
        const desktopSource = outer1_79.desktopSource;
        let soundshareId;
        if (null != desktopSource) {
          soundshareId = desktopSource.soundshareId;
        }
        tmp2 = null != soundshareId;
      }
      return tmp2;
    }
  };
  items[40] = {
    key: "isLocalMute",
    value: function isLocalMute(userId, closure_1) {
      let DEFAULT = closure_1;
      if (closure_1 === undefined) {
        DEFAULT = outer1_52.DEFAULT;
      }
      let tmp2 = userId !== outer1_16.getId();
      if (tmp2) {
        tmp2 = outer1_157(DEFAULT).localMutes[userId] || false;
        const tmp4 = outer1_157(DEFAULT).localMutes[userId] || false;
      }
      return tmp2;
    }
  };
  items[41] = {
    key: "supportsDisableLocalVideo",
    value: function supportsDisableLocalVideo() {
      return outer1_77.supports(outer1_51.DISABLE_VIDEO);
    }
  };
  items[42] = {
    key: "isLocalVideoDisabled",
    value: function isLocalVideoDisabled(id, DEFAULT) {
      if (DEFAULT === undefined) {
        DEFAULT = outer1_52.DEFAULT;
      }
      const tmp2 = outer1_157(DEFAULT).disabledLocalVideos[id];
      return null != tmp2 && tmp2;
    }
  };
  items[43] = {
    key: "getVideoToggleState",
    value: function getVideoToggleState(id, DEFAULT) {
      if (DEFAULT === undefined) {
        DEFAULT = outer1_52.DEFAULT;
      }
      let NONE = outer1_157(DEFAULT).videoToggleStateMap[id];
      if (null == NONE) {
        NONE = outer1_28.NONE;
      }
      return NONE;
    }
  };
  items[44] = {
    key: "isLocalVideoAutoDisabled",
    value: function isLocalVideoAutoDisabled(id) {
      let DEFAULT = arg1;
      if (arg1 === undefined) {
        DEFAULT = outer1_52.DEFAULT;
      }
      let hasItem = DEFAULT === outer1_52.DEFAULT;
      if (hasItem) {
        hasItem = outer1_130.has(id);
      }
      return hasItem;
    }
  };
  items[45] = {
    key: "isAnyLocalVideoAutoDisabled",
    value: function isAnyLocalVideoAutoDisabled() {
      let DEFAULT = arg0;
      if (arg0 === undefined) {
        DEFAULT = outer1_52.DEFAULT;
      }
      let tmp2 = DEFAULT === outer1_52.DEFAULT;
      if (tmp2) {
        tmp2 = outer1_130.size > 0;
      }
      return tmp2;
    }
  };
  items[46] = {
    key: "isMediaFilterSettingLoading",
    value: function isMediaFilterSettingLoading() {
      return outer1_123;
    }
  };
  items[47] = {
    key: "isNativeAudioPermissionReady",
    value: function isNativeAudioPermissionReady() {
      return outer1_129;
    }
  };
  items[48] = {
    key: "getGoLiveSource",
    value: function getGoLiveSource() {
      return outer1_79;
    }
  };
  items[49] = {
    key: "getGoLiveContext",
    value: function getGoLiveContext() {
      return outer1_86;
    }
  };
  items[50] = {
    key: "getLastAudioInputDeviceChangeTimestamp",
    value: function getLastAudioInputDeviceChangeTimestamp() {
      return outer1_89;
    }
  };
  items[51] = {
    key: "isH264MfDecodeAvailable",
    value: function isH264MfDecodeAvailable() {
      return outer1_90;
    }
  };
  items[52] = {
    key: "getLocalPan",
    value: function getLocalPan(id) {
      let DEFAULT = arg1;
      if (arg1 === undefined) {
        DEFAULT = outer1_52.DEFAULT;
      }
      let tmp2 = outer1_157(DEFAULT).localPans[id];
      if (null == tmp2) {
        tmp2 = outer1_64;
      }
      return tmp2;
    }
  };
  items[53] = {
    key: "getLocalVolume",
    value: function getLocalVolume(id, STREAM) {
      let DEFAULT = STREAM;
      if (STREAM === undefined) {
        DEFAULT = outer1_52.DEFAULT;
      }
      let tmp2 = DEFAULT === outer1_52.STREAM ? outer1_46 : outer1_45;
      const tmp3 = outer1_157(DEFAULT).localVolumes[id];
      if (null != tmp3) {
        tmp2 = tmp3;
      }
      return tmp2;
    }
  };
  items[54] = {
    key: "getInputVolume",
    value: function getInputVolume() {
      return outer1_157().inputVolume;
    }
  };
  items[55] = {
    key: "getOutputVolume",
    value: function getOutputVolume() {
      if (obj.getConfig({ location: "MediaEngineStore.getOutputVolume" }).audioOutputPresent) {
        let outputVolume = outer1_157().outputVolume;
      } else {
        outputVolume = outer1_45;
      }
      return outputVolume;
    }
  };
  items[56] = {
    key: "getMode",
    value: function getMode() {
      let DEFAULT = arg0;
      if (arg0 === undefined) {
        DEFAULT = outer1_52.DEFAULT;
      }
      return outer1_157(DEFAULT).mode;
    }
  };
  items[57] = {
    key: "getModeOptions",
    value: function getModeOptions(DEFAULT) {
      if (DEFAULT === undefined) {
        DEFAULT = outer1_52.DEFAULT;
      }
      return outer1_157(DEFAULT).modeOptions;
    }
  };
  items[58] = {
    key: "getShortcuts",
    value: function getShortcuts() {
      const obj = {};
      outer1_1(outer1_3[38]).each(outer1_82, (mode) => {
        let hasItem = mode.mode === outer2_25.PUSH_TO_TALK;
        if (hasItem) {
          hasItem = outer2_83.has(arg1);
        }
        if (hasItem) {
          obj[arg1] = mode.modeOptions.shortcut;
        }
      });
      return obj;
    }
  };
  items[59] = {
    key: "getInputDeviceId",
    value: function getInputDeviceId() {
      return outer1_183(outer1_91, outer1_157().inputDeviceId);
    }
  };
  items[60] = {
    key: "getOutputDeviceId",
    value: function getOutputDeviceId() {
      return outer1_183(outer1_92, outer1_157().outputDeviceId);
    }
  };
  items[61] = {
    key: "getVideoDeviceId",
    value: function getVideoDeviceId() {
      return outer1_183(outer1_93, outer1_157().videoDeviceId);
    }
  };
  items[62] = {
    key: "getInputDevices",
    value: function getInputDevices(arg0) {
      return outer1_91;
    }
  };
  items[63] = {
    key: "getOutputDevices",
    value: function getOutputDevices(arg0) {
      return outer1_92;
    }
  };
  items[64] = {
    key: "getVideoDevices",
    value: function getVideoDevices() {
      return outer1_93;
    }
  };
  items[65] = {
    key: "getEchoCancellation",
    value: function getEchoCancellation() {
      const tmp = outer1_157();
      return outer1_18.hasEchoCancellation(tmp.inputDeviceId) || tmp.echoCancellation;
    }
  };
  items[66] = {
    key: "getSidechainCompression",
    value: function getSidechainCompression() {
      let sidechainCompression = outer1_77.supports(outer1_51.SIDECHAIN_COMPRESSION);
      if (sidechainCompression) {
        sidechainCompression = outer1_157().sidechainCompression;
      }
      return sidechainCompression;
    }
  };
  items[67] = {
    key: "getSidechainCompressionStrength",
    value: function getSidechainCompressionStrength() {
      return outer1_157().sidechainCompressionStrength;
    }
  };
  items[68] = {
    key: "getH265Enabled",
    value: function getH265Enabled() {
      return outer1_157().h265Enabled;
    }
  };
  items[69] = {
    key: "hasH265HardwareDecode",
    value: function hasH265HardwareDecode() {
      return null !== outer1_127 && outer1_127;
    }
  };
  items[70] = {
    key: "getOpenH264Enabled",
    value: function getOpenH264Enabled() {
      let openH264Enabled = MediaEngineStore(outer1_3[29]).isLinux();
      if (openH264Enabled) {
        openH264Enabled = outer1_157().openH264Enabled;
      }
      return openH264Enabled;
    }
  };
  items[71] = {
    key: "getLoopback",
    value: function getLoopback() {
      return outer1_132.size > 0;
    }
  };
  items[72] = {
    key: "getLoopbackReasons",
    value: function getLoopbackReasons() {
      return outer1_132;
    }
  };
  items[73] = {
    key: "getNoiseSuppression",
    value: function getNoiseSuppression() {
      const tmp = outer1_157();
      return outer1_18.hasNoiseSuppression(tmp.inputDeviceId) || tmp.noiseSuppression;
    }
  };
  items[74] = {
    key: "getAutomaticGainControl",
    value: function getAutomaticGainControl() {
      const tmp = outer1_157();
      return outer1_18.hasAutomaticGainControl(tmp.inputDeviceId) || tmp.automaticGainControl;
    }
  };
  items[75] = {
    key: "getBypassSystemInputProcessing",
    value: function getBypassSystemInputProcessing() {
      return outer1_157().bypassSystemInputProcessing;
    }
  };
  items[76] = {
    key: "getNoiseCancellation",
    value: function getNoiseCancellation() {
      return outer1_157().noiseCancellation;
    }
  };
  items[77] = {
    key: "getHardwareEncoding",
    value: function getHardwareEncoding() {
      return true;
    }
  };
  items[78] = {
    key: "getEnableSilenceWarning",
    value: function getEnableSilenceWarning() {
      return outer1_157().silenceWarning;
    }
  };
  items[79] = {
    key: "getDebugLogging",
    value: function getDebugLogging() {
      return outer1_77.getDebugLogging();
    }
  };
  items[80] = {
    key: "getQoS",
    value: function getQoS() {
      return outer1_157().qos;
    }
  };
  items[81] = {
    key: "getAttenuation",
    value: function getAttenuation() {
      return outer1_157().attenuation;
    }
  };
  items[82] = {
    key: "getAttenuateWhileSpeakingSelf",
    value: function getAttenuateWhileSpeakingSelf() {
      return outer1_157().attenuateWhileSpeakingSelf;
    }
  };
  items[83] = {
    key: "getAttenuateWhileSpeakingOthers",
    value: function getAttenuateWhileSpeakingOthers() {
      return outer1_157().attenuateWhileSpeakingOthers;
    }
  };
  items[84] = {
    key: "getAudioSubsystem",
    value: function getAudioSubsystem(arg0) {
      if (outer1_173()) {
        if (outer1_157().automaticAudioSubsystem) {
          let AUTOMATIC = outer1_43.AUTOMATIC;
        }
        return AUTOMATIC;
      }
      AUTOMATIC = outer1_77.getAudioSubsystem();
    }
  };
  items[85] = {
    key: "getMLSSigningKey",
    value: function getMLSSigningKey(closure_0, closure_1, arg2) {
      return outer1_77.getMLSSigningKey(closure_0, closure_1);
    }
  };
  items[86] = {
    key: "getActiveInputProfile",
    value: function getActiveInputProfile() {
      return outer1_157().activeInputProfile;
    }
  };
  items[87] = {
    key: "isInputProfileCustom",
    value: function isInputProfileCustom() {
      const activeInputProfile = this.getActiveInputProfile();
      let tmp2 = null == activeInputProfile;
      if (!tmp2) {
        tmp2 = activeInputProfile === outer1_42.CUSTOM;
      }
      return tmp2;
    }
  };
  items[88] = {
    key: "getSettings",
    value: function getSettings(guildId) {
      let DEFAULT = guildId;
      if (guildId === undefined) {
        DEFAULT = outer1_52.DEFAULT;
      }
      return outer1_157(DEFAULT);
    }
  };
  items[89] = {
    key: "getState",
    value: function getState() {
      return { settingsByContext: outer1_82, inputDevices: outer1_91, outputDevices: outer1_92, appSupported: outer1_134, krispModuleLoaded: outer1_114, krispFatalError: outer1_115, krispVersion: outer1_116, krispSuppressionLevel: outer1_117, goLiveSource: outer1_79, goLiveContext: outer1_86 };
    }
  };
  items[90] = {
    key: "getInputDetectedThisConnection",
    value: function getInputDetectedThisConnection() {
      return outer1_107;
    }
  };
  items[91] = {
    key: "getInputDetected",
    value: function getInputDetected() {
      return outer1_81.inputDetected;
    }
  };
  items[92] = {
    key: "getLastInputDetectedUpdateTime",
    value: function getLastInputDetectedUpdateTime() {
      return outer1_81.lastUpdateTime;
    }
  };
  items[93] = {
    key: "getNoInputDetectedNotice",
    value: function getNoInputDetectedNotice() {
      return outer1_108;
    }
  };
  items[94] = {
    key: "getInputDeviceOSMuted",
    value: function getInputDeviceOSMuted() {
      return outer1_110;
    }
  };
  items[95] = {
    key: "getInputDeviceOSVolume",
    value: function getInputDeviceOSVolume() {
      return outer1_111;
    }
  };
  items[96] = {
    key: "getPacketDelay",
    value: function getPacketDelay() {
      const self = this;
      let num = 0;
      if (!MediaEngineStore(outer1_3[29]).isPlatformEmbedded) {
        num = 0;
        if (self.getMode() === outer1_25.VOICE_ACTIVITY) {
          num = self.getModeOptions().vadLeading;
        }
      }
      return num;
    }
  };
  items[97] = {
    key: "setCanHavePriority",
    value: function setCanHavePriority(userId, closure_1) {
      let closure_0 = userId;
      outer1_77.eachConnection((setCanHavePriority) => setCanHavePriority.setCanHavePriority(closure_0, closure_1));
    }
  };
  items[98] = {
    key: "isInteractionRequired",
    value: function isInteractionRequired() {
      return outer1_85;
    }
  };
  obj = {
    key: "getVideoHook",
    value: function getVideoHook() {
      return outer1_157().videoHook;
    }
  };
  items[99] = obj;
  obj = {
    key: "supportsVideoHook",
    value: function supportsVideoHook() {
      return outer1_77.supports(outer1_51.VIDEO_HOOK);
    }
  };
  items[100] = obj;
  obj = {
    key: "getExperimentalSoundshare",
    value: function getExperimentalSoundshare() {
      const self = this;
      const experimentalSoundshare2 = outer1_157().experimentalSoundshare2;
      let result = this.supportsExperimentalSoundshare();
      if (result) {
        result = null == experimentalSoundshare2 || experimentalSoundshare2 || !self.supportsHookSoundshare();
        const tmp3 = null == experimentalSoundshare2 || experimentalSoundshare2 || !self.supportsHookSoundshare();
      }
      return result;
    }
  };
  items[101] = obj;
  obj = {
    key: "supportsExperimentalSoundshare",
    value: function supportsExperimentalSoundshare() {
      let supportsResult = outer1_77.supports(outer1_51.EXPERIMENTAL_SOUNDSHARE);
      if (supportsResult) {
        let release;
        if (null != outer1_1(outer1_3[64])) {
          release = outer1_1(outer1_3[64]).os.release;
        }
        supportsResult = outer1_1(outer1_3[54]).satisfies(release, outer1_36);
        const obj = outer1_1(outer1_3[54]);
      }
      return supportsResult;
    }
  };
  items[102] = obj;
  obj = {
    key: "supportsHookSoundshare",
    value: function supportsHookSoundshare() {
      let isWindowsResult = MediaEngineStore(outer1_3[29]).isWindows();
      if (isWindowsResult) {
        isWindowsResult = outer1_77.supports(outer1_51.SOUNDSHARE);
      }
      if (isWindowsResult) {
        let release;
        if (null != outer1_1(outer1_3[64])) {
          release = outer1_1(outer1_3[64]).os.release;
        }
        isWindowsResult = outer1_1(outer1_3[54]).satisfies(release, outer1_35);
        const obj2 = outer1_1(outer1_3[54]);
      }
      return isWindowsResult;
    }
  };
  items[103] = obj;
  obj = {
    key: "getUseSystemScreensharePicker",
    value: function getUseSystemScreensharePicker() {
      let result = this.supportsSystemScreensharePicker();
      const useSystemScreensharePicker = outer1_157().useSystemScreensharePicker;
      let isLinuxResult = MediaEngineStore(outer1_3[29]).isLinux();
      if (result) {
        if (null != useSystemScreensharePicker) {
          isLinuxResult = useSystemScreensharePicker;
        }
        result = isLinuxResult;
      }
      return result;
    }
  };
  items[104] = obj;
  obj = {
    key: "supportsSystemScreensharePicker",
    value: function supportsSystemScreensharePicker() {
      return outer1_77.supports(outer1_51.NATIVE_SCREENSHARE_PICKER);
    }
  };
  items[105] = obj;
  obj = {
    key: "getUseVaapiEncoder",
    value: function getUseVaapiEncoder() {
      return outer1_143;
    }
  };
  items[106] = obj;
  obj = {
    key: "getVideoEncoderExperiments",
    value: function getVideoEncoderExperiments(STREAM, streamer) {
      const self = this;
      let arr = new Array("unk");
      arr = arr.push("nvNewPresets");
      if (STREAM === outer1_52.STREAM) {
        arr = arr.push("nvRelaxRc=250");
      } else {
        arr.push("nvRelaxRc=75");
      }
      if (self.getUseVaapiEncoder()) {
        arr.push("vaapi");
      }
      let isWindowsResult = STREAM === outer1_52.STREAM;
      if (isWindowsResult) {
        isWindowsResult = "streamer" === streamer;
      }
      if (isWindowsResult) {
        let obj = MediaEngineStore(outer1_3[29]);
        isWindowsResult = obj.isWindows();
      }
      if (isWindowsResult) {
        arr.push("useCaptureDeviceForEncode");
        const VideoCaptureDeviceNoReuseExperiment = MediaEngineStore(outer1_3[85]).VideoCaptureDeviceNoReuseExperiment;
        obj = { location: "handleReady" };
        if (VideoCaptureDeviceNoReuseExperiment.getConfig(obj).overrideDeviceReuse) {
          arr.push("videoCaptureDeviceOverrideReuse");
        }
      }
      arr.push("linux-vulkan");
      return arr.join(",");
    }
  };
  items[107] = obj;
  obj = {
    key: "getUseGamescopeCapture",
    value: function getUseGamescopeCapture() {
      return outer1_142;
    }
  };
  items[108] = obj;
  obj = {
    key: "getSpeakingWhileMuted",
    value: function getSpeakingWhileMuted() {
      return outer1_103;
    }
  };
  items[109] = obj;
  obj = {
    key: "getKrispModelOverride",
    value: function getKrispModelOverride() {
      return outer1_118;
    }
  };
  items[110] = obj;
  obj = {
    key: "getKrispModels",
    value: function getKrispModels() {
      return outer1_119;
    }
  };
  items[111] = obj;
  obj = {
    key: "getKrispVadActivationThreshold",
    value: function getKrispVadActivationThreshold() {
      const vadKrispActivationThreshold = outer1_157().modeOptions.vadKrispActivationThreshold;
      let num = 0.5;
      if (null != vadKrispActivationThreshold) {
        num = vadKrispActivationThreshold;
      }
      return num;
    }
  };
  items[112] = obj;
  obj = {
    key: "hasActiveCallKitCall",
    value: function hasActiveCallKitCall() {
      return outer1_141;
    }
  };
  items[113] = obj;
  obj = {
    key: "setHasActiveCallKitCall",
    value: function setHasActiveCallKitCall(arg0) {
      const outer1_141 = arg0;
    }
  };
  items[114] = obj;
  obj = {
    key: "supportsScreenSoundshare",
    value: function supportsScreenSoundshare() {
      const self = this;
      if (obj.isMac()) {
        let supportsResult = outer1_77.supports(outer1_51.SOUNDSHARE);
        if (supportsResult) {
          let release;
          if (null != outer1_1(outer1_3[64])) {
            release = outer1_1(outer1_3[64]).os.release;
          }
          supportsResult = outer1_1(outer1_3[54]).satisfies(release, outer1_30);
          const obj4 = outer1_1(outer1_3[54]);
        }
        if (supportsResult) {
          supportsResult = outer1_172();
        }
        let supportsResult1 = supportsResult;
      } else {
        if (obj2.isWindows()) {
          supportsResult1 = outer1_77.supports(outer1_51.SCREEN_SOUNDSHARE) && self.getExperimentalSoundshare();
          const tmp11 = outer1_77.supports(outer1_51.SCREEN_SOUNDSHARE) && self.getExperimentalSoundshare();
        } else {
          const tmp5 = !MediaEngineStore(outer1_3[29]).isLinux();
          supportsResult1 = !tmp5;
          if (!tmp5) {
            supportsResult1 = outer1_77.supports(outer1_51.SCREEN_SOUNDSHARE);
          }
          const obj3 = MediaEngineStore(outer1_3[29]);
        }
        obj2 = MediaEngineStore(outer1_3[29]);
      }
      return supportsResult1;
    }
  };
  items[115] = obj;
  obj = {
    key: "getSystemMicrophoneMode",
    value: function getSystemMicrophoneMode() {
      const self = this;
      if (obj.isWindows()) {
        if (!self.getBypassSystemInputProcessing()) {
          const tmp7 = outer1_126[self.getInputDeviceId(self)];
          let found;
          if (null != tmp7) {
            const active = tmp7.active;
            if (null != active) {
              found = active.find((arg0) => arg0 === outer2_69);
            }
          }
          return found;
        }
      } else {
        if (!obj2.isMac()) {
          const obj3 = MediaEngineStore(outer1_3[29]);
        }
        return outer1_133;
      }
      obj = MediaEngineStore(outer1_3[29]);
    }
  };
  items[116] = obj;
  obj = {
    key: "getVideoStreamParameters",
    value: function getVideoStreamParameters(context) {
      let DEFAULT = context;
      const self = this;
      if (context === undefined) {
        DEFAULT = outer1_52.DEFAULT;
      }
      if (self.supports(outer1_51.VIDEO)) {
        let obj = { rid: "100" };
        if (DEFAULT === outer1_52.DEFAULT) {
          let SCREEN = outer1_56.VIDEO;
        } else {
          SCREEN = outer1_56.SCREEN;
        }
        obj.type = SCREEN;
        obj.quality = outer1_60;
        const items = [obj];
      } else {
        const items1 = [];
        let enableSimulcast = self.isSimulcastSupported();
        if (enableSimulcast) {
          enableSimulcast = DEFAULT === outer1_52.DEFAULT;
        }
        if (enableSimulcast) {
          const DisableCameraSimulcastExperiment = MediaEngineStore(outer1_3[86]).DisableCameraSimulcastExperiment;
          obj = { location: "MediaEngineStore.getVideoStreamParameters" };
          enableSimulcast = DisableCameraSimulcastExperiment.getConfig(obj).enableSimulcast;
        }
        if (enableSimulcast) {
          obj = { rid: "50", type: outer1_56.VIDEO, quality: outer1_61 };
          items1.push(obj);
        }
        return items1;
      }
    }
  };
  items[117] = obj;
  obj = {
    key: "fetchAsyncResources",
    value: function fetchAsyncResources(arg0) {
      const obj = { fetchDave: MediaEngineStore(outer1_3[29]).isWeb() };
      return outer1_77.fetchAsyncResources(obj);
    }
  };
  items[118] = obj;
  obj = {
    key: "startDavePreload",
    value: function startDavePreload() {
      if (!outer1_124) {
        outer1_124 = true;
        let obj = MediaEngineStore(outer1_3[29]);
        if (obj.isWeb()) {
          obj = { fetchDave: true };
          const asyncResources = outer1_77.fetchAsyncResources(obj);
          asyncResources.catch((arg0) => {
            outer2_62.warn("DAVE preload failed:", arg0);
            outer2_1(outer2_3[81]).captureException(arg0);
          });
        }
      }
    }
  };
  items[119] = obj;
  obj = {
    key: "getSupportedSecureFramesProtocolVersion",
    value: function getSupportedSecureFramesProtocolVersion() {
      return outer1_77.getSupportedSecureFramesProtocolVersion();
    }
  };
  items[120] = obj;
  obj = {
    key: "hasClipsSource",
    value: function hasClipsSource() {
      return null != outer1_80;
    }
  };
  items[121] = obj;
  obj = {
    key: "isClipsRecordingReady",
    value: function isClipsRecordingReady() {
      return outer1_88;
    }
  };
  items[122] = obj;
  obj = {
    key: "isClipsRecordingReadySignalSupported",
    value: function isClipsRecordingReadySignalSupported() {
      return outer1_77.supports(outer1_51.CLIPS_RECORDING_READY_EVENTS);
    }
  };
  items[123] = obj;
  obj = {
    key: "getGpuBrand",
    value: function getGpuBrand() {
      return outer1_135;
    }
  };
  items[124] = obj;
  return callback(MediaEngineStore, items);
})(require("initialize").Store);
tmp20.displayName = "MediaEngineStore";
getMediaEngineImpl = {
  VOICE_CHANNEL_SELECT: function handleVoiceChannelSelect(currentVoiceChannelId) {
    let channelId;
    let guildId;
    ({ channelId, guildId } = currentVoiceChannelId);
    if (currentVoiceChannelId.currentVoiceChannelId !== channelId) {
      updateVideo(tmp, null);
    }
    if (null == guildId) {
      if (null != channelId) {
        if (!c112) {
          c112 = true;
          const tmp7 = _getSettings0();
          if (tmp8) {
            mergeSettings({ deaf: false, mute: false });
            store3.eachConnection(updateConnectionMuteDeaf);
          }
          tmp8 = tmp7.mute || tmp7.deaf;
        }
      }
    }
    c112 = false;
  },
  VOICE_STATE_UPDATES: function handleVoiceStateUpdates(voiceStates) {
    voiceStates = voiceStates.voiceStates;
    return voiceStates.reduce((arg0, sessionId) => {
      if (outer1_78 === sessionId.sessionId) {
        const outer1_95 = sessionId.mute || sessionId.suppress;
        const outer1_98 = sessionId.deaf;
        outer1_77.eachConnection(outer1_160);
        let tmp13 = null != sessionId.guildId && null != sessionId.channelId;
        if (tmp13) {
          tmp13 = null != outer1_121;
        }
        if (tmp13) {
          tmp13 = outer1_121 !== sessionId.channelId;
        }
        let tmp17 = !outer1_112;
        if (!outer1_112) {
          tmp17 = null == sessionId.channelId;
        }
        let tmp19 = !tmp13;
        if (!tmp13) {
          tmp19 = !tmp17;
        }
        if (tmp19) {
          tmp19 = outer1_99;
        }
        outer1_161(tmp19);
        outer1_121 = sessionId.channelId;
        return true;
      } else {
        let tmp2 = sessionId.userId === outer1_16.getId();
        if (tmp2) {
          tmp2 = null == outer1_20.getChannelId();
        }
        if (tmp2) {
          outer1_161(false, null);
        }
        return arg0;
      }
    }, false);
  },
  CONNECTION_OPEN: function handleConnectionOpen(sessionId) {
    sessionId = sessionId.sessionId;
    let c95 = false;
    let c98 = false;
    const tmp = _getSettings0();
    if (supportsAutomaticAudioSubsystem()) {
      if (isReadyToMigrateToSingleAdmOffering()) {
        setAudioSubsystem(constants8.AUTOMATIC);
      } else if (tmp.automaticAudioSubsystem) {
        interpretAutomaticAudioSubsystem();
      }
    }
    if (store3.supports(Features.OFFLOAD_ADM_CONTROLS)) {
      const result = store3.setOffloadAdmControls(true);
    }
    let enabled = require(477) /* set */.isIOS();
    if (enabled) {
      enabled = require(12832) /* getIOSAudioInterruptExperimentConfig */.getIOSAudioInterruptExperimentConfig("handleConnectionOpen").enabled;
      const obj2 = require(12832) /* getIOSAudioInterruptExperimentConfig */;
    }
    if (enabled) {
      store3.updateFieldTrial("WebRTC-Audio-iOS-Holding", "Enabled");
    }
    const obj = require(477) /* set */;
    const obj3 = require(477) /* set */;
    if (tmp14) {
      const requireModuleResult = importDefault(5142).requireModule("discord_krisp");
      const setMklZenOverrideEnabled = requireModuleResult.setMklZenOverrideEnabled;
      if (null != setMklZenOverrideEnabled) {
        setMklZenOverrideEnabled.call(requireModuleResult, require(12833) /* getMklZenOverrideExperimentConfig */.getMklZenOverrideExperimentConfig("handleConnectionOpen").enabled);
        const obj5 = require(12833) /* getMklZenOverrideExperimentConfig */;
      }
      const obj4 = importDefault(5142);
    }
    maybeProbeAudioEffects(tmp.inputDeviceId);
    applyRemoteSettings();
  },
  CONNECTION_CLOSED: function handleConnectionClosed() {
    let c78 = null;
  },
  POST_CONNECTION_OPEN: function handlePostConnectionOpen() {
    if (obj.isWeb()) {
      tmp20.startDavePreload();
    }
    return false;
  },
  RTC_CONNECTION_STATE: function handleRTCConnectionStateUpdate(state) {
    state = state.state;
    if (constants3.CONNECTING === state) {
      tryEnable();
    } else if (constants3.RTC_CONNECTING === state) {
      let c108 = false;
      let c110;
      let c111;
      let c107 = false;
      let c139 = false;
      timeout3.stop();
      timeout2.stop();
      navigation.reset();
    } else if (constants3.RTC_CONNECTED === state) {
      updateVideo();
    } else if (constants3.DISCONNECTED === state) {
      let closure_145 = {};
      (function resetAutoDisabledVideoState() {
        if (0 !== outer1_130.size) {
          const DEFAULT = outer1_52.DEFAULT;
          const disabledLocalVideos = outer1_157(DEFAULT).disabledLocalVideos;
          const item = outer1_130.forEach((arg0) => {
            let closure_0 = arg0;
            outer2_1(outer2_3[76])(disabledLocalVideos[arg0], "If you are auto-disabled, then you are also disabled.");
            delete tmp[tmp2];
            outer2_77.eachConnection((setLocalVideoDisabled) => setLocalVideoDisabled.setLocalVideoDisabled(closure_0, false), closure_0);
          });
          outer1_130.clear();
          const obj = { disabledLocalVideos };
          outer1_175(obj, DEFAULT, false);
        }
      })();
      resetProbingState();
    }
  },
  AUDIO_SET_TEMPORARY_SELF_MUTE: function handleSetTemporarySelfMute(mute) {
    mute = mute.mute;
    store3.eachConnection(updateConnectionMuteDeaf);
  },
  AUDIO_TOGGLE_SELF_MUTE: function handleToggleSelfMute(context) {
    context = context.context;
    const tmp = _getSettings0(context);
    let flag = tmp.deaf;
    if (context === MediaEngineContextTypes.DEFAULT) {
      let obj = importDefault(4675);
      const permission = obj.requestPermission(NativePermissionTypes.AUDIO);
      if (c97) {
        return false;
      }
    }
    if (!(!flag && !tmp.mute)) {
      flag = false;
    }
    if (!context.playSoundEffect) {
      let c102 = true;
    }
    obj = { mute: tmp7, deaf: flag };
    mergeSettings(obj, context);
    store3.eachConnection(updateConnectionMuteDeaf);
  },
  AUDIO_SET_SELF_MUTE: function handleSetSelfMute(mute) {
    mergeSettings({ mute: mute.mute }, mute.context);
    if (!mute.playSoundEffect) {
      let c102 = true;
    }
    store3.eachConnection(updateConnectionMuteDeaf);
  },
  AUDIO_TOGGLE_SELF_DEAF: function handleToggleSelfDeafen(context) {
    context = context.context;
    mergeSettings({ deaf: !_getSettings0(context).deaf }, context);
    store3.eachConnection(updateConnectionMuteDeaf);
  },
  AUDIO_TOGGLE_LOCAL_MUTE: function handleToggleLocalMute(arg0) {
    let context;
    let userId;
    ({ context, userId } = arg0);
    let localMutes;
    if (userId !== store.getId()) {
      localMutes = _getSettings0(context).localMutes;
      if (localMutes[userId]) {
        delete tmp2[tmp];
      } else {
        localMutes[userId] = true;
      }
      const obj = { localMutes };
      mergeSettings(obj, context);
      store3.eachConnection((setLocalMute) => {
        let flag = localMutes[userId];
        if (!flag) {
          flag = false;
        }
        return setLocalMute.setLocalMute(userId, flag);
      }, context);
    }
  },
  AUDIO_SET_LOCAL_VIDEO_DISABLED: function handleSetLocalVideoDisabled(arg0) {
    let context;
    let isAutomatic;
    let persist;
    let userId;
    let videoToggleState;
    ({ context, userId } = arg0);
    ({ videoToggleState, persist, isAutomatic } = arg0);
    let disabledLocalVideos;
    let tmp4 = persist;
    if (persist) {
      tmp4 = isAutomatic;
    }
    disabledLocalVideos(44)(!tmp4, "These are not allowed to both be true.");
    disabledLocalVideos = _getSettings0(context).disabledLocalVideos;
    const hasItem = set1.has(userId);
    let tmp10 = videoToggleState === constants5.AUTO_ENABLED;
    if (!tmp10) {
      tmp10 = videoToggleState === constants5.MANUAL_ENABLED;
    }
    importDefaultResult.info("disableVideo=" + videoToggleState === constants5.DISABLED + " currentlyDisabled=" + null != disabledLocalVideos[userId] && disabledLocalVideos[userId] + " currentlyAutoDisabled=" + hasItem + ", isVideoShown=" + tmp10);
    let tmp14 = hasItem;
    let tmp3 = disabledLocalVideos(44);
    if (hasItem) {
      tmp14 = !tmp8;
    }
    disabledLocalVideos(44)(!tmp14, "If you are auto-disabled, then you are also disabled.");
    let tmp17 = context === MediaEngineContextTypes.DEFAULT;
    if (isAutomatic) {
      isAutomatic = tmp16;
    }
    if (isAutomatic) {
      isAutomatic = tmp17;
    }
    let tmp18 = persist;
    if (persist) {
      tmp18 = tmp16;
    }
    if (tmp18) {
      tmp18 = tmp17;
    }
    importDefaultResult.info("changed=" + videoToggleState === constants5.DISABLED !== (null != disabledLocalVideos[userId] && disabledLocalVideos[userId]) + " isDefaultContext=" + tmp17 + " isUpdateCausedByVideoHealthManager=" + isAutomatic + " isManualToggleByUser=" + tmp18);
    const videoToggleStateMap = _getSettings0(context).videoToggleStateMap;
    let tmp20 = videoToggleStateMap[userId] === constants5.AUTO_PROBING;
    if (tmp20) {
      tmp20 = videoToggleState === constants5.AUTO_ENABLED;
    }
    if (!tmp20) {
      videoToggleStateMap[userId] = videoToggleState;
      let obj = { videoToggleStateMap };
      mergeSettings(obj, context, persist);
      if (videoToggleState === constants5.AUTO_PROBING) {
        const rTCConnection = store2.getRTCConnection();
        if (null != rTCConnection) {
          const result = rTCConnection.pauseStatsCollectionForUser(userId, true);
        }
      } else {
        const rTCConnection1 = store2.getRTCConnection();
        if (null != rTCConnection1) {
          const result1 = rTCConnection1.pauseStatsCollectionForUser(userId, false);
        }
      }
      if (!c131) {
        const _HermesInternal = HermesInternal;
        importDefaultResult.info("isAutoDisableAllowed=" + c131 + " - disabling VideoHealthManager");
        const rTCConnection2 = store2.getRTCConnection();
        let tmp38 = null == rTCConnection2;
        let obj5 = rTCConnection2;
        if (!tmp38) {
          const videoHealthManager = rTCConnection2.getVideoHealthManager();
          tmp38 = null == videoHealthManager;
          obj5 = videoHealthManager;
        }
        if (!tmp38) {
          obj5.disable();
        }
      }
      if (isAutomatic) {
        disabledLocalVideos(12757)(userId, tmp6 ? constants12.AUTO_DISABLE : constants12.AUTO_ENABLE, tmp10);
        if (tmp6) {
          obj8.add(userId);
        } else {
          obj8.delete(userId);
        }
      } else if (tmp18) {
        if (hasItem) {
          if (!tmp6) {
            importDefaultResult.info("disallowing auto-disable for this session because of manual override by user");
            c131 = false;
            const rTCConnection3 = store2.getRTCConnection();
            let tmp44 = null == rTCConnection3;
            let obj7 = rTCConnection3;
            if (!tmp44) {
              const videoHealthManager1 = rTCConnection3.getVideoHealthManager();
              tmp44 = null == videoHealthManager1;
              obj7 = videoHealthManager1;
            }
            if (!tmp44) {
              obj7.disable();
            }
            disabledLocalVideos(12757)(userId, constants12.MANUAL_REENABLE, tmp10);
          }
        }
        disabledLocalVideos(12757)(userId, tmp6 ? constants12.MANUAL_DISABLE : constants12.MANUAL_ENABLE, tmp10);
      }
      if (tmp17) {
        tmp17 = !tmp6;
      }
      if (tmp17) {
        set1.delete(userId);
      }
      if (tmp6) {
        disabledLocalVideos[userId] = true;
      } else {
        delete tmp2[tmp];
      }
      obj = { disabledLocalVideos };
      mergeSettings(obj, context, persist);
      store3.eachConnection((setLocalVideoDisabled) => {
        let tmp3 = null != tmp2;
        if (tmp3) {
          tmp3 = tmp2;
        }
        return setLocalVideoDisabled.setLocalVideoDisabled(userId, tmp3);
      }, context);
    } else {
      disabledLocalVideos(12757)(userId, tmp6 ? constants12.AUTO_DISABLE : constants12.AUTO_ENABLE, tmp10);
    }
  },
  AUDIO_SET_LOCAL_VOLUME: function handleSetLocalVolume(volume) {
    let context;
    let userId;
    ({ context, userId } = volume);
    volume = volume.volume;
    if (userId !== store.getId()) {
      const localVolumes = _getSettings0(context).localVolumes;
      if (volume === tmp4) {
        delete tmp2[tmp];
      } else {
        localVolumes[userId] = volume;
      }
      const obj = { localVolumes };
      mergeSettings(obj, context);
      store3.eachConnection((setLocalVolume) => setLocalVolume.setLocalVolume(userId, volume), context);
      tmp4 = context === MediaEngineContextTypes.STREAM ? closure_46 : closure_45;
    }
  },
  AUDIO_SET_AUDIO_MIXER_SETTINGS: function handleSetAudioMixerSettings(settings) {
    settings = settings.settings;
    mergeSettings({ audioMixerSettings: settings }, settings.context);
    setAudioMixerOptions(settings);
    store3.eachConnection((setSpatialAudioEnabled) => setSpatialAudioEnabled.setSpatialAudioEnabled(outer1_125), MediaEngineContextTypes.DEFAULT);
  },
  AUDIO_SET_LOCAL_PAN: function handleSetLocalPan(left) {
    let context;
    let userId;
    ({ context, userId } = left);
    left = left.left;
    const right = left.right;
    const localPans = _getSettings0(context).localPans;
    localPans[userId] = { left, right };
    mergeSettings({ localPans }, context);
    store3.eachConnection((setLocalPan) => setLocalPan.setLocalPan(userId, left, right), context);
  },
  AUDIO_SET_MODE: function handleAudioSetMode(mode) {
    let obj = { mode: mode.mode };
    obj = {};
    const merged = Object.assign(mode.options);
    obj["updatedAt"] = Date.now();
    obj.modeOptions = obj;
    mergeSettings(obj, mode.context);
    store3.eachConnection(setInputMode);
  },
  AUDIO_SET_INPUT_VOLUME: function handleAudioSetInputVolume(volume) {
    volume = volume.volume;
    mergeSettings({ inputVolume: clampVolume(volume) });
    store3.setInputVolume(volume);
  },
  AUDIO_SET_OUTPUT_VOLUME: function handleAudioSetOutputVolume(volume) {
    volume = volume.volume;
    mergeSettings({ outputVolume: volume });
    store3.setOutputVolume(volume);
  },
  AUDIO_SET_INPUT_DEVICE: function handleSetInputDevice(id) {
    const tmp = getDeviceId(obj3, id.id);
    let closure_89 = performance.now();
    mergeSettings({ inputDeviceId: tmp });
    setInputDevice(tmp);
    store3.eachConnection(updateConnectionVoiceProcessing);
    let c110;
    let c111;
    timeout3.stop();
    let c139 = false;
    if (obj.getConfig({ location: "MediaEngineStore.handleSetInputDevice" }).resetSilenceWarningOnDeviceChange) {
      let c107 = false;
      navigation.reset();
    }
  },
  AUDIO_SET_OUTPUT_DEVICE: function handleSetOutputDevice(id) {
    const obj = {};
    const tmp = getDeviceId(obj4, id.id);
    obj.outputDeviceId = tmp;
    mergeSettings(obj);
    store3.setAudioOutputDevice(tmp);
    store3.eachConnection(updateConnectionVoiceProcessing);
  },
  AUDIO_SET_ACTIVE_INPUT_PROFILE: function handleSetActiveInputProfile(activeInputProfile) {
    mergeSettings({ activeInputProfile: activeInputProfile.inputProfile });
    store3.eachConnection((arg0) => {
      outer1_158(arg0);
      outer1_169(arg0);
    });
    const result = store3.setAudioInputBypassSystemProcessing(_getSettings0().bypassSystemInputProcessing);
    setLoopback();
  },
  AUDIO_SET_ECHO_CANCELLATION: function handleSetEchoCancellation(echoCancellation) {
    let closure_0 = mergeSettings({ echoCancellation: echoCancellation.enabled });
    store3.eachConnection((setEchoCancellation) => setEchoCancellation.setEchoCancellation(echoCancellation.echoCancellation));
    setLoopback();
    trackVoiceProcessing(echoCancellation.location);
  },
  AUDIO_SET_SIDECHAIN_COMPRESSION: function handleSetSidechainCompression(enabled) {
    const result = store3.setSidechainCompression(mergeSettings({ sidechainCompression: enabled.enabled }).sidechainCompression);
  },
  AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: function handleSetSidechainCompressionStrength(sidechainCompressionStrength) {
    const result = store3.setSidechainCompressionStrength(mergeSettings({ sidechainCompressionStrength: sidechainCompressionStrength.strength }).sidechainCompressionStrength);
  },
  AUDIO_SET_LOOPBACK: function handleSetLoopback(loopbackReason) {
    loopbackReason = loopbackReason.loopbackReason;
    if (loopbackReason.enabled) {
      obj.add(loopbackReason);
    } else {
      obj.delete(loopbackReason);
    }
    setLoopback();
  },
  AUDIO_SET_NOISE_SUPPRESSION: function handleSetNoiseSuppression(enabled) {
    let closure_0 = mergeSettings({ noiseSuppression: enabled.enabled });
    store3.eachConnection((setNoiseSuppression) => setNoiseSuppression.setNoiseSuppression(noiseSuppression.noiseSuppression));
    setLoopback();
    trackVoiceProcessing(enabled.location);
  },
  AUDIO_SET_AUTOMATIC_GAIN_CONTROL: function handleSetAutomaticGainControl(automaticGainControl) {
    let closure_0 = mergeSettings({ automaticGainControl: automaticGainControl.enabled });
    store3.eachConnection((arg0) => {
      outer1_167(arg0, automaticGainControl.automaticGainControl);
    });
    setLoopback();
    trackVoiceProcessing(automaticGainControl.location);
  },
  AUDIO_SET_NOISE_CANCELLATION: function handleSetNoiseCancellation(enabled) {
    let closure_0 = mergeSettings({ noiseCancellation: enabled.enabled });
    store3.eachConnection((arg0) => {
      outer1_168(arg0, noiseCancellation.noiseCancellation);
    });
    setLoopback();
    trackVoiceProcessing(enabled.location);
  },
  AUDIO_SET_KRISP_MODEL_OVERRIDE: function handleSetKrispModelOverride(model) {
    const result = importDefault(12740).setKrispModelOverride(model.model);
    model = model.model;
    setLoopback();
  },
  AUDIO_SET_DISPLAY_SILENCE_WARNING: function handleSetSilenceWarning(enabled) {
    mergeSettings({ silenceWarning: enabled.enabled });
  },
  AUDIO_SET_DEBUG_LOGGING: function handleSetDebugLogging(enabled) {
    store3.setDebugLogging(enabled.enabled);
  },
  AUDIO_SET_KRISP_SUPPRESSION_LEVEL: function handleSetKrispSuppressionLevel(level) {
    level = level.level;
    const result = importDefault(12740).setKrispSuppressionLevel(level);
  },
  AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: function handleSetNoiseCancellationEnableStats(enabled) {
    if (!obj.isWeb()) {
      enabled = enabled.enabled;
      if (null != store3.setNoiseCancellationEnableStats) {
        const result = store3.setNoiseCancellationEnableStats(enabled.enabled);
      }
    }
  },
  MEDIA_ENGINE_SET_VIDEO_HOOK: function handleSetVideoHook(enabled) {
    mergeSettings({ videoHook: enabled.enabled });
  },
  MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: function handleSetExperimentalSoundshare(enabled) {
    mergeSettings({ experimentalSoundshare2: enabled.enabled });
  },
  MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: function handleSetUseSystemScreensharePicker(enabled) {
    mergeSettings({ useSystemScreensharePicker: enabled.enabled });
  },
  AUDIO_SET_ATTENUATION: function handleSetAttenuation(attenuation) {
    let closure_0 = mergeSettings({ attenuation: attenuation.attenuation, attenuateWhileSpeakingSelf: attenuation.attenuateWhileSpeakingSelf, attenuateWhileSpeakingOthers: attenuation.attenuateWhileSpeakingOthers });
    store3.eachConnection((setAttenuation) => setAttenuation.setAttenuation(closure_0.attenuation, closure_0.attenuateWhileSpeakingSelf, closure_0.attenuateWhileSpeakingOthers));
  },
  AUDIO_SET_QOS: function handleSetQoS(enabled) {
    enabled = enabled.enabled;
    mergeSettings({ qos: enabled });
    store3.eachConnection((setQoS) => setQoS.setQoS(enabled));
  },
  MEDIA_ENGINE_DEVICES: function handleDevices(videoDevices) {
    let obj = { deviceType: constants9.AUDIO_INPUT };
    const intl = require(1212) /* getSystemLocale */.intl;
    obj.defaultName = intl.string(require(1212) /* getSystemLocale */.t["/QIjDA"]);
    let closure_91 = convertDevices(videoDevices, obj);
    if (!obj2.isEqual(closure_91, closure_91)) {
      setInputDevice(getDeviceId(closure_91, _getSettings0().inputDeviceId));
      store3.eachConnection(updateConnectionVoiceProcessing);
    }
    setOutputDevices(videoDevices);
    let closure_106 = videoDevices.videoDevices.length > 0;
    obj = { deviceType: constants9.VIDEO_INPUT };
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj.defaultName = intl2.string(require(1212) /* getSystemLocale */.t.WKWARY);
    const getMediaEngineImpl = convertDevices(videoDevices, obj);
    if (c99) {
      if (!obj4.isEqual(getMediaEngineImpl, tmp10)) {
        let tmp16 = undefined !== getMediaEngineImpl[DISABLED_DEVICE_ID];
        let tmp19 = DISABLED_DEVICE_ID === DEFAULT_DEVICE_ID;
        if (tmp19) {
          let disabled;
          if (null != tmp10[DEFAULT_DEVICE_ID]) {
            disabled = tmp21.disabled;
          }
          tmp19 = disabled;
        }
        let tmp26 = "Firefox" === importDefault(4450).name;
        if (tmp26) {
          tmp26 = "" === DISABLED_DEVICE_ID;
        }
        if (tmp26) {
          let name;
          if (null != tmp10[DISABLED_DEVICE_ID]) {
            name = tmp29.name;
          }
          tmp26 = "Default" === name;
        }
        if (tmp26) {
          tmp26 = !(null != tmp10[DISABLED_DEVICE_ID] && tmp10[DISABLED_DEVICE_ID].disabled);
          const tmp35 = null != tmp10[DISABLED_DEVICE_ID] && tmp10[DISABLED_DEVICE_ID].disabled;
        }
        if (!tmp16) {
          tmp16 = tmp19;
        }
        if (!tmp16) {
          tmp16 = tmp26;
        }
        updateVideo(tmp16);
        const tmp36 = updateVideo;
      }
      obj4 = importDefault(22);
    }
  },
  AUDIO_VOLUME_CHANGE: function handleVolumeChange(inputVolume) {
    mergeSettings({ inputVolume: clampVolume(inputVolume.inputVolume), outputVolume: inputVolume.outputVolume });
  },
  AUDIO_RESET: function handleReset() {
    const Storage = require(587) /* Storage */.Storage;
    Storage.remove(MediaEngineStore);
  },
  AUDIO_INPUT_DETECTED: function handleInputDetected(inputDetected) {
    inputDetected = inputDetected.inputDetected;
    if (null == inputDetected) {
      return false;
    } else {
      let closure_108 = true !== c107 && !inputDetected;
      if (inputDetected) {
        c107 = true;
        let c139 = false;
        timeout3.stop();
        timeout2.stop();
      } else if (_getSettings0().mode === InputModes.VOICE_ACTIVITY) {
        if (c107) {
          let obj = importDefault(12834);
          obj = { location: "MediaEngineStore.handleInputDetected" };
          const config = obj.getConfig(obj);
          const resetSilenceWarningAfterNMinutes = config.resetSilenceWarningAfterNMinutes;
          if (config.enableHardwareSilenceWarning) {
            timeout3.start(MINUTE, () => {
              let obj = outer1_1(outer1_3[48]);
              obj = {};
              const tmp = outer1_91[outer1_183(undefined, outer1_91, outer1_157(undefined).inputDeviceId)];
              let name;
              if (null != tmp) {
                name = tmp.name;
              }
              obj.input_device_name = name;
              obj.rtc_connection_id = outer1_20.getRTCConnectionId();
              obj.track(outer1_23.HARDWARE_MUTE_GUESSED, obj);
              let c139 = true;
              outer1_74.emitChange();
            });
          }
          if (null != resetSilenceWarningAfterNMinutes) {
            timeout2.start(resetSilenceWarningAfterNMinutes * importDefault(664).Millis.MINUTE, () => {
              let c107 = false;
              outer1_81.reset();
            });
          }
        }
      }
    }
  },
  AUDIO_INPUT_DEVICE_OS_CONFIG_FETCHED: function handleOSConfigFetchSuccess(arg0) {
    let c110;
    let c111;
    ({ osVolume: c111, osMuted: c110 } = arg0);
  },
  AUDIO_SET_SUBSYSTEM: function handleSetAudioSubsystem(subsystem) {
    setAudioSubsystem(subsystem.subsystem);
  },
  AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: function handleBypassSystemInputProcessing(bypassEnabled) {
    bypassEnabled = bypassEnabled.bypassEnabled;
    mergeSettings({ bypassSystemInputProcessing: bypassEnabled });
    const result = store3.setAudioInputBypassSystemProcessing(bypassEnabled);
    trackVoiceProcessing(bypassEnabled.location);
  },
  MEDIA_ENGINE_SET_AUDIO_ENABLED: function handleSetAudioEnabled(enabled) {
    enabled = enabled.enabled;
    if (enabled.unmute) {
      mergeSettings({ mute: false, deaf: false });
    }
    store3.eachConnection(updateConnectionMuteDeaf);
  },
  MEDIA_ENGINE_SET_VIDEO_ENABLED: function handleSetVideoEnabled(enabled) {
    const permission = importDefault(4675).requestPermission(NativePermissionTypes.CAMERA);
    updateVideo(enabled.enabled);
  },
  MEDIA_ENGINE_PERMISSION: function handlePermission(kind) {
    kind = kind.kind;
    if (!kind.granted) {
      if ("audio" === kind) {
        let c84 = false;
        store3.eachConnection(updateConnectionMuteDeaf);
      } else if ("video" === kind) {
        updateVideo(false);
      }
    }
  },
  MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function handleSetGoLiveSource(settings) {
    let audioDeviceGuid;
    let sound;
    let soundshareId;
    let soundshareSession;
    let videoDeviceGuid;
    settings = settings.settings;
    let desktopSettings;
    if (null != settings) {
      desktopSettings = settings.desktopSettings;
    }
    if (null != desktopSettings) {
      desktopSettings = settings.desktopSettings;
      const sourceId = desktopSettings.sourceId;
      let DEFAULT2 = settings.context;
      if (null == DEFAULT2) {
        DEFAULT2 = MediaEngineContextTypes.DEFAULT;
      }
      let qualityOptions = settings.qualityOptions;
      if (null == qualityOptions) {
        qualityOptions = { resolution: 720, frameRate: 30 };
      }
      const pidFromDesktopSource = importDefault(4124).getPidFromDesktopSource(sourceId);
      soundshareId = null;
      soundshareSession = null;
      if (require(477) /* set */.isPlatformEmbedded) {
        ({ soundshareId, soundshareSession } = maybeTryHookProcess(pidFromDesktopSource, desktopSettings.sound));
        const tmp17 = maybeTryHookProcess(pidFromDesktopSource, desktopSettings.sound);
      }
      if (DEFAULT2 !== DEFAULT2) {
        if (null != closure_79) {
          store3.setGoLiveSource(null, DEFAULT2);
        }
      }
      let tmp25 = DEFAULT2 === MediaEngineContextTypes.STREAM;
      if (tmp25) {
        tmp25 = c99;
      }
      let obj = {};
      obj = { id: sourceId, sourcePid: pidFromDesktopSource, soundshareId, soundshareSession };
      obj.desktopSource = obj;
      ({ resolution: obj9.resolution, frameRate: obj9.frameRate } = qualityOptions);
      obj.quality = {};
      updateVideo(tmp25, obj);
      const obj1 = {};
      const obj6 = importDefault(4124);
      const tmp23 = updateVideo;
    } else {
      let cameraSettings;
      if (null != settings) {
        cameraSettings = settings.cameraSettings;
      }
      if (null != cameraSettings) {
        let DEFAULT = settings.context;
        if (null == DEFAULT) {
          DEFAULT = MediaEngineContextTypes.DEFAULT;
        }
        let tmp8 = DEFAULT === MediaEngineContextTypes.STREAM;
        ({ videoDeviceGuid, audioDeviceGuid, sound } = settings.cameraSettings);
        if (tmp8) {
          tmp8 = c99;
        }
        let qualityOptions1 = settings.qualityOptions;
        if (null == qualityOptions1) {
          qualityOptions1 = { resolution: 720, frameRate: 30 };
        }
        const obj2 = {};
        const obj3 = { videoDeviceGuid, audioDeviceGuid, sound };
        obj2.cameraSource = obj3;
        const obj4 = {};
        ({ resolution: obj4.resolution, frameRate: obj4.frameRate } = qualityOptions1);
        obj2.quality = obj4;
        updateVideo(tmp8, obj2);
      } else {
        updateVideo(c99, null);
      }
    }
  },
  MEDIA_ENGINE_SET_VIDEO_DEVICE: function handleSetVideoDevice(id) {
    mergeSettings({ videoDeviceId: getDeviceId(getMediaEngineImpl, id.id) });
    updateVideo();
  },
  MEDIA_ENGINE_INTERACTION_REQUIRED: function handleInteractionRequired(required) {
    let flag = required !== required.required;
    if (flag) {
      required = required.required;
      flag = true;
      if (!required.required) {
        store3.interact();
        flag = true;
      }
    }
    return flag;
  },
  USER_SETTINGS_MODAL_INIT: handleUserSettingsModal,
  USER_SETTINGS_MODAL_SET_SECTION: handleUserSettingsModal,
  CERTIFIED_DEVICES_SET: function handleSetCertifiedDevices() {
    store3.eachConnection(updateConnectionVoiceProcessing);
    return false;
  },
  RPC_APP_CONNECTED: function handleAppConnected(application) {
    set.add(application.application.id);
  },
  RPC_APP_DISCONNECTED: function handleAppDisconnected(application) {
    set.delete(application.application.id);
  },
  OVERLAY_INITIALIZE: function handleOverlayInitialize(mediaEngineState) {
    let STREAM;
    let c114;
    let c115;
    let c116;
    let closure_134;
    let closure_82;
    let obj3;
    let obj4;
    ({ settingsByContext: closure_82, inputDevices: obj3, outputDevices: obj4, appSupported: closure_134, krispModuleLoaded: c114, krispFatalError: c115, krispVersion: c116, goLiveContext: STREAM } = mediaEngineState.mediaEngineState);
  },
  APP_STATE_UPDATE: function handleFocus(state) {
    state = state.state;
    importDefault(10233);
    if (state === constants2.BACKGROUND) {
      if (c99) {
        if (!tmp2) {
          let c105 = true;
          updateVideo(false);
        }
        return true;
      }
    }
    if (state === constants2.ACTIVE) {
      if (c105) {
        c105 = false;
        updateVideo(true);
      }
    }
    return false;
  },
  SET_CHANNEL_BITRATE: function handleSetChannelBitrate(arg0) {
    let closure_0 = arg0;
    store3.eachConnection((setBitRate) => setBitRate.setBitRate(bitrate.bitrate));
  },
  SET_VAD_PERMISSION: function handleVADPermissionChange(hasPermission) {
    if (!hasPermission.hasPermission === c97) {
      return false;
    } else {
      c97 = tmp;
      store3.eachConnection(updateConnectionMuteDeaf);
    }
  },
  SET_NATIVE_PERMISSION: function handleNativePermissionChange(permissionType) {
    permissionType = permissionType.permissionType;
    if (NativePermissionTypes.AUDIO === permissionType) {
      let c129 = true;
      store3.eachConnection(updateConnectionMuteDeaf);
    } else if (NativePermissionTypes.CAMERA === permissionType) {
      let tmp3 = !tmp;
      if (!tmp) {
        tmp3 = c99;
      }
      if (tmp3) {
        updateVideo(false);
      }
    } else {
      return false;
    }
  },
  SET_CHANNEL_VIDEO_QUALITY_MODE: function handleSetChannelVideoQualityMode(arg0) {
    let closure_0 = arg0;
    store3.eachConnection((applyVideoQualityMode) => applyVideoQualityMode.applyVideoQualityMode(mode.mode));
  },
  MEDIA_ENGINE_SET_AEC_DUMP: function handleSetAecDump(aecDumpEnabled) {
    store3.setAecDump(mergeSettings({ aecDumpEnabled: aecDumpEnabled.enabled }).aecDumpEnabled);
  },
  MEDIA_ENGINE_SET_OPENH264_ENABLED: function handleSetOpenH264Enabled(enabled) {
    enabled = enabled.enabled;
    mergeSettings({ openH264Enabled: enabled });
    let tmp2 = null == importDefault(5142);
    if (!tmp2) {
      tmp2 = null == importDefault(5142).setOpenH264Enabled;
    }
    if (!tmp2) {
      importDefault(5142).setOpenH264Enabled(enabled);
      const obj = importDefault(5142);
    }
  },
  MEDIA_ENGINE_RESET_SETTINGS: function handleResetSettings(overrides) {
    overrides = overrides.overrides;
    const values = Object.values(MediaEngineContextTypes);
    let closure_82 = values.reduce((arg0, arg1) => {
      const tmp = outer1_152();
      arg0[arg1] = outer1_1(outer1_3[38]).merge(tmp, overrides[arg1]);
      return arg0;
    }, {});
    const Storage = overrides(587).Storage;
    const result = Storage.set(MediaEngineStore, closure_82);
    applySettings();
  },
  CHANNEL_DELETE: function handleChannelDelete() {
    if (c99) {
      if (null == store2.getRTCConnectionId()) {
        updateVideo(false, null);
      }
    }
    return false;
  },
  MEDIA_ENGINE_NOISE_CANCELLATION_ERROR: function handleNoiseCancellationError(code) {
    if (code.code === NoiseCancellerError.KRISP_CPU_OVERUSE) {
      closure_145.noiseCancellation = false;
      closure_145.noiseSuppression = true;
      let closure_0 = _getSettings0();
      store3.eachConnection((arg0) => {
        outer1_168(arg0, noiseCancellation.noiseCancellation);
      });
      setLoopback();
      trackVoiceProcessing();
      return true;
    } else {
      return false;
    }
  },
  MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR: function handleVoiceActivityDetectionError(code) {
    let flag = code.code === NoiseCancellerError.KRISP_VAD_CPU_OVERUSE;
    if (flag) {
      const obj = { vadUseKrisp: false };
      closure_145.modeOptions = obj;
      store3.eachConnection((arg0) => {
        outer1_158(arg0);
      });
      flag = true;
    }
    return flag;
  },
  MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: function handleNoiseCancellationErrorReset() {
    let flag = c122;
    if (c122) {
      c122 = false;
      flag = true;
    }
    return flag;
  },
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: function handleApplyMediaFilterSettings(settings) {
    const result = store3.applyMediaFilterSettings(settings.settings);
    result.finally(() => {
      const outer1_123 = false;
      outer1_74.emitChange();
    });
  },
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: function handleApplyMediaFilterSettingsStart() {
    let c123 = true;
  },
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: function handleApplyMediaFilterSettingsError() {
    let c123 = false;
  },
  USER_SETTINGS_PROTO_UPDATE: function handleUserSettingsProtoUpdate(settings) {
    if (settings.settings.type === constants7.PRELOADED_USER_SETTINGS) {
      if (!settings.local) {
        if (null == tmp) {
          applyRemoteSettings(true);
        }
      }
    }
    return false;
  },
  CLIPS_INIT: function handleClipsInit(applicationName) {
    let minCaptureHeight;
    let minCaptureWidth;
    let quality;
    let sourceId;
    ({ sourceId, quality } = applicationName);
    let obj = require(4188) /* isClipsEnabled */;
    if (obj.isDecoupledClipsEnabled()) {
      if (null != importDefault(3741)) {
        let id;
        if (null != obj) {
          id = obj.desktopSource.id;
        }
        if (id === sourceId) {
          if (obj.quality === quality) {
            return false;
          }
        }
        if (null != obj) {
          store3.setClipsSource(null);
          if (obj12.isWindows()) {
            if (null != obj.desktopSource.soundshareId) {
              let obj2 = importAll(12765);
              const result = obj2.cancelAttachToProcess(obj.desktopSource.soundshareId);
            } else {
              let videoHook = null != obj.desktopSource.sourcePid;
              if (videoHook) {
                videoHook = _getSettings0().videoHook;
              }
              if (videoHook) {
                let obj1 = importAll(12765);
                const result1 = obj1.cancelAttachToProcess(obj.desktopSource.sourcePid);
              }
            }
          }
          obj12 = require(477) /* set */;
        }
        let obj3 = importDefault(4124);
        const pidFromDesktopSource = obj3.getPidFromDesktopSource(sourceId);
        obj = {};
        obj = { id: sourceId, sourcePid: pidFromDesktopSource };
        ({ soundshareId: obj6.soundshareId, soundshareSession: obj6.soundshareSession } = maybeTryHookProcess(pidFromDesktopSource, true));
        obj.desktopSource = obj;
        obj.quality = quality;
        const tmp22 = maybeTryHookProcess(pidFromDesktopSource, true);
        const videoHook2 = _getSettings0().videoHook;
        let tmp26 = !videoHook2;
        if (!tmp26) {
          const DisableHookFramePacerExperiment = require(12768) /* apexExperiment */.DisableHookFramePacerExperiment;
          obj1 = { location: "handleClipsInit" };
          tmp26 = !DisableHookFramePacerExperiment.getConfig(obj1).enabled;
        }
        let enabled = videoHook2;
        if (videoHook2) {
          const VideoHookDX12Experiment = require(12769) /* apexExperiment */.VideoHookDX12Experiment;
          obj2 = { location: "handleClipsInit" };
          enabled = VideoHookDX12Experiment.getConfig(obj2).enabled;
        }
        const UpscaleSmallCapturedFramesExperiment = require(12770) /* apexExperiment */.UpscaleSmallCapturedFramesExperiment;
        obj3 = { location: "handleClipsInit" };
        const config = UpscaleSmallCapturedFramesExperiment.getConfig(obj3);
        const obj4 = {};
        const obj5 = { id: obj.desktopSource.id, soundshareId: obj.desktopSource.soundshareId, useVideoHook: videoHook2, useHookFramePacer: tmp26 };
        ({ minCaptureWidth, minCaptureHeight } = config);
        obj5.useGraphicsCapture = supportsWindowsGraphicsCapture();
        obj5.useCaptureDeviceForEncode = false;
        obj5.useLoopback = tmp20.getExperimentalSoundshare();
        obj5.useQuartzCapturer = true;
        obj5.allowScreenCaptureKit = supportsScreenCaptureKit();
        obj5.videoHookStaleFrameTimeoutMs = 500;
        obj5.graphicsCaptureStaleFrameTimeoutMs = closure_65;
        obj5.hdrCaptureMode = getHdrCaptureMode("MediaEngineStore clips");
        obj5.videoHookAllowDx12 = enabled;
        obj5.minCaptureWidth = minCaptureWidth;
        obj5.minCaptureHeight = minCaptureHeight;
        obj4.desktopDescription = obj5;
        obj4.quality = quality;
        obj4.bitratePercent = quality.bitratePercent;
        obj4.applicationName = applicationName.applicationName;
        obj4.videoEncoderExperiments = tmp20.getVideoEncoderExperiments(MediaEngineContextTypes.STREAM, "streamer");
        store3.setClipsSource(obj4);
      }
    }
    return false;
  },
  CLIPS_RESTART: function handleClipsRestart() {
    let c80 = null;
  },
  CLIPS_SETTINGS_UPDATE: function handleClipsSettingsUpdate(settings) {
    settings = settings.settings;
    if (false === settings.decoupledClipsEnabled) {
      let c80 = null;
      store3.setClipsSource(null);
    }
    if (false === settings.clipsEnabled) {
      c80 = null;
    }
  },
  MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: function handleSetEnableHardwareMuteNotice(enabled) {
    enabled = enabled.enabled;
  },
  MEDIA_ENGINE_SET_DEVICE_AUDIO_EFFECTS: function handleSetDeviceAudioEffects(active) {
    closure_126[active.deviceId] = { active: active.active, available: active.available };
  }
};
tmp20 = new tmp20(require("dispatcher"), getMediaEngineImpl);
let closure_74 = tmp20;
let result1 = set.fileFinishedImporting("stores/MediaEngineStore.tsx");

export default tmp20;
export const WINDOWS_NOISE_SUPPRESSION_EFFECT = "deep_noise_suppression";
export const LINUX_OPENH264_URL = "https://ciscobinary.openh264.org/libopenh264-2.5.1-linux64.7.so.bz2";
export const LINUX_OPENH264_SHA256 = "d828a944d4d2bb64195ada89cf2cde9bc41733b1547d0788ef49fb8cb231b76f";
export const DeviceFormFactor = obj;
