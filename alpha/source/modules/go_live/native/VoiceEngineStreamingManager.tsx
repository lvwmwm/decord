// Module ID: 7862
// Function ID: 7863
// Name: VoiceEngineStreamingManager
// Dependencies: [5, 17, 6677, 4856, 4907, 1084, 2023, 3, 4851, 4832, 584, 1294, 7863, 2001, 2013, 38, 7864, 5746, 6680, 1496, 1381, 11634, 10790, 1125, 2]

// Module 7862 (VoiceEngineStreamingManager)
import LoggerDefault from "Logger" /* 3 */;
import react_native from "react-native" /* 17 */;
import _modDef38 from "module_38" /* 38 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import intl2 from "intl" /* 1125 */;
import PlatformUtils from "PlatformUtils" /* 1381 */;
import useWindowDimensions from "useWindowDimensions" /* 1496 */;
import inject from "inject" /* 2013 */;
import Constants2 from "Constants" /* 2023 */;
import UserSettings from "UserSettings" /* 4832 */;
import Timers from "Timers" /* 4851 */;
import StreamKeyUtils from "StreamKeyUtils" /* 6680 */;
import AndroidStopAndPauseVideoExperimentDefault from "AndroidStopAndPauseVideoExperiment" /* 7863 */;
import StreamActionCreators from "StreamActionCreators" /* 7864 */;
import PushNotificationDefault from "PushNotification" /* 10790 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6677 */;
import ChannelStore from "ChannelStore" /* 4856 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4907 */;
import Constants from "Constants" /* 1084 */;
import LifecycleManager from "LifecycleManager" /* 2001 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let allActiveStreams, c6, c7, channel, closure_4, streamKey, voiceEngine;

let c10;
let c9;
let metroImportAll;
let tmp2;
let unpackModuleId;
const useScreenshareUtils = tmp2(11634);
function handleThumbnailUpload() {
  return obj(...arguments);
}
let obj = function _handleThumbnailUpload() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let closure_0;
    let obj6;
    streamKey = arg0;
    let closure_1 = value;
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c5;
      try {
        let closure_2;
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_3 = tmp;
            closure_2 = tmp4;
            const DisableStreamPreviews = UserSettings.DisableStreamPreviews;
            const tmp29 = closure_1;
            const tmp30 = require;
            if (!DisableStreamPreviews.getSetting()) {
              timeout.stop();
              const _HermesInternal = HermesInternal;
              const combined = "" + metroImportAll + tmp29;
              const obj5 = { type: "STREAM_PREVIEW_FETCH_SUCCESS", streamKey, previewURL: combined };
              obj2 = DispatcherDefault;
              obj2.dispatch(obj5);
              c5 = 1;
              const HTTP = tmp30(tmp31[11]).HTTP;
              const request = { url: React4.STREAM_PREVIEW(streamKey), body: obj6, oldFormErrors: true, rejectWithError: false };
              const post = HTTP.post;
              obj6 = { thumbnail: combined };
              c6 = 2;
              c7 = 1;
              const obj7 = { value: post(request), done: false };
              return obj7;
            }
          }
        } else if (1 === c6) {
          c5 = 0;
          closure_2 = closure_4;
          closure_131_13.error("Failed to post stream preview", closure_2);
          closure_131_14.start(60000, () => closure_2_17(closure_1_0, closure_1_1));
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          c7 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          c5 = 0;
        }
        c7 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp21) {
        closure_4 = tmp21;
        if (0 === c5) {
          c7 = 3;
          throw tmp21;
        } else {
          c6 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
const Linking = react_native.Linking;
({ Base64JPEGPrefix: metroImportAll, Endpoints: c9, NOOP_NULL: c10, IOS_BUNDLE_ID: unpackModuleId } = Constants);
const getAppIntentScheme = Constants2.getAppIntentScheme;
let obj2 = new LoggerDefault("VoiceEngineStreamingManager");
obj2.enableNativeLogger(true);
const timeout = new Timers.Timeout();
const timeout1 = new Timers.Timeout();
let closure_16 = [];
const voiceChannelId = SelectedChannelStore.getVoiceChannelId();
class VoiceEngineStreamingManager extends LifecycleManager {
  #e;
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    if (_e in applyArgumentsResult) {
      throw new TypeError("Cannot initialize private field twice.");
    } else {
      applyArgumentsResult[(channelId) => {
        channelId = channelId.channelId;
        if (channelId !== channelId) {
          obj = closure_19;
          if (closure_19 != null) {
            obj.stopBroadcast();
          }
          allActiveStreams = allActiveStreams.getAllActiveStreams();
          const item = allActiveStreams.forEach((channelId) => {
            if (channelId.channelId !== channelId) {
              obj = StreamKeyUtils;
              const encodeStreamKeyResult = obj.encodeStreamKey(channelId);
              obj2 = StreamActionCreators;
              obj2.stopStream(encodeStreamKeyResult, false);
            }
          });
        }
      }] = tmp3;
      return applyArgumentsResult;
    }
  }
  _initialize() {
    let logger;
    let voiceChannelId;
    obj = inject;
    voiceEngine = obj.getVoiceEngine();
    let result = voiceEngine.setBroadcastRequestCallback(() => {
      let currentUserActiveStream;
      logger.log("Broadcast Requested");
      closure_1(closure_2[15])(null != closure_19, "Voice Engine should be initialized in callback");
      closure_16 = [];
      channel = channel.getChannel(voiceChannelId.getVoiceChannelId());
      const currentAppIntent = authStore.getCurrentAppIntent();
      obj2 = authStore;
      if (null != channel) {
        const guildId = channel.getGuildId();
        const obj3 = currentUserActiveStream(closure_2[16]);
        obj3.startStream(guildId, channel.id, { sourceId: "screen:0" });
        const tmp9 = currentUserActiveStream;
        currentUserActiveStream = obj2.getCurrentUserActiveStream();
        if (null != currentUserActiveStream) {
          const selectParticipant = tmp2(closure_2[17]).selectParticipant;
          const id = channel.id;
          closure_1(closure_2[17]);
          const tmp9Result = tmp9(closure_2[18]);
          const participant = selectParticipant(id, tmp9Result.encodeStreamKey(currentUserActiveStream));
          if ("android" === closure_19.platform) {
            closure_15.start(15000, () => {
              _modDef38(null != voiceEngine, "Voice Engine should be initialized in callback");
              obj = useWindowDimensions;
              size = obj.getWindowDimensions();
              const bound = Math.min(512 / size.width, 288 / size.height);
              const result = voiceEngine.setBroadcastThumbnailCallback(size.width * bound, size.height * bound, 300, (arg0) => {
                logger.log("Broadcast thumbnail of size:", arg0.length);
                obj = currentUserActiveStream(closure_2_2[18]);
                closure_2_17(obj.encodeStreamKey(closure_1_0), arg0);
              });
            });
          }
          if (null != currentAppIntent) {
            closure_4.openURL(closure_12(currentAppIntent));
          }
        }
      } else {
        let result = closure_19.stopBroadcastWithError(-1, "Not currently in a voice channel");
      }
    });
    const result1 = voiceEngine.setBroadcastFinishedCallback(() => {
      logger.log("Broadcast Finished");
      obj = PlatformUtils;
      if (obj.isAndroid()) {
        obj2 = AndroidStopAndPauseVideoExperimentDefault;
        const tmp4 = importDefault;
        if (obj2.getConfig({ location: "VoiceEngineStreamingManager" }).enabled) {
          tmp4(dependencyMap[15])(null != voiceEngine, "Voice Engine should be initialized in callback");
          voiceEngine.stopBroadcast();
        }
      }
      timeout.stop();
      timeout1.stop();
      const tmp2Result = useScreenshareUtils;
      const result = tmp2Result.handleCloseScreenshare();
    });
    const result2 = voiceEngine.setBroadcastAnnotatedCallback((arg0) => {
      logger.log("Broadcast Annotated:", arg0);
      if (arg0 !== closure_1_11) {
        const index = closure_1_16.indexOf(arg0, 0);
        if (index > -1) {
          closure_1_16.splice(index, 1);
        }
        closure_1_16.push(arg0);
      }
    });
    const result3 = voiceEngine.setBroadcastVisibilityChangedCallback((arg0) => {
      logger.log("Broadcast Visibility Changed:", arg0);
      obj = AndroidStopAndPauseVideoExperimentDefault;
      const tmp2 = dependencyMap;
      if (obj.getConfig({ location: "VoiceEngineStreamingManager" }).enabled) {
        const currentUserActiveStream = authStore.getCurrentUserActiveStream();
        if (null != currentUserActiveStream) {
          obj2 = require("StreamActionCreators");
          obj2.setStreamPaused(currentUserActiveStream, !arg0);
        }
      }
    });
    const result4 = voiceEngine.setBroadcastBlockedCallback(() => {
      let intl;
      logger.log("Broadcast Blocked");
      obj = { alertBody: intl.string(intl2.t.iYQlwv) };
      const presentLocalNotification = PushNotificationDefault.presentLocalNotification;
      PushNotificationDefault;
      intl = intl2.intl;
      const result = presentLocalNotification(obj);
    });
    let obj3 = DispatcherDefault;
    const subscription = obj3.subscribe("VOICE_CHANNEL_SELECT", this.#e);
  }
  _terminate() {
    obj = inject;
    voiceEngine = obj.getVoiceEngine();
    if (null != voiceEngine) {
      const result = voiceEngine.setBroadcastRequestCallback(authStore);
      const result1 = voiceEngine.setBroadcastFinishedCallback(authStore);
      const result2 = voiceEngine.setBroadcastAnnotatedCallback(authStore);
      const result3 = voiceEngine.setBroadcastBlockedCallback(authStore);
      const result4 = voiceEngine.setBroadcastVisibilityChangedCallback(authStore);
    }
    timeout.stop();
    timeout1.stop();
    const obj3 = DispatcherDefault;
    obj3.unsubscribe("VOICE_CHANNEL_SELECT", this.#e);
  }
  getApplicationNames() {
    return closure_16;
  }
}
const prototype = VoiceEngineStreamingManager.prototype;
const voiceEngineStreamingManager = new VoiceEngineStreamingManager();
let size = size_mod;
let result = size.fileFinishedImporting("modules/go_live/native/VoiceEngineStreamingManager.tsx");

export default voiceEngineStreamingManager;
