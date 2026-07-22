// Module ID: 4224
// Function ID: 36869
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 4224 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function toVolumePercent(arg0) {
  let tmp = arg0;
  if (null == arg0) {
    tmp = closure_18;
  }
  return tmp / closure_18;
}
function toScaledValue(arg0, arg1, arg2) {
  return arg1 + (arg2 - arg1) * arg0 / 100;
}
function clipsBitratePercentToKbps(arg0) {
  if (null != arg0) {
    const _Math = Math;
    const _Math2 = Math;
    const _Math3 = Math;
    return Math.round(6000 * Math.min(100, Math.max(10, arg0)) / 100);
  }
}
importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let closure_8 = importDefault(dependencyMap[6]);
let closure_9 = importDefault(dependencyMap[7]);
({ QUEUE_METRICS_INTERVAL_MS: closure_10, SIDECHAIN_COMPRESSION_MAX_RATIO: closure_11, SIDECHAIN_COMPRESSION_MAX_THRESHOLD: closure_12, SIDECHAIN_COMPRESSION_MIN_RATIO: closure_13, SIDECHAIN_COMPRESSION_MIN_THRESHOLD: closure_14, ProcessPriority: closure_15 } = arg1(dependencyMap[8]));
const tmp3 = arg1(dependencyMap[8]);
({ AudioSubsystems: closure_16, ClipsRecordingEvent: closure_17, DEFAULT_VOLUME: closure_18, DeviceTypes: closure_19, DISABLED_DEVICE_ID: closure_20, Features: closure_21, MediaEngineContextTypes: closure_22, NativeFeatures: closure_23, WATCHDOG_TIMEOUT_MS: closure_24 } = arg1(dependencyMap[9]));
const tmp4 = arg1(dependencyMap[9]);
const tmp5 = (arg0) => {
  class MediaEngineNative {
    constructor() {
      self = this;
      tmp = MediaEngineNative(this, MediaEngineNative);
      obj = closure_8(MediaEngineNative);
      tmp2 = closure_7;
      if (closure_25()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_8;
        constructResult = Reflect.construct(obj, [], closure_8(self).constructor);
      } else {
        constructResult = obj.apply(self, undefined);
      }
      tmp2Result = tmp2(self, constructResult);
      f37048 = tmp2Result;
      tmp2Result.Video = f37045(f37040[10]);
      tmp2Result.Camera = f37045(f37040[11]);
      tmp2Result.audioInputDeviceId = closure_20;
      tmp2Result.audioOutputDeviceId = closure_20;
      tmp2Result.videoInputDeviceId = closure_20;
      set = new Set();
      tmp2Result.connections = set;
      tmp2Result.lastVoiceActivity = -1;
      tmp2Result.audioSubsystem = "standard";
      tmp2Result.audioLayer = "";
      tmp2Result.deviceChangeGeneration = 0;
      tmp2Result.consecutiveWatchdogFailures = 0;
      tmp2Result.codecSurvey = null;
      tmp2Result.clipsRecordingEventContext = { <string:1840316614>: 24, <string:281155572>: 8, <string:717891973>: 3 };
      tmp2Result.clipsRecordingEventHandlerRegistered = false;
      logger = new f37048(f37040[12]).Logger("MediaEngineNative");
      tmp2Result.logger = logger;
      tmp2Result.handleDeviceChange = (items, items, items) => {
        let items1 = items;
        let items2 = items;
        if (items === undefined) {
          items = [];
        }
        if (items1 === undefined) {
          items1 = [];
        }
        if (items2 === undefined) {
          items2 = [];
        }
        tmp2Result.deviceChangeGeneration = tmp2Result.deviceChangeGeneration + 1;
        const obj = tmp2Result(closure_2[14]);
        const sanitizeDevicesResult = tmp2Result(closure_2[14]).sanitizeDevices(constants.AUDIO_INPUT, items);
        const obj2 = tmp2Result(closure_2[14]);
        const sanitizeDevicesResult1 = tmp2Result(closure_2[14]).sanitizeDevices(constants.AUDIO_OUTPUT, items1);
        tmp2Result.emit(tmp2Result(closure_2[13]).MediaEngineEvent.DeviceChange, sanitizeDevicesResult, sanitizeDevicesResult1, tmp2Result(closure_2[14]).sanitizeDevices(constants.VIDEO_INPUT, items2));
      };
      tmp2Result.handleVolumeChange = (arg0, arg1) => {
        tmp2Result.emit(tmp2Result(closure_2[13]).MediaEngineEvent.VolumeChange, arg0 * closure_18, arg1 * closure_18);
      };
      tmp2Result.handleVoiceActivity = (arg0, arg1) => {
        const timestamp = Date.now();
        let tmp2 = tmp2Result.listenerCount(tmp2Result(closure_2[13]).MediaEngineEvent.VoiceActivity) > 0;
        if (tmp2) {
          let tmp4 = -1 === tmp2Result.lastVoiceActivity;
          if (!tmp4) {
            const _Date = Date;
            tmp4 = Date.now() - tmp2Result.lastVoiceActivity > 20;
          }
          tmp2 = tmp4;
        }
        if (tmp2) {
          tmp2Result.lastVoiceActivity = timestamp;
          tmp2Result.emit(tmp2Result(closure_2[13]).MediaEngineEvent.VoiceActivity, arg0, arg1);
        }
      };
      tmp2Result.handleActiveSinksChange = (arg0, arg1) => {
        const connections = arg0.connections;
        const item = connections.forEach((setHasActiveVideoOutputSink) => setHasActiveVideoOutputSink.setHasActiveVideoOutputSink(setHasActiveVideoOutputSink, arg1, "MediaEngineNative.handleActiveSinksChange"));
      };
      tmp2Result.handleNewListener = (arg0) => {
        if (tmp2Result(closure_2[13]).MediaEngineEvent.VoiceActivity === arg0) {
          if (null != obj.getVoiceEngine().setEmitVADLevel2) {
            const voiceEngine = tmp2Result(closure_2[15]).getVoiceEngine();
            voiceEngine.setEmitVADLevel2(true);
            const obj4 = tmp2Result(closure_2[15]);
          } else {
            const voiceEngine1 = tmp2Result(closure_2[15]).getVoiceEngine();
            voiceEngine1.setEmitVADLevel(true, false, {});
            const obj2 = tmp2Result(closure_2[15]);
          }
          const obj = tmp2Result(closure_2[15]);
        } else if (tmp2Result(closure_2[13]).MediaEngineEvent.DeviceChange === arg0) {
          const items = [tmp2Result.deviceChangeGeneration.getAudioInputDevices(), tmp2Result.deviceChangeGeneration.getAudioOutputDevices(), tmp2Result.deviceChangeGeneration.getVideoInputDevices()];
          Promise.all(items).then((arg0) => {
            let tmp;
            let tmp2;
            let tmp3;
            [tmp, tmp2, tmp3] = arg0;
            if (deviceChangeGeneration === deviceChangeGeneration.deviceChangeGeneration) {
              deviceChangeGeneration.emit(deviceChangeGeneration(closure_2[13]).MediaEngineEvent.DeviceChange, tmp, tmp2, tmp3);
            }
          });
          const allPromises = Promise.all(items);
        }
      };
      tmp2Result.handleRemoveListener = (arg0) => {
        if (arg0 === tmp2Result(closure_2[13]).MediaEngineEvent.VoiceActivity) {
          if (null != obj5.getVoiceEngine().setEmitVADLevel2) {
            const voiceEngine = tmp2Result(closure_2[15]).getVoiceEngine();
            voiceEngine.setEmitVADLevel2(tmp2Result.listenerCount(tmp2Result(closure_2[13]).MediaEngineEvent.VoiceActivity) > 0);
            const obj3 = tmp2Result(closure_2[15]);
          } else {
            const voiceEngine1 = tmp2Result(closure_2[15]).getVoiceEngine();
            voiceEngine1.setEmitVADLevel(tmp2Result.listenerCount(tmp2Result(closure_2[13]).MediaEngineEvent.VoiceActivity) > 0, false, {});
            const obj = tmp2Result(closure_2[15]);
          }
          const obj5 = tmp2Result(closure_2[15]);
        }
      };
      tmp2Result.handleVideoInputInitialization = (arg0) => {
        tmp2Result.emit(tmp2Result(closure_2[13]).MediaEngineEvent.VideoInputInitialized, arg0);
      };
      tmp2Result.handleAudioInputInitialization = (arg0) => {
        tmp2Result.emit(tmp2Result(closure_2[13]).MediaEngineEvent.AudioInputInitialized, arg0);
      };
      tmp2Result.handleNativeScreenSharePickerUpdate = (arg0, arg1) => {
        tmp2Result.emit(tmp2Result(closure_2[13]).MediaEngineEvent.NativeScreenSharePickerUpdate, arg0, arg1);
      };
      tmp2Result.handleNativeScreenSharePickerCancel = (arg0) => {
        tmp2Result.emit(tmp2Result(closure_2[13]).MediaEngineEvent.NativeScreenSharePickerCancel, arg0);
      };
      tmp2Result.handleNativeScreenSharePickerError = (arg0) => {
        tmp2Result.emit(tmp2Result(closure_2[13]).MediaEngineEvent.NativeScreenSharePickerError, arg0);
      };
      tmp2Result.handleAudioDeviceModuleErrorCallback = (arg0, arg1) => {
        if (-100 !== arg0) {
          tmp2Result.emit(tmp2Result(closure_2[13]).MediaEngineEvent.AudioDeviceModuleError, "RustAudioDeviceModule", arg0, arg1);
        }
      };
      tmp2Result.handleVideoCodecErrorCallback = (arg0) => {
        tmp2Result.emit(tmp2Result(closure_2[13]).MediaEngineEvent.VideoCodecError, arg0);
      };
      tmp2Result.handleVoiceProcessingErrorCallback = (arg0) => {
        tmp2Result.emit(tmp2Result(closure_2[13]).MediaEngineEvent.VoiceProcessingError, arg0);
      };
      tmp2Result.handleVideoFilterErrorCallback = (arg0, arg1) => {
        tmp2Result.emit(tmp2Result(closure_2[13]).MediaEngineEvent.VideoFilterError, arg0, arg1);
      };
      tmp2Result.handleSystemMicrophoneModeChangeCallback = (arg0) => {
        tmp2Result.emit(tmp2Result(closure_2[13]).MediaEngineEvent.SystemMicrophoneModeChange, arg0);
      };
      logger = tmp2Result.logger;
      enableNativeLoggerResult = logger.enableNativeLogger(true);
      obj3 = f37048(f37040[15]);
      voiceEngine = obj3.getVoiceEngine();
      result = voiceEngine.setDeviceChangeCallback(tmp2Result.handleDeviceChange);
      result1 = voiceEngine.setVolumeChangeCallback(tmp2Result.handleVolumeChange);
      setOnVoiceCallbackResult = voiceEngine.setOnVoiceCallback(tmp2Result.handleVoiceActivity);
      if (null != voiceEngine.setVideoInputInitializationCallback) {
        result2 = voiceEngine.setVideoInputInitializationCallback(tmp2Result.handleVideoInputInitialization);
      }
      if (null != voiceEngine.setAudioInputInitializationCallback) {
        result3 = voiceEngine.setAudioInputInitializationCallback(tmp2Result.handleAudioInputInitialization);
      }
      if (null != voiceEngine.setAudioDeviceModuleErrorCallback) {
        result4 = voiceEngine.setAudioDeviceModuleErrorCallback(tmp2Result.handleAudioDeviceModuleErrorCallback);
      }
      setTransportOptionsResult = voiceEngine.setTransportOptions({});
      if (null != voiceEngine.setNativeScreenSharePickerCallbacks) {
        result5 = voiceEngine.setNativeScreenSharePickerCallbacks(tmp2Result.handleNativeScreenSharePickerUpdate, tmp2Result.handleNativeScreenSharePickerCancel, tmp2Result.handleNativeScreenSharePickerError);
      }
      if (null != voiceEngine.setVideoCodecErrorCallback) {
        result6 = voiceEngine.setVideoCodecErrorCallback(tmp2Result.handleVideoCodecErrorCallback);
      }
      if (null != voiceEngine.setVoiceProcessingErrorCallback) {
        result7 = voiceEngine.setVoiceProcessingErrorCallback(tmp2Result.handleVoiceProcessingErrorCallback);
      }
      if (null != voiceEngine.setVideoFilterErrorCallback) {
        result8 = voiceEngine.setVideoFilterErrorCallback(tmp2Result.handleVideoFilterErrorCallback);
      }
      if (null != voiceEngine.setSystemMicrophoneModeChangeCallback) {
        result9 = voiceEngine.setSystemMicrophoneModeChangeCallback(tmp2Result.handleSystemMicrophoneModeChangeCallback);
      }
      onResult = tmp2Result.on("removeListener", tmp2Result.handleRemoveListener);
      onResult1 = tmp2Result.on("newListener", tmp2Result.handleNewListener);
      obj5 = f37048(f37040[15]);
      if (null != obj5.getVoiceEngine().getAudioSubsystem) {
        tmp28 = f37048;
        tmp29 = f37040;
        obj9 = f37048(f37040[15]);
        voiceEngine1 = obj9.getVoiceEngine();
        audioSubsystem = voiceEngine1.getAudioSubsystem((audioSubsystem, audioLayer) => {
          tmp2Result.audioSubsystem = audioSubsystem;
          tmp2Result.audioLayer = audioLayer;
        });
      } else {
        tmp23 = f37048;
        tmp24 = f37040;
        obj6 = f37048(f37040[15]);
        if (null != obj6.getVoiceEngine().getUseLegacyAudioDevice) {
          tmp25 = f37048;
          tmp26 = f37040;
          obj7 = f37048(f37040[15]);
          voiceEngine2 = obj7.getVoiceEngine();
          tmp27 = closure_16;
          tmp2Result.audioSubsystem = voiceEngine2.getUseLegacyAudioDevice() ? tmp27.LEGACY : tmp27.STANDARD;
        }
      }
      if (null != voiceEngine.pingVoiceThread) {
        watchdogTickResult = tmp2Result.watchdogTick();
      }
      if (null != voiceEngine.setActiveSinksChangeCallback) {
        result10 = voiceEngine.setActiveSinksChangeCallback(tmp2Result.handleActiveSinksChange);
      }
      if (null != voiceEngine.setOnClipsMlDetection) {
        result11 = voiceEngine.setOnClipsMlDetection((arg0) => {
          if (arg0.length > 0) {
            tmp2Result.emit(tmp2Result(closure_2[13]).MediaEngineEvent.ClipsMlDetection, arg0);
          }
        });
      }
      tmp34 = f37045(f37040[16])(tmp2Result);
      tmp35 = function pollQueueMetrics(tmp2Result) {
        function pollMetrics() {
          return _pollMetrics(...arguments);
        }
        async function _pollMetrics() {
          let lib;
          if (!closure_1) {
            lib = lib(closure_2[15]).getVoiceEngine();
            const tmp6 = yield new Promise((arg0) => {
              let closure_0 = arg0;
              if (null != closure_0.pollQueueMetrics) {
                closure_0.pollQueueMetrics((arg0) => {
                  arg0(arg0);
                });
              }
            });
            tmp6.periodMs = closure_10;
            lib.emit(lib(closure_2[13]).MediaEngineEvent.VoiceQueueMetrics, tmp6);
            const _setTimeout = setTimeout;
            const timerId = setTimeout(closure_2, closure_10);
            const obj = lib(closure_2[15]);
          }
        }
        let closure_1 = false;
        tmp2Result.on(tmp2Result(pollMetrics[13]).MediaEngineEvent.Destroy, () => {
          let closure_1 = true;
          return true;
        });
        const timerId = setTimeout(pollMetrics, closure_10);
      }(tmp2Result);
      return tmp2Result;
    }
  }
  let closure_5 = MediaEngineNative;
  callback3(MediaEngineNative, arg0);
  let obj = {
    key: "destroy",
    value() {
      this.eachConnection((destroy) => destroy.destroy());
      this.emit(callback(closure_2[13]).MediaEngineEvent.Destroy);
      this.removeAllListeners();
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "interact",
    value() {

    }
  };
  items[1] = obj;
  obj = {
    key: "supported",
    value() {
      return true;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "supports",
    value(arg0) {
      if (constants4.LEGACY_AUDIO_SUBSYSTEM === arg0) {
        let isMatch = callback;
        isMatch = closure_2;
        isMatch = constants6;
        return callback(closure_2[15]).supportsFeature(constants6.VOICE_LEGACY_SUBSYSTEM);
      } else {
        isMatch = constants4;
        if (constants4.EXPERIMENTAL_AUDIO_SUBSYSTEM === arg0) {
          isMatch = callback;
          isMatch = closure_2;
          isMatch = constants6;
          return callback(closure_2[15]).supportsFeature(constants6.VOICE_EXPERIMENTAL_SUBSYSTEM);
        } else {
          isMatch = constants4;
          if (constants4.AUTOMATIC_AUDIO_SUBSYSTEM === arg0) {
            isMatch = callback;
            isMatch = closure_2;
            isMatch = constants6;
            return callback(closure_2[15]).supportsFeature(constants6.VOICE_AUTOMATIC_SUBSYSTEM);
          } else {
            isMatch = constants4;
            if (constants4.AUDIO_SUBSYSTEM_DEFERRED_SWITCH === arg0) {
              isMatch = callback;
              isMatch = closure_2;
              isMatch = constants6;
              return callback(closure_2[15]).supportsFeature(constants6.VOICE_SUBSYSTEM_DEFERRED_SWITCH);
            } else {
              isMatch = constants4;
              if (constants4.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING === arg0) {
                isMatch = callback;
                isMatch = closure_2;
                isMatch = constants6;
                return callback(closure_2[15]).supportsFeature(constants6.VOICE_BYPASS_SYSTEM_AUDIO_INPUT_PROCESSING);
              } else {
                isMatch = constants4;
                if (constants4.DEBUG_LOGGING === arg0) {
                  isMatch = callback;
                  isMatch = closure_2;
                  isMatch = constants6;
                  return callback(closure_2[15]).supportsFeature(constants6.DEBUG_LOGGING);
                } else {
                  isMatch = constants4;
                  if (constants4.SOUNDSHARE === arg0) {
                    isMatch = callback;
                    isMatch = closure_2;
                    isMatch = constants6;
                    return callback(closure_2[15]).supportsFeature(constants6.SOUNDSHARE);
                  } else {
                    isMatch = constants4;
                    if (constants4.SCREEN_SOUNDSHARE === arg0) {
                      isMatch = callback;
                      isMatch = closure_2;
                      isMatch = constants6;
                      return callback(closure_2[15]).supportsFeature(constants6.SCREEN_SOUNDSHARE);
                    } else {
                      isMatch = constants4;
                      if (constants4.ELEVATED_HOOK === arg0) {
                        isMatch = callback;
                        isMatch = closure_2;
                        isMatch = constants6;
                        return callback(closure_2[15]).supportsFeature(constants6.ELEVATED_HOOK);
                      } else {
                        isMatch = constants4;
                        if (constants4.LOOPBACK === arg0) {
                          isMatch = callback;
                          isMatch = closure_2;
                          isMatch = constants6;
                          return callback(closure_2[15]).supportsFeature(constants6.LOOPBACK);
                        } else {
                          isMatch = constants4;
                          if (constants4.WUMPUS_VIDEO === arg0) {
                            isMatch = callback;
                            isMatch = closure_2;
                            isMatch = constants6;
                            return callback(closure_2[15]).supportsFeature(constants6.WUMPUS_VIDEO);
                          } else {
                            isMatch = constants4;
                            if (constants4.HYBRID_VIDEO === arg0) {
                              isMatch = callback;
                              isMatch = closure_2;
                              isMatch = constants6;
                              return callback(closure_2[15]).supportsFeature(constants6.HYBRID_VIDEO);
                            } else {
                              isMatch = constants4;
                              if (constants4.ATTENUATION !== arg0) {
                                isMatch = constants4;
                                if (constants4.VIDEO_HOOK !== arg0) {
                                  isMatch = constants4;
                                  if (constants4.EXPERIMENTAL_SOUNDSHARE === arg0) {
                                    return callback(closure_2[15]).supportsFeature(constants6.SOUNDSHARE_LOOPBACK);
                                  } else {
                                    isMatch = constants4;
                                    if (constants4.REMOTE_LOCUS_NETWORK_CONTROL === arg0) {
                                      return callback(closure_2[15]).supportsFeature(constants6.REMOTE_LOCUS_NETWORK_CONTROL);
                                    } else {
                                      isMatch = constants4;
                                      if (constants4.SCREEN_PREVIEWS === arg0) {
                                        return callback(closure_2[15]).supportsFeature(constants6.SCREEN_PREVIEWS);
                                      } else {
                                        isMatch = constants4;
                                        if (constants4.CLIPS === arg0) {
                                          return callback(closure_2[15]).supportsFeature(constants6.CLIPS);
                                        } else {
                                          isMatch = constants4;
                                          if (constants4.CLIPS_RECORDING_READY_EVENTS === arg0) {
                                            return callback(closure_2[15]).supportsFeature(constants6.CLIPS_RECORDING_READY_EVENTS);
                                          } else {
                                            isMatch = constants4;
                                            if (constants4.WINDOW_PREVIEWS === arg0) {
                                              return callback(closure_2[15]).supportsFeature(constants6.WINDOW_PREVIEWS);
                                            } else {
                                              isMatch = constants4;
                                              if (constants4.AUDIO_DEBUG_STATE === arg0) {
                                                return callback(closure_2[15]).supportsFeature(constants6.AUDIO_DEBUG_STATE);
                                              } else {
                                                isMatch = constants4;
                                                if (constants4.CONNECTION_REPLAY === arg0) {
                                                  return callback(closure_2[15]).supportsFeature(constants6.CONNECTION_REPLAY);
                                                } else {
                                                  isMatch = constants4;
                                                  if (constants4.SIMULCAST === arg0) {
                                                    let supportsFeatureResult = callback(closure_2[15]).supportsFeature(constants6.SIMULCAST);
                                                    if (supportsFeatureResult) {
                                                      supportsFeatureResult = callback(closure_2[15]).supportsFeature(constants6.SIMULCAST_BUGFIX);
                                                      const obj20 = callback(closure_2[15]);
                                                    }
                                                    return supportsFeatureResult;
                                                  } else {
                                                    isMatch = constants4;
                                                    if (constants4.RTC_REGION_RANKING === arg0) {
                                                      return callback(closure_2[15]).supportsFeature(constants6.RTC_REGION_RANKING);
                                                    } else {
                                                      isMatch = constants4;
                                                      if (constants4.ELECTRON_VIDEO === arg0) {
                                                        return callback(closure_2[15]).supportsFeature(constants6.ELECTRON_VIDEO);
                                                      } else {
                                                        isMatch = constants4;
                                                        if (constants4.MEDIAPIPE === arg0) {
                                                          return callback(closure_2[15]).supportsFeature(constants6.MEDIAPIPE);
                                                        } else {
                                                          isMatch = constants4;
                                                          if (constants4.FIXED_KEYFRAME_INTERVAL === arg0) {
                                                            return callback(closure_2[15]).supportsFeature(constants6.FIXED_KEYFRAME_INTERVAL);
                                                          } else {
                                                            isMatch = constants4;
                                                            if (constants4.FIRST_FRAME_CALLBACK === arg0) {
                                                              return callback(closure_2[15]).supportsFeature(constants6.FIRST_FRAME_CALLBACK);
                                                            } else {
                                                              isMatch = constants4;
                                                              if (constants4.REMOTE_USER_MULTI_STREAM === arg0) {
                                                                return callback(closure_2[15]).supportsFeature(constants6.REMOTE_USER_MULTI_STREAM);
                                                              } else {
                                                                isMatch = constants4;
                                                                if (constants4.IMAGE_QUALITY_MEASUREMENT === arg0) {
                                                                  return callback(closure_2[15]).supportsFeature(constants6.IMAGE_QUALITY_MEASUREMENT);
                                                                } else {
                                                                  isMatch = constants4;
                                                                  if (constants4.GO_LIVE_HARDWARE === arg0) {
                                                                    return callback(closure_2[15]).supportsFeature(constants6.GO_LIVE_HARDWARE);
                                                                  } else {
                                                                    isMatch = constants4;
                                                                    if (constants4.SCREEN_CAPTURE_KIT === arg0) {
                                                                      return callback(closure_2[15]).supportsFeature(constants6.SCREEN_CAPTURE_KIT);
                                                                    } else {
                                                                      isMatch = constants4;
                                                                      if (constants4.NATIVE_SCREENSHARE_PICKER === arg0) {
                                                                        return callback(closure_2[15]).supportsFeature(constants6.NATIVE_SCREENSHARE_PICKER);
                                                                      } else {
                                                                        isMatch = constants4;
                                                                        if (constants4.MLS_PAIRWISE_FINGERPRINTS === arg0) {
                                                                          return callback(closure_2[15]).supportsFeature(constants6.MLS_PAIRWISE_FINGERPRINTS);
                                                                        } else {
                                                                          isMatch = constants4;
                                                                          if (constants4.OFFLOAD_ADM_CONTROLS === arg0) {
                                                                            return callback(closure_2[15]).supportsFeature(constants6.OFFLOAD_ADM_CONTROLS);
                                                                          } else {
                                                                            isMatch = constants4;
                                                                            if (constants4.VAAPI === arg0) {
                                                                              return callback(closure_2[15]).supportsFeature(constants6.VAAPI);
                                                                            } else {
                                                                              isMatch = constants4;
                                                                              if (constants4.GAMESCOPE_CAPTURE === arg0) {
                                                                                return callback(closure_2[15]).supportsFeature(constants6.GAMESCOPE_CAPTURE);
                                                                              } else {
                                                                                isMatch = constants4;
                                                                                if (constants4.ASYNC_VIDEO_INPUT_DEVICE_INIT === arg0) {
                                                                                  return callback(closure_2[15]).supportsFeature(constants6.ASYNC_VIDEO_INPUT_DEVICE_INIT);
                                                                                } else {
                                                                                  isMatch = constants4;
                                                                                  if (constants4.PORT_AWARE_LATENCY_TESTING === arg0) {
                                                                                    return callback(closure_2[15]).supportsFeature(constants6.PORT_AWARE_LATENCY_TESTING);
                                                                                  } else {
                                                                                    isMatch = constants4;
                                                                                    if (constants4.SPATIAL_AUDIO === arg0) {
                                                                                      return callback(closure_2[15]).supportsFeature(constants6.SPATIAL_AUDIO);
                                                                                    } else {
                                                                                      isMatch = constants4;
                                                                                      if (constants4.KRISP_NATIVE_ERROR === arg0) {
                                                                                        return callback(closure_2[15]).supportsFeature(constants6.KRISP_NATIVE_ERROR);
                                                                                      } else {
                                                                                        isMatch = constants4;
                                                                                        if (constants4.DIAGNOSTICS !== arg0) {
                                                                                          isMatch = constants4;
                                                                                          if (constants4.NATIVE_PING !== arg0) {
                                                                                            isMatch = constants4;
                                                                                            if (constants4.AUTOMATIC_VAD !== arg0) {
                                                                                              isMatch = constants4;
                                                                                              if (constants4.AUDIO_INPUT_DEVICE !== arg0) {
                                                                                                isMatch = constants4;
                                                                                                if (constants4.AUDIO_OUTPUT_DEVICE !== arg0) {
                                                                                                  isMatch = constants4;
                                                                                                  if (constants4.QOS !== arg0) {
                                                                                                    isMatch = constants4;
                                                                                                    if (constants4.VOICE_PROCESSING !== arg0) {
                                                                                                      isMatch = constants4;
                                                                                                      if (constants4.AUTO_ENABLE !== arg0) {
                                                                                                        isMatch = constants4;
                                                                                                        if (constants4.VIDEO !== arg0) {
                                                                                                          isMatch = constants4;
                                                                                                          if (constants4.DESKTOP_CAPTURE !== arg0) {
                                                                                                            isMatch = constants4;
                                                                                                            if (constants4.DESKTOP_CAPTURE_FORMAT !== arg0) {
                                                                                                              isMatch = constants4;
                                                                                                              if (constants4.DESKTOP_CAPTURE_APPLICATIONS !== arg0) {
                                                                                                                if (constants4.VOICE_PANNING !== arg0) {
                                                                                                                  if (constants4.AEC_DUMP !== arg0) {
                                                                                                                    if (constants4.DISABLE_VIDEO !== arg0) {
                                                                                                                      if (constants4.SAMPLE_PLAYBACK !== arg0) {
                                                                                                                        if (constants4.NOISE_SUPPRESSION !== arg0) {
                                                                                                                          if (constants4.AUTOMATIC_GAIN_CONTROL !== arg0) {
                                                                                                                            if (constants4.SIDECHAIN_COMPRESSION !== arg0) {
                                                                                                                              return false;
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                        return true;
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                              let family;
                              if (null != callback2(closure_2[17])) {
                                const os = callback2(closure_2[17]).os;
                                if (null != os) {
                                  family = os.family;
                                }
                              }
                              isMatch = null != family;
                              if (isMatch) {
                                isMatch = callback2;
                                isMatch = closure_2;
                                isMatch = /^win/i.test(callback2(closure_2[17]).os.family);
                                const obj29 = /^win/i;
                              }
                              return isMatch;
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  };
  items[4] = {
    key: "connect",
    value(arg0, arg1, processPriority) {
      const self = this;
      const callback = this;
      let obj = callback(closure_2[15]);
      if (!obj.supportsFeature(constants6.EXPERIMENT_CONFIG)) {
        processPriority.experiments = undefined;
      }
      obj = callback2(closure_2[18]).create(arg0, arg1, processPriority);
      const callback2 = obj;
      obj.on(callback(closure_2[13]).BaseConnectionEvent.Destroy, (arg0) => {
        const connections = self.connections;
        connections.delete(arg0);
        if (self.connectionsEmpty()) {
          self(closure_2[15]).setProcessPriority(constants.NORMAL);
          const obj = self(closure_2[15]);
          const voiceEngine = self(closure_2[15]).getVoiceEngine();
          const setNativeThreadsPriority = voiceEngine.setNativeThreadsPriority;
          if (null != setNativeThreadsPriority) {
            setNativeThreadsPriority.call(voiceEngine, 0);
          }
          const obj2 = self(closure_2[15]);
        }
      });
      obj.on(callback(closure_2[13]).BaseConnectionEvent.Connected, () => {
        obj.setVideoBroadcast(self.shouldConnectionBroadcastVideo(obj));
      });
      obj.on(callback(closure_2[13]).BaseConnectionEvent.Silence, (arg0) => {
        self.emit(self(closure_2[13]).MediaEngineEvent.Silence, arg0);
      });
      const connections = self.connections;
      connections.add(obj);
      const obj2 = callback2(closure_2[18]);
      let HIGH = processPriority.processPriority;
      if (null == HIGH) {
        HIGH = constants.HIGH;
      }
      callback(closure_2[15]).setProcessPriority(HIGH);
      if (null != processPriority.threadPriorityConfiguration) {
        const voiceEngine = callback(closure_2[15]).getVoiceEngine();
        const setNativeThreadsPriority = voiceEngine.setNativeThreadsPriority;
        if (null != setNativeThreadsPriority) {
          setNativeThreadsPriority.call(voiceEngine, processPriority.threadPriorityConfiguration);
        }
        const obj5 = callback(closure_2[15]);
      }
      self.emit(callback(closure_2[13]).MediaEngineEvent.Connection, obj);
      return obj;
    }
  };
  items[5] = {
    key: "shouldConnectionBroadcastVideo",
    value(context) {
      let hasDesktopSourceResult = context.context === constants5.DEFAULT;
      if (hasDesktopSourceResult) {
        const self = this;
        hasDesktopSourceResult = this.videoInputDeviceId !== closure_20;
      }
      if (!hasDesktopSourceResult) {
        hasDesktopSourceResult = context.hasDesktopSource();
      }
      return hasDesktopSourceResult;
    }
  };
  items[6] = {
    key: "eachConnection",
    value(arg0, arg1) {
      let closure_0 = arg0;
      let closure_1 = arg1;
      const connections = this.connections;
      const item = connections.forEach((context) => {
        let tmp = null != arg1;
        if (tmp) {
          tmp = context.context !== arg1;
        }
        if (!tmp) {
          context(context);
        }
      });
    }
  };
  items[7] = {
    key: "enable",
    value() {
      return Promise.resolve();
    }
  };
  items[8] = {
    key: "setAudioMixerOptions",
    value(audioMixerOptions) {
      let obj = callback(closure_2[15]);
      if (obj.supportsFeature(constants6.SPATIAL_AUDIO)) {
        const voiceEngine = callback(closure_2[15]).getVoiceEngine();
        obj = { audioMixerOptions };
        voiceEngine.setTransportOptions(obj);
        const obj2 = callback(closure_2[15]);
      }
    }
  };
  items[9] = {
    key: "setAudioInputBypassSystemProcessing",
    value(bypassSystemProcessing) {
      let obj = callback(closure_2[15]);
      const voiceEngine = obj.getVoiceEngine();
      obj = { bypassSystemProcessing };
      voiceEngine.setTransportOptions(obj);
    }
  };
  items[10] = {
    key: "setInputVolume",
    value(arg0) {
      const voiceEngine = callback(closure_2[15]).getVoiceEngine();
      voiceEngine.setInputVolume(callback8(arg0));
    }
  };
  items[11] = {
    key: "setOutputVolume",
    value(arg0) {
      const voiceEngine = callback(closure_2[15]).getVoiceEngine();
      voiceEngine.setOutputVolume(callback8(arg0));
    }
  };
  items[12] = {
    key: "getAudioInputDevices",
    value() {
      return callback(closure_2[14]).getAudioInputDevices();
    }
  };
  items[13] = {
    key: "getNoiseCancellationStats",
    value() {
      return new Promise((arg0) => {
        const voiceEngine = arg0(closure_2[15]).getVoiceEngine();
        if (null != voiceEngine.getNoiseCancellationStats) {
          const noiseCancellationStats = voiceEngine.getNoiseCancellationStats((arg0) => arg0(JSON.parse(arg0)));
        } else {
          arg0(null);
        }
      });
    }
  };
  items[14] = {
    key: "setNoiseCancellationEnableStats",
    value(arg0) {
      const voiceEngine = callback(closure_2[15]).getVoiceEngine();
      const setNoiseCancellationEnableStats = voiceEngine.setNoiseCancellationEnableStats;
      if (null != setNoiseCancellationEnableStats) {
        setNoiseCancellationEnableStats.call(voiceEngine, arg0);
      }
    }
  };
  items[15] = {
    key: "setAudioInputDevice",
    value(audioInputDeviceId) {
      const self = this;
      const callback = audioInputDeviceId;
      this.audioInputDeviceId = audioInputDeviceId;
      if (obj.supportsFeature(constants6.SET_AUDIO_DEVICE_BY_ID)) {
        let tmpResult = tmp(tmp2[15]);
        const voiceEngine = tmpResult.getVoiceEngine();
        voiceEngine.setInputDevice(audioInputDeviceId);
      } else {
        tmpResult = tmp(tmp2[14]);
        const audioInputDevices = tmpResult.getAudioInputDevices();
        audioInputDevices.then((arr) => {
          let found = arr.find((id) => id.id === closure_0);
          if (null == found) {
            found = arr[0];
          }
          if (null != found) {
            const voiceEngine = arr(closure_2[15]).getVoiceEngine();
            voiceEngine.setInputDevice(found.index);
            const obj = arr(closure_2[15]);
          }
        });
      }
      self.emit(callback(closure_2[13]).MediaEngineEvent.SelectedDeviceChange, constants3.AUDIO_INPUT, this.audioInputDeviceId, audioInputDeviceId);
    }
  };
  items[16] = {
    key: "getAudioOutputDevices",
    value() {
      return callback(closure_2[14]).getAudioOutputDevices();
    }
  };
  items[17] = {
    key: "setAudioOutputDevice",
    value(audioOutputDeviceId) {
      const self = this;
      const callback = audioOutputDeviceId;
      this.audioOutputDeviceId = audioOutputDeviceId;
      if (obj.supportsFeature(constants6.SET_AUDIO_DEVICE_BY_ID)) {
        let tmpResult = tmp(tmp2[15]);
        const voiceEngine = tmpResult.getVoiceEngine();
        voiceEngine.setOutputDevice(audioOutputDeviceId);
      } else {
        tmpResult = tmp(tmp2[14]);
        const audioOutputDevices = tmpResult.getAudioOutputDevices();
        audioOutputDevices.then((arr) => {
          let found = arr.find((id) => id.id === closure_0);
          if (null == found) {
            found = arr[0];
          }
          if (null != found) {
            const voiceEngine = arr(closure_2[15]).getVoiceEngine();
            voiceEngine.setOutputDevice(found.index);
            const obj = arr(closure_2[15]);
          }
        });
      }
      self.emit(callback(closure_2[13]).MediaEngineEvent.SelectedDeviceChange, constants3.AUDIO_OUTPUT, this.audioOutputDeviceId, audioOutputDeviceId);
    }
  };
  items[18] = {
    key: "getVideoInputDevices",
    value() {
      return callback(closure_2[14]).getVideoInputDevices();
    }
  };
  const obj17 = { key: "setVideoInputDevice" };
  const callback = callback(async function(arg0) {
    const self = this;
    const found = yield self.getVideoInputDevices().find((id) => id.id === id);
    const tmp2 = null != found ? found.id : closure_20;
    if (tmp2 !== self.videoInputDeviceId) {
      self.videoInputDeviceId = tmp2;
      if (!obj5.supportsFeature(constants.SET_VIDEO_DEVICE_BY_ID)) {
        const voiceEngine = self(closure_2[15]).getVoiceEngine();
        let num = -1;
        if (null != found) {
          num = found.index;
        }
        voiceEngine.setVideoInputDevice(num);
        const connections = self.connections;
        const item = connections.forEach((setVideoBroadcast) => setVideoBroadcast.setVideoBroadcast(self.shouldConnectionBroadcastVideo(setVideoBroadcast)));
        const obj = self(closure_2[15]);
      }
      if (null == found) {
        const voiceEngine1 = self(closure_2[15]).getVoiceEngine();
        voiceEngine1.setVideoInputDevice(closure_20);
        const obj3 = self(closure_2[15]);
        const tmp6 = closure_20;
      }
      if (null == found.originalId) {
        const id = found.id;
      }
      const originalId = found.originalId;
      const obj5 = self(closure_2[15]);
    }
  });
  obj17.value = function setVideoInputDevice() {
    return callback5(...arguments);
  };
  items[19] = obj17;
  items[20] = {
    key: "getVideoInputDeviceId",
    value() {
      return this.videoInputDeviceId;
    }
  };
  items[21] = {
    key: "setAsyncVideoInputDeviceInit",
    value(arg0) {
      const voiceEngine = callback(closure_2[15]).getVoiceEngine();
      const setAsyncVideoInputDeviceInitSetting = voiceEngine.setAsyncVideoInputDeviceInitSetting;
      if (null != setAsyncVideoInputDeviceInitSetting) {
        setAsyncVideoInputDeviceInitSetting.call(voiceEngine, arg0);
      }
      const obj = callback(closure_2[15]);
      const voiceEngine1 = callback(closure_2[15]).getVoiceEngine();
      const setAsyncVideoInputDeviceInit = voiceEngine1.setAsyncVideoInputDeviceInit;
      if (null != setAsyncVideoInputDeviceInit) {
        setAsyncVideoInputDeviceInit.call(voiceEngine1, arg0);
      }
    }
  };
  items[22] = {
    key: "getCodecCapabilities",
    value(arg0) {
      const voiceEngine = callback(closure_2[15]).getVoiceEngine();
      const codecCapabilities = voiceEngine.getCodecCapabilities(arg0);
    }
  };
  items[23] = {
    key: "setGoLiveSource",
    value(arg0, arg1) {
      const self = this;
      let closure_0 = this;
      let closure_1 = arg0;
      let closure_2 = arg1;
      if (null != arg0) {
        self.eachConnection((streamUserId) => {
          if (!tmp) {
            streamUserId.setGoLiveSource(streamUserId);
            streamUserId.setVideoBroadcast(self.shouldConnectionBroadcastVideo(streamUserId));
          }
        }, arg1);
      } else {
        self.eachConnection((clearDesktopSource) => {
          clearDesktopSource.clearDesktopSource();
          clearDesktopSource.clearGoLiveDevices();
          clearDesktopSource.setSoundshareSource(0, false);
          clearDesktopSource.setVideoBroadcast(self.shouldConnectionBroadcastVideo(clearDesktopSource));
        }, arg1);
      }
    }
  };
  items[24] = {
    key: "setClipsSource",
    value(quality) {
      let allowScreenCaptureKit;
      let hdrCaptureMode;
      let id;
      let minCaptureHeight;
      let minCaptureWidth;
      let soundshareId;
      let useGraphicsCapture;
      let useHookFramePacer;
      let useLoopback;
      let useQuartzCapturer;
      let useVideoHook;
      let videoHookAllowDx12;
      const self = this;
      let obj = callback(closure_2[15]);
      const voiceEngine = obj.getVoiceEngine();
      if (null != voiceEngine.setClipsSource) {
        if (null != voiceEngine.setOnClipsRecordingEvent) {
          if (null != voiceEngine.applyClipsSettings) {
            if (null != quality) {
              quality = quality.quality;
              const resolution = quality.resolution;
              if (resolution <= 480) {
                let result = resolution / 3 * 4;
              } else {
                result = resolution / 9 * 16;
              }
              const desktopDescription = quality.desktopDescription;
              ({ id, soundshareId } = desktopDescription);
              obj = { id, soundshareId, applicationName: quality.applicationName };
              self.clipsRecordingEventContext = obj;
              ({ useLoopback, useVideoHook, useHookFramePacer, useGraphicsCapture, useQuartzCapturer, allowScreenCaptureKit, hdrCaptureMode, videoHookAllowDx12, minCaptureWidth, minCaptureHeight } = desktopDescription);
              const result1 = self.registerClipsRecordingEventHandler();
              if (null != voiceEngine.applyClipsSettings) {
                obj = { useVideoHook, useHookFramePacer, useGraphicsCapture, useQuartzCapturer, allowScreenCaptureKit, hdrCaptureMode, videoHookAllowDx12, soundshareLoopback: useLoopback, frameRate: quality.frameRate, width: result, height: resolution, bitrateKbps: callback10(quality.bitratePercent), videoEncoderExperiments: quality.videoEncoderExperiments, minCaptureWidth, minCaptureHeight };
                voiceEngine.applyClipsSettings(obj);
              }
              if (null != id) {
                let parts = id.split(":");
              } else {
                parts = [];
              }
              const tmp7 = callback4(parts, 2);
              let num7 = 0;
              const first = tmp7[0];
              const obj1 = { id: tmp7[1] };
              if (null != soundshareId) {
                num7 = soundshareId;
              }
              obj1.soundshareId = num7;
              voiceEngine.setClipsSource(obj1);
            } else {
              voiceEngine.setClipsSource({ "Bool(true)": true, "Bool(true)": true });
            }
          }
        }
      }
    }
  };
  items[25] = {
    key: "setClipsQualitySettings",
    value(arg0, arg1, arg2, arg3) {
      let obj = callback(closure_2[15]);
      const voiceEngine = obj.getVoiceEngine();
      if (null == voiceEngine.applyClipsQualitySettings) {
        return false;
      } else {
        const result = voiceEngine.applyClipsQualitySettings(arg0, arg1, arg2);
        const tmp7 = callback10(arg3);
        if (tmp8) {
          obj = { bitrateKbps: tmp7 };
          voiceEngine.applyClipsSettings(obj);
        }
        return true;
      }
    }
  };
  items[26] = {
    key: "setSoundshareSource",
    value(arg0, arg1, arg2) {
      let closure_0 = arg0;
      let closure_1 = arg1;
      let closure_2 = arg2;
      this.eachConnection((streamUserId) => {
        if (!tmp) {
          streamUserId.setSoundshareSource(streamUserId, arg1);
        }
      }, arg2);
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
    value(arg0, arg1, arg2) {
      const callback = arg0;
      let closure_1 = arg1;
      const voiceEngine = callback(closure_2[15]).getVoiceEngine();
      if (null != voiceEngine.setPreviewsUseWgc) {
        voiceEngine.setPreviewsUseWgc(arg2);
      }
      const obj = callback(closure_2[15]);
      return new Promise((arg0) => {
        if (null != obj.getVoiceEngine().getScreenPreviews) {
          const voiceEngine = arg0(closure_2[15]).getVoiceEngine();
          const screenPreviews = voiceEngine.getScreenPreviews(arg0, arg1, (arr) => {
            arr(arr.map((arg0, arg1) => {
              const obj = {};
              const merged = Object.assign(arg0);
              obj["name"] = `Screen ${arg1}${1}`;
              return obj;
            }));
          });
          const obj2 = arg0(closure_2[15]);
        } else {
          arg0([]);
        }
      });
    }
  };
  items[29] = {
    key: "setClipsModulePath",
    value(arg0) {
      const voiceEngine = callback(closure_2[15]).getVoiceEngine();
      const setClipsModulePath = voiceEngine.setClipsModulePath;
      if (null != setClipsModulePath) {
        setClipsModulePath.call(voiceEngine, arg0);
      }
    }
  };
  items[30] = {
    key: "setClipsDataPath",
    value(arg0) {
      const voiceEngine = callback(closure_2[15]).getVoiceEngine();
      const setClipsDataPath = voiceEngine.setClipsDataPath;
      if (null != setClipsDataPath) {
        setClipsDataPath.call(voiceEngine, arg0);
      }
    }
  };
  items[31] = {
    key: "setClipsSentryConfig",
    value(arg0, arg1, arg2) {
      const voiceEngine = callback(closure_2[15]).getVoiceEngine();
      const setClipsSentryConfig = voiceEngine.setClipsSentryConfig;
      if (null != setClipsSentryConfig) {
        setClipsSentryConfig.call(voiceEngine, arg0, arg1, arg2);
      }
    }
  };
  items[32] = {
    key: "setClipsV3Enabled",
    value(arg0) {
      const self = this;
      if (arg0) {
        const result = self.registerClipsRecordingEventHandler();
      }
      const voiceEngine = callback(closure_2[15]).getVoiceEngine();
      const setClipsV3Enabled = voiceEngine.setClipsV3Enabled;
      if (null != setClipsV3Enabled) {
        setClipsV3Enabled.call(voiceEngine, arg0);
      }
    }
  };
  items[33] = {
    key: "registerClipsRecordingEventHandler",
    value() {
      const self = this;
      const callback = this;
      const voiceEngine = callback(closure_2[15]).getVoiceEngine();
      if (!tmp) {
        self.clipsRecordingEventHandlerRegistered = true;
        const result = voiceEngine.setOnClipsRecordingEvent((arg0, arg1) => {
          let id;
          let soundshareId;
          const clipsRecordingEventContext = self.clipsRecordingEventContext;
          ({ id, soundshareId } = clipsRecordingEventContext);
          const logger = self.logger;
          logger.info("Clips recording event: " + closure_17[arg0] + " received for stream " + id + " and sound " + soundshareId + ".");
          if (arg0 === closure_17.GoLiveEnded) {
            self.emit(self(closure_2[13]).MediaEngineEvent.ClipsRecordingRestartNeeded);
          } else if (arg0 === closure_17.Error) {
            let str2 = "Failed to set clips source in media engine";
            if (null != arg1) {
              str2 = "Failed to set clips source in media engine";
              if ("" !== arg1) {
                str2 = arg1;
              }
            }
            self.emit(self(closure_2[13]).MediaEngineEvent.ClipsInitFailure, str2, clipsRecordingEventContext.applicationName);
          } else if (arg0 === closure_17.IdleShutdown) {
            self.emit(self(closure_2[13]).MediaEngineEvent.ClipsBridgeIdleShutdown);
          } else if (arg0 === closure_17.RecordingHealthy) {
            self.emit(self(closure_2[13]).MediaEngineEvent.ClipsRecordingHealthy);
          } else if (arg0 === closure_17.RecordingActive) {
            self.emit(self(closure_2[13]).MediaEngineEvent.ClipsRecordingReadyChanged, true);
          } else if (arg0 === closure_17.RecordingInactive) {
            self.emit(self(closure_2[13]).MediaEngineEvent.ClipsRecordingReadyChanged, false);
          } else {
            let tmp3 = arg0 !== closure_17.Ended;
            if (tmp3) {
              tmp3 = arg0 !== closure_17.StoppedByGoLive;
            }
            if (!tmp3) {
              self.emit(self(closure_2[13]).MediaEngineEvent.ClipsRecordingEnded, id, soundshareId);
            }
          }
        });
      }
    }
  };
  items[34] = {
    key: "setClipsUIActive",
    value(arg0) {
      const voiceEngine = callback(closure_2[15]).getVoiceEngine();
      const setClipsUIActive = voiceEngine.setClipsUIActive;
      if (null != setClipsUIActive) {
        setClipsUIActive.call(voiceEngine, arg0);
      }
    }
  };
  items[35] = {
    key: "setClipsV3MLEnabled",
    value(arg0) {
      const voiceEngine = callback(closure_2[15]).getVoiceEngine();
      const setClipsV3MLEnabled = voiceEngine.setClipsV3MLEnabled;
      if (null != setClipsV3MLEnabled) {
        setClipsV3MLEnabled.call(voiceEngine, arg0);
      }
    }
  };
  items[36] = {
    key: "setClipsRecordingEnabled",
    value(arg0) {
      const voiceEngine = callback(closure_2[15]).getVoiceEngine();
      const setClipsRecordingEnabled = voiceEngine.setClipsRecordingEnabled;
      if (null != setClipsRecordingEnabled) {
        setClipsRecordingEnabled.call(voiceEngine, arg0);
      }
    }
  };
  items[37] = {
    key: "hasSetClipsRecordingEnabled",
    value() {
      return null != callback(closure_2[15]).getVoiceEngine().setClipsRecordingEnabled;
    }
  };
  items[38] = {
    key: "setClipBufferLength",
    value(arg0) {
      const voiceEngine = callback(closure_2[15]).getVoiceEngine();
      const setClipBufferLength = voiceEngine.setClipBufferLength;
      if (null != setClipBufferLength) {
        setClipBufferLength.call(voiceEngine, arg0);
      }
    }
  };
  items[39] = {
    key: "getSystemSteadyClockNowMs",
    value() {
      let callResult;
      const voiceEngine = callback(closure_2[15]).getVoiceEngine();
      const getSystemSteadyClockNowMs = voiceEngine.getSystemSteadyClockNowMs;
      if (null != getSystemSteadyClockNowMs) {
        callResult = getSystemSteadyClockNowMs.call(voiceEngine);
      }
      let tmp3 = null;
      if (null != callResult) {
        tmp3 = callResult;
      }
      return tmp3;
    }
  };
  items[40] = {
    key: "saveClipEx",
    value(arg0) {
      const callback = arg0;
      const voiceEngine = callback(closure_2[15]).getVoiceEngine();
      const obj = callback(closure_2[15]);
      return new Promise((arg0, arg1) => {
        let endMs;
        let filepath;
        let metadata;
        let startMs;
        let thumbnailMs;
        let trimEndMs;
        let trimStartMs;
        let userId;
        let closure_1 = arg1;
        function onSuccess(duration, arg1, thumbnail, metadata) {
          while (true) {
            let obj = { duration, clipStats: tmp2 };
            let tmp3 = obj;
            let tmp4 = thumbnail;
            let tmp5 = undefined !== thumbnail;
            let tmp6 = tmp5;
            if (!tmp5) {
              break;
            } else {
              let tmp7 = thumbnail;
              let num = 0;
              tmp6 = thumbnail.length > 0;
              // break
            }
            if (tmp6) {
              let tmp8 = obj;
              tmp3.thumbnail = thumbnail;
            }
            let tmp9 = metadata;
            let tmp10 = undefined !== metadata;
            let tmp11 = tmp10;
            if (tmp10) {
              let tmp12 = metadata;
              let num2 = 0;
              tmp11 = metadata.length > 0;
            }
            if (tmp11) {
              let tmp13 = obj;
              tmp3.metadata = metadata;
            }
            let tmp14 = duration;
            return duration(obj);
          }
        }
        function onFailure(arg0) {
          let str = "{}";
          if ("" !== arg0) {
            str = arg0;
          }
          return arg1(JSON.parse(str));
        }
        function onLegacySuccess(arg0, arg1, arg2) {
          return onSuccess(arg0, arg2, arg1, undefined);
        }
        function onLegacyTimeSuccess(arg0, arg1, arg2) {
          return onSuccess(arg0, arg1, undefined, arg2);
        }
        if (null == closure_1.saveClipEx) {
          ({ filepath, metadata, thumbnailMs, startMs, endMs, trimStartMs, trimEndMs, userId } = arg0);
          if (null != userId) {
            let tmp11 = null == tmp6.saveClipForUser;
            if (tmp11) {
              tmp11 = null == closure_1.saveClipForUserWithTime;
            }
            let tmp7 = tmp11;
          } else {
            tmp7 = null == tmp6.setClipBufferLength;
            if (!tmp7) {
              let tmp9 = null == closure_1.saveClip;
              if (tmp9) {
                tmp9 = null == closure_1.saveClipWithTime;
              }
              tmp7 = tmp9;
            }
          }
          if (tmp7) {
            arg1("unsupported");
          } else if (tmp5) {
            if (null != tmp13.saveClipForUserWithTime) {
              let tmp31 = null;
              if (null != startMs) {
                tmp31 = startMs;
              }
              let tmp32 = null;
              if (null != endMs) {
                tmp32 = endMs;
              }
              let tmp33 = null;
              if (null != trimStartMs) {
                tmp33 = trimStartMs;
              }
              let tmp34 = null;
              if (null != trimEndMs) {
                tmp34 = trimEndMs;
              }
              const result = closure_1.saveClipForUserWithTime(userId, filepath, metadata, tmp31, tmp32, tmp33, tmp34, onLegacyTimeSuccess, onFailure, thumbnailMs);
              const tmp30 = closure_1;
            } else {
              const saveClipForUser = closure_1.saveClipForUser;
              if (obj2.supportsFeature(constants.CLIPS_THUMBNAIL)) {
                if (null != saveClipForUser) {
                  closure_1.saveClipForUser(userId, filepath, metadata, onLegacySuccess, onFailure, thumbnailMs);
                }
              } else if (null != saveClipForUser) {
                closure_1.saveClipForUser(userId, filepath, metadata, onLegacySuccess, onFailure);
              }
              const obj2 = arg0(onSuccess[15]);
            }
          } else if (null != tmp13.saveClipWithTime) {
            let tmp15 = null;
            if (null != startMs) {
              tmp15 = startMs;
            }
            let tmp16 = null;
            if (null != endMs) {
              tmp16 = endMs;
            }
            let tmp17 = null;
            if (null != trimStartMs) {
              tmp17 = trimStartMs;
            }
            let tmp18 = null;
            if (null != trimEndMs) {
              tmp18 = trimEndMs;
            }
            closure_1.saveClipWithTime(filepath, metadata, tmp15, tmp16, tmp17, tmp18, onLegacyTimeSuccess, onFailure, thumbnailMs);
            const tmp14 = closure_1;
          } else {
            const saveClip = closure_1.saveClip;
            if (obj.supportsFeature(constants.CLIPS_THUMBNAIL)) {
              if (null != saveClip) {
                closure_1.saveClip(filepath, metadata, onLegacySuccess, onFailure, thumbnailMs);
              }
            } else if (null != saveClip) {
              closure_1.saveClip(filepath, metadata, onLegacySuccess, onFailure);
            }
            const obj = arg0(onSuccess[15]);
          }
        } else {
          closure_1.saveClipEx(arg0, onSuccess, onFailure);
        }
      });
    }
  };
  items[41] = {
    key: "updateClipMetadata",
    value(arg0, arg1) {
      const callback = arg0;
      let closure_1 = arg1;
      const voiceEngine = callback(closure_2[15]).getVoiceEngine();
      closure_2 = voiceEngine;
      if (null == voiceEngine.updateClipMetadata) {
        let rejectResult = Promise.reject("unsupported");
      } else {
        rejectResult = new Promise((arg0, arg1) => {
          voiceEngine.updateClipMetadata(arg0, arg1, arg0, arg1);
        });
      }
      return rejectResult;
    }
  };
  items[42] = {
    key: "saveScreenshot",
    value(arg0, arg1, arg2, arg3, arg4) {
      const callback = arg0;
      let closure_1 = arg1;
      let closure_2 = arg2;
      let closure_3 = arg3;
      let closure_4 = arg4;
      const voiceEngine = callback(closure_2[15]).getVoiceEngine();
      const MediaEngineNative = voiceEngine;
      if (null == voiceEngine.saveScreenshot) {
        let rejectResult = Promise.reject("unsupported");
      } else {
        rejectResult = new Promise((arg0, arg1) => {
          let str = "";
          if (null != arg3) {
            str = arg3;
          }
          let num = 0;
          if (null != arg4) {
            num = arg4;
          }
          voiceEngine.saveScreenshot(arg0, arg1, str, arg2, num, (arg0) => {
            arg0(Buffer.from(arg0));
          }, arg1);
        });
      }
      return rejectResult;
    }
  };
  items[43] = {
    key: "exportClip",
    value(arg0, arg1) {
      const callback = arg0;
      let closure_1 = arg1;
      const voiceEngine = callback(closure_2[15]).getVoiceEngine();
      closure_2 = voiceEngine;
      if (null == voiceEngine.exportClip) {
        let rejectResult = Promise.reject("unsupported");
      } else {
        rejectResult = new Promise((arg0, arg1) => {
          voiceEngine.exportClip(arg0, arg1, (arg0) => {
            const items = [arg0];
            const blob = new Blob(items);
            return arg0(blob);
          }, arg1);
        });
      }
      return rejectResult;
    }
  };
  items[44] = {
    key: "hasExportClipToFile",
    value() {
      return null != callback(closure_2[15]).getVoiceEngine().exportClipToFile;
    }
  };
  items[45] = {
    key: "setClipsPerfMonitoring",
    value: function setClipsPerfMonitoring(arg0, arg1, arg2) {
      const setClipsPerfMonitoring = callback(closure_2[15]).getVoiceEngine().setClipsPerfMonitoring;
      if (null == setClipsPerfMonitoring) {
        let rejectResult = Promise.reject("unsupported");
      } else {
        rejectResult = setClipsPerfMonitoring(arg0, arg1, arg2);
      }
      return rejectResult;
    }
  };
  items[46] = {
    key: "exportClipToFile",
    value(arg0, arg1, arg2) {
      const callback = arg0;
      let closure_1 = arg1;
      let closure_2 = arg2;
      const exportClipToFile = callback(closure_2[15]).getVoiceEngine().exportClipToFile;
      let closure_3 = exportClipToFile;
      if (null == exportClipToFile) {
        let rejectResult = Promise.reject("unsupported");
      } else {
        rejectResult = new Promise((arg0, arg1) => {
          exportClipToFile(arg0, arg1, arg2, (filepath) => {
            if ("string" === typeof filepath) {
              const obj = { filepath, formattedForUpload: true === arg1 };
              filepath(obj);
            } else {
              arg1("unsupported: native exportClipToFile returned non-string");
            }
          }, arg1);
        });
      }
      return rejectResult;
    }
  };
  items[47] = {
    key: "getWindowPreviews",
    value(arg0, arg1, arg2) {
      const callback = arg0;
      let closure_1 = arg1;
      const voiceEngine = callback(closure_2[15]).getVoiceEngine();
      if (null != voiceEngine.setPreviewsUseWgc) {
        voiceEngine.setPreviewsUseWgc(arg2);
      }
      const obj = callback(closure_2[15]);
      return new Promise((arg0) => {
        if (null != obj.getVoiceEngine().getWindowPreviews) {
          const voiceEngine = arg0(closure_2[15]).getVoiceEngine();
          const windowPreviews = voiceEngine.getWindowPreviews(arg0, arg1, (arg0) => {
            arg0(arg0);
          });
          const obj2 = arg0(closure_2[15]);
        } else {
          arg0([]);
        }
      });
    }
  };
  const obj46 = { key: "getSingleWindowPreview" };
  let closure_3 = callback(async (arg0, arg1, arg2, arg3) => {
    const voiceEngine = callback(closure_2[15]).getVoiceEngine();
    if (null != voiceEngine.setPreviewsUseWgc) {
      voiceEngine.setPreviewsUseWgc(arg3);
    }
    const obj = callback(closure_2[15]);
    if (null != obj3.getVoiceEngine().getSingleWindowPreview) {
      const voiceEngine1 = callback(closure_2[15]).getVoiceEngine();
      const arr = yield voiceEngine1.getSingleWindowPreview(arg0, arg1, arg2);
      let first = null;
      if (arr.length > 0) {
        first = arr[0];
      }
      return first;
    } else {
      return null;
    }
    const obj3 = callback(closure_2[15]);
  });
  obj46.value = function getSingleWindowPreview(arg0, arg1, arg2) {
    return callback4(...arguments);
  };
  items[48] = obj46;
  items[49] = {
    key: "setAudioSubsystem",
    value(arg0) {
      if (null != obj.getVoiceEngine().setAudioSubsystem) {
        const voiceEngine = callback(closure_2[15]).getVoiceEngine();
        voiceEngine.setAudioSubsystem(arg0);
        const obj4 = callback(closure_2[15]);
      } else {
        const voiceEngine1 = callback(closure_2[15]).getVoiceEngine();
        const result = voiceEngine1.setUseLegacyAudioDevice(arg0 === constants2.LEGACY);
        const obj2 = callback(closure_2[15]);
      }
    }
  };
  items[50] = {
    key: "setOffloadAdmControls",
    value(arg0) {
      const voiceEngine = callback(closure_2[15]).getVoiceEngine();
      if (null != voiceEngine.setOffloadAdmControls) {
        const result = voiceEngine.setOffloadAdmControls(arg0);
      }
    }
  };
  items[51] = {
    key: "updateFieldTrial",
    value(arg0, arg1) {
      const voiceEngine = callback(closure_2[15]).getVoiceEngine();
      const updateFieldTrial = voiceEngine.updateFieldTrial;
      if (null != updateFieldTrial) {
        updateFieldTrial.call(voiceEngine, arg0, arg1);
      }
    }
  };
  items[52] = {
    key: "queueAudioSubsystem",
    value(arg0) {
      const self = this;
      const voiceEngine = callback(closure_2[15]).getVoiceEngine();
      if (null != voiceEngine.queueAudioSubsystem) {
        voiceEngine.queueAudioSubsystem(arg0);
      } else {
        self.setAudioSubsystem(arg0);
      }
    }
  };
  items[53] = {
    key: "getAudioSubsystem",
    value() {
      return this.audioSubsystem;
    }
  };
  items[54] = {
    key: "getAudioLayer",
    value() {
      return this.audioLayer;
    }
  };
  items[55] = {
    key: "getDebugLogging",
    value() {
      const tmp = !this.supports(constants4.DEBUG_LOGGING);
      let debugLogging = !tmp;
      if (!tmp) {
        const voiceEngine = callback(closure_2[15]).getVoiceEngine();
        debugLogging = voiceEngine.getDebugLogging();
        const obj = callback(closure_2[15]);
      }
      return debugLogging;
    }
  };
  items[56] = {
    key: "setDebugLogging",
    value(enabled) {
      if (this.supports(constants4.DEBUG_LOGGING)) {
        const voiceEngine = callback(closure_2[15]).getVoiceEngine();
        voiceEngine.setDebugLogging(enabled);
        const obj = callback(closure_2[15]);
      }
    }
  };
  items[57] = {
    key: "setLoopback",
    value(arg0, arg1) {
      let automaticGainControlConfig;
      let automaticGainControlConfig2;
      let tmp = arg0;
      const self = this;
      let obj = callback(closure_2[15]);
      if (null != obj.getVoiceEngine().setLoopback) {
        const voiceEngine = callback(closure_2[15]).getVoiceEngine();
        obj = {};
        ({ echoCancellation: obj8.echoCancellation, noiseSuppression: obj8.noiseSuppression, automaticGainControlConfig: automaticGainControlConfig2 } = arg1);
        let enabled;
        if (null != automaticGainControlConfig2) {
          enabled = automaticGainControlConfig2.enabled;
        }
        obj.automaticGainControl = enabled;
        ({ automaticGainControlConfig: obj8.automaticGainControlConfig, noiseCancellation: obj8.noiseCancellation, noiseCancellationDuringProcessing: obj8.noiseCancellationDuringProcessing } = arg1);
        voiceEngine.setLoopback(tmp, obj);
        const obj6 = callback(closure_2[15]);
      }
      if (null != obj2.getVoiceEngine().setEmitVADLevel2) {
        const voiceEngine1 = callback(closure_2[15]).getVoiceEngine();
        if (!tmp) {
          tmp = self.listenerCount(callback(closure_2[13]).MediaEngineEvent.VoiceActivity) > 0;
        }
        voiceEngine1.setEmitVADLevel2(tmp);
        const obj4 = callback(closure_2[15]);
      } else {
        const voiceEngine2 = callback(closure_2[15]).getVoiceEngine();
        let tmp6 = tmp;
        if (!tmp) {
          tmp6 = self.listenerCount(callback(closure_2[13]).MediaEngineEvent.VoiceActivity) > 0;
        }
        obj = {};
        ({ echoCancellation: obj3.echoCancellation, noiseSuppression: obj3.noiseSuppression, automaticGainControlConfig } = arg1);
        let enabled1;
        if (null != automaticGainControlConfig) {
          enabled1 = automaticGainControlConfig.enabled;
        }
        obj.automaticGainControl = enabled1;
        ({ noiseCancellation: obj3.noiseCancellation, noiseCancellationDuringProcessing: obj3.noiseCancellationDuringProcessing } = arg1);
        voiceEngine2.setEmitVADLevel(tmp6, tmp, obj);
        const obj9 = callback(closure_2[15]);
      }
    }
  };
  items[58] = {
    key: "getLoopback",
    value() {
      return false;
    }
  };
  items[59] = {
    key: "getCodecSurvey",
    value() {
      let closure_0 = this;
      if (null != this.codecSurvey) {
        let resolved = Promise.resolve(tmp.codecSurvey);
      } else {
        resolved = new Promise((arg0, arg1) => {
          const self = arg0;
          const voiceEngine = self(closure_2[15]).getVoiceEngine();
          if (null != voiceEngine.getCodecSurvey) {
            const codecSurvey = voiceEngine.getCodecSurvey((codecSurvey) => {
              codecSurvey.codecSurvey = codecSurvey;
              codecSurvey(codecSurvey);
            });
          } else {
            const _Error = Error;
            const error = new Error("getCodecSurvey is not implemented.");
            arg1(error);
          }
        });
      }
      return resolved;
    }
  };
  items[60] = {
    key: "writeAudioDebugState",
    value() {
      return new Promise((arg0, arg1) => {
        const writeAudioDebugState = callback(closure_2[15]).getVoiceEngine().writeAudioDebugState;
        if (null != writeAudioDebugState) {
          writeAudioDebugState();
          arg0();
        } else {
          const _Error = Error;
          const error = new Error("Audio debug state is not supported.");
          arg1(error);
        }
      });
    }
  };
  items[61] = {
    key: "startAecDump",
    value() {

    }
  };
  items[62] = {
    key: "stopAecDump",
    value() {

    }
  };
  items[63] = {
    key: "setAecDump",
    value(arg0) {
      const voiceEngine = callback(closure_2[15]).getVoiceEngine();
      const setAecDump = voiceEngine.setAecDump;
      if (null != setAecDump) {
        setAecDump.call(voiceEngine, arg0);
      }
    }
  };
  items[64] = {
    key: "startRecordingRawSamples",
    value(arg0) {
      const voiceEngine = callback(closure_2[15]).getVoiceEngine();
      const startRecordingRawSamples = voiceEngine.startRecordingRawSamples;
      if (null != startRecordingRawSamples) {
        startRecordingRawSamples.call(voiceEngine, arg0);
      }
    }
  };
  items[65] = {
    key: "stopRecordingRawSamples",
    value() {
      const voiceEngine = callback(closure_2[15]).getVoiceEngine();
      const stopRecordingRawSamples = voiceEngine.stopRecordingRawSamples;
      if (null != stopRecordingRawSamples) {
        stopRecordingRawSamples.call(voiceEngine);
      }
    }
  };
  items[66] = {
    key: "processBatchAudioFiles",
    value(arg0, arg1, arg2, arg3) {
      const voiceEngine = callback(closure_2[15]).getVoiceEngine();
      const processBatchAudioFiles = voiceEngine.processBatchAudioFiles;
      if (null != processBatchAudioFiles) {
        processBatchAudioFiles.call(voiceEngine, arg0, arg1, arg2, arg3);
      }
    }
  };
  items[67] = {
    key: "cancelBatchAudioProcessing",
    value() {
      const voiceEngine = callback(closure_2[15]).getVoiceEngine();
      const cancelBatchAudioProcessing = voiceEngine.cancelBatchAudioProcessing;
      if (null != cancelBatchAudioProcessing) {
        cancelBatchAudioProcessing.call(voiceEngine);
      }
    }
  };
  items[68] = {
    key: "rankRtcRegions",
    value(arg0) {
      let closure_0 = arg0;
      return new Promise((arg0, arg1) => {
        const rankRtcRegions = arg0(closure_2[15]).getVoiceEngine().rankRtcRegions;
        if (null != rankRtcRegions) {
          rankRtcRegions(arg0, (arg0) => arg0(arg0));
        } else {
          const _Error = Error;
          const error = new Error("RTC region latency test is not supported.");
          arg1(error);
        }
      });
    }
  };
  items[69] = {
    key: "createReplayConnection",
    value(arg0, arg1) {
      const self = this;
      const callback = this;
      const replay = callback2(closure_2[18]).createReplay(arg0, arg1);
      let tmp = null;
      if (null != replay) {
        replay.on(callback(closure_2[13]).BaseConnectionEvent.Destroy, (arg0) => {
          const connections = self.connections;
          connections.delete(arg0);
          if (self.connectionsEmpty()) {
            self(closure_2[15]).setProcessPriority(constants.NORMAL);
            const obj = self(closure_2[15]);
          }
        });
        const connections = self.connections;
        connections.add(replay);
        callback(closure_2[15]).setProcessPriority(constants.HIGH);
        self.emit(callback(closure_2[13]).MediaEngineEvent.Connection, replay);
        tmp = replay;
        const obj3 = callback(closure_2[15]);
      }
      return tmp;
    }
  };
  items[70] = {
    key: "setOnVideoContainerResized",
    value(onContainerResized) {
      callback2(closure_2[10]).onContainerResized = onContainerResized;
    }
  };
  items[71] = {
    key: "setMaxSyncDelayOverride",
    value: function setMaxSyncDelayOverride(arg0) {
      const setMaxSyncDelayOverride = callback(closure_2[15]).getVoiceEngine().setMaxSyncDelayOverride;
      if (null != setMaxSyncDelayOverride) {
        const result = setMaxSyncDelayOverride(arg0);
      }
    }
  };
  items[72] = {
    key: "applyMediaFilterSettings",
    value: function applyMediaFilterSettings(arg0) {
      let applyMediaFilterSettings;
      let applyMediaFilterSettingsWithCallback;
      const callback = arg0;
      const voiceEngine = callback(closure_2[15]).getVoiceEngine();
      ({ applyMediaFilterSettings, applyMediaFilterSettingsWithCallback } = voiceEngine);
      let closure_1 = applyMediaFilterSettingsWithCallback;
      if (null != applyMediaFilterSettingsWithCallback) {
        let resolved = new Promise((arg0) => {
          applyMediaFilterSettingsWithCallback(arg0, arg0);
        });
      } else {
        if (null != applyMediaFilterSettings) {
          const result = applyMediaFilterSettings(arg0);
        }
        resolved = Promise.resolve();
      }
      return resolved;
    }
  };
  items[73] = {
    key: "startLocalAudioRecording",
    value(arg0) {
      let closure_0 = arg0;
      return new Promise((arg0, arg1) => {
        const startLocalAudioRecording = arg0(closure_2[15]).getVoiceEngine().startLocalAudioRecording;
        if (null != startLocalAudioRecording) {
          const result = startLocalAudioRecording(arg0, (arg0) => {
            if (arg0) {
              arg0();
            } else {
              const _Error = Error;
              const error = new Error("Failed to start local audio recording.");
              arg1(error);
            }
          });
        } else {
          const _Error = Error;
          const error = new Error("startLocalAudioRecording is not supported.");
          arg1(error);
        }
      });
    }
  };
  items[74] = {
    key: "stopLocalAudioRecording",
    value(arg0) {
      const self = this;
      const callback = arg0;
      const voiceEngine = callback(closure_2[15]).getVoiceEngine();
      const stopLocalAudioRecording = voiceEngine.stopLocalAudioRecording;
      if (null != stopLocalAudioRecording) {
        stopLocalAudioRecording.call(voiceEngine, (arg0, arg1) => {
          arg0(arg0, arg1);
        });
      }
      let tmp3 = self.listenerCount(callback(closure_2[13]).MediaEngineEvent.VoiceActivity) > 0;
      if (tmp3) {
        tmp3 = null != callback(closure_2[15]).getVoiceEngine().setEmitVADLevel2;
        const obj2 = callback(closure_2[15]);
      }
      if (tmp3) {
        const voiceEngine1 = callback(closure_2[15]).getVoiceEngine();
        voiceEngine1.setEmitVADLevel2(true);
        const obj3 = callback(closure_2[15]);
      }
    }
  };
  items[75] = {
    key: "setHasFullbandPerformance",
    value(arg0) {
      const voiceEngine = callback(closure_2[15]).getVoiceEngine();
      const setHasFullbandPerformance = voiceEngine.setHasFullbandPerformance;
      if (null != setHasFullbandPerformance) {
        setHasFullbandPerformance.call(voiceEngine, arg0);
      }
    }
  };
  items[76] = {
    key: "getSupportedSecureFramesProtocolVersion",
    value() {
      const SupportedSecureFramesProtocolVersion = callback(closure_2[15]).getVoiceEngine().SupportedSecureFramesProtocolVersion;
      let num = 0;
      if (null != SupportedSecureFramesProtocolVersion) {
        num = SupportedSecureFramesProtocolVersion;
      }
      return num;
    }
  };
  items[77] = {
    key: "getSupportedBandwidthEstimationExperiments",
    value(arg0) {
      const voiceEngine = callback(closure_2[15]).getVoiceEngine();
      const getSupportedBandwidthEstimationExperiments = voiceEngine.getSupportedBandwidthEstimationExperiments;
      if (null != getSupportedBandwidthEstimationExperiments) {
        getSupportedBandwidthEstimationExperiments.call(voiceEngine, arg0);
      }
    }
  };
  items[78] = {
    key: "getMLSSigningKey",
    value(arg0, arg1) {
      let closure_0 = arg0;
      let closure_1 = arg1;
      return new Promise((staticAuthSessionId) => {
        const voiceEngine = staticAuthSessionId(closure_2[15]).getVoiceEngine();
        if (null != voiceEngine.getMLSSigningKey) {
          const mLSSigningKey = voiceEngine.getMLSSigningKey(staticAuthSessionId, arg1, (key, signature) => key({ key, signature }));
        } else {
          const _Error = Error;
          const error = new Error("NOT_IMPLEMENTED");
          arg1(error);
        }
      });
    }
  };
  items[79] = {
    key: "setSidechainCompression",
    value(arg0) {
      const voiceEngine = callback(closure_2[15]).getVoiceEngine();
      const setSidechainCompression = voiceEngine.setSidechainCompression;
      if (null != setSidechainCompression) {
        setSidechainCompression.call(voiceEngine, arg0);
      }
    }
  };
  items[80] = {
    key: "setSidechainCompressionStrength",
    value(arg0) {
      const diff = 100 - arg0;
      const tmp2 = callback9(diff, closure_14, closure_12);
      let obj = callback(closure_2[15]);
      const voiceEngine = obj.getVoiceEngine();
      const applySidechainCompressionSettings = voiceEngine.applySidechainCompressionSettings;
      if (null != applySidechainCompressionSettings) {
        obj = { threshold: tmp2, ratio: tmp3 };
        applySidechainCompressionSettings.call(voiceEngine, obj);
      }
    }
  };
  items[81] = {
    key: "setNativeDesktopVideoSourcePickerActive",
    value(arg0) {
      const voiceEngine = callback(closure_2[15]).getVoiceEngine();
      const setNativeDesktopVideoSourcePickerActive = voiceEngine.setNativeDesktopVideoSourcePickerActive;
      if (null != setNativeDesktopVideoSourcePickerActive) {
        setNativeDesktopVideoSourcePickerActive.call(voiceEngine, arg0);
      }
    }
  };
  items[82] = {
    key: "presentNativeScreenSharePicker",
    value(arg0) {
      const voiceEngine = callback(closure_2[15]).getVoiceEngine();
      const presentNativeScreenSharePicker = voiceEngine.presentNativeScreenSharePicker;
      if (null != presentNativeScreenSharePicker) {
        let str = "";
        if (null != arg0) {
          str = arg0;
        }
        presentNativeScreenSharePicker.call(voiceEngine, str);
      }
    }
  };
  items[83] = {
    key: "releaseNativeDesktopVideoSourcePickerStream",
    value() {
      const voiceEngine = callback(closure_2[15]).getVoiceEngine();
      const releaseNativeDesktopVideoSourcePickerStream = voiceEngine.releaseNativeDesktopVideoSourcePickerStream;
      if (null != releaseNativeDesktopVideoSourcePickerStream) {
        releaseNativeDesktopVideoSourcePickerStream.call(voiceEngine);
      }
    }
  };
  const obj82 = { key: "getSystemMicrophoneMode" };
  let closure_2 = callback(async () => {
    const voiceEngine = callback(closure_2[15]).getVoiceEngine();
    const getSystemMicrophoneMode = voiceEngine.getSystemMicrophoneMode;
    if (null != getSystemMicrophoneMode) {
      const callResult = getSystemMicrophoneMode.call(voiceEngine);
    }
    const tmp3 = yield callResult;
    let str = "";
    if (null != tmp3) {
      str = tmp3;
    }
    return str;
  });
  obj82.value = function getSystemMicrophoneMode() {
    return callback3(...arguments);
  };
  items[84] = obj82;
  items[85] = {
    key: "showSystemCaptureConfigurationUI",
    value(arg0) {
      const voiceEngine = callback(closure_2[15]).getVoiceEngine();
      const showSystemCaptureConfigurationUI = voiceEngine.showSystemCaptureConfigurationUI;
      if (null != showSystemCaptureConfigurationUI) {
        showSystemCaptureConfigurationUI.call(voiceEngine, arg0);
      }
    }
  };
  items[86] = {
    key: "fetchAsyncResources",
    value() {
      return Promise.resolve();
    }
  };
  const obj85 = { key: "getDeviceOSVolume" };
  let closure_1 = callback(async (arg0) => {
    const voiceEngine = callback(closure_2[15]).getVoiceEngine();
    const getDeviceOSVolume = voiceEngine.getDeviceOSVolume;
    if (null != getDeviceOSVolume) {
      const callResult = getDeviceOSVolume.call(voiceEngine, arg0);
    }
    return yield callResult;
  });
  obj85.value = function getDeviceOSVolume(guid) {
    return callback2(...arguments);
  };
  items[87] = obj85;
  const obj86 = { key: "getDeviceOSMuted" };
  let closure_0 = callback(async (arg0) => {
    const voiceEngine = callback(closure_2[15]).getVoiceEngine();
    const getDeviceOSMuted = voiceEngine.getDeviceOSMuted;
    if (null != getDeviceOSMuted) {
      const callResult = getDeviceOSMuted.call(voiceEngine, arg0);
    }
    return yield callResult;
  });
  obj86.value = function getDeviceOSMuted(guid) {
    return callback(...arguments);
  };
  items[88] = obj86;
  items[89] = {
    key: "getDeviceAudioEffects",
    value(arg0) {
      const voiceEngine = callback(closure_2[15]).getVoiceEngine();
      if (null != voiceEngine.getDeviceAudioEffects) {
        let deviceAudioEffects = voiceEngine.getDeviceAudioEffects(arg0);
      } else {
        const _Error = Error;
        const error = new Error("Device audio effect querying not supported");
        deviceAudioEffects = Promise.reject(error);
      }
      return deviceAudioEffects;
    }
  };
  items[90] = {
    key: "watchdogTick",
    value() {
      const callback = this;
      let closure_1 = false;
      const voiceEngine = callback(closure_2[15]).getVoiceEngine();
      voiceEngine.pingVoiceThread(() => {
        let closure_1 = true;
        self.consecutiveWatchdogFailures = 0;
      });
      const timerId = setTimeout(() => {
        if (!closure_1) {
          const sum = self.consecutiveWatchdogFailures + 1;
          self.consecutiveWatchdogFailures = sum;
          if (sum > 1) {
            self.emit(self(closure_2[13]).MediaEngineEvent.WatchdogTimeout);
          }
        }
        self.watchdogTick();
      }, closure_24);
    }
  };
  items[91] = {
    key: "connectionsEmpty",
    value() {
      return 0 === this.connections.size;
    }
  };
  const items1 = [
    {
      key: "supported",
      value() {
        return callback(closure_2[15]).supported();
      }
    }
  ];
  return callback2(MediaEngineNative, items, items1);
}(importDefault(dependencyMap[19]));
const result = arg1(dependencyMap[20]).fileFinishedImporting("../discord_common/js/packages/media-engine/native/index.tsx");

export default tmp5;
