// Module ID: 20013
// Function ID: 20014
// Name: clips/ClipsManager
// Dependencies: [5, 5783, 1231, 502, 4863, 2006, 5764, 7885, 1383, 2012, 8214, 1072, 6715, 5768, 7287, 15211, 5789, 6717, 1252, 4839, 572, 20014, 20015, 4825, 1375, 15210, 2]

// Module 20013 (clips/ClipsManager)
import DispatcherDefault from "Dispatcher" /* 572 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import PlatformUtils from "PlatformUtils" /* 1375 */;
import DiscordNativeDefault from "DiscordNative" /* 4825 */;
import UserSettings from "UserSettings" /* 4839 */;
import Constants2 from "Constants" /* 5768 */;
import SystemAnalyticsStore from "SystemAnalyticsStore" /* 5783 */;
import BaseConnectionEvent from "BaseConnectionEvent" /* 5789 */;
import Constants3 from "Constants" /* 6715 */;
import StreamKeyUtils from "StreamKeyUtils" /* 6717 */;
import ClipsExperiment from "ClipsExperiment" /* 15211 */;
import AutoclipsExperimentDefault from "AutoclipsExperiment" /* 20014 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 4863 */;
import MediaEngineStore from "MediaEngineStore" /* 2006 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5764 */;
import StreamRTCConnectionStore from "StreamRTCConnectionStore" /* 7885 */;
import UserStore from "UserStore" /* 1383 */;
import ClipsStore from "ClipsStore" /* 2012 */;
import ClipsConstants from "ClipsConstants" /* 8214 */;
import Constants from "Constants" /* 1072 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7287 */;
import size from "module_2" /* 2 */;

const StreamKeyUtilsAll = StreamKeyUtils;
let _self, c1, c2, c4, c5, was_hardware_classified;

