// Module ID: 4173
// Function ID: 35418
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 4173 (_isNativeReflectConstruct)
let DEFAULT_DEVICE_ID;
let DISABLED_DEVICE_ID;
let Features;
let InputModes;
let NativePermissionTypes;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
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
function getDefaultSettings() {
  let obj = { mode: InputModes.VOICE_ACTIVITY };
  obj = { position: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001465328505083617, backgroundColor: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000217534276588052, opacity: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003836952962855214, top: -91878362797366780000000000, left: 175902004323928600000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, right: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000021219957915, bottom: -4182107295528360000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, autoThreshold: arg1(dependencyMap[29]).isPlatformEmbedded || false, shortcut: [], updatedAt: undefined };
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
  obj.videoHook = result.supports(Features.VIDEO_HOOK);
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
  let obj = arg1(dependencyMap[33]);
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
          const obj = { type: "file", video: {} };
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
  if (null != closure_127) {
    let resolved = closure_127;
  } else {
    const _window = window;
    if ("undefined" !== typeof window) {
      const nextPromise = function detectH265HardwareDecode() {
        return callback(...arguments);
      }().then((arg0) => arg0);
      closure_127 = nextPromise;
      resolved = nextPromise;
      const promise = function detectH265HardwareDecode() {
        return callback(...arguments);
      }();
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
  let tmp2 = closure_82[DEFAULT];
  if (null == tmp2) {
    const tmp4 = getDefaultSettings();
    closure_82[DEFAULT] = tmp4;
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
  const tmp6 = isKrispAvailable() ? closure_144 : obj1;
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
    obj.vadDuringPreProcess = arg1(dependencyMap[34]).getVADBeforeProcessingExperimentConfig(obj).enabled;
    const obj5 = arg1(dependencyMap[34]);
  }
  if (null != obj.vadKrispActivationThreshold) {
    obj = {};
    const merged3 = Object.assign(tmp2);
    const merged4 = Object.assign(tmp5);
    const merged5 = Object.assign(tmp6);
    obj["modeOptions"] = obj;
    return obj;
  }
  const aGC2ExperimentConfig = arg1(dependencyMap[35]).getAGC2ExperimentConfig({ location: "getSettings" });
  if (null != aGC2ExperimentConfig.vadKrispActivationThreshold) {
    obj.vadKrispActivationThreshold = aGC2ExperimentConfig.vadKrispActivationThreshold;
  }
}
function setInputMode(SOFT_INPUT_ADJUST_RESIZE, arg1) {
  const tmp = _getSettings0(SOFT_INPUT_ADJUST_RESIZE.context);
  const mode = tmp.mode;
  if (SOFT_INPUT_ADJUST_RESIZE.context === MediaEngineContextTypes.DEFAULT) {
    let obj = arg1(dependencyMap[36]);
    obj.setPushToTalkState(false, false);
  }
  let showPTTSpeakingIndicator = importDefault(dependencyMap[37]).getConfig({ location: "setInputMode" }).showPTTSpeakingIndicator;
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
  return importDefault(dependencyMap[38]).clamp(inputVolume, 0, tmp);
}
function updateConnectionMuteDeaf(context) {
  const tmp = _getSettings0(context.context);
  context = context.context;
  if (MediaEngineContextTypes.DEFAULT === context) {
    let tmp4 = tmp2;
    if (!tmp2) {
      tmp4 = closure_95;
    }
    if (!tmp4) {
      tmp4 = closure_96;
    }
    if (!tmp4) {
      tmp4 = closure_97;
    }
    if (!tmp4) {
      tmp4 = !importDefault(dependencyMap[32]).didHavePermission(NativePermissionTypes.AUDIO);
      const obj = importDefault(dependencyMap[32]);
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
    importDefault(dependencyMap[39]).updateNativeMute();
    const obj2 = importDefault(dependencyMap[39]);
  }
}
function updateVideo(closure_99, arg1) {
  let minCaptureHeight;
  let minCaptureWidth;
  let tmp = closure_99;
  const tmp2 = arg1;
  if (closure_99 === undefined) {
    tmp = closure_99;
  }
  let desktopSource;
  if (null != tmp2) {
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
      result.setGoLiveSource(null, STREAM);
    }
    if (!closure_99) {
      if (!tmp) {
        if (null != tmp2) {
          let obj = { resolution: tmp2.quality.resolution, frameRate: tmp2.quality.frameRate };
          if (null != tmp2.desktopSource) {
            const videoHook2 = _getSettings0().videoHook;
            const tmp82 = supportsWindowsGraphicsCapture();
            if (!tmp82) {
              let obj5 = arg1(dependencyMap[29]);
              let isWindowsResult = obj5.isWindows();
              if (isWindowsResult) {
                isWindowsResult = 0 >= closure_31;
              }
              if (!isWindowsResult) {
                let tmp61 = !videoHook2;
                if (!tmp61) {
                  const DisableHookFramePacerExperiment = arg1(dependencyMap[43]).DisableHookFramePacerExperiment;
                  obj = { location: "updateVideo" };
                  tmp61 = !DisableHookFramePacerExperiment.getConfig(obj).enabled;
                }
                let enabled2 = videoHook2;
                if (videoHook2) {
                  const VideoHookDX12Experiment = arg1(dependencyMap[44]).VideoHookDX12Experiment;
                  let obj1 = { location: "updateVideo" };
                  enabled2 = VideoHookDX12Experiment.getConfig(obj1).enabled;
                }
                const UpscaleSmallCapturedFramesExperiment = arg1(dependencyMap[45]).UpscaleSmallCapturedFramesExperiment;
                let obj2 = { location: "updateVideo" };
                const config = UpscaleSmallCapturedFramesExperiment.getConfig(obj2);
                let obj3 = {};
                let obj4 = { id: tmp2.desktopSource.id, soundshareId: tmp2.desktopSource.soundshareId, useVideoHook: videoHook2, useHookFramePacer: tmp61, useGraphicsCapture: tmp82, useGraphicsCaptureApiLevel: 0 };
                ({ minCaptureWidth, minCaptureHeight } = config);
                obj4.useCaptureDeviceForEncode = arg1(dependencyMap[29]).isWindows();
                obj4.useLoopback = tmp20.getExperimentalSoundshare();
                obj4.useQuartzCapturer = true;
                obj4.allowScreenCaptureKit = supportsScreenCaptureKit();
                obj4.videoHookStaleFrameTimeoutMs = 500;
                obj4.graphicsCaptureStaleFrameTimeoutMs = closure_65;
                obj4.hdrCaptureMode = tmp79;
                const obj14 = arg1(dependencyMap[29]);
                obj5 = { location: "updateVideo" };
                obj4.enableGlobalFramePoolLock = arg1(dependencyMap[46]).getGlobalFramePoolLockExperimentConfig(obj5).enabled;
                obj4.useGraphicsCaptureDirtyRegions = false;
                obj4.videoHookAllowDx12 = enabled2;
                obj4.minCaptureWidth = minCaptureWidth;
                obj4.minCaptureHeight = minCaptureHeight;
                obj3.desktopDescription = obj4;
                obj3.quality = obj;
                result.setGoLiveSource(obj3, STREAM);
                const obj15 = arg1(dependencyMap[46]);
              } else if (true === closure_135) {
                const WGCDirtyRegionsExperiment = arg1(dependencyMap[41]).WGCDirtyRegionsExperiment;
                const obj6 = { location: "updateVideo" };
                let enabled = WGCDirtyRegionsExperiment.getConfig(obj6).enabled;
              } else {
                const WGCDirtyRegionsAllExperiment = arg1(dependencyMap[42]).WGCDirtyRegionsAllExperiment;
                const obj7 = { location: "updateVideo" };
                enabled = WGCDirtyRegionsAllExperiment.getConfig(obj7).enabled;
              }
            } else {
              obj3 = arg1(dependencyMap[29]);
              let isWindowsResult1 = obj3.isWindows();
              if (isWindowsResult1) {
                obj4 = importDefault(dependencyMap[54]);
                let release;
                if (null != importDefault(dependencyMap[64])) {
                  release = importDefault(dependencyMap[64]).os.release;
                }
                isWindowsResult1 = obj4.satisfies(release, closure_32);
              }
            }
            const tmp79 = getHdrCaptureMode("MediaEngineStore go live");
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
            result.setGoLiveSource(obj8, STREAM);
          }
        }
      }
    }
    let videoDeviceId = _getSettings0().videoDeviceId;
    if (closure_99) {
      if (videoDeviceId === DEFAULT_DEVICE_ID) {
        if (DISABLED_DEVICE_ID === DEFAULT_DEVICE_ID) {
          if (DISABLED_DEVICE_ID !== DISABLED_DEVICE_ID) {
            videoDeviceId = DISABLED_DEVICE_ID;
          }
          closure_99 = tmp;
          if (tmp) {
            let tmp35 = getDeviceId(obj4, videoDeviceId);
          } else {
            tmp35 = DISABLED_DEVICE_ID;
          }
          let DISABLED_DEVICE_ID = tmp35;
          result.setVideoInputDevice(DISABLED_DEVICE_ID);
        }
      }
    }
    DISABLED_DEVICE_ID = videoDeviceId;
  } else {
    if (null == tmp3.desktopSource.soundshareId) {
      let videoHook = null != tmp3.desktopSource.sourcePid;
      if (videoHook) {
        videoHook = _getSettings0().videoHook;
      }
      if (videoHook) {
        obj1 = importAll(dependencyMap[40]);
        const result = obj1.cancelAttachToProcess(tmp3.desktopSource.sourcePid);
      }
      result.setGoLiveSource(null, STREAM);
    } else {
      obj = arg1(dependencyMap[29]);
    }
    obj2 = importAll(dependencyMap[40]);
    const result1 = obj2.cancelAttachToProcess(tmp3.desktopSource.soundshareId);
  }
}
function noiseCancellerErrorToAVUnderlyingError(code) {
  if (NoiseCancellerError.KRISP_CPU_OVERUSE === code) {
    return arg1(dependencyMap[47]).AVUnderlyingError.KrispCpuOveruse;
  } else if (NoiseCancellerError.KRISP_FAILED === code) {
    return arg1(dependencyMap[47]).AVUnderlyingError.KrispFailed;
  } else if (NoiseCancellerError.KRISP_VAD_CPU_OVERUSE === code) {
    return arg1(dependencyMap[47]).AVUnderlyingError.KrispVadCpuOveruse;
  } else if (NoiseCancellerError.KRISP_INIT_ERROR === code) {
    return arg1(dependencyMap[47]).AVUnderlyingError.KrispInitError;
  } else if (NoiseCancellerError.KRISP_INIT_ERROR_NATIVE === code) {
    return arg1(dependencyMap[47]).AVUnderlyingError.KrispInitErrorNative;
  } else if (NoiseCancellerError.KRISP_INIT_ERROR_SSE4_NOT_SUPPORTED === code) {
    return arg1(dependencyMap[47]).AVUnderlyingError.KrispInitErrorSse4NotSupported;
  } else if (NoiseCancellerError.KRISP_INIT_ERROR_AVX2_NOT_SUPPORTED === code) {
    return arg1(dependencyMap[47]).AVUnderlyingError.KrispInitErrorAvx2NotSupported;
  } else if (NoiseCancellerError.KRISP_INIT_ERROR_UNSIGNED === code) {
    return arg1(dependencyMap[47]).AVUnderlyingError.KrispInitErrorUnsigned;
  } else if (NoiseCancellerError.KRISP_INIT_ERROR_GLOBAL_INIT === code) {
    return arg1(dependencyMap[47]).AVUnderlyingError.KrispInitErrorGlobalInit;
  } else if (NoiseCancellerError.KRISP_INIT_ERROR_WEIGHT_8K === code) {
    return arg1(dependencyMap[47]).AVUnderlyingError.KrispInitErrorWeight8k;
  } else if (NoiseCancellerError.KRISP_INIT_ERROR_WEIGHT_16K === code) {
    return arg1(dependencyMap[47]).AVUnderlyingError.KrispInitErrorWeight16k;
  } else if (NoiseCancellerError.KRISP_INIT_ERROR_WEIGHT_32K === code) {
    return arg1(dependencyMap[47]).AVUnderlyingError.KrispInitErrorWeight32k;
  } else if (NoiseCancellerError.KRISP_INIT_ERROR_WEIGHT_VAD === code) {
    return arg1(dependencyMap[47]).AVUnderlyingError.KrispInitErrorWeightVad;
  }
}
function videoFilterErrorToAVUnderlyingError(code) {
  if (constants10.UNSUPPORTED === code) {
    return arg1(dependencyMap[47]).AVUnderlyingError.VideoBackgroundUnsupported;
  } else if (constants10.INIT_FAILED === code) {
    return arg1(dependencyMap[47]).AVUnderlyingError.VideoBackgroundInitFailed;
  }
}
function handleVoiceProcessingError(code) {
  importDefaultResult.warn("Voice processing error: " + code);
  let obj = arg1(dependencyMap[47]);
  obj = { type: arg1(dependencyMap[47]).AVError.NOISE_CANCELLER_ERROR, underlyingError: noiseCancellerErrorToAVUnderlyingError(code) };
  obj.reportAVError(obj);
  let obj2 = importDefault(dependencyMap[48]);
  obj = { noise_canceller_error: code };
  obj2.track(constants.VOICE_PROCESSING, obj);
  if (set3.has(code)) {
    let closure_115 = true;
  } else if (code === NoiseCancellerError.KRISP_VAD_CPU_OVERUSE) {
    const obj1 = { type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR", code };
    importDefault(dependencyMap[49]).dispatch(obj1);
    const obj7 = importDefault(dependencyMap[49]);
  } else {
    let closure_122 = true;
    obj2 = { type: "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR", code };
    importDefault(dependencyMap[49]).dispatch(obj2);
    const obj5 = importDefault(dependencyMap[49]);
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
    let obj = arg1(dependencyMap[47]);
    obj = { type: arg1(dependencyMap[47]).AVError.VIDEO_BACKGROUND_UNAVAILABLE, underlyingError: videoFilterErrorToAVUnderlyingError(code) };
    obj.reportAVError(obj);
  }
  obj = { type: "MEDIA_ENGINE_VIDEO_FILTER_ERROR", code };
  if (arg1 === constants11.LIVE) {
    str = "live";
  }
  obj.target = str;
  importDefault(dependencyMap[49]).dispatch(obj);
}
function getAutomaticGainControlConfig(disable) {
  let obj = { enabled: disable };
  obj = { location: "getAutomaticGainControlConfig", disable: !disable };
  const merged = Object.assign(arg1(dependencyMap[35]).getAGC2ExperimentConfig(obj).noiseCancellationConfig);
  return obj;
}
function setAutomaticGainControl(setAutomaticGainControl, disable) {
  const result = setAutomaticGainControl.setAutomaticGainControl(getAutomaticGainControlConfig(disable));
}
function setNoiseCancellation(setNoiseCancellation) {
  const tmpResult = importDefault(dependencyMap[50])(arg1, tmp20.getSystemMicrophoneMode());
  if (tmpResult !== arg1) {
    importDefaultResult.info("Falling back to system noise suppression.");
  }
  setNoiseCancellation.setNoiseCancellation(tmpResult);
  let obj = arg1(dependencyMap[35]);
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
  const result = setEchoCancellation.setSpatialAudioEnabled(tmp.audioMixerSettings.enabled);
  let obj = arg1(dependencyMap[29]);
  let isWindowsResult = obj.isWindows();
  if (isWindowsResult) {
    const obj2 = importDefault(dependencyMap[54]);
    let release;
    if (null != importDefault(dependencyMap[64])) {
      release = importDefault(dependencyMap[64]).os.release;
    }
    isWindowsResult = obj2.satisfies(release, closure_146);
  }
  if (isWindowsResult) {
    if (setEchoCancellation.context === MediaEngineContextTypes.DEFAULT) {
      obj = { location: "updateConnectionVoiceProcessing" };
      const systemwideEchoCancellationExperimentConfig = arg1(dependencyMap[51]).getSystemwideEchoCancellationExperimentConfig(obj);
      let tmp23 = isDeviceSystemEchoIncompatible(obj2[closure_74.getInputDeviceId(closure_74)]);
      if (!tmp23) {
        tmp23 = isDeviceSystemEchoIncompatible(obj3[closure_74.getOutputDeviceId(closure_74)]);
      }
      let str = "mix";
      if (!tmp23) {
        str = systemwideEchoCancellationExperimentConfig.echoReferenceMode;
      }
      setEchoCancellation.setEchoReferenceMode(str);
      const obj4 = arg1(dependencyMap[51]);
    }
  }
  const obj3 = arg1(dependencyMap[29]);
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
    closure_62.error("Device enumeration timed out");
    callback2(closure_3[48]).track(constants.DEVICE_ENUMERATION_TIMEOUT, {});
  });
  result.on(arg1(dependencyMap[30]).MediaEngineEvent.Connection, (setAttenuation) => {
    let length;
    let length2;
    let result2 = callback10();
    callback6(setAttenuation);
    callback7(setAttenuation);
    callback8(setAttenuation);
    const tmp5 = callback5();
    setAttenuation.setAttenuation(tmp5.attenuation, tmp5.attenuateWhileSpeakingSelf, tmp5.attenuateWhileSpeakingOthers);
    setAttenuation.setQoS(tmp5.qos);
    let obj = setAttenuation(closure_3[29]);
    if (obj.isWindows()) {
      setAttenuation.setExperimentFlag(closure_50.H265_HARDWARE_ONLY, true);
      callback4().then((arg0) => {
        arg0.setExperimentFlag(obj.H265_HARDWARE_DECODE_AVAILABLE, arg0);
      });
      const promise = callback4();
    } else {
      if (obj2.isMac()) {
        setAttenuation.setExperimentFlag(closure_50.H265_HARDWARE_DECODE_AVAILABLE, true);
      }
      const obj2 = setAttenuation(closure_3[29]);
    }
    const obj3 = setAttenuation(closure_3[29]);
    if (tmp16) {
      setAttenuation.setExperimentFlag(closure_50.USE_LIBOPENH264_DECODER, true);
    }
    const tmp16 = setAttenuation(closure_3[29]).isLinux() && tmp5.openH264Enabled;
    if (obj4.getLowLatencyRateControlExperimentConfig({ location: "setupMediaEngine" }).enabled) {
      setAttenuation.setExperimentFlag(closure_50.LOW_LATENCY_RATE_CONTROL, true);
    }
    setAttenuation.setExperimentFlag(closure_50.RESET_DECODER_ON_ERRORS, true);
    setAttenuation.setExperimentFlag(closure_50.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, true);
    const obj4 = setAttenuation(closure_3[52]);
    if (obj5.getConfig({ location: "MediaEngineStore" }).swallowVolumeOnlySpeakingEvents) {
      setAttenuation.setExperimentFlag(closure_50.SWALLOW_VOLUME_ONLY_SPEAKING_EVENTS, true);
    }
    const result = setAttenuation.setMinimumJitterBufferLevel(80);
    if (setAttenuation.context === constants3.STREAM) {
      const result1 = setAttenuation.setSoundshareDiscardRearChannels(callback9(closure_92));
    }
    const obj5 = callback2(closure_3[53]);
    if (obj6.isWindows()) {
      setAttenuation.setExperimentFlag(closure_50.SIGNAL_AV1_ENCODE, true);
      setAttenuation.setExperimentFlag(closure_50.SIGNAL_AV1_DECODE, true);
      setAttenuation.setExperimentFlag(closure_50.SIGNAL_AV1_HARDWARE_DECODE, true);
    } else {
      if (obj7.isMac()) {
        setAttenuation.setExperimentFlag(closure_50.SIGNAL_AV1_DECODE, true);
        setAttenuation.setExperimentFlag(closure_50.SIGNAL_AV1_HARDWARE_DECODE, true);
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
          satisfiesResult = callback2(closure_3[54]).satisfies(release, closure_44);
          const obj12 = callback2(closure_3[54]);
        }
        setAttenuation.setExperimentFlag(closure_50.H265_DISABLE_ENCODE, !satisfiesResult);
      } else {
        if (obj8.isLinux()) {
          let tmp33Result = tmp33(tmp34[55]);
          if (tmp33Result.getAV1EncodeExperimentLinuxConfig("MediaEngineStore").enabled) {
            setAttenuation.setExperimentFlag(closure_50.SIGNAL_AV1_ENCODE, true);
          }
          setAttenuation.setExperimentFlag(closure_50.SIGNAL_AV1_DECODE, true);
        } else {
          tmp33Result = tmp33(tmp34[29]);
          let isIOSResult = tmp33Result.isIOS();
          if (!isIOSResult) {
            isIOSResult = setAttenuation(closure_3[29]).isAndroid();
            const obj10 = setAttenuation(closure_3[29]);
          }
          if (isIOSResult) {
            setAttenuation.setExperimentFlag(closure_50.SIGNAL_AV1_DECODE, true);
            setAttenuation.setExperimentFlag(closure_50.SIGNAL_AV1_HARDWARE_DECODE, true);
          }
        }
        const obj8 = setAttenuation(closure_3[29]);
      }
      const obj7 = setAttenuation(closure_3[29]);
    }
    const obj6 = setAttenuation(closure_3[29]);
    if (obj13.isWeb()) {
      obj = { location: "MediaEngineStore" };
      setAttenuation.setExperimentFlag(closure_50.BROWSER_HEVC, callback2(closure_3[56]).getConfig(obj).enabled);
      const obj14 = callback2(closure_3[56]);
    }
    const obj13 = setAttenuation(closure_3[29]);
    let enabled = setAttenuation(closure_3[29]).isWindows();
    if (enabled) {
      enabled = null != closure_134;
      const obj17 = closure_134;
    }
    if (enabled) {
      enabled = obj17.startsWith("AMD");
    }
    if (enabled) {
      enabled = setAttenuation(closure_3[57]).getWmfGpuEncode("MediaEngineStore").enabled;
      const obj18 = setAttenuation(closure_3[57]);
    }
    if (enabled) {
      setAttenuation.setExperimentFlag(closure_50.WMF_GPU_ENCODE, true);
    }
    const obj16 = setAttenuation(closure_3[29]);
    let enabled2 = setAttenuation(closure_3[29]).isWindows();
    if (enabled2) {
      enabled2 = null != closure_134;
      const obj20 = closure_134;
    }
    if (enabled2) {
      enabled2 = obj20.startsWith("Intel");
    }
    if (enabled2) {
      enabled2 = true === closure_135;
    }
    if (enabled2) {
      enabled2 = 1 === closure_136;
    }
    if (enabled2) {
      enabled2 = setAttenuation(closure_3[58]).getWmfGpuEncodeIntel("MediaEngineStore").enabled;
      const obj21 = setAttenuation(closure_3[58]);
    }
    if (enabled2) {
      setAttenuation.setExperimentFlag(closure_50.WMF_GPU_ENCODE, true);
      setAttenuation.setExperimentFlag(closure_50.INTEL_GPU_DISABLE, true);
    }
    const obj19 = setAttenuation(closure_3[29]);
    let enabled3 = setAttenuation(closure_3[29]).isWindows();
    if (enabled3) {
      enabled3 = null != closure_134;
      const obj23 = closure_134;
    }
    if (enabled3) {
      enabled3 = obj23.startsWith("Intel");
    }
    if (enabled3) {
      enabled3 = true === closure_135;
    }
    if (enabled3) {
      enabled3 = 1 === closure_136;
    }
    if (enabled3) {
      enabled3 = setAttenuation(closure_3[59]).getWmfCpuEncodeIntel("MediaEngineStore").enabled;
      const obj24 = setAttenuation(closure_3[59]);
    }
    if (enabled3) {
      setAttenuation.setExperimentFlag(closure_50.INTEL_GPU_DISABLE, true);
    }
    const obj22 = setAttenuation(closure_3[29]);
    let enabled4 = setAttenuation(closure_3[29]).isWindows();
    if (enabled4) {
      enabled4 = null != closure_134;
      const obj26 = closure_134;
    }
    if (enabled4) {
      enabled4 = obj26.startsWith("Qualcomm");
    }
    if (enabled4) {
      enabled4 = setAttenuation(closure_3[57]).getWmfGpuEncode("MediaEngineStore").enabled;
      const obj27 = setAttenuation(closure_3[57]);
    }
    if (enabled4) {
      setAttenuation.setExperimentFlag(closure_50.WMF_GPU_ENCODE, true);
    }
    result2 = store3.setHasFullbandPerformance(callback2(closure_3[60])());
    result2 = setAttenuation.setRemoteAudioHistory(1000);
    if (callback2(closure_3[61])(closure_74)) {
      result2 = closure_59;
      result2 = setAttenuation.setClipsKeyFrameInterval(closure_59);
    }
    result2 = callback5(setAttenuation.context);
    result2 = setAttenuation.setPostponeDecodeLevel(100);
    const keys = Object.keys(result2.localMutes);
    for (let num10 = 0; num10 < keys.length; num10 = num10 + 1) {
      result2 = keys[num10];
      result2 = store;
      if (result2 !== store.getId()) {
        result2 = setAttenuation.setLocalMute(result2, result2.localMutes[result2]);
      }
    }
    const keys1 = Object.keys(result2.localVolumes);
    for (let num11 = 0; num11 < keys1.length; num11 = num11 + 1) {
      result2 = keys1[num11];
      result2 = store;
      if (result2 !== store.getId()) {
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
    result2 = setAttenuation.on(setAttenuation(closure_3[30]).BaseConnectionEvent.Speaking, (userId, speakingFlags, arg2, voiceDb) => {
      let obj = callback(closure_3[49]);
      obj = { type: "SPEAKING", context: userId.context, userId, speakingFlags, voiceDb };
      obj.dispatch(obj);
    });
    if (setAttenuation.context === constants3.DEFAULT) {
      let closure_103 = false;
      result2 = setAttenuation;
      result2 = closure_3;
      result2 = setAttenuation.on(setAttenuation(closure_3[30]).BaseConnectionEvent.SpeakingWhileMuted, () => {
        let closure_103 = true;
        if (!closure_103) {
          closure_74.emitChange();
        }
        closure_104.start(closure_66, () => {
          let closure_103 = false;
          closure_74.emitChange();
        });
      });
    }
    result2 = setAttenuation.on(setAttenuation(closure_3[30]).BaseConnectionEvent.DesktopSourceEnd, (endReason, errorCode) => {
      let obj = callback(closure_3[49]);
      obj = { type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE", settings: obj, endReason, errorCode };
      obj = { context: endReason.context };
      obj.dispatch(obj);
    });
    result2 = setAttenuation.on(setAttenuation(closure_3[30]).BaseConnectionEvent.InteractionRequired, (required) => {
      let obj = callback(closure_3[49]);
      obj = { type: "MEDIA_ENGINE_INTERACTION_REQUIRED", required };
      obj.dispatch(obj);
    });
    result2 = setAttenuation.on(setAttenuation(closure_3[30]).BaseConnectionEvent.VideoHookInitialize, (backend, format, framebuffer_format, sample_count, success, reinitialization) => {
      let desktopSource;
      if (null != closure_79) {
        desktopSource = closure_79.desktopSource;
      }
      if (null != desktopSource) {
        let obj = callback(closure_3[48]);
        obj = { backend, format, framebuffer_format, sample_count, success, reinitialization };
        let desktopSource1;
        if (null != closure_79) {
          desktopSource1 = closure_79.desktopSource;
        }
        const merged = Object.assign(callback(closure_3[62])(desktopSource1));
        obj.track(constants.VIDEOHOOK_INITIALIZED, obj);
        const tmp15 = callback(closure_3[62]);
      }
    });
    result2 = setAttenuation.on(setAttenuation(closure_3[30]).BaseConnectionEvent.NoiseCancellationError, closure_163);
    result2 = setAttenuation.on(setAttenuation(closure_3[30]).BaseConnectionEvent.VoiceActivityDetectorError, closure_163);
    result2 = setAttenuation.on(setAttenuation(closure_3[30]).BaseConnectionEvent.SdpError, (operation, error, type, sdp) => {
      let obj = callback(closure_3[48]);
      obj = { operation, error, type, sdp };
      obj.track(constants.SDP_ERROR, obj);
    });
    result2 = setAttenuation.on(setAttenuation(closure_3[30]).BaseConnectionEvent.VideoState, (videoState) => {
      let obj = callback(closure_3[49]);
      obj = { type: "MEDIA_ENGINE_VIDEO_STATE_CHANGED", videoState, context: videoState.context };
      obj.dispatch(obj);
    });
    result2 = setAttenuation.setBitRate(bitrate.bitrate);
    result2 = setAttenuation.applyVideoQualityMode(mode.mode);
    const obj25 = setAttenuation(closure_3[29]);
    result2 = setAttenuation(closure_3[29]).isWindows();
    if (result2) {
      result2 = store3;
      result2 = constants2;
      result2 = store3.supports(constants2.ASYNC_VIDEO_INPUT_DEVICE_INIT);
    }
    if (result2) {
      result2 = store3;
      result2 = store3.setAsyncVideoInputDeviceInit(true);
    }
  });
  result.on(arg1(dependencyMap[30]).MediaEngineEvent.DeviceChange, (inputDevices, outputDevices, videoDevices) => {
    closure_94.stop();
    let obj = callback2(closure_3[49]);
    obj = { type: "MEDIA_ENGINE_DEVICES", inputDevices, outputDevices, videoDevices };
    obj.dispatch(obj);
  });
  result.on(arg1(dependencyMap[30]).MediaEngineEvent.VolumeChange, (inputVolume, outputVolume) => {
    let obj = callback2(closure_3[49]);
    obj = { type: "AUDIO_VOLUME_CHANGE", inputVolume, outputVolume };
    obj.dispatch(obj);
  });
  result.on(arg1(dependencyMap[30]).MediaEngineEvent.DesktopSourceEnd, (endReason, errorCode) => {
    let obj = callback2(closure_3[49]);
    obj = { endReason, errorCode };
    obj.dispatch(obj);
  });
  result.on(arg1(dependencyMap[30]).MediaEngineEvent.AudioPermission, (granted) => {
    let closure_128 = true;
    let obj = callback2(closure_3[49]);
    obj = { granted };
    obj.dispatch(obj);
  });
  result.on(arg1(dependencyMap[30]).MediaEngineEvent.VideoPermission, (granted) => {
    let obj = callback2(closure_3[49]);
    obj = { granted };
    obj.dispatch(obj);
  });
  result.on(arg1(dependencyMap[30]).MediaEngineEvent.WatchdogTimeout, callback4(async () => {
    if ("canary" === window.GLOBAL_ENV.RELEASE_CHANNEL) {
      let obj = callback2(closure_3[63]);
      obj = {};
      obj = { message: "Voice Watchdog Timeout" };
      obj.message = obj;
      yield obj.submitLiveCrashReport(obj);
    }
    while (true) {
      let tmp6 = tmp;
      let tmp7 = null;
      let num2 = 200;
      let tmp5 = closure_62;
      if (null == tmp) {
        break;
      } else {
        num2 = tmp;
        // break
      }
      let _HermesInternal = HermesInternal;
      let str2 = "Watchdog timeout, report submission status: ";
      let warnResult = closure_62.warn("Watchdog timeout, report submission status: " + num2);
      let tmp9 = callback2;
      let tmp10 = closure_3;
      let num3 = 64;
      let tmp11 = null != callback2(closure_3[64]).processUtils.setCrashReason;
      let tmp12 = callback2;
      let tmp13 = closure_3;
      let num4 = 48;
      let obj4 = callback2(closure_3[48]);
      let tmp14 = closure_23;
      let obj1 = { minidump_submission_error: tmp };
      let tmp15 = tmp11;
      obj1.will_restart = tmp11;
      let obj2 = {};
      let flag = true;
      obj2.flush = true;
      let tmp16 = yield obj4.track(closure_23.VOICE_WATCHDOG_TIMEOUT, obj1, obj2);
      while (true) {
        if (!tmp11) {
          break;
        } else {
          let tmp17 = closure_62;
          let str3 = "Relaunching app due to voice watchdog timeout";
          let infoResult = closure_62.info("Relaunching app due to voice watchdog timeout");
          let tmp19 = callback2;
          let tmp20 = closure_3;
          let processUtils = callback2(closure_3[64]).processUtils;
          let str4 = "voice-watchdog-timeout";
          let tmp21 = yield processUtils.setCrashReason("voice-watchdog-timeout");
          let tmp22 = callback;
          let tmp23 = closure_3;
          let num5 = 65;
          let Storage = callback(closure_3[65]).Storage;
          let _Date = Date;
          let str5 = Date.now();
          let str6 = "discord_watchdog_restart_timestamp";
          let result = Storage.set("discord_watchdog_restart_timestamp", str5.toString());
          let tmp25 = callback2;
          let app = callback2(closure_3[64]).app;
          let relaunchResult = app.relaunch();
          // break
        }
      }
    }
  }));
  result.on(arg1(dependencyMap[30]).MediaEngineEvent.VideoInputInitialized, (description) => {
    let obj = callback2(closure_3[48]);
    obj = { device_name: description.description.name };
    let rounded = null;
    if (!description.initializationTimerExpired) {
      const _Math = Math;
      rounded = Math.round(description.timeToFirstFrame * callback2(closure_3[28]).Millis.SECOND);
    }
    obj.time_to_first_frame_ms = rounded;
    ({ initializationTimerExpired: obj2.timed_out, entropy: obj2.activity } = description);
    obj.media_session_id = store2.getMediaSessionId();
    obj.rtc_connection_id = store2.getRTCConnectionId();
    obj.track(constants.VIDEO_INPUT_INITIALIZED, obj);
  });
  result.on(arg1(dependencyMap[30]).MediaEngineEvent.AudioInputInitialized, (description) => {
    let obj = callback2(closure_3[48]);
    obj = { device_name: description.description.name, time_to_initialized_ms: Math.round(description.timeToInitialized * callback2(closure_3[28]).Millis.SECOND), rtc_connection_id: store2.getRTCConnectionId() };
    obj.track(constants.AUDIO_INPUT_INITIALIZED, obj);
  });
  result.on(arg1(dependencyMap[30]).MediaEngineEvent.ClipsRecordingRestartNeeded, () => {
    callback2(closure_3[49]).dispatch({ type: "CLIPS_RESTART" });
  });
  result.on(arg1(dependencyMap[30]).MediaEngineEvent.ClipsInitFailure, (arg0, arg1) => {
    let closure_2 = closure_87 < 3;
    closure_87 = closure_87 + 1;
    arg1(closure_3[49]).wait(() => {
      let obj = arg1(closure_3[49]);
      obj = { type: "CLIPS_INIT_FAILURE", errMsg: arg0, applicationName: arg1 };
      obj.dispatch(obj);
      if (closure_2) {
        obj = { type: "CLIPS_RESTART" };
        arg1(closure_3[49]).dispatch(obj);
        const obj3 = arg1(closure_3[49]);
      } else {
        const _HermesInternal = HermesInternal;
        closure_62.warn("Clips init failure budget exhausted (" + closure_87 + " consecutive unhealthy attempts); skipping auto-restart. A settings flip / game change / app restart will retry.");
      }
    });
  });
  result.on(arg1(dependencyMap[30]).MediaEngineEvent.ClipsRecordingHealthy, () => {
    if (0 !== closure_87) {
      const _HermesInternal = HermesInternal;
      closure_62.info("Clips bridge reported healthy; resetting restart budget (was " + closure_87 + ").");
      closure_87 = 0;
    }
  });
  result.on(arg1(dependencyMap[30]).MediaEngineEvent.ClipsRecordingReadyChanged, (arg0) => {
    if (arg0 !== arg0) {
      const _HermesInternal = HermesInternal;
      closure_62.info("Clips recorder ready changed: " + arg0);
    }
  });
  result.on(arg1(dependencyMap[30]).MediaEngineEvent.ClipsBridgeIdleShutdown, () => {
    closure_62.info("Clips bridge idle shutdown");
  });
  result.on(arg1(dependencyMap[30]).MediaEngineEvent.ClipsRecordingEnded, (arg0, soundshareId) => {
    let id;
    if (null != desktopSource2) {
      const desktopSource = desktopSource2.desktopSource;
      if (null != desktopSource) {
        id = desktopSource.id;
      }
    }
    if (id === arg0) {
      let tmp2 = null != soundshareId;
      if (tmp2) {
        soundshareId = undefined;
        if (null != desktopSource) {
          let desktopSource2 = desktopSource.desktopSource;
          if (null != desktopSource2) {
            soundshareId = desktopSource2.soundshareId;
          }
        }
        tmp2 = soundshareId !== soundshareId;
      }
      if (tmp2) {
        const result = callback3(closure_3[40]).cancelAttachToProcess(soundshareId);
        const obj = callback3(closure_3[40]);
      }
      desktopSource2 = null;
    }
  });
  result.on(arg1(dependencyMap[30]).MediaEngineEvent.NativeScreenSharePickerUpdate, (existing, content) => {
    let obj = callback2(closure_3[49]);
    obj = { type: "NATIVE_SCREEN_SHARE_PICKER_UPDATE", existing, content };
    obj.dispatch(obj);
  });
  result.on(arg1(dependencyMap[30]).MediaEngineEvent.NativeScreenSharePickerCancel, (existing) => {
    let obj = callback2(closure_3[49]);
    obj = { type: "NATIVE_SCREEN_SHARE_PICKER_CANCEL", existing };
    obj.dispatch(obj);
  });
  result.on(arg1(dependencyMap[30]).MediaEngineEvent.NativeScreenSharePickerError, (error) => {
    let obj = callback2(closure_3[49]);
    obj = { type: "NATIVE_SCREEN_SHARE_PICKER_ERROR", error };
    obj.dispatch(obj);
  });
  result.on(arg1(dependencyMap[30]).MediaEngineEvent.AudioDeviceModuleError, (audio_device_module, code, device_name) => {
    let obj = callback2(closure_3[48]);
    obj = { audio_device_module, code, device_name };
    obj.track(constants.AUDIO_DEVICE_MODULE_ERROR, obj);
  });
  result.on(arg1(dependencyMap[30]).MediaEngineEvent.VideoCodecError, (mode) => {
    if ("encode" === mode.mode) {
      let VIDEO_DECODE_ERROR = callback(closure_3[47]).AVError.VIDEO_ENCODE_ERROR;
    } else {
      VIDEO_DECODE_ERROR = callback(closure_3[47]).AVError.VIDEO_DECODE_ERROR;
    }
    let obj = { videoCodec: mode.codecStandard, errorMessage: mode.message };
    if (VIDEO_DECODE_ERROR === callback(closure_3[47]).AVError.VIDEO_ENCODE_ERROR) {
      obj = { type: VIDEO_DECODE_ERROR };
      const merged = Object.assign(obj);
      obj["videoEncoder"] = mode.implName;
    } else {
      obj = { type: VIDEO_DECODE_ERROR };
      const merged1 = Object.assign(obj);
      obj["videoDecoder"] = mode.implName;
    }
    callback(closure_3[47]).reportAVError(obj);
  });
  result.on(arg1(dependencyMap[30]).MediaEngineEvent.ConnectionStats, (arr) => {
    let obj = callback2(closure_3[49]);
    obj = {
      type: "MEDIA_ENGINE_CONNECTION_STATS",
      connectionStats: arr.map((connection) => {
        connection = connection.connection;
        let closure_72 = tmp + 1;
        return { stats: connection.stats, mediaEngineConnectionId: connection.mediaEngineConnectionId, version: +closure_72, context: connection.context };
      })
    };
    obj.dispatch(obj);
  });
  result.on(arg1(dependencyMap[30]).MediaEngineEvent.VoiceProcessingError, handleVoiceProcessingError);
  result.on(arg1(dependencyMap[30]).MediaEngineEvent.VideoFilterError, handleVideoFilterError);
  result.on(arg1(dependencyMap[30]).MediaEngineEvent.VoiceQueueMetrics, (arg0) => {
    const tmp = callback12(arg0);
    if (null !== tmp) {
      callback2(closure_3[48]).track(constants.VOICE_QUEUE_METRICS, tmp);
      const obj = callback2(closure_3[48]);
    }
  });
  const result = result.setOnVideoContainerResized((arg0, arg1, arg2) => {
    arg1(closure_3[49]).wait(() => {
      let obj = arg1(closure_3[49]);
      obj = { type: "VIDEO_SIZE_UPDATE", streamId: arg0, dimensions: obj };
      obj = { width: arg1, height: arg2 };
      return obj.dispatch(obj);
    });
  });
  function setGamescopeVaapiEnabled() {
    return callback11(...arguments);
  }();
  navigation.reset();
  getSystemAnalyticsInfo().then((arg0) => {
    if (null != arg0) {
      ({ gpu_brand: closure_134, has_intel_hybrid_igpu: closure_135, gpu_count: closure_136 } = arg0);
    }
  });
  result.on(arg1(dependencyMap[30]).MediaEngineEvent.SystemMicrophoneModeChange, (arg0) => {
    store3.eachConnection(closure_168);
    closure_74.emitChange();
  });
}
function supportsWindowsGraphicsCapture() {
  let isWindowsResult = arg1(dependencyMap[29]).isWindows();
  if (isWindowsResult) {
    let release;
    if (null != importDefault(dependencyMap[64])) {
      release = importDefault(dependencyMap[64]).os.release;
    }
    isWindowsResult = importDefault(dependencyMap[54]).satisfies(release, closure_34);
    const obj2 = importDefault(dependencyMap[54]);
  }
  return isWindowsResult;
}
function supportsScreenCaptureKit() {
  let isMacResult = arg1(dependencyMap[29]).isMac();
  if (isMacResult) {
    isMacResult = result.supports(Features.SCREEN_CAPTURE_KIT);
  }
  if (isMacResult) {
    let release;
    if (null != importDefault(dependencyMap[64])) {
      release = importDefault(dependencyMap[64]).os.release;
    }
    isMacResult = importDefault(dependencyMap[54]).satisfies(release, closure_29);
    const obj2 = importDefault(dependencyMap[54]);
  }
  return isMacResult;
}
function supportsAutomaticAudioSubsystem() {
  let isWindowsResult = arg1(dependencyMap[29]).isWindows();
  if (isWindowsResult) {
    isWindowsResult = result.supports(Features.AUTOMATIC_AUDIO_SUBSYSTEM);
  }
  if (isWindowsResult) {
    isWindowsResult = result.supports(Features.AUDIO_SUBSYSTEM_DEFERRED_SWITCH);
  }
  return isWindowsResult;
}
function isReadyToMigrateToSingleAdmOffering() {
  return result.supports(Features.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
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
    const Storage = context(dependencyMap[65]).Storage;
    const result = Storage.set(closure_63, closure_82);
  }
  return tmp2;
}
function applySettings() {
  const tmp = _getSettings0();
  setInputDevice(tmp.inputDeviceId);
  result.setAudioOutputDevice(tmp.outputDeviceId);
  updateVideo();
  result.setInputVolume(tmp.inputVolume);
  const setOutputVolume = result.setOutputVolume;
  if (obj.getConfig({ location: "MediaEngineStore.applySettings" }).audioOutputPresent) {
    setOutputVolume(tmp.outputVolume);
  } else {
    setOutputVolume(closure_45);
  }
  result.setAecDump(tmp.aecDumpEnabled);
  const result = result.setSidechainCompression(tmp.sidechainCompression);
  const result1 = result.setSidechainCompressionStrength(tmp.sidechainCompressionStrength);
  const result2 = result.setAudioInputBypassSystemProcessing(tmp.bypassSystemInputProcessing);
  const obj = importDefault(dependencyMap[67]);
  if (obj2.isLinux()) {
    let tmp17 = null == importDefault(dependencyMap[68]);
    if (!tmp17) {
      tmp17 = null == importDefault(dependencyMap[68]).setOpenH264Enabled;
    }
    if (!tmp17) {
      importDefault(dependencyMap[68]).setOpenH264Enabled(tmp.openH264Enabled);
      const obj3 = importDefault(dependencyMap[68]);
    }
  }
  result.setAudioMixerOptions(tmp.audioMixerSettings);
}
function tryEnable() {
  if (!closure_84) {
    result.enable().then(() => callback(closure_3[49]).dispatch({ pacsize: true, channels: "/assets/images/native", rate: 36 }));
    const enableResult = result.enable();
  }
}
function makeDisabledDevice(name) {
  return { id: DEFAULT_DEVICE_ID, index: 0, name, disabled: true, guid: undefined, hardwareId: undefined, containerId: undefined };
}
function hasHardwareMatch(type, arr) {
  arr = type;
  return null != arr.find((containerId) => {
    let tmp = null != containerId.containerId;
    if (tmp) {
      tmp = containerId.containerId === containerId.containerId;
    }
    if (!tmp) {
      let tmp3 = null != containerId.hardwareId;
      if (tmp3) {
        tmp3 = containerId.hardwareId === containerId.hardwareId;
      }
      tmp = tmp3;
    }
    if (!tmp) {
      let tmp5 = null != containerId.originalId;
      if (tmp5) {
        tmp5 = containerId.originalId === containerId.originalId;
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
      const items = [-642821350, -1028080039, -1353420191];
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
          const obj = importDefault(dependencyMap[38])(type.hardwareId);
          if (obj.startsWith("BTHENUM") !== true) {
            const items1 = [false, false];
            const macosTransportType2 = type.macosTransportType;
            let tmp6 = str2;
            if (null != macosTransportType2) {
              tmp6 = macosTransportType2;
            }
            if (items1.includes(tmp6) !== true) {
              const items2 = [true, true];
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
  arg1 = videoDevices;
  if (0 === videoDevices[{ "Null": "setMediaViewerSources", "Null": "Boolean", "Null": "isArray" }[arg1.deviceType]].length) {
    const tmp5 = makeDisabledDevice(tmp);
    const obj = {};
    obj[tmp5.id] = tmp5;
    return obj;
  } else {
    const mapped = importDefault(dependencyMap[38])(arr).map((id) => ({ id: id.id, index: id.index, name: id.name, disabled: false, facing: id.facing, guid: id.originalId, hardwareId: id.hardwareId, containerId: id.containerId, effects: id.effects, formFactor: callback(id, id), windowsDeviceService: id.windowsDeviceService }));
    const arr2 = importDefault(dependencyMap[38])(arr);
    return mapped.keyBy("id").value();
  }
}
function getDeviceId(closure_91, id) {
  let firstResult = closure_91[id];
  if (null == firstResult) {
    firstResult = closure_91[closure_47];
  }
  if (null == firstResult) {
    const values = importDefault(dependencyMap[38])(closure_91).values();
    firstResult = values.first();
    const obj = importDefault(dependencyMap[38])(closure_91);
  }
  if (null != firstResult) {
    id = firstResult.id;
  }
  return id;
}
function maybeProbeAudioEffects(inputDeviceId) {
  let obj = arg1(dependencyMap[29]);
  if (obj.isWindows()) {
    const obj2 = importDefault(dependencyMap[69]);
    obj = { location: "MediaEngineStore.setInputDevice" };
    if (obj2.getConfig(obj).probeAudioEffects) {
      let guid;
      if (null != obj2[inputDeviceId]) {
        guid = tmp4.guid;
      }
      if (null != guid) {
        importDefault(dependencyMap[70])(tmp4.guid, inputDeviceId, result);
      }
    }
  }
}
function setInputDevice(inputDeviceId) {
  result.setAudioInputDevice(inputDeviceId);
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
  const intl = arg1(dependencyMap[71]).intl;
  obj.defaultName = intl.string(arg1(dependencyMap[71]).t.xlUg0v);
  let closure_92 = convertDevices(videoDevices, obj);
  if (!obj2.isEqual(closure_92, closure_92)) {
    result.setAudioOutputDevice(getDeviceId(closure_92, _getSettings0().outputDeviceId));
    result.eachConnection(updateConnectionVoiceProcessing);
    const tmp13 = hasHapticsOverAudioOutputDevices(closure_92);
    if (tmp11 !== tmp13) {
      function updateConnectionsDiscardRearChannels(arg0) {
        closure_77.eachConnection((context) => {
          if (context.context === constants.STREAM) {
            const result = context.setSoundshareDiscardRearChannels(context);
          }
        });
      }(tmp13);
    }
    const tmp11 = hasHapticsOverAudioOutputDevices(closure_92);
  }
}
function applyRemoteSettings(arg0) {
  let length;
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  const arg1 = flag;
  let importDefault;
  let closure_2;
  let audioContextSettings = settings.settings.audioContextSettings;
  if (null == audioContextSettings) {
    const obj = { user: {}, stream: {} };
    audioContextSettings = obj;
  }
  importDefault = audioContextSettings;
  function _loop() {
    let done;
    let length;
    if (closure_2 === constants.USER) {
      let STREAM = constants2.DEFAULT;
    } else {
      STREAM = constants2.STREAM;
    }
    let closure_1 = STREAM === constants2.STREAM ? closure_46 : closure_45;
    let obj = closure_1[closure_2];
    if (null == obj) {
      obj = {};
    }
    closure_2 = obj;
    const tmp3 = callback2(STREAM);
    const localMutes = tmp3.localMutes;
    const localVolumes = tmp3.localVolumes;
    function _loop2(STREAM, muted) {
      let closure_1 = muted;
      if (null != obj.getPendingAudioSettings(STREAM, STREAM)) {
        return 1;
      } else {
        if (muted.muted) {
          tmp[STREAM] = true;
        } else {
          delete r7[r6];
        }
        if (muted.volume !== closure_1) {
          localVolumes[STREAM] = muted.volume;
        } else {
          delete r5[r6];
        }
        closure_77.eachConnection((setLocalVolume, self) => {
          setLocalVolume.setLocalVolume(setLocalVolume, self.volume);
          setLocalVolume.setLocalMute(setLocalVolume, self.muted);
        }, STREAM);
      }
      const obj = STREAM(localMutes[73]);
    }
    const entries = Object.entries(obj);
    let num = 0;
    if (0 < entries.length) {
      do {
        let tmp4 = closure_9;
        let tmp5 = closure_9(entries[num], 2);
        let _loop2Result = _loop2(tmp5[0], tmp5[1]);
        num = num + 1;
        length = entries.length;
      } while (num < length);
    }
    if (STREAM) {
      const _Set = Set;
      const _Object = Object;
      function _loop3(value) {
        const STREAM = value;
        if (null != obj[value]) {
          return 1;
        } else {
          delete r2[r3];
          delete r2[r3];
          closure_77.eachConnection((setLocalVolume) => {
            setLocalVolume.setLocalVolume(setLocalVolume, closure_1);
            setLocalVolume.setLocalMute(setLocalVolume, false);
          }, STREAM);
        }
      }
      const items = [];
      const _Object2 = Object;
      let arraySpreadResult = HermesBuiltin.arraySpread(Object.keys(localMutes), 0);
      arraySpreadResult = HermesBuiltin.arraySpread(Object.keys(localVolumes), arraySpreadResult);
      const set = new Set(items);
      const tmp17 = callback(set);
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
    callback3({ localMutes, localVolumes }, STREAM);
  }
  const keys = Object.keys(audioContextSettings);
  let num = 0;
  if (0 < keys.length) {
    do {
      closure_2 = keys[num];
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
        audioPid = importDefault(dependencyMap[63]).getAudioPid(pidFromDesktopSource);
        const obj2 = importDefault(dependencyMap[63]);
      }
      let str2 = "";
      if (null != audioPid) {
        str2 = importDefault(dependencyMap[63]).generateSessionFromPid(audioPid);
        const obj3 = importDefault(dependencyMap[63]);
      }
      let obj = { soundshareId: audioPid, soundshareSession: str2 };
    } else {
      importDefaultResult.info("Error: trying to get soundshare id before MediaEngineStore is instantiated.");
      obj = { 0: "form__label", 9223372036854775807: "English, US" };
    }
    ({ soundshareId, soundshareSession } = obj);
    if (null != soundshareId) {
      function tryHookSoundshare(soundshareId, soundshareSession) {
        let obj = soundshareId(closure_3[29]);
        let isWindowsResult = obj.isWindows();
        if (isWindowsResult) {
          isWindowsResult = soundshareId > 1;
        }
        if (isWindowsResult) {
          obj = { soundshare_session: soundshareSession };
          const obj2 = callback(closure_3[40]);
          callback(closure_3[40]).attachToProcess(soundshareId, obj).then((arg0) => {
            let result = null == arg0;
            if (!result) {
              result = closure_13.shouldContinueWithoutElevatedProcessForPID(arg0);
            }
            if (!result) {
              callback(closure_3[49]).wait(() => {
                let obj = callback(closure_3[49]);
                obj = { type: "MEDIA_ENGINE_SOUNDSHARE_FAILED", errorMessage: arg0 };
                obj.dispatch(obj);
              });
              const obj = callback(closure_3[49]);
            }
          });
          const attachToProcessResult = callback(closure_3[40]).attachToProcess(soundshareId, obj);
        }
      }(soundshareId, soundshareSession);
      obj = { soundshareId, soundshareSession };
      return obj;
    }
  }
  let videoHook = null != pidFromDesktopSource;
  if (videoHook) {
    videoHook = _getSettings0().videoHook;
  }
  if (videoHook) {
    importAll(dependencyMap[40]).attachToProcess(pidFromDesktopSource);
    const obj5 = importAll(dependencyMap[40]);
  }
  return { 0: "o", 9223372036854775807: "o" };
}
function resetProbingState() {
  const DEFAULT = MediaEngineContextTypes.DEFAULT;
  const videoToggleStateMap = _getSettings0(DEFAULT).videoToggleStateMap;
  const entries = Object.entries(videoToggleStateMap);
  for (let num = 0; num < entries.length; num = num + 1) {
    let tmp = callback3;
    let tmp2 = callback3(entries[num], 2);
    let first = tmp2[0];
    let tmp4 = constants5;
    if (tmp2[1] === constants5.AUTO_PROBING) {
      delete r1[r3];
    }
  }
  mergeSettings({ videoToggleStateMap }, DEFAULT, false);
}
function trackVoiceProcessing(location) {
  const tmp = _getSettings0();
  const audioSubsystem = result.getAudioSubsystem();
  const audioLayer = result.getAudioLayer();
  let name;
  if (null != obj2[closure_182(undefined, closure_91, tmp.inputDeviceId)]) {
    name = tmp4.name;
  }
  const tmp6 = importDefault(dependencyMap[50]);
  let obj = importDefault(dependencyMap[48]);
  obj = { echo_cancellation: tmp.echoCancellation, noise_cancellation: tmp.noiseCancellation, noise_suppression: tmp.noiseSuppression, automatic_gain_control: tmp.automaticGainControl, location, bypass_system_input_processing: tmp.bypassSystemInputProcessing, audio_subsystem: audioSubsystem, audio_layer: audioLayer, input_device: name, effective_noise_cancellation: importDefault(dependencyMap[50])(tmp.noiseCancellation, tmp20.getSystemMicrophoneMode()) };
  obj.track(constants.VOICE_PROCESSING, obj);
}
function setLoopback() {
  const tmp = _getSettings0();
  const inputDeviceId = tmp.inputDeviceId;
  const tmp3 = closure_18.hasEchoCancellation(inputDeviceId) || tmp.echoCancellation;
  const tmp4 = closure_18.hasNoiseSuppression(inputDeviceId) || tmp.noiseSuppression;
  const tmp5 = getAutomaticGainControlConfig;
  const tmp6 = closure_18.hasAutomaticGainControl(inputDeviceId) || tmp.automaticGainControl;
  result.setLoopback(set2.size > 0, { echoCancellation: tmp3, echoCancellationPreEcho: set2.size <= 0, noiseSuppression: tmp4, automaticGainControlConfig: tmp5(closure_18.hasAutomaticGainControl(inputDeviceId) || tmp.automaticGainControl), noiseCancellation: tmp.noiseCancellation });
}
async function _setGamescopeVaapiEnabled() {
  if (closure_77.supports(constants.VAAPI)) {
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
        let closure_142 = true;
        let closure_141 = closure_77.supports(constants.GAMESCOPE_CAPTURE);
      }
    }
  }
}
function isKrispAvailable() {
  return !closure_115;
}
async function _setupKrispNativeModule() {
  yield callback2(closure_3[68]).ensureModule("discord_krisp");
  const obj = callback2(closure_3[68]);
  const requireModuleResult = callback2(closure_3[68]).requireModule("discord_krisp");
  let closure_114 = true;
  let sdkVersion;
  if (null != requireModuleResult.getSdkVersion) {
    sdkVersion = obj3.getSdkVersion();
  }
  let suppressionLevel;
  if (null != requireModuleResult.getSuppressionLevel) {
    suppressionLevel = obj3.getSuppressionLevel();
  }
  let num = 100;
  if (null != suppressionLevel) {
    num = suppressionLevel;
  }
  const obj2 = callback2(closure_3[68]);
  if (obj4.isWindows()) {
    if (null != obj3.setMklZenOverrideEnabled) {
      const result = obj3.setMklZenOverrideEnabled(callback(closure_3[75]).getMklZenOverrideExperimentConfig("setupKrispNativeModule").enabled);
      const obj5 = callback(closure_3[75]);
    }
  }
  if (null != requireModuleResult.getNcModels) {
    const ncModels = obj3.getNcModels();
    ncModels.then((arg0) => {
      closure_74.emitChange();
    });
  }
  closure_74.emitChange();
  const obj4 = callback(closure_3[29]);
  yield callback2(closure_3[68]).ensureModule("discord_voice");
  const obj6 = callback2(closure_3[68]);
  const requireModuleResult1 = callback2(closure_3[68]).requireModule("discord_voice");
  if (null != requireModuleResult1.setupKrispPath) {
    requireModuleResult1.setupKrispPath();
  }
  let closure_113 = false;
}
function maybeSetupKrispModule() {
  let obj = arg1(dependencyMap[29]);
  let isWindowsResult = obj.isWindows();
  if (!isWindowsResult) {
    isWindowsResult = arg1(dependencyMap[29]).isLinux();
    const obj2 = arg1(dependencyMap[29]);
  }
  if (!isWindowsResult) {
    isWindowsResult = arg1(dependencyMap[29]).isMac();
    const obj3 = arg1(dependencyMap[29]);
  }
  if (isWindowsResult) {
    if (!closure_113) {
      if (!closure_114) {
        closure_113 = true;
        function setupKrispNativeModule() {
          return callback(...arguments);
        }();
      }
    }
  }
  if (obj4.isWeb()) {
    if (result.supports(Features.NOISE_CANCELLATION)) {
      closure_114 = true;
      tmp20.emitChange();
    }
  }
  const obj4 = arg1(dependencyMap[29]);
  if (obj5.isWeb()) {
    obj = { noiseCancellation: false };
    mergeSettings(obj);
  }
}
async function _downloadOpenH() {
  const parsed = URL.parse(closure_70);
  if (null === parsed) {
    closure_62.log("OpenH264 URL ", tmp2, " is invalid");
  } else {
    const parts = tmp2.pathname.split("/");
    const replaced = parts[parts.length - 1].replace(".bz2", "");
    const obj4 = callback(closure_3[68]);
    closure_62.log("OpenH264 is ready", yield obj4.downloadOpenH264(closure_70, replaced, closure_71, (arg0) => {
      closure_62.log("OpenH264 download status", arg0);
    }));
    while (true) {
      let tmp6 = callback;
      let tmp7 = closure_3;
      let num = 48;
      let obj = callback(closure_3[48]);
      let tmp8 = obj;
      obj = { success: flag, fetched_from_network: tmp5, error_message: "" };
      let trackResult = obj.track(obj.VIDEO_OPENH264_DOWNLOADED, obj);
      if (!flag) {
        break;
      } else {
        let tmp10 = callback;
        let tmp11 = closure_3;
        let num2 = 68;
        let obj3 = callback(closure_3[68]);
        let tmp12 = replaced;
        let items = [replaced];
        let tmp13 = closure_62;
        let str2 = "OpenH264 cleanup";
        let logResult2 = closure_62.log("OpenH264 cleanup", yield obj3.cleanupUnusedOpenH264Files(items));
        // break
      }
    }
    const str5 = tmp2.pathname;
    const str7 = parts[parts.length - 1];
    const tmp26 = yield obj4.downloadOpenH264(closure_70, replaced, closure_71, (arg0) => {
      closure_62.log("OpenH264 download status", arg0);
    });
  }
}
function maybeDownloadOpenH264(arg0, arg1, arg2, arg3) {
  if (obj.isLinux()) {
    function downloadOpenH264() {
      return callback(...arguments);
    }();
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
    result.setAudioSubsystem(arg0);
  }
}
function interpretAutomaticAudioSubsystem() {
  result.queueAudioSubsystem(constants8.EXPERIMENTAL);
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
        const obj = {};
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
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
let closure_10 = importDefault(dependencyMap[6]);
arg1(dependencyMap[7]);
let closure_11 = importDefault(dependencyMap[8]);
let closure_12 = importDefault(dependencyMap[9]);
let closure_13 = importDefault(dependencyMap[10]);
const getSystemAnalyticsInfo = arg1(dependencyMap[11]).getSystemAnalyticsInfo;
let closure_15 = importDefault(dependencyMap[12]);
let closure_16 = importDefault(dependencyMap[13]);
let closure_17 = importDefault(dependencyMap[14]);
let closure_18 = importDefault(dependencyMap[15]);
let closure_19 = importDefault(dependencyMap[16]);
let closure_20 = importDefault(dependencyMap[17]);
let closure_21 = importDefault(dependencyMap[18]);
let closure_22 = importDefault(dependencyMap[19]);
const tmp3 = arg1(dependencyMap[20]);
({ AnalyticEvents: closure_23, AppStates: closure_24, InputModes } = tmp3);
({ RTCConnectionStates: closure_26, UserSettingsSections: closure_27, VideoToggleState: closure_28 } = tmp3);
({ DARWIN_SCKIT_VERSION: closure_29, DARWIN_SCKIT_AUDIO_VERSION: closure_30, WINDOWS_GRAPHICS_CAPTURE_NEW_APIS_BUILD: closure_31, WINDOWS_GRAPHICS_CAPTURE_NEW_APIS_SEMVER: closure_32, WINDOWS_GRAPHICS_CAPTURE_BUILD: closure_33, WINDOWS_GRAPHICS_CAPTURE_SEMVER: closure_34, WINDOWS_SOUNDSHARE_HOOK_VERSION: closure_35, WINDOWS_SOUNDSHARE_NONHOOK_VERSION: closure_36 } = arg1(dependencyMap[21]));
const tmp4 = arg1(dependencyMap[21]);
({ NativePermissionStates: closure_37, NativePermissionTypes } = arg1(dependencyMap[22]));
let closure_39 = arg1(dependencyMap[23]).DEFAULT_AUDIO_MIXER_SETTINGS;
const tmp5 = arg1(dependencyMap[22]);
({ ProtoAudioSettingsContextTypes: closure_40, UserSettingsTypes: closure_41 } = arg1(dependencyMap[24]));
const InputProfile = arg1(dependencyMap[25]).InputProfile;
const tmp7 = arg1(dependencyMap[26]);
({ AudioSubsystems: closure_43, DARWIN_H265_VERSION: closure_44, DEFAULT_VOLUME: closure_45, DEFAULT_STREAM_VOLUME: closure_46, DEFAULT_DEVICE_ID } = tmp7);
({ DeviceTypes: closure_48, DISABLED_DEVICE_ID } = tmp7);
({ ExperimentFlags: closure_50, Features } = tmp7);
const MediaEngineContextTypes = tmp7.MediaEngineContextTypes;
const NoiseCancellerError = tmp7.NoiseCancellerError;
({ VideoFilterError: closure_54, VideoFilterTarget: closure_55, MediaTypes: closure_56, QUEUE_METRICS_INTERVAL_MS: closure_57, VideoToggleReason: closure_58, VIEWERSIDE_CLIP_KFI_MS: closure_59, SIMULCAST_HQ_QUALITY: closure_60, SIMULCAST_LQ_QUALITY: closure_61 } = tmp7);
let importDefaultResult = importDefault(dependencyMap[27]);
importDefaultResult = new importDefaultResult("MediaEngineStore");
let closure_63 = "MediaEngineStore";
let closure_64 = {};
let closure_65 = 5 * importDefault(dependencyMap[28]).Millis.SECOND;
let closure_66 = 2 * importDefault(dependencyMap[28]).Millis.SECOND;
let closure_67 = 30 * importDefault(dependencyMap[28]).Millis.SECOND;
const MINUTE = importDefault(dependencyMap[28]).Millis.MINUTE;
let closure_69 = "deep_noise_suppression";
let closure_70 = "https://ciscobinary.openh264.org/libopenh264-2.5.1-linux64.7.so.bz2";
let closure_71 = "d828a944d4d2bb64195ada89cf2cde9bc41733b1547d0788ef49fb8cb231b76f";
let closure_72 = 0;
let obj = { WEBCAM: "WEBCAM", INTEGRATED: "INTEGRATED", BLUETOOTH: "BLUETOOTH", AIRPLAY: "AIRPLAY", HEADSET: "HEADSET" };
obj = { mode: InputModes.VOICE_ACTIVITY, modeOptions: {} };
let closure_75 = { [InputProfile.CUSTOM]: {}, [InputProfile.VOICE_ISOLATION]: { modeOptions: { 0: null, 0: null } }, [InputProfile.STUDIO]: obj };
const obj1 = { preferredRegions: 60, lastTestTimestamp: 0, lastGeoRankedOrder: 0, modeOptions: { vadUseKrisp: false } };
let obj4 = arg1(dependencyMap[30]);
let obj5 = arg1(dependencyMap[30]);
const result = obj4.initializeMediaEngine(obj5.determineMediaEngine());
importDefaultResult.enableNativeLogger(true);
let closure_82 = {};
const items = [MediaEngineContextTypes.DEFAULT];
const set = new Set(items);
let closure_84 = result.supports(Features.AUTO_ENABLE);
let closure_85 = false;
const STREAM = MediaEngineContextTypes.STREAM;
let closure_87 = 0;
let closure_88 = false;
let closure_89 = performance.now();
let closure_90 = null;
const obj2 = { [DEFAULT_DEVICE_ID]: makeDisabledDevice("No Input Devices") };
const obj3 = { [DEFAULT_DEVICE_ID]: makeDisabledDevice("No Output Devices") };
obj4 = { [DEFAULT_DEVICE_ID]: makeDisabledDevice("No Video Devices") };
const timeout = new arg1(dependencyMap[31]).Timeout();
let closure_95 = false;
let closure_96 = false;
let closure_97 = false;
let closure_98 = false;
let closure_99 = false;
let closure_102 = false;
let closure_103 = false;
const timeout1 = new arg1(dependencyMap[31]).Timeout();
let closure_105 = false;
let closure_106 = false;
let closure_107 = false;
let closure_108 = false;
const timeout2 = new arg1(dependencyMap[31]).Timeout();
let closure_110;
let closure_111;
let closure_112 = false;
let closure_113 = false;
let closure_114 = false;
let closure_115 = false;
let closure_116;
let closure_117;
let closure_118;
let closure_119 = [];
let closure_120 = false;
let closure_121 = null;
let closure_122 = false;
let closure_123 = false;
let closure_124 = false;
let closure_125 = {};
let closure_126 = null;
let closure_127 = null;
let closure_128 = false;
const tmp6 = arg1(dependencyMap[24]);
importDefault(dependencyMap[32]).hasPermission(NativePermissionTypes.AUDIO, { showAuthorizationError: false });
const importDefaultResult1 = importDefault(dependencyMap[32]);
importDefault(dependencyMap[32]).hasPermission(NativePermissionTypes.CAMERA, { showAuthorizationError: false });
const set1 = new Set();
let closure_130 = true;
const set2 = new Set();
let closure_132;
let closure_133 = {};
let closure_134 = null;
let closure_135 = null;
let closure_136 = null;
let closure_137 = true;
let closure_138 = false;
const timeout3 = new arg1(dependencyMap[31]).Timeout();
let closure_140 = false;
let closure_141 = false;
let closure_142 = false;
let closure_143 = false;
let closure_144 = {};
const items1 = [, , , , , , , , , ];
({ KRISP_INIT_ERROR: arr2[0], KRISP_INIT_ERROR_NATIVE: arr2[1], KRISP_INIT_ERROR_SSE4_NOT_SUPPORTED: arr2[2], KRISP_INIT_ERROR_AVX2_NOT_SUPPORTED: arr2[3], KRISP_INIT_ERROR_UNSIGNED: arr2[4], KRISP_INIT_ERROR_GLOBAL_INIT: arr2[5], KRISP_INIT_ERROR_WEIGHT_8K: arr2[6], KRISP_INIT_ERROR_WEIGHT_16K: arr2[7], KRISP_INIT_ERROR_WEIGHT_32K: arr2[8], KRISP_INIT_ERROR_WEIGHT_VAD: arr2[9] } = NoiseCancellerError);
const set3 = new Set(items1);
let closure_146 = ">=10.0.15063";
let closure_147 = /^HDAUDIO\\(?:SUB)?FUNC_\d+&VEN_(?:8086|1002|10DE)/;
let tmp20 = (Store) => {
  class MediaEngineStore {
    constructor() {
      self = this;
      tmp = closure_4(this, MediaEngineStore);
      obj = closure_7(MediaEngineStore);
      tmp2 = closure_6;
      if (closure_148()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_7;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_7(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = MediaEngineStore;
  callback2(MediaEngineStore, Store);
  let obj = {
    key: "initialize",
    value: function initialize() {
      const self = this;
      if (tmp3 == null) {
        let tmp3 = callback(closure_3[83]);
        const prototype = tmp3.prototype;
        tmp3 = new tmp3(store, self);
      }
      callback6();
      function loadSettings() {
        const Storage = callback(closure_3[65]).Storage;
        let value = Storage.get("audio");
        if (null != value) {
          const Storage2 = callback(closure_3[65]).Storage;
          const obj = {};
          obj[constants.DEFAULT] = value;
          const result = Storage2.set(closure_63, obj);
          const Storage3 = callback(closure_3[65]).Storage;
          Storage3.remove("audio");
        }
        const Storage4 = callback(closure_3[65]).Storage;
        value = Storage4.get(closure_63);
        if (null == value) {
          value = {};
        }
        callback2(closure_3[38]).each(value, (modeOptions) => {
          let obj = callback2(closure_3[38]);
          obj.defaultsDeep(modeOptions, callback3());
          let tmp2 = null != modeOptions.modeOptions;
          if (tmp2) {
            tmp2 = "string" === typeof modeOptions.modeOptions.shortcut;
          }
          if (tmp2) {
            modeOptions.modeOptions.shortcut = callback(closure_3[66]).toCombo(modeOptions.modeOptions.shortcut);
            const obj2 = callback(closure_3[66]);
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
          let supportsResult = closure_77.supports(constants.SIDECHAIN_COMPRESSION);
          if (supportsResult) {
            supportsResult = modeOptions.sidechainCompressionSettingVersion < 1;
          }
          if (supportsResult) {
            modeOptions.sidechainCompressionSettingVersion = 1;
            modeOptions.sidechainCompression = true;
          }
          if (modeOptions.audioMixerSettingsVersion < 1) {
            modeOptions.audioMixerSettingsVersion = 1;
            obj = {};
            const merged = Object.assign(closure_39);
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
        callback3();
      }();
      callback13();
      callback14();
      callback11();
      function maybeStartPollQueueMetrics() {
        function pollMetrics(arg0) {
          return _pollMetrics(...arguments);
        }
        async function _pollMetrics() {
          const tmp = yield new Promise((arg0) => {
            callback(closure_3[68]).pollQueueMetrics(() => { ... });
          });
          tmp.periodMs = closure_57;
          const tmp2 = callback2(tmp);
          if (null !== tmp2) {
            callback(closure_3[48]).track(constants.VOICE_QUEUE_METRICS, tmp2);
            const obj = callback(closure_3[48]);
          }
          const timerId = setTimeout(closure_0, closure_57);
        }
        if (obj.isDesktop()) {
          if (pollMetrics(closure_3[29]).isPlatformEmbedded) {
            if (!closure_143) {
              closure_143 = true;
              const _setTimeout = setTimeout;
              const timerId = setTimeout(pollMetrics, closure_57);
            }
          }
        }
      }();
      let obj = MediaEngineStore(closure_3[29]);
      let isPlatformEmbedded = obj.isWindows();
      if (isPlatformEmbedded) {
        isPlatformEmbedded = MediaEngineStore(closure_3[29]).isPlatformEmbedded;
      }
      if (isPlatformEmbedded) {
        function checkH264MfDecodeAvailability() {
          if (null === closure_90) {
            const codecSurvey = codecSurvey.getCodecSurvey();
            const nextPromise = codecSurvey.then((arg0) => {
              const parsed = JSON.parse(arg0);
              if (null != parsed) {
                if (null != tmp2.available_video_decoders) {
                  const available_video_decoders = parsed.available_video_decoders;
                  let closure_90 = available_video_decoders.some((arg0) => "MediaFoundation H.264" === arg0);
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
                  let closure_90 = available_video_decoders.some((arg0) => "MediaFoundation H.264" === arg0);
                }
              }
              const error = new Error("decoder survey is not available");
              throw error;
            }).catch((arg0) => {
              closure_62.error("Failed to get codec survey", arg0);
              let closure_90 = false;
            }).finally(() => {
              callback(closure_3[49]).dispatch({ type: "MEDIA_ENGINE_MF_AVAILABILITY_CHECKED" });
            });
            const catchPromise = codecSurvey.then((arg0) => {
              const parsed = JSON.parse(arg0);
              if (null != parsed) {
                if (null != tmp2.available_video_decoders) {
                  const available_video_decoders = parsed.available_video_decoders;
                  let closure_90 = available_video_decoders.some((arg0) => "MediaFoundation H.264" === arg0);
                }
              }
              const error = new Error("decoder survey is not available");
              throw error;
            }).catch((arg0) => {
              closure_62.error("Failed to get codec survey", arg0);
              let closure_90 = false;
            });
          }
        }();
      }
      obj = { [closure_51.VIDEO]: store.supports(constants6.VIDEO), [closure_51.DESKTOP_CAPTURE]: store.supports(constants6.DESKTOP_CAPTURE), [closure_51.HYBRID_VIDEO]: store.supports(constants6.HYBRID_VIDEO) };
      self.waitFor(closure_16, closure_17, closure_18, closure_19, closure_11, closure_12, closure_20, closure_13, closure_15, closure_21, closure_22);
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "supports",
    value: function supports(VIDEO) {
      return store.supports(VIDEO);
    }
  };
  items[1] = obj;
  obj = {
    key: "supportsInApp",
    value: function supportsInApp(VIDEO) {
      let supportsResult = closure_133[VIDEO];
      if (!supportsResult) {
        supportsResult = store.supports(VIDEO);
      }
      return supportsResult;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "isSupported",
    value: function isSupported() {
      return store.supported();
    }
  };
  items[4] = {
    key: "isNoiseSuppressionSupported",
    value: function isNoiseSuppressionSupported() {
      return store.supports(constants6.NOISE_SUPPRESSION);
    }
  };
  items[5] = {
    key: "isNoiseCancellationSupported",
    value: function isNoiseCancellationSupported() {
      return callback12();
    }
  };
  items[6] = {
    key: "isNoiseCancellationError",
    value: function isNoiseCancellationError() {
      return closure_122;
    }
  };
  items[7] = {
    key: "isAutomaticGainControlSupported",
    value: function isAutomaticGainControlSupported() {
      return store.supports(constants6.AUTOMATIC_GAIN_CONTROL);
    }
  };
  items[8] = {
    key: "shouldOfferManualSubsystemSelection",
    value: function shouldOfferManualSubsystemSelection() {
      let tmp = !callback9();
      if (tmp) {
        let supportsResult = store.supports(constants6.LEGACY_AUDIO_SUBSYSTEM);
        if (!supportsResult) {
          supportsResult = store.supports(constants6.EXPERIMENTAL_AUDIO_SUBSYSTEM);
        }
        tmp = supportsResult;
      }
      return tmp;
    }
  };
  items[9] = {
    key: "showBypassSystemInputProcessing",
    value: function showBypassSystemInputProcessing() {
      let supportsResult = store.supports(constants6.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
      if (supportsResult) {
        supportsResult = "experimental" === store.getAudioSubsystem();
      }
      return supportsResult;
    }
  };
  items[10] = {
    key: "isAdvancedVoiceActivitySupported",
    value: function isAdvancedVoiceActivitySupported() {
      return callback12();
    }
  };
  items[11] = {
    key: "isAecDumpSupported",
    value: function isAecDumpSupported() {
      return store.supports(constants6.AEC_DUMP);
    }
  };
  items[12] = {
    key: "isSimulcastSupported",
    value: function isSimulcastSupported() {
      let supportsResult = store.supports(constants6.VIDEO);
      if (supportsResult) {
        supportsResult = store.supports(constants6.SIMULCAST);
      }
      return supportsResult;
    }
  };
  items[13] = {
    key: "getAecDump",
    value: function getAecDump() {
      return callback5().aecDumpEnabled;
    }
  };
  items[14] = {
    key: "getMediaEngine",
    value: function getMediaEngine() {
      return closure_77;
    }
  };
  items[15] = {
    key: "getVideoComponent",
    value: function getVideoComponent() {
      return store.Video;
    }
  };
  items[16] = {
    key: "getCameraComponent",
    value: function getCameraComponent() {
      return store.Camera;
    }
  };
  items[17] = {
    key: "getKrispSuppressionLevel",
    value: function getKrispSuppressionLevel() {
      let num = 100;
      if (null != closure_117) {
        num = closure_117;
      }
      return num;
    }
  };
  items[18] = {
    key: "getKrispEnableStats",
    value: function getKrispEnableStats() {
      return closure_120;
    }
  };
  items[19] = {
    key: "isEnabled",
    value: function isEnabled() {
      return closure_84;
    }
  };
  items[20] = {
    key: "isMute",
    value: function isMute() {
      return this.isSelfMute() || closure_95;
    }
  };
  items[21] = {
    key: "isDeaf",
    value: function isDeaf() {
      return this.isSelfDeaf() || closure_98;
    }
  };
  items[22] = {
    key: "isServerMute",
    value: function isServerMute() {
      return closure_95;
    }
  };
  items[23] = {
    key: "isServerDeaf",
    value: function isServerDeaf() {
      return closure_98;
    }
  };
  items[24] = {
    key: "getAudioMixerSettings",
    value: function getAudioMixerSettings() {
      return callback5().audioMixerSettings;
    }
  };
  items[25] = {
    key: "hasContext",
    value: function hasContext(arg0) {
      return null != closure_82[arg0];
    }
  };
  items[26] = {
    key: "isSelfMutedTemporarily",
    value: function isSelfMutedTemporarily(DEFAULT) {
      if (DEFAULT === undefined) {
        DEFAULT = constants7.DEFAULT;
      }
      return DEFAULT === constants7.DEFAULT && closure_96;
    }
  };
  items[27] = {
    key: "isSelfMute",
    value: function isSelfMute(DEFAULT) {
      const self = this;
      if (DEFAULT === undefined) {
        DEFAULT = constants7.DEFAULT;
      }
      let mute = !self.isEnabled();
      if (!mute) {
        mute = callback5(DEFAULT).mute;
      }
      if (!mute) {
        mute = !callback(closure_3[32]).didHavePermission(constants3.AUDIO);
        const obj = callback(closure_3[32]);
      }
      if (!mute) {
        mute = self.isSelfDeaf(DEFAULT);
      }
      if (!mute) {
        mute = DEFAULT === constants7.DEFAULT && closure_97;
        const tmp7 = DEFAULT === constants7.DEFAULT && closure_97;
      }
      return mute;
    }
  };
  items[28] = {
    key: "shouldSkipMuteUnmuteSound",
    value: function shouldSkipMuteUnmuteSound() {
      return closure_102;
    }
  };
  items[29] = {
    key: "notifyMuteUnmuteSoundWasSkipped",
    value: function notifyMuteUnmuteSoundWasSkipped() {
      let closure_102 = false;
    }
  };
  items[30] = {
    key: "isHardwareMute",
    value: function isHardwareMute(inputDeviceId) {
      let DEFAULT = inputDeviceId;
      const self = this;
      if (inputDeviceId === undefined) {
        DEFAULT = constants7.DEFAULT;
      }
      let tmp2 = closure_138;
      if (closure_138) {
        tmp2 = "voice_isolation" !== self.getSystemMicrophoneMode();
      }
      if (tmp2) {
        tmp2 = callback5(DEFAULT).mode === constants.VOICE_ACTIVITY;
      }
      let tmp5 = !self.isMute() && !self.isSelfMutedTemporarily(DEFAULT);
      if (tmp5) {
        tmp5 = closure_18.isHardwareMute(self.getInputDeviceId()) || tmp2;
        const tmp7 = closure_18.isHardwareMute(self.getInputDeviceId()) || tmp2;
      }
      return tmp5;
    }
  };
  items[31] = {
    key: "isHardwareMuteNoticeEnabled",
    value: function isHardwareMuteNoticeEnabled() {
      return closure_137;
    }
  };
  items[32] = {
    key: "isSelfDeaf",
    value: function isSelfDeaf(DEFAULT) {
      const self = this;
      if (DEFAULT === undefined) {
        DEFAULT = constants7.DEFAULT;
      }
      let deaf = !self.isSupported();
      if (!deaf) {
        deaf = callback5(DEFAULT).deaf;
      }
      return deaf;
    }
  };
  items[33] = {
    key: "isVideoEnabled",
    value: function isVideoEnabled() {
      let tmp = closure_99;
      if (closure_99) {
        tmp = closure_106;
      }
      return tmp;
    }
  };
  items[34] = {
    key: "isVideoAvailable",
    value: function isVideoAvailable() {
      const values = Object.values(closure_93);
      return values.some((disabled) => !disabled.disabled);
    }
  };
  items[35] = {
    key: "hasVideoDevice",
    value: function hasVideoDevice() {
      return closure_106;
    }
  };
  items[36] = {
    key: "isScreenSharing",
    value: function isScreenSharing() {
      let STREAM = arg0;
      if (arg0 === undefined) {
        STREAM = constants7.STREAM;
      }
      let tmp2 = closure_86 === STREAM;
      if (tmp2) {
        tmp2 = null != closure_79;
      }
      return tmp2;
    }
  };
  items[37] = {
    key: "isSoundSharing",
    value: function isSoundSharing(closure_0) {
      let STREAM = closure_0;
      if (closure_0 === undefined) {
        STREAM = constants7.STREAM;
      }
      let tmp2 = closure_86 === STREAM;
      if (tmp2) {
        tmp2 = null != desktopSource;
      }
      if (tmp2) {
        const desktopSource = desktopSource.desktopSource;
        let soundshareId;
        if (null != desktopSource) {
          soundshareId = desktopSource.soundshareId;
        }
        tmp2 = null != soundshareId;
      }
      return tmp2;
    }
  };
  items[38] = {
    key: "isLocalMute",
    value: function isLocalMute(userId, context) {
      let DEFAULT = context;
      if (context === undefined) {
        DEFAULT = constants7.DEFAULT;
      }
      let tmp2 = userId !== id.getId();
      if (tmp2) {
        tmp2 = callback5(DEFAULT).localMutes[userId] || false;
        const tmp4 = callback5(DEFAULT).localMutes[userId] || false;
      }
      return tmp2;
    }
  };
  items[39] = {
    key: "supportsDisableLocalVideo",
    value: function supportsDisableLocalVideo() {
      return store.supports(constants6.DISABLE_VIDEO);
    }
  };
  items[40] = {
    key: "isLocalVideoDisabled",
    value: function isLocalVideoDisabled(id, DEFAULT) {
      if (DEFAULT === undefined) {
        DEFAULT = constants7.DEFAULT;
      }
      const tmp2 = callback5(DEFAULT).disabledLocalVideos[id];
      return null != tmp2 && tmp2;
    }
  };
  items[41] = {
    key: "getVideoToggleState",
    value: function getVideoToggleState(id, DEFAULT) {
      if (DEFAULT === undefined) {
        DEFAULT = constants7.DEFAULT;
      }
      let NONE = callback5(DEFAULT).videoToggleStateMap[id];
      if (null == NONE) {
        NONE = constants2.NONE;
      }
      return NONE;
    }
  };
  items[42] = {
    key: "isLocalVideoAutoDisabled",
    value: function isLocalVideoAutoDisabled(id) {
      let DEFAULT = arg1;
      if (arg1 === undefined) {
        DEFAULT = constants7.DEFAULT;
      }
      let hasItem = DEFAULT === constants7.DEFAULT;
      if (hasItem) {
        hasItem = set.has(id);
      }
      return hasItem;
    }
  };
  items[43] = {
    key: "isAnyLocalVideoAutoDisabled",
    value: function isAnyLocalVideoAutoDisabled() {
      let DEFAULT = arg0;
      if (arg0 === undefined) {
        DEFAULT = constants7.DEFAULT;
      }
      let tmp2 = DEFAULT === constants7.DEFAULT;
      if (tmp2) {
        tmp2 = set.size > 0;
      }
      return tmp2;
    }
  };
  items[44] = {
    key: "isMediaFilterSettingLoading",
    value: function isMediaFilterSettingLoading() {
      return closure_123;
    }
  };
  items[45] = {
    key: "isNativeAudioPermissionReady",
    value: function isNativeAudioPermissionReady() {
      return closure_128;
    }
  };
  items[46] = {
    key: "getGoLiveSource",
    value: function getGoLiveSource() {
      return closure_79;
    }
  };
  items[47] = {
    key: "getGoLiveContext",
    value: function getGoLiveContext() {
      return closure_86;
    }
  };
  items[48] = {
    key: "getLastAudioInputDeviceChangeTimestamp",
    value: function getLastAudioInputDeviceChangeTimestamp() {
      return closure_89;
    }
  };
  items[49] = {
    key: "isH264MfDecodeAvailable",
    value: function isH264MfDecodeAvailable() {
      return closure_90;
    }
  };
  items[50] = {
    key: "getLocalPan",
    value: function getLocalPan(id) {
      let DEFAULT = arg1;
      if (arg1 === undefined) {
        DEFAULT = constants7.DEFAULT;
      }
      let tmp2 = callback5(DEFAULT).localPans[id];
      if (null == tmp2) {
        tmp2 = closure_64;
      }
      return tmp2;
    }
  };
  items[51] = {
    key: "getLocalVolume",
    value: function getLocalVolume(id, STREAM) {
      let DEFAULT = STREAM;
      if (STREAM === undefined) {
        DEFAULT = constants7.DEFAULT;
      }
      let tmp2 = DEFAULT === constants7.STREAM ? closure_46 : closure_45;
      const tmp3 = callback5(DEFAULT).localVolumes[id];
      if (null != tmp3) {
        tmp2 = tmp3;
      }
      return tmp2;
    }
  };
  items[52] = {
    key: "getInputVolume",
    value: function getInputVolume() {
      return callback5().inputVolume;
    }
  };
  items[53] = {
    key: "getOutputVolume",
    value: function getOutputVolume() {
      if (obj.getConfig({ location: "MediaEngineStore.getOutputVolume" }).audioOutputPresent) {
        let outputVolume = callback5().outputVolume;
      } else {
        outputVolume = closure_45;
      }
      return outputVolume;
    }
  };
  items[54] = {
    key: "getMode",
    value: function getMode() {
      let DEFAULT = arg0;
      if (arg0 === undefined) {
        DEFAULT = constants7.DEFAULT;
      }
      return callback5(DEFAULT).mode;
    }
  };
  items[55] = {
    key: "getModeOptions",
    value: function getModeOptions(DEFAULT) {
      if (DEFAULT === undefined) {
        DEFAULT = constants7.DEFAULT;
      }
      return callback5(DEFAULT).modeOptions;
    }
  };
  items[56] = {
    key: "getShortcuts",
    value: function getShortcuts() {
      const obj = {};
      const MediaEngineStore = obj;
      callback(closure_3[38]).each(closure_82, (mode) => {
        let hasItem = mode.mode === constants.PUSH_TO_TALK;
        if (hasItem) {
          hasItem = set.has(arg1);
        }
        if (hasItem) {
          obj[arg1] = mode.modeOptions.shortcut;
        }
      });
      return obj;
    }
  };
  items[57] = {
    key: "getInputDeviceId",
    value: function getInputDeviceId() {
      return callback10(closure_91, callback5().inputDeviceId);
    }
  };
  items[58] = {
    key: "getOutputDeviceId",
    value: function getOutputDeviceId() {
      return callback10(closure_92, callback5().outputDeviceId);
    }
  };
  items[59] = {
    key: "getVideoDeviceId",
    value: function getVideoDeviceId() {
      return callback10(closure_93, callback5().videoDeviceId);
    }
  };
  items[60] = {
    key: "getInputDevices",
    value: function getInputDevices(arg0) {
      return closure_91;
    }
  };
  items[61] = {
    key: "getOutputDevices",
    value: function getOutputDevices(arg0) {
      return closure_92;
    }
  };
  items[62] = {
    key: "getVideoDevices",
    value: function getVideoDevices() {
      return closure_93;
    }
  };
  items[63] = {
    key: "getEchoCancellation",
    value: function getEchoCancellation() {
      const tmp = callback5();
      return closure_18.hasEchoCancellation(tmp.inputDeviceId) || tmp.echoCancellation;
    }
  };
  items[64] = {
    key: "getSidechainCompression",
    value: function getSidechainCompression() {
      let sidechainCompression = store.supports(constants6.SIDECHAIN_COMPRESSION);
      if (sidechainCompression) {
        sidechainCompression = callback5().sidechainCompression;
      }
      return sidechainCompression;
    }
  };
  items[65] = {
    key: "getSidechainCompressionStrength",
    value: function getSidechainCompressionStrength() {
      return callback5().sidechainCompressionStrength;
    }
  };
  items[66] = {
    key: "getH265Enabled",
    value: function getH265Enabled() {
      return callback5().h265Enabled;
    }
  };
  items[67] = {
    key: "hasH265HardwareDecode",
    value: function hasH265HardwareDecode() {
      return null !== closure_126 && closure_126;
    }
  };
  items[68] = {
    key: "getOpenH264Enabled",
    value: function getOpenH264Enabled() {
      let openH264Enabled = MediaEngineStore(closure_3[29]).isLinux();
      if (openH264Enabled) {
        openH264Enabled = callback5().openH264Enabled;
      }
      return openH264Enabled;
    }
  };
  items[69] = {
    key: "getLoopback",
    value: function getLoopback() {
      return size.size > 0;
    }
  };
  items[70] = {
    key: "getLoopbackReasons",
    value: function getLoopbackReasons() {
      return closure_131;
    }
  };
  items[71] = {
    key: "getNoiseSuppression",
    value: function getNoiseSuppression() {
      const tmp = callback5();
      return closure_18.hasNoiseSuppression(tmp.inputDeviceId) || tmp.noiseSuppression;
    }
  };
  items[72] = {
    key: "getAutomaticGainControl",
    value: function getAutomaticGainControl() {
      const tmp = callback5();
      return closure_18.hasAutomaticGainControl(tmp.inputDeviceId) || tmp.automaticGainControl;
    }
  };
  items[73] = {
    key: "getBypassSystemInputProcessing",
    value: function getBypassSystemInputProcessing() {
      return callback5().bypassSystemInputProcessing;
    }
  };
  items[74] = {
    key: "getNoiseCancellation",
    value: function getNoiseCancellation() {
      return callback5().noiseCancellation;
    }
  };
  items[75] = {
    key: "getHardwareEncoding",
    value: function getHardwareEncoding() {
      return true;
    }
  };
  items[76] = {
    key: "getEnableSilenceWarning",
    value: function getEnableSilenceWarning() {
      return callback5().silenceWarning;
    }
  };
  items[77] = {
    key: "getDebugLogging",
    value: function getDebugLogging() {
      return store.getDebugLogging();
    }
  };
  items[78] = {
    key: "getQoS",
    value: function getQoS() {
      return callback5().qos;
    }
  };
  items[79] = {
    key: "getAttenuation",
    value: function getAttenuation() {
      return callback5().attenuation;
    }
  };
  items[80] = {
    key: "getAttenuateWhileSpeakingSelf",
    value: function getAttenuateWhileSpeakingSelf() {
      return callback5().attenuateWhileSpeakingSelf;
    }
  };
  items[81] = {
    key: "getAttenuateWhileSpeakingOthers",
    value: function getAttenuateWhileSpeakingOthers() {
      return callback5().attenuateWhileSpeakingOthers;
    }
  };
  items[82] = {
    key: "getAudioSubsystem",
    value: function getAudioSubsystem(arg0) {
      if (callback8()) {
        if (callback5().automaticAudioSubsystem) {
          let AUTOMATIC = constants5.AUTOMATIC;
        }
        return AUTOMATIC;
      }
      AUTOMATIC = store.getAudioSubsystem();
    }
  };
  items[83] = {
    key: "getMLSSigningKey",
    value: function getMLSSigningKey(staticAuthSessionId, arg1, arg2) {
      return store.getMLSSigningKey(staticAuthSessionId, arg1);
    }
  };
  items[84] = {
    key: "getActiveInputProfile",
    value: function getActiveInputProfile() {
      return callback5().activeInputProfile;
    }
  };
  items[85] = {
    key: "isInputProfileCustom",
    value: function isInputProfileCustom() {
      const activeInputProfile = this.getActiveInputProfile();
      let tmp2 = null == activeInputProfile;
      if (!tmp2) {
        tmp2 = activeInputProfile === constants4.CUSTOM;
      }
      return tmp2;
    }
  };
  items[86] = {
    key: "getSettings",
    value: function getSettings(closure_0) {
      let DEFAULT = closure_0;
      if (closure_0 === undefined) {
        DEFAULT = constants7.DEFAULT;
      }
      return callback5(DEFAULT);
    }
  };
  items[87] = {
    key: "getState",
    value: function getState() {
      return { settingsByContext: closure_82, inputDevices: closure_91, outputDevices: closure_92, appSupported: closure_133, krispModuleLoaded: closure_114, krispFatalError: closure_115, krispVersion: closure_116, krispSuppressionLevel: closure_117, goLiveSource: closure_79, goLiveContext: closure_86 };
    }
  };
  items[88] = {
    key: "getInputDetectedThisConnection",
    value: function getInputDetectedThisConnection() {
      return closure_107;
    }
  };
  items[89] = {
    key: "getInputDetected",
    value: function getInputDetected() {
      return closure_81.inputDetected;
    }
  };
  items[90] = {
    key: "getLastInputDetectedUpdateTime",
    value: function getLastInputDetectedUpdateTime() {
      return closure_81.lastUpdateTime;
    }
  };
  items[91] = {
    key: "getNoInputDetectedNotice",
    value: function getNoInputDetectedNotice() {
      return closure_108;
    }
  };
  items[92] = {
    key: "getInputDeviceOSMuted",
    value: function getInputDeviceOSMuted() {
      return closure_110;
    }
  };
  items[93] = {
    key: "getInputDeviceOSVolume",
    value: function getInputDeviceOSVolume() {
      return closure_111;
    }
  };
  items[94] = {
    key: "getPacketDelay",
    value: function getPacketDelay() {
      const self = this;
      let num = 0;
      if (!MediaEngineStore(closure_3[29]).isPlatformEmbedded) {
        num = 0;
        if (self.getMode() === constants.VOICE_ACTIVITY) {
          num = self.getModeOptions().vadLeading;
        }
      }
      return num;
    }
  };
  items[95] = {
    key: "setCanHavePriority",
    value: function setCanHavePriority(userId, arg1) {
      const MediaEngineStore = userId;
      store.eachConnection((setCanHavePriority) => setCanHavePriority.setCanHavePriority(setCanHavePriority, arg1));
    }
  };
  items[96] = {
    key: "isInteractionRequired",
    value: function isInteractionRequired() {
      return closure_85;
    }
  };
  items[97] = {
    key: "getVideoHook",
    value: function getVideoHook() {
      return callback5().videoHook;
    }
  };
  items[98] = {
    key: "supportsVideoHook",
    value: function supportsVideoHook() {
      return store.supports(constants6.VIDEO_HOOK);
    }
  };
  obj = {
    key: "getExperimentalSoundshare",
    value: function getExperimentalSoundshare() {
      const self = this;
      const experimentalSoundshare2 = callback5().experimentalSoundshare2;
      let result = this.supportsExperimentalSoundshare();
      if (result) {
        result = null == experimentalSoundshare2 || experimentalSoundshare2 || !self.supportsHookSoundshare();
        const tmp3 = null == experimentalSoundshare2 || experimentalSoundshare2 || !self.supportsHookSoundshare();
      }
      return result;
    }
  };
  items[99] = obj;
  obj = {
    key: "supportsExperimentalSoundshare",
    value: function supportsExperimentalSoundshare() {
      let supportsResult = store.supports(constants6.EXPERIMENTAL_SOUNDSHARE);
      if (supportsResult) {
        let release;
        if (null != callback(closure_3[64])) {
          release = callback(closure_3[64]).os.release;
        }
        supportsResult = callback(closure_3[54]).satisfies(release, closure_36);
        const obj = callback(closure_3[54]);
      }
      return supportsResult;
    }
  };
  items[100] = obj;
  obj = {
    key: "supportsHookSoundshare",
    value: function supportsHookSoundshare() {
      let isWindowsResult = MediaEngineStore(closure_3[29]).isWindows();
      if (isWindowsResult) {
        isWindowsResult = store.supports(constants6.SOUNDSHARE);
      }
      if (isWindowsResult) {
        let release;
        if (null != callback(closure_3[64])) {
          release = callback(closure_3[64]).os.release;
        }
        isWindowsResult = callback(closure_3[54]).satisfies(release, closure_35);
        const obj2 = callback(closure_3[54]);
      }
      return isWindowsResult;
    }
  };
  items[101] = obj;
  obj = {
    key: "getUseSystemScreensharePicker",
    value: function getUseSystemScreensharePicker() {
      let result = this.supportsSystemScreensharePicker();
      const useSystemScreensharePicker = callback5().useSystemScreensharePicker;
      let isLinuxResult = MediaEngineStore(closure_3[29]).isLinux();
      if (result) {
        if (null != useSystemScreensharePicker) {
          isLinuxResult = useSystemScreensharePicker;
        }
        result = isLinuxResult;
      }
      return result;
    }
  };
  items[102] = obj;
  obj = {
    key: "supportsSystemScreensharePicker",
    value: function supportsSystemScreensharePicker() {
      return store.supports(constants6.NATIVE_SCREENSHARE_PICKER);
    }
  };
  items[103] = obj;
  obj = {
    key: "getUseVaapiEncoder",
    value: function getUseVaapiEncoder() {
      return closure_142;
    }
  };
  items[104] = obj;
  obj = {
    key: "getVideoEncoderExperiments",
    value: function getVideoEncoderExperiments(STREAM, streamer) {
      const self = this;
      let arr = new Array("unk");
      arr = arr.push("nvNewPresets");
      if (STREAM === constants7.STREAM) {
        arr = arr.push("nvRelaxRc=250");
      } else {
        arr.push("nvRelaxRc=75");
      }
      if (self.getUseVaapiEncoder()) {
        arr.push("vaapi");
      }
      let isWindowsResult = STREAM === constants7.STREAM;
      if (isWindowsResult) {
        isWindowsResult = "streamer" === streamer;
      }
      if (isWindowsResult) {
        let obj = MediaEngineStore(closure_3[29]);
        isWindowsResult = obj.isWindows();
      }
      if (isWindowsResult) {
        arr.push("useCaptureDeviceForEncode");
        const VideoCaptureDeviceNoReuseExperiment = MediaEngineStore(closure_3[84]).VideoCaptureDeviceNoReuseExperiment;
        obj = { location: "handleReady" };
        if (VideoCaptureDeviceNoReuseExperiment.getConfig(obj).overrideDeviceReuse) {
          arr.push("videoCaptureDeviceOverrideReuse");
        }
      }
      arr.push("linux-vulkan");
      return arr.join(",");
    }
  };
  items[105] = obj;
  obj = {
    key: "getUseGamescopeCapture",
    value: function getUseGamescopeCapture() {
      return closure_141;
    }
  };
  items[106] = obj;
  obj = {
    key: "getSpeakingWhileMuted",
    value: function getSpeakingWhileMuted() {
      return closure_103;
    }
  };
  items[107] = obj;
  obj = {
    key: "getKrispModelOverride",
    value: function getKrispModelOverride() {
      return closure_118;
    }
  };
  items[108] = obj;
  obj = {
    key: "getKrispModels",
    value: function getKrispModels() {
      return closure_119;
    }
  };
  items[109] = obj;
  obj = {
    key: "getKrispVadActivationThreshold",
    value: function getKrispVadActivationThreshold() {
      const vadKrispActivationThreshold = callback5().modeOptions.vadKrispActivationThreshold;
      let num = 0.5;
      if (null != vadKrispActivationThreshold) {
        num = vadKrispActivationThreshold;
      }
      return num;
    }
  };
  items[110] = obj;
  obj = {
    key: "hasActiveCallKitCall",
    value: function hasActiveCallKitCall() {
      return closure_140;
    }
  };
  items[111] = obj;
  obj = {
    key: "setHasActiveCallKitCall",
    value: function setHasActiveCallKitCall(arg0) {

    }
  };
  items[112] = obj;
  obj = {
    key: "supportsScreenSoundshare",
    value: function supportsScreenSoundshare() {
      const self = this;
      if (obj.isMac()) {
        let supportsResult = store.supports(constants6.SOUNDSHARE);
        if (supportsResult) {
          let release;
          if (null != callback(closure_3[64])) {
            release = callback(closure_3[64]).os.release;
          }
          supportsResult = callback(closure_3[54]).satisfies(release, closure_30);
          const obj4 = callback(closure_3[54]);
        }
        if (supportsResult) {
          supportsResult = callback7();
        }
        let supportsResult1 = supportsResult;
      } else {
        if (obj2.isWindows()) {
          supportsResult1 = store.supports(constants6.SCREEN_SOUNDSHARE) && self.getExperimentalSoundshare();
          const tmp11 = store.supports(constants6.SCREEN_SOUNDSHARE) && self.getExperimentalSoundshare();
        } else {
          const tmp5 = !MediaEngineStore(closure_3[29]).isLinux();
          supportsResult1 = !tmp5;
          if (!tmp5) {
            supportsResult1 = store.supports(constants6.SCREEN_SOUNDSHARE);
          }
          const obj3 = MediaEngineStore(closure_3[29]);
        }
        const obj2 = MediaEngineStore(closure_3[29]);
      }
      return supportsResult1;
    }
  };
  items[113] = obj;
  obj = {
    key: "getSystemMicrophoneMode",
    value: function getSystemMicrophoneMode() {
      const self = this;
      if (obj.isWindows()) {
        if (!self.getBypassSystemInputProcessing()) {
          let found;
          if (null != closure_125[self.getInputDeviceId(self)]) {
            const active = tmp7.active;
            if (null != active) {
              found = active.find((arg0) => arg0 === closure_69);
            }
          }
          return found;
        }
      } else {
        if (!obj2.isMac()) {
          const obj3 = MediaEngineStore(closure_3[29]);
        }
        return closure_132;
      }
      const obj = MediaEngineStore(closure_3[29]);
    }
  };
  items[114] = obj;
  obj = {
    key: "getVideoStreamParameters",
    value: function getVideoStreamParameters(context) {
      let DEFAULT = context;
      const self = this;
      if (context === undefined) {
        DEFAULT = constants7.DEFAULT;
      }
      if (self.supports(constants6.VIDEO)) {
        let obj = { rid: "100" };
        if (DEFAULT === constants7.DEFAULT) {
          let SCREEN = constants8.VIDEO;
        } else {
          SCREEN = constants8.SCREEN;
        }
        obj.type = SCREEN;
        obj.quality = closure_60;
        const items = [obj];
      } else {
        const items1 = [];
        let enableSimulcast = self.isSimulcastSupported();
        if (enableSimulcast) {
          enableSimulcast = DEFAULT === constants7.DEFAULT;
        }
        if (enableSimulcast) {
          const DisableCameraSimulcastExperiment = MediaEngineStore(closure_3[85]).DisableCameraSimulcastExperiment;
          obj = { location: "MediaEngineStore.getVideoStreamParameters" };
          enableSimulcast = DisableCameraSimulcastExperiment.getConfig(obj).enableSimulcast;
        }
        if (enableSimulcast) {
          obj = { rid: "50", type: constants8.VIDEO, quality: closure_61 };
          items1.push(obj);
        }
        return items1;
      }
    }
  };
  items[115] = obj;
  obj = {
    key: "fetchAsyncResources",
    value: function fetchAsyncResources(arg0) {
      const obj = { fetchDave: MediaEngineStore(closure_3[29]).isWeb() };
      return store.fetchAsyncResources(obj);
    }
  };
  items[116] = obj;
  obj = {
    key: "startDavePreload",
    value: function startDavePreload() {
      if (!closure_124) {
        closure_124 = true;
        let obj = MediaEngineStore(closure_3[29]);
        if (obj.isWeb()) {
          obj = { fetchDave: true };
          const asyncResources = store.fetchAsyncResources(obj);
          asyncResources.catch((arg0) => {
            closure_62.warn("DAVE preload failed:", arg0);
            callback(closure_3[80]).captureException(arg0);
          });
        }
      }
    }
  };
  items[117] = obj;
  obj = {
    key: "getSupportedSecureFramesProtocolVersion",
    value: function getSupportedSecureFramesProtocolVersion() {
      return store.getSupportedSecureFramesProtocolVersion();
    }
  };
  items[118] = obj;
  obj = {
    key: "hasClipsSource",
    value: function hasClipsSource() {
      return null != closure_80;
    }
  };
  items[119] = obj;
  obj = {
    key: "isClipsRecordingReady",
    value: function isClipsRecordingReady() {
      return closure_88;
    }
  };
  items[120] = obj;
  obj = {
    key: "isClipsRecordingReadySignalSupported",
    value: function isClipsRecordingReadySignalSupported() {
      return store.supports(constants6.CLIPS_RECORDING_READY_EVENTS);
    }
  };
  items[121] = obj;
  obj = {
    key: "getGpuBrand",
    value: function getGpuBrand() {
      return closure_134;
    }
  };
  items[122] = obj;
  return callback(MediaEngineStore, items);
}(importDefault(dependencyMap[86]).Store);
tmp20.displayName = "MediaEngineStore";
obj5 = {
  VOICE_CHANNEL_SELECT: function handleVoiceChannelSelect(currentVoiceChannelId) {
    let channelId;
    let guildId;
    ({ channelId, guildId } = currentVoiceChannelId);
    if (currentVoiceChannelId.currentVoiceChannelId !== channelId) {
      updateVideo(tmp, null);
    }
    if (null == guildId) {
      if (null != channelId) {
        if (!closure_112) {
          closure_112 = true;
          const tmp7 = _getSettings0();
          if (tmp8) {
            mergeSettings({ "Bool(true)": null, "Bool(true)": null });
            result.eachConnection(updateConnectionMuteDeaf);
          }
          const tmp8 = tmp7.mute || tmp7.deaf;
        }
      }
    }
    closure_112 = false;
  },
  VOICE_STATE_UPDATES: function handleVoiceStateUpdates(voiceStates) {
    voiceStates = voiceStates.voiceStates;
    return voiceStates.reduce((arg0, sessionId) => {
      if (closure_78 === sessionId.sessionId) {
        let closure_95 = sessionId.mute || sessionId.suppress;
        const deaf = sessionId.deaf;
        closure_77.eachConnection(closure_159);
        let tmp13 = null != sessionId.guildId && null != sessionId.channelId;
        if (tmp13) {
          tmp13 = null != channelId;
        }
        if (tmp13) {
          tmp13 = channelId !== sessionId.channelId;
        }
        let tmp17 = !closure_112;
        if (!closure_112) {
          tmp17 = null == sessionId.channelId;
        }
        let tmp19 = !tmp13;
        if (!tmp13) {
          tmp19 = !tmp17;
        }
        if (tmp19) {
          tmp19 = closure_99;
        }
        callback(tmp19);
        const channelId = sessionId.channelId;
        return true;
      } else {
        let tmp2 = sessionId.userId === id.getId();
        if (tmp2) {
          tmp2 = null == channelId.getChannelId();
        }
        if (tmp2) {
          callback(false, null);
        }
        return arg0;
      }
    }, false);
  },
  CONNECTION_OPEN: function handleConnectionOpen(sessionId) {
    sessionId = sessionId.sessionId;
    let closure_95 = false;
    let closure_98 = false;
    const tmp = _getSettings0();
    if (supportsAutomaticAudioSubsystem()) {
      if (isReadyToMigrateToSingleAdmOffering()) {
        setAudioSubsystem(constants8.AUTOMATIC);
      } else if (tmp.automaticAudioSubsystem) {
        interpretAutomaticAudioSubsystem();
      }
    }
    if (result.supports(Features.OFFLOAD_ADM_CONTROLS)) {
      const result = result.setOffloadAdmControls(true);
    }
    let enabled = arg1(dependencyMap[29]).isIOS();
    if (enabled) {
      enabled = arg1(dependencyMap[74]).getIOSAudioInterruptExperimentConfig("handleConnectionOpen").enabled;
      const obj2 = arg1(dependencyMap[74]);
    }
    if (enabled) {
      result.updateFieldTrial("WebRTC-Audio-iOS-Holding", "Enabled");
    }
    const obj = arg1(dependencyMap[29]);
    const obj3 = arg1(dependencyMap[29]);
    if (tmp14) {
      const requireModuleResult = importDefault(dependencyMap[68]).requireModule("discord_krisp");
      const setMklZenOverrideEnabled = requireModuleResult.setMklZenOverrideEnabled;
      if (null != setMklZenOverrideEnabled) {
        setMklZenOverrideEnabled.call(requireModuleResult, arg1(dependencyMap[75]).getMklZenOverrideExperimentConfig("handleConnectionOpen").enabled);
        const obj5 = arg1(dependencyMap[75]);
      }
      const obj4 = importDefault(dependencyMap[68]);
    }
    maybeProbeAudioEffects(tmp.inputDeviceId);
    applyRemoteSettings();
  },
  CONNECTION_CLOSED: function handleConnectionClosed() {
    let closure_78 = null;
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
      let closure_108 = false;
      let closure_110;
      let closure_111;
      let closure_107 = false;
      let closure_138 = false;
      timeout3.stop();
      timeout2.stop();
      navigation.reset();
    } else if (constants3.RTC_CONNECTED === state) {
      updateVideo();
    } else if (constants3.DISCONNECTED === state) {
      let closure_144 = {};
      function resetAutoDisabledVideoState() {
        if (0 !== closure_129.size) {
          const DEFAULT = constants.DEFAULT;
          const disabledLocalVideos = callback(DEFAULT).disabledLocalVideos;
          const item = closure_129.forEach((arg0) => {
            const DEFAULT = arg0;
            disabledLocalVideos(closure_3[76])(disabledLocalVideos[arg0], "If you are auto-disabled, then you are also disabled.");
            delete r4[r5];
            closure_77.eachConnection((setLocalVideoDisabled) => setLocalVideoDisabled.setLocalVideoDisabled(setLocalVideoDisabled, false), DEFAULT);
          });
          closure_129.clear();
          const obj = { disabledLocalVideos };
          callback2(obj, DEFAULT, false);
        }
      }();
      resetProbingState();
    }
  },
  AUDIO_SET_TEMPORARY_SELF_MUTE: function handleSetTemporarySelfMute(mute) {
    mute = mute.mute;
    result.eachConnection(updateConnectionMuteDeaf);
  },
  AUDIO_TOGGLE_SELF_MUTE: function handleToggleSelfMute(context) {
    context = context.context;
    const tmp = _getSettings0(context);
    let flag = tmp.deaf;
    if (context === MediaEngineContextTypes.DEFAULT) {
      let obj = importDefault(dependencyMap[32]);
      const permission = obj.requestPermission(NativePermissionTypes.AUDIO);
      if (closure_97) {
        return false;
      }
    }
    if (!(!flag && !tmp.mute)) {
      flag = false;
    }
    if (!context.playSoundEffect) {
      let closure_102 = true;
    }
    obj = { mute: tmp7, deaf: flag };
    mergeSettings(obj, context);
    result.eachConnection(updateConnectionMuteDeaf);
  },
  AUDIO_SET_SELF_MUTE: function handleSetSelfMute(mute) {
    mergeSettings({ mute: mute.mute }, mute.context);
    if (!mute.playSoundEffect) {
      let closure_102 = true;
    }
    result.eachConnection(updateConnectionMuteDeaf);
  },
  AUDIO_TOGGLE_SELF_DEAF: function handleToggleSelfDeafen(context) {
    context = context.context;
    mergeSettings({ deaf: !_getSettings0(context).deaf }, context);
    result.eachConnection(updateConnectionMuteDeaf);
  },
  AUDIO_TOGGLE_LOCAL_MUTE: function handleToggleLocalMute(arg0) {
    let context;
    let userId;
    ({ context, userId } = arg0);
    const arg1 = userId;
    let importDefault;
    if (userId !== store.getId()) {
      const localMutes = _getSettings0(context).localMutes;
      importDefault = localMutes;
      if (localMutes[userId]) {
        delete r6[r3];
      } else {
        localMutes[userId] = true;
      }
      const obj = { localMutes };
      mergeSettings(obj, context);
      result.eachConnection((setLocalMute) => {
        let flag = localMutes[closure_0];
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
    const arg1 = userId;
    ({ videoToggleState, persist, isAutomatic } = arg0);
    let importDefault;
    let tmp2 = persist;
    if (persist) {
      tmp2 = isAutomatic;
    }
    importDefault(dependencyMap[76])(!tmp2, "These are not allowed to both be true.");
    const disabledLocalVideos = _getSettings0(context).disabledLocalVideos;
    importDefault = disabledLocalVideos;
    const hasItem = set1.has(userId);
    let tmp8 = videoToggleState === constants5.AUTO_ENABLED;
    if (!tmp8) {
      tmp8 = videoToggleState === constants5.MANUAL_ENABLED;
    }
    importDefaultResult.info("disableVideo=" + videoToggleState === constants5.DISABLED + " currentlyDisabled=" + null != disabledLocalVideos[userId] && disabledLocalVideos[userId] + " currentlyAutoDisabled=" + hasItem + ", isVideoShown=" + tmp8);
    let tmp12 = hasItem;
    const tmp = importDefault(dependencyMap[76]);
    if (hasItem) {
      tmp12 = !tmp6;
    }
    importDefault(dependencyMap[76])(!tmp12, "If you are auto-disabled, then you are also disabled.");
    let tmp15 = context === MediaEngineContextTypes.DEFAULT;
    if (isAutomatic) {
      isAutomatic = tmp14;
    }
    if (isAutomatic) {
      isAutomatic = tmp15;
    }
    let tmp16 = persist;
    if (persist) {
      tmp16 = tmp14;
    }
    if (tmp16) {
      tmp16 = tmp15;
    }
    importDefaultResult.info("changed=" + videoToggleState === constants5.DISABLED !== (null != disabledLocalVideos[userId] && disabledLocalVideos[userId]) + " isDefaultContext=" + tmp15 + " isUpdateCausedByVideoHealthManager=" + isAutomatic + " isManualToggleByUser=" + tmp16);
    const videoToggleStateMap = _getSettings0(context).videoToggleStateMap;
    let tmp18 = videoToggleStateMap[userId] === constants5.AUTO_PROBING;
    if (tmp18) {
      tmp18 = videoToggleState === constants5.AUTO_ENABLED;
    }
    if (!tmp18) {
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
      if (!closure_130) {
        const _HermesInternal = HermesInternal;
        importDefaultResult.info("isAutoDisableAllowed=" + closure_130 + " - disabling VideoHealthManager");
        const rTCConnection2 = store2.getRTCConnection();
        let tmp36 = null == rTCConnection2;
        let obj5 = rTCConnection2;
        if (!tmp36) {
          const videoHealthManager = rTCConnection2.getVideoHealthManager();
          tmp36 = null == videoHealthManager;
          obj5 = videoHealthManager;
        }
        if (!tmp36) {
          obj5.disable();
        }
      }
      if (isAutomatic) {
        importDefault(dependencyMap[77])(userId, tmp4 ? constants12.AUTO_DISABLE : constants12.AUTO_ENABLE, tmp8);
        if (tmp4) {
          obj8.add(userId);
        } else {
          obj8.delete(userId);
        }
      } else if (tmp16) {
        if (hasItem) {
          if (!tmp4) {
            importDefaultResult.info("disallowing auto-disable for this session because of manual override by user");
            closure_130 = false;
            const rTCConnection3 = store2.getRTCConnection();
            let tmp42 = null == rTCConnection3;
            let obj7 = rTCConnection3;
            if (!tmp42) {
              const videoHealthManager1 = rTCConnection3.getVideoHealthManager();
              tmp42 = null == videoHealthManager1;
              obj7 = videoHealthManager1;
            }
            if (!tmp42) {
              obj7.disable();
            }
            importDefault(dependencyMap[77])(userId, constants12.MANUAL_REENABLE, tmp8);
          }
        }
        importDefault(dependencyMap[77])(userId, tmp4 ? constants12.MANUAL_DISABLE : constants12.MANUAL_ENABLE, tmp8);
      }
      if (tmp15) {
        tmp15 = !tmp4;
      }
      if (tmp15) {
        set1.delete(userId);
      }
      if (tmp4) {
        disabledLocalVideos[userId] = true;
      } else {
        delete r7[r5];
      }
      obj = { disabledLocalVideos };
      mergeSettings(obj, context, persist);
      result.eachConnection((setLocalVideoDisabled) => {
        let tmp3 = null != tmp2;
        if (tmp3) {
          tmp3 = tmp2;
        }
        return setLocalVideoDisabled.setLocalVideoDisabled(userId, tmp3);
      }, context);
    } else {
      importDefault(dependencyMap[77])(userId, tmp4 ? constants12.AUTO_DISABLE : constants12.AUTO_ENABLE, tmp8);
    }
  },
  AUDIO_SET_LOCAL_VOLUME: function handleSetLocalVolume(volume) {
    let context;
    let userId;
    ({ context, userId } = volume);
    const arg1 = userId;
    volume = volume.volume;
    const importDefault = volume;
    if (userId !== store.getId()) {
      const localVolumes = _getSettings0(context).localVolumes;
      if (volume === tmp2) {
        delete r6[r2];
      } else {
        localVolumes[userId] = volume;
      }
      const obj = { localVolumes };
      mergeSettings(obj, context);
      result.eachConnection((setLocalVolume) => setLocalVolume.setLocalVolume(userId, volume), context);
      const tmp2 = context === MediaEngineContextTypes.STREAM ? closure_46 : closure_45;
    }
  },
  AUDIO_SET_AUDIO_MIXER_SETTINGS: function handleSetAudioMixerSettings(settings) {
    settings = settings.settings;
    const arg1 = settings;
    mergeSettings({ audioMixerSettings: settings }, settings.context);
    result.setAudioMixerOptions(settings);
    result.eachConnection((setSpatialAudioEnabled) => setSpatialAudioEnabled.setSpatialAudioEnabled(settings.enabled), MediaEngineContextTypes.DEFAULT);
  },
  AUDIO_SET_LOCAL_PAN: function handleSetLocalPan(left) {
    let context;
    let userId;
    ({ context, userId } = left);
    const arg1 = userId;
    left = left.left;
    const importDefault = left;
    const right = left.right;
    const importAll = right;
    const localPans = _getSettings0(context).localPans;
    localPans[userId] = { left, right };
    mergeSettings({ localPans }, context);
    result.eachConnection((setLocalPan) => setLocalPan.setLocalPan(userId, left, right), context);
  },
  AUDIO_SET_MODE: function handleAudioSetMode(mode) {
    let obj = { mode: mode.mode };
    obj = {};
    const merged = Object.assign(mode.options);
    obj["updatedAt"] = Date.now();
    obj.modeOptions = obj;
    mergeSettings(obj, mode.context);
    result.eachConnection(setInputMode);
  },
  AUDIO_SET_INPUT_VOLUME: function handleAudioSetInputVolume(volume) {
    volume = volume.volume;
    mergeSettings({ inputVolume: clampVolume(volume) });
    result.setInputVolume(volume);
  },
  AUDIO_SET_OUTPUT_VOLUME: function handleAudioSetOutputVolume(volume) {
    volume = volume.volume;
    mergeSettings({ outputVolume: volume });
    result.setOutputVolume(volume);
  },
  AUDIO_SET_INPUT_DEVICE: function handleSetInputDevice(id) {
    const tmp = getDeviceId(obj2, id.id);
    let closure_89 = performance.now();
    mergeSettings({ inputDeviceId: tmp });
    setInputDevice(tmp);
    result.eachConnection(updateConnectionVoiceProcessing);
    let closure_110;
    let closure_111;
    timeout3.stop();
    let closure_138 = false;
    if (obj.getConfig({ location: "MediaEngineStore.handleSetInputDevice" }).resetSilenceWarningOnDeviceChange) {
      let closure_107 = false;
      navigation.reset();
    }
  },
  AUDIO_SET_OUTPUT_DEVICE: function handleSetOutputDevice(id) {
    const obj = {};
    const tmp = getDeviceId(obj3, id.id);
    obj.outputDeviceId = tmp;
    mergeSettings(obj);
    result.setAudioOutputDevice(tmp);
    result.eachConnection(updateConnectionVoiceProcessing);
  },
  AUDIO_SET_ACTIVE_INPUT_PROFILE: function handleSetActiveInputProfile(activeInputProfile) {
    mergeSettings({ activeInputProfile: activeInputProfile.inputProfile });
    result.eachConnection((arg0) => {
      callback(arg0);
      callback2(arg0);
    });
    const result = result.setAudioInputBypassSystemProcessing(_getSettings0().bypassSystemInputProcessing);
    setLoopback();
  },
  AUDIO_SET_ECHO_CANCELLATION: function handleSetEchoCancellation(echoCancellation) {
    let closure_0 = mergeSettings({ echoCancellation: echoCancellation.enabled });
    result.eachConnection((setEchoCancellation) => setEchoCancellation.setEchoCancellation(echoCancellation.echoCancellation));
    setLoopback();
    trackVoiceProcessing(echoCancellation.location);
  },
  AUDIO_SET_SIDECHAIN_COMPRESSION: function handleSetSidechainCompression(enabled) {
    const result = result.setSidechainCompression(mergeSettings({ sidechainCompression: enabled.enabled }).sidechainCompression);
  },
  AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: function handleSetSidechainCompressionStrength(sidechainCompressionStrength) {
    const result = result.setSidechainCompressionStrength(mergeSettings({ sidechainCompressionStrength: sidechainCompressionStrength.strength }).sidechainCompressionStrength);
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
    result.eachConnection((setNoiseSuppression) => setNoiseSuppression.setNoiseSuppression(noiseSuppression.noiseSuppression));
    setLoopback();
    trackVoiceProcessing(enabled.location);
  },
  AUDIO_SET_AUTOMATIC_GAIN_CONTROL: function handleSetAutomaticGainControl(automaticGainControl) {
    let closure_0 = mergeSettings({ automaticGainControl: automaticGainControl.enabled });
    result.eachConnection((arg0) => {
      callback(arg0, automaticGainControl.automaticGainControl);
    });
    setLoopback();
    trackVoiceProcessing(automaticGainControl.location);
  },
  AUDIO_SET_NOISE_CANCELLATION: function handleSetNoiseCancellation(enabled) {
    let closure_0 = mergeSettings({ noiseCancellation: enabled.enabled });
    result.eachConnection((arg0) => {
      callback(arg0, noiseCancellation.noiseCancellation);
    });
    setLoopback();
    trackVoiceProcessing(enabled.location);
  },
  AUDIO_SET_KRISP_MODEL_OVERRIDE: function handleSetKrispModelOverride(model) {
    const result = importDefault(dependencyMap[79]).setKrispModelOverride(model.model);
    model = model.model;
    setLoopback();
  },
  AUDIO_SET_DISPLAY_SILENCE_WARNING: function handleSetSilenceWarning(enabled) {
    mergeSettings({ silenceWarning: enabled.enabled });
  },
  AUDIO_SET_DEBUG_LOGGING: function handleSetDebugLogging(enabled) {
    result.setDebugLogging(enabled.enabled);
  },
  AUDIO_SET_KRISP_SUPPRESSION_LEVEL: function handleSetKrispSuppressionLevel(level) {
    level = level.level;
    let closure_117 = level;
    const result = importDefault(dependencyMap[79]).setKrispSuppressionLevel(level);
  },
  AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: function handleSetNoiseCancellationEnableStats(enabled) {
    if (!obj.isWeb()) {
      enabled = enabled.enabled;
      if (null != result.setNoiseCancellationEnableStats) {
        const result = result.setNoiseCancellationEnableStats(enabled.enabled);
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
    result.eachConnection((setAttenuation) => setAttenuation.setAttenuation(closure_0.attenuation, closure_0.attenuateWhileSpeakingSelf, closure_0.attenuateWhileSpeakingOthers));
  },
  AUDIO_SET_QOS: function handleSetQoS(enabled) {
    enabled = enabled.enabled;
    const arg1 = enabled;
    mergeSettings({ qos: enabled });
    result.eachConnection((setQoS) => setQoS.setQoS(enabled));
  },
  MEDIA_ENGINE_DEVICES: function handleDevices(videoDevices) {
    let obj = { deviceType: constants9.AUDIO_INPUT };
    const intl = arg1(dependencyMap[71]).intl;
    obj.defaultName = intl.string(arg1(dependencyMap[71]).t./QIjDA);
    let closure_91 = convertDevices(videoDevices, obj);
    if (!obj2.isEqual(closure_91, closure_91)) {
      setInputDevice(getDeviceId(closure_91, _getSettings0().inputDeviceId));
      result.eachConnection(updateConnectionVoiceProcessing);
    }
    setOutputDevices(videoDevices);
    let closure_106 = videoDevices.videoDevices.length > 0;
    obj = { deviceType: constants9.VIDEO_INPUT };
    const intl2 = arg1(dependencyMap[71]).intl;
    obj.defaultName = intl2.string(arg1(dependencyMap[71]).t.WKWARY);
    let closure_93 = convertDevices(videoDevices, obj);
    if (closure_99) {
      if (!obj4.isEqual(closure_93, tmp10)) {
        let tmp16 = undefined !== closure_93[closure_100];
        let tmp19 = DISABLED_DEVICE_ID === DEFAULT_DEVICE_ID;
        if (tmp19) {
          let disabled;
          if (null != tmp10[closure_47]) {
            disabled = tmp21.disabled;
          }
          tmp19 = disabled;
        }
        let tmp26 = "Firefox" === importDefault(dependencyMap[72]).name;
        if (tmp26) {
          tmp26 = "" === DISABLED_DEVICE_ID;
        }
        if (tmp26) {
          let name;
          if (null != tmp10[closure_100]) {
            name = tmp29.name;
          }
          tmp26 = "Default" === name;
        }
        if (tmp26) {
          tmp26 = !(null != tmp10[closure_100] && tmp10[closure_100].disabled);
          const tmp35 = null != tmp10[closure_100] && tmp10[closure_100].disabled;
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
      const obj4 = importDefault(dependencyMap[38]);
    }
  },
  AUDIO_VOLUME_CHANGE: function handleVolumeChange(inputVolume) {
    mergeSettings({ inputVolume: clampVolume(inputVolume.inputVolume), outputVolume: inputVolume.outputVolume });
  },
  AUDIO_RESET: function handleReset() {
    const Storage = arg1(dependencyMap[65]).Storage;
    Storage.remove(closure_63);
  },
  AUDIO_INPUT_DETECTED: function handleInputDetected(inputDetected) {
    inputDetected = inputDetected.inputDetected;
    if (null == inputDetected) {
      return false;
    } else {
      let closure_108 = true !== closure_107 && !inputDetected;
      if (inputDetected) {
        closure_107 = true;
        let closure_138 = false;
        timeout3.stop();
        timeout2.stop();
      } else if (_getSettings0().mode === InputModes.VOICE_ACTIVITY) {
        if (closure_107) {
          let obj = importDefault(dependencyMap[78]);
          obj = { location: "MediaEngineStore.handleInputDetected" };
          const config = obj.getConfig(obj);
          const resetSilenceWarningAfterNMinutes = config.resetSilenceWarningAfterNMinutes;
          if (config.enableHardwareSilenceWarning) {
            timeout3.start(MINUTE, () => {
              let obj = callback(closure_3[48]);
              obj = {};
              let name;
              if (null != closure_91[closure_182(undefined, closure_91, closure_156(undefined).inputDeviceId)]) {
                name = tmp.name;
              }
              obj.input_device_name = name;
              obj.rtc_connection_id = rTCConnectionId.getRTCConnectionId();
              obj.track(constants.HARDWARE_MUTE_GUESSED, obj);
              let closure_138 = true;
              closure_74.emitChange();
            });
          }
          if (null != resetSilenceWarningAfterNMinutes) {
            timeout2.start(resetSilenceWarningAfterNMinutes * importDefault(dependencyMap[28]).Millis.MINUTE, () => {
              let closure_107 = false;
              navigation.reset();
            });
          }
        }
      }
    }
  },
  AUDIO_INPUT_DEVICE_OS_CONFIG_FETCHED: function handleOSConfigFetchSuccess(arg0) {
    ({ osVolume: closure_111, osMuted: closure_110 } = arg0);
  },
  AUDIO_SET_SUBSYSTEM: function handleSetAudioSubsystem(subsystem) {
    setAudioSubsystem(subsystem.subsystem);
  },
  AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: function handleBypassSystemInputProcessing(bypassEnabled) {
    bypassEnabled = bypassEnabled.bypassEnabled;
    mergeSettings({ bypassSystemInputProcessing: bypassEnabled });
    const result = result.setAudioInputBypassSystemProcessing(bypassEnabled);
    trackVoiceProcessing(bypassEnabled.location);
  },
  MEDIA_ENGINE_SET_AUDIO_ENABLED: function handleSetAudioEnabled(enabled) {
    enabled = enabled.enabled;
    if (enabled.unmute) {
      mergeSettings({ "Null": null, "Null": null });
    }
    result.eachConnection(updateConnectionMuteDeaf);
  },
  MEDIA_ENGINE_SET_VIDEO_ENABLED: function handleSetVideoEnabled(enabled) {
    const permission = importDefault(dependencyMap[32]).requestPermission(NativePermissionTypes.CAMERA);
    updateVideo(enabled.enabled);
  },
  MEDIA_ENGINE_PERMISSION: function handlePermission(kind) {
    kind = kind.kind;
    if (!kind.granted) {
      if ("audio" === kind) {
        let closure_84 = false;
        result.eachConnection(updateConnectionMuteDeaf);
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
        qualityOptions = {};
      }
      const pidFromDesktopSource = importDefault(dependencyMap[63]).getPidFromDesktopSource(sourceId);
      soundshareId = null;
      soundshareSession = null;
      if (arg1(dependencyMap[29]).isPlatformEmbedded) {
        ({ soundshareId, soundshareSession } = maybeTryHookProcess(pidFromDesktopSource, desktopSettings.sound));
        const tmp17 = maybeTryHookProcess(pidFromDesktopSource, desktopSettings.sound);
      }
      if (DEFAULT2 !== STREAM) {
        if (null != closure_79) {
          result.setGoLiveSource(null, STREAM);
        }
        const STREAM = DEFAULT2;
      }
      let tmp25 = DEFAULT2 === MediaEngineContextTypes.STREAM;
      if (tmp25) {
        tmp25 = closure_99;
      }
      let obj = {};
      obj = { id: sourceId, sourcePid: pidFromDesktopSource, soundshareId, soundshareSession };
      obj.desktopSource = obj;
      ({ resolution: obj9.resolution, frameRate: obj9.frameRate } = qualityOptions);
      obj.quality = {};
      updateVideo(tmp25, obj);
      const obj1 = {};
      const obj6 = importDefault(dependencyMap[63]);
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
          tmp8 = closure_99;
        }
        let qualityOptions1 = settings.qualityOptions;
        if (null == qualityOptions1) {
          qualityOptions1 = {};
        }
        const obj2 = {};
        const obj3 = { videoDeviceGuid, audioDeviceGuid, sound };
        obj2.cameraSource = obj3;
        const obj4 = {};
        ({ resolution: obj4.resolution, frameRate: obj4.frameRate } = qualityOptions1);
        obj2.quality = obj4;
        updateVideo(tmp8, obj2);
      } else {
        updateVideo(closure_99, null);
      }
    }
  },
  MEDIA_ENGINE_SET_VIDEO_DEVICE: function handleSetVideoDevice(id) {
    mergeSettings({ videoDeviceId: getDeviceId(obj4, id.id) });
    updateVideo();
  },
  MEDIA_ENGINE_INTERACTION_REQUIRED: function handleInteractionRequired(required) {
    let flag = required !== required.required;
    if (flag) {
      required = required.required;
      flag = true;
      if (!required.required) {
        result.interact();
        flag = true;
      }
    }
    return flag;
  },
  USER_SETTINGS_MODAL_INIT: handleUserSettingsModal,
  USER_SETTINGS_MODAL_SET_SECTION: handleUserSettingsModal,
  CERTIFIED_DEVICES_SET: function handleSetCertifiedDevices() {
    result.eachConnection(updateConnectionVoiceProcessing);
    return false;
  },
  RPC_APP_CONNECTED: function handleAppConnected(application) {
    set.add(application.application.id);
  },
  RPC_APP_DISCONNECTED: function handleAppDisconnected(application) {
    set.delete(application.application.id);
  },
  OVERLAY_INITIALIZE: function handleOverlayInitialize(mediaEngineState) {
    ({ settingsByContext: closure_82, inputDevices: closure_91, outputDevices: closure_92, appSupported: closure_133, krispModuleLoaded: closure_114, krispFatalError: closure_115, krispVersion: closure_116, goLiveContext: closure_86 } = mediaEngineState.mediaEngineState);
  },
  APP_STATE_UPDATE: function handleFocus(state) {
    state = state.state;
    importDefault(dependencyMap[82]);
    if (state === constants2.BACKGROUND) {
      if (closure_99) {
        if (!tmp2) {
          let closure_105 = true;
          updateVideo(false);
        }
        return true;
      }
    }
    if (state === constants2.ACTIVE) {
      if (closure_105) {
        closure_105 = false;
        updateVideo(true);
      }
    }
    return false;
  },
  SET_CHANNEL_BITRATE: function handleSetChannelBitrate(arg0) {
    const arg1 = arg0;
    result.eachConnection((setBitRate) => setBitRate.setBitRate(setBitRate.bitrate));
  },
  SET_VAD_PERMISSION: function handleVADPermissionChange(hasPermission) {
    if (!hasPermission.hasPermission === closure_97) {
      return false;
    } else {
      closure_97 = tmp;
      result.eachConnection(updateConnectionMuteDeaf);
    }
  },
  SET_NATIVE_PERMISSION: function handleNativePermissionChange(permissionType) {
    permissionType = permissionType.permissionType;
    if (NativePermissionTypes.AUDIO === permissionType) {
      let closure_128 = true;
      result.eachConnection(updateConnectionMuteDeaf);
    } else if (NativePermissionTypes.CAMERA === permissionType) {
      let tmp3 = !tmp;
      if (!tmp) {
        tmp3 = closure_99;
      }
      if (tmp3) {
        updateVideo(false);
      }
    } else {
      return false;
    }
  },
  SET_CHANNEL_VIDEO_QUALITY_MODE: function handleSetChannelVideoQualityMode(arg0) {
    const arg1 = arg0;
    result.eachConnection((applyVideoQualityMode) => applyVideoQualityMode.applyVideoQualityMode(applyVideoQualityMode.mode));
  },
  MEDIA_ENGINE_SET_AEC_DUMP: function handleSetAecDump(aecDumpEnabled) {
    result.setAecDump(mergeSettings({ aecDumpEnabled: aecDumpEnabled.enabled }).aecDumpEnabled);
  },
  MEDIA_ENGINE_SET_OPENH264_ENABLED: function handleSetOpenH264Enabled(enabled) {
    enabled = enabled.enabled;
    mergeSettings({ openH264Enabled: enabled });
    let tmp2 = null == importDefault(dependencyMap[68]);
    if (!tmp2) {
      tmp2 = null == importDefault(dependencyMap[68]).setOpenH264Enabled;
    }
    if (!tmp2) {
      importDefault(dependencyMap[68]).setOpenH264Enabled(enabled);
      const obj = importDefault(dependencyMap[68]);
    }
  },
  MEDIA_ENGINE_RESET_SETTINGS: function handleResetSettings(overrides) {
    const arg1 = overrides.overrides;
    const values = Object.values(MediaEngineContextTypes);
    let closure_82 = values.reduce((arg0, arg1) => {
      const tmp = callback2();
      arg0[arg1] = callback(closure_3[38]).merge(tmp, overrides[arg1]);
      return arg0;
    }, {});
    const Storage = arg1(dependencyMap[65]).Storage;
    const result = Storage.set(closure_63, closure_82);
    applySettings();
  },
  CHANNEL_DELETE: function handleChannelDelete() {
    if (closure_99) {
      if (null == store2.getRTCConnectionId()) {
        updateVideo(false, null);
      }
    }
    return false;
  },
  MEDIA_ENGINE_NOISE_CANCELLATION_ERROR: function handleNoiseCancellationError(code) {
    if (code.code === NoiseCancellerError.KRISP_CPU_OVERUSE) {
      closure_144.noiseCancellation = false;
      closure_144.noiseSuppression = true;
      let closure_0 = _getSettings0();
      result.eachConnection((arg0) => {
        callback(arg0, noiseCancellation.noiseCancellation);
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
      closure_144.modeOptions = obj;
      result.eachConnection((arg0) => {
        callback(arg0);
      });
      flag = true;
    }
    return flag;
  },
  MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: function handleNoiseCancellationErrorReset() {
    let flag = closure_122;
    if (closure_122) {
      closure_122 = false;
      flag = true;
    }
    return flag;
  },
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: function handleApplyMediaFilterSettings(settings) {
    const result = result.applyMediaFilterSettings(settings.settings);
    result.finally(() => {
      let closure_123 = false;
      closure_74.emitChange();
    });
  },
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: function handleApplyMediaFilterSettingsStart() {
    let closure_123 = true;
  },
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: function handleApplyMediaFilterSettingsError() {
    let closure_123 = false;
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
    let obj = arg1(dependencyMap[81]);
    if (obj.isDecoupledClipsEnabled()) {
      if (null != importDefault(dependencyMap[64])) {
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
          result.setClipsSource(null);
          if (obj12.isWindows()) {
            if (null != obj.desktopSource.soundshareId) {
              let obj2 = importAll(dependencyMap[40]);
              const result = obj2.cancelAttachToProcess(obj.desktopSource.soundshareId);
            } else {
              let videoHook = null != obj.desktopSource.sourcePid;
              if (videoHook) {
                videoHook = _getSettings0().videoHook;
              }
              if (videoHook) {
                let obj1 = importAll(dependencyMap[40]);
                const result1 = obj1.cancelAttachToProcess(obj.desktopSource.sourcePid);
              }
            }
          }
          const obj12 = arg1(dependencyMap[29]);
        }
        let obj3 = importDefault(dependencyMap[63]);
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
          const DisableHookFramePacerExperiment = arg1(dependencyMap[43]).DisableHookFramePacerExperiment;
          obj1 = { location: "handleClipsInit" };
          tmp26 = !DisableHookFramePacerExperiment.getConfig(obj1).enabled;
        }
        let enabled = videoHook2;
        if (videoHook2) {
          const VideoHookDX12Experiment = arg1(dependencyMap[44]).VideoHookDX12Experiment;
          obj2 = { location: "handleClipsInit" };
          enabled = VideoHookDX12Experiment.getConfig(obj2).enabled;
        }
        const UpscaleSmallCapturedFramesExperiment = arg1(dependencyMap[45]).UpscaleSmallCapturedFramesExperiment;
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
        obj4.applicationName = applicationName.applicationName;
        obj4.videoEncoderExperiments = tmp20.getVideoEncoderExperiments(MediaEngineContextTypes.STREAM, "streamer");
        result.setClipsSource(obj4);
      }
    }
    return false;
  },
  CLIPS_RESTART: function handleClipsRestart() {
    let closure_80 = null;
  },
  CLIPS_SETTINGS_UPDATE: function handleClipsSettingsUpdate(settings) {
    settings = settings.settings;
    if (false === settings.decoupledClipsEnabled) {
      let closure_80 = null;
      result.setClipsSource(null);
    }
    if (false === settings.clipsEnabled) {
      closure_80 = null;
    }
  },
  MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: function handleSetEnableHardwareMuteNotice(enabled) {
    enabled = enabled.enabled;
  },
  MEDIA_ENGINE_SET_DEVICE_AUDIO_EFFECTS: function handleSetDeviceAudioEffects(active) {
    closure_125[active.deviceId] = { active: active.active, available: active.available };
  }
};
tmp20 = new tmp20(importDefault(dependencyMap[49]), obj5);
const importDefaultResult2 = importDefault(dependencyMap[32]);
const result1 = arg1(dependencyMap[87]).fileFinishedImporting("stores/MediaEngineStore.tsx");

export default tmp20;
export const WINDOWS_NOISE_SUPPRESSION_EFFECT = "deep_noise_suppression";
export const LINUX_OPENH264_URL = "https://ciscobinary.openh264.org/libopenh264-2.5.1-linux64.7.so.bz2";
export const LINUX_OPENH264_SHA256 = "d828a944d4d2bb64195ada89cf2cde9bc41733b1547d0788ef49fb8cb231b76f";
export const DeviceFormFactor = obj;
