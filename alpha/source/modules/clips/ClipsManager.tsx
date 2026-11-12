// Module ID: 20642
// Function ID: 20643
// Name: clips/ClipsManager
// Dependencies: [32, 5, 6027, 1231, 502, 5092, 2130, 6008, 6739, 1385, 2136, 8778, 1072, 6740, 6012, 20643, 7816, 15693, 6033, 6745, 1252, 5068, 572, 20644, 20645, 15988, 2]

// Module 20642 (clips/ClipsManager)
import DispatcherDefault from "Dispatcher" /* 572 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import UserSettings from "UserSettings" /* 5068 */;
import Constants2 from "Constants" /* 6012 */;
import SystemAnalyticsStore from "SystemAnalyticsStore" /* 6027 */;
import BaseConnectionEvent from "BaseConnectionEvent" /* 6033 */;
import Constants3 from "Constants" /* 6740 */;
import StreamKeyUtils from "StreamKeyUtils" /* 6745 */;
import ClipsExperiment from "ClipsExperiment" /* 15693 */;
import AutoclipsExperimentDefault from "AutoclipsExperiment" /* 20644 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 5092 */;
import MediaEngineStore from "MediaEngineStore" /* 2130 */;
import RTCConnectionStore from "RTCConnectionStore" /* 6008 */;
import StreamRTCConnectionStore from "StreamRTCConnectionStore" /* 6739 */;
import UserStore from "UserStore" /* 1385 */;
import ClipsStore from "ClipsStore" /* 2136 */;
import ClipsConstants from "ClipsConstants" /* 8778 */;
import Constants from "Constants" /* 1072 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7816 */;
import size from "module_2" /* 2 */;

const StreamKeyUtilsAll = StreamKeyUtils;
let c1, c2, c5, c6, c7, was_hardware_classified;

