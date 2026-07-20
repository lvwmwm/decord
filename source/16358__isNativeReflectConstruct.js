// Module ID: 16358
// Function ID: 126278
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 16358 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
const getSystemAnalyticsInfo = arg1(dependencyMap[6]).getSystemAnalyticsInfo;
let closure_11 = importDefault(dependencyMap[7]);
let closure_12 = importDefault(dependencyMap[8]);
let closure_13 = importDefault(dependencyMap[9]);
let closure_14 = importDefault(dependencyMap[10]);
let closure_15 = importDefault(dependencyMap[11]);
({ WINDOWS_HARDWARE_AUTO_ENABLE_GPU_REGEX: closure_16, WINDOWS_HARDWARE_MINIMUM_GPU_REGEX: closure_17, CLIPS_HARDWARE_CLASSIFICATION_VERSION: closure_18 } = arg1(dependencyMap[12]));
const tmp2 = arg1(dependencyMap[12]);
({ AnalyticEvents: closure_19, RTCConnectionStates: closure_20 } = arg1(dependencyMap[13]));
const StreamTypes = arg1(dependencyMap[14]).StreamTypes;
const tmp3 = arg1(dependencyMap[13]);
const tmp4 = (arg0) => {
  class ClipsManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_5(this, ClipsManager);
      items1 = [...items];
      obj = closure_8(ClipsManager);
      tmp2 = closure_7;
      if (closure_22()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_8;
        constructResult = Reflect.construct(obj, items1, closure_8(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      apply = tmp2Result;
      tmp2Result.actions = {
        POST_CONNECTION_OPEN() {
              return tmp2Result.handlePostConnectionOpen();
            },
        RTC_CONNECTION_FLAGS(arg0) {
              return tmp2Result.handleRTCConnectionFlags(arg0);
            },
        RTC_CONNECTION_USERS_MERGED(arg0) {
              return tmp2Result.handleRTCUsersUpdate(arg0);
            },
        CLIPS_INIT_FAILURE(errMsg) {
              return tmp2Result.handleClipsInitFailure(errMsg);
            },
        CLIPS_SETTINGS_UPDATE(arg0) {
              return tmp2Result.applyNativeClipsSettings(arg0);
            },
        CLIPS_ALLOW_VOICE_RECORDING_UPDATE() {
              return tmp2Result.handleClipsAllowVoiceRecordingUpdate();
            },
        STREAM_START() {
              return tmp2Result.applyNativeClipsSettings();
            },
        STREAM_DELETE(arg0) {
              return tmp2Result.handleStreamEnded(arg0);
            },
        STREAM_CLOSE(arg0) {
              return tmp2Result.handleStreamEnded(arg0);
            },
        RUNNING_GAME_TOGGLE_DETECTION(arg0) {
              return tmp2Result.handleClipsInitOnToggleDetection(arg0);
            },
        RUNNING_GAMES_CHANGE(arg0) {
              return tmp2Result.handleClipsInitOnGamesChange(arg0);
            },
        CLIPS_RESTART() {
              return tmp2Result.fireClipsInitEvent(true);
            },
        RTC_CONNECTION_VIDEO(arg0) {
              return tmp2Result.handleRTCConnectionVideo(arg0);
            },
        RTC_CONNECTION_STATE(arg0) {
              return tmp2Result.handleRTCConnectionState(arg0);
            }
      };
      return tmp2Result;
    }
  }
  const importDefault = ClipsManager;
  callback3(ClipsManager, arg0);
  let obj = {
    key: "handleRTCConnectionState",
    value(state) {
      let context;
      let streamKey;
      const self = this;
      ({ context, streamKey } = state);
      if (obj.areClipsAvailable()) {
        if (state.state === constants2.RTC_CONNECTED) {
          const id = store.getId();
          if (callback(closure_3[16]).MediaEngineContextTypes.DEFAULT === context) {
            const result = self.applyUserVoiceRecording(id);
            const result1 = self.applyUserSoundboardRecording(id);
          } else if (callback(closure_3[16]).MediaEngineContextTypes.STREAM === context) {
            if (null != streamKey) {
              if (obj2.decodeStreamKey(streamKey).ownerId === id) {
                const rTCConnection = store2.getRTCConnection(streamKey);
                if (null != rTCConnection) {
                  self.applyStreamRecording(id, rTCConnection);
                }
              }
              const obj2 = callback(closure_3[17]);
            }
          }
        }
      }
    }
  };
  const items = [obj, , , , , , , , , , , , , ];
  obj = {
    key: "handleRTCUsersUpdate",
    value(userIds) {
      const callback = this;
      userIds = userIds.userIds;
      if (userIds.context === callback(closure_3[16]).MediaEngineContextTypes.DEFAULT) {
        const item = userIds.forEach((arg0) => {
          const result = self.applyUserVoiceRecording(arg0);
          const result1 = self.applyUserSoundboardRecording(arg0);
        });
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "handleRTCConnectionFlags",
    value(arg0) {
      let channelId;
      let guildId;
      let userId;
      const self = this;
      ({ userId, guildId, channelId } = arg0);
      const result = this.maybeShowClipsWarning(userId);
      const result1 = this.applyUserVoiceRecording(userId);
      const result2 = this.applyUserSoundboardRecording(userId);
      let obj = callback2(closure_3[17]);
      obj = {};
      if (null != guildId) {
        let CALL = constants3.GUILD;
      } else {
        CALL = constants3.CALL;
      }
      obj.streamType = CALL;
      obj.ownerId = userId;
      obj.channelId = channelId;
      obj.guildId = guildId;
      const rTCConnection = store2.getRTCConnection(obj.encodeStreamKey(obj));
      if (null != rTCConnection) {
        self.applyStreamRecording(userId, rTCConnection);
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "handleClipsInitFailure",
    value(arg0) {
      let applicationName;
      let errMsg;
      ({ applicationName, errMsg } = arg0);
      let obj = ClipsManager(closure_3[18]);
      obj = { application_name: applicationName, error_message: errMsg, clip_runtime: callback(closure_3[19]).getClipsRuntime("handleClipsInitFailure") };
      obj.track(constants.CLIPS_INIT_FAILURE, obj);
    }
  };
  items[4] = {
    key: "maybeShowClipsWarning",
    value(arg0) {
      const self = this;
      const channelId = authStore.getChannelId();
      if (null != channelId) {
        if (!authStore2.getClipsWarningShown(channelId)) {
          let result = arg0 !== store.getId();
          if (result) {
            result = authStore2.isClipsEnabledForUser(arg0);
          }
          if (result) {
            const ClipsAllowVoiceRecording = callback(closure_3[20]).ClipsAllowVoiceRecording;
            result = ClipsAllowVoiceRecording.getSetting();
          }
          if (result) {
            let obj = ClipsManager(closure_3[21]);
            obj = { type: "CLIPS_SHOW_CALL_WARNING", channelId };
            obj.dispatch(obj);
            self.showClipsToast();
          }
        }
      }
    }
  };
  items[5] = {
    key: "handleClipsAllowVoiceRecordingUpdate",
    value() {
      let closure_0 = this;
      const userIds = authStore.getUserIds();
      if (null != userIds) {
        const item = userIds.forEach((arg0) => self.maybeShowClipsWarning(arg0));
      }
    }
  };
  items[6] = {
    key: "handlePostConnectionOpen",
    value() {
      const self = this;
      if (ClipsManager(closure_3[22])(closure_12)) {
        const result = self.applyNativeClipsSettings();
        if (obj.areClipsAvailable()) {
          const clipsFromStorage = self.loadClipsFromStorage();
          let tmp7 = null != authStore2.getHardwareClassification();
          if (tmp7) {
            tmp7 = null != authStore2.getHardwareClassificationForDecoupled();
          }
          if (tmp7) {
            tmp7 = authStore2.getHardwareClassificationVersion() === closure_18;
          }
          if (!tmp7) {
            const result1 = self.classifyHardwareAndTrack();
            result1.then((classification) => {
              let obj = callback(closure_3[21]);
              obj = { type: "CLIPS_CLASSIFY_HARDWARE", classification };
              obj.dispatch(obj);
            });
          }
        }
        const obj = callback(closure_3[15]);
      }
    }
  };
  items[7] = {
    key: "loadClipsFromStorage",
    value() {

    }
  };
  items[8] = {
    key: "handleRTCConnectionVideo",
    value(arg0) {
      let channelId;
      let context;
      let guildId;
      let userId;
      const self = this;
      ({ userId, guildId } = arg0);
      ({ context, channelId } = arg0);
      if (context === callback(closure_3[16]).MediaEngineContextTypes.STREAM) {
        if (ClipsManager(closure_3[22])(closure_12)) {
          let obj = callback2(closure_3[17]);
          obj = {};
          if (null != guildId) {
            let CALL = constants3.GUILD;
          } else {
            CALL = constants3.CALL;
          }
          obj.streamType = CALL;
          obj.ownerId = userId;
          obj.channelId = channelId;
          obj.guildId = guildId;
          const rTCConnection = store2.getRTCConnection(obj.encodeStreamKey(obj));
          if (null != rTCConnection) {
            self.applyStreamRecording(userId, rTCConnection);
          }
        }
      }
    }
  };
  const obj7 = { key: "classifyHardwareAndTrack" };
  // CreateGeneratorClosureLongIndex (0x67)
  let closure_0 = callback(tmp);
  obj7.value = function classifyHardwareAndTrack() {
    return callback(...arguments);
  };
  items[9] = obj7;
  items[10] = {
    key: "classifyHardware",
    value(arr) {
      if (obj.isWindows()) {
        const someResult = arr.some((arg0) => regex.test(arg0));
        const ClipsHardwareClassification = callback(closure_3[24]).ClipsHardwareClassification;
        if (someResult) {
          let MEETS_AUTO_ENABLE = ClipsHardwareClassification.MEETS_AUTO_ENABLE;
        } else {
          MEETS_AUTO_ENABLE = someResult1 ? ClipsHardwareClassification.MEETS_MINIMUM : ClipsHardwareClassification.BELOW_MINIMUM;
        }
        return MEETS_AUTO_ENABLE;
      } else {
        if (obj2.isMac()) {
          const app = ClipsManager(closure_3[23]).app;
          if ("arm64" === app.getAppArch()) {
            let MEETS_MINIMUM = callback(closure_3[24]).ClipsHardwareClassification.MEETS_AUTO_ENABLE;
          } else {
            MEETS_MINIMUM = callback(closure_3[24]).ClipsHardwareClassification.MEETS_MINIMUM;
          }
        } else {
          return callback(closure_3[24]).ClipsHardwareClassification.UNKNOWN;
        }
        const obj2 = callback(closure_3[25]);
      }
    }
  };
  items[11] = {
    key: "applyUserVoiceRecording",
    value(arg0) {
      if (ClipsManager(closure_3[22])(closure_12)) {
        const rTCConnection = authStore.getRTCConnection();
        if (null != rTCConnection) {
          if (arg0 !== store.getId()) {
            rTCConnection.setClipRecordUser(arg0, "audio", authStore2.isVoiceRecordingAllowedForUser(arg0));
          } else {
            rTCConnection.setClipRecordUser(arg0, "audio", callback(closure_3[26]).isClipsEnabled());
            const obj2 = callback(closure_3[26]);
          }
        }
      }
    }
  };
  items[12] = {
    key: "applyUserSoundboardRecording",
    value(arg0) {
      if (ClipsManager(closure_3[22])(closure_12)) {
        const rTCConnection = authStore.getRTCConnection();
        if (null != rTCConnection) {
          rTCConnection.setClipRecordUser(arg0, "soundboard", callback(closure_3[26]).isClipsEnabled());
          const obj2 = callback(closure_3[26]);
        }
      }
    }
  };
  items[13] = {
    key: "applyStreamRecording",
    value(arg0, setClipRecordUser) {
      if (ClipsManager(closure_3[22])(closure_12)) {
        if (store.getId() === arg0) {
          const isClipsEnabledResult = callback(closure_3[26]).isClipsEnabled();
          setClipRecordUser.setClipRecordUser(arg0, "audio", isClipsEnabledResult);
          setClipRecordUser.setClipRecordUser(arg0, "video", isClipsEnabledResult);
          const obj = callback(closure_3[26]);
        }
      }
    }
  };
  return callback2(ClipsManager, items);
}(importDefault(dependencyMap[27]));
const result = arg1(dependencyMap[28]).fileFinishedImporting("modules/clips/ClipsManager.tsx");

export default tmp4;