let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
let closure_21;
let tmp;
const isClipsEnabled = tmp(15210);
const getSystemAnalyticsInfo = SystemAnalyticsStore.getSystemAnalyticsInfo;
({ WINDOWS_HARDWARE_AUTO_ENABLE_GPU_REGEX: closure_14, WINDOWS_HARDWARE_MINIMUM_GPU_REGEX: closure_15, CLIPS_HARDWARE_CLASSIFICATION_VERSION: closure_16, CLIPS_DEFAULT_SETTINGS_VERSION: closure_17, ClipsHardwareClassification: closure_18, CLIP_RUNTIME: closure_19 } = ClipsConstants);
({ AnalyticEvents: closure_20, RTCConnectionStates: closure_21 } = Constants);
const StreamTypes = Constants3.StreamTypes;
const Features = Constants2.Features;
class ClipsManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
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
    const obj = ClipsExperiment;
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
    const obj = AnalyticsUtilsDefault;
    const obj2 = { application_name: applicationName, error_message: errMsg, clip_runtime };
    obj.track(constants2.CLIPS_INIT_FAILURE, obj2);
  }
  maybeShowClipsWarning(userId) {
    const channelId = RTCConnectionStore.getChannelId();
    if (null != channelId) {
      const obj3 = ClipsStore;
      if (!ClipsStore.getClipsWarningShown(channelId)) {
        let setting = userId !== AuthenticationStore.getId() && obj3.isClipsEnabledForUser(userId);
        if (setting) {
          const ClipsAllowVoiceRecording = UserSettings.ClipsAllowVoiceRecording;
          setting = ClipsAllowVoiceRecording.getSetting();
        }
        if (setting) {
          const self = this;
          const obj2 = { type: "CLIPS_SHOW_CALL_WARNING", channelId };
          const obj = DispatcherDefault;
          obj.dispatch(obj2);
          this.showClipsToast();
        }
      }
    }
  }
  handleClipsAllowVoiceRecordingUpdate() {
    const self = this;
    const userIds = RTCConnectionStore.getUserIds();
    if (userIds != null) {
      const item = userIds.forEach((item) => self.maybeShowClipsWarning(item));
    }
  }
  handlePostConnectionOpen() {
    const self = this;
    const obj = ClipsExperiment;
    if (obj.isClientClipsCapable(MediaEngineStore)) {
      let result = self.applyNativeClipsSettings();
      const tmpResult = ClipsExperiment;
      if (tmpResult.areClipsAvailable()) {
        const clipsFromStorage = self.loadClipsFromStorage();
        self.maybeStartNtpClock();
        const hardwareClassification = ClipsStore.getHardwareClassification();
        if (null != hardwareClassification) {
          if (null != ClipsStore.getHardwareClassificationForDecoupled()) {
            if (ClipsStore.getHardwareClassificationVersion() === authStore4) {
              const clipsDefaultSettingsDecision = self.getClipsDefaultSettingsDecision(hardwareClassification);
              if (null != clipsDefaultSettingsDecision) {
                const result1 = self.applyClipsDefaultSettings(hardwareClassification, clipsDefaultSettingsDecision);
              }
            }
          }
        }
        const result2 = self.classifyHardwareAndTrack();
        result2.then((result) => {
          result = self.applyClipsDefaultSettings(result, self.getClipsDefaultSettingsDecision(result));
        });
      }
    }
  }
  applyClipsDefaultSettings(hardwareClassification, clipsDefaultSettingsDecision) {
    let closure_0 = hardwareClassification;
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
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          let decision;
          let classification;
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
              const obj6 = decision(was_hardware_classified[20]);
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
              const ClipsAllowVoiceRecording = classification(was_hardware_classified[19]).ClipsAllowVoiceRecording;
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
              const obj = { hardware_classification: closure_129_0, was_hardware_classified, nsfw_allowed: closure_129_1.nsfwAllowed, geo_allowed: closure_129_1.geoAllowed, default_clips_enabled: closure_129_1.clipsEnabled, version, previous_clips_enabled: clipsEnabled, previous_clips_enabled_source: clipsEnabledSource, actual_clips_enabled: ClipsStore.getState().clipsSettings.clipsEnabled, clips_enabled_source: ClipsStore.getClipsDefaultSettingsState().clipsEnabledSource, default_autoclipping_enabled: closure_129_1.enableAutoclipping, previous_autoclipping_enabled, actual_autoclipping_enabled: ClipsStore.getEnableAutoclipping(), default_allow_voice_recording: closure_129_1.allowVoiceRecording, previous_allow_voice_recording, actual_allow_voice_recording: tmp36, clip_runtime };
              const track = decision(was_hardware_classified[18]).track;
              const CLIPS_DEFAULT_SETTINGS_APPLIED = constants.CLIPS_DEFAULT_SETTINGS_APPLIED;
              const tmp19 = decision(was_hardware_classified[18]);
              tmp36 = previous_allow_voice_recording && !closure_5;
              track(CLIPS_DEFAULT_SETTINGS_APPLIED, obj);
            }
            was_hardware_classified = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
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
          return { value: "HermesInternal", done: "HermesInternal" };
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
              const ClipsAllowVoiceRecording = tmp3(dependencyMap[19]).ClipsAllowVoiceRecording;
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
            const obj = c1(dependencyMap[20]);
            obj.dispatch({ type: "CLIPS_ALLOW_VOICE_RECORDING_UPDATE" });
            c2 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp11) {
          c2 = 3;
          throw tmp11;
        }
      }
    })();
  }
  getClipsDefaultSettingsDecision(hardwareClassification) {
    if (ClipsStore.getClipsDefaultSettingsState().version >= closure_17) {
      return null;
    } else {
      const currentUser = UserStore.getCurrentUser();
      const obj4 = ClipsExperiment;
      if (obj4.isUserPremiumTypeForClipsEarlyAccess(currentUser)) {
        const obj = AutoclipsExperimentDefault;
        const tmp = importDefault;
        if (obj.getConfig({ location: "getClipsDefaultSettingsDecision" }).enabled) {
          let nsfwAllowed;
          if (currentUser != null) {
            nsfwAllowed = currentUser.nsfwAllowed;
          }
          if (nsfwAllowed == null) {
            nsfwAllowed = null;
          }
          let tmp6 = tmp5 && hardwareClassification === constants.MEETS_AUTO_ENABLE;
          let allowDefaultOn = null;
          if (true === nsfwAllowed) {
            const tmpResult = tmp(20015);
            allowDefaultOn = tmpResult.getConfig({ location: "getClipsDefaultSettingsDecision" }).allowDefaultOn;
          }
          const obj2 = { clipsEnabled: tmp6, enableAutoclipping: tmp6, allowVoiceRecording: true === allowDefaultOn, nsfwAllowed, geoAllowed: allowDefaultOn };
          if (tmp6) {
            tmp6 = true === allowDefaultOn;
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
        const obj = { streamType: CALL, ownerId: userId, channelId, guildId };
        const rTCConnection = getRTCConnection(encodeStreamKey(obj));
        if (null != rTCConnection) {
          const self = this;
          this.applyStreamRecording(userId, rTCConnection);
        }
      }
    }
  }
  classifyHardwareAndTrack() {
    const self = this;
    return (async (arg0, value) => {
      let closure_0;
      let closure_1;
      let tmp;
      let v1;
      if (c5 === 2) {
        c5 = 3;
        const str = "Generator functions may not be called on executing generators";
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        let c3;
        try {
          let gpuModels;
          let classification;
          c5 = 2;
          const tmp4 = c4;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              _self = undefined;
              gpuModels = undefined;
              classification = undefined;
              c3 = 1;
              c4 = 2;
              c5 = 1;
              const obj4 = {
                value: c4(function*() {
                          let gpus;
                          let gpuModels = tmp4;
                          const tmp = yield closure_2_5();
                          if (tmp != null) {
                            gpus = tmp.gpus;
                          }
                          if (null != gpus) {
                            const gpus1 = tmp.gpus;
                            const mapped = gpus1.map((brand) => brand.brand);
                            gpuModels = mapped.filter((item) => null != item && "" !== item);
                            const obj6 = { gpuModels, classification: tmp.classifyHardware(gpuModels) };
                            return obj6;
                          }
                          const processUtils = closure_2_1(closure_2_3[23]).processUtils;
                          yield processUtils.getSystemInfo();
                          const gpus2 = arg1.gpus;
                          const gpuModels2 = gpus2.map((model) => model.model);
                          const obj = { gpuModels: gpuModels2, classification: tmp.classifyHardware(gpuModels2) };
                          return obj;
                        })(),
                done: false
              };
              return obj4;
            }
          } else if (1 === tmp4) {
            c3 = 0;
            c5 = 3;
            const obj5 = { value: constants.UNKNOWN, done: true };
            return obj5;
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            let obj6 = { value, done: true };
            return obj6;
          } else {
            _self = value;
            gpuModels = _self.gpuModels;
            classification = _self.classification;
            const obj7 = tmp(c3[18]);
            const obj8 = { classification, version, gpu_models: gpuModels, clip_runtime };
            obj7.track(constants2.CLIPS_HARDWARE_CLASSIFICATION, obj8);
            c3 = 0;
            c5 = 3;
            let obj = { value: classification, done: true };
            return obj;
          }
        } catch (tmp9) {
          let closure_2 = tmp9;
          if (0 === c3) {
            c5 = 3;
            throw tmp9;
          } else {
            c4 = 1;
          }
        }
      }
    })();
  }
  classifyHardware(arr) {
    let regex;
    let regex2;
    const obj = PlatformUtils;
    if (obj.isWindows()) {
      let MEETS_AUTO_ENABLE;
      const someResult = arr.some((item) => regex.test(item));
      if (someResult) {
        MEETS_AUTO_ENABLE = tmp10.MEETS_AUTO_ENABLE;
      } else {
        MEETS_AUTO_ENABLE = tmp9 ? tmp10.MEETS_MINIMUM : tmp10.BELOW_MINIMUM;
      }
      return MEETS_AUTO_ENABLE;
    } else {
      let UNKNOWN;
      const tmpResult = PlatformUtils;
      if (tmpResult.isMac()) {
        let MEETS_MINIMUM;
        const app = DiscordNativeDefault.app;
        if ("arm64" === app.getAppArch()) {
          MEETS_MINIMUM = constants.MEETS_AUTO_ENABLE;
        } else {
          MEETS_MINIMUM = constants.MEETS_MINIMUM;
        }
        UNKNOWN = MEETS_MINIMUM;
      } else {
        UNKNOWN = constants.UNKNOWN;
      }
      return UNKNOWN;
    }
  }
  applyUserVoiceRecording(id) {
    const obj = ClipsExperiment;
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
    const obj = ClipsExperiment;
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
    const obj = ClipsExperiment;
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