let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
let closure_21;
let tmp;
const isClipsEnabled = tmp(15988);
function getCodecSurvey() {
  return obj(...arguments);
}
let obj = function _getCodecSurvey() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let JSON;
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c4;
      try {
        let parse;
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_3 = tmp;
            let closure_2 = tmp4;
            c4 = 1;
            const _JSON = JSON;
            parse = JSON.parse;
            mediaEngine = mediaEngine.getMediaEngine();
            c6 = 2;
            c7 = 1;
            const obj4 = { value: mediaEngine.getCodecSurvey(), done: false };
            return obj4;
          }
        } else if (1 === c6) {
          c4 = 0;
          let closure_0 = closure_5;
          closure_131_18.warn("Failed to get codec survey", closure_0);
          c7 = 3;
          return { value: null, done: true };
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c7 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          c4 = 0;
          c7 = 3;
          obj = { value: parse(value), done: true };
          return obj;
        }
      } catch (tmp15) {
        closure_5 = tmp15;
        if (0 === c4) {
          c7 = 3;
          throw tmp15;
        } else {
          c6 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _probeHardware() {
  obj = _asyncToGenerator(async () => {
    let obj2;
    let prop;
    let closure_4 = tmp;
    const items = [getCodecSurvey(), getSystemAnalyticsInfo()];
    let closure_0 = await all(items);
    let closure_1 = closure_132_4(closure_0, 2);
    let closure_2 = closure_1[0];
    let gpus = closure_1[1];
    if (gpus != null) {
      gpus = gpus.gpus;
    }
    let c0 = gpus;
    if (gpus == null) {
      c0 = null;
    }
    closure_4 = c0;
    closure_1 = closure_4;
    if (closure_4 == null) {
      closure_1 = [];
    }
    const mapped = closure_1.map((brand) => brand.brand);
    const gpuModels = mapped.filter((item) => null != item && "" !== item);
    if (closure_2 != null) {
      prop = closure_2.available_video_decoders;
    }
    if (null == prop) {
      const obj7 = { classification: closure_132_17.UNKNOWN, gpuModels, videoEncoders: [] };
      return obj7;
    }
    const available_video_encoders = closure_2.available_video_encoders;
    closure_2 = available_video_encoders;
    if (available_video_encoders == null) {
      closure_2 = [];
    }
    const videoEncoders = closure_2;
    obj = { classification: obj2.classifyClipsHardware(videoEncoders, closure_4), gpuModels, videoEncoders };
    obj2 = closure_132_0(closure_132_3[15]);
    return obj;
  });
  return obj(...arguments);
};
const getSystemAnalyticsInfo = SystemAnalyticsStore.getSystemAnalyticsInfo;
({ CLIPS_HARDWARE_CLASSIFICATION_VERSION: closure_15, CLIPS_DEFAULT_SETTINGS_VERSION: closure_16, ClipsHardwareClassification: closure_17, ClipsLogger: closure_18, CLIP_RUNTIME: closure_19 } = ClipsConstants);
({ AnalyticEvents: closure_20, RTCConnectionStates: closure_21 } = Constants);
const StreamTypes = Constants3.StreamTypes;
const Features = Constants2.Features;
class ClipsManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    applyArgumentsResult.classifyHardwarePromise = null;
    applyArgumentsResult.actions = {
      POST_CONNECTION_OPEN() {
        return require.handlePostConnectionOpen();
      },
      RTC_CONNECTION_FLAGS(arg0) {
        return require.handleRTCConnectionFlags(arg0);
      },
      RTC_CONNECTION_USERS_MERGED(userIds) {
        return require.handleRTCUsersUpdate(userIds);
      },
      CLIPS_INIT_FAILURE(arg0) {
        return require.handleClipsInitFailure(arg0);
      },
      CLIPS_SETTINGS_UPDATE(arg0) {
        return require.applyNativeClipsSettings(arg0);
      },
      CLIPS_ALLOW_VOICE_RECORDING_UPDATE() {
        return require.handleClipsAllowVoiceRecordingUpdate();
      },
      STREAM_START() {
        const mediaEngine = MediaEngineStore.getMediaEngine();
        if (!mediaEngine.supports(Features.UNIFIED_CAPTURE_BROKER)) {
          const result = require.applyNativeClipsSettings();
        }
      },
      STREAM_DELETE(arg0) {
        const mediaEngine = MediaEngineStore.getMediaEngine();
        if (!mediaEngine.supports(Features.UNIFIED_CAPTURE_BROKER)) {
          require.handleStreamEnded(arg0);
        }
      },
      STREAM_CLOSE(arg0) {
        const mediaEngine = MediaEngineStore.getMediaEngine();
        if (!mediaEngine.supports(Features.UNIFIED_CAPTURE_BROKER)) {
          require.handleStreamEnded(arg0);
        }
      },
      RUNNING_GAME_TOGGLE_DETECTION(arg0) {
        return require.handleClipsInitOnToggleDetection(arg0);
      },
      RUNNING_GAMES_CHANGE(arg0) {
        return require.handleClipsInitOnGamesChange(arg0);
      },
      CLIPS_RESTART() {
        return require.fireClipsInitEvent(true);
      },
      RTC_CONNECTION_VIDEO(arg0) {
        return require.handleRTCConnectionVideo(arg0);
      },
      RTC_CONNECTION_STATE(arg0) {
        return require.handleRTCConnectionState(arg0);
      }
    };
    return applyArgumentsResult;
  }
  handleRTCConnectionState(state) {
    let context;
    let streamKey;
    ({ context, streamKey } = state);
    state = state.state;
    obj = ClipsExperiment;
    if (obj.areClipsAvailable()) {
      if (state === constants3.RTC_CONNECTED) {
        const self = this;
        const id = AuthenticationStore.getId();
        if (BaseConnectionEvent.MediaEngineContextTypes.DEFAULT === context) {
          const result = self.applyUserVoiceRecording(id);
          const result1 = self.applyUserSoundboardRecording(id);
        } else if (BaseConnectionEvent.MediaEngineContextTypes.STREAM === context) {
          if (null != streamKey) {
            const tmpResult = StreamKeyUtils;
            if (tmpResult.decodeStreamKey(streamKey).ownerId === id) {
              const rTCConnection = StreamRTCConnectionStore.getRTCConnection(streamKey);
              if (null != rTCConnection) {
                self.applyStreamRecording(id, rTCConnection);
              }
            }
          }
        }
      }
    }
  }
  handleRTCUsersUpdate(userIds) {
    const self = this;
    userIds = userIds.userIds;
    if (userIds.context === BaseConnectionEvent.MediaEngineContextTypes.DEFAULT) {
      const item = userIds.forEach((item) => {
        const result = self.applyUserVoiceRecording(item);
        const result1 = self.applyUserSoundboardRecording(item);
      });
    }
  }
  handleRTCConnectionFlags(arg0) {
    let CALL;
    let channelId;
    let guildId;
    let userId;
    const self = this;
    ({ userId, guildId, channelId } = arg0);
    const result = this.maybeShowClipsWarning(userId);
    const result1 = this.applyUserVoiceRecording(userId);
    const result2 = this.applyUserSoundboardRecording(userId);
    const getRTCConnection = StreamRTCConnectionStore.getRTCConnection;
    const encodeStreamKey = StreamKeyUtilsAll.encodeStreamKey;
    StreamKeyUtilsAll;
    if (null != guildId) {
      CALL = StreamTypes.GUILD;
    } else {
      CALL = StreamTypes.CALL;
    }
    const rTCConnection = getRTCConnection(encodeStreamKey({ streamType: CALL, ownerId: userId, channelId, guildId }));
    if (null != rTCConnection) {
      self.applyStreamRecording(userId, rTCConnection);
    }
  }
  handleClipsInitFailure(arg0) {
    let applicationName;
    let errMsg;
    ({ applicationName, errMsg } = arg0);
    obj = AnalyticsUtilsDefault;
    const obj2 = { application_name: applicationName, error_message: errMsg, clip_runtime };
    obj.track(constants2.CLIPS_INIT_FAILURE, obj2);
  }
  maybeShowClipsWarning(userId) {
    const channelId = RTCConnectionStore.getChannelId();
    if (null != channelId) {
      const obj3 = ClipsStore;
      if (!ClipsStore.getClipsWarningShown(channelId)) {
        if (userId !== AuthenticationStore.getId()) {
          if (obj3.isClipsEnabledForUser(userId)) {
            const self = this;
            const result = this.shouldUseClipsInUseNotice();
            let setting = result;
            if (!setting) {
              const ClipsAllowVoiceRecording = UserSettings.ClipsAllowVoiceRecording;
              setting = ClipsAllowVoiceRecording.getSetting();
            }
            if (setting) {
              const obj2 = { type: "CLIPS_SHOW_CALL_WARNING", channelId };
              obj = DispatcherDefault;
              obj.dispatch(obj2);
              if (!result) {
                self.showClipsToast();
              }
            }
          }
        }
      }
    }
  }
  shouldUseClipsInUseNotice() {
    return false;
  }
  handleClipsAllowVoiceRecordingUpdate() {
    const self = this;
    const userIds = RTCConnectionStore.getUserIds();
    if (userIds != null) {
      const item = userIds.forEach((item) => self.maybeShowClipsWarning(item));
    }
  }
  handlePostConnectionOpen() {
    obj = ClipsExperiment;
    if (obj.isClientClipsCapable(MediaEngineStore)) {
      const self = this;
      const result = this.applyNativeClipsSettings();
      const tmpResult = ClipsExperiment;
      if (tmpResult.areClipsAvailable()) {
        const clipsFromStorage = self.loadClipsFromStorage();
        self.maybeStartNtpClock();
        const result1 = self.updateHardwareClassification();
      } else {
        const obj3 = DispatcherDefault;
        obj3.dispatch({ type: "CLIPS_APPLY_DEFAULT_SETTINGS_COMPLETE" });
      }
    }
  }
  applyClipsDefaultSettings(classification, clipsDefaultSettingsDecision) {
    let closure_0 = classification;
    let closure_1 = clipsDefaultSettingsDecision;
    const self = this;
    return (async (arg0, value) => {
      let tmp36;
      if (was_hardware_classified === 2) {
        was_hardware_classified = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          let decision;
          let previous_allow_voice_recording;
          let closure_5;
          let clipsEnabled;
          let clipsEnabledSource;
          let previous_autoclipping_enabled;
          was_hardware_classified = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              was_hardware_classified = 3;
              throw value;
            } else if (arg0 === 2) {
              was_hardware_classified = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              decision = tmp;
              classification = tmp2;
              previous_allow_voice_recording = undefined;
              closure_5 = undefined;
              clipsEnabled = ClipsStore.getState().clipsSettings.clipsEnabled;
              clipsEnabledSource = ClipsStore.getClipsDefaultSettingsState().clipsEnabledSource;
              previous_autoclipping_enabled = ClipsStore.getEnableAutoclipping();
              was_hardware_classified = null != ClipsStore.getHardwareClassification();
              const obj4 = { type: "CLIPS_APPLY_DEFAULT_SETTINGS", classification, decision };
              c2 = 1;
              const obj6 = decision(was_hardware_classified[22]);
              was_hardware_classified = 1;
              const obj5 = { value: obj6.dispatch(obj4), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            was_hardware_classified = 3;
            throw value;
          } else if (arg0 === 2) {
            was_hardware_classified = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            const result = closure_129_2.applyNativeClipsSettings();
            if (null != closure_129_1) {
              const ClipsAllowVoiceRecording = classification(was_hardware_classified[21]).ClipsAllowVoiceRecording;
              previous_allow_voice_recording = ClipsAllowVoiceRecording.getSetting();
              const clips = settings.settings.clips;
              let allowVoiceRecording;
              if (clips != null) {
                allowVoiceRecording = clips.allowVoiceRecording;
              }
              const tmp7 = null == allowVoiceRecording && !closure_129_1.allowVoiceRecording;
              closure_5 = tmp7;
              const tmp11 = closure_5;
              if (tmp11) {
                const result1 = closure_129_2.updateAllowVoiceRecordingDefault(false);
              }
              obj = { hardware_classification: closure_129_0, was_hardware_classified, nsfw_allowed: closure_129_1.nsfwAllowed, geo_allowed: closure_129_1.geoAllowed, default_clips_enabled: closure_129_1.clipsEnabled, version, previous_clips_enabled: clipsEnabled, previous_clips_enabled_source: clipsEnabledSource, actual_clips_enabled: ClipsStore.getState().clipsSettings.clipsEnabled, clips_enabled_source: ClipsStore.getClipsDefaultSettingsState().clipsEnabledSource, default_autoclipping_enabled: closure_129_1.enableAutoclipping, previous_autoclipping_enabled, actual_autoclipping_enabled: ClipsStore.getEnableAutoclipping(), default_allow_voice_recording: closure_129_1.allowVoiceRecording, previous_allow_voice_recording, actual_allow_voice_recording: tmp36, clip_runtime };
              const track = decision(was_hardware_classified[20]).track;
              const CLIPS_DEFAULT_SETTINGS_APPLIED = constants.CLIPS_DEFAULT_SETTINGS_APPLIED;
              const tmp19 = decision(was_hardware_classified[20]);
              tmp36 = previous_allow_voice_recording && !closure_5;
              track(CLIPS_DEFAULT_SETTINGS_APPLIED, obj);
            }
            was_hardware_classified = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp42) {
          was_hardware_classified = 3;
          throw tmp42;
        }
      }
    })();
  }
  updateAllowVoiceRecordingDefault(arg0) {
    let closure_0 = arg0;
    return (async (arg0, value) => {
      let v1;
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c2 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              const ClipsAllowVoiceRecording = tmp3(dependencyMap[21]).ClipsAllowVoiceRecording;
              c1 = 1;
              c2 = 1;
              const obj4 = { value: ClipsAllowVoiceRecording.updateSetting(tmp3), done: false };
              return obj4;
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            obj = c1(dependencyMap[22]);
            obj.dispatch({ type: "CLIPS_ALLOW_VOICE_RECORDING_UPDATE" });
            c2 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp11) {
          c2 = 3;
          throw tmp11;
        }
      }
    })();
  }
  getClipsDefaultSettingsDecision(classification) {
    if (classification === constants.UNKNOWN) {
      return null;
    } else if (ClipsStore.getClipsDefaultSettingsState().version >= authStore3) {
      return null;
    } else {
      const currentUser = UserStore.getCurrentUser();
      const obj4 = ClipsExperiment;
      if (obj4.isUserPremiumTypeForClipsEarlyAccess(currentUser)) {
        obj = AutoclipsExperimentDefault;
        const tmp2 = importDefault;
        if (obj.getConfig({ location: "getClipsDefaultSettingsDecision" }).enabled) {
          let nsfwAllowed;
          if (currentUser != null) {
            nsfwAllowed = currentUser.nsfwAllowed;
          }
          if (nsfwAllowed == null) {
            nsfwAllowed = null;
          }
          let tmp7 = tmp6 && classification === tmp.MEETS_AUTO_ENABLE;
          let allowDefaultOn = null;
          if (true === nsfwAllowed) {
            const tmp2Result = tmp2(20645);
            allowDefaultOn = tmp2Result.getConfig({ location: "getClipsDefaultSettingsDecision" }).allowDefaultOn;
          }
          const obj2 = { clipsEnabled: tmp7, enableAutoclipping: tmp7, allowVoiceRecording: true === allowDefaultOn, nsfwAllowed, geoAllowed: allowDefaultOn };
          if (tmp7) {
            tmp7 = true === allowDefaultOn;
          }
          return obj2;
        }
      }
      return null;
    }
  }
  loadClipsFromStorage() {

  }
  handleRTCConnectionVideo(arg0) {
    let channelId;
    let context;
    let guildId;
    let userId;
    ({ userId, guildId } = arg0);
    ({ context, channelId } = arg0);
    if (context === BaseConnectionEvent.MediaEngineContextTypes.STREAM) {
      const tmpResult = ClipsExperiment;
      if (tmpResult.isClientClipsCapable(MediaEngineStore)) {
        let CALL;
        const getRTCConnection = StreamRTCConnectionStore.getRTCConnection;
        const encodeStreamKey = StreamKeyUtilsAll.encodeStreamKey;
        StreamKeyUtilsAll;
        if (null != guildId) {
          CALL = StreamTypes.GUILD;
        } else {
          CALL = StreamTypes.CALL;
        }
        obj = { streamType: CALL, ownerId: userId, channelId, guildId };
        const rTCConnection = getRTCConnection(encodeStreamKey(obj));
        if (null != rTCConnection) {
          const self = this;
          this.applyStreamRecording(userId, rTCConnection);
        }
      }
    }
  }
  updateHardwareClassification() {
    const self = this;
    return (async (arg0, value) => {
      let closure_0;
      let closure_1;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        let c3;
        try {
          let hardwareClassification2;
          let clipsDefaultSettingsDecision;
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              hardwareClassification2 = undefined;
              clipsDefaultSettingsDecision = undefined;
              if (self.classifyHardwarePromise == null) {
                tmp30.classifyHardwarePromise = self.classifyHardware();
              }
              c4 = 1;
              c5 = 1;
              const obj5 = { value: self.classifyHardwarePromise, done: false };
              return obj5;
            }
          } else {
            if (1 === c4) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 3;
                const obj6 = { value, done: true };
                return obj6;
              } else {
                hardwareClassification2 = hardwareClassification.getHardwareClassification();
                clipsDefaultSettingsDecision = null;
                if (null != hardwareClassification2) {
                  clipsDefaultSettingsDecision = closure_129_0.getClipsDefaultSettingsDecision(hardwareClassification2);
                }
                if (null != hardwareClassification2) {
                  if (null != clipsDefaultSettingsDecision) {
                    c3 = 1;
                    c4 = 3;
                    c5 = 1;
                    const obj7 = { value: closure_129_0.applyClipsDefaultSettings(hardwareClassification2, clipsDefaultSettingsDecision), done: false };
                    return obj7;
                  }
                }
              }
            } else if (2 === c4) {
              c3 = 0;
              logger.error("Failed to apply clips default settings", closure_2);
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c5 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              c3 = 0;
            }
            const obj2 = tmp(c3[22]);
            obj2.dispatch({ type: "CLIPS_APPLY_DEFAULT_SETTINGS_COMPLETE" });
            c5 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp33) {
          closure_2 = tmp33;
          if (0 === c3) {
            c5 = 3;
            throw tmp33;
          } else {
            c4 = 2;
          }
        }
      }
    })();
  }
  classifyHardware() {
    const self = this;
    return (async (arg0, value) => {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        let c3;
        try {
          let closure_0;
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              let closure_1 = tmp;
              closure_0 = tmp4;
              c3 = 1;
              c4 = 2;
              c5 = 1;
              const obj4 = { value: self.classifyAndApplyHardware(), done: false };
              return obj4;
            }
          } else {
            if (1 === c4) {
              c3 = 0;
              closure_0 = closure_2;
              logger.error("Failed to classify hardware", closure_0);
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c5 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              c3 = 0;
            }
            c5 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp13) {
          closure_2 = tmp13;
          if (0 === c3) {
            c5 = 3;
            throw tmp13;
          } else {
            c4 = 1;
          }
        }
      }
    })();
  }
  classifyAndApplyHardware() {
    const self = this;
    return (async (arg0, value) => {
      let closure_0;
      function probeHardware() {
        return closure_1_26(...arguments);
      }
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          let closure_1;
          let tmp;
          let classification;
          let gpuModels;
          let videoEncoders;
          let hardwareClassification;
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              closure_1 = tmp4;
              tmp = undefined;
              classification = undefined;
              gpuModels = undefined;
              videoEncoders = undefined;
              hardwareClassification = undefined;
              c2 = 1;
              c3 = 1;
              const obj5 = { value: probeHardware(), done: false };
              return obj5;
            }
          } else {
            if (1 === c2) {
              if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                const obj6 = { value, done: true };
                return obj6;
              } else {
                tmp = value;
                classification = tmp.classification;
                gpuModels = tmp.gpuModels;
                videoEncoders = tmp.videoEncoders;
                hardwareClassification = ClipsStore.getHardwareClassification();
                let tmp8 = classification === constants.UNKNOWN && null != hardwareClassification && hardwareClassification !== constants.UNKNOWN;
                if (!tmp8) {
                  const tmp16 = classification === hardwareClassification && ClipsStore.getHardwareClassificationVersion() === version;
                  tmp8 = tmp16;
                }
                if (!tmp8) {
                  const obj7 = { classification, version, gpu_models: gpuModels, video_encoders: videoEncoders, clip_runtime };
                  const obj2 = closure_1(c3[20]);
                  obj2.track(constants2.CLIPS_HARDWARE_CLASSIFICATION, obj7);
                  c2 = 2;
                  c3 = 1;
                  const obj8 = { value: closure_129_0.applyClipsDefaultSettings(classification, closure_129_0.getClipsDefaultSettingsDecision(classification)), done: false };
                  return obj8;
                }
              }
            } else if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value, done: true };
              return obj;
            }
            c3 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp34) {
          c3 = 3;
          throw tmp34;
        }
      }
    })();
  }
  applyUserVoiceRecording(id) {
    obj = ClipsExperiment;
    if (obj.isClientClipsCapable(MediaEngineStore)) {
      const rTCConnection = RTCConnectionStore.getRTCConnection();
      const obj2 = RTCConnectionStore;
      if (null != rTCConnection) {
        const channel = ChannelStore.getChannel(obj2.getChannelId());
        let isGuildStageVoiceResult;
        if (channel != null) {
          isGuildStageVoiceResult = channel.isGuildStageVoice();
        }
        if (isGuildStageVoiceResult) {
          rTCConnection.setClipRecordUser(id, "audio", false);
        } else if (id !== AuthenticationStore.getId()) {
          rTCConnection.setClipRecordUser(id, "audio", ClipsStore.isVoiceRecordingAllowedForUser(id));
        } else {
          const setClipRecordUser = rTCConnection.setClipRecordUser;
          const tmpResult = isClipsEnabled;
          setClipRecordUser(id, "audio", tmpResult.isClipsEnabled());
        }
      }
    }
  }
  applyUserSoundboardRecording(id) {
    obj = ClipsExperiment;
    if (obj.isClientClipsCapable(MediaEngineStore)) {
      const rTCConnection = RTCConnectionStore.getRTCConnection();
      if (null != rTCConnection) {
        const setClipRecordUser = rTCConnection.setClipRecordUser;
        const tmpResult = isClipsEnabled;
        setClipRecordUser(id, "soundboard", tmpResult.isClipsEnabled());
      }
    }
  }
  applyStreamRecording(userId, rTCConnection) {
    obj = ClipsExperiment;
    if (obj.isClientClipsCapable(MediaEngineStore)) {
      if (AuthenticationStore.getId() === userId) {
        const tmpResult = isClipsEnabled;
        const isClipsEnabledResult = tmpResult.isClipsEnabled();
        rTCConnection.setClipRecordUser(userId, "audio", isClipsEnabledResult);
        rTCConnection.setClipRecordUser(userId, "video", isClipsEnabledResult);
      }
    }
  }
}
const prototype = ClipsManager.prototype;
let result = size.fileFinishedImporting("modules/clips/ClipsManager.tsx");

export default ClipsManager;
