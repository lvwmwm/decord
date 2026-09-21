// Module ID: 4899
// Function ID: 4900
// Name: VoiceEngineStreamingManager
// Dependencies: [5, 17, 4780, 2045, 2099, 1078, 2008, 3, 2040, 2023, 577, 1275, 1986, 1998, 38, 4900, 4959, 4810, 1482, 10206, 9553, 1119, 2]

// Module 4899 (VoiceEngineStreamingManager)
import LoggerDefault from "Logger" /* 3 */;
import _modDef38 from "module_38" /* 38 */;
import DispatcherDefault from "Dispatcher" /* 577 */;
import util from "util" /* 1119 */;
import useWindowDimensions from "useWindowDimensions" /* 1482 */;
import inject from "inject" /* 1998 */;
import UserSettings from "UserSettings" /* 2023 */;
import StreamKeyUtils from "StreamKeyUtils" /* 4810 */;
import StreamActionCreators from "StreamActionCreators" /* 4900 */;
import PushNotificationDefault from "PushNotification" /* 9553 */;
import useScreenshareUtils from "useScreenshareUtils" /* 10206 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4780 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2099 */;
import LifecycleManager from "LifecycleManager" /* 1986 */;

require = fn;
function handleThumbnailUpload() {
  const self = this;
  const apply = closure_18.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_18 = async function _handleThumbnailUpload(arg0, value) {
  if (c7 === 2) {
    c7 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj3 = { value, done: true };
      return obj3;
    } else {
      return { value: "IconComponent", done: null };
    }
  } else {
    try {
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
          closure_3 = tmp3;
          closure_2 = tmp7;
          closure_130_0 = closure_0;
          closure_130_1 = closure_1;
          const DisableStreamPreviews = UserSettings.DisableStreamPreviews;
          if (!DisableStreamPreviews.getSetting()) {
            timeout.stop();
            const _HermesInternal = HermesInternal;
            const combined = "" + closure_2_8 + tmp33;
            const obj5 = { type: "STREAM_PREVIEW_FETCH_SUCCESS", streamKey: tmp32, previewURL: combined };
            require("Dispatcher").dispatch(obj5);
            c5 = 1;
            const HTTP = tmp34(tmp35[11]).HTTP;
            const request = { url: options.STREAM_PREVIEW(tmp32), body: null, oldFormErrors: true, rejectWithError: false };
            const obj6 = { thumbnail: combined };
            request.body = obj6;
            c6 = 2;
            c7 = 1;
            const obj7 = { value: HTTP.post(request), done: false };
            return obj7;
          }
          tmp33 = closure_1;
          tmp34 = require;
        }
      } else {
        if (1 === tmp7) {
          c5 = 0;
          closure_130_2 = closure_4;
          closure_131_13.error("Failed to post stream preview", closure_130_2);
          closure_131_14.start(60000, () => closure_2_17(closure_1_0, closure_1_1));
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 !== 2) {
          c5 = 0;
        }
        c5 = 0;
        c7 = 3;
        const obj = { value, done: true };
        return obj;
      }
      c7 = 3;
    } catch (tmp24) {
      closure_4 = tmp24;
      if (tmp4 === c5) {
        c7 = tmp2;
        throw tmp24;
      } else {
        c6 = tmp;
      }
    }
  }
};
const Linking = fn(17).Linking;
const Constants = fn(1078);
({ Base64JPEGPrefix: closure_8, Endpoints: closure_9, NOOP_NULL: c10, IOS_BUNDLE_ID: closure_11 } = Constants);
const getAppIntentScheme = fn(2008).getAppIntentScheme;
let obj2 = new LoggerDefault("VoiceEngineStreamingManager");
obj2.enableNativeLogger(true);
const timeout = new fn(2040).Timeout();
const timeout1 = new fn(2040).Timeout();
let closure_16 = [];
const voiceChannelId = SelectedChannelStore.getVoiceChannelId();
class VoiceEngineStreamingManager extends tmp6 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    if (_e in applyArgumentsResult) {
      str = "Cannot initialize private field twice.";
      throw new TypeError("Cannot initialize private field twice.");
    } else {
      applyArgumentsResult[(channelId) => {
        channelId = channelId.channelId;
        if (channelId !== channelId) {
          if (closure_19 != null) {
            obj.stopBroadcast();
          }
          allActiveStreams = allActiveStreams.getAllActiveStreams();
          const item = allActiveStreams.forEach((channelId) => {
            if (channelId.channelId !== channelId) {
              const encodeStreamKeyResult = StreamKeyUtils.encodeStreamKey(channelId);
              StreamActionCreators.stopStream(encodeStreamKeyResult, false);
            }
          });
          obj = closure_19;
        }
      }] = tmp3;
      return applyArgumentsResult;
    }
  }
}
const prototype = VoiceEngineStreamingManager.prototype;
prototype["_initialize"] = function _initialize() {
  voiceEngine = inject.getVoiceEngine();
  let result = voiceEngine.setBroadcastRequestCallback(() => {
    logger.log("Broadcast Requested");
    closure_1(38)(null != closure_19, "Voice Engine should be initialized in callback");
    closure_16 = [];
    channel = channel.getChannel(voiceChannelId.getVoiceChannelId());
    currentAppIntent = currentAppIntent.getCurrentAppIntent();
    if (null != channel) {
      const guildId = channel.getGuildId();
      currentUserActiveStream(4900).startStream(guildId, channel.id, { sourceId: "screen:0" });
      currentUserActiveStream = currentAppIntent.getCurrentUserActiveStream();
      if (null != currentUserActiveStream) {
        const tmp2Result = closure_1(4959);
        const participant = tmp2Result.selectParticipant(channel.id, tmp9(4810).encodeStreamKey(currentUserActiveStream));
        if ("android" === closure_19.platform) {
          closure_15.start(15000, () => {
            _modDef38(null != voiceEngine, "Voice Engine should be initialized in callback");
            const size = useWindowDimensions.getWindowDimensions();
            const bound = Math.min(512 / size.width, 288 / size.height);
            const result = voiceEngine.setBroadcastThumbnailCallback(size.width * bound, size.height * bound, 300, (arg0) => {
              logger.log("Broadcast thumbnail of size:", arg0.length);
              closure_2_17(currentUserActiveStream(dependencyMap[17]).encodeStreamKey(closure_1_0), arg0);
            });
          });
        }
        if (null != currentAppIntent) {
          closure_4.openURL(closure_12(currentAppIntent));
        }
        const tmp9Result = tmp9(4810);
      }
      const obj3 = currentUserActiveStream(4900);
      tmp9 = currentUserActiveStream;
    } else {
      let result = closure_19.stopBroadcastWithError(-1, "Not currently in a voice channel");
    }
  });
  const result1 = voiceEngine.setBroadcastFinishedCallback(() => {
    logger.log("Broadcast Finished");
    timeout.stop();
    timeout1.stop();
    const result = useScreenshareUtils.handleCloseScreenshare();
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
  const result3 = voiceEngine.setBroadcastBlockedCallback(() => {
    logger.log("Broadcast Blocked");
    obj2 = { alertBody: null };
    const intl = util.intl;
    obj2.alertBody = intl.string(util.t.iYQlwv);
    const result = PushNotificationDefault.presentLocalNotification(obj2);
  });
  const subscription = DispatcherDefault.subscribe("VOICE_CHANNEL_SELECT", this.#e);
};
prototype["_terminate"] = function _terminate() {
  voiceEngine = inject.getVoiceEngine();
  if (null != voiceEngine) {
    const result = voiceEngine.setBroadcastRequestCallback(v65535);
    const result1 = voiceEngine.setBroadcastFinishedCallback(v65535);
    const result2 = voiceEngine.setBroadcastAnnotatedCallback(v65535);
    const result3 = voiceEngine.setBroadcastBlockedCallback(v65535);
  }
  timeout.stop();
  timeout1.stop();
  DispatcherDefault.unsubscribe("VOICE_CHANNEL_SELECT", this.#e);
};
prototype["getApplicationNames"] = function getApplicationNames() {
  return closure_16;
};
const voiceEngineStreamingManager = new VoiceEngineStreamingManager();
let size = fn(2);
let result = size.fileFinishedImporting("modules/go_live/native/VoiceEngineStreamingManager.tsx");

export default voiceEngineStreamingManager;
